/**
 * 存儲適配器 - 提供統一的存儲接口
 * 僅使用 IndexedDB 進行數據存儲
 */
class StorageAdapter {
    constructor() {
        // 強制使用 IndexedDB，不再回退到 localStorage
        if (!IndexedDBManager.isSupported()) {
            throw new Error('此應用程式需要支援 IndexedDB 的瀏覽器。請更新您的瀏覽器。');
        }
        this.useIndexedDB = true;
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
            return;
        }

        try {
            this.indexedDBManager = window.indexedDBManager;
            await this.indexedDBManager.init();
            
            // 檢查是否需要遷移數據（僅在首次運行時）
            const hasLocalStorageData = this.hasLocalStorageData();
            if (hasLocalStorageData) {
                console.log('檢測到 localStorage 數據，開始一次性遷移到 IndexedDB...');
                await this.indexedDBManager.migrateFromLocalStorage();
                // 遷移完成後清除 localStorage 以釋放空間
                console.log('數據遷移完成，清除 localStorage...');
                localStorage.clear();
            }
            
            console.log('存儲適配器初始化完成 - 使用 IndexedDB');
            this.initialized = true;
        } catch (error) {
            console.error('IndexedDB 初始化失敗:', error);
            throw new Error('無法初始化存儲系統。請檢查瀏覽器設置並確保 IndexedDB 可用。');
        }
    }

    /**
     * 檢查 localStorage 是否有數據（僅用於一次性遷移）
     */
    hasLocalStorageData() {
        const keys = Object.keys(this.keyMappings);
        return keys.some(key => localStorage.getItem(key) !== null);
    }
    
    /**
     * 直接使用 IndexedDB 存儲（不經過 localStorage）
     */
    async setItemDirect(key, value) {
        if (!this.initialized) {
            await this.init();
        }
        
        const storeName = this.keyMappings[key] || 'mainData';
        const validKey = key !== null && key !== undefined ? String(key) : 'default';
        
        try {
            await this.indexedDBManager.setItem(storeName, validKey, value);
            console.log(`數據直接保存到 IndexedDB: ${key}`);
        } catch (error) {
            console.error('IndexedDB setItemDirect 失敗:', error);
            throw error;
        }
    }
    
    /**
     * 直接從 IndexedDB 讀取（不經過 localStorage）
     */
    async getItemDirect(key) {
        if (!this.initialized) {
            await this.init();
        }
        
        const storeName = this.keyMappings[key] || 'mainData';
        const validKey = key !== null && key !== undefined ? String(key) : 'default';
        
        try {
            const result = await this.indexedDBManager.getItem(storeName, validKey);
            console.log(`數據直接從 IndexedDB 讀取: ${key}`, !!result);
            return result;
        } catch (error) {
            console.error('IndexedDB getItemDirect 失敗:', error);
            return null;
        }
    }

    /**
     * 設置項目
     */
    async setItem(key, value) {
        if (!this.initialized) {
            await this.init();
        }

        const storeName = this.keyMappings[key] || 'mainData';
        // 確保 key 是有效的字符串
        const validKey = key !== null && key !== undefined ? String(key) : 'default';
        
        try {
            await this.indexedDBManager.setItem(storeName, validKey, value);
        } catch (error) {
            console.error('IndexedDB setItem 失敗:', error);
            if (window.storageErrorHandler) {
                window.storageErrorHandler.handleError(error, 'setItem', { key, value });
            }
            throw error; // 不再回退到 localStorage，直接拋出錯誤
        }
    }

    /**
     * 獲取項目
     */
    async getItem(key) {
        if (!this.initialized) {
            await this.init();
        }

        const storeName = this.keyMappings[key] || 'mainData';
        // 確保 key 是有效的字符串
        const validKey = key !== null && key !== undefined ? String(key) : 'default';
        
        try {
            const value = await this.indexedDBManager.getItem(storeName, validKey);
            return value;
        } catch (error) {
            console.error('IndexedDB getItem 失敗:', error);
            if (window.storageErrorHandler) {
                window.storageErrorHandler.handleError(error, 'getItem', { key });
            }
            return null; // 發生錯誤時返回 null
        }
    }

    /**
     * 刪除項目
     */
    async removeItem(key) {
        if (!this.initialized) {
            await this.init();
        }

        const storeName = this.keyMappings[key] || 'mainData';
        // 確保 key 是有效的字符串
        const validKey = key !== null && key !== undefined ? String(key) : 'default';
        
        try {
            await this.indexedDBManager.removeItem(storeName, validKey);
        } catch (error) {
            console.error('IndexedDB removeItem 失敗:', error);
            throw error;
        }
    }

    /**
     * 清除所有數據
     */
    async clear() {
        if (!this.initialized) {
            await this.init();
        }

        try {
            await this.indexedDBManager.clear();
            // 同時清除 localStorage（如果有殘留數據）
            localStorage.clear();
        } catch (error) {
            console.error('IndexedDB clear 失敗:', error);
            throw error;
        }
    }

    /**
     * 獲取存儲類型
     */
    getStorageType() {
        return 'IndexedDB';
    }

    /**
     * 檢查 IndexedDB 是否可用
     */
    isAvailable() {
        return this.initialized && this.indexedDBManager !== null;
    }

    /**
     * 獲取存儲使用情況
     */
    async getStorageUsage() {
        if (!this.initialized) {
            await this.init();
        }
        return await this.indexedDBManager.getStorageUsage();
    }
}

// 創建全局實例
window.storageAdapter = new StorageAdapter();

// 導出類別
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StorageAdapter;
}
