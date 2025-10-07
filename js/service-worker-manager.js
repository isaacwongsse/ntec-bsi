// Service Worker 管理器
class ServiceWorkerManager {
    constructor() {
        this.registration = null;
        this.isSupported = 'serviceWorker' in navigator;
        this.isOnline = navigator.onLine;
        this.updateAvailable = false;
        
        this.init();
    }
    
    async init() {
        if (!this.isSupported) {
            console.warn('Service Worker not supported');
            return;
        }
        
        // 檢查是否在 file:// 協議下運行
        if (location.protocol === 'file:') {
            console.warn('Service Worker not supported in file:// protocol');
            return;
        }
        
        try {
            await this.register();
            this.setupEventListeners();
            this.checkForUpdates();
        } catch (error) {
            console.error('Service Worker initialization failed:', error);
            if (window.errorHandler && typeof window.errorHandler.report === 'function') {
                window.errorHandler.report(error, { context: 'service_worker_init' });
            }
        }
    }
    
    async register() {
        try {
            this.registration = await navigator.serviceWorker.register('./sw.js', {
                scope: './'
            });
            
            window.logger?.log('Service Worker registered successfully');
            
            // 監聽Service Worker狀態變化
            this.registration.addEventListener('updatefound', () => {
                const newWorker = this.registration.installing;
                window.logger?.log('Service Worker update found');
                
                newWorker.addEventListener('statechange', () => {
                    if (newWorker.state === 'installed') {
                        if (navigator.serviceWorker.controller) {
                            // 有新版本可用
                            this.updateAvailable = true;
                            this.notifyUpdateAvailable();
                        } else {
                            // 首次安裝完成
                            this.notifyInstalled();
                        }
                    }
                });
            });
            
            return this.registration;
        } catch (error) {
            console.error('Service Worker registration failed:', error);
            throw error;
        }
    }
    
    setupEventListeners() {
        // 監聽網絡狀態變化
        window.addEventListener('online', () => {
            this.isOnline = true;
            this.notifyOnlineStatus(true);
        });
        
        window.addEventListener('offline', () => {
            this.isOnline = false;
            this.notifyOnlineStatus(false);
        });
        
        // 監聽Service Worker消息
        navigator.serviceWorker.addEventListener('message', (event) => {
            this.handleMessage(event.data);
        });
        
        // 監聽控制器變化
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            window.logger?.log('Service Worker controller changed');
            window.location.reload();
        });
    }
    
    handleMessage(data) {
        const { type, payload } = data;
        
        switch (type) {
            case 'CACHE_UPDATED':
                window.logger?.log('Cache updated:', payload);
                break;
                
            case 'OFFLINE_READY':
                this.notifyOfflineReady();
                break;
                
            default:
                window.logger?.log('Service Worker message:', data);
        }
    }
    
    notifyUpdateAvailable() {
        if (window.toast) {
            const toastId = window.toast.info(
                '應用程式有新版本可用，點擊更新', 
                0, // 不自動隱藏
                {
                    onClick: () => {
                        this.applyUpdate();
                        window.toast.hide(toastId);
                    }
                }
            );
        }
    }
    
    notifyInstalled() {
        if (window.toast) {
            window.toast.success('應用程式已安裝，現在可以離線使用', 4000);
        }
    }
    
    notifyOnlineStatus(isOnline) {
        if (window.toast) {
            if (isOnline) {
                window.toast.success('網絡連接已恢復', 3000);
            } else {
                window.toast.warning('網絡連接已斷開，切換到離線模式', 5000);
            }
        }
        
        // 更新UI狀態
        document.body.classList.toggle('offline', !isOnline);
    }
    
    notifyOfflineReady() {
        if (window.toast) {
            window.toast.info('離線功能已準備就緒', 3000);
        }
    }
    
    async applyUpdate() {
        if (!this.registration || !this.registration.waiting) {
            return;
        }
        
        try {
            // 告訴等待中的Service Worker跳過等待
            this.registration.waiting.postMessage({ type: 'SKIP_WAITING' });
            
            if (window.toast) {
                window.toast.loading('正在更新應用程式...', { closable: false });
            }
        } catch (error) {
            console.error('Failed to apply update:', error);
            if (window.toast) {
                window.toast.error('更新失敗，請重新整理頁面');
            }
        }
    }
    
    async checkForUpdates() {
        if (!this.registration) return;
        
        try {
            await this.registration.update();
        } catch (error) {
            console.warn('Failed to check for updates:', error);
        }
    }
    
    // 發送消息給Service Worker
    async sendMessage(type, payload = {}) {
        if (!navigator.serviceWorker.controller) {
            throw new Error('No active service worker');
        }
        
        return new Promise((resolve, reject) => {
            const messageChannel = new MessageChannel();
            
            messageChannel.port1.onmessage = (event) => {
                if (event.data.error) {
                    reject(new Error(event.data.error));
                } else {
                    resolve(event.data);
                }
            };
            
            navigator.serviceWorker.controller.postMessage(
                { type, payload },
                [messageChannel.port2]
            );
        });
    }
    
    // 獲取緩存狀態
    async getCacheStatus() {
        try {
            return await this.sendMessage('GET_CACHE_STATUS');
        } catch (error) {
            console.error('Failed to get cache status:', error);
            return { success: false, error: error.message };
        }
    }
    
    // 清理緩存
    async clearCache(cacheName = null) {
        try {
            const result = await this.sendMessage('CLEAR_CACHE', { cacheName });
            
            if (result.success && window.toast) {
                window.toast.success('緩存已清理');
            }
            
            return result;
        } catch (error) {
            console.error('Failed to clear cache:', error);
            if (window.toast) {
                window.toast.error('清理緩存失敗');
            }
            return { success: false, error: error.message };
        }
    }
    
    // 緩存照片
    async cachePhotos(photos) {
        try {
            const result = await this.sendMessage('CACHE_PHOTOS', { photos });
            
            if (result.success && window.toast) {
                window.toast.success(`已緩存 ${result.cached} 張照片`);
            }
            
            return result;
        } catch (error) {
            console.error('Failed to cache photos:', error);
            if (window.toast) {
                window.toast.error('緩存照片失敗');
            }
            return { success: false, error: error.message };
        }
    }
    
    // 註冊後台同步
    async registerBackgroundSync(tag) {
        if (!this.registration || !this.registration.sync) {
            console.warn('Background sync not supported');
            return false;
        }
        
        try {
            await this.registration.sync.register(tag);
            window.logger?.log('Background sync registered:', tag);
            return true;
        } catch (error) {
            console.error('Failed to register background sync:', error);
            return false;
        }
    }
    
    // 檢查是否為PWA環境
    isPWA() {
        return window.matchMedia('(display-mode: standalone)').matches ||
               window.navigator.standalone === true;
    }
    
    // 獲取安裝提示
    getInstallPrompt() {
        return window.deferredPrompt;
    }
    
    // 顯示安裝提示
    async showInstallPrompt() {
        const deferredPrompt = this.getInstallPrompt();
        
        if (!deferredPrompt) {
            if (window.toast) {
                window.toast.info('此應用程式已安裝或不支援安裝');
            }
            return false;
        }
        
        try {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            
            if (outcome === 'accepted') {
                if (window.toast) {
                    window.toast.success('應用程式安裝成功');
                }
                window.deferredPrompt = null;
                return true;
            } else {
                if (window.toast) {
                    window.toast.info('用戶取消了安裝');
                }
                return false;
            }
        } catch (error) {
            console.error('Install prompt failed:', error);
            if (window.toast) {
                window.toast.error('安裝失敗');
            }
            return false;
        }
    }
    
    // 獲取狀態信息
    getStatus() {
        return {
            isSupported: this.isSupported,
            isRegistered: !!this.registration,
            isOnline: this.isOnline,
            updateAvailable: this.updateAvailable,
            isPWA: this.isPWA(),
            canInstall: !!this.getInstallPrompt()
        };
    }
}

// 全域實例
window.serviceWorkerManager = new ServiceWorkerManager();

// PWA安裝提示處理
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    window.deferredPrompt = e;
    
    window.logger?.log('PWA install prompt available');
    
    // 可以在這裡顯示自定義安裝按鈕
    if (window.toast) {
        window.toast.info('此應用程式可以安裝到您的設備', 5000, {
            onClick: () => {
                window.serviceWorkerManager.showInstallPrompt();
            }
        });
    }
});

// PWA安裝完成
window.addEventListener('appinstalled', () => {
    window.logger?.log('PWA installed successfully');
    window.deferredPrompt = null;
    
    if (window.toast) {
        window.toast.success('應用程式已成功安裝到您的設備');
    }
});

// 導出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ServiceWorkerManager;
}
