// 移動端設備檢測和佈局管理
class MobileDetector {
    constructor() {
        this.isMobile = false;
        this.isTablet = false;
        this.isTouch = false;
        this.deviceType = 'desktop';
        this.screenSize = 'large';
        
        this.init();
    }
    
    init() {
        this.detectDevice();
        this.setupEventListeners();
        this.applyLayout();
    }
    
    detectDevice() {
        // 檢測設備類型
        const userAgent = navigator.userAgent.toLowerCase();
        const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
        const isTabletUA = /ipad|android(?!.*mobile)|tablet/i.test(userAgent);
        
        // 檢測觸控支持
        this.isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        
        // 檢測屏幕尺寸
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        
        // 判斷設備類型
        if (isTabletUA || (screenWidth >= 768 && screenWidth <= 1024)) {
            this.isTablet = true;
            this.deviceType = 'tablet';
            this.screenSize = 'medium';
        } else if (isMobileUA || screenWidth < 768) {
            this.isMobile = true;
            this.deviceType = 'mobile';
            this.screenSize = 'small';
        } else {
            this.deviceType = 'desktop';
            this.screenSize = 'large';
        }
        
        // 更新全局狀態
        window.MOBILE_DETECTOR = this;
        document.body.classList.add(`device-${this.deviceType}`);
        document.body.classList.add(`screen-${this.screenSize}`);
        
        if (this.isTouch) {
            document.body.classList.add('touch-device');
        }
        
        console.log('設備檢測結果:', {
            deviceType: this.deviceType,
            screenSize: this.screenSize,
            isMobile: this.isMobile,
            isTablet: this.isTablet,
            isTouch: this.isTouch,
            screenWidth,
            screenHeight
        });
    }
    
    setupEventListeners() {
        // 監聽屏幕方向變化
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                this.detectDevice();
                this.applyLayout();
            }, 100);
        });
        
        // 監聽窗口大小變化
        window.addEventListener('resize', () => {
            this.detectDevice();
            this.applyLayout();
        });
        
        // 監聽PWA安裝提示
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this.showInstallPrompt(e);
        });
    }
    
    applyLayout() {
        const container = document.querySelector('.container');
        if (!container) return;
        
        // 移除舊的佈局類
        container.classList.remove('mobile-layout', 'tablet-layout', 'desktop-layout');
        
        // 應用新的佈局類
        switch (this.deviceType) {
            case 'mobile':
                container.classList.add('mobile-layout');
                this.enableMobileFeatures();
                break;
            case 'tablet':
                container.classList.add('tablet-layout');
                this.enableTabletFeatures();
                break;
            default:
                container.classList.add('desktop-layout');
                this.enableDesktopFeatures();
        }
        
        // 觸發佈局變化事件
        window.dispatchEvent(new CustomEvent('layoutChanged', {
            detail: {
                deviceType: this.deviceType,
                screenSize: this.screenSize,
                isMobile: this.isMobile,
                isTablet: this.isTablet
            }
        }));
    }
    
    enableMobileFeatures() {
        // 啟用移動端專用功能
        this.setupMobileNavigation();
        this.setupTouchGestures();
        this.optimizeForMobile();
    }
    
    enableTabletFeatures() {
        // 啟用平板專用功能
        this.setupTabletNavigation();
        this.optimizeForTablet();
    }
    
    enableDesktopFeatures() {
        // 啟用桌面端功能
        this.setupDesktopNavigation();
    }
    
    setupMobileNavigation() {
        // 創建移動端底部導航欄
        this.createMobileBottomNav();
        
        // 設置移動端頂部欄
        this.setupMobileHeader();
        
        // 優化照片網格佈局
        this.optimizePhotoGrid();
    }
    
    createMobileBottomNav() {
        // 檢查是否已存在
        if (document.querySelector('.mobile-bottom-nav')) return;
        
        const bottomNav = document.createElement('div');
        bottomNav.className = 'mobile-bottom-nav';
        bottomNav.innerHTML = `
            <div class="mobile-nav-item" data-action="photos">
                <i class="fas fa-images"></i>
                <span>照片</span>
            </div>
            <div class="mobile-nav-item" data-action="categories">
                <i class="fas fa-tags"></i>
                <span>分類</span>
            </div>
            <div class="mobile-nav-item" data-action="table">
                <i class="fas fa-table"></i>
                <span>表格</span>
            </div>
            <div class="mobile-nav-item" data-action="drawing">
                <i class="fas fa-pencil-alt"></i>
                <span>繪圖</span>
            </div>
            <div class="mobile-nav-item" data-action="menu">
                <i class="fas fa-bars"></i>
                <span>選單</span>
            </div>
        `;
        
        document.body.appendChild(bottomNav);
        
        // 添加點擊事件
        bottomNav.addEventListener('click', (e) => {
            const navItem = e.target.closest('.mobile-nav-item');
            if (navItem) {
                const action = navItem.dataset.action;
                this.handleMobileNavAction(action);
            }
        });
    }
    
    setupMobileHeader() {
        const header = document.querySelector('header');
        if (!header) return;
        
        // 添加移動端專用類
        header.classList.add('mobile-header');
        
        // 簡化移動端標題欄
        const headerContent = header.querySelector('.header-content');
        if (headerContent) {
            headerContent.classList.add('mobile-header-content');
        }
    }
    
    optimizePhotoGrid() {
        const photoGrid = document.querySelector('#photoGrid');
        if (!photoGrid) return;
        
        photoGrid.classList.add('mobile-photo-grid');
        
        // 調整照片大小
        const style = document.createElement('style');
        style.textContent = `
            .mobile-photo-grid .photo-item {
                width: calc(50% - 5px) !important;
                margin: 2.5px !important;
            }
            
            .mobile-photo-grid .photo-item img {
                width: 100% !important;
                height: auto !important;
                aspect-ratio: 1 !important;
                object-fit: cover !important;
            }
        `;
        document.head.appendChild(style);
    }
    
    setupTouchGestures() {
        // 設置觸控手勢 - 僅在移動端啟用
        if (!this.isMobile) return;
        
        let startY = 0;
        let startX = 0;
        let isGestureHandling = false;
        
        document.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                startY = e.touches[0].clientY;
                startX = e.touches[0].clientX;
                isGestureHandling = false;
            }
        }, { passive: true });
        
        document.addEventListener('touchmove', (e) => {
            if (e.touches.length !== 1) return;
            
            const currentY = e.touches[0].clientY;
            const currentX = e.touches[0].clientX;
            const diffY = startY - currentY;
            const diffX = startX - currentX;
            
            // 只有在水平滑動距離明顯大於垂直滑動時才阻止默認行為
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (!isGestureHandling) {
                    isGestureHandling = true;
                    // 這裡可以添加水平滑動的特殊處理
                }
            }
        }, { passive: true });
        
        document.addEventListener('touchend', () => {
            isGestureHandling = false;
        }, { passive: true });
    }
    
    optimizeForMobile() {
        // 移動端優化
        this.setupMobileModals();
        this.optimizeMobileForms();
        this.setupMobileKeyboard();
    }
    
    optimizeForTablet() {
        // 平板優化
        this.setupTabletModals();
    }
    
    setupMobileModals() {
        // 優化移動端彈窗
        const modals = document.querySelectorAll('.defect-window, .detail-popup, .export-settings-modal');
        modals.forEach(modal => {
            modal.classList.add('mobile-modal');
        });
    }
    
    optimizeMobileForms() {
        // 優化移動端表單
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.classList.add('mobile-input');
        });
    }
    
    setupMobileKeyboard() {
        // 處理移動端鍵盤彈出
        let initialViewportHeight = window.innerHeight;
        
        window.addEventListener('resize', () => {
            const currentHeight = window.innerHeight;
            const heightDifference = initialViewportHeight - currentHeight;
            
            if (heightDifference > 150) {
                // 鍵盤彈出
                document.body.classList.add('keyboard-open');
            } else {
                // 鍵盤收起
                document.body.classList.remove('keyboard-open');
            }
        });
    }
    
    handleMobileNavAction(action) {
        // 處理移動端導航動作
        switch (action) {
            case 'photos':
                this.scrollToSection('photo-preview-title');
                break;
            case 'categories':
                this.scrollToSection('categories-title');
                break;
            case 'table':
                this.scrollToSection('data-table-title');
                break;
            case 'drawing':
                // 觸發繪圖模式
                if (window.openFloorPlan) {
                    window.openFloorPlan();
                }
                break;
            case 'menu':
                // 觸發主選單
                const menuBtn = document.querySelector('#pneMenuBtn');
                if (menuBtn) {
                    menuBtn.click();
                }
                break;
        }
        
        // 更新導航狀態
        this.updateMobileNavState(action);
    }
    
    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    updateMobileNavState(activeAction) {
        const navItems = document.querySelectorAll('.mobile-nav-item');
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.action === activeAction) {
                item.classList.add('active');
            }
        });
    }
    
    setupTabletNavigation() {
        // 平板專用導航
        console.log('設置平板導航');
    }
    
    setupDesktopNavigation() {
        // 桌面端導航
        console.log('設置桌面端導航');
    }
    
    setupTabletModals() {
        // 平板專用彈窗優化
        console.log('設置平板彈窗');
    }
    
    showInstallPrompt(event) {
        // 顯示PWA安裝提示
        const installBtn = document.createElement('button');
        installBtn.className = 'pwa-install-btn';
        installBtn.innerHTML = '<i class="fas fa-download"></i> 安裝應用程式';
        installBtn.style.cssText = `
            position: fixed;
            bottom: 80px;
            right: 20px;
            background: var(--primary);
            color: white;
            border: none;
            border-radius: 25px;
            padding: 12px 20px;
            font-size: 14px;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 8px;
        `;
        
        installBtn.addEventListener('click', async () => {
            event.prompt();
            const result = await event.userChoice;
            console.log('PWA安裝結果:', result);
            installBtn.remove();
        });
        
        document.body.appendChild(installBtn);
        
        // 5秒後自動隱藏
        setTimeout(() => {
            if (installBtn.parentNode) {
                installBtn.remove();
            }
        }, 5000);
    }
    
    // 公共方法
    isMobileDevice() {
        return this.isMobile;
    }
    
    isTabletDevice() {
        return this.isTablet;
    }
    
    isTouchDevice() {
        return this.isTouch;
    }
    
    getDeviceType() {
        return this.deviceType;
    }
    
    getScreenSize() {
        return this.screenSize;
    }
}

// 初始化移動端檢測器
document.addEventListener('DOMContentLoaded', () => {
    new MobileDetector();
});

// 導出供其他模組使用
window.MobileDetector = MobileDetector;
