// 鍵盤導航系統
class KeyboardNavigationManager {
    constructor() {
        this.shortcuts = new Map();
        this.isEnabled = true;
        this.currentFocus = null;
        this.focusableElements = [];
        
        this.init();
    }
    
    init() {
        // 等待DOM載入完成
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupKeyboardNavigation();
            });
        } else {
            this.setupKeyboardNavigation();
        }
    }
    
    setupKeyboardNavigation() {
        // 監聽鍵盤事件
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
        document.addEventListener('keyup', this.handleKeyUp.bind(this));
        
        // 設置預設快捷鍵
        this.setupDefaultShortcuts();
        
        // 更新可聚焦元素列表
        this.updateFocusableElements();
        
        // 監聽DOM變化
        this.observeDOM();
    }
    
    setupDefaultShortcuts() {
        // 通用快捷鍵
        this.addShortcut('Escape', () => {
            this.closeModals();
        }, '關閉彈窗');
        
        this.addShortcut('F1', (e) => {
            e.preventDefault();
            this.showHelp();
        }, '顯示幫助');
        
        // 應用程式特定快捷鍵
        this.addShortcut('Ctrl+S', (e) => {
            e.preventDefault();
            this.saveData();
        }, '保存數據');
        
        this.addShortcut('Ctrl+O', (e) => {
            e.preventDefault();
            this.openFile();
        }, '開啟文件');
        
        this.addShortcut('Ctrl+N', (e) => {
            e.preventDefault();
            this.newProject();
        }, '新建項目');
        
        this.addShortcut('Ctrl+E', (e) => {
            e.preventDefault();
            this.exportData();
        }, '導出數據');
        
        // 導航快捷鍵
        this.addShortcut('Tab', (e) => {
            this.handleTabNavigation(e);
        }, 'Tab導航');
        
        this.addShortcut('Shift+Tab', (e) => {
            this.handleTabNavigation(e, true);
        }, '反向Tab導航');
        
        this.addShortcut('Enter', (e) => {
            this.handleEnterKey(e);
        }, '確認/激活');
        
        this.addShortcut('Space', (e) => {
            this.handleSpaceKey(e);
        }, '選擇/切換');
        
        // 方向鍵導航
        this.addShortcut('ArrowUp', (e) => {
            this.handleArrowNavigation(e, 'up');
        }, '向上導航');
        
        this.addShortcut('ArrowDown', (e) => {
            this.handleArrowNavigation(e, 'down');
        }, '向下導航');
        
        this.addShortcut('ArrowLeft', (e) => {
            this.handleArrowNavigation(e, 'left');
        }, '向左導航');
        
        this.addShortcut('ArrowRight', (e) => {
            this.handleArrowNavigation(e, 'right');
        }, '向右導航');
    }
    
    handleKeyDown(e) {
        if (!this.isEnabled) return;
        
        const key = this.getKeyString(e);
        const shortcut = this.shortcuts.get(key);
        
        if (shortcut) {
            try {
                shortcut.handler(e);
            } catch (error) {
                window.errorHandler?.report(error, { 
                    context: 'keyboard_shortcut', 
                    key 
                });
            }
        }
    }
    
    handleKeyUp(e) {
        // 處理按鍵釋放事件（如果需要）
    }
    
    getKeyString(e) {
        const parts = [];
        
        if (e.ctrlKey) parts.push('Ctrl');
        if (e.shiftKey) parts.push('Shift');
        if (e.altKey) parts.push('Alt');
        if (e.metaKey) parts.push('Meta');
        
        parts.push(e.key);
        
        return parts.join('+');
    }
    
    addShortcut(key, handler, description = '') {
        this.shortcuts.set(key, { handler, description });
    }
    
    removeShortcut(key) {
        this.shortcuts.delete(key);
    }
    
    updateFocusableElements() {
        const selectors = [
            'button:not([disabled])',
            'input:not([disabled])',
            'select:not([disabled])',
            'textarea:not([disabled])',
            'a[href]',
            '[tabindex]:not([tabindex="-1"])',
            '[role="button"]:not([disabled])',
            '[role="checkbox"]:not([disabled])',
            '[role="radio"]:not([disabled])'
        ];
        
        this.focusableElements = Array.from(
            document.querySelectorAll(selectors.join(', '))
        ).filter(el => {
            return el.offsetWidth > 0 && 
                   el.offsetHeight > 0 && 
                   !el.hidden &&
                   window.getComputedStyle(el).visibility !== 'hidden';
        });
    }
    
    observeDOM() {
        const observer = new MutationObserver(() => {
            // 延遲更新，避免頻繁操作
            clearTimeout(this.updateTimeout);
            this.updateTimeout = setTimeout(() => {
                this.updateFocusableElements();
            }, 100);
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['disabled', 'hidden', 'tabindex']
        });
    }
    
    handleTabNavigation(e, reverse = false) {
        const currentIndex = this.focusableElements.indexOf(document.activeElement);
        
        if (currentIndex === -1) {
            // 沒有元素被聚焦，聚焦第一個
            if (this.focusableElements.length > 0) {
                e.preventDefault();
                this.focusableElements[0].focus();
            }
            return;
        }
        
        const nextIndex = reverse 
            ? (currentIndex - 1 + this.focusableElements.length) % this.focusableElements.length
            : (currentIndex + 1) % this.focusableElements.length;
        
        e.preventDefault();
        this.focusableElements[nextIndex].focus();
    }
    
    handleEnterKey(e) {
        const activeElement = document.activeElement;
        
        if (activeElement) {
            if (activeElement.tagName === 'BUTTON' || 
                activeElement.role === 'button') {
                activeElement.click();
            } else if (activeElement.tagName === 'A') {
                activeElement.click();
            } else if (activeElement.type === 'submit') {
                activeElement.form?.submit();
            }
        }
    }
    
    handleSpaceKey(e) {
        const activeElement = document.activeElement;
        
        if (activeElement) {
            if (activeElement.type === 'checkbox' || 
                activeElement.role === 'checkbox') {
                e.preventDefault();
                activeElement.click();
            } else if (activeElement.role === 'button') {
                e.preventDefault();
                activeElement.click();
            }
        }
    }
    
    handleArrowNavigation(e, direction) {
        const activeElement = document.activeElement;
        
        // 在網格或列表中導航
        if (activeElement?.closest('.photo-grid')) {
            e.preventDefault();
            this.navigatePhotoGrid(direction);
        } else if (activeElement?.closest('.data-table')) {
            e.preventDefault();
            this.navigateTable(direction);
        }
    }
    
    navigatePhotoGrid(direction) {
        const photoItems = Array.from(document.querySelectorAll('.photo-item'));
        const currentIndex = photoItems.indexOf(document.activeElement);
        
        if (currentIndex === -1) return;
        
        const gridColumns = this.getGridColumns();
        let nextIndex;
        
        switch (direction) {
            case 'up':
                nextIndex = currentIndex - gridColumns;
                break;
            case 'down':
                nextIndex = currentIndex + gridColumns;
                break;
            case 'left':
                nextIndex = currentIndex - 1;
                break;
            case 'right':
                nextIndex = currentIndex + 1;
                break;
        }
        
        if (nextIndex >= 0 && nextIndex < photoItems.length) {
            photoItems[nextIndex].focus();
        }
    }
    
    navigateTable(direction) {
        const cells = Array.from(document.querySelectorAll('.data-table td, .data-table th'));
        const currentIndex = cells.indexOf(document.activeElement);
        
        if (currentIndex === -1) return;
        
        const table = document.activeElement.closest('table');
        const rows = Array.from(table.querySelectorAll('tr'));
        const currentRow = document.activeElement.closest('tr');
        const currentRowIndex = rows.indexOf(currentRow);
        const currentCellIndex = Array.from(currentRow.cells).indexOf(document.activeElement);
        
        let nextCell;
        
        switch (direction) {
            case 'up':
                if (currentRowIndex > 0) {
                    nextCell = rows[currentRowIndex - 1].cells[currentCellIndex];
                }
                break;
            case 'down':
                if (currentRowIndex < rows.length - 1) {
                    nextCell = rows[currentRowIndex + 1].cells[currentCellIndex];
                }
                break;
            case 'left':
                if (currentCellIndex > 0) {
                    nextCell = currentRow.cells[currentCellIndex - 1];
                }
                break;
            case 'right':
                if (currentCellIndex < currentRow.cells.length - 1) {
                    nextCell = currentRow.cells[currentCellIndex + 1];
                }
                break;
        }
        
        if (nextCell) {
            const focusableInCell = nextCell.querySelector('button, input, select, textarea, a[href]');
            if (focusableInCell) {
                focusableInCell.focus();
            } else {
                nextCell.focus();
            }
        }
    }
    
    getGridColumns() {
        const photoGrid = document.querySelector('.photo-grid');
        if (!photoGrid) return 1;
        
        const computedStyle = window.getComputedStyle(photoGrid);
        const gridTemplateColumns = computedStyle.gridTemplateColumns;
        
        return gridTemplateColumns.split(' ').length;
    }
    
    // 應用程式特定功能
    closeModals() {
        const modals = document.querySelectorAll('.defect-window, .detail-popup, .floor-plan-overlay');
        modals.forEach(modal => {
            // Check if modal is visible (either display !== 'none' or z-index !== '-3')
            const isVisible = modal.style.display !== 'none' && modal.style.zIndex !== '-3';
            if (isVisible) {
                const closeBtn = modal.querySelector('.defect-close, .detail-popup-close, .floor-plan-close-text');
                if (closeBtn) {
                    closeBtn.click();
                }
            }
        });
        
        // 特別處理移動端標籤模態框
        const mobileLabelModal = document.getElementById('mobileLabelModalOverlay');
        if (mobileLabelModal && mobileLabelModal.style.display === 'flex') {
            // 只關閉移動端標籤模態框，不觸發其他事件
            mobileLabelModal.style.display = 'none';
        }
    }
    
    showHelp() {
        const shortcuts = Array.from(this.shortcuts.entries())
            .filter(([key, shortcut]) => shortcut.description)
            .map(([key, shortcut]) => `${key}: ${shortcut.description}`)
            .join('\n');
        
        if (window.toast) {
            window.toast.info('鍵盤快捷鍵:\n' + shortcuts, 8000);
        }
    }
    
    saveData() {
        const saveBtn = document.querySelector('[data-action="saveas"]');
        if (saveBtn) {
            saveBtn.click();
        }
    }
    
    openFile() {
        const openBtn = document.querySelector('[data-action="open"]');
        if (openBtn) {
            openBtn.click();
        }
    }
    
    newProject() {
        // 實現新建項目邏輯
        if (window.toast) {
            window.toast.info('新建項目功能');
        }
    }
    
    exportData() {
        const exportBtn = document.querySelector('[data-action="exportcsv"]');
        if (exportBtn) {
            exportBtn.click();
        }
    }
    
    // 啟用/禁用鍵盤導航
    enable() {
        this.isEnabled = true;
    }
    
    disable() {
        this.isEnabled = false;
    }
    
    // 獲取所有快捷鍵
    getShortcuts() {
        return Array.from(this.shortcuts.entries()).map(([key, shortcut]) => ({
            key,
            description: shortcut.description
        }));
    }
}

// 全域實例
window.keyboardNav = new KeyboardNavigationManager();

// 導出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = KeyboardNavigationManager;
}
