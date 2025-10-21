# Add Photos 功能照片丟失問題修復

## 更新日期
2025-10-21

## 問題描述

**症狀**：使用 "Add photos" 功能添加的照片在頁面重新載入後消失。

**影響範圍**：
- 首次選擇照片資料夾的照片：✅ 正常顯示
- 使用 "Add photos" 添加的照片：❌ 重新載入後消失

## 根本原因

### 問題分析

1. **照片確實有保存到 IndexedDB**
   - "Add photos" 功能在第 8824 行有調用 `await saveDataToStorage()`
   - 所有照片（包括新增的）都被保存到 `photoMetadata` 中 ✅

2. **但 `window.loadedFromHandles` 全局變量導致問題**
   ```javascript
   // 在 loadDataFromStorage() 中（第 4958 行）
   const alreadyLoadedPhotos = Array.isArray(allPhotos) && 
                                allPhotos.length > 0 && 
                                window.loadedFromHandles === true;
   ```

3. **問題流程**：
   - 用戶選擇照片資料夾（使用 FSA API） → 系統曾經設置 `window.loadedFromHandles = true`
   - 用戶使用 "Add photos" 添加更多照片 → 保存到 IndexedDB ✅
   - 頁面重新載入 → 點擊 "Open previous"
   - 切換到方式二後，不再使用 FSA handle 讀取照片資料夾
   - **但 `window.loadedFromHandles` 仍然是 `true`（或 undefined）**
   - `loadDataFromStorage()` 認為照片已經從 FSA handle 載入
   - 執行合併邏輯，而不是從 IndexedDB 載入所有照片
   - 結果：只載入了資料夾中的原始照片，"Add photos" 的照片被跳過 ❌

## 解決方案

### 修改位置：`js/main.js`

#### 修改 1：Open Previous 按鈕處理（第 8381 行）

**變更前**：
```javascript
restoreBtn.onclick = async () => {
    modal.style.display = 'none';
    
    console.log('📸 使用方式二：完全依賴 IndexedDB dataURL 載入照片');
    
    // 🔧 方式二：完全依賴 IndexedDB dataURL
    let loadedWithHandles = false;  // 只是局部變量，不影響全局
    
    await loadDataFromStorage();  // 仍然使用舊的 window.loadedFromHandles 值
};
```

**變更後**：
```javascript
restoreBtn.onclick = async () => {
    modal.style.display = 'none';
    
    console.log('📸 使用方式二：完全依賴 IndexedDB dataURL 載入照片');
    
    // 🔧 方式二：完全依賴 IndexedDB dataURL
    // 重要：設置全局變量為 false，確保 loadDataFromStorage 從 IndexedDB 載入所有照片
    window.loadedFromHandles = false;  // ✅ 修復：明確設置全局變量
    let loadedWithHandles = false;
    
    await loadDataFromStorage();  // 現在會從 IndexedDB 載入所有照片
};
```

#### 修改 2：備用自動載入機制（第 8582 行）

**變更後**：
```javascript
} else {
    // 有數據但 modal 不存在，記錄錯誤並自動載入數據
    console.warn('⚠️ Session restore modal not found, auto-loading previous data...');
    // 確保從 IndexedDB 載入所有照片（方式二）
    window.loadedFromHandles = false;  // ✅ 也要設置
    await loadDataFromStorage();
}
```

## 工作流程

### 修復前的流程（有問題）

```
1. 選擇照片資料夾（FSA API）
   → window.loadedFromHandles = true ✅
   → 保存照片到 IndexedDB ✅

2. 使用 "Add photos" 添加照片
   → 新照片保存到 IndexedDB ✅
   → photoMetadata: [原始16張, 新增3張] = 19張 ✅

3. 頁面重新載入 → 點擊 "Open previous"
   → window.loadedFromHandles 仍然是 true ❌
   → loadDataFromStorage() 認為照片已從 FSA handle 載入
   → 執行合併邏輯，嘗試從 allPhotos（空的）中找照片
   → 結果：只載入16張原始照片，3張新增照片消失 ❌
```

### 修復後的流程（正確）

```
1. 選擇照片資料夾（FSA API）
   → 保存照片到 IndexedDB ✅
   → photoMetadata: [16張照片] ✅

2. 使用 "Add photos" 添加照片
   → 新照片保存到 IndexedDB ✅
   → photoMetadata: [原始16張, 新增3張] = 19張 ✅

3. 頁面重新載入 → 點擊 "Open previous"
   → window.loadedFromHandles = false ✅ [修復點]
   → loadDataFromStorage() 從 IndexedDB 載入所有照片
   → 從 photoMetadata 恢復所有19張照片 ✅
   → 結果：所有19張照片都正確顯示 ✅
```

## 測試步驟

### 完整測試流程

1. **清除舊數據（建議）**
   ```javascript
   // 在控制台執行
   await window.storageAdapter.clear();
   localStorage.clear();
   location.reload();
   ```

2. **選擇照片資料夾**
   - 點擊 "Select Photo Folder"
   - 選擇包含照片的資料夾
   - 等待照片載入和處理
   - 確認照片顯示（假設有 16 張）

3. **使用 "Add photos" 添加更多照片**
   - 點擊 "Add photos" 按鈕
   - 選擇額外的照片（假設 3 張）
   - 等待照片處理
   - 確認新照片顯示（現在總共 19 張）
   - **查看控制台確認保存**：
     ```
     Add photos: Saving data to storage...
     Add photos: Data saved successfully
     ```

4. **刷新頁面（關鍵測試）**
   - 按 F5 或 Cmd+R 刷新頁面
   - 應該看到 Session Restore Modal
   - 點擊 "Open previous"

5. **檢查控制台日誌**
   應該看到：
   ```
   📸 使用方式二：完全依賴 IndexedDB dataURL 載入照片
   📥 Loading all data from IndexedDB (including photos with dataURL)...
   🔍 alreadyLoadedPhotos check: {
     isArray: true,
     length: 0,
     loadedFromHandles: false,  // ✅ 應該是 false
     alreadyLoadedPhotos: false
   }
   ✅ photoMetadata found, loading photos...
   📸 Loading photos directly from IndexedDB (no FSA handles)
   🔍 Photos loaded from IndexedDB: {total: 19, withDataURL: 19}  // ✅ 所有照片
   ✅ Photos rendered successfully
   ```

6. **驗證照片數量**
   - 所有 19 張照片都應該正確顯示 ✅
   - 包括原始資料夾的 16 張
   - 包括通過 "Add photos" 添加的 3 張

## 預期結果

### ✅ 修復前 vs 修復後

| 場景 | 修復前 | 修復後 |
|------|--------|--------|
| 選擇照片資料夾（16張） | ✅ 顯示 16張 | ✅ 顯示 16張 |
| Add photos 添加（3張） | ✅ 顯示 19張 | ✅ 顯示 19張 |
| 刷新頁面後 | ❌ 只顯示 16張 | ✅ 顯示 19張 |
| 再次 Add photos（2張） | ✅ 顯示 18張 | ✅ 顯示 21張 |
| 再次刷新頁面 | ❌ 只顯示 16張 | ✅ 顯示 21張 |

## 技術細節

### `window.loadedFromHandles` 的作用

這個全局變量用於標記照片是否已經從 File System Access API handle 載入：

- **`true`**：照片已從 FSA handle 載入，`loadDataFromStorage()` 只需合併 IndexedDB 中的額外照片
- **`false` 或 `undefined`**：照片未從 FSA handle 載入，`loadDataFromStorage()` 應該從 IndexedDB 載入所有照片

### 為什麼需要這個變量？

在**方式一（混合模式）**中：
1. 優先從 FSA handle 讀取原始檔案（高質量）
2. 從 IndexedDB 讀取 dataURL（快速緩存）
3. 如果有通過 "Add photos" 添加的照片，需要從 IndexedDB 合併

在**方式二（完全 IndexedDB）**中：
1. 不再使用 FSA handle
2. 所有照片都從 IndexedDB 載入
3. **必須設置 `window.loadedFromHandles = false`** ✅

## 相關檔案

- **主程式碼**：`js/main.js`
  - Open Previous 處理：第 8372-8450 行
  - loadDataFromStorage：第 4771-5195 行
  - Add photos 功能：第 8730-8856 行
  
- **相關文檔**：
  - `INDEXEDDB_PHOTO_STORAGE.md` - 方式二實施說明
  - `CHANGES_SUMMARY.md` - 照片存儲功能修復總結

## 其他注意事項

### 1. IndexedDB 數據驗證

可以通過開發工具檢查 IndexedDB 數據：
1. 打開 DevTools > Application > IndexedDB
2. 展開 `PlanPNE_Database` > `mainData`
3. 查看 `photoNumberExtractorData` 記錄
4. 檢查 `photoMetadata` 陣列長度
5. 驗證每個照片物件都有 `dataURL` 屬性

### 2. 清除舊數據的重要性

如果在修復前已經測試過，建議清除所有數據後重新測試：
```javascript
await window.storageAdapter.clear();
localStorage.clear();
location.reload();
```

### 3. 性能考量

- "Add photos" 添加大量照片會增加 IndexedDB 存儲空間
- 建議定期使用 "Start fresh" 清除不需要的數據
- 單次建議不超過 100 張照片

---

**修復人員**：AI Assistant  
**版本**：v7.2.1 - Add Photos 功能修復

