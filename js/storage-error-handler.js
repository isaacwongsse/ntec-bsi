/**
 * 存儲錯誤處理器 - 提供統一的錯誤處理機制
 */
class StorageErrorHandler {
    constructor() {
        this.errorCount = 0;
        this.maxErrors = 5;
        this.errorWindow = 60000; // 1分鐘
        this.errorTimestamps = [];
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
            this.showCriticalError();
        }
        
        // 顯示用戶友好的錯誤消息
        this.showUserError(operation, error);
        
        return this.createFallbackResponse(operation, context);
    }

    /**
     * 顯示嚴重錯誤警告
     */
    showCriticalError() {
        console.error('存儲系統發生多次錯誤，請檢查瀏覽器設置');
        
        // 通知用戶
        if (window.showNotification) {
            window.showNotification(
                '存儲系統發生嚴重錯誤。請確保瀏覽器允許使用 IndexedDB，或嘗試清除瀏覽器數據後重新載入。',
                'error',
                10000
            );
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
        console.log('存儲錯誤處理器已重置');
    }

    /**
     * 獲取錯誤統計
     */
    getErrorStats() {
        return {
            errorCount: this.errorTimestamps.length,
            maxErrors: this.maxErrors,
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
