// 圖片懶加載模組
class LazyLoader {
    constructor(options = {}) {
        this.options = {
            root: null,
            rootMargin: '50px',
            threshold: 0.1,
            ...options
        };
        
        this.observer = null;
        this.loadedImages = new Set();
        this.failedImages = new Set();
        
        this.init();
    }
    
    init() {
        // 檢查瀏覽器支援
        if (!('IntersectionObserver' in window)) {
            this.fallbackLoad();
            return;
        }
        
        // 創建 Intersection Observer
        this.observer = new IntersectionObserver(
            this.handleIntersection.bind(this),
            this.options
        );
        
        // 監聽所有帶有 data-lazy 屬性的圖片
        this.observeImages();
    }
    
    observeImages() {
        const lazyImages = document.querySelectorAll('img[data-lazy]');
        lazyImages.forEach(img => {
            this.observer.observe(img);
        });
    }
    
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this.loadImage(entry.target);
                this.observer.unobserve(entry.target);
            }
        });
    }
    
    loadImage(img) {
        const src = img.getAttribute('data-lazy');
        const alt = img.getAttribute('data-alt') || '';
        
        if (!src || this.loadedImages.has(src)) {
            return;
        }
        
        // 添加載入狀態
        img.classList.add('lazy-loading');
        
        // 創建新的圖片元素
        const newImg = new Image();
        
        newImg.onload = () => {
            // 載入成功
            img.src = src;
            img.alt = alt;
            img.classList.remove('lazy-loading');
            img.classList.add('lazy-loaded');
            
            this.loadedImages.add(src);
            
            // 觸發載入完成事件
            img.dispatchEvent(new CustomEvent('lazyLoaded', {
                detail: { src, alt }
            }));
        };
        
        newImg.onerror = () => {
            // 載入失敗
            img.classList.remove('lazy-loading');
            img.classList.add('lazy-error');
            
            this.failedImages.add(src);
            
            // 顯示錯誤圖片
            img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2NjYyIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+5Zu+54mH5Yqg6L295aSx6LSlPC90ZXh0Pjwvc3ZnPg==';
            img.alt = '圖片載入失敗';
            
            // 觸發載入失敗事件
            img.dispatchEvent(new CustomEvent('lazyError', {
                detail: { src, alt }
            }));
        };
        
        // 開始載入
        newImg.src = src;
    }
    
    // 回退方案：直接載入所有圖片
    fallbackLoad() {
        const lazyImages = document.querySelectorAll('img[data-lazy]');
        lazyImages.forEach(img => {
            this.loadImage(img);
        });
    }
    
    // 手動載入圖片
    loadImageManually(img) {
        if (img.hasAttribute('data-lazy')) {
            this.loadImage(img);
        }
    }
    
    // 預載入圖片
    preloadImage(src) {
        return new Promise((resolve, reject) => {
            if (this.loadedImages.has(src)) {
                resolve();
                return;
            }
            
            if (this.failedImages.has(src)) {
                reject(new Error('Image previously failed to load'));
                return;
            }
            
            const img = new Image();
            img.onload = () => {
                this.loadedImages.add(src);
                resolve();
            };
            img.onerror = () => {
                this.failedImages.add(src);
                reject(new Error('Failed to load image'));
            };
            img.src = src;
        });
    }
    
    // 批量預載入
    async preloadImages(srcs) {
        const promises = srcs.map(src => this.preloadImage(src));
        return Promise.allSettled(promises);
    }
    
    // 清理
    destroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
        this.loadedImages.clear();
        this.failedImages.clear();
    }
}

// 全域實例
window.lazyLoader = new LazyLoader();

// 導出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LazyLoader;
}
