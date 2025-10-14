/**
 * Detail Table Drag Selection Enhancement
 * 實現拖拽選擇功能，允許用戶按住左鍵拖拽選擇表格字段
 */

class DetailTableDragSelector {
    constructor() {
        this.isDragging = false;
        this.isFillDragging = false; // 是否正在拖拽填充
        this.startCell = null;
        this.endCell = null;
        this.fillStartCell = null; // 填充起始單元格
        this.fillEndCell = null; // 填充結束單元格
        this.dragStartPosition = null;
        this.selectedCells = new Set();
        this.currentTable = null;
        this.globalEventsAttached = false;
        this.clickedInput = null; // 記錄點擊的輸入字段
        this.copiedData = null; // 複製的數據
        this.lastClickTime = 0; // 記錄上次點擊時間
        this.clickTimeout = null; // 點擊超時
        
        this.init();
    }
    
    init() {
        // 等待DOM載入完成後初始化
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.attachEventListeners());
        } else {
            this.attachEventListeners();
        }
    }
    
    attachEventListeners() {
        // 為所有詳細表格容器添加事件監聽器
        const detailTables = document.querySelectorAll('.detail-table-container table');
        
        detailTables.forEach(table => {
            this.attachTableEvents(table);
        });
        
        // 監聽新表格的添加（動態內容）
        this.observeNewTables();
    }
    
    observeNewTables() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        // 檢查是否是新添加的表格
                        const tables = node.querySelectorAll ? node.querySelectorAll('.detail-table-container table') : [];
                        tables.forEach(table => this.attachTableEvents(table));
                        
                        // 如果節點本身就是表格
                        if (node.classList && node.classList.contains('detail-table')) {
                            this.attachTableEvents(node);
                        }
                    }
                });
            });
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
    
    attachTableEvents(table) {
        // 防止重複添加事件監聽器
        if (table.dataset.dragSelectorAttached) return;
        table.dataset.dragSelectorAttached = 'true';
        
        // 使用事件委託在表格級別監聽事件
        table.addEventListener('mousedown', (e) => {
            const cell = e.target.closest('td');
            if (cell && cell.closest('table') === table) {
                this.handleMouseDown(e, cell);
            }
        });
        
        table.addEventListener('mousemove', (e) => {
            const cell = e.target.closest('td');
            if (cell && cell.closest('table') === table && this.isDragging) {
                this.handleMouseMove(e, cell);
            }
        });
        
        table.addEventListener('mouseup', (e) => {
            const cell = e.target.closest('td');
            if (cell && cell.closest('table') === table && this.isDragging) {
                this.handleMouseUp(e, cell);
            }
        });
        
        // 雙擊事件處理
        table.addEventListener('dblclick', (e) => {
            const cell = e.target.closest('td');
            if (cell && cell.closest('table') === table) {
                this.handleDoubleClick(e, cell);
            }
        });
        
        // 防止默認的文本選擇行為
        table.addEventListener('selectstart', (e) => {
            if (this.isDragging) {
                e.preventDefault();
            }
        });
        
        // 全局鼠標事件（處理跨單元格拖拽和填充拖拽）
        if (!this.globalEventsAttached) {
            document.addEventListener('mousemove', (e) => {
                this.handleGlobalMouseMove(e);
                this.handleFillGlobalMouseMove(e);
            });
            document.addEventListener('mouseup', (e) => {
                this.handleGlobalMouseUp(e);
                this.finishFillDragging();
            });
            
            // 全局鍵盤事件（處理複製貼上）
            document.addEventListener('keydown', (e) => {
                this.handleKeyDown(e);
            });
            
            this.globalEventsAttached = true;
        }
    }
    
    handleMouseDown(e, cell) {
        // 只處理左鍵
        if (e.button !== 0) return;
        
        // 如果點擊的是藍色圓點區域（右下角），啟動填充拖拽
        if (e.target === cell && e.offsetX > cell.offsetWidth - 10 && e.offsetY > cell.offsetHeight - 10) {
            this.handleFillMouseDown(e, cell);
            return;
        }
        
        // 檢查是否點擊了按鈕
        if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
            return;
        }
        
        // 檢查是否按住了 Ctrl/Cmd 鍵（多選模式）
        if (e.ctrlKey || e.metaKey) {
            return; // 讓現有的多選邏輯處理
        }
        
        // 檢查是否點擊的是輸入字段
        const clickedElement = e.target;
        const isInputField = (clickedElement.tagName === 'INPUT' || 
                             clickedElement.tagName === 'TEXTAREA' || 
                             clickedElement.tagName === 'SELECT');
        
        if (isInputField) {
            // 如果輸入字段已經有焦點，立即開始拖拽選擇
            if (clickedElement === document.activeElement) {
                this.startDragSelection(e);
                return;
            }
            // 記錄輸入字段，但不阻止默認行為（允許正常聚焦）
            this.clickedInput = clickedElement;
        } else {
            this.clickedInput = null;
        }

        // 立即開始拖拽選擇（無延遲）
        this.startDragSelection(e);
    }
    
    handleMouseMove(e, cell) {
        if (!this.isDragging || !this.startCell) return;
        
        e.preventDefault();
        
        this.endCell = cell;
        
        // 更新選擇範圍
        this.updateSelectionRange();
    }
    
    handleGlobalMouseMove(e) {
        if (!this.isDragging || !this.startCell) return;
        
        // 找到鼠標位置下的單元格
        const elementBelow = document.elementFromPoint(e.clientX, e.clientY);
        const cellBelow = elementBelow ? elementBelow.closest('td') : null;
        
        if (cellBelow && cellBelow.closest('table') === this.currentTable) {
            this.endCell = cellBelow;
            this.updateSelectionRange();
        }
    }
    
    handleMouseUp(e, cell) {
        if (!this.isDragging) return;
        this.finishSelection();
    }
    
    handleGlobalMouseUp(e) {
        if (!this.isDragging) return;
        this.finishSelection();
    }
    
    // 開始拖拽選擇
    startDragSelection(e) {
        // 從事件中獲取單元格
        const cell = e.target.closest('td');
        if (!cell) return;
        
        this.isPreparing = false;
        this.isDragging = true;
        this.startCell = cell;
        this.endCell = cell;
        this.currentTable = cell.closest('table');
        
        // 如果之前點擊的是輸入字段，移除其焦點
        if (this.clickedInput) {
            this.clickedInput.blur();
            this.clickedInput = null;
        }
        
        // 阻止默認行為
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        // 清除之前的選擇（包括現有多選系統的選擇）
        this.clearSelection();
        if (typeof clearAllSelections === 'function') {
            clearAllSelections();
        }
        
        // 選擇起始單元格
        this.selectCell(this.startCell);
        
        // 添加拖拽樣式
        this.startCell.classList.add('drag-selecting');
        
        // 防止文本選擇
        document.body.style.userSelect = 'none';
        
        // 添加拖拽開始的視覺反饋
        this.showDragFeedback();
    }

    
    
    updateSelectionRange() {
        if (!this.startCell || !this.endCell || !this.currentTable) return;
        
        // 清除之前的選擇
        this.clearSelection();
        
        // 計算選擇範圍
        const startRow = this.startCell.closest('tr');
        const endRow = this.endCell.closest('tr');
        const startRowIndex = Array.from(this.currentTable.querySelectorAll('tbody tr')).indexOf(startRow);
        const endRowIndex = Array.from(this.currentTable.querySelectorAll('tbody tr')).indexOf(endRow);
        
        const startCellIndex = Array.from(startRow.children).indexOf(this.startCell);
        const endCellIndex = Array.from(endRow.children).indexOf(this.endCell);
        
        const minRowIndex = Math.min(startRowIndex, endRowIndex);
        const maxRowIndex = Math.max(startRowIndex, endRowIndex);
        const minCellIndex = Math.min(startCellIndex, endCellIndex);
        const maxCellIndex = Math.max(startCellIndex, endCellIndex);
        
        // 選擇範圍內的所有單元格
        const rows = Array.from(this.currentTable.querySelectorAll('tbody tr'));
        
        for (let rowIndex = minRowIndex; rowIndex <= maxRowIndex; rowIndex++) {
            const row = rows[rowIndex];
            if (!row) continue;
            
            const cells = Array.from(row.children);
            
            for (let cellIndex = minCellIndex; cellIndex <= maxCellIndex; cellIndex++) {
                const cell = cells[cellIndex];
                if (cell) {
                    this.selectCell(cell);
                    
                    // 多選狀態：範圍內所有格（包含起點與終點）都標記為 multi-select-range
                    cell.classList.add('multi-select-range');
                    
                    // 為拖拽過程中的單元格添加拖拽樣式
                    if (this.isDragging) {
                        cell.classList.add('drag-selecting');
                    }
                }
            }
        }
        
        // 更新拖拽反饋
        this.updateDragFeedback();
    }
    
    selectCell(cell) {
        // 選取其他儲存格時，結束編輯狀態
        this.exitEditMode();
        cell.classList.add('selected');
        this.selectedCells.add(cell);
        
        // 同步到現有的多選系統
        if (typeof selectedCells !== 'undefined') {
            selectedCells.add(cell);
        }
        if (typeof lastSelectedCell !== 'undefined') {
            lastSelectedCell = cell;
        }
    }
    
    clearSelection() {
        // 清除選取時，結束編輯狀態
        this.exitEditMode();
        this.selectedCells.forEach(cell => {
            cell.classList.remove('selected', 'multi-select-range', 'drag-selecting');
        });
        this.selectedCells.clear();
        
        // 同步清除現有多選系統的選擇
        if (typeof selectedCells !== 'undefined') {
            selectedCells.clear();
        }
        if (typeof lastSelectedCell !== 'undefined') {
            lastSelectedCell = null;
        }
    }
    
    finishSelection() {
        if (this.isDragging) {
            this.isDragging = false;
            this.startCell = null;
            this.endCell = null;
            this.dragStartPosition = null;
            
            // 移除拖拽樣式
            if (this.currentTable) {
                const dragCells = this.currentTable.querySelectorAll('.drag-selecting');
                dragCells.forEach(cell => cell.classList.remove('drag-selecting'));
            }
            
            // 移除拖拽反饋
            this.removeDragFeedback();
            
            // 恢復文本選擇
            document.body.style.userSelect = '';
            
            // 更新現有多選系統的UI
            if (typeof updateMultiSelectUI === 'function') {
                updateMultiSelectUI();
            }
        }
    }
    
    // 獲取當前選中的單元格
    getSelectedCells() {
        return Array.from(this.selectedCells);
    }
    
    // 清除所有選擇
    clearAllSelections() {
        this.clearSelection();
    }
    
    // 顯示拖拽反饋
    showDragFeedback() {
        if (!this.startCell) return;
        
        // 創建拖拽指示器
        const indicator = document.createElement('div');
        indicator.className = 'drag-selection-indicator';
        indicator.style.cssText = `
            position: absolute;
            background: rgba(0, 123, 255, 0.2);
            border: 2px dashed rgba(0, 123, 255, 0.6);
            pointer-events: none;
            z-index: 1000;
            opacity: 0.8;
            transition: all 0.1s ease;
        `;
        
        document.body.appendChild(indicator);
        this.dragIndicator = indicator;
        
        // 更新指示器位置
        this.updateDragFeedback();
    }
    
    // 更新拖拽反饋
    updateDragFeedback() {
        if (!this.dragIndicator || !this.startCell || !this.endCell) return;
        
        const startRect = this.startCell.getBoundingClientRect();
        const endRect = this.endCell.getBoundingClientRect();
        
        const left = Math.min(startRect.left, endRect.left);
        const top = Math.min(startRect.top, endRect.top);
        const right = Math.max(startRect.right, endRect.right);
        const bottom = Math.max(startRect.bottom, endRect.bottom);
        
        this.dragIndicator.style.left = left + 'px';
        this.dragIndicator.style.top = top + 'px';
        this.dragIndicator.style.width = (right - left) + 'px';
        this.dragIndicator.style.height = (bottom - top) + 'px';
    }
    
    // 移除拖拽反饋
    removeDragFeedback() {
        if (this.dragIndicator) {
            this.dragIndicator.remove();
            this.dragIndicator = null;
        }
    }
    
    // 填充拖拽鼠標按下
    handleFillMouseDown(e, cell) {
        e.preventDefault();
        e.stopPropagation();
        
        this.isFillDragging = true;
        this.fillStartCell = cell;
        this.fillEndCell = cell;
        this.currentTable = cell.closest('table');
        
        this.dragStartPosition = {
            x: e.clientX,
            y: e.clientY
        };
        
        // 防止文本選擇
        document.body.style.userSelect = 'none';
        
        console.log('[FillDrag] Started fill dragging from cell:', cell);
    }
    
    // 處理填充拖拽的全局鼠標移動
    handleFillGlobalMouseMove(e) {
        if (!this.isFillDragging || !this.fillStartCell) return;
        
        // 找到鼠標位置下的單元格
        const elementBelow = document.elementFromPoint(e.clientX, e.clientY);
        const cellBelow = elementBelow ? elementBelow.closest('td') : null;
        
        if (cellBelow && cellBelow.closest('table') === this.currentTable) {
            this.fillEndCell = cellBelow;
            this.updateFillPreview();
        }
    }
    
    // 更新填充預覽
    updateFillPreview() {
        if (!this.fillStartCell || !this.fillEndCell || !this.currentTable) return;
        
        // 清除之前的預覽
        this.currentTable.querySelectorAll('.fill-preview').forEach(cell => {
            cell.classList.remove('fill-preview');
        });
        
        // 計算填充範圍
        const startRow = this.fillStartCell.closest('tr');
        const endRow = this.fillEndCell.closest('tr');
        const startRowIndex = Array.from(this.currentTable.querySelectorAll('tbody tr')).indexOf(startRow);
        const endRowIndex = Array.from(this.currentTable.querySelectorAll('tbody tr')).indexOf(endRow);
        
        const startCellIndex = Array.from(startRow.children).indexOf(this.fillStartCell);
        const endCellIndex = Array.from(endRow.children).indexOf(this.fillEndCell);
        
        const minRowIndex = Math.min(startRowIndex, endRowIndex);
        const maxRowIndex = Math.max(startRowIndex, endRowIndex);
        const minCellIndex = Math.min(startCellIndex, endCellIndex);
        const maxCellIndex = Math.max(startCellIndex, endCellIndex);
        
        // 高亮填充範圍（不包括起始單元格）
        const rows = Array.from(this.currentTable.querySelectorAll('tbody tr'));
        
        for (let rowIndex = minRowIndex; rowIndex <= maxRowIndex; rowIndex++) {
            const row = rows[rowIndex];
            if (!row) continue;
            
            const cells = Array.from(row.children);
            
            for (let cellIndex = minCellIndex; cellIndex <= maxCellIndex; cellIndex++) {
                const cell = cells[cellIndex];
                // 跳過起始單元格
                if (cell && cell !== this.fillStartCell) {
                    cell.classList.add('fill-preview');
                }
            }
        }
    }
    
    // 完成填充操作
    finishFillDragging() {
        if (!this.isFillDragging) return;
        
        if (this.fillStartCell && this.fillEndCell && this.fillStartCell !== this.fillEndCell) {
            this.performFillOperation();
        }
        
        // 清除預覽
        if (this.currentTable) {
            this.currentTable.querySelectorAll('.fill-preview').forEach(cell => {
                cell.classList.remove('fill-preview');
            });
        }
        
        this.isFillDragging = false;
        this.fillStartCell = null;
        this.fillEndCell = null;
        
        // 恢復文本選擇
        document.body.style.userSelect = '';
        
        console.log('[FillDrag] Finished fill dragging');
    }
    
    // 執行填充操作
    performFillOperation() {
        if (!this.fillStartCell || !this.fillEndCell || !this.currentTable) return;
        
        // 獲取源單元格的輸入值
        const sourceInput = this.fillStartCell.querySelector('input, textarea, select');
        if (!sourceInput) return;
        
        const sourceValue = sourceInput.value;
        
        // 計算填充範圍
        const startRow = this.fillStartCell.closest('tr');
        const endRow = this.fillEndCell.closest('tr');
        const startRowIndex = Array.from(this.currentTable.querySelectorAll('tbody tr')).indexOf(startRow);
        const endRowIndex = Array.from(this.currentTable.querySelectorAll('tbody tr')).indexOf(endRow);
        
        const startCellIndex = Array.from(startRow.children).indexOf(this.fillStartCell);
        const endCellIndex = Array.from(endRow.children).indexOf(this.fillEndCell);
        
        const minRowIndex = Math.min(startRowIndex, endRowIndex);
        const maxRowIndex = Math.max(startRowIndex, endRowIndex);
        const minCellIndex = Math.min(startCellIndex, endCellIndex);
        const maxCellIndex = Math.max(startCellIndex, endCellIndex);
        
        // 填充數據到範圍內的所有單元格
        const rows = Array.from(this.currentTable.querySelectorAll('tbody tr'));
        let filledCount = 0;
        
        for (let rowIndex = minRowIndex; rowIndex <= maxRowIndex; rowIndex++) {
            const row = rows[rowIndex];
            if (!row) continue;
            
            const cells = Array.from(row.children);
            
            for (let cellIndex = minCellIndex; cellIndex <= maxCellIndex; cellIndex++) {
                const cell = cells[cellIndex];
                // 跳過起始單元格
                if (cell && cell !== this.fillStartCell) {
                    const targetInput = cell.querySelector('input, textarea, select');
                    if (targetInput && !targetInput.disabled && !targetInput.readOnly) {
                        // 複製值
                        targetInput.value = sourceValue;
                        
                        // 觸發 input 和 change 事件以更新數據
                        const inputEvent = new Event('input', { bubbles: true });
                        const changeEvent = new Event('change', { bubbles: true });
                        targetInput.dispatchEvent(inputEvent);
                        targetInput.dispatchEvent(changeEvent);
                        
                        filledCount++;
                    }
                }
            }
        }
        
        console.log(`[FillDrag] Filled ${filledCount} cells with value: "${sourceValue}"`);
        
        // 顯示成功提示
        if (typeof showToast === 'function') {
            showToast(`已填充 ${filledCount} 個單元格`, 'success');
        }
    }
    
    // 處理雙擊事件
    handleDoubleClick(e, cell) {
        e.preventDefault();
        e.stopPropagation();
        
        // 清除任何現有的選擇
        this.clearSelection();
        if (typeof clearAllSelections === 'function') {
            clearAllSelections();
        }
        
        // 選擇當前單元格
        this.selectCell(cell);
        
        // 進入編輯模式
        this.enterEditMode(cell);
    }
    
    // 進入編輯模式
    enterEditMode(cell) {
        const input = cell.querySelector('input, textarea, select');
        if (!input) return;
        
        // 如果輸入字段被禁用或只讀，不進入編輯模式
        if (input.disabled || input.readOnly) return;
        
        // 聚焦到輸入字段
        input.focus();
        
        // 如果是文本輸入框，選中所有文本
        if (input.type === 'text' || input.type === 'textarea' || input.tagName === 'TEXTAREA') {
            input.select();
        }
        
        console.log('[EditMode] Entered edit mode for cell:', cell);
    }
    
    // 處理鍵盤事件
    handleKeyDown(e) {
        // 若已在可編輯輸入中，交由原生與既有邏輯處理
        const active = document.activeElement;
        const isActiveInput = active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.tagName === 'SELECT');

        // 檢查是否按下了 Ctrl+C 或 Cmd+C（複製）
        if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
            this.handleCopy();
            return;
        }
        
        // 檢查是否按下了 Ctrl+V 或 Cmd+V（貼上）
        if ((e.ctrlKey || e.metaKey) && e.key === 'v') {
            this.handlePaste();
            return;
        }
        
        // 當有選中單元格且目前不在輸入框中：任意可輸入鍵觸發進入編輯
        if (!isActiveInput && this.selectedCells && this.selectedCells.size > 0) {
            const firstCell = Array.from(this.selectedCells)[0];
            const input = firstCell ? firstCell.querySelector('input, textarea, select') : null;
            if (input && !input.disabled && !input.readOnly) {
                const isPrintable = e.key && e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey;
                const isEditKey = (e.key === 'Backspace' || e.key === 'Delete' || e.key === ' ');
                if (isPrintable || isEditKey) {
                    e.preventDefault();
                    // 進入編輯模式並填入鍵值
                    this.enterEditMode(firstCell);
                    // 插入文字或清空
                    if (e.key === 'Backspace' || e.key === 'Delete') {
                        input.value = '';
                    } else {
                        // 對於可輸入鍵，直接覆蓋為第一個按鍵（與表格編輯器一致）
                        input.value = (e.key === ' ' ? ' ' : e.key);
                    }
                    const inputEvent = new Event('input', { bubbles: true });
                    const changeEvent = new Event('change', { bubbles: true });
                    input.dispatchEvent(inputEvent);
                    input.dispatchEvent(changeEvent);
                    return;
                }
            }
        }

        // 檢查是否按下了 Enter（退出編輯模式）
        if (e.key === 'Enter') {
            this.exitEditMode();
            return;
        }

        // 檢查是否按下了 Escape（退出編輯模式）
        if (e.key === 'Escape') {
            this.exitEditMode();
            return;
        }
    }
    
    // 處理複製操作
    handleCopy() {
        if (this.selectedCells.size === 0) return;
        
        // 如果只有一個選中的單元格
        if (this.selectedCells.size === 1) {
            const cell = Array.from(this.selectedCells)[0];
            const input = cell.querySelector('input, textarea, select');
            if (input) {
                this.copiedData = {
                    value: input.value,
                    type: input.type || input.tagName.toLowerCase()
                };
                
                // 複製到剪貼板
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(input.value).catch(err => {
                        console.warn('Failed to copy to clipboard:', err);
                    });
                }
                
                console.log('[Copy] Copied single cell value:', input.value);
                
                // 顯示成功提示
                if (typeof showToast === 'function') {
                    showToast('已複製單元格內容', 'success');
                }
            }
        } else {
            // 多個選中的單元格，複製所有值
            const values = [];
            this.selectedCells.forEach(cell => {
                const input = cell.querySelector('input, textarea, select');
                if (input) {
                    values.push(input.value);
                }
            });
            
            this.copiedData = {
                values: values,
                type: 'multiple'
            };
            
            // 複製到剪貼板
            if (navigator.clipboard) {
                navigator.clipboard.writeText(values.join('\t')).catch(err => {
                    console.warn('Failed to copy to clipboard:', err);
                });
            }
            
            console.log('[Copy] Copied multiple cell values:', values);
            
            // 顯示成功提示
            if (typeof showToast === 'function') {
                showToast(`已複製 ${values.length} 個單元格內容`, 'success');
            }
        }
    }
    
    // 處理貼上操作
    handlePaste() {
        if (!this.copiedData) return;
        
        // 如果沒有選中的單元格，不執行貼上
        if (this.selectedCells.size === 0) return;
        
        let pastedCount = 0;
        
        if (this.copiedData.type === 'multiple' && this.copiedData.values) {
            // 多個值貼上
            const values = this.copiedData.values;
            const cells = Array.from(this.selectedCells);
            
            for (let i = 0; i < Math.min(values.length, cells.length); i++) {
                const cell = cells[i];
                const input = cell.querySelector('input, textarea, select');
                if (input && !input.disabled && !input.readOnly) {
                    input.value = values[i];
                    
                    // 觸發 input 和 change 事件
                    const inputEvent = new Event('input', { bubbles: true });
                    const changeEvent = new Event('change', { bubbles: true });
                    input.dispatchEvent(inputEvent);
                    input.dispatchEvent(changeEvent);
                    
                    pastedCount++;
                }
            }
        } else if (this.copiedData.value !== undefined) {
            // 單個值貼上到所有選中的單元格
            this.selectedCells.forEach(cell => {
                const input = cell.querySelector('input, textarea, select');
                if (input && !input.disabled && !input.readOnly) {
                    input.value = this.copiedData.value;
                    
                    // 觸發 input 和 change 事件
                    const inputEvent = new Event('input', { bubbles: true });
                    const changeEvent = new Event('change', { bubbles: true });
                    input.dispatchEvent(inputEvent);
                    input.dispatchEvent(changeEvent);
                    
                    pastedCount++;
                }
            });
        }
        
        console.log(`[Paste] Pasted to ${pastedCount} cells`);
        
        // 顯示成功提示
        if (typeof showToast === 'function') {
            showToast(`已貼上到 ${pastedCount} 個單元格`, 'success');
        }
    }
    
    // 退出編輯模式
    exitEditMode() {
        // 移除所有輸入字段的焦點
        const activeElement = document.activeElement;
        if (activeElement && (activeElement.tagName === 'INPUT' || 
                             activeElement.tagName === 'TEXTAREA' || 
                             activeElement.tagName === 'SELECT')) {
            activeElement.blur();
        }
        
        console.log('[EditMode] Exited edit mode');
    }
}

// 創建全局實例
window.detailTableDragSelector = new DetailTableDragSelector();

// 導出類別
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DetailTableDragSelector;
}
