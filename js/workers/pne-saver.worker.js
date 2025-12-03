/**
 * PNE File Saver Web Worker
 * 用於在後台處理大量數據的 JSON 序列化，避免阻塞主線程
 */

// 監聽來自主線程的消息
self.addEventListener('message', function(e) {
    const { data, taskId } = e.data;
    
    try {
        // 發送開始處理的消息
        self.postMessage({
            type: 'progress',
            message: '正在序列化數據...',
            progress: 10,
            taskId: taskId
        });
        
        // 使用 setTimeout 來允許瀏覽器處理其他任務，避免完全阻塞
        // 對於大量數據，我們分批處理
        const startTime = Date.now();
        
        // 嘗試序列化數據
        let jsonString;
        try {
            // 直接使用 JSON.stringify（在 Worker 中不會阻塞主線程）
            self.postMessage({
                type: 'progress',
                message: '正在序列化數據，請稍候...',
                progress: 30,
                taskId: taskId
            });
            
            jsonString = JSON.stringify(data, null, 2);
            
            const endTime = Date.now();
            const duration = endTime - startTime;
            
            // 發送成功消息
            self.postMessage({
                type: 'success',
                result: jsonString,
                duration: duration,
                size: jsonString.length,
                taskId: taskId
            });
            
        } catch (stringifyError) {
            // 處理序列化錯誤
            if (stringifyError.name === 'RangeError' && stringifyError.message.includes('string length')) {
                // 數據太大，無法序列化
                self.postMessage({
                    type: 'error',
                    error: {
                        message: '數據過大無法序列化。照片數量過多時，系統已自動移除照片數據以減少文件大小。如果仍然失敗，請減少照片數量。',
                        name: 'RangeError',
                        stack: stringifyError.stack
                    },
                    taskId: taskId
                });
            } else {
                // 其他序列化錯誤
                self.postMessage({
                    type: 'error',
                    error: {
                        message: stringifyError.message || '序列化失敗',
                        name: stringifyError.name || 'Error',
                        stack: stringifyError.stack
                    },
                    taskId: taskId
                });
            }
        }
        
    } catch (error) {
        // 發送錯誤消息
        self.postMessage({
            type: 'error',
            error: {
                message: error.message,
                stack: error.stack,
                name: error.name
            },
            taskId: taskId
        });
    }
});

/**
 * 估算數據大小（粗略估算）
 */
function estimateDataSize(data) {
    try {
        // 快速估算：計算字符串長度
        const sample = JSON.stringify(data).substring(0, 1000);
        const sampleSize = new Blob([sample]).size;
        const fullSize = (sampleSize / 1000) * estimateObjectSize(data);
        return fullSize;
    } catch (e) {
        // 如果估算失敗，返回一個較大的值以觸發分批處理
        return 100 * 1024 * 1024;
    }
}

/**
 * 估算對象大小
 */
function estimateObjectSize(obj) {
    if (obj === null || obj === undefined) return 1;
    if (typeof obj === 'string') return obj.length;
    if (typeof obj === 'number') return 8;
    if (typeof obj === 'boolean') return 1;
    
    if (Array.isArray(obj)) {
        return obj.reduce((sum, item) => sum + estimateObjectSize(item), 0);
    }
    
    if (typeof obj === 'object') {
        return Object.values(obj).reduce((sum, value) => sum + estimateObjectSize(value), 0);
    }
    
    return 1;
}

/**
 * 帶進度的序列化函數
 * 對於大型對象，使用標準 JSON.stringify（在 Worker 中不會阻塞主線程）
 */
function stringifyWithProgress(data, taskId) {
    // 在 Web Worker 中，JSON.stringify 不會阻塞主線程
    // 但我們仍然可以發送進度更新來讓用戶知道處理正在進行
    try {
        // 發送開始序列化的消息
        self.postMessage({
            type: 'progress',
            message: '正在序列化數據，請稍候...',
            progress: 30,
            taskId: taskId
        });
        
        // 直接使用 JSON.stringify
        // 在 Worker 線程中執行，不會阻塞主線程
        const result = JSON.stringify(data, null, 2);
        
        // 發送接近完成的消息
        self.postMessage({
            type: 'progress',
            message: '序列化完成，正在準備文件...',
            progress: 90,
            taskId: taskId
        });
        
        return result;
    } catch (error) {
        // 如果標準方法失敗，拋出錯誤
        throw new Error('JSON 序列化失敗: ' + error.message);
    }
}

