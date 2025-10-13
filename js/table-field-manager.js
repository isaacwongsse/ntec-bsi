/**
 * Table Field Manager
 * 處理表格欄位的選擇、拖拽、複製和編輯功能
 */

class TableFieldManager {
    constructor() {
        this.selectedFields = new Set();
        this.isDragging = false;
        this.dragStartField = null;
        this.dragStartPosition = null;
        this.isSelecting = false;
        this.selectionStart = null;
        this.selectionEnd = null;
        this.editingField = null;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.addStyles();
    }
    
    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* 表格欄位選擇樣式 */
            .detail-table td {
                position: relative;
                user-select: none;
                cursor: pointer;
            }
            
            .detail-table td.selectable {
                cursor: crosshair;
            }
            
            .detail-table td.selected {
                background-color: rgba(0, 123, 255, 0.2) !important;
                border: 2px solid #007bff !important;
            }
            
            .detail-table td.selecting {
                background-color: rgba(0, 123, 255, 0.1) !important;
            }
            
            /* 橙色圓點指示器 */
            .field-copy-indicator {
                position: absolute;
                bottom: 2px;
                right: 2px;
                width: 8px;
                height: 8px;
                background-color: #ff8c00;
                border-radius: 50%;
                cursor: crosshair;
                z-index: 10;
                opacity: 0;
                transition: opacity 0.2s ease;
            }
            
            .detail-table td.selected .field-copy-indicator {
                opacity: 1;
            }
            
            .detail-table td.editing {
                background-color: rgba(255, 193, 7, 0.2) !important;
                border: 2px solid #ffc107 !important;
            }
            
            .detail-table td.editing input,
            .detail-table td.editing textarea {
                background-color: transparent !important;
                border: none !important;
                outline: none !important;
                box-shadow: none !important;
            }
            
            /* 不可編輯欄位樣式 */
            .detail-table td.non-editable {
                cursor: default;
            }
            
            .detail-table td.non-editable input[readonly],
            .detail-table td.non-editable textarea[readonly] {
                cursor: default;
            }
        `;
        document.head.appendChild(style);
    }
    
    setupEventListeners() {
        // 為所有 detail-table-container 添加事件監聽器
        document.addEventListener('DOMContentLoaded', () => {
            this.attachTableListeners();
        });
        
        // 如果 DOM 已經載入，立即附加監聽器
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.attachTableListeners();
            });
        } else {
            this.attachTableListeners();
        }
    }
    
    attachTableListeners() {
        const tables = document.querySelectorAll('.detail-table-container table');
        tables.forEach(table => {
            this.setupTableListeners(table);
        });
    }
    
    setupTableListeners(table) {
        const tbody = table.querySelector('tbody');
        if (!tbody) return;
        
        // 為每個可編輯的欄位添加事件監聽器
        tbody.addEventListener('mousedown', (e) => {
            const cell = e.target.closest('td');
            if (!cell) return;
            
            const input = cell.querySelector('input, textarea');
            if (!input) return;
            
            // 檢查是否為可編輯欄位
            const isEditable = !input.hasAttribute('readonly');
            
            if (e.button === 0) { // 左鍵
                if (isEditable) {
                    if (e.target === input) {
                        // 點擊輸入框，進入編輯模式
                        this.enterEditMode(cell, input);
                    } else {
                        // 點擊欄位其他區域，開始選擇
                        this.startSelection(cell, e);
                    }
                } else {
                    // 不可編輯欄位，只允許選擇
                    this.startSelection(cell, e);
                }
            }
        });
        
        tbody.addEventListener('mousemove', (e) => {
            if (this.isSelecting) {
                this.updateSelection(e);
            }
        });
        
        tbody.addEventListener('mouseup', (e) => {
            if (this.isSelecting) {
                this.endSelection(e);
            }
        });
        
        // 處理橙色圓點的拖拽複製
        tbody.addEventListener('mousedown', (e) => {
            if (e.target.classList.contains('field-copy-indicator')) {
                e.preventDefault();
                e.stopPropagation();
                this.startDragCopy(e);
            }
        });
        
        // 處理拖拽複製的移動和結束
        document.addEventListener('mousemove', (e) => {
            if (this.isDragging) {
                this.updateDragCopy(e);
            }
        });
        
        document.addEventListener('mouseup', (e) => {
            if (this.isDragging) {
                this.endDragCopy(e);
            }
        });
        
        // 點擊其他地方取消選擇
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.detail-table-container')) {
                this.clearSelection();
            }
        });
        
        // 鍵盤事件
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.clearSelection();
                this.exitEditMode();
            }
        });
    }
    
    startSelection(cell, e) {
        e.preventDefault();
        this.isSelecting = true;
        this.selectionStart = cell;
        this.clearSelection();
        this.selectField(cell);
        
        // 添加選擇狀態樣式
        cell.classList.add('selecting');
    }
    
    updateSelection(e) {
        if (!this.isSelecting) return;
        
        const cell = e.target.closest('td');
        if (!cell) return;
        
        // 清除之前的選擇樣式
        document.querySelectorAll('.detail-table td.selecting').forEach(c => {
            c.classList.remove('selecting');
        });
        
        // 選擇範圍內的欄位
        this.selectRange(this.selectionStart, cell);
    }
    
    endSelection(e) {
        if (!this.isSelecting) return;
        
        this.isSelecting = false;
        
        // 清除選擇狀態樣式
        document.querySelectorAll('.detail-table td.selecting').forEach(c => {
            c.classList.remove('selecting');
        });
        
        this.selectionStart = null;
    }
    
    selectField(cell) {
        const input = cell.querySelector('input, textarea');
        if (!input) return;
        
        const isEditable = !input.hasAttribute('readonly');
        
        if (isEditable) {
            this.selectedFields.add(cell);
            cell.classList.add('selected');
            this.addCopyIndicator(cell);
        }
    }
    
    selectRange(startCell, endCell) {
        if (!startCell || !endCell) return;
        
        const startRow = startCell.parentElement;
        const endRow = endCell.parentElement;
        const startIndex = Array.from(startRow.children).indexOf(startCell);
        const endIndex = Array.from(endRow.children).indexOf(endCell);
        
        // 確定選擇範圍
        const startRowIndex = Array.from(startRow.parentElement.children).indexOf(startRow);
        const endRowIndex = Array.from(endRow.parentElement.children).indexOf(endRow);
        
        const minRow = Math.min(startRowIndex, endRowIndex);
        const maxRow = Math.max(startRowIndex, endRowIndex);
        const minCol = Math.min(startIndex, endIndex);
        const maxCol = Math.max(startIndex, endIndex);
        
        // 清除之前的選擇
        this.clearSelection();
        
        // 選擇範圍內的欄位
        const tbody = startRow.parentElement;
        for (let rowIndex = minRow; rowIndex <= maxRow; rowIndex++) {
            const row = tbody.children[rowIndex];
            for (let colIndex = minCol; colIndex <= maxCol; colIndex++) {
                const cell = row.children[colIndex];
                if (cell) {
                    const input = cell.querySelector('input, textarea');
                    if (input && !input.hasAttribute('readonly')) {
                        this.selectedFields.add(cell);
                        cell.classList.add('selected');
                    }
                }
            }
        }
        
        // 只在單個選擇時顯示橙色圓點
        if (this.selectedFields.size === 1) {
            const singleCell = this.selectedFields.values().next().value;
            this.addCopyIndicator(singleCell);
        }
    }
    
    clearSelection() {
        this.selectedFields.forEach(cell => {
            cell.classList.remove('selected');
            this.removeCopyIndicator(cell);
        });
        this.selectedFields.clear();
    }
    
    addCopyIndicator(cell) {
        if (cell.querySelector('.field-copy-indicator')) return;
        
        const indicator = document.createElement('div');
        indicator.className = 'field-copy-indicator';
        indicator.title = '拖拽複製此欄位內容';
        cell.appendChild(indicator);
    }
    
    removeCopyIndicator(cell) {
        const indicator = cell.querySelector('.field-copy-indicator');
        if (indicator) {
            indicator.remove();
        }
    }
    
    startDragCopy(e) {
        e.preventDefault();
        this.isDragging = true;
        this.dragStartField = e.target.closest('td');
        this.dragStartPosition = { x: e.clientX, y: e.clientY };
        
        // 添加拖拽樣式
        document.body.style.cursor = 'crosshair';
        document.body.style.userSelect = 'none';
        
        // 清除之前的選擇，只選擇源欄位
        this.clearSelection();
        this.selectField(this.dragStartField);
    }
    
    updateDragCopy(e) {
        if (!this.isDragging || !this.dragStartField) return;
        
        const currentCell = e.target.closest('td');
        if (!currentCell) return;
        
        // 清除之前的選擇
        this.clearSelection();
        
        // 選擇源欄位
        this.selectField(this.dragStartField);
        
        // 選擇目標範圍
        this.selectRange(this.dragStartField, currentCell);
    }
    
    endDragCopy(e) {
        if (!this.isDragging || !this.dragStartField) return;
        
        const currentCell = e.target.closest('td');
        if (currentCell && currentCell !== this.dragStartField) {
            // 執行複製操作
            const targetCells = Array.from(this.selectedFields).filter(cell => cell !== this.dragStartField);
            this.copyFieldContent(this.dragStartField, targetCells);
        }
        
        // 重置拖拽狀態
        this.isDragging = false;
        this.dragStartField = null;
        this.dragStartPosition = null;
        
        // 恢復樣式
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
        
        // 清除選擇
        this.clearSelection();
    }
    
    enterEditMode(cell, input) {
        this.exitEditMode(); // 退出之前的編輯模式
        
        this.editingField = cell;
        cell.classList.add('editing');
        
        // 聚焦並選擇輸入框內容
        input.focus();
        input.select();
        
        // 添加編輯完成事件
        const finishEdit = () => {
            this.exitEditMode();
        };
        
        input.addEventListener('blur', finishEdit, { once: true });
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === 'Escape') {
                finishEdit();
            }
        }, { once: true });
    }
    
    exitEditMode() {
        if (this.editingField) {
            this.editingField.classList.remove('editing');
            this.editingField = null;
        }
    }
    
    // 複製欄位內容到選中的欄位
    copyFieldContent(sourceCell, targetCells) {
        const sourceInput = sourceCell.querySelector('input, textarea');
        if (!sourceInput) return;
        
        const sourceValue = sourceInput.value;
        const sourceType = sourceInput.type;
        
        targetCells.forEach(cell => {
            const targetInput = cell.querySelector('input, textarea');
            if (targetInput && targetInput.type === sourceType) {
                targetInput.value = sourceValue;
                
                // 觸發變更事件
                const event = new Event('input', { bubbles: true });
                targetInput.dispatchEvent(event);
            }
        });
    }
    
    // 更新表格（當新表格被創建時調用）
    updateTables() {
        this.attachTableListeners();
    }
}

// 創建全局實例
window.tableFieldManager = new TableFieldManager();

// 導出供其他模組使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TableFieldManager;
}
