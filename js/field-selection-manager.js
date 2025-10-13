/**
 * Field Selection Manager
 * 處理詳細表格中的字段選擇、拖拽和複製功能
 */

class FieldSelectionManager {
    constructor() {
        this.selectedFields = new Set();
        this.isDragging = false;
        this.dragStartField = null;
        this.dragStartPosition = null;
        this.isOrangeDotDragging = false;
        this.sourceFieldData = null;
        
        this.init();
    }

    init() {
        // 綁定事件處理器
        this.handleFieldClick = this.handleFieldClick.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.updateFieldListeners = this.updateFieldListeners.bind(this);
        
        // 監聽表格容器的點擊事件
        document.addEventListener('click', this.handleFieldClick);
        document.addEventListener('mousedown', this.handleMouseDown);
        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
        
        // 監聽表格更新事件
        document.addEventListener('tableUpdated', this.updateFieldListeners);
    }

    handleFieldClick(e) {
        const field = this.getFieldElement(e.target);
        if (!field) return;

        // 檢查是否是可編輯字段
        if (!this.isEditableField(field)) return;

        // 單擊進入編輯模式
        if (e.detail === 1) {
            setTimeout(() => {
                if (!this.isDragging && !this.isOrangeDotDragging) {
                    this.enterEditMode(field);
                }
            }, 200);
        }
    }

    handleMouseDown(e) {
        const field = this.getFieldElement(e.target);
        if (!field) return;

        // 檢查是否是可編輯字段
        if (!this.isEditableField(field)) return;

        // 檢查是否點擊了橙色圓點
        if (e.target.classList.contains('orange-dot')) {
            this.isOrangeDotDragging = true;
            this.sourceFieldData = this.getFieldData(field);
            e.preventDefault();
            return;
        }

        // 開始拖拽選擇
        this.isDragging = true;
        this.dragStartField = field;
        this.dragStartPosition = { x: e.clientX, y: e.clientY };
        
        // 清除之前的選擇
        this.clearSelection();
        
        // 選擇當前字段
        this.selectField(field);
        
        e.preventDefault();
    }

    handleMouseMove(e) {
        if (!this.isDragging && !this.isOrangeDotDragging) return;

        if (this.isOrangeDotDragging) {
            this.handleOrangeDotDrag(e);
        } else if (this.isDragging) {
            this.handleFieldDrag(e);
        }
    }

    handleMouseUp(e) {
        if (this.isDragging || this.isOrangeDotDragging) {
            this.isDragging = false;
            this.isOrangeDotDragging = false;
            this.dragStartField = null;
            this.dragStartPosition = null;
            this.sourceFieldData = null;
        }
    }

    handleFieldDrag(e) {
        if (!this.dragStartField) return;

        const currentField = this.getFieldElement(e.target);
        if (!currentField) return;

        // 計算拖拽方向（垂直或水平）
        const deltaX = Math.abs(e.clientX - this.dragStartPosition.x);
        const deltaY = Math.abs(e.clientY - this.dragStartPosition.y);
        
        if (deltaX > deltaY) {
            // 水平拖拽
            this.selectFieldsHorizontally(this.dragStartField, currentField);
        } else {
            // 垂直拖拽
            this.selectFieldsVertically(this.dragStartField, currentField);
        }
    }

    handleOrangeDotDrag(e) {
        const currentField = this.getFieldElement(e.target);
        if (!currentField || !this.sourceFieldData) return;

        // 檢查是否是可編輯字段
        if (!this.isEditableField(currentField)) return;

        // 複製數據到當前字段
        this.copyFieldData(currentField, this.sourceFieldData);
        
        // 選擇當前字段
        this.selectField(currentField);
    }

    selectFieldsHorizontally(startField, endField) {
        const startRow = startField.closest('tr');
        const endRow = endField.closest('tr');
        const startCell = startField.closest('td');
        const endCell = endField.closest('td');
        
        if (!startRow || !endRow || !startCell || !endCell) return;
        
        const startRowIndex = Array.from(startRow.parentNode.children).indexOf(startRow);
        const endRowIndex = Array.from(endRow.parentNode.children).indexOf(endRow);
        const startCellIndex = Array.from(startCell.parentNode.children).indexOf(startCell);
        const endCellIndex = Array.from(endCell.parentNode.children).indexOf(endCell);
        
        // 選擇範圍內的字段
        for (let rowIndex = Math.min(startRowIndex, endRowIndex); rowIndex <= Math.max(startRowIndex, endRowIndex); rowIndex++) {
            const row = startRow.parentNode.children[rowIndex];
            for (let cellIndex = Math.min(startCellIndex, endCellIndex); cellIndex <= Math.max(startCellIndex, endCellIndex); cellIndex++) {
                const cell = row.children[cellIndex];
                const field = cell.querySelector('input, textarea');
                if (field && this.isEditableField(field)) {
                    this.selectField(field);
                }
            }
        }
    }

    selectFieldsVertically(startField, endField) {
        const startRow = startField.closest('tr');
        const endRow = endField.closest('tr');
        const startCell = startField.closest('td');
        const endCell = endField.closest('td');
        
        if (!startRow || !endRow || !startCell || !endCell) return;
        
        const startRowIndex = Array.from(startRow.parentNode.children).indexOf(startRow);
        const endRowIndex = Array.from(endRow.parentNode.children).indexOf(endRow);
        const startCellIndex = Array.from(startCell.parentNode.children).indexOf(startCell);
        const endCellIndex = Array.from(endCell.parentNode.children).indexOf(endCell);
        
        // 選擇範圍內的字段
        for (let rowIndex = Math.min(startRowIndex, endRowIndex); rowIndex <= Math.max(startRowIndex, endRowIndex); rowIndex++) {
            const row = startRow.parentNode.children[rowIndex];
            for (let cellIndex = Math.min(startCellIndex, endCellIndex); cellIndex <= Math.max(startCellIndex, endCellIndex); cellIndex++) {
                const cell = row.children[cellIndex];
                const field = cell.querySelector('input, textarea');
                if (field && this.isEditableField(field)) {
                    this.selectField(field);
                }
            }
        }
    }

    selectField(field) {
        this.selectedFields.add(field);
        field.classList.add('field-selected');
        
        // 只在單選時顯示橙色圓點
        if (this.selectedFields.size === 1) {
            this.showOrangeDot(field);
        } else {
            this.hideOrangeDot();
        }
    }

    clearSelection() {
        this.selectedFields.forEach(field => {
            field.classList.remove('field-selected');
        });
        this.selectedFields.clear();
        this.hideOrangeDot();
    }

    showOrangeDot(field) {
        this.hideOrangeDot(); // 先隱藏現有的圓點
        
        const orangeDot = document.createElement('div');
        orangeDot.className = 'orange-dot';
        orangeDot.style.cssText = `
            position: absolute;
            width: 1px;
            height: 1px;
            background-color: orange;
            border-radius: 50%;
            right: 2px;
            bottom: 2px;
            cursor: crosshair;
            z-index: 1000;
        `;
        
        const cell = field.closest('td');
        if (cell) {
            cell.style.position = 'relative';
            cell.appendChild(orangeDot);
        }
    }

    hideOrangeDot() {
        const existingDot = document.querySelector('.orange-dot');
        if (existingDot) {
            existingDot.remove();
        }
    }

    enterEditMode(field) {
        if (field.tagName === 'INPUT' || field.tagName === 'TEXTAREA') {
            field.focus();
            field.select();
        }
    }

    getFieldElement(target) {
        // 檢查目標是否是輸入字段
        if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
            return target;
        }
        
        // 檢查目標是否在輸入字段內
        const field = target.closest('input, textarea');
        return field;
    }

    isEditableField(field) {
        if (!field) return false;
        
        // 檢查字段是否被禁用
        if (field.disabled) return false;
        
        // 檢查字段是否為只讀
        if (field.readOnly) return false;
        
        return true;
    }

    getFieldData(field) {
        if (field.tagName === 'INPUT') {
            return field.value;
        } else if (field.tagName === 'TEXTAREA') {
            return field.value;
        }
        return '';
    }

    copyFieldData(targetField, data) {
        if (targetField.tagName === 'INPUT' || targetField.tagName === 'TEXTAREA') {
            targetField.value = data;
            
            // 觸發 change 事件以保存數據
            const changeEvent = new Event('change', { bubbles: true });
            targetField.dispatchEvent(changeEvent);
        }
    }

    updateFieldListeners() {
        // 當表格更新時，重新初始化字段監聽器
        this.clearSelection();
        
        // 為新創建的字段添加事件監聽器
        const detailTables = document.querySelectorAll('#labelsDetailTable, #defectsDetailTable');
        detailTables.forEach(table => {
            const fields = table.querySelectorAll('input, textarea');
            fields.forEach(field => {
                // 移除舊的監聽器（如果存在）
                field.removeEventListener('click', this.handleFieldClick);
                field.removeEventListener('mousedown', this.handleMouseDown);
                
                // 添加新的監聽器
                field.addEventListener('click', this.handleFieldClick);
                field.addEventListener('mousedown', this.handleMouseDown);
            });
        });
    }
}

// 初始化字段選擇管理器
window.fieldSelectionManager = new FieldSelectionManager();
