// 效能優化工具函數

// 防抖函數
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 節流函數
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// 批量 DOM 操作
function batchDOMOperations(operations) {
    const fragment = document.createDocumentFragment();
    operations.forEach(op => {
        if (op.type === 'create') {
            fragment.appendChild(op.element);
        }
    });
    return fragment;
}

// 圖片壓縮
function compressImage(file, maxWidth = 1920, quality = 0.8) {
    return new Promise((resolve) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        
        img.onload = () => {
            const ratio = Math.min(maxWidth / img.width, maxWidth / img.height);
            canvas.width = img.width * ratio;
            canvas.height = img.height * ratio;
            
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            canvas.toBlob(resolve, 'image/jpeg', quality);
        };
        
        img.src = URL.createObjectURL(file);
    });
}

// 虛擬滾動實現
class VirtualScroll {
    constructor(container, items, itemHeight, renderItem) {
        this.container = container;
        this.items = items;
        this.itemHeight = itemHeight;
        this.renderItem = renderItem;
        this.visibleCount = Math.ceil(container.clientHeight / itemHeight);
        this.startIndex = 0;
        this.endIndex = this.visibleCount;
        
        this.init();
    }
    
    init() {
        this.container.addEventListener('scroll', throttle(() => {
            this.updateVisibleItems();
        }, 16));
        
        this.render();
    }
    
    updateVisibleItems() {
        const scrollTop = this.container.scrollTop;
        this.startIndex = Math.floor(scrollTop / this.itemHeight);
        this.endIndex = Math.min(this.startIndex + this.visibleCount, this.items.length);
        
        this.render();
    }
    
    render() {
        const visibleItems = this.items.slice(this.startIndex, this.endIndex);
        const offsetY = this.startIndex * this.itemHeight;
        
        this.container.innerHTML = '';
        visibleItems.forEach((item, index) => {
            const element = this.renderItem(item, this.startIndex + index);
            element.style.position = 'absolute';
            element.style.top = (index * this.itemHeight) + 'px';
            this.container.appendChild(element);
        });
        
        this.container.style.height = (this.items.length * this.itemHeight) + 'px';
    }
}

// 數據驗證工具
const Validator = {
    email: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    
    required: (value) => value !== null && value !== undefined && value.toString().trim() !== '',
    
    number: (value) => !isNaN(value) && isFinite(value),
    
    date: (value) => !isNaN(Date.parse(value)),
    
    fileSize: (file, maxSize) => file.size <= maxSize,
    
    fileType: (file, allowedTypes) => allowedTypes.includes(file.type)
};

// 事件委託
function delegateEvent(parent, selector, event, handler) {
    parent.addEventListener(event, (e) => {
        if (e.target.matches(selector)) {
            handler.call(e.target, e);
        }
    });
}

// 動畫幀節流
function rafThrottle(func) {
    let rafId;
    return function(...args) {
        if (rafId) return;
        rafId = requestAnimationFrame(() => {
            func.apply(this, args);
            rafId = null;
        });
    };
}

// 智能防抖 - 結合立即執行和延遲執行
function smartDebounce(func, wait, immediate = false) {
    let timeout;
    return function executedFunction(...args) {
        const callNow = immediate && !timeout;
        
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = null;
            if (!immediate) func.apply(this, args);
        }, wait);
        
        if (callNow) func.apply(this, args);
    };
}

// 批量事件處理
function batchEventHandlers(handlers) {
    const eventMap = new Map();
    
    handlers.forEach(({ element, events, handler }) => {
        events.forEach(event => {
            if (!eventMap.has(event)) {
                eventMap.set(event, []);
            }
            eventMap.get(event).push({ element, handler });
        });
    });
    
    eventMap.forEach((handlers, event) => {
        document.addEventListener(event, (e) => {
            handlers.forEach(({ element, handler }) => {
                if (e.target.matches(element)) {
                    handler(e);
                }
            });
        });
    });
}

// 性能監控裝飾器
function performanceMonitor(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function(...args) {
        const start = performance.now();
        const result = originalMethod.apply(this, args);
        const end = performance.now();
        
        if (CONFIG.isDevelopment) {
            window.logger.log(`${target.constructor.name}.${propertyKey} took ${(end - start).toFixed(2)}ms`);
        }
        
        return result;
    };
    
    return descriptor;
}

// 錯誤邊界裝飾器
function errorBoundary(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function(...args) {
        try {
            return originalMethod.apply(this, args);
        } catch (error) {
            window.logger.error(`Error in ${target.constructor.name}.${propertyKey}:`, error);
            
            // 顯示用戶友好的錯誤消息
            if (window.loadingManager) {
                window.loadingManager.showError('操作失敗，請重試');
            }
            
            return null;
        }
    };
    
    return descriptor;
}

// 錯誤處理工具已移至 data-validator.js

// 導出工具函數
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        debounce,
        throttle,
        smartDebounce,
        rafThrottle,
        batchDOMOperations,
        compressImage,
        VirtualScroll,
        Validator,
        delegateEvent,
        batchEventHandlers,
        performanceMonitor,
        errorBoundary
    };
}

// 將工具函數添加到 window 對象供瀏覽器使用
window.utils = {
    debounce,
    throttle,
    smartDebounce,
    rafThrottle,
    batchDOMOperations,
    compressImage,
    VirtualScroll,
    Validator,
    delegateEvent,
    batchEventHandlers,
    performanceMonitor,
    errorBoundary
};
