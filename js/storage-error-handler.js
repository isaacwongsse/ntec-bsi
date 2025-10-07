/**
 * 存儲錯誤處理器 - 提供統一的錯誤處理和回退機制
 */
class StorageErrorHandler {
    constructor() {
        this.errorCount = 0;
        this.maxErrors = 5;
        this.errorWindow = 60000; // 1分鐘
        this.errorTimestamps = [];
        this.fallbackMode = false;
    }

    /**
     * 處理存儲錯誤
     */
    handleError(error, operation, context = {}) {
        console.error(`存儲錯誤 [${operation}]:`, error, context);
        
        // 記錄錯誤時間戳
        const now = Date.now();
        this.errorTimestamps.push(now);
        
        // 清理舊的錯誤時間戳
        this.errorTimestamps = this.errorTimestamps.filter(
            timestamp => now - timestamp < this.errorWindow
        );
        
        // 檢查是否超過錯誤閾值
        if (this.errorTimestamps.length >= this.maxErrors) {
            this.enableFallbackMode();
        }
        
        // 顯示用戶友好的錯誤消息
        this.showUserError(operation, error);
        
        return this.createFallbackResponse(operation, context);
    }

    /**
     * 啟用回退模式
     */
    enableFallbackMode() {
        if (!this.fallbackMode) {
            this.fallbackMode = true;
            console.warn('存儲錯誤過多，啟用回退模式');
            
            // 通知用戶
            if (window.showNotification) {
                window.showNotification(
                    '存儲系統遇到問題，已切換到備用模式。數據仍會保存，但可能會有性能影響。',
                    'warning'
                );
            }
            
            // 強制使用 localStorage
            if (window.storageAdapter) {
                window.storageAdapter.forceLocalStorage();
            }
        }
    }

    /**
     * 顯示用戶錯誤消息
     */
    showUserError(operation, error) {
        const messages = {
            'setItem': '保存數據時發生錯誤',
            'getItem': '讀取數據時發生錯誤',
            'removeItem': '刪除數據時發生錯誤',
            'clear': '清除數據時發生錯誤',
            'init': '初始化存儲系統時發生錯誤'
        };
        
        const message = messages[operation] || '存儲操作發生錯誤';
        
        if (window.showNotification) {
            window.showNotification(`${message}: ${error.message}`, 'error');
        }
    }

    /**
     * 創建回退響應
     */
    createFallbackResponse(operation, context) {
        switch (operation) {
            case 'getItem':
                return null;
            case 'setItem':
            case 'removeItem':
            case 'clear':
                return Promise.resolve();
            case 'init':
                return Promise.resolve();
            default:
                return null;
        }
    }

    /**
     * 重置錯誤計數器
     */
    reset() {
        this.errorCount = 0;
        this.errorTimestamps = [];
        this.fallbackMode = false;
        console.log('存儲錯誤處理器已重置');
    }

    /**
     * 檢查是否在回退模式
     */
    isInFallbackMode() {
        return this.fallbackMode;
    }

    /**
     * 獲取錯誤統計
     */
    getErrorStats() {
        return {
            errorCount: this.errorTimestamps.length,
            maxErrors: this.maxErrors,
            fallbackMode: this.fallbackMode,
            errorWindow: this.errorWindow
        };
    }
}

// 創建全局實例
window.storageErrorHandler = new StorageErrorHandler();

// 導出類別
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StorageErrorHandler;
}
