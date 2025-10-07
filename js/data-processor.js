// 數據處理優化器
class DataProcessor {
    constructor() {
        this.cache = new Map();
        this.cacheSize = 0;
        this.maxCacheSize = 50 * 1024 * 1024; // 50MB
        this.processingQueue = [];
        this.isProcessing = false;
        
        this.init();
    }
    
    init() {
        // 設置定期清理
        setInterval(() => {
            this.cleanupCache();
        }, 300000); // 5分鐘清理一次
    }
    
    // 緩存管理
    setCache(key, data) {
        const serialized = JSON.stringify(data);
        const size = new Blob([serialized]).size;
        
        // 檢查緩存大小限制
        if (this.cacheSize + size > this.maxCacheSize) {
            this.evictCache(size);
        }
        
        this.cache.set(key, {
            data,
            size,
            timestamp: Date.now(),
            accessCount: 0
        });
        
        this.cacheSize += size;
    }
    
    getCache(key) {
        const cached = this.cache.get(key);
        if (cached) {
            cached.accessCount++;
            cached.lastAccess = Date.now();
            return cached.data;
        }
        return null;
    }
    
    evictCache(requiredSize) {
        // LRU驅逐策略
        const entries = Array.from(this.cache.entries())
            .sort((a, b) => (a[1].lastAccess || a[1].timestamp) - (b[1].lastAccess || b[1].timestamp));
        
        let freedSize = 0;
        while (freedSize < requiredSize && entries.length > 0) {
            const [key, value] = entries.shift();
            this.cache.delete(key);
            this.cacheSize -= value.size;
            freedSize += value.size;
        }
    }
    
    cleanupCache() {
        const now = Date.now();
        const maxAge = 30 * 60 * 1000; // 30分鐘
        
        for (const [key, value] of this.cache.entries()) {
            if (now - value.timestamp > maxAge && value.accessCount < 2) {
                this.cache.delete(key);
                this.cacheSize -= value.size;
            }
        }
        
        window.logger.log(`Cache cleanup: ${this.cache.size} entries, ${(this.cacheSize / 1024 / 1024).toFixed(2)}MB`);
    }
    
    // 批量數據處理
    async processBatch(items, processor, options = {}) {
        const {
            batchSize = 50,
            concurrency = 3,
            onProgress,
            onBatchComplete
        } = options;
        
        const results = [];
        const batches = this.createBatches(items, batchSize);
        let completed = 0;
        
        // 並行處理批次
        const processBatch = async (batch, batchIndex) => {
            const batchResults = [];
            
            for (let i = 0; i < batch.length; i++) {
                try {
                    const result = await processor(batch[i], batchIndex * batchSize + i);
                    batchResults.push(result);
                    completed++;
                    
                    if (onProgress) {
                        onProgress({
                            completed,
                            total: items.length,
                            progress: (completed / items.length * 100).toFixed(2)
                        });
                    }
                } catch (error) {
                    console.error('Batch processing error:', error);
                    batchResults.push({ error: error.message });
                    completed++;
                }
            }
            
            if (onBatchComplete) {
                onBatchComplete(batchIndex, batchResults);
            }
            
            return batchResults;
        };
        
        // 控制並發數量
        const semaphore = new Semaphore(concurrency);
        const promises = batches.map(async (batch, index) => {
            await semaphore.acquire();
            try {
                return await processBatch(batch, index);
            } finally {
                semaphore.release();
            }
        });
        
        const batchResults = await Promise.all(promises);
        return batchResults.flat();
    }
    
    createBatches(items, batchSize) {
        const batches = [];
        for (let i = 0; i < items.length; i += batchSize) {
            batches.push(items.slice(i, i + batchSize));
        }
        return batches;
    }
    
    // 數據去重
    deduplicateData(items, keyExtractor) {
        const seen = new Set();
        const duplicates = [];
        const unique = [];
        
        items.forEach((item, index) => {
            const key = keyExtractor ? keyExtractor(item) : JSON.stringify(item);
            
            if (seen.has(key)) {
                duplicates.push({ item, index, key });
            } else {
                seen.add(key);
                unique.push(item);
            }
        });
        
        return {
            unique,
            duplicates,
            originalCount: items.length,
            uniqueCount: unique.length,
            duplicateCount: duplicates.length
        };
    }
    
    // 數據驗證
    validateData(items, schema) {
        const results = {
            valid: [],
            invalid: [],
            errors: []
        };
        
        items.forEach((item, index) => {
            const validation = this.validateItem(item, schema);
            
            if (validation.isValid) {
                results.valid.push(item);
            } else {
                results.invalid.push({
                    item,
                    index,
                    errors: validation.errors
                });
                results.errors.push(...validation.errors.map(err => ({
                    index,
                    field: err.field,
                    message: err.message
                })));
            }
        });
        
        return results;
    }
    
    validateItem(item, schema) {
        const errors = [];
        
        for (const [field, rules] of Object.entries(schema)) {
            const value = item[field];
            
            if (rules.required && (value === undefined || value === null || value === '')) {
                errors.push({
                    field,
                    message: `${field} is required`
                });
                continue;
            }
            
            if (value !== undefined && value !== null && value !== '') {
                if (rules.type && typeof value !== rules.type) {
                    errors.push({
                        field,
                        message: `${field} must be of type ${rules.type}`
                    });
                }
                
                if (rules.pattern && !rules.pattern.test(value)) {
                    errors.push({
                        field,
                        message: `${field} does not match required pattern`
                    });
                }
                
                if (rules.min !== undefined && value < rules.min) {
                    errors.push({
                        field,
                        message: `${field} must be at least ${rules.min}`
                    });
                }
                
                if (rules.max !== undefined && value > rules.max) {
                    errors.push({
                        field,
                        message: `${field} must be at most ${rules.max}`
                    });
                }
                
                if (rules.custom && !rules.custom(value)) {
                    errors.push({
                        field,
                        message: rules.customMessage || `${field} failed custom validation`
                    });
                }
            }
        }
        
        return {
            isValid: errors.length === 0,
            errors
        };
    }
    
    // 數據轉換
    transformData(items, transformers) {
        const cacheKey = `transform_${JSON.stringify(transformers)}_${items.length}`;
        const cached = this.getCache(cacheKey);
        
        if (cached) {
            return cached;
        }
        
        const transformed = items.map(item => {
            let result = { ...item };
            
            for (const [field, transformer] of Object.entries(transformers)) {
                if (typeof transformer === 'function') {
                    result[field] = transformer(result[field], result);
                } else if (transformer.type === 'map') {
                    result[field] = transformer.mapping[result[field]] || result[field];
                } else if (transformer.type === 'format') {
                    result[field] = this.formatValue(result[field], transformer.format);
                }
            }
            
            return result;
        });
        
        this.setCache(cacheKey, transformed);
        return transformed;
    }
    
    formatValue(value, format) {
        switch (format) {
            case 'uppercase':
                return typeof value === 'string' ? value.toUpperCase() : value;
            case 'lowercase':
                return typeof value === 'string' ? value.toLowerCase() : value;
            case 'trim':
                return typeof value === 'string' ? value.trim() : value;
            case 'number':
                return Number(value);
            case 'date':
                return new Date(value);
            default:
                return value;
        }
    }
    
    // 數據聚合
    aggregateData(items, groupBy, aggregations) {
        const groups = new Map();
        
        // 分組
        items.forEach(item => {
            const key = typeof groupBy === 'function' 
                ? groupBy(item) 
                : item[groupBy];
            
            if (!groups.has(key)) {
                groups.set(key, []);
            }
            groups.get(key).push(item);
        });
        
        // 聚合
        const results = [];
        for (const [key, groupItems] of groups.entries()) {
            const aggregated = { [groupBy]: key };
            
            for (const [field, operation] of Object.entries(aggregations)) {
                const values = groupItems.map(item => item[field]).filter(v => v !== undefined && v !== null);
                
                switch (operation) {
                    case 'count':
                        aggregated[`${field}_count`] = groupItems.length;
                        break;
                    case 'sum':
                        aggregated[`${field}_sum`] = values.reduce((a, b) => a + Number(b), 0);
                        break;
                    case 'avg':
                        aggregated[`${field}_avg`] = values.length > 0 
                            ? values.reduce((a, b) => a + Number(b), 0) / values.length 
                            : 0;
                        break;
                    case 'min':
                        aggregated[`${field}_min`] = values.length > 0 ? Math.min(...values) : null;
                        break;
                    case 'max':
                        aggregated[`${field}_max`] = values.length > 0 ? Math.max(...values) : null;
                        break;
                    case 'first':
                        aggregated[`${field}_first`] = values[0] || null;
                        break;
                    case 'last':
                        aggregated[`${field}_last`] = values[values.length - 1] || null;
                        break;
                }
            }
            
            results.push(aggregated);
        }
        
        return results;
    }
    
    // 數據排序
    sortData(items, sortConfig) {
        const sorted = [...items];
        
        sorted.sort((a, b) => {
            for (const { field, direction = 'asc', type = 'string' } of sortConfig) {
                let aVal = a[field];
                let bVal = b[field];
                
                // 類型轉換
                if (type === 'number') {
                    aVal = Number(aVal) || 0;
                    bVal = Number(bVal) || 0;
                } else if (type === 'date') {
                    aVal = new Date(aVal).getTime() || 0;
                    bVal = new Date(bVal).getTime() || 0;
                }
                
                let comparison = 0;
                if (aVal > bVal) comparison = 1;
                else if (aVal < bVal) comparison = -1;
                
                if (comparison !== 0) {
                    return direction === 'desc' ? -comparison : comparison;
                }
            }
            return 0;
        });
        
        return sorted;
    }
    
    // 數據過濾
    filterData(items, filters) {
        return items.filter(item => {
            return filters.every(filter => {
                const value = item[filter.field];
                
                switch (filter.operator) {
                    case 'equals':
                        return value === filter.value;
                    case 'not_equals':
                        return value !== filter.value;
                    case 'contains':
                        return typeof value === 'string' && value.includes(filter.value);
                    case 'starts_with':
                        return typeof value === 'string' && value.startsWith(filter.value);
                    case 'ends_with':
                        return typeof value === 'string' && value.endsWith(filter.value);
                    case 'greater_than':
                        return Number(value) > Number(filter.value);
                    case 'less_than':
                        return Number(value) < Number(filter.value);
                    case 'greater_equal':
                        return Number(value) >= Number(filter.value);
                    case 'less_equal':
                        return Number(value) <= Number(filter.value);
                    case 'in':
                        return Array.isArray(filter.value) && filter.value.includes(value);
                    case 'not_in':
                        return Array.isArray(filter.value) && !filter.value.includes(value);
                    case 'regex':
                        return filter.value.test && filter.value.test(value);
                    default:
                        return true;
                }
            });
        });
    }
    
    // 獲取處理統計
    getStats() {
        return {
            cacheSize: this.cache.size,
            cacheMemory: `${(this.cacheSize / 1024 / 1024).toFixed(2)}MB`,
            maxCacheSize: `${(this.maxCacheSize / 1024 / 1024).toFixed(2)}MB`,
            queueLength: this.processingQueue.length,
            isProcessing: this.isProcessing
        };
    }
    
    // 清理資源
    cleanup() {
        this.cache.clear();
        this.cacheSize = 0;
        this.processingQueue = [];
        this.isProcessing = false;
    }
}

// 信號量類
class Semaphore {
    constructor(max) {
        this.max = max;
        this.current = 0;
        this.queue = [];
    }
    
    async acquire() {
        return new Promise(resolve => {
            if (this.current < this.max) {
                this.current++;
                resolve();
            } else {
                this.queue.push(resolve);
            }
        });
    }
    
    release() {
        if (this.queue.length > 0) {
            const resolve = this.queue.shift();
            resolve();
        } else {
            this.current--;
        }
    }
}

// 全域實例
window.dataProcessor = new DataProcessor();

// 頁面卸載時清理
window.addEventListener('beforeunload', () => {
    window.dataProcessor.cleanup();
});

// 導出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DataProcessor;
}
