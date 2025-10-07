// 圖片處理 Web Worker
class ImageProcessor {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.setupCanvas();
    }
    
    setupCanvas() {
        // 在Worker中創建OffscreenCanvas（如果支持）
        if (typeof OffscreenCanvas !== 'undefined') {
            this.canvas = new OffscreenCanvas(1, 1);
            this.ctx = this.canvas.getContext('2d');
        }
    }
    
    // 壓縮圖片
    async compressImage(imageData, options = {}) {
        const {
            maxWidth = 1920,
            maxHeight = 1080,
            quality = 0.8,
            format = 'image/jpeg'
        } = options;
        
        try {
            // 如果支持OffscreenCanvas
            if (this.canvas && this.ctx) {
                return await this.compressWithOffscreenCanvas(imageData, {
                    maxWidth, maxHeight, quality, format
                });
            } else {
                // 回退方案：返回原始數據讓主線程處理
                return {
                    success: false,
                    error: 'OffscreenCanvas not supported',
                    fallback: true,
                    originalData: imageData
                };
            }
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    }
    
    async compressWithOffscreenCanvas(imageData, options) {
        const { maxWidth, maxHeight, quality, format } = options;
        
        // 創建ImageBitmap
        const imageBitmap = await createImageBitmap(imageData);
        
        // 計算新尺寸
        const ratio = Math.min(
            maxWidth / imageBitmap.width,
            maxHeight / imageBitmap.height,
            1
        );
        
        const newWidth = Math.floor(imageBitmap.width * ratio);
        const newHeight = Math.floor(imageBitmap.height * ratio);
        
        // 調整canvas大小
        this.canvas.width = newWidth;
        this.canvas.height = newHeight;
        
        // 清除並繪製
        this.ctx.clearRect(0, 0, newWidth, newHeight);
        this.ctx.drawImage(imageBitmap, 0, 0, newWidth, newHeight);
        
        // 轉換為Blob
        const blob = await this.canvas.convertToBlob({
            type: format,
            quality: quality
        });
        
        // 清理
        imageBitmap.close();
        
        return {
            success: true,
            blob: blob,
            originalSize: imageData.size || 0,
            compressedSize: blob.size,
            compressionRatio: ((imageData.size - blob.size) / imageData.size * 100).toFixed(2),
            dimensions: {
                original: { width: imageBitmap.width, height: imageBitmap.height },
                compressed: { width: newWidth, height: newHeight }
            }
        };
    }
    
    // 生成縮略圖
    async generateThumbnail(imageData, size = 120) {
        try {
            if (!this.canvas || !this.ctx) {
                return {
                    success: false,
                    error: 'OffscreenCanvas not supported',
                    fallback: true
                };
            }
            
            const imageBitmap = await createImageBitmap(imageData);
            
            // 計算縮略圖尺寸（保持比例）
            const ratio = Math.min(size / imageBitmap.width, size / imageBitmap.height);
            const thumbWidth = Math.floor(imageBitmap.width * ratio);
            const thumbHeight = Math.floor(imageBitmap.height * ratio);
            
            // 調整canvas大小
            this.canvas.width = size;
            this.canvas.height = size;
            
            // 居中繪製
            const x = (size - thumbWidth) / 2;
            const y = (size - thumbHeight) / 2;
            
            this.ctx.fillStyle = '#f0f0f0';
            this.ctx.fillRect(0, 0, size, size);
            this.ctx.drawImage(imageBitmap, x, y, thumbWidth, thumbHeight);
            
            const blob = await this.canvas.convertToBlob({
                type: 'image/jpeg',
                quality: 0.8
            });
            
            imageBitmap.close();
            
            return {
                success: true,
                blob: blob,
                dimensions: { width: size, height: size }
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    }
    
    // 批量處理圖片
    async processBatch(images, operation, options = {}) {
        const results = [];
        const { onProgress } = options;
        
        for (let i = 0; i < images.length; i++) {
            try {
                let result;
                
                switch (operation) {
                    case 'compress':
                        result = await this.compressImage(images[i], options);
                        break;
                    case 'thumbnail':
                        result = await this.generateThumbnail(images[i], options.size);
                        break;
                    default:
                        result = { success: false, error: 'Unknown operation' };
                }
                
                results.push({
                    index: i,
                    ...result
                });
                
                // 報告進度
                if (onProgress) {
                    onProgress({
                        completed: i + 1,
                        total: images.length,
                        progress: ((i + 1) / images.length * 100).toFixed(2)
                    });
                }
            } catch (error) {
                results.push({
                    index: i,
                    success: false,
                    error: error.message
                });
            }
        }
        
        return {
            success: true,
            results: results,
            summary: {
                total: images.length,
                successful: results.filter(r => r.success).length,
                failed: results.filter(r => !r.success).length
            }
        };
    }
    
    // 分析圖片信息
    async analyzeImage(imageData) {
        try {
            if (!this.canvas || !this.ctx) {
                return {
                    success: false,
                    error: 'OffscreenCanvas not supported',
                    fallback: true
                };
            }
            
            const imageBitmap = await createImageBitmap(imageData);
            
            // 獲取基本信息
            const info = {
                width: imageBitmap.width,
                height: imageBitmap.height,
                aspectRatio: (imageBitmap.width / imageBitmap.height).toFixed(2),
                size: imageData.size || 0
            };
            
            // 簡單的顏色分析
            this.canvas.width = Math.min(imageBitmap.width, 100);
            this.canvas.height = Math.min(imageBitmap.height, 100);
            
            this.ctx.drawImage(imageBitmap, 0, 0, this.canvas.width, this.canvas.height);
            
            const imageDataArray = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
            const pixels = imageDataArray.data;
            
            let totalR = 0, totalG = 0, totalB = 0;
            const pixelCount = pixels.length / 4;
            
            for (let i = 0; i < pixels.length; i += 4) {
                totalR += pixels[i];
                totalG += pixels[i + 1];
                totalB += pixels[i + 2];
            }
            
            info.averageColor = {
                r: Math.round(totalR / pixelCount),
                g: Math.round(totalG / pixelCount),
                b: Math.round(totalB / pixelCount)
            };
            
            imageBitmap.close();
            
            return {
                success: true,
                info: info
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    }
}

// Worker消息處理
const processor = new ImageProcessor();

self.onmessage = async function(e) {
    const { id, type, data, options } = e.data;
    
    try {
        let result;
        
        switch (type) {
            case 'compress':
                result = await processor.compressImage(data, options);
                break;
                
            case 'thumbnail':
                result = await processor.generateThumbnail(data, options?.size);
                break;
                
            case 'batch':
                result = await processor.processBatch(data, options.operation, {
                    ...options,
                    onProgress: (progress) => {
                        self.postMessage({
                            id,
                            type: 'progress',
                            data: progress
                        });
                    }
                });
                break;
                
            case 'analyze':
                result = await processor.analyzeImage(data);
                break;
                
            default:
                result = {
                    success: false,
                    error: `Unknown operation: ${type}`
                };
        }
        
        self.postMessage({
            id,
            type: 'result',
            data: result
        });
    } catch (error) {
        self.postMessage({
            id,
            type: 'error',
            data: {
                success: false,
                error: error.message
            }
        });
    }
};

// Worker ready signal
self.postMessage({
    type: 'ready',
    data: {
        capabilities: {
            offscreenCanvas: typeof OffscreenCanvas !== 'undefined',
            createImageBitmap: typeof createImageBitmap !== 'undefined'
        }
    }
});

// Image Processor Worker loaded
