// 增強版虛擬滾動系統
class VirtualScrollEnhanced {
    constructor(container, options = {}) {
        this.container = container;
        this.options = {
            itemHeight: 120,
            itemWidth: 120,
            gap: 10,
            bufferSize: 5,
            threshold: 100,
            ...options
        };
        
        this.items = [];
        this.visibleItems = [];
        this.renderedElements = new Map();
        this.observer = null;
        this.isEnabled = false;
        
        this.containerHeight = 0;
        this.containerWidth = 0;
        this.columnsCount = 1;
        this.rowsCount = 0;
        this.visibleStartRow = 0;
        this.visibleEndRow = 0;
        
        this.init();
    }
    
    init() {
        this.setupContainer();
        this.setupIntersectionObserver();
        this.bindEvents();
        this.calculateDimensions();
    }
    
    setupContainer() {
        // 確保容器有正確的樣式
        this.container.style.position = 'relative';
        this.container.style.overflow = 'auto';
        
        // 創建內容容器
        this.contentContainer = document.createElement('div');
        this.contentContainer.className = 'virtual-scroll-content';
        this.contentContainer.style.position = 'relative';
        this.container.appendChild(this.contentContainer);
        
        // 創建滾動佔位符
        this.scrollPlaceholder = document.createElement('div');
        this.scrollPlaceholder.className = 'virtual-scroll-placeholder';
        this.scrollPlaceholder.style.position = 'absolute';
        this.scrollPlaceholder.style.top = '0';
        this.scrollPlaceholder.style.left = '0';
        this.scrollPlaceholder.style.width = '1px';
        this.scrollPlaceholder.style.pointerEvents = 'none';
        this.container.appendChild(this.scrollPlaceholder);
    }
    
    setupIntersectionObserver() {
        if (!('IntersectionObserver' in window)) {
            return;
        }
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const element = entry.target;
                const index = parseInt(element.dataset.index);
                
                if (entry.isIntersecting) {
                    this.loadItemContent(element, index);
                } else {
                    this.unloadItemContent(element, index);
                }
            });
        }, {
            root: this.container,
            rootMargin: `${this.options.threshold}px`,
            threshold: 0.1
        });
    }
    
    bindEvents() {
        // 滾動事件（使用節流）
        this.container.addEventListener('scroll', 
            rafThrottle(() => this.handleScroll())
        );
        
        // 窗口大小變化事件
        window.addEventListener('resize', 
            debounce(() => this.handleResize(), 250)
        );
    }
    
    calculateDimensions() {
        const rect = this.container.getBoundingClientRect();
        this.containerHeight = rect.height;
        this.containerWidth = rect.width;
        
        // 計算列數
        const availableWidth = this.containerWidth - this.options.gap;
        this.columnsCount = Math.floor(
            (availableWidth + this.options.gap) / 
            (this.options.itemWidth + this.options.gap)
        ) || 1;
        
        // 計算行數
        this.rowsCount = Math.ceil(this.items.length / this.columnsCount);
        
        // 更新滾動佔位符高度
        const totalHeight = this.rowsCount * (this.options.itemHeight + this.options.gap);
        this.scrollPlaceholder.style.height = totalHeight + 'px';
    }
    
    handleScroll() {
        if (!this.isEnabled) return;
        
        const scrollTop = this.container.scrollTop;
        const rowHeight = this.options.itemHeight + this.options.gap;
        
        // 計算可見行範圍
        const startRow = Math.floor(scrollTop / rowHeight);
        const endRow = Math.ceil((scrollTop + this.containerHeight) / rowHeight);
        
        // 添加緩衝區
        this.visibleStartRow = Math.max(0, startRow - this.options.bufferSize);
        this.visibleEndRow = Math.min(this.rowsCount - 1, endRow + this.options.bufferSize);
        
        this.updateVisibleItems();
    }
    
    handleResize() {
        this.calculateDimensions();
        this.updateVisibleItems();
    }
    
    updateVisibleItems() {
        // 計算需要顯示的項目
        const startIndex = this.visibleStartRow * this.columnsCount;
        const endIndex = Math.min(
            (this.visibleEndRow + 1) * this.columnsCount - 1,
            this.items.length - 1
        );
        
        // 移除不在可見範圍內的元素
        this.renderedElements.forEach((element, index) => {
            if (index < startIndex || index > endIndex) {
                this.removeElement(element, index);
            }
        });
        
        // 添加新的可見元素
        for (let i = startIndex; i <= endIndex; i++) {
            if (!this.renderedElements.has(i) && this.items[i]) {
                this.createElement(i);
            }
        }
    }
    
    createElement(index) {
        const item = this.items[index];
        if (!item) return;
        
        const element = document.createElement('div');
        element.className = 'virtual-scroll-item';
        element.dataset.index = index;
        
        // 計算位置
        const row = Math.floor(index / this.columnsCount);
        const col = index % this.columnsCount;
        const top = row * (this.options.itemHeight + this.options.gap);
        const left = col * (this.options.itemWidth + this.options.gap);
        
        // 設置樣式
        element.style.position = 'absolute';
        element.style.top = top + 'px';
        element.style.left = left + 'px';
        element.style.width = this.options.itemWidth + 'px';
        element.style.height = this.options.itemHeight + 'px';
        
        // 添加到容器
        this.contentContainer.appendChild(element);
        this.renderedElements.set(index, element);
        
        // 使用 Intersection Observer 監控
        if (this.observer) {
            this.observer.observe(element);
        }
        
        // 立即載入內容（如果在視窗內）
        const rect = element.getBoundingClientRect();
        const containerRect = this.container.getBoundingClientRect();
        
        if (rect.top < containerRect.bottom && rect.bottom > containerRect.top) {
            this.loadItemContent(element, index);
        }
    }
    
    removeElement(element, index) {
        if (this.observer) {
            this.observer.unobserve(element);
        }
        
        this.unloadItemContent(element, index);
        element.remove();
        this.renderedElements.delete(index);
    }
    
    loadItemContent(element, index) {
        const item = this.items[index];
        if (!item || element.dataset.loaded === 'true') return;
        
        element.dataset.loaded = 'true';
        
        // 調用自定義渲染函數
        if (this.options.renderItem) {
            this.options.renderItem(element, item, index);
        } else {
            this.defaultRenderItem(element, item, index);
        }
        
        // 觸發載入事件
        element.dispatchEvent(new CustomEvent('itemLoaded', {
            detail: { item, index }
        }));
    }
    
    unloadItemContent(element, index) {
        if (element.dataset.loaded !== 'true') return;
        
        element.dataset.loaded = 'false';
        
        // 調用自定義卸載函數
        if (this.options.unloadItem) {
            this.options.unloadItem(element, index);
        } else {
            this.defaultUnloadItem(element, index);
        }
        
        // 觸發卸載事件
        element.dispatchEvent(new CustomEvent('itemUnloaded', {
            detail: { index }
        }));
    }
    
    defaultRenderItem(element, item, index) {
        element.innerHTML = `
            <div class="virtual-item-content">
                <div class="virtual-item-placeholder">
                    Loading item ${index + 1}...
                </div>
            </div>
        `;
    }
    
    defaultUnloadItem(element, index) {
        element.innerHTML = `
            <div class="virtual-item-content">
                <div class="virtual-item-placeholder">
                    Item ${index + 1}
                </div>
            </div>
        `;
    }
    
    // 公共API
    setItems(items) {
        this.items = items;
        this.calculateDimensions();
        
        if (this.isEnabled) {
            this.updateVisibleItems();
        }
    }
    
    addItem(item) {
        this.items.push(item);
        this.calculateDimensions();
        
        if (this.isEnabled) {
            this.updateVisibleItems();
        }
    }
    
    removeItem(index) {
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
            this.calculateDimensions();
            
            if (this.isEnabled) {
                this.updateVisibleItems();
            }
        }
    }
    
    scrollToItem(index) {
        if (index < 0 || index >= this.items.length) return;
        
        const row = Math.floor(index / this.columnsCount);
        const scrollTop = row * (this.options.itemHeight + this.options.gap);
        
        this.container.scrollTo({
            top: scrollTop,
            behavior: 'smooth'
        });
    }
    
    enable() {
        if (this.isEnabled) return;
        
        this.isEnabled = true;
        this.calculateDimensions();
        this.handleScroll();
        
        if (window.toast) {
            window.toast.info('虛擬滾動已啟用', 2000);
        }
    }
    
    disable() {
        if (!this.isEnabled) return;
        
        this.isEnabled = false;
        
        // 清除所有渲染的元素
        this.renderedElements.forEach((element, index) => {
            this.removeElement(element, index);
        });
        
        if (window.toast) {
            window.toast.info('虛擬滾動已禁用', 2000);
        }
    }
    
    destroy() {
        this.disable();
        
        if (this.observer) {
            this.observer.disconnect();
        }
        
        // 清理事件監聽器
        this.container.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
        
        // 清理DOM
        if (this.contentContainer) {
            this.contentContainer.remove();
        }
        if (this.scrollPlaceholder) {
            this.scrollPlaceholder.remove();
        }
    }
    
    // 獲取統計信息
    getStats() {
        return {
            totalItems: this.items.length,
            renderedItems: this.renderedElements.size,
            visibleRows: this.visibleEndRow - this.visibleStartRow + 1,
            columnsCount: this.columnsCount,
            rowsCount: this.rowsCount,
            isEnabled: this.isEnabled
        };
    }
}

// 全域實例管理器
class VirtualScrollManager {
    constructor() {
        this.instances = new Map();
    }
    
    create(containerId, options = {}) {
        const container = document.getElementById(containerId);
        if (!container) {
            throw new Error(`Container with id "${containerId}" not found`);
        }
        
        const instance = new VirtualScrollEnhanced(container, options);
        this.instances.set(containerId, instance);
        
        return instance;
    }
    
    get(containerId) {
        return this.instances.get(containerId);
    }
    
    destroy(containerId) {
        const instance = this.instances.get(containerId);
        if (instance) {
            instance.destroy();
            this.instances.delete(containerId);
        }
    }
    
    destroyAll() {
        this.instances.forEach((instance, id) => {
            instance.destroy();
        });
        this.instances.clear();
    }
}

// 全域實例
window.virtualScrollManager = new VirtualScrollManager();

// 導出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { VirtualScrollEnhanced, VirtualScrollManager };
}
