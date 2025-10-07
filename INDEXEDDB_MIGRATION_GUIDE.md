# IndexedDB 遷移指南

## 概述

本項目已從 localStorage 遷移到 IndexedDB，提供更大的存儲容量、更好的性能和更可靠的數據持久化。

## 遷移架構

### 1. 存儲層級結構

```
IndexedDB Database: PlanPNE_Database
├── mainData (主要應用數據)
├── floorPlanLabels (樓層平面圖標籤)
├── defectMarks (缺陷標記)
├── pdfData (PDF 文件數據)
├── viewState (視圖狀態)
├── userSettings (用戶設定)
└── photoMetadata (照片元數據)
```

### 2. 核心組件

- **IndexedDBManager**: IndexedDB 底層操作
- **StorageAdapter**: 統一存儲接口，自動處理 IndexedDB/localStorage 切換
- **StorageErrorHandler**: 錯誤處理和回退機制
- **StorageMigrationTool**: 數據遷移和測試工具

## 使用方法

### 基本操作

```javascript
// 初始化存儲適配器
await window.storageAdapter.init();

// 保存數據
await window.storageAdapter.setItem('key', data);

// 讀取數據
const data = await window.storageAdapter.getItem('key');

// 刪除數據
await window.storageAdapter.removeItem('key');

// 清除所有數據
await window.storageAdapter.clear();
```

### 同步方法（向後兼容）

```javascript
// 同步方法仍然可用，但建議使用異步方法
window.storageAdapter.setItemSync('key', data);
const data = window.storageAdapter.getItemSync('key');
window.storageAdapter.removeItemSync('key');
window.storageAdapter.clearSync();
```

## 自動遷移

應用程式會在首次載入時自動檢測並遷移 localStorage 數據：

1. 檢測 IndexedDB 支持
2. 初始化 IndexedDB 數據庫
3. 掃描 localStorage 中的現有數據
4. 自動遷移到 IndexedDB
5. 驗證遷移結果

## 錯誤處理

### 自動回退機制

- IndexedDB 初始化失敗時自動回退到 localStorage
- 操作失敗時自動重試
- 錯誤次數過多時啟用回退模式
- 用戶友好的錯誤提示

### 錯誤監控

```javascript
// 檢查錯誤統計
const stats = window.storageErrorHandler.getErrorStats();

// 檢查是否在回退模式
const isFallback = window.storageErrorHandler.isInFallbackMode();

// 重置錯誤計數器
window.storageErrorHandler.reset();
```

## 測試和驗證

### 運行存儲測試

```javascript
// 執行完整測試
const testResults = await window.storageMigrationTool.runFullTest();

// 測試 IndexedDB
const indexedDBResults = await window.storageMigrationTool.testIndexedDB();

// 測試 localStorage
const localStorageResults = window.storageMigrationTool.testLocalStorage();
```

### 手動遷移

```javascript
// 執行數據遷移
const migrationResults = await window.storageMigrationTool.migrateData();

// 驗證遷移結果
const verificationResults = await window.storageMigrationTool.verifyMigration();

// 查看遷移日誌
const log = window.storageMigrationTool.getMigrationLog();
```

## 性能優勢

### IndexedDB vs localStorage

| 特性 | IndexedDB | localStorage |
|------|-----------|--------------|
| 存儲容量 | 數 GB | 5-10 MB |
| 數據類型 | 任意對象 | 僅字符串 |
| 性能 | 異步，不阻塞 UI | 同步，可能阻塞 |
| 索引 | 支持複雜查詢 | 無索引 |
| 事務 | 支持事務 | 無事務支持 |

### 實際改進

- **存儲容量**: 從 5-10MB 增加到數 GB
- **性能**: 異步操作不阻塞用戶界面
- **可靠性**: 更好的錯誤處理和數據完整性
- **擴展性**: 支持更複雜的數據結構和查詢

## 兼容性

### 瀏覽器支持

- **Chrome**: 24+
- **Firefox**: 16+
- **Safari**: 10+
- **Edge**: 12+
- **IE**: 10+

### 回退策略

- 不支持 IndexedDB 的瀏覽器自動使用 localStorage
- IndexedDB 失敗時自動回退到 localStorage
- 保持向後兼容性

## 故障排除

### 常見問題

1. **IndexedDB 初始化失敗**
   - 檢查瀏覽器支持
   - 檢查存儲權限
   - 查看控制台錯誤信息

2. **數據遷移失敗**
   - 檢查 localStorage 數據完整性
   - 運行遷移工具驗證
   - 手動執行遷移

3. **性能問題**
   - 檢查錯誤統計
   - 確認是否在回退模式
   - 重置錯誤計數器

### 調試工具

```javascript
// 檢查存儲類型
console.log('當前存儲類型:', window.storageAdapter.getStorageType());

// 檢查存儲使用情況
const usage = await window.storageAdapter.getStorageUsage();

// 強制使用特定存儲
window.storageAdapter.forceLocalStorage();
window.storageAdapter.forceIndexedDB();
```

## 維護建議

1. **定期監控**: 檢查錯誤統計和性能指標
2. **數據備份**: 重要數據建議額外備份
3. **版本管理**: 數據結構變更時考慮版本遷移
4. **測試**: 定期運行存儲測試確保功能正常

## 未來改進

- [ ] 數據壓縮和優化
- [ ] 增量同步機制
- [ ] 多設備數據同步
- [ ] 更細粒度的錯誤處理
- [ ] 性能監控儀表板
