// Service Worker for Photo Number Extractor
const CACHE_NAME = 'photo-number-extractor-v1.0.3';
const STATIC_CACHE = 'static-v1.0.3';
const DYNAMIC_CACHE = 'dynamic-v1.0.3';
const IMAGES_CACHE = 'images-v1.0.3';

// 需要緩存的靜態資源
const STATIC_ASSETS = [
    './',
    './index.html',
    './css/styles.css',
    './css/mobile.css',
    './js/config.js',
    './js/mobile-detector.js',
    './js/mobile-pwa-enhancer.js',
    './js/utils.js',
    './js/performance.js',
    './js/data-validator.js',
    './js/image-optimizer.js',
    './js/lazy-loading.js',
    './js/loading-manager.js',
    './js/toast-notifications.js',
    './js/error-handler.js',
    './js/keyboard-navigation.js',
    './js/virtual-scroll-enhanced.js',
    './js/main.js',
    './js/optimization-patch.js'
];

// CDN資源
const CDN_ASSETS = [
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js',
    'https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js'
];

// 安裝事件
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installing...');
    
    event.waitUntil(
        Promise.all([
            // 緩存靜態資源
            caches.open(STATIC_CACHE).then(cache => {
                console.log('Service Worker: Caching static assets');
                return cache.addAll(STATIC_ASSETS);
            }),
            // 緩存CDN資源
            caches.open(DYNAMIC_CACHE).then(cache => {
                console.log('Service Worker: Caching CDN assets');
                return Promise.allSettled(
                    CDN_ASSETS.map(url => 
                        cache.add(url).catch(err => 
                            console.warn(`Failed to cache ${url}:`, err)
                        )
                    )
                );
            })
        ]).then(() => {
            console.log('Service Worker: Installation complete');
            return self.skipWaiting();
        })
    );
});

// 激活事件
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activating...');
    
    event.waitUntil(
        Promise.all([
            // 清理舊緩存
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== STATIC_CACHE && 
                            cacheName !== DYNAMIC_CACHE && 
                            cacheName !== IMAGES_CACHE) {
                            console.log('Service Worker: Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            }),
            // 立即控制所有客戶端
            self.clients.claim()
        ]).then(() => {
            console.log('Service Worker: Activation complete');
        })
    );
});

// 拦截網絡請求
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);
    
    // 只處理HTTP/HTTPS請求
    if (!request.url.startsWith('http')) {
        return;
    }
    
    // 根據資源類型選擇不同的緩存策略
    if (isStaticAsset(request.url)) {
        event.respondWith(cacheFirst(request, STATIC_CACHE));
    } else if (isCDNAsset(request.url)) {
        event.respondWith(staleWhileRevalidate(request, DYNAMIC_CACHE));
    } else if (isImageAsset(request.url)) {
        event.respondWith(cacheFirst(request, IMAGES_CACHE));
    } else if (isAPIRequest(request.url)) {
        event.respondWith(networkFirst(request, DYNAMIC_CACHE));
    } else {
        event.respondWith(staleWhileRevalidate(request, DYNAMIC_CACHE));
    }
});

// 緩存優先策略（適用於靜態資源）
async function cacheFirst(request, cacheName) {
    try {
        const cache = await caches.open(cacheName);
        const cachedResponse = await cache.match(request);
        
        if (cachedResponse) {
            return cachedResponse;
        }
        
        const networkResponse = await fetch(request);
        
        // 只緩存成功的響應
        if (networkResponse.status === 200) {
            cache.put(request, networkResponse.clone());
        }
        
        return networkResponse;
    } catch (error) {
        console.warn('Cache first strategy failed:', error);
        return new Response('Offline', { status: 503 });
    }
}

// 網絡優先策略（適用於API請求）
async function networkFirst(request, cacheName) {
    try {
        const networkResponse = await fetch(request);
        
        if (networkResponse.status === 200) {
            const cache = await caches.open(cacheName);
            cache.put(request, networkResponse.clone());
        }
        
        return networkResponse;
    } catch (error) {
        console.warn('Network first strategy failed, trying cache:', error);
        
        const cache = await caches.open(cacheName);
        const cachedResponse = await cache.match(request);
        
        if (cachedResponse) {
            return cachedResponse;
        }
        
        return new Response(JSON.stringify({ 
            error: 'Offline', 
            message: 'Network unavailable and no cached version found' 
        }), {
            status: 503,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

// 陳舊重新驗證策略（適用於CDN和動態內容）
async function staleWhileRevalidate(request, cacheName) {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    
    // 並行執行網絡請求和緩存響應
    const networkResponsePromise = fetch(request).then(networkResponse => {
        if (networkResponse.status === 200) {
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    }).catch(error => {
        console.warn('Stale while revalidate network failed:', error);
        return null;
    });
    
    // 如果有緩存，立即返回緩存版本
    if (cachedResponse) {
        return cachedResponse;
    }
    
    // 如果沒有緩存，等待網絡響應
    const networkResponse = await networkResponsePromise;
    if (networkResponse) {
        return networkResponse;
    }
    
    return new Response('Offline', { status: 503 });
}

// 判斷是否為靜態資源
function isStaticAsset(url) {
    return STATIC_ASSETS.some(asset => url.endsWith(asset));
}

// 判斷是否為CDN資源
function isCDNAsset(url) {
    return CDN_ASSETS.some(asset => url === asset) ||
           url.includes('cdnjs.cloudflare.com') ||
           url.includes('unpkg.com');
}

// 判斷是否為圖片資源
function isImageAsset(url) {
    return /\.(png|jpg|jpeg|gif|webp|svg)$/i.test(url);
}

// 判斷是否為API請求
function isAPIRequest(url) {
    return url.includes('/api/') || url.includes('api.');
}

// 處理消息事件
self.addEventListener('message', (event) => {
    const { type, payload } = event.data;
    
    switch (type) {
        case 'SKIP_WAITING':
            self.skipWaiting();
            break;
            
        case 'GET_CACHE_STATUS':
            getCacheStatus().then(status => {
                event.ports[0].postMessage(status);
            });
            break;
            
        case 'CLEAR_CACHE':
            clearCache(payload?.cacheName).then(result => {
                event.ports[0].postMessage(result);
            });
            break;
            
        case 'CACHE_PHOTOS':
            cachePhotos(payload?.photos).then(result => {
                event.ports[0].postMessage(result);
            });
            break;
            
        default:
            console.warn('Unknown message type:', type);
    }
});

// 獲取緩存狀態
async function getCacheStatus() {
    try {
        const cacheNames = await caches.keys();
        const status = {};
        
        for (const cacheName of cacheNames) {
            const cache = await caches.open(cacheName);
            const keys = await cache.keys();
            status[cacheName] = {
                count: keys.length,
                size: await getCacheSize(cache, keys)
            };
        }
        
        return { success: true, caches: status };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// 計算緩存大小
async function getCacheSize(cache, keys) {
    let totalSize = 0;
    
    for (const key of keys.slice(0, 10)) { // 只檢查前10個以避免性能問題
        try {
            const response = await cache.match(key);
            if (response) {
                const blob = await response.blob();
                totalSize += blob.size;
            }
        } catch (error) {
            console.warn('Failed to get cache size for key:', key.url);
        }
    }
    
    return totalSize;
}

// 清理緩存
async function clearCache(cacheName) {
    try {
        if (cacheName) {
            const deleted = await caches.delete(cacheName);
            return { success: true, deleted };
        } else {
            const cacheNames = await caches.keys();
            const results = await Promise.all(
                cacheNames.map(name => caches.delete(name))
            );
            return { success: true, deleted: results.every(r => r) };
        }
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// 緩存照片
async function cachePhotos(photos) {
    if (!photos || !Array.isArray(photos)) {
        return { success: false, error: 'Invalid photos data' };
    }
    
    try {
        const cache = await caches.open(IMAGES_CACHE);
        const results = await Promise.allSettled(
            photos.map(photo => {
                if (photo.src) {
                    return cache.add(photo.src);
                }
                return Promise.reject('No src provided');
            })
        );
        
        const successful = results.filter(r => r.status === 'fulfilled').length;
        const failed = results.length - successful;
        
        return {
            success: true,
            cached: successful,
            failed: failed,
            total: results.length
        };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// 後台同步事件（如果支持）
self.addEventListener('sync', (event) => {
    console.log('Service Worker: Background sync triggered:', event.tag);
    
    if (event.tag === 'background-data-sync') {
        event.waitUntil(syncData());
    }
});

// 數據同步
async function syncData() {
    try {
        // 這裡可以實現數據同步邏輯
        console.log('Service Worker: Syncing data in background');
        
        // 示例：同步離線保存的數據
        const offlineData = await getOfflineData();
        if (offlineData.length > 0) {
            await uploadOfflineData(offlineData);
            await clearOfflineData();
        }
        
        return true;
    } catch (error) {
        console.error('Background sync failed:', error);
        return false;
    }
}

// 獲取離線數據（示例）
async function getOfflineData() {
    // 實際實現中，這裡會從IndexedDB或其他存儲中獲取數據
    return [];
}

// 上傳離線數據（示例）
async function uploadOfflineData(data) {
    // 實際實現中，這裡會將數據發送到服務器
    console.log('Uploading offline data:', data);
}

// 清理離線數據（示例）
async function clearOfflineData() {
    // 實際實現中，這裡會清理已上傳的離線數據
    console.log('Clearing uploaded offline data');
}

console.log('Service Worker: Script loaded');
