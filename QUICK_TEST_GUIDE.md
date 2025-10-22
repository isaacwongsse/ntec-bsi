# 📸 快速測試指南 - 照片儲存功能

## ✅ 修復完成

我已經修復了照片在頁面重載後消失的問題。

### 修復內容

1. **在照片選擇後立即保存 dataURL**
   - 當您選擇照片資料夾時，照片會被自動保存到 IndexedDB
   - dataURL 會在渲染後立即生成並保存

2. **添加詳細的調試日誌**
   - 您可以在 Console 中看到保存和載入的詳細信息

## 🧪 測試步驟

### 步驟 1: 清除舊數據（重要！）

在瀏覽器 Console 中執行：

```javascript
// 清除所有舊數據
localStorage.clear();
indexedDB.deleteDatabase('PlanPNE_Database');
location.reload();
```

### 步驟 2: 上傳照片

1. 在 `http://localhost:8000` 打開應用
2. 點擊 "Select Photo Folder" 或 "Add photos"
3. 選擇一些照片（建議 2-5 張測試）
4. 等待照片顯示在預覽區域

### 步驟 3: 查看保存日誌

在 Console 中查找以下日誌：

```
💾 Saving photos after folder selection...
📊 Photos with dataURL: X / X    <-- 這兩個數字應該相等
💾 Saving data to IndexedDB: {
  totalPhotos: X,
  photosWithDataURL: X,    <-- 應該等於 totalPhotos
  photosWithoutDataURL: 0  <-- 應該是 0
}
✅ Photos saved to IndexedDB
```

**✅ 如果看到上述日誌，說明照片已正確保存！**

### 步驟 4: 刷新頁面測試恢復

1. 按 F5 或 Cmd+R 刷新頁面
2. 應該會出現 "Restore previous session?" 彈窗
3. 點擊 "Open previous"
4. **照片應該自動顯示！**

### 步驟 5: 查看恢復日誌

在 Console 中查找：

```
🔍 Checking photoMetadata: {
  exists: true,
  isArray: true,
  length: X
}
🔍 Photos loaded from IndexedDB: {
  total: X,
  withDataURL: X,    <-- 應該等於 total
  withoutDataURL: 0  <-- 應該是 0
}
✅ Photos rendered successfully
```

**✅ 如果看到這些日誌且照片顯示，說明恢復成功！**

## 📊 預期結果

### ✅ 成功的標誌

1. 上傳後看到：`📊 Photos with dataURL: 5 / 5`
2. 保存時看到：`photosWithDataURL: 5` 等於 `totalPhotos: 5`
3. 重載後看到：`withDataURL: 5` 等於 `total: 5`
4. 照片正確顯示在預覽區域

### ❌ 如果失敗

如果仍然出現問題，請提供以下日誌：

1. **上傳時的日誌**：
   - 搜尋：`💾 Saving photos after folder selection`
   - 搜尋：`📊 Photos with dataURL`

2. **重載時的日誌**：
   - 搜尋：`🔍 Checking photoMetadata`
   - 搜尋：`🔍 Photos loaded from IndexedDB`

3. **任何錯誤訊息**

## 💡 重要提示

1. **必須使用 localhost，不要使用 file://**
   - ✅ `http://localhost:8000`
   - ❌ `file:///Users/...`

2. **第一次測試前必須清除舊數據**
   - 舊數據可能沒有 dataURL
   - 清除後重新上傳照片

3. **等待照片完全載入後再刷新**
   - 看到 "Photos loaded from folder!" 通知
   - 在 Console 中看到 "✅ Photos saved to IndexedDB"

## 🎯 Add Photos 功能測試

"Add photos" 功能已經正確實現（不需要修改），測試方法：

1. 先選擇照片資料夾
2. 然後點擊 "Add photos" 添加更多照片
3. 新添加的照片也會自動保存 dataURL
4. 刷新頁面後，所有照片（包括 Add photos 添加的）都應該顯示

## 📞 需要幫助？

如果照片仍然消失，請：

1. 提供完整的 Console 日誌
2. 告訴我照片數量和文件大小
3. 告訴我是使用 "Select Photo Folder" 還是 "Add photos"

---

**更新日期**: 2025-10-17  
**版本**: 7.1.0  
**狀態**: ✅ 修復完成，等待測試

