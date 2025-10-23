// 移動端PWA增強功能
class MobilePWAEnhancer {
    constructor() {
        this.isInstalled = false;
        this.deferredPrompt = null;
        this.init();
    }
    
    init() {
        this.detectInstallation();
        this.setupInstallPrompt();
        this.setupOfflineSupport();
        this.setupPushNotifications();
        this.setupBackgroundSync();
        this.optimizeForMobile();
    }
    
    detectInstallation() {
        // 檢測是否已安裝為PWA
        if (window.matchMedia('(display-mode: standalone)').matches) {
            this.isInstalled = true;
            document.body.classList.add('pwa-installed');
            console.log('PWA已安裝，啟用增強功能');
        }
        
        // 監聽顯示模式變化
        window.matchMedia('(display-mode: standalone)').addEventListener('change', (e) => {
            this.isInstalled = e.matches;
            document.body.classList.toggle('pwa-installed', e.matches);
        });
    }
    
    setupInstallPrompt() {
        // 監聽PWA安裝提示
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this.deferredPrompt = e;
            this.showInstallBanner();
        });
        
        // 監聽安裝完成事件
        window.addEventListener('appinstalled', () => {
            this.isInstalled = true;
            this.hideInstallBanner();
            this.showInstallSuccessMessage();
        });
    }
    
    showInstallBanner() {
        // 創建安裝橫幅
        const banner = document.createElement('div');
        banner.id = 'pwa-install-banner';
        banner.className = 'pwa-install-banner';
        banner.innerHTML = `
            <div class="install-banner-content">
                <div class="install-banner-icon">
                    <i class="fas fa-mobile-alt"></i>
                </div>
                <div class="install-banner-text">
                    <h4>安裝應用程式</h4>
                    <p>將此應用程式安裝到您的手機主屏幕，獲得更好的使用體驗</p>
                </div>
                <div class="install-banner-actions">
                    <button id="installPWA" class="install-btn">安裝</button>
                    <button id="dismissInstall" class="dismiss-btn">稍後</button>
                </div>
            </div>
        `;
        
        // 添加樣式
        banner.style.cssText = `
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            color: white;
            padding: 16px;
            z-index: 10000;
            transform: translateY(100%);
            transition: transform 0.3s ease;
            box-shadow: 0 -4px 20px rgba(0,0,0,0.3);
        `;
        
        document.body.appendChild(banner);
        
        // 顯示動畫
        setTimeout(() => {
            banner.style.transform = 'translateY(0)';
        }, 100);
        
        // 添加事件監聽器
        banner.querySelector('#installPWA').addEventListener('click', () => {
            this.installPWA();
        });
        
        banner.querySelector('#dismissInstall').addEventListener('click', () => {
            this.hideInstallBanner();
        });
        
        // 自動隱藏（30秒後）
        setTimeout(() => {
            this.hideInstallBanner();
        }, 30000);
    }
    
    hideInstallBanner() {
        const banner = document.getElementById('pwa-install-banner');
        if (banner) {
            banner.style.transform = 'translateY(100%)';
            setTimeout(() => {
                banner.remove();
            }, 300);
        }
    }
    
    async installPWA() {
        if (!this.deferredPrompt) return;
        
        try {
            this.deferredPrompt.prompt();
            const result = await this.deferredPrompt.userChoice;
            
            if (result.outcome === 'accepted') {
                console.log('用戶接受了PWA安裝');
            } else {
                console.log('用戶拒絕了PWA安裝');
            }
            
            this.deferredPrompt = null;
            this.hideInstallBanner();
        } catch (error) {
            console.error('PWA安裝失敗:', error);
        }
    }
    
    showInstallSuccessMessage() {
        // 顯示安裝成功消息
        const message = document.createElement('div');
        message.className = 'pwa-success-message';
        message.innerHTML = `
            <div class="success-content">
                <i class="fas fa-check-circle"></i>
                <span>應用程式已成功安裝！</span>
            </div>
        `;
        
        message.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--success);
            color: white;
            padding: 12px 20px;
            border-radius: 25px;
            z-index: 10001;
            animation: slideDown 0.3s ease;
        `;
        
        document.body.appendChild(message);
        
        // 3秒後自動移除
        setTimeout(() => {
            message.remove();
        }, 3000);
    }
    
    setupOfflineSupport() {
        // 設置離線支持
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.addEventListener('message', (event) => {
                if (event.data.type === 'OFFLINE_STATUS') {
                    this.handleOfflineStatus(event.data.isOnline);
                }
            });
        }
        
        // 監聽網絡狀態變化
        window.addEventListener('online', () => {
            this.handleOfflineStatus(true);
        });
        
        window.addEventListener('offline', () => {
            this.handleOfflineStatus(false);
        });
    }
    
    handleOfflineStatus(isOnline) {
        const statusIndicator = document.getElementById('offline-indicator') || this.createOfflineIndicator();
        
        if (isOnline) {
            statusIndicator.classList.remove('offline');
            statusIndicator.classList.add('online');
            statusIndicator.innerHTML = '<i class="fas fa-wifi"></i> 已連接';
        } else {
            statusIndicator.classList.remove('online');
            statusIndicator.classList.add('offline');
            statusIndicator.innerHTML = '<i class="fas fa-wifi-slash"></i> 離線模式';
        }
    }
    
    createOfflineIndicator() {
        const indicator = document.createElement('div');
        indicator.id = 'offline-indicator';
        indicator.className = 'offline-indicator';
        indicator.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            padding: 8px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 500;
            z-index: 1000;
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(indicator);
        return indicator;
    }
    
    setupPushNotifications() {
        // 推送通知功能已禁用
        // 如果需要啟用，請取消下面的註釋
        /*
        if ('Notification' in window && 'serviceWorker' in navigator) {
            this.requestNotificationPermission();
        }
        */
    }
    
    async requestNotificationPermission() {
        // 推送通知權限請求已禁用
        // 如果需要啟用，請取消下面的註釋
        /*
        if (Notification.permission === 'default') {
            try {
                const permission = await Notification.requestPermission();
                if (permission === 'granted') {
                    console.log('推送通知權限已授予');
                    this.setupNotificationHandlers();
                }
            } catch (error) {
                console.error('請求通知權限失敗:', error);
            }
        }
        */
    }
    
    setupNotificationHandlers() {
        // 通知處理程序已禁用
        // 如果需要啟用，請取消下面的註釋
        /*
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.addEventListener('message', (event) => {
                if (event.data.type === 'SHOW_NOTIFICATION') {
                    this.showNotification(event.data);
                }
            });
        }
        */
    }
    
    showNotification(data) {
        // 顯示通知功能已禁用
        // 如果需要啟用，請取消下面的註釋
        /*
        if (Notification.permission === 'granted') {
            const notification = new Notification(data.title, {
                body: data.body,
                icon: './assets/images/icon-192x192.png',
                badge: './assets/images/icon-72x72.png',
                tag: data.tag || 'pne-notification',
                requireInteraction: data.requireInteraction || false
            });
            
            notification.onclick = () => {
                window.focus();
                notification.close();
            };
        }
        */
    }
    
    setupBackgroundSync() {
        // 設置後台同步
        if ('serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype) {
            navigator.serviceWorker.ready.then(registration => {
                // 註冊後台同步
                registration.sync.register('background-sync');
            });
        }
    }
    
    optimizeForMobile() {
        // 移動端優化
        this.setupMobileViewport();
        this.setupMobileGestures();
        this.setupMobileKeyboard();
        this.setupMobilePerformance();
    }
    
    setupMobileViewport() {
        // 設置移動端視口
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
            viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover';
        }
        
        // 設置狀態欄樣式
        const statusBarStyle = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
        if (statusBarStyle) {
            statusBarStyle.content = 'default';
        }
    }
    
    setupMobileGestures() {
        // 設置移動端手勢
        let startY = 0;
        let startX = 0;
        let isGestureActive = false;
        let lastGestureTime = 0;
        let gestureCooldown = 500; // 500ms冷卻時間
        
        document.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                startY = e.touches[0].clientY;
                startX = e.touches[0].clientX;
                isGestureActive = true;
            }
        }, { passive: true });
        
        document.addEventListener('touchmove', (e) => {
            if (!isGestureActive || e.touches.length !== 1) return;
            
            const currentY = e.touches[0].clientY;
            const currentX = e.touches[0].clientX;
            const diffY = startY - currentY;
            const diffX = startX - currentX;
            const gestureThreshold = 100; // 增加閾值
            
            // 檢查冷卻時間
            const now = Date.now();
            if (now - lastGestureTime < gestureCooldown) return;
            
            // 只有在滑動距離足夠大時才處理手勢
            if (Math.abs(diffX) > gestureThreshold || Math.abs(diffY) > gestureThreshold) {
                if (Math.abs(diffX) > Math.abs(diffY)) {
                    // 水平滑動
                    this.handleHorizontalSwipe(diffX);
                } else {
                    // 垂直滑動
                    this.handleVerticalSwipe(diffY);
                }
                
                // 重置手勢狀態，避免重複觸發
                isGestureActive = false;
                lastGestureTime = now;
            }
        }, { passive: true });
        
        document.addEventListener('touchend', () => {
            isGestureActive = false;
        }, { passive: true });
    }
    
    handleHorizontalSwipe(diffX) {
        // 處理水平滑動手勢
        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                // 向左滑動
                this.onSwipeLeft();
            } else {
                // 向右滑動
                this.onSwipeRight();
            }
        }
    }
    
    handleVerticalSwipe(diffY) {
        // 處理垂直滑動手勢
        if (Math.abs(diffY) > 50) {
            if (diffY > 0) {
                // 向上滑動
                this.onSwipeUp();
            } else {
                // 向下滑動
                this.onSwipeDown();
            }
        }
    }
    
    onSwipeLeft() {
        // 向左滑動處理 - 切換到下一個功能區域
        const mobileDetector = window.MOBILE_DETECTOR;
        if (mobileDetector && mobileDetector.isMobileDevice()) {
            // 在移動端實現功能切換
            this.switchToNextSection();
        }
    }
    
    onSwipeRight() {
        // 向右滑動處理 - 切換到上一個功能區域
        const mobileDetector = window.MOBILE_DETECTOR;
        if (mobileDetector && mobileDetector.isMobileDevice()) {
            // 在移動端實現功能切換
            this.switchToPreviousSection();
        }
    }
    
    onSwipeUp() {
        // 向上滑動處理 - 滾動到頁面頂部
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    onSwipeDown() {
        // 向下滑動處理 - 滾動到頁面底部
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }
    
    switchToNextSection() {
        // 切換到下一個功能區域
        const sections = ['photo-preview-title', 'categories-title', 'data-table-title'];
        const currentSection = this.getCurrentVisibleSection();
        const currentIndex = sections.indexOf(currentSection);
        const nextIndex = (currentIndex + 1) % sections.length;
        
        const nextSection = document.getElementById(sections[nextIndex]);
        if (nextSection) {
            nextSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    switchToPreviousSection() {
        // 切換到上一個功能區域
        const sections = ['photo-preview-title', 'categories-title', 'data-table-title'];
        const currentSection = this.getCurrentVisibleSection();
        const currentIndex = sections.indexOf(currentSection);
        const prevIndex = currentIndex === 0 ? sections.length - 1 : currentIndex - 1;
        
        const prevSection = document.getElementById(sections[prevIndex]);
        if (prevSection) {
            prevSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    getCurrentVisibleSection() {
        // 獲取當前可見的功能區域
        const sections = ['photo-preview-title', 'categories-title', 'data-table-title'];
        
        for (const sectionId of sections) {
            const section = document.getElementById(sectionId);
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
                    return sectionId;
                }
            }
        }
        
        return sections[0]; // 默認返回第一個區域
    }
    
    setupMobileKeyboard() {
        // 處理移動端鍵盤
        let initialViewportHeight = window.innerHeight;
        
        window.addEventListener('resize', () => {
            const currentHeight = window.innerHeight;
            const heightDifference = initialViewportHeight - currentHeight;
            
            if (heightDifference > 150) {
                // 鍵盤彈出
                document.body.classList.add('keyboard-open');
                this.handleKeyboardOpen();
            } else {
                // 鍵盤收起
                document.body.classList.remove('keyboard-open');
                this.handleKeyboardClose();
            }
        });
    }
    
    handleKeyboardOpen() {
        // 鍵盤彈出處理
        const bottomNav = document.querySelector('.mobile-bottom-nav');
        if (bottomNav) {
            bottomNav.style.display = 'none';
        }
    }
    
    handleKeyboardClose() {
        // 鍵盤收起處理
        const bottomNav = document.querySelector('.mobile-bottom-nav');
        if (bottomNav) {
            bottomNav.style.display = 'flex';
        }
    }
    
    setupMobilePerformance() {
        // 移動端性能優化
        this.enableImageLazyLoading();
        this.optimizeScrollPerformance();
        this.setupMemoryManagement();
    }
    
    enableImageLazyLoading() {
        // 啟用圖片懶加載
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            imageObserver.unobserve(img);
                        }
                    }
                });
            });
            
            // 觀察所有懶加載圖片
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }
    
    optimizeScrollPerformance() {
        // 優化滾動性能
        let ticking = false;
        
        const updateScrollPosition = () => {
            // 滾動位置更新邏輯
            ticking = false;
        };
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollPosition);
                ticking = true;
            }
        }, { passive: true });
    }
    
    setupMemoryManagement() {
        // 設置內存管理
        if ('memory' in performance) {
            let lastMemoryCheck = 0;
            const memoryCheckInterval = 60000; // 增加到60秒檢查一次
            
            const checkMemory = () => {
                const now = Date.now();
                if (now - lastMemoryCheck < memoryCheckInterval) return;
                
                const memory = performance.memory;
                const usedMB = memory.usedJSHeapSize / 1024 / 1024;
                const totalMB = memory.totalJSHeapSize / 1024 / 1024;
                const usageRatio = usedMB / totalMB;
                
                // 提高內存使用率閾值到90%，減少警告頻率
                if (usageRatio > 0.9) {
                    console.warn('內存使用率過高:', usedMB.toFixed(2) + 'MB / ' + totalMB.toFixed(2) + 'MB (' + (usageRatio * 100).toFixed(1) + '%)');
                    this.cleanupMemory();
                }
                
                lastMemoryCheck = now;
            };
            
            // 每60秒檢查一次內存使用情況
            setInterval(checkMemory, memoryCheckInterval);
        }
    }
    
    cleanupMemory() {
        // 清理內存
        if (window.gc) {
            window.gc();
        }
        
        // 清理未使用的圖片緩存
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.complete || img.naturalWidth === 0) {
                img.src = '';
            }
        });
    }
    
    // 公共方法
    isPWAInstalled() {
        return this.isInstalled;
    }
    
    getInstallPrompt() {
        return this.deferredPrompt;
    }
    
    showInstallPrompt() {
        if (this.deferredPrompt) {
            this.showInstallBanner();
        }
    }
}

// 初始化移動端PWA增強器
document.addEventListener('DOMContentLoaded', () => {
    new MobilePWAEnhancer();
});

// 導出供其他模組使用
window.MobilePWAEnhancer = MobilePWAEnhancer;
