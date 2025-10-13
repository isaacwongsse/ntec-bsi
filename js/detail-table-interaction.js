/**
 * Detail Table Interaction Manager
 * 處理 defects/labels detail-table-container 的拖拽選擇和複製功能
 */

class DetailTableInteractionManager {
    constructor() {
        this.isSelecting = false;
        this.isDragging = false;
        this.startCell = null;
        this.endCell = null;
        this.selectedCells = new Set();
        this.dragSourceCell = null;
        this.dragTargetCell = null;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.addStyles();
    }

    setupEventListeners() {
        // 監聽所有 detail-table-container 中的表格
        document.addEventListener('DOMContentLoaded', () => {
            this.attachToTables();
        });

        // 如果 DOM 已經載入，立即附加
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.attachToTables();
            });
        } else {
            this.attachToTables();
        }
    }

    attachToTables() {
        const tables = document.querySelectorAll('.detail-table-container table');
        tables.forEach(table => {
            this.attachToTable(table);
        });
    }

    attachToTable(table) {
        const tbody = table.querySelector('tbody');
        if (!tbody) return;

        // 為每個 td 添加事件監聽器
        const cells = tbody.querySelectorAll('td');
        cells.forEach(cell => {
            this.attachCellEvents(cell);
        });

        // 監聽表格變化，為新添加的行添加事件
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        if (node.tagName === 'TR') {
                            const cells = node.querySelectorAll('td');
                            cells.forEach(cell => this.attachCellEvents(cell));
                        } else if (node.querySelectorAll) {
                            const cells = node.querySelectorAll('td');
                            cells.forEach(cell => this.attachCellEvents(cell));
                        }
                    }
                });
            });
        });

        observer.observe(tbody, { childList: true, subtree: true });
    }

    attachCellEvents(cell) {
        // 移除舊的事件監聽器（如果存在）
        cell.removeEventListener('mousedown', this.handleMouseDown);
        cell.removeEventListener('mouseenter', this.handleMouseEnter);
        cell.removeEventListener('mouseup', this.handleMouseUp);
        cell.removeEventListener('click', this.handleClick);

        // 添加新的事件監聽器
        cell.addEventListener('mousedown', this.handleMouseDown.bind(this));
        cell.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
        cell.addEventListener('mouseup', this.handleMouseUp.bind(this));
        cell.addEventListener('click', this.handleClick.bind(this));

        // 防止默認的拖拽行為
        cell.addEventListener('dragstart', (e) => e.preventDefault());
    }

    handleMouseDown(e) {
        if (e.button !== 0) return; // 只處理左鍵
        
        const cell = e.target.closest('td');
        if (!cell) return;

        // 檢查是否點擊在橙色複製點上
        const copyDot = cell.querySelector('.copy-dot');
        if (copyDot && copyDot.contains(e.target)) {
            this.startDragCopy(cell, e);
            return;
        }

        // 開始選擇模式
        this.isSelecting = true;
        this.startCell = cell;
        this.endCell = cell;
        
        // 清除之前的選擇
        this.clearSelection();
        
        // 選擇當前單元格
        this.selectCell(cell);
        
        e.preventDefault();
    }

    handleMouseEnter(e) {
        if (!this.isSelecting) return;
        
        const cell = e.target.closest('td');
        if (!cell || cell === this.startCell) return;

        this.endCell = cell;
        this.updateSelection();
    }

    handleMouseUp(e) {
        if (this.isSelecting) {
            this.isSelecting = false;
            this.addCopyDots();
        }
        
        if (this.isDragging) {
            this.isDragging = false;
            this.endDragCopy();
        }
    }

    handleClick(e) {
        // 如果沒有進行拖拽選擇，則單擊選擇
        if (!this.isSelecting && !this.isDragging) {
            const cell = e.target.closest('td');
            if (cell) {
                this.clearSelection();
                this.selectCell(cell);
                this.addCopyDots();
            }
        }
    }

    startDragCopy(sourceCell, e) {
        this.isDragging = true;
        this.dragSourceCell = sourceCell;
        
        // 添加拖拽樣式
        document.body.classList.add('detail-table-dragging');
        
        // 創建拖拽預覽
        this.createDragPreview(sourceCell, e);
        
        e.preventDefault();
    }

    createDragPreview(sourceCell, e) {
        const preview = document.createElement('div');
        preview.className = 'detail-table-drag-preview';
        preview.textContent = this.getCellValue(sourceCell);
        
        document.body.appendChild(preview);
        
        // 設置初始位置
        this.updateDragPreview(preview, e);
        
        // 添加移動事件
        const moveHandler = (e) => {
            this.updateDragPreview(preview, e);
            this.highlightDropTarget(e);
        };
        
        const upHandler = (e) => {
            this.endDragCopy();
            document.body.removeChild(preview);
            document.removeEventListener('mousemove', moveHandler);
            document.removeEventListener('mouseup', upHandler);
        };
        
        document.addEventListener('mousemove', moveHandler);
        document.addEventListener('mouseup', upHandler);
    }

    updateDragPreview(preview, e) {
        preview.style.left = e.clientX + 10 + 'px';
        preview.style.top = e.clientY - 10 + 'px';
    }

    highlightDropTarget(e) {
        const targetCell = document.elementFromPoint(e.clientX, e.clientY)?.closest('td');
        
        // 清除之前的高亮
        document.querySelectorAll('.detail-table-drop-target').forEach(cell => {
            cell.classList.remove('detail-table-drop-target');
        });
        
        if (targetCell && targetCell !== this.dragSourceCell) {
            targetCell.classList.add('detail-table-drop-target');
            this.dragTargetCell = targetCell;
        } else {
            this.dragTargetCell = null;
        }
    }

    endDragCopy() {
        if (this.dragTargetCell && this.dragSourceCell) {
            this.copyCellValue(this.dragSourceCell, this.dragTargetCell);
        }
        
        // 清除樣式
        document.body.classList.remove('detail-table-dragging');
        document.querySelectorAll('.detail-table-drop-target').forEach(cell => {
            cell.classList.remove('detail-table-drop-target');
        });
        
        this.dragSourceCell = null;
        this.dragTargetCell = null;
    }

    selectCell(cell) {
        cell.classList.add('selected');
        this.selectedCells.add(cell);
    }

    clearSelection() {
        this.selectedCells.forEach(cell => {
            cell.classList.remove('selected');
        });
        this.selectedCells.clear();
        
        // 移除所有複製點
        document.querySelectorAll('.copy-dot').forEach(dot => {
            dot.remove();
        });
    }

    updateSelection() {
        if (!this.startCell || !this.endCell) return;

        // 清除當前選擇
        this.clearSelection();

        // 獲取選擇範圍
        const range = this.getCellRange(this.startCell, this.endCell);
        
        // 選擇範圍內的所有單元格
        range.forEach(cell => {
            this.selectCell(cell);
        });
    }

    getCellRange(startCell, endCell) {
        const startRow = startCell.parentElement;
        const endRow = endCell.parentElement;
        const table = startRow.closest('table');
        
        const startRowIndex = Array.from(table.querySelectorAll('tr')).indexOf(startRow);
        const endRowIndex = Array.from(table.querySelectorAll('tr')).indexOf(endRow);
        
        const startCellIndex = Array.from(startRow.querySelectorAll('td')).indexOf(startCell);
        const endCellIndex = Array.from(endRow.querySelectorAll('td')).indexOf(endCell);
        
        const minRow = Math.min(startRowIndex, endRowIndex);
        const maxRow = Math.max(startRowIndex, endRowIndex);
        const minCell = Math.min(startCellIndex, endCellIndex);
        const maxCell = Math.max(startCellIndex, endCellIndex);
        
        const cells = [];
        for (let rowIndex = minRow; rowIndex <= maxRow; rowIndex++) {
            const row = table.querySelectorAll('tr')[rowIndex];
            if (row) {
                const rowCells = row.querySelectorAll('td');
                for (let cellIndex = minCell; cellIndex <= maxCell; cellIndex++) {
                    if (rowCells[cellIndex]) {
                        cells.push(rowCells[cellIndex]);
                    }
                }
            }
        }
        
        return cells;
    }

    addCopyDots() {
        this.selectedCells.forEach(cell => {
            if (!cell.querySelector('.copy-dot')) {
                this.createCopyDot(cell);
            }
        });
    }

    createCopyDot(cell) {
        const dot = document.createElement('div');
        dot.className = 'copy-dot';
        dot.title = 'Drag to copy value';
        cell.appendChild(dot);
    }

    getCellValue(cell) {
        const input = cell.querySelector('input, textarea, select');
        if (input) {
            return input.value || input.textContent || '';
        }
        return cell.textContent || '';
    }

    copyCellValue(sourceCell, targetCell) {
        const sourceValue = this.getCellValue(sourceCell);
        const targetInput = targetCell.querySelector('input, textarea, select');
        
        if (targetInput) {
            targetInput.value = sourceValue;
            targetInput.dispatchEvent(new Event('input', { bubbles: true }));
            targetInput.dispatchEvent(new Event('change', { bubbles: true }));
        } else {
            targetCell.textContent = sourceValue;
        }
        
        // 觸發保存事件
        const table = targetCell.closest('table');
        if (table) {
            table.dispatchEvent(new Event('dataChanged', { bubbles: true }));
        }
    }

    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* 複製點樣式 */
            .copy-dot {
                position: absolute;
                bottom: 2px;
                right: 2px;
                width: 8px;
                height: 8px;
                background: #ff8c00;
                border-radius: 50%;
                cursor: grab;
                z-index: 1000;
                transition: all 0.2s ease;
                box-shadow: 0 1px 3px rgba(0,0,0,0.3);
            }

            .copy-dot:hover {
                background: #ff6b00;
                transform: scale(1.2);
                cursor: grabbing;
            }

            .copy-dot:active {
                cursor: grabbing;
            }

            /* 拖拽預覽樣式 */
            .detail-table-drag-preview {
                position: fixed;
                background: rgba(255, 140, 0, 0.9);
                color: white;
                padding: 4px 8px;
                border-radius: 4px;
                font-size: 12px;
                pointer-events: none;
                z-index: 10000;
                box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                max-width: 200px;
                word-wrap: break-word;
            }

            /* 拖拽目標高亮 */
            .detail-table-drop-target {
                background-color: rgba(255, 140, 0, 0.2) !important;
                border: 2px dashed #ff8c00 !important;
            }

            /* 拖拽模式樣式 */
            .detail-table-dragging {
                cursor: grabbing !important;
            }

            .detail-table-dragging .copy-dot {
                cursor: grabbing;
            }

            /* 選擇範圍樣式 */
            .detail-table td.multi-select-range {
                background-color: rgba(0, 123, 255, 0.15) !important;
                border-left-color: rgba(0, 123, 255, 0.5) !important;
                border-top-color: rgba(0, 123, 255, 0.5) !important;
            }

            /* 確保複製點在選中單元格上可見 */
            .detail-table td.selected {
                position: relative;
            }

            .detail-table td.selected .copy-dot {
                opacity: 1;
                visibility: visible;
            }

            /* 防止複製點影響單元格內容 */
            .detail-table td {
                overflow: visible;
            }
        `;
        
        document.head.appendChild(style);
    }
}

// 初始化管理器
window.detailTableInteractionManager = new DetailTableInteractionManager();

// 導出供其他模塊使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DetailTableInteractionManager;
}
