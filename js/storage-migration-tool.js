/**
 * 存儲遷移和測試工具
 */
class StorageMigrationTool {
    constructor() {
        this.testResults = {};
        this.migrationLog = [];
    }

    /**
     * 測試 IndexedDB 功能
     */
    async testIndexedDB() {
        const results = {
            supported: false,
            init: false,
            read: false,
            write: false,
            delete: false,
            clear: false,
            errors: []
        };

        try {
            // 測試支持
            results.supported = 'indexedDB' in window;
            if (!results.supported) {
                results.errors.push('IndexedDB 不支持');
                return results;
            }

            // 測試初始化
            const testDB = new IndexedDBManager();
            await testDB.init();
            results.init = true;

            // 測試寫入
            await testDB.setItem('testStore', 'testKey', { test: 'data' });
            results.write = true;

            // 測試讀取
            const data = await testDB.getItem('testStore', 'testKey');
            results.read = data && data.test === 'data';

            // 測試刪除
            await testDB.removeItem('testStore', 'testKey');
            const deletedData = await testDB.getItem('testStore', 'testKey');
            results.delete = deletedData === null;

            // 測試清除
            await testDB.setItem('testStore', 'testKey2', { test: 'data2' });
            await testDB.clear();
            const clearedData = await testDB.getItem('testStore', 'testKey2');
            results.clear = clearedData === null;

        } catch (error) {
            results.errors.push(error.message);
        }

        this.testResults.indexedDB = results;
        return results;
    }

    /**
     * 測試 localStorage 功能
     */
    testLocalStorage() {
        const results = {
            supported: false,
            read: false,
            write: false,
            delete: false,
            clear: false,
            errors: []
        };

        try {
            // 測試支持
            results.supported = typeof Storage !== 'undefined' && localStorage;
            if (!results.supported) {
                results.errors.push('localStorage 不支持');
                return results;
            }

            // 測試寫入
            localStorage.setItem('testKey', JSON.stringify({ test: 'data' }));
            results.write = true;

            // 測試讀取
            const data = JSON.parse(localStorage.getItem('testKey'));
            results.read = data && data.test === 'data';

            // 測試刪除
            localStorage.removeItem('testKey');
            const deletedData = localStorage.getItem('testKey');
            results.delete = deletedData === null;

            // 測試清除
            localStorage.setItem('testKey2', 'test');
            localStorage.clear();
            const clearedData = localStorage.getItem('testKey2');
            results.clear = clearedData === null;

        } catch (error) {
            results.errors.push(error.message);
        }

        this.testResults.localStorage = results;
        return results;
    }

    /**
     * 執行完整的存儲測試
     */
    async runFullTest() {
        console.log('開始存儲系統測試...');
        
        const indexedDBResults = await this.testIndexedDB();
        const localStorageResults = this.testLocalStorage();
        
        const summary = {
            indexedDB: indexedDBResults,
            localStorage: localStorageResults,
            recommendation: this.getRecommendation(indexedDBResults, localStorageResults)
        };

        console.log('存儲測試完成:', summary);
        return summary;
    }

    /**
     * 獲取存儲建議
     */
    getRecommendation(indexedDBResults, localStorageResults) {
        if (indexedDBResults.supported && indexedDBResults.init && indexedDBResults.write && indexedDBResults.read) {
            return 'IndexedDB';
        } else if (localStorageResults.supported && localStorageResults.write && localStorageResults.read) {
            return 'localStorage';
        } else {
            return 'none';
        }
    }

    /**
     * 執行數據遷移
     */
    async migrateData() {
        console.log('開始數據遷移...');
        
        const migrationMap = {
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

        const migrationResults = {
            total: 0,
            migrated: 0,
            failed: 0,
            errors: []
        };

        for (const [localStorageKey, storeName] of Object.entries(migrationMap)) {
            migrationResults.total++;
            
            try {
                const value = localStorage.getItem(localStorageKey);
                if (value !== null) {
                    if (window.storageAdapter) {
                        await window.storageAdapter.setItem(localStorageKey, JSON.parse(value));
                        migrationResults.migrated++;
                        this.migrationLog.push(`成功遷移: ${localStorageKey} -> ${storeName}`);
                    }
                }
            } catch (error) {
                migrationResults.failed++;
                migrationResults.errors.push(`${localStorageKey}: ${error.message}`);
                this.migrationLog.push(`遷移失敗: ${localStorageKey} - ${error.message}`);
            }
        }

        console.log('數據遷移完成:', migrationResults);
        return migrationResults;
    }

    /**
     * 驗證遷移結果
     */
    async verifyMigration() {
        console.log('驗證遷移結果...');
        
        const verificationResults = {
            verified: 0,
            failed: 0,
            errors: []
        };

        const keysToVerify = [
            'photoNumberExtractorData',
            'pne_floorplan_labels',
            'pne_floorplan_defect_marks',
            'selectedLanguage'
        ];

        for (const key of keysToVerify) {
            try {
                const localStorageValue = localStorage.getItem(key);
                const indexedDBValue = await window.storageAdapter.getItem(key);
                
                if (localStorageValue && indexedDBValue) {
                    const localParsed = JSON.parse(localStorageValue);
                    if (JSON.stringify(localParsed) === JSON.stringify(indexedDBValue)) {
                        verificationResults.verified++;
                    } else {
                        verificationResults.failed++;
                        verificationResults.errors.push(`${key}: 數據不匹配`);
                    }
                } else if (!localStorageValue && !indexedDBValue) {
                    verificationResults.verified++;
                } else {
                    verificationResults.failed++;
                    verificationResults.errors.push(`${key}: 數據存在性不匹配`);
                }
            } catch (error) {
                verificationResults.failed++;
                verificationResults.errors.push(`${key}: ${error.message}`);
            }
        }

        console.log('遷移驗證完成:', verificationResults);
        return verificationResults;
    }

    /**
     * 獲取遷移日誌
     */
    getMigrationLog() {
        return this.migrationLog;
    }

    /**
     * 清除測試數據
     */
    async cleanupTestData() {
        try {
            // 清除 IndexedDB 測試數據
            if (window.indexedDBManager) {
                await window.indexedDBManager.clear();
            }
            
            // 清除 localStorage 測試數據
            const testKeys = ['testKey', 'testKey2'];
            testKeys.forEach(key => localStorage.removeItem(key));
            
            console.log('測試數據清理完成');
        } catch (error) {
            console.error('清理測試數據時發生錯誤:', error);
        }
    }
}

// 創建全局實例
window.storageMigrationTool = new StorageMigrationTool();

// 導出類別
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StorageMigrationTool;
}
