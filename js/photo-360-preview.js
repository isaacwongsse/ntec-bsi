// 360 Photo Preview functionality
// Based on PNE360.html implementation

// 全局變量
let photo360Scene, photo360Camera, photo360Renderer, photo360Controls, photo360Sphere, photo360TextureLoader;
let photo360CurrentMode = null; // '360' or 'normal'
let photo360NormalImageScale = 1;
let photo360NormalImagePosition = { x: 0, y: 0 };
let photo360IsDraggingNormalImage = false;
let photo360LastMousePosition = { x: 0, y: 0 };
let photo360EventListenersInitialized = false; // 標記事件監聽器是否已初始化

// 初始化Three.js場景
function initPhoto360ThreeJS() {
    // 創建場景
    photo360Scene = new THREE.Scene();
    
    // 創建相機
    photo360Camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    photo360Camera.position.set(0, 0, 0);
    
    // 創建渲染器
    photo360Renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance"
    });
    photo360Renderer.setSize(window.innerWidth, window.innerHeight);
    photo360Renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // 修復接縫問題的重要設置
    photo360Renderer.gammaOutput = true;
    photo360Renderer.gammaFactor = 2.2;
    photo360Renderer.autoClear = true;
    
    document.getElementById('photoPreview360Viewer').appendChild(photo360Renderer.domElement);
    
    // 添加軌道控制器
    photo360Controls = new THREE.OrbitControls(photo360Camera, photo360Renderer.domElement);
    photo360Controls.enableDamping = true;
    photo360Controls.dampingFactor = 0.1;
    photo360Controls.rotateSpeed = -0.2;
    photo360Controls.minDistance = 0.1;
    photo360Controls.maxDistance = 1.5;
    photo360Controls.enableZoom = true;
    photo360Controls.autoRotate = false;
    photo360Controls.screenSpacePanning = false;
    
    // 初始化紋理加載器
    photo360TextureLoader = new THREE.TextureLoader();
    
    // 開始動畫循環
    photo360Animate();
}

// 檢測圖片是否為360度全景圖
function detectPhoto360Panorama(image) {
    return new Promise((resolve) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);
        
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        // 檢查寬高比 - 調整為更準確的範圍
        const aspectRatio = image.width / image.height;
        const isCorrectAspect = aspectRatio >= 1.8 && aspectRatio <= 2.2;
        
        // 檢查邊緣連續性 - 提高邊緣匹配要求
        let edgeSimilarity = 0;
        const samplePoints = 50;
        
        for (let i = 0; i < samplePoints; i++) {
            const y = Math.floor((i / samplePoints) * image.height);
            
            const leftIndex = (y * image.width) * 4;
            const leftR = data[leftIndex];
            const leftG = data[leftIndex + 1];
            const leftB = data[leftIndex + 2];
            
            const rightIndex = (y * image.width + (image.width - 1)) * 4;
            const rightR = data[rightIndex];
            const rightG = data[rightIndex + 1];
            const rightB = data[rightIndex + 2];
            
            const diff = Math.abs(leftR - rightR) + Math.abs(leftG - rightG) + Math.abs(leftB - rightB);
            if (diff < 50) {
                edgeSimilarity++;
            }
        }
        
        const edgeMatchRatio = edgeSimilarity / samplePoints;
        // 提高邊緣匹配要求從 0.3 到 0.5，減少誤判
        const isPanorama = isCorrectAspect && edgeMatchRatio > 0.5;
        
        console.log(`360檢測結果: 寬高比=${aspectRatio.toFixed(2)}, 邊緣匹配度=${(edgeMatchRatio * 100).toFixed(1)}%, 是360圖片=${isPanorama}`);
        
        resolve(isPanorama);
    });
}

// 設置模式指示器
function setPhoto360ModeIndicator(mode) {
    const indicator = document.getElementById('photoPreview360ModeIndicator');
    const modeText = document.getElementById('photoPreview360ModeText');
    const modeInfo = document.getElementById('photoPreview360ModeInfo');
    
    if (mode === '360') {
        indicator.className = 'photo-preview-360-mode-indicator photo-preview-360-mode-360';
        modeText.textContent = '360° 全景模式';
        modeInfo.textContent = '使用手指拖拽来旋转视角';
        indicator.style.display = 'block';
    } else if (mode === 'normal') {
        indicator.className = 'photo-preview-360-mode-indicator photo-preview-360-mode-normal';
        modeText.textContent = '普通照片模式';
        modeInfo.textContent = '双指缩放或拖拽来查看照片';
        indicator.style.display = 'block';
    } else {
        indicator.style.display = 'none';
    }
    
    photo360CurrentMode = mode;
}

// 創建優化的球體幾何體
function createPhoto360OptimizedSphereGeometry(radius, widthSegments, heightSegments) {
    const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
    const uvs = geometry.attributes.uv;
    
    // 修復接縫
    for (let i = 0; i <= heightSegments; i++) {
        const firstColIndex = i * (widthSegments + 1);
        const lastColIndex = firstColIndex + widthSegments;
        uvs.setX(lastColIndex, 1);
    }
    
    // 修正UV映射方向
    for (let i = 0; i < uvs.count; i++) {
        uvs.setX(i, 1 - uvs.getX(i));
    }
    
    uvs.needsUpdate = true;
    return geometry;
}

// 創建球體並添加紋理
function createPhoto360SphereWithTexture(texture) {
    if (photo360Sphere) {
        photo360Scene.remove(photo360Sphere);
        if (photo360Sphere.material.map) {
            photo360Sphere.material.map.dispose();
        }
        photo360Sphere.material.dispose();
        photo360Sphere.geometry.dispose();
    }
    
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.encoding = THREE.sRGBEncoding;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    
    const geometry = createPhoto360OptimizedSphereGeometry(10, 128, 64);
    const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.BackSide,
        transparent: false,
        opacity: 1
    });
    
    photo360Sphere = new THREE.Mesh(geometry, material);
    photo360Scene.add(photo360Sphere);
    
    setPhoto360ModeIndicator('360');
    showPhoto360Viewer('360');
}

// 顯示普通圖片
function showPhoto360NormalImage(imageUrl) {
    const normalViewer = document.getElementById('photoPreview360NormalViewer');
    const normalImage = document.getElementById('photoPreview360NormalImage');
    
    normalImage.src = imageUrl;
    normalViewer.style.display = 'flex';
    normalImage.classList.add('zoomable');
    
    photo360NormalImageScale = 1;
    photo360NormalImagePosition = { x: 0, y: 0 };
    updatePhoto360NormalImageTransform();
    
    setPhoto360ModeIndicator('normal');
    showPhoto360Viewer('normal');
    setupPhoto360NormalImageInteractions();
}

// 更新普通圖片變換
function updatePhoto360NormalImageTransform() {
    const normalImage = document.getElementById('photoPreview360NormalImage');
    normalImage.style.transform = `translate(${photo360NormalImagePosition.x}px, ${photo360NormalImagePosition.y}px) scale(${photo360NormalImageScale})`;
}

// 設置普通圖片交互
function setupPhoto360NormalImageInteractions() {
    const normalImage = document.getElementById('photoPreview360NormalImage');
    
    normalImage.onwheel = null;
    normalImage.onmousedown = null;
    normalImage.ontouchstart = null;
    
    normalImage.onwheel = function(e) {
        e.preventDefault();
        const zoomIntensity = 0.1;
        const wheel = e.deltaY < 0 ? 1 : -1;
        const zoom = Math.exp(wheel * zoomIntensity);
        photo360NormalImageScale *= zoom;
        photo360NormalImageScale = Math.max(0.5, Math.min(3, photo360NormalImageScale));
        updatePhoto360NormalImageTransform();
    };
    
    normalImage.onmousedown = function(e) {
        e.preventDefault();
        photo360IsDraggingNormalImage = true;
        photo360LastMousePosition.x = e.clientX;
        photo360LastMousePosition.y = e.clientY;
        normalImage.style.cursor = 'grabbing';
    };
    
    normalImage.ontouchstart = function(e) {
        e.preventDefault();
        if (e.touches.length === 1) {
            photo360IsDraggingNormalImage = true;
            photo360LastMousePosition.x = e.touches[0].clientX;
            photo360LastMousePosition.y = e.touches[0].clientY;
        }
    };
}

// 顯示對應的查看器
function showPhoto360Viewer(mode) {
    const viewer = document.getElementById('photoPreview360Viewer');
    const normalViewer = document.getElementById('photoPreview360NormalViewer');
    
    if (mode === '360') {
        viewer.style.display = 'block';
        normalViewer.style.display = 'none';
    } else if (mode === 'normal') {
        viewer.style.display = 'none';
        normalViewer.style.display = 'flex';
    }
    
    const infoPanel = document.getElementById('photoPreview360InfoPanel');
    infoPanel.style.display = 'block';
    setTimeout(() => {
        infoPanel.style.display = 'none';
    }, 5000);
}

// 加載圖片並檢測類型
function loadPhoto360Image(imageSrc) {
    console.log('📥 loadPhoto360Image called');
    const loadingEl = document.getElementById('photoPreview360Loading');
    if (loadingEl) {
        loadingEl.style.display = 'block';
    }
    
    const img = new Image();
    img.onload = function() {
        console.log('✅ Image loaded, detecting panorama...');
        detectPhoto360Panorama(img).then(isPanorama => {
            console.log('🔍 Panorama detection result in loadPhoto360Image:', isPanorama);
            if (isPanorama) {
                console.log('🌐 Loading 360 texture...');
                photo360TextureLoader.load(imageSrc, function(texture) {
                    console.log('✅ 360 texture loaded, creating sphere...');
                    createPhoto360SphereWithTexture(texture);
                    if (loadingEl) loadingEl.style.display = 'none';
                }, 
                function(xhr) {
                    console.log('📊 Loading progress:', (xhr.loaded / xhr.total * 100) + '%');
                },
                function(error) {
                    console.error('❌ 加載紋理時出錯:', error);
                    alert('加載360圖片時出錯。');
                    if (loadingEl) loadingEl.style.display = 'none';
                });
            } else {
                console.log('📷 Showing normal image...');
                showPhoto360NormalImage(imageSrc);
                if (loadingEl) loadingEl.style.display = 'none';
            }
        }).catch(error => {
            console.error('❌ Error in panorama detection:', error);
            if (loadingEl) loadingEl.style.display = 'none';
        });
    };
    
    img.onerror = function() {
        console.error('❌ Failed to load image');
        if (loadingEl) loadingEl.style.display = 'none';
    };
    
    img.src = imageSrc;
}

// 動畫循環
function photo360Animate() {
    requestAnimationFrame(photo360Animate);
    
    if (photo360Controls && photo360CurrentMode === '360') {
        photo360Controls.update();
    }
    
    if (photo360CurrentMode === '360') {
        photo360Renderer.render(photo360Scene, photo360Camera);
    }
}

// 窗口大小調整處理
function onPhoto360WindowResize() {
    if (photo360Camera && photo360Renderer) {
        photo360Camera.aspect = window.innerWidth / window.innerHeight;
        photo360Camera.updateProjectionMatrix();
        photo360Renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

// 初始化事件監聽
function initPhoto360EventListeners() {
    // 避免重複初始化
    if (photo360EventListenersInitialized) {
        console.log('⚠️ Event listeners already initialized, skipping...');
        return;
    }
    
    console.log('🎧 Initializing 360 preview event listeners...');
    
    // 重置視圖按鈕
    document.getElementById('photoPreview360ResetView').addEventListener('click', function() {
        if (photo360CurrentMode === '360' && photo360Controls) {
            photo360Controls.reset();
        } else if (photo360CurrentMode === 'normal') {
            photo360NormalImageScale = 1;
            photo360NormalImagePosition = { x: 0, y: 0 };
            updatePhoto360NormalImageTransform();
        }
    });
    
    // 切換信息面板
    document.getElementById('photoPreview360ToggleInfo').addEventListener('click', function() {
        const infoPanel = document.getElementById('photoPreview360InfoPanel');
        infoPanel.style.display = infoPanel.style.display === 'block' ? 'none' : 'block';
    });
    
    // 關閉按鈕
    document.getElementById('photoPreview360Close').addEventListener('click', function() {
        closePhoto360Preview();
    });
    
    // ESC 鍵關閉預覽
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const container = document.getElementById('photoPreview360Container');
            if (container && container.style.display === 'flex') {
                e.preventDefault();
                e.stopPropagation();
                console.log('⌨️ ESC key pressed, closing 360 preview...');
                closePhoto360Preview();
            }
        }
    });
    
    // 窗口大小調整事件
    window.addEventListener('resize', onPhoto360WindowResize);
    
    // 鼠標移動事件
    document.addEventListener('mousemove', function(e) {
        if (photo360IsDraggingNormalImage && photo360CurrentMode === 'normal') {
            const deltaX = (e.clientX - photo360LastMousePosition.x) * 1;
            const deltaY = (e.clientY - photo360LastMousePosition.y) * 1;
            
            photo360NormalImagePosition.x += deltaX;
            photo360NormalImagePosition.y += deltaY;
            
            updatePhoto360NormalImageTransform();
            
            photo360LastMousePosition.x = e.clientX;
            photo360LastMousePosition.y = e.clientY;
        }
    });
    
    // 鼠標抬起事件
    document.addEventListener('mouseup', function() {
        if (photo360IsDraggingNormalImage) {
            photo360IsDraggingNormalImage = false;
            const normalImage = document.getElementById('photoPreview360NormalImage');
            normalImage.style.cursor = 'grab';
        }
    });
    
    // 觸摸移動事件
    document.addEventListener('touchmove', function(e) {
        if (photo360IsDraggingNormalImage && photo360CurrentMode === 'normal' && e.touches.length === 1) {
            e.preventDefault();
            const deltaX = (e.touches[0].clientX - photo360LastMousePosition.x) * 1;
            const deltaY = (e.touches[0].clientY - photo360LastMousePosition.y) * 1;
            
            photo360NormalImagePosition.x += deltaX;
            photo360NormalImagePosition.y += deltaY;
            
            updatePhoto360NormalImageTransform();
            
            photo360LastMousePosition.x = e.touches[0].clientX;
            photo360LastMousePosition.y = e.touches[0].clientY;
        }
    });
    
    // 觸摸結束事件
    document.addEventListener('touchend', function() {
        photo360IsDraggingNormalImage = false;
    });
    
    // 標記為已初始化
    photo360EventListenersInitialized = true;
    console.log('✅ 360 preview event listeners initialized');
}

// 打開360照片預覽
function openPhoto360Preview(imageSrc) {
    console.log('🌐 openPhoto360Preview called with:', imageSrc.substring(0, 50));
    const container = document.getElementById('photoPreview360Container');
    if (!container) {
        console.error('❌ photoPreview360Container not found in DOM');
        return;
    }
    container.style.display = 'flex';
    
    // 初始化Three.js（如果還沒初始化）
    if (!photo360Scene) {
        console.log('🔧 Initializing Three.js scene...');
        initPhoto360ThreeJS();
        initPhoto360EventListeners();
    }
    
    // 加載圖片
    loadPhoto360Image(imageSrc);
}

// 關閉360照片預覽
function closePhoto360Preview() {
    const container = document.getElementById('photoPreview360Container');
    container.style.display = 'none';
    
    // 重置狀態
    photo360CurrentMode = null;
    setPhoto360ModeIndicator(null);
    
    // 清理場景
    if (photo360Sphere) {
        photo360Scene.remove(photo360Sphere);
        if (photo360Sphere.material.map) {
            photo360Sphere.material.map.dispose();
        }
        photo360Sphere.material.dispose();
        photo360Sphere.geometry.dispose();
        photo360Sphere = null;
    }
}

// 添加 360 圖標到照片縮圖
async function add360BadgeToPhoto(photoElement, imageSource) {
    // 如果已經有圖標了，不要重複添加
    if (photoElement.querySelector('.photo-360-badge')) {
        return;
    }
    
    try {
        const img = new Image();
        img.onload = async function() {
            const isPanorama = await detectPhoto360Panorama(img);
            if (isPanorama) {
                console.log('🌐 Adding 360 badge to photo');
                const badge = document.createElement('div');
                badge.className = 'photo-360-badge';
                badge.title = '360° Panorama Photo';
                photoElement.style.position = 'relative';
                photoElement.appendChild(badge);
            }
        };
        img.src = imageSource;
    } catch (error) {
        console.error('Error detecting 360 photo for badge:', error);
    }
}

// 批量檢查並添加 360 圖標
async function addAll360Badges() {
    console.log('🔍 Checking all photos for 360 badges...');
    
    // 檢查主要照片預覽區域的照片
    const photoItems = document.querySelectorAll('.photo-item');
    for (const photoItem of photoItems) {
        const img = photoItem.querySelector('img');
        if (img && img.src && !photoItem.querySelector('.photo-360-badge')) {
            await add360BadgeToPhoto(photoItem, img.src);
        }
    }
    
    console.log('✅ Finished checking all photos for 360 badges');
}

// 導出函數供外部使用
window.openPhoto360Preview = openPhoto360Preview;
window.closePhoto360Preview = closePhoto360Preview;
window.detectPhoto360Panorama = detectPhoto360Panorama;
window.add360BadgeToPhoto = add360BadgeToPhoto;
window.addAll360Badges = addAll360Badges;
