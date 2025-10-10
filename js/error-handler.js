// 全域錯誤處理系統
class ErrorHandler {
    constructor() {
        this.errorQueue = [];
        this.maxErrors = 50;
        this.isInitialized = false;
        
        this.init();
    }
    
    init() {
        if (this.isInitialized) return;
        
        // 捕獲未處理的JavaScript錯誤
        window.addEventListener('error', (event) => {
            this.handleError({
                type: 'javascript',
                message: event.message,
                filename: event.filename,
                lineno: event.lineno,
                colno: event.colno,
                error: event.error,
                timestamp: new Date().toISOString()
            });
        });
        
        // 捕獲未處理的Promise錯誤
        window.addEventListener('unhandledrejection', (event) => {
            this.handleError({
                type: 'promise',
                message: event.reason?.message || 'Unhandled Promise Rejection',
                error: event.reason,
                timestamp: new Date().toISOString()
            });
        });
        
        // 捕獲資源載入錯誤
        window.addEventListener('error', (event) => {
            if (event.target !== window) {
                // 過濾掉一些常見的、非關鍵的資源載入失敗
                const src = event.target.src || event.target.href || '';
                const isIgnoredResource = this.shouldIgnoreResourceError(src, event.target.tagName);
                
                // 調試信息
                if (CONFIG.isDevelopment) {
                    console.debug(`[RESOURCE ERROR] ${src} (${event.target.tagName}) - Ignored: ${isIgnoredResource}`);
                }
                
                if (!isIgnoredResource) {
                    this.handleError({
                        type: 'resource',
                        message: `Failed to load resource: ${src}`,
                        element: event.target.tagName,
                        elementId: event.target.id || '',
                        elementClass: event.target.className || '',
                        timestamp: new Date().toISOString()
                    });
                } else {
                    // 記錄被忽略的資源錯誤（僅在開發模式下）
                    if (CONFIG.isDevelopment) {
                        console.debug(`[IGNORED] Resource load failed: ${src} (${event.target.tagName})`);
                    }
                }
            }
        }, true);
        
        this.isInitialized = true;
    }
    
    // 判斷是否應該忽略資源載入錯誤
    shouldIgnoreResourceError(src, tagName) {
        // 忽略的資源類型
        const ignoredPatterns = [
            // PDF.js 相關資源（這些是可選的）
            /pdf\.js/,
            /pdf\.worker\.min\.js/,
            // 外部 CDN 資源（網路問題時可能失敗）
            /cdnjs\.cloudflare\.com/,
            /unpkg\.com/,
            // 一些常見的第三方資源
            /googleapis\.com/,
            /gstatic\.com/,
            // 空的或無效的 src
            /^$|^undefined$|^null$/,
            // 數據 URL（通常不會失敗）
            /^data:/,
            // 主頁面 URL（可能是某些元素的錯誤配置）
            /isaacwongsse\.github\.io\/ntec-bsi\/?$/,
            // 相對路徑的根目錄
            /^\/$|^\.\/$/
        ];
        
        // 檢查是否匹配忽略模式
        for (const pattern of ignoredPatterns) {
            if (pattern.test(src)) {
                if (CONFIG.isDevelopment) {
                    console.debug(`[IGNORED] Resource matched pattern: ${pattern} for ${src}`);
                }
                return true;
            }
        }
        
        // 忽略某些標籤的特定錯誤
        if (tagName === 'SCRIPT' && src.includes('pdf.js')) {
            return true; // PDF.js 載入失敗是可接受的
        }
        
        // 調試信息
        if (CONFIG.isDevelopment) {
            console.debug(`[NOT IGNORED] Resource: ${src} (${tagName})`);
        }
        
        return false;
    }
    
    handleError(errorInfo) {
        // 添加到錯誤佇列
        this.errorQueue.push(errorInfo);
        
        // 限制錯誤佇列大小
        if (this.errorQueue.length > this.maxErrors) {
            this.errorQueue.shift();
        }
        
        // 記錄錯誤
        this.logError(errorInfo);
        
        // 顯示用戶友好的錯誤消息
        this.showUserError(errorInfo);
        
        // 發送錯誤報告（如果需要）
        if (CONFIG.isDevelopment) {
            this.reportError(errorInfo);
        }
    }
    
    logError(errorInfo) {
        const errorMessage = `[${errorInfo.type.toUpperCase()}] ${errorInfo.message}`;
        
        if (errorInfo.filename) {
            console.error(`${errorMessage} at ${errorInfo.filename}:${errorInfo.lineno}:${errorInfo.colno}`);
        } else {
            console.error(errorMessage);
        }
        
        if (errorInfo.error && errorInfo.error.stack) {
            console.error(errorInfo.error.stack);
        }
    }
    
    showUserError(errorInfo) {
        // 根據錯誤類型顯示不同的用戶消息
        let userMessage = '';
        let toastType = 'error';
        
        switch (errorInfo.type) {
            case 'javascript':
                userMessage = '應用程式發生錯誤，請重新整理頁面';
                break;
            case 'promise':
                userMessage = '操作失敗，請重試';
                break;
            case 'resource':
                userMessage = '資源載入失敗，請檢查網路連線';
                toastType = 'warning';
                break;
            default:
                userMessage = '發生未知錯誤';
        }
        
        // 使用Toast顯示錯誤
        if (window.toast) {
            window.toast.show(userMessage, toastType, 6000, {
                onClick: () => {
                    this.showErrorDetails(errorInfo);
                }
            });
        }
    }
    
    showErrorDetails(errorInfo) {
        if (!CONFIG.isDevelopment) return;
        
        const details = `
            錯誤類型: ${errorInfo.type}
            錯誤消息: ${errorInfo.message}
            ${errorInfo.filename ? `文件: ${errorInfo.filename}` : ''}
            ${errorInfo.lineno ? `行號: ${errorInfo.lineno}` : ''}
            時間: ${errorInfo.timestamp}
        `;
        
        console.group('錯誤詳情');
        window.logger.log(details);
        if (errorInfo.error) {
            console.error(errorInfo.error);
        }
        console.groupEnd();
    }
    
    reportError(errorInfo) {
        // 在開發模式下，可以發送錯誤報告到監控服務
        // 這裡只是示例，實際使用時可以集成 Sentry 等服務
        if (CONFIG.isDevelopment) {
            window.logger.log('Error reported:', errorInfo);
        }
    }
    
    // 手動報告錯誤
    report(error, context = {}) {
        const errorInfo = {
            type: 'manual',
            message: error.message || error,
            error: error instanceof Error ? error : new Error(error),
            context,
            timestamp: new Date().toISOString()
        };
        
        this.handleError(errorInfo);
    }
    
    // 包裝函數以捕獲錯誤
    wrapFunction(fn, context = '') {
        return (...args) => {
            try {
                const result = fn.apply(this, args);
                
                // 如果返回Promise，則處理Promise錯誤
                if (result && typeof result.catch === 'function') {
                    return result.catch(error => {
                        this.report(error, { context, args });
                        throw error;
                    });
                }
                
                return result;
            } catch (error) {
                this.report(error, { context, args });
                throw error;
            }
        };
    }
    
    // 包裝異步函數
    wrapAsync(fn, context = '') {
        return async (...args) => {
            try {
                return await fn.apply(this, args);
            } catch (error) {
                this.report(error, { context, args });
                throw error;
            }
        };
    }
    
    // 獲取錯誤統計
    getErrorStats() {
        const stats = {
            total: this.errorQueue.length,
            byType: {},
            recent: this.errorQueue.slice(-10)
        };
        
        this.errorQueue.forEach(error => {
            stats.byType[error.type] = (stats.byType[error.type] || 0) + 1;
        });
        
        return stats;
    }
    
    // 清除錯誤佇列
    clearErrors() {
        this.errorQueue = [];
    }
    
    // 重試機制
    async retry(fn, maxAttempts = 3, delay = 1000) {
        let lastError;
        
        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
            try {
                return await fn();
            } catch (error) {
                lastError = error;
                
                if (attempt === maxAttempts) {
                    this.report(error, { 
                        context: 'retry_failed', 
                        attempts: maxAttempts 
                    });
                    throw error;
                }
                
                // 等待後重試
                await new Promise(resolve => setTimeout(resolve, delay * attempt));
            }
        }
    }
    
    // 斷路器模式
    createCircuitBreaker(fn, threshold = 5, timeout = 60000) {
        let failures = 0;
        let lastFailureTime = 0;
        let state = 'closed'; // closed, open, half-open
        
        return async (...args) => {
            const now = Date.now();
            
            if (state === 'open') {
                if (now - lastFailureTime > timeout) {
                    state = 'half-open';
                } else {
                    throw new Error('Circuit breaker is open');
                }
            }
            
            try {
                const result = await fn.apply(this, args);
                
                if (state === 'half-open') {
                    state = 'closed';
                    failures = 0;
                }
                
                return result;
            } catch (error) {
                failures++;
                lastFailureTime = now;
                
                if (failures >= threshold) {
                    state = 'open';
                    this.report(error, { 
                        context: 'circuit_breaker_open', 
                        failures 
                    });
                }
                
                throw error;
            }
        };
    }
}

// 全域實例
window.errorHandler = new ErrorHandler();

// 導出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ErrorHandler;
}
