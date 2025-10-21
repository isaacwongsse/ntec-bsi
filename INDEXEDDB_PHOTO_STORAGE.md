# IndexedDB 照片存儲說明 - 方式二實施

## 更新日期
2025-10-21

## 存儲策略變更

### ✅ 新策略：完全依賴 IndexedDB dataURL

系統現在使用**方式二：完全依賴 IndexedDB dataURL**，不再依賴 File System Access API 的資料夾 handle。

### 優點

1. ✅ **不需要原始資料夾**
   - 即使照片資料夾被移動、刪除或改名，照片仍然可以顯示
   - 不需要重新授權資料夾訪問權限

2. ✅ **更穩定的用戶體驗**
   - 頁面重新載入後，照片立即顯示
   - 不會因為權限問題導致照片無法載入

3. ✅ **離線支援更好**
   - 所有照片數據都在 IndexedDB 中
   - 完全離線可用

4. ✅ **跨設備一致性**
   - 如果同步 IndexedDB 數據，照片可以在不同設備上顯示

### 注意事項

1. ⚠️ **IndexedDB 空間佔用**
   - 照片的 dataURL（base64 編碼）會佔用較多空間
   - 建議定期清理不需要的照片數據

2. ⚠️ **無法訪問原始高質量檔案**
   - 只能使用壓縮和調整大小後的版本
   - 如果需要原始檔案，需要重新上傳

3. ⚠️ **瀏覽器限制**
   - IndexedDB 有存儲配額限制（通常至少 50MB）
   - 超過限制可能導致保存失敗

## 實施細節

### 照片上傳流程

1. **用戶選擇照片**
   ```
   選擇照片資料夾 → 讀取照片檔案
   ```

2. **照片處理**
   ```
   調整大小 → 壓縮 → 生成 dataURL (base64)
   ```

3. **保存到 IndexedDB**
   ```javascript
   photoMetadata: [
     {
       name: 'photo1.jpg',
       size: 12345,
       type: 'image/jpeg',
       lastModified: 1729123456789,
       webkitRelativePath: '',
       dataURL: 'data:image/jpeg;base64,/9j/4AAQ...'  // 完整的圖片數據
     },
     // ... 更多照片
   ]
   ```

### 照片恢復流程

1. **頁面重新載入**
   ```
   檢測 IndexedDB 中的數據 → 顯示 Session Restore Modal
   ```

2. **用戶點擊 "Open previous"**
   ```
   📸 使用方式二：完全依賴 IndexedDB dataURL 載入照片
   📥 Loading all data from IndexedDB (including photos with dataURL)...
   ```

3. **從 IndexedDB 恢復照片**
   ```javascript
   // 從 photoMetadata 重建照片物件
   const photosFromStorage = parsedData.photoMetadata.map(metadata => ({
     name: metadata.name,
     size: metadata.size,
     type: metadata.type,
     lastModified: metadata.lastModified,
     webkitRelativePath: metadata.webkitRelativePath,
     dataURL: metadata.dataURL  // 使用 IndexedDB 中的 dataURL
   }));
   
   allPhotos = photosFromStorage;
   ```

4. **渲染照片**
   ```
   renderPhotos(allPhotos) → 照片顯示在預覽區域
   ```

## 代碼變更

### 修改位置：`js/main.js`

#### 第 8372-8450 行：Open Previous 按鈕處理

**變更前**：
```javascript
// 優先使用 FSA handles 載入照片
const dirHandle = await window.storageAdapter.getItem('pne_photos_dir_handle');
if (dirHandle && dirHandle.kind === 'directory') {
  // 從資料夾重新讀取照片檔案...
  // 然後從 IndexedDB 恢復 dataURL...
}
```

**變更後**：
```javascript
// 🔧 方式二：完全依賴 IndexedDB dataURL
// 不使用 FSA handles 載入照片，直接從 IndexedDB 恢復
let loadedWithHandles = false;

// 直接調用 loadDataFromStorage()
// 它會從 IndexedDB 的 photoMetadata 載入照片（包含 dataURL）
await loadDataFromStorage();
```

## 測試步驟

### 完整測試流程

1. **清除舊數據（如果需要）**
   ```javascript
   // 在控制台執行
   await window.storageAdapter.clear();
   localStorage.clear();
   location.reload();
   ```

2. **上傳照片**
   - 選擇照片資料夾
   - 等待照片處理完成
   - 確認照片顯示在預覽區域
   - 查看控制台是否有 "✅ Photos saved to IndexedDB"

3. **刷新頁面（關鍵測試）**
   - 按 F5 或 Cmd+R 刷新頁面
   - 應該看到 Session Restore Modal
   - 點擊 "Open previous"

4. **檢查控制台日誌**
   應該看到：
   ```
   📸 使用方式二：完全依賴 IndexedDB dataURL 載入照片
   📥 Loading all data from IndexedDB (including photos with dataURL)...
   ✅ photoMetadata found, loading photos...
   📸 Loading photos directly from IndexedDB (no FSA handles)
   🔍 Photos loaded from IndexedDB: {total: X, withDataURL: X}
   ✅ Photos rendered successfully
   ```

5. **驗證照片顯示**
   - 所有照片都應該正確顯示
   - 照片數量應該與上傳時一致
   - 照片的分配狀態應該正確恢復

### 額外測試：移動或刪除原始資料夾

1. **上傳照片並刷新頁面確認恢復成功**
2. **移動或刪除原始照片資料夾**
3. **再次刷新頁面**
4. **驗證照片仍然可以正確顯示** ✅

這個測試證明系統不再依賴原始資料夾！

## 預期日誌輸出

### 上傳照片時
```
🔍 [processPhoto] Processing photo1.jpg: {hasDataURL: false, ...}
✅ Photo processed successfully: photo1.jpg
💾 Saving photos after folder selection...
📊 Photos with dataURL: 5 / 5
✅ Photos saved to IndexedDB
```

### 頁面重新載入時
```
🔍 Session restore check - saved data: {
  exists: true,
  hasPhotoMetadata: true,
  photoMetadataCount: 5,
  ...
}
✅ Previous session data detected, showing restore modal
```

### 點擊 "Open previous" 後
```
📸 使用方式二：完全依賴 IndexedDB dataURL 載入照片
📥 Loading all data from IndexedDB (including photos with dataURL)...
✅ photoMetadata found, loading photos...
📸 Loading photos directly from IndexedDB (no FSA handles)
🔍 Photos loaded from IndexedDB: {total: 5, withDataURL: 5}
🎨 Preparing to render photos from storage...
✅ Photos rendered successfully
```

### 照片使用緩存時
```
🔍 [processPhoto] Processing photo1.jpg: {hasDataURL: true, ...}
✅ Photo photo1.jpg already has dataURL, using cached version
```

## 存儲空間估算

### 單張照片的 dataURL 大小

- **原始照片**：3-5 MB
- **處理後（最大寬度 1920px）**：~200-500 KB
- **base64 編碼後**：~270-670 KB（增加約 33%）

### 總存儲空間

- **10 張照片**：~3-7 MB
- **50 張照片**：~15-35 MB
- **100 張照片**：~30-70 MB

## 建議

1. **定期清理**
   - 完成檢查並導出後，使用 "Start fresh" 清除數據
   - 這可以釋放 IndexedDB 空間

2. **控制照片數量**
   - 建議單次檢查不超過 100 張照片
   - 如果需要更多照片，考慮分批處理

3. **監控存儲使用**
   - 瀏覽器開發工具 > Application > Storage
   - 查看 IndexedDB 的實際使用情況

4. **備份重要數據**
   - 使用導出功能定期備份 PNE 檔案
   - PNE 檔案包含所有照片的 dataURL

## 故障排除

### 問題 1：照片沒有顯示

**檢查步驟**：
1. 打開開發工具 > Application > IndexedDB > PlanPNE_Database > mainData
2. 查看 photoNumberExtractorData 記錄
3. 檢查 photoMetadata 欄位是否存在
4. 檢查 photoMetadata 中是否包含 dataURL

**解決方案**：
- 如果 photoMetadata 為空，重新上傳照片
- 確保上傳後看到 "✅ Photos saved to IndexedDB"

### 問題 2：照片數據不完整

**症狀**：photoMetadata 存在但沒有 dataURL

**解決方案**：
1. 清除所有數據：`await window.storageAdapter.clear()`
2. 重新上傳照片
3. 等待足夠的時間讓照片處理完成
4. 確認保存成功後再刷新頁面

### 問題 3：IndexedDB 配額超出

**症狀**：保存失敗，控制台顯示 "QuotaExceededError"

**解決方案**：
1. 導出當前工作（PNE 檔案）
2. 使用 "Start fresh" 清除數據
3. 減少單次上傳的照片數量

## 相關檔案

- **主程式碼**：`js/main.js`
- **存儲適配器**：`js/storage-adapter.js`
- **IndexedDB 管理器**：`js/indexeddb-manager.js`
- **照片處理**：`js/image-optimizer.js`

---

**更新人員**：AI Assistant  
**版本**：v7.2.0 - 完全 IndexedDB 依賴模式

