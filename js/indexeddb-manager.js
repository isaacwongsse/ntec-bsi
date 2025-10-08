/**
 * IndexedDB 管理器 - 替代 localStorage 的存儲解決方案
 * 提供異步數據存儲、更大的存儲容量和更好的性能
 */
class IndexedDBManager {
    constructor() {
        this.dbName = 'PlanPNE_Database';
        this.dbVersion = 1;
        this.db = null;
        this.isInitialized = false;
        this.fallbackToLocalStorage = true;
        
        // 對象存儲名稱
        this.stores = {
            MAIN_DATA: 'mainData',
            FLOOR_PLAN_LABELS: 'floorPlanLabels',
            DEFECT_MARKS: 'defectMarks',
            PDF_DATA: 'pdfData',
            VIEW_STATE: 'viewState',
            USER_SETTINGS: 'userSettings',
            PHOTO_METADATA: 'photoMetadata'
        };
    }

    /**
     * 初始化 IndexedDB 數據庫
     */
    async init() {
        if (this.isInitialized) {
            console.log('IndexedDB 已經初始化，跳過重複初始化');
            return Promise.resolve();
        }

        console.log('開始初始化 IndexedDB...');

        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.dbVersion);

            request.onerror = () => {
                console.error('IndexedDB 初始化失敗:', request.error);
                if (this.fallbackToLocalStorage) {
                    console.warn('回退到 localStorage');
                    this.isInitialized = true;
                    resolve();
                } else {
                    reject(request.error);
                }
            };

            request.onsuccess = () => {
                this.db = request.result;
                this.isInitialized = true;
                console.log('IndexedDB 初始化成功');
                resolve();
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                console.log('IndexedDB 升級中...');

                // 創建對象存儲
                if (!db.objectStoreNames.contains(this.stores.MAIN_DATA)) {
                    db.createObjectStore(this.stores.MAIN_DATA, { keyPath: 'id' });
                }
                if (!db.objectStoreNames.contains(this.stores.FLOOR_PLAN_LABELS)) {
                    db.createObjectStore(this.stores.FLOOR_PLAN_LABELS, { keyPath: 'id' });
                }
                if (!db.objectStoreNames.contains(this.stores.DEFECT_MARKS)) {
                    db.createObjectStore(this.stores.DEFECT_MARKS, { keyPath: 'id' });
                }
                if (!db.objectStoreNames.contains(this.stores.PDF_DATA)) {
                    db.createObjectStore(this.stores.PDF_DATA, { keyPath: 'id' });
                }
                if (!db.objectStoreNames.contains(this.stores.VIEW_STATE)) {
                    db.createObjectStore(this.stores.VIEW_STATE, { keyPath: 'id' });
                }
                if (!db.objectStoreNames.contains(this.stores.USER_SETTINGS)) {
                    db.createObjectStore(this.stores.USER_SETTINGS, { keyPath: 'key' });
                }
                if (!db.objectStoreNames.contains(this.stores.PHOTO_METADATA)) {
                    db.createObjectStore(this.stores.PHOTO_METADATA, { keyPath: 'id' });
                }

                console.log('IndexedDB 對象存儲創建完成');
            };
        });
    }

    /**
     * 通用存儲方法
     */
    async setItem(storeName, key, value) {
        if (!this.isInitialized) {
            await this.init();
        }

        if (!this.db) {
            return this.fallbackSetItem(key, value);
        }

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([storeName], 'readwrite');
            const store = transaction.objectStore(storeName);
            
            // 確保 key 是有效的字符串或數字
            const validKey = key !== null && key !== undefined ? String(key) : 'default';
            
            // 依據 object store 的 keyPath 建立正確的主鍵欄位
            // 大多數 store 使用 { keyPath: 'id' }，唯獨 userSettings 使用 { keyPath: 'key' }
            const record = (storeName === this.stores.USER_SETTINGS)
                ? { key: validKey, data: value, timestamp: Date.now() }
                : { id: validKey, data: value, timestamp: Date.now() };

            const request = store.put(record);

            request.onsuccess = () => {
                console.log(`數據已保存到 ${storeName}:`, validKey);
                resolve();
            };

            request.onerror = () => {
                console.error(`保存到 ${storeName} 失敗:`, request.error);
                if (this.fallbackToLocalStorage) {
                    this.fallbackSetItem(key, value);
                    resolve();
                } else {
                    reject(request.error);
                }
            };
        });
    }

    /**
     * 通用讀取方法
     */
    async getItem(storeName, key) {
        if (!this.isInitialized) {
            await this.init();
        }

        if (!this.db) {
            return this.fallbackGetItem(key);
        }

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([storeName], 'readonly');
            const store = transaction.objectStore(storeName);
            
            const request = store.get(key);

            request.onsuccess = () => {
                if (request.result) {
                    console.log(`從 ${storeName} 讀取數據:`, key);
                    resolve(request.result.data);
                } else {
                    resolve(null);
                }
            };

            request.onerror = () => {
                console.error(`從 ${storeName} 讀取失敗:`, request.error);
                if (this.fallbackToLocalStorage) {
                    resolve(this.fallbackGetItem(key));
                } else {
                    reject(request.error);
                }
            };
        });
    }

    /**
     * 刪除項目
     */
    async removeItem(storeName, key) {
        if (!this.isInitialized) {
            await this.init();
        }

        if (!this.db) {
            return this.fallbackRemoveItem(key);
        }

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([storeName], 'readwrite');
            const store = transaction.objectStore(storeName);
            
            const request = store.delete(key);

            request.onsuccess = () => {
                console.log(`從 ${storeName} 刪除數據:`, key);
                resolve();
            };

            request.onerror = () => {
                console.error(`從 ${storeName} 刪除失敗:`, request.error);
                if (this.fallbackToLocalStorage) {
                    this.fallbackRemoveItem(key);
                    resolve();
                } else {
                    reject(request.error);
                }
            };
        });
    }

    /**
     * 清除所有數據
     */
    async clear() {
        if (!this.isInitialized) {
            await this.init();
        }

        if (!this.db) {
            return this.fallbackClear();
        }

        const clearPromises = Object.values(this.stores).map(storeName => {
            return new Promise((resolve, reject) => {
                const transaction = this.db.transaction([storeName], 'readwrite');
                const store = transaction.objectStore(storeName);
                
                const request = store.clear();

                request.onsuccess = () => {
                    console.log(`清除 ${storeName} 完成`);
                    resolve();
                };

                request.onerror = () => {
                    console.error(`清除 ${storeName} 失敗:`, request.error);
                    reject(request.error);
                };
            });
        });

        try {
            await Promise.all(clearPromises);
            console.log('所有 IndexedDB 數據已清除');
        } catch (error) {
            console.error('清除 IndexedDB 數據時發生錯誤:', error);
            if (this.fallbackToLocalStorage) {
                this.fallbackClear();
            }
        }
    }

    /**
     * 從 localStorage 遷移數據到 IndexedDB
     */
    async migrateFromLocalStorage() {
        console.log('開始從 localStorage 遷移數據到 IndexedDB...');
        
        const migrationMap = {
            'photoNumberExtractorData': this.stores.MAIN_DATA,
            'pne_floorplan_labels': this.stores.FLOOR_PLAN_LABELS,
            'pne_floorplan_defect_marks': this.stores.DEFECT_MARKS,
            'pne_floorplan_base64': this.stores.PDF_DATA,
            'pne_floorplan_data': this.stores.PDF_DATA,
            'pne_floorplan_filename': this.stores.PDF_DATA,
            'pne_floorplan_view_state': this.stores.VIEW_STATE,
            'pne_current_view_state': this.stores.VIEW_STATE,
            'selectedLanguage': this.stores.USER_SETTINGS,
            'pne_label_size_scale': this.stores.USER_SETTINGS,
            'pne_defect_mark_size_scale': this.stores.USER_SETTINGS
        };

        const migrationPromises = [];

        for (const [localStorageKey, storeName] of Object.entries(migrationMap)) {
            const value = localStorage.getItem(localStorageKey);
            if (value !== null) {
                // 嘗試解析 JSON，如果失敗則保持原始字符串
                let parsedValue;
                try {
                    parsedValue = JSON.parse(value);
                } catch (e) {
                    // 如果不是有效的 JSON，保持原始字符串
                    parsedValue = value;
                }
                
                migrationPromises.push(
                    this.setItem(storeName, localStorageKey, parsedValue)
                );
            }
        }

        try {
            await Promise.all(migrationPromises);
            console.log('數據遷移完成');
            
            // 遷移完成後可選擇清除 localStorage
            // localStorage.clear();
            
        } catch (error) {
            console.error('數據遷移失敗:', error);
        }
    }

    /**
     * localStorage 回退方法
     */
    fallbackSetItem(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('localStorage 回退保存失敗:', error);
        }
    }

    fallbackGetItem(key) {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (error) {
            console.error('localStorage 回退讀取失敗:', error);
            return null;
        }
    }

    fallbackRemoveItem(key) {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error('localStorage 回退刪除失敗:', error);
        }
    }

    fallbackClear() {
        try {
            localStorage.clear();
        } catch (error) {
            console.error('localStorage 回退清除失敗:', error);
        }
    }

    /**
     * 檢查 IndexedDB 支持
     */
    static isSupported() {
        return 'indexedDB' in window;
    }

    /**
     * 獲取存儲使用情況
     */
    async getStorageUsage() {
        if (!this.isInitialized) {
            await this.init();
        }

        if (!this.db) {
            return { used: 0, available: 0 };
        }

        // 這裡可以實現更詳細的存儲使用情況檢查
        return { used: 0, available: 0 };
    }
}

// 創建全局實例
window.indexedDBManager = new IndexedDBManager();

// 導出類別供其他模組使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = IndexedDBManager;
}
