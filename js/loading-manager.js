// 載入狀態管理器
class LoadingManager {
    constructor() {
        this.overlay = null;
        this.messageElement = null;
        this.isVisible = false;
        this.loadingQueue = new Set();
        
        this.init();
    }
    
    init() {
        // 等待DOM載入完成
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupElements();
            });
        } else {
            this.setupElements();
        }
    }
    
    setupElements() {
        this.overlay = document.getElementById('globalLoadingOverlay');
        this.messageElement = document.getElementById('loadingMessage');
        
        if (!this.overlay || !this.messageElement) {
            console.warn('Loading overlay elements not found');
            return;
        }
        
        // 初始載入
        this.show('正在初始化應用程式...');
        
        // 監聽頁面載入完成
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.hide();
            }, 500); // 延遲500ms隱藏，確保用戶看到載入完成
        });
    }
    
    show(message = '載入中...', id = 'default') {
        if (!this.overlay || !this.messageElement) {
            return;
        }
        
        this.loadingQueue.add(id);
        this.messageElement.textContent = message;
        
        if (!this.isVisible) {
            this.overlay.style.display = 'flex';
            this.isVisible = true;
            
            // 添加淡入動畫
            requestAnimationFrame(() => {
                this.overlay.style.opacity = '1';
            });
        }
    }
    
    hide(id = 'default') {
        this.loadingQueue.delete(id);
        
        if (this.loadingQueue.size === 0 && this.isVisible) {
            this.overlay.style.opacity = '0';
            
            setTimeout(() => {
                if (this.loadingQueue.size === 0) {
                    this.overlay.style.display = 'none';
                    this.isVisible = false;
                }
            }, 300); // 等待淡出動畫完成
        }
    }
    
    updateMessage(message) {
        if (this.messageElement) {
            this.messageElement.textContent = message;
        }
    }
    
    // 顯示特定操作的載入狀態
    showOperation(operation, message) {
        this.show(message, operation);
    }
    
    hideOperation(operation) {
        this.hide(operation);
    }
    
    // 顯示進度
    showProgress(message, progress) {
        this.show(`${message} (${Math.round(progress)}%)`);
    }
    
    // 顯示錯誤狀態
    showError(message) {
        this.updateMessage(`錯誤: ${message}`);
        
        // 3秒後自動隱藏
        setTimeout(() => {
            this.hide();
        }, 3000);
    }
    
    // 顯示成功狀態
    showSuccess(message) {
        this.updateMessage(`成功: ${message}`);
        
        // 1秒後自動隱藏
        setTimeout(() => {
            this.hide();
        }, 1000);
    }
}

// 全域實例
window.loadingManager = new LoadingManager();

// 導出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LoadingManager;
}
