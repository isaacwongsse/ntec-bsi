# 照片重新載入問題診斷指南

## 問題描述
頁面重新載入後，之前上傳的照片在照片預覽區域中消失。

## 可能的原因

1. **Session Restore Modal 沒有顯示**
   - 數據雖然存在於 IndexedDB，但檢查邏輯判斷為沒有實際數據
   - Modal 元素不存在或被隱藏

2. **照片數據沒有被正確保存**
   - dataURL 沒有被生成和保存到 IndexedDB
   - 照片元資料不完整

3. **照片數據載入但沒有渲染**
   - `renderPhotos()` 函數沒有被調用
   - 照片數據結構不正確

## 診斷步驟

### 第一步：檢查照片是否已保存到 IndexedDB

1. 上傳照片後，打開瀏覽器控制台（F12）
2. 查看是否有以下日誌：
   ```
   💾 Saving photos after folder selection...
   📊 Photos with dataURL: X / Y
   ✅ Photos saved to IndexedDB
   ```
3. 如果沒有看到這些日誌，說明照片沒有被正確保存

### 第二步：檢查頁面重新載入時的數據檢測

1. 刷新頁面（F5 或 Cmd+R）
2. 立即打開控制台查看以下日誌：
   ```
   🔍 Session restore check - saved data: {
     exists: true/false,
     hasPhotoMetadata: true/false,
     photoMetadataCount: X,
     ...
   }
   ```
3. 如果 `hasPhotoMetadata: false` 或 `photoMetadataCount: 0`，說明照片數據沒有被保存

### 第三步：檢查 Session Restore Modal 是否顯示

1. 如果數據存在但 modal 沒有顯示，查看日誌：
   ```
   🔍 Session restore check - hasActualData: true/false, modal exists: true/false
   ```
2. 如果 `hasActualData: false`，說明檢查邏輯認為沒有實際數據
3. 如果 `modal exists: false`，說明 modal 元素不存在

### 第四步：檢查點擊 "Open previous" 後的照片載入

1. 點擊 "Open previous" 按鈕
2. 查看控制台日誌：
   ```
   ✅ photoMetadata found, loading photos...
   📸 Loading photos directly from IndexedDB (no FSA handles)
   🔍 Photos loaded from IndexedDB: {total: X, withDataURL: Y}
   🎨 Preparing to render photos from storage...
   ```
3. 如果看到這些日誌但照片沒有顯示，問題在於渲染環節

## 常見問題和解決方案

### 問題 1：照片上傳後沒有自動保存

**症狀**：上傳照片後沒有看到 "✅ Photos saved to IndexedDB" 日誌

**原因**：`saveDataToStorage()` 沒有被調用或失敗

**解決方案**：
- 確保在照片渲染完成後調用 `saveDataToStorage()`
- 檢查是否有錯誤日誌

### 問題 2：照片數據保存了但沒有 dataURL

**症狀**：`photoMetadataCount > 0` 但 `withDataURL: 0`

**原因**：照片的 dataURL 沒有被生成或附加到 File 對象上

**解決方案**：
- 確保 `resizeImage()` 函數正確生成 dataURL
- 確保在保存前等待足夠的時間讓 dataURL 生成

### 問題 3：Session Restore Modal 沒有顯示

**症狀**：數據存在但 `hasActualData: false`

**原因**：檢查邏輯太嚴格，或數據結構不符合預期

**解決方案**：
- 檢查 `saved` 對象的結構是否符合預期
- 確保至少有一個檢查條件為 true

### 問題 4：照片數據載入但沒有渲染

**症狀**：看到 "Photos loaded from IndexedDB" 但照片不顯示

**原因**：`renderPhotos()` 函數沒有被調用或失敗

**解決方案**：
- 檢查 `renderPhotos()` 函數是否有錯誤
- 確保照片容器元素存在
- 確保 lazyObserver 正確初始化

## 測試清單

### 完整測試流程

1. **清除所有數據**
   ```javascript
   // 在控制台執行
   await window.storageAdapter.clear();
   localStorage.clear();
   location.reload();
   ```

2. **上傳照片**
   - 選擇照片資料夾或使用 "Add photos" 上傳照片
   - 確認看到照片在預覽區域顯示

3. **檢查保存日誌**
   - 確認控制台有 "✅ Photos saved to IndexedDB" 日誌
   - 記錄照片數量

4. **刷新頁面**
   - 按 F5 或 Cmd+R 刷新頁面
   - 不要使用硬刷新（Ctrl+F5）

5. **檢查 Session Restore Modal**
   - 確認 modal 顯示
   - 確認 modal 內容顯示 "Previously loaded photos and assignments"

6. **點擊 "Open previous"**
   - 點擊按鈕
   - 等待照片載入

7. **驗證照片顯示**
   - 確認所有照片都顯示在預覽區域
   - 確認照片數量與上傳時一致

## 調試日誌說明

### 關鍵日誌標記

- 🔍 = 檢查/診斷信息
- ✅ = 成功操作
- ⚠️ = 警告（可能有問題）
- ❌ = 錯誤（確定有問題）
- 📸 = 照片相關
- 💾 = 保存操作
- 🎨 = 渲染操作

### 完整的日誌流程

#### 上傳照片時應該看到：
```
📊 Photos with dataURL: 5 / 5
💾 Saving data to IndexedDB: {photosWithDataURL: 5, totalPhotos: 5}
✅ Photos saved to IndexedDB
```

#### 頁面重新載入時應該看到：
```
🔍 Session restore check - saved data: {
  exists: true,
  hasPhotoMetadata: true,
  photoMetadataCount: 5,
  ...
}
🔍 Session restore check - hasActualData: true, modal exists: true
✅ Previous session data detected, showing restore modal
```

#### 點擊 "Open previous" 後應該看到：
```
🔍 Checking photoMetadata: {exists: true, isArray: true, length: 5, ...}
✅ photoMetadata found, loading photos...
📸 Loading photos directly from IndexedDB (no FSA handles)
🔍 Photos loaded from IndexedDB: {total: 5, withDataURL: 5, ...}
🎨 Preparing to render photos from storage...
✅ Photos rendered successfully
```

## 如果問題仍然存在

如果按照以上步驟診斷後問題仍然存在，請：

1. 導出完整的控制台日誌（從頁面載入到問題出現）
2. 檢查瀏覽器版本和環境（Chrome/Edge/Safari，版本號）
3. 使用瀏覽器的 Application/Storage 標籤檢查 IndexedDB 內容：
   - 打開 DevTools > Application > IndexedDB > PlanPNE_Database > mainData
   - 查看 photoNumberExtractorData 記錄
   - 檢查 photoMetadata 欄位是否存在且包含 dataURL

4. 如果 IndexedDB 中的數據正確但照片沒有顯示，問題可能在於：
   - 渲染函數 `renderPhotos()` 有問題
   - DOM 元素不存在或被隱藏
   - CSS 樣式問題

## 快速修復建議

如果您經常遇到這個問題，可以嘗試：

1. **使用較小的照片**
   - 照片太大可能導致 dataURL 生成緩慢或失敗
   - 建議照片大小在 2MB 以下

2. **等待保存完成**
   - 上傳照片後等待幾秒鐘確保保存完成
   - 看到 "✅ Photos saved to IndexedDB" 後再刷新頁面

3. **定期清理數據**
   - 如果數據量太大，IndexedDB 可能變慢
   - 使用 "Start fresh" 清除舊數據

4. **使用 localhost 而不是 file:// 協議**
   - file:// 協議可能有存儲限制
   - 使用 http://localhost 或 http://127.0.0.1

---

**更新日期**: 2025-10-21
**版本**: 1.0

