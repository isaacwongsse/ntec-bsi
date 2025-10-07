// Toast 通知系統
class ToastManager {
    constructor() {
        this.container = null;
        this.toasts = new Map();
        this.toastId = 0;
        
        this.init();
    }
    
    init() {
        // 等待DOM載入完成
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.createContainer();
            });
        } else {
            this.createContainer();
        }
    }
    
    createContainer() {
        // 創建Toast容器
        this.container = document.createElement('div');
        this.container.id = 'toast-container';
        this.container.className = 'toast-container';
        document.body.appendChild(this.container);
    }
    
    show(message, type = 'info', duration = 4000, options = {}) {
        if (!this.container) {
            this.createContainer();
        }
        
        const toastId = ++this.toastId;
        const toast = this.createToast(message, type, options);
        
        // 添加到容器
        this.container.appendChild(toast);
        this.toasts.set(toastId, toast);
        
        // 觸發進入動畫
        requestAnimationFrame(() => {
            toast.classList.add('toast-show');
        });
        
        // 自動隱藏
        if (duration > 0) {
            setTimeout(() => {
                this.hide(toastId);
            }, duration);
        }
        
        return toastId;
    }
    
    createToast(message, type, options) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        // 圖標映射
        const icons = {
            success: 'fas fa-check-circle',
            error: 'fas fa-exclamation-circle',
            warning: 'fas fa-exclamation-triangle',
            info: 'fas fa-info-circle'
        };
        
        const icon = icons[type] || icons.info;
        
        toast.innerHTML = `
            <div class="toast-content">
                <div class="toast-icon">
                    <i class="${icon}"></i>
                </div>
                <div class="toast-message">${message}</div>
                ${options.closable !== false ? '<button class="toast-close" aria-label="關閉"><i class="fas fa-times"></i></button>' : ''}
            </div>
            <div class="toast-progress"></div>
        `;
        
        // 添加關閉事件
        if (options.closable !== false) {
            const closeBtn = toast.querySelector('.toast-close');
            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.hideToast(toast);
            });
        }
        
        // 添加點擊事件
        if (options.onClick) {
            toast.addEventListener('click', options.onClick);
            toast.style.cursor = 'pointer';
        }
        
        return toast;
    }
    
    hide(toastId) {
        const toast = this.toasts.get(toastId);
        if (toast) {
            this.hideToast(toast);
            this.toasts.delete(toastId);
        }
    }
    
    hideToast(toast) {
        toast.classList.add('toast-hide');
        
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300); // 等待動畫完成
    }
    
    // 便捷方法
    success(message, duration = 4000, options = {}) {
        return this.show(message, 'success', duration, options);
    }
    
    error(message, duration = 6000, options = {}) {
        return this.show(message, 'error', duration, options);
    }
    
    warning(message, duration = 5000, options = {}) {
        return this.show(message, 'warning', duration, options);
    }
    
    info(message, duration = 4000, options = {}) {
        return this.show(message, 'info', duration, options);
    }
    
    // 清除所有Toast
    clear() {
        this.toasts.forEach((toast) => {
            this.hideToast(toast);
        });
        this.toasts.clear();
    }
    
    // 顯示載入Toast
    loading(message = '載入中...', options = {}) {
        const loadingToast = this.show(message, 'info', 0, {
            ...options,
            closable: false
        });
        
        // 添加載入動畫
        const toast = this.toasts.get(loadingToast);
        if (toast) {
            const icon = toast.querySelector('.toast-icon i');
            icon.className = 'fas fa-spinner fa-spin';
        }
        
        return loadingToast;
    }
    
    // 更新載入Toast
    updateLoading(toastId, message) {
        const toast = this.toasts.get(toastId);
        if (toast) {
            const messageElement = toast.querySelector('.toast-message');
            messageElement.textContent = message;
        }
    }
    
    // 完成載入Toast
    completeLoading(toastId, message, type = 'success') {
        const toast = this.toasts.get(toastId);
        if (toast) {
            const icon = toast.querySelector('.toast-icon i');
            const messageElement = toast.querySelector('.toast-message');
            
            // 更新圖標和消息
            const icons = {
                success: 'fas fa-check-circle',
                error: 'fas fa-exclamation-circle'
            };
            
            icon.className = icons[type] || icons.success;
            messageElement.textContent = message;
            toast.className = `toast toast-${type}`;
            
            // 自動隱藏
            setTimeout(() => {
                this.hide(toastId);
            }, 3000);
        }
    }
}

// 全域實例
window.toast = new ToastManager();

// 導出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ToastManager;
}
