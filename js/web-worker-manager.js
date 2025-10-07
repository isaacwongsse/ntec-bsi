// Web Worker 管理器
class WebWorkerManager {
    constructor() {
        this.workers = new Map();
        this.taskQueue = new Map();
        this.taskId = 0;
        this.isSupported = typeof Worker !== 'undefined';
        
        this.init();
    }
    
    init() {
        if (!this.isSupported) {
            console.warn('Web Workers not supported');
            return;
        }
        
        // 檢查是否在 file:// 協議下運行
        if (location.protocol === 'file:') {
            console.warn('Web Workers not supported in file:// protocol');
            return;
        }
        
        // 預載入常用的Workers
        this.preloadWorkers();
    }
    
    preloadWorkers() {
        // 圖片處理Worker
        this.createWorker('imageProcessor', 'js/workers/image-processor.worker.js', {
            maxInstances: 2,
            preload: true
        });
    }
    
    createWorker(name, scriptPath, options = {}) {
        const {
            maxInstances = 1,
            preload = false,
            timeout = 30000
        } = options;
        
        if (!this.isSupported) {
            return null;
        }
        
        const workerInfo = {
            scriptPath,
            maxInstances,
            timeout,
            instances: [],
            queue: [],
            activeTask: new Map()
        };
        
        this.workers.set(name, workerInfo);
        
        // 預載入實例
        if (preload) {
            for (let i = 0; i < Math.min(maxInstances, 1); i++) {
                this.createWorkerInstance(name);
            }
        }
        
        return workerInfo;
    }
    
    createWorkerInstance(workerName) {
        const workerInfo = this.workers.get(workerName);
        if (!workerInfo) {
            throw new Error(`Worker ${workerName} not found`);
        }
        
        try {
            const worker = new Worker(workerInfo.scriptPath);
            const instance = {
                worker,
                id: `${workerName}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
                busy: false,
                created: Date.now()
            };
            
            // 設置消息處理
            worker.onmessage = (e) => {
                this.handleWorkerMessage(workerName, instance.id, e.data);
            };
            
            worker.onerror = (error) => {
                this.handleWorkerError(workerName, instance.id, error);
            };
            
            workerInfo.instances.push(instance);
            
            window.logger.log(`Worker instance created: ${instance.id}`);
            return instance;
        } catch (error) {
            console.error(`Failed to create worker ${workerName}:`, error);
            return null;
        }
    }
    
    handleWorkerMessage(workerName, instanceId, data) {
        const { id, type, data: result } = data;
        
        if (type === 'ready') {
            window.logger.log(`Worker ${workerName} (${instanceId}) ready:`, result);
            return;
        }
        
        if (type === 'progress') {
            // 處理進度更新
            const task = this.taskQueue.get(id);
            if (task && task.onProgress) {
                task.onProgress(result);
            }
            return;
        }
        
        // 處理任務結果
        const task = this.taskQueue.get(id);
        if (!task) {
            console.warn(`Task ${id} not found`);
            return;
        }
        
        // 清理任務
        this.taskQueue.delete(id);
        clearTimeout(task.timeout);
        
        // 釋放Worker實例
        this.releaseWorkerInstance(workerName, instanceId);
        
        // 處理結果
        if (type === 'result') {
            task.resolve(result);
        } else if (type === 'error') {
            task.reject(new Error(result.error || 'Worker task failed'));
        }
        
        // 處理佇列中的下一個任務
        this.processQueue(workerName);
    }
    
    handleWorkerError(workerName, instanceId, error) {
        console.error(`Worker ${workerName} (${instanceId}) error:`, error);
        
        // 找到使用此實例的任務並拒絕
        const workerInfo = this.workers.get(workerName);
        if (workerInfo) {
            const taskId = workerInfo.activeTask.get(instanceId);
            if (taskId) {
                const task = this.taskQueue.get(taskId);
                if (task) {
                    task.reject(new Error(`Worker error: ${error.message}`));
                    this.taskQueue.delete(taskId);
                    clearTimeout(task.timeout);
                }
                workerInfo.activeTask.delete(instanceId);
            }
        }
        
        // 重新創建實例
        this.recreateWorkerInstance(workerName, instanceId);
    }
    
    recreateWorkerInstance(workerName, instanceId) {
        const workerInfo = this.workers.get(workerName);
        if (!workerInfo) return;
        
        // 移除舊實例
        const instanceIndex = workerInfo.instances.findIndex(i => i.id === instanceId);
        if (instanceIndex !== -1) {
            const instance = workerInfo.instances[instanceIndex];
            instance.worker.terminate();
            workerInfo.instances.splice(instanceIndex, 1);
        }
        
        // 創建新實例
        this.createWorkerInstance(workerName);
    }
    
    getAvailableWorkerInstance(workerName) {
        const workerInfo = this.workers.get(workerName);
        if (!workerInfo) return null;
        
        // 尋找空閒實例
        let availableInstance = workerInfo.instances.find(i => !i.busy);
        
        // 如果沒有空閒實例且未達到最大實例數，創建新實例
        if (!availableInstance && workerInfo.instances.length < workerInfo.maxInstances) {
            availableInstance = this.createWorkerInstance(workerName);
        }
        
        return availableInstance;
    }
    
    releaseWorkerInstance(workerName, instanceId) {
        const workerInfo = this.workers.get(workerName);
        if (!workerInfo) return;
        
        const instance = workerInfo.instances.find(i => i.id === instanceId);
        if (instance) {
            instance.busy = false;
            workerInfo.activeTask.delete(instanceId);
        }
    }
    
    processQueue(workerName) {
        const workerInfo = this.workers.get(workerName);
        if (!workerInfo || workerInfo.queue.length === 0) return;
        
        const availableInstance = this.getAvailableWorkerInstance(workerName);
        if (!availableInstance) return;
        
        const task = workerInfo.queue.shift();
        this.executeTask(workerName, availableInstance, task);
    }
    
    executeTask(workerName, instance, task) {
        const workerInfo = this.workers.get(workerName);
        
        // 標記實例為忙碌
        instance.busy = true;
        workerInfo.activeTask.set(instance.id, task.id);
        
        // 設置超時
        task.timeout = setTimeout(() => {
            this.taskQueue.delete(task.id);
            task.reject(new Error('Task timeout'));
            this.releaseWorkerInstance(workerName, instance.id);
        }, workerInfo.timeout);
        
        // 發送任務到Worker
        instance.worker.postMessage({
            id: task.id,
            type: task.type,
            data: task.data,
            options: task.options
        });
    }
    
    // 公共API：執行任務
    async executeWorkerTask(workerName, type, data, options = {}) {
        if (!this.isSupported) {
            throw new Error('Web Workers not supported');
        }
        
        const workerInfo = this.workers.get(workerName);
        if (!workerInfo) {
            throw new Error(`Worker ${workerName} not found`);
        }
        
        const taskId = ++this.taskId;
        
        return new Promise((resolve, reject) => {
            const task = {
                id: taskId,
                type,
                data,
                options,
                resolve,
                reject,
                onProgress: options.onProgress,
                created: Date.now()
            };
            
            this.taskQueue.set(taskId, task);
            
            // 嘗試立即執行
            const availableInstance = this.getAvailableWorkerInstance(workerName);
            if (availableInstance) {
                this.executeTask(workerName, availableInstance, task);
            } else {
                // 加入佇列
                workerInfo.queue.push(task);
            }
        });
    }
    
    // 便捷方法：壓縮圖片
    async compressImage(imageData, options = {}) {
        return this.executeWorkerTask('imageProcessor', 'compress', imageData, options);
    }
    
    // 便捷方法：生成縮略圖
    async generateThumbnail(imageData, size = 120) {
        return this.executeWorkerTask('imageProcessor', 'thumbnail', imageData, { size });
    }
    
    // 便捷方法：批量處理圖片
    async processBatch(images, operation, options = {}) {
        return this.executeWorkerTask('imageProcessor', 'batch', images, {
            operation,
            ...options
        });
    }
    
    // 便捷方法：分析圖片
    async analyzeImage(imageData) {
        return this.executeWorkerTask('imageProcessor', 'analyze', imageData);
    }
    
    // 獲取Worker狀態
    getWorkerStatus(workerName) {
        const workerInfo = this.workers.get(workerName);
        if (!workerInfo) return null;
        
        return {
            name: workerName,
            instances: workerInfo.instances.length,
            maxInstances: workerInfo.maxInstances,
            busy: workerInfo.instances.filter(i => i.busy).length,
            queued: workerInfo.queue.length,
            activeTasks: workerInfo.activeTask.size
        };
    }
    
    // 獲取所有Worker狀態
    getAllWorkerStatus() {
        const status = {};
        for (const [name] of this.workers) {
            status[name] = this.getWorkerStatus(name);
        }
        return status;
    }
    
    // 終止Worker
    terminateWorker(workerName) {
        const workerInfo = this.workers.get(workerName);
        if (!workerInfo) return false;
        
        // 終止所有實例
        workerInfo.instances.forEach(instance => {
            instance.worker.terminate();
        });
        
        // 拒絕所有待處理的任務
        workerInfo.queue.forEach(task => {
            task.reject(new Error('Worker terminated'));
        });
        
        // 清理
        this.workers.delete(workerName);
        
        window.logger.log(`Worker ${workerName} terminated`);
        return true;
    }
    
    // 終止所有Workers
    terminateAll() {
        for (const [name] of this.workers) {
            this.terminateWorker(name);
        }
        
        this.taskQueue.clear();
        window.logger.log('All workers terminated');
    }
    
    // 清理空閒實例
    cleanupIdleInstances(maxIdleTime = 300000) { // 5分鐘
        const now = Date.now();
        
        for (const [name, workerInfo] of this.workers) {
            const idleInstances = workerInfo.instances.filter(
                instance => !instance.busy && (now - instance.created) > maxIdleTime
            );
            
            idleInstances.forEach(instance => {
                const index = workerInfo.instances.indexOf(instance);
                if (index !== -1) {
                    instance.worker.terminate();
                    workerInfo.instances.splice(index, 1);
                    window.logger.log(`Cleaned up idle worker instance: ${instance.id}`);
                }
            });
        }
    }
}

// 全域實例
window.webWorkerManager = new WebWorkerManager();

// 定期清理空閒實例
setInterval(() => {
    window.webWorkerManager.cleanupIdleInstances();
}, 60000); // 每分鐘檢查一次

// 頁面卸載時清理
window.addEventListener('beforeunload', () => {
    window.webWorkerManager.terminateAll();
});

// 導出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WebWorkerManager;
}
