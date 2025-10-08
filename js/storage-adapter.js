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
            // File System Access API handles
            'pne_pdf_file_handle': 'pdfData',
            'pne_photos_dir_handle': 'photoMetadata',
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
            console.log('存儲適配器已經初始化，跳過重複初始化');
            return;
        }

        console.log('開始初始化存儲適配器...');

        if (this.useIndexedDB) {
            try {
                this.indexedDBManager = window.indexedDBManager;
                await this.indexedDBManager.init();
                
                // 檢查是否需要遷移數據
                const hasLocalStorageData = this.hasLocalStorageData();
                if (hasLocalStorageData) {
                    console.log('檢測到 localStorage 數據，開始遷移...');
                    await this.indexedDBManager.migrateFromLocalStorage();
                } else {
                    console.log('沒有檢測到 localStorage 數據，跳過遷移');
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
        console.log('存儲適配器初始化狀態:', this.initialized);
    }

    /**
     * 檢查 localStorage 是否有數據
     */
    hasLocalStorageData() {
        const keys = Object.keys(this.keyMappings);
        return keys.some(key => localStorage.getItem(key) !== null);
    }

    /**
     * 設置項目 - 同步到 localStorage 和 IndexedDB
     */
    async setItem(key, value) {
        try {
            if (!this.initialized) {
                await this.init();
            }

            // 同時保存到 localStorage 和 IndexedDB
            const promises = [];
            
            // 保存到 localStorage
            try {
                localStorage.setItem(key, JSON.stringify(value));
                console.log(`數據已同步保存到 localStorage: ${key}`);
            } catch (localError) {
                console.error(`localStorage 保存失敗: ${localError.message}`);
            }
            
            // 保存到 IndexedDB（如果可用）
            if (this.useIndexedDB && this.indexedDBManager) {
                const storeName = this.keyMappings[key] || 'mainData';
                const validKey = key !== null && key !== undefined ? String(key) : 'default';
                promises.push(
                    this.indexedDBManager.setItem(storeName, validKey, value)
                        .then(() => {
                            console.log(`數據已同步保存到 IndexedDB: ${key}`);
                        })
                        .catch((indexedError) => {
                            console.error(`IndexedDB 保存失敗: ${indexedError.message}`);
                        })
                );
            }
            
            // 等待所有操作完成
            if (promises.length > 0) {
                await Promise.allSettled(promises);
            }
            
        } catch (error) {
            if (window.storageErrorHandler) {
                window.storageErrorHandler.handleError(error, 'setItem', { key, value });
            }
            console.error(`setItem 操作失敗: ${error.message}`);
        }
    }

    /**
     * 獲取項目 - 優先從 IndexedDB 讀取，失敗時從 localStorage 讀取
     */
    async getItem(key) {
        try {
            if (!this.initialized) {
                await this.init();
            }

            // 優先從 IndexedDB 讀取
            if (this.useIndexedDB && this.indexedDBManager) {
                try {
                    const storeName = this.keyMappings[key] || 'mainData';
                    const validKey = key !== null && key !== undefined ? String(key) : 'default';
                    const value = await this.indexedDBManager.getItem(storeName, validKey);
                    if (value !== null) {
                        console.log(`數據已從 IndexedDB 讀取: ${key}`);
                        return value;
                    }
                } catch (indexedError) {
                    console.warn(`IndexedDB 讀取失敗，嘗試從 localStorage 讀取: ${indexedError.message}`);
                }
            }
            
            // 從 localStorage 讀取
            try {
                const value = localStorage.getItem(key);
                if (value !== null) {
                    const parsedValue = JSON.parse(value);
                    console.log(`數據已從 localStorage 讀取: ${key}`);
                    
                    // 如果 IndexedDB 可用但讀取失敗，嘗試同步數據到 IndexedDB
                    if (this.useIndexedDB && this.indexedDBManager) {
                        this.syncToIndexedDB(key, parsedValue).catch(syncError => {
                            console.warn(`同步到 IndexedDB 失敗: ${syncError.message}`);
                        });
                    }
                    
                    return parsedValue;
                }
            } catch (localError) {
                console.error(`localStorage 讀取失敗: ${localError.message}`);
            }
            
            return null;
            
        } catch (error) {
            if (window.storageErrorHandler) {
                window.storageErrorHandler.handleError(error, 'getItem', { key });
            }
            console.error(`getItem 操作失敗: ${error.message}`);
            return null;
        }
    }

    /**
     * 刪除項目 - 同步從 localStorage 和 IndexedDB 刪除
     */
    async removeItem(key) {
        try {
            if (!this.initialized) {
                await this.init();
            }

            const promises = [];
            
            // 從 localStorage 刪除
            try {
                localStorage.removeItem(key);
                console.log(`數據已從 localStorage 刪除: ${key}`);
            } catch (localError) {
                console.error(`localStorage 刪除失敗: ${localError.message}`);
            }
            
            // 從 IndexedDB 刪除（如果可用）
            if (this.useIndexedDB && this.indexedDBManager) {
                const storeName = this.keyMappings[key] || 'mainData';
                const validKey = key !== null && key !== undefined ? String(key) : 'default';
                promises.push(
                    this.indexedDBManager.removeItem(storeName, validKey)
                        .then(() => {
                            console.log(`數據已從 IndexedDB 刪除: ${key}`);
                        })
                        .catch((indexedError) => {
                            console.error(`IndexedDB 刪除失敗: ${indexedError.message}`);
                        })
                );
            }
            
            // 等待所有操作完成
            if (promises.length > 0) {
                await Promise.allSettled(promises);
            }
            
        } catch (error) {
            console.error(`removeItem 操作失敗: ${error.message}`);
        }
    }

    /**
     * 清除所有數據 - 同步清除 localStorage 和 IndexedDB
     */
    async clear() {
        try {
            if (!this.initialized) {
                await this.init();
            }

            const promises = [];
            
            // 清除 localStorage
            try {
                localStorage.clear();
                console.log('localStorage 已清除');
            } catch (localError) {
                console.error(`localStorage 清除失敗: ${localError.message}`);
            }
            
            // 清除 IndexedDB（如果可用）
            if (this.useIndexedDB && this.indexedDBManager) {
                promises.push(
                    this.indexedDBManager.clear()
                        .then(() => {
                            console.log('IndexedDB 已清除');
                        })
                        .catch((indexedError) => {
                            console.error(`IndexedDB 清除失敗: ${indexedError.message}`);
                        })
                );
            }
            
            // 等待所有操作完成
            if (promises.length > 0) {
                await Promise.allSettled(promises);
            }
            
        } catch (error) {
            console.error(`clear 操作失敗: ${error.message}`);
        }
    }

    /**
     * 同步數據到 IndexedDB
     */
    async syncToIndexedDB(key, value) {
        if (!this.useIndexedDB || !this.indexedDBManager) {
            return;
        }
        
        try {
            const storeName = this.keyMappings[key] || 'mainData';
            const validKey = key !== null && key !== undefined ? String(key) : 'default';
            await this.indexedDBManager.setItem(storeName, validKey, value);
            console.log(`數據已同步到 IndexedDB: ${key}`);
        } catch (error) {
            console.error(`同步到 IndexedDB 失敗: ${error.message}`);
            throw error;
        }
    }

    /**
     * 強制同步所有 localStorage 數據到 IndexedDB
     */
    async syncAllLocalStorageToIndexedDB() {
        if (!this.useIndexedDB || !this.indexedDBManager) {
            console.log('IndexedDB 不可用，跳過同步');
            return;
        }
        
        console.log('開始同步所有 localStorage 數據到 IndexedDB...');
        
        const syncPromises = [];
        
        for (const [localStorageKey, storeName] of Object.entries(this.keyMappings)) {
            const value = localStorage.getItem(localStorageKey);
            if (value !== null) {
                try {
                    const parsedValue = JSON.parse(value);
                    syncPromises.push(
                        this.syncToIndexedDB(localStorageKey, parsedValue)
                            .catch(error => {
                                console.error(`同步 ${localStorageKey} 失敗: ${error.message}`);
                            })
                    );
                } catch (parseError) {
                    console.error(`解析 ${localStorageKey} 失敗: ${parseError.message}`);
                }
            }
        }
        
        try {
            await Promise.allSettled(syncPromises);
            console.log('所有 localStorage 數據同步到 IndexedDB 完成');
        } catch (error) {
            console.error('同步過程發生錯誤:', error.message);
        }
    }

    /**
     * 獲取存儲類型
     */
    getStorageType() {
        return this.useIndexedDB ? 'IndexedDB + localStorage (同步)' : 'localStorage';
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
