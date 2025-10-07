/**
 * 存儲適配器 - 提供統一的存儲接口
 * 自動處理 IndexedDB 和 localStorage 之間的切換
 */
class StorageAdapter {
    constructor() {
        this.useIndexedDB = IndexedDBManager.isSupported();
        this.indexedDBManager = null;
        this.initialized = false;
        
        // 存儲鍵映射
        this.keyMappings = {
            'photoNumberExtractorData': 'mainData',
            'pne_floorplan_labels': 'floorPlanLabels',
            'pne_floorplan_defect_marks': 'defectMarks',
            'pne_floorplan_base64': 'pdfData',
            'pne_floorplan_data': 'pdfData',
            'pne_floorplan_filename': 'pdfData',
            'pne_floorplan_view_state': 'viewState',
            'pne_current_view_state': 'viewState',
            'selectedLanguage': 'userSettings',
            'pne_label_size_scale': 'userSettings',
            'pne_defect_mark_size_scale': 'userSettings'
        };
    }

    /**
     * 初始化存儲適配器
     */
    async init() {
        if (this.initialized) {
            return;
        }

        if (this.useIndexedDB) {
            try {
                this.indexedDBManager = window.indexedDBManager;
                await this.indexedDBManager.init();
                
                // 檢查是否需要遷移數據
                const hasLocalStorageData = this.hasLocalStorageData();
                if (hasLocalStorageData) {
                    console.log('檢測到 localStorage 數據，開始遷移...');
                    await this.indexedDBManager.migrateFromLocalStorage();
                }
                
                console.log('存儲適配器初始化完成 - 使用 IndexedDB');
            } catch (error) {
                console.error('IndexedDB 初始化失敗，回退到 localStorage:', error);
                this.useIndexedDB = false;
            }
        } else {
            console.log('存儲適配器初始化完成 - 使用 localStorage');
        }
        
        this.initialized = true;
    }

    /**
     * 檢查 localStorage 是否有數據
     */
    hasLocalStorageData() {
        const keys = Object.keys(this.keyMappings);
        return keys.some(key => localStorage.getItem(key) !== null);
    }

    /**
     * 設置項目
     */
    async setItem(key, value) {
        try {
            if (!this.initialized) {
                await this.init();
            }

            if (this.useIndexedDB && this.indexedDBManager) {
                const storeName = this.keyMappings[key] || 'mainData';
                // 確保 key 是有效的字符串
                const validKey = key !== null && key !== undefined ? String(key) : 'default';
                await this.indexedDBManager.setItem(storeName, validKey, value);
            } else {
                localStorage.setItem(key, JSON.stringify(value));
            }
        } catch (error) {
            if (window.storageErrorHandler) {
                window.storageErrorHandler.handleError(error, 'setItem', { key, value });
            }
            // 回退到 localStorage
            try {
                localStorage.setItem(key, JSON.stringify(value));
            } catch (fallbackError) {
                console.error('localStorage 回退也失敗:', fallbackError);
            }
        }
    }

    /**
     * 獲取項目
     */
    async getItem(key) {
        try {
            if (!this.initialized) {
                await this.init();
            }

            if (this.useIndexedDB && this.indexedDBManager) {
                const storeName = this.keyMappings[key] || 'mainData';
                // 確保 key 是有效的字符串
                const validKey = key !== null && key !== undefined ? String(key) : 'default';
                const value = await this.indexedDBManager.getItem(storeName, validKey);
                return value;
            } else {
                const value = localStorage.getItem(key);
                return value ? JSON.parse(value) : null;
            }
        } catch (error) {
            if (window.storageErrorHandler) {
                window.storageErrorHandler.handleError(error, 'getItem', { key });
            }
            // 回退到 localStorage
            try {
                const value = localStorage.getItem(key);
                return value ? JSON.parse(value) : null;
            } catch (fallbackError) {
                console.error('localStorage 回退也失敗:', fallbackError);
                return null;
            }
        }
    }

    /**
     * 刪除項目
     */
    async removeItem(key) {
        if (!this.initialized) {
            await this.init();
        }

        if (this.useIndexedDB && this.indexedDBManager) {
            const storeName = this.keyMappings[key] || 'mainData';
            // 確保 key 是有效的字符串
            const validKey = key !== null && key !== undefined ? String(key) : 'default';
            await this.indexedDBManager.removeItem(storeName, validKey);
        } else {
            localStorage.removeItem(key);
        }
    }

    /**
     * 清除所有數據
     */
    async clear() {
        if (!this.initialized) {
            await this.init();
        }

        if (this.useIndexedDB && this.indexedDBManager) {
            await this.indexedDBManager.clear();
        } else {
            localStorage.clear();
        }
    }

    /**
     * 獲取存儲類型
     */
    getStorageType() {
        return this.useIndexedDB ? 'IndexedDB' : 'localStorage';
    }

    /**
     * 強制使用 localStorage
     */
    forceLocalStorage() {
        this.useIndexedDB = false;
        console.log('強制使用 localStorage');
    }

    /**
     * 強制使用 IndexedDB
     */
    forceIndexedDB() {
        this.useIndexedDB = true;
        console.log('強制使用 IndexedDB');
    }

    /**
     * 同步方法 - 為了向後兼容
     */
    setItemSync(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getItemSync(key) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }

    removeItemSync(key) {
        localStorage.removeItem(key);
    }

    clearSync() {
        localStorage.clear();
    }
}

// 創建全局實例
window.storageAdapter = new StorageAdapter();

// 導出類別
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StorageAdapter;
}
