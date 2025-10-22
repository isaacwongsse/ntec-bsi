# Photo Storage Debug Guide

## 問題：照片在頁面重載後消失

### 可能的原因

1. **照片的 dataURL 沒有正確保存到 IndexedDB**
2. **在 file:// 協議下有特殊限制**
3. **照片數據在保存時被錯誤處理**

### 調試步驟

我已經在代碼中添加了詳細的調試日誌。請按照以下步驟操作：

#### 步驟 1: 清除瀏覽器緩存
1. 在瀏覽器中打開開發者工具（F12）
2. 在 Console 標籤中執行以下命令清除所有數據：
   ```javascript
   localStorage.clear();
   indexedDB.deleteDatabase('PlanPNE_Database');
   location.reload();
   ```

#### 步驟 2: 重新上傳照片
1. 重新載入頁面
2. 選擇照片資料夾或使用 "Add photos" 上傳照片
3. 在 Console 中查看以下日誌：
   ```
   💾 Saving data to IndexedDB:
   {
     version: "7.1.0",
     totalPhotos: X,
     photosWithDataURL: X,  <-- 這個應該等於 totalPhotos
     photosWithoutDataURL: 0,  <-- 這個應該是 0
     samplePhoto: {
       name: "...",
       hasDataURL: true,  <-- 應該是 true
       dataURLLength: XXXXX,  <-- 應該 > 0
       dataURLPrefix: "data:image/jpeg;base64,..."  <-- 應該以 data: 開頭
     }
   }
   ```

#### 步驟 3: 刷新頁面並檢查恢復
1. 刷新頁面（F5）
2. 點擊 "Open previous" 恢復會話
3. 在 Console 中查看以下日誌：
   ```
   🔍 loadDataFromStorage: Starting to load data from IndexedDB
   🔍 loadDataFromStorage: Retrieved savedData from IndexedDB: true
   🔍 Checking photoMetadata: {
     exists: true,  <-- 應該是 true
     isArray: true,  <-- 應該是 true
     length: X,  <-- 應該 > 0
     sample: {
       name: "...",
       hasDataURL: true,  <-- 應該是 true
       dataURLLength: XXXXX  <-- 應該 > 0
     }
   }
   🔍 Photos loaded from IndexedDB: {
     total: X,
     withDataURL: X,  <-- 應該等於 total
     withoutDataURL: 0,  <-- 應該是 0
   }
   🔍 About to render photos, allPhotos: X
   ✅ Photos rendered successfully
   ```

### 預期結果

如果一切正常，您應該看到：
- ✅ `photosWithDataURL` 等於 `totalPhotos`
- ✅ 每張照片都有 `dataURL`
- ✅ 照片在頁面重載後自動顯示

### 如果仍然有問題

請將以下日誌截圖或複製給我：

1. **上傳照片時的日誌**（步驟 2）
   - 搜尋 "💾 Saving data to IndexedDB"

2. **頁面重載時的日誌**（步驟 3）
   - 搜尋 "🔍 Checking photoMetadata"
   - 搜尋 "🔍 Photos loaded from IndexedDB"

3. **如果照片沒有 dataURL，檢查上傳時的日誌**
   - 搜尋 "⚠️ dataURL is not a string"
   - 這會告訴我們 dataURL 是否被錯誤地處理

### 特別注意（file:// 協議）

您目前在 `file://` 協議下運行。這意味著：
- ✅ IndexedDB 可以正常使用
- ✅ 照片的 dataURL 可以保存和恢復
- ❌ 無法重新讀取原始文件（因為沒有文件訪問權限）

因此，**必須確保照片的 dataURL 在首次上傳時就正確保存到 IndexedDB**。

### 建議

為了避免 `file://` 協議的限制，建議使用本地服務器：

#### 選項 1: 使用 Python (推薦)
```bash
cd /Users/isaac/Desktop/sseServer/PlanPNE
python3 -m http.server 8000
```
然後訪問：`http://localhost:8000`

#### 選項 2: 使用 Node.js
```bash
cd /Users/isaac/Desktop/sseServer/PlanPNE
npx http-server -p 8000
```
然後訪問：`http://localhost:8000`

#### 選項 3: 使用 VS Code
1. 安裝 "Live Server" 擴展
2. 右鍵點擊 `index.html`
3. 選擇 "Open with Live Server"

使用本地服務器的好處：
- ✅ 完整的瀏覽器功能支持
- ✅ Service Worker 可以正常工作
- ✅ 更好的性能和穩定性

---

**更新日期**: 2025-10-17
**版本**: 7.1.0

