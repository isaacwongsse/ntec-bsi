// 移動端主JavaScript文件
// mobile-main.js

(function() {
    'use strict';
    
    // 移動端應用狀態
    const MobileApp = {
        // 初始化
        init: function() {
            this.bindEvents();
            this.initUI();
            this.hideLoading();
            this.setupResponsiveHandling();
            console.log('移動端應用已初始化');
        },
        
        // 綁定事件
        bindEvents: function() {
            // PNE菜單按鈕
            const pneMenuBtn = document.getElementById('mobilePneMenuBtn');
            if (pneMenuBtn) {
                pneMenuBtn.addEventListener('click', this.togglePneMenu.bind(this));
            }
            
            // 任務顯示按鈕已移除
            
            // 添加照片按鈕
            const addPhotosBtn = document.getElementById('mobileAddPhotosBtn');
            if (addPhotosBtn) {
                addPhotosBtn.addEventListener('click', this.selectPhotos.bind(this));
            }
            
            // 提交按鈕
            const submitBtn = document.getElementById('mobileSubmitBtn');
            if (submitBtn) {
                submitBtn.addEventListener('click', this.submitToTable.bind(this));
            }
            
            // 選擇文件夾按鈕
            const selectFolderBtn = document.getElementById('mobileSelectFolderBtn');
            if (selectFolderBtn) {
                selectFolderBtn.addEventListener('click', this.selectPhotoFolder.bind(this));
            }
            
            // 清除按鈕
            const clearBtn = document.getElementById('mobileClearBtn');
            if (clearBtn) {
                clearBtn.addEventListener('click', this.clearAllCategories.bind(this));
            }
            
            // 底部導航
            const navItems = document.querySelectorAll('.mobile-nav-home, .mobile-nav-drawing, .mobile-nav-photo, .mobile-nav-details');
            navItems.forEach(item => {
                item.addEventListener('click', this.switchSection.bind(this));
            });
            
            // 下拉選單項目點擊事件
            const dropdownItems = document.querySelectorAll('.mobile-dropdown-item');
            dropdownItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    const action = e.currentTarget.dataset.action;
                    this.handleDropdownAction(action);
                    this.togglePneMenu(); // 關閉下拉選單
                });
            });
            
            // Header 按鈕事件
            this.setupHeaderButtons();
            
            // 任務條目模態框事件
            const taskEntriesCloseBtn = document.getElementById('taskEntriesCloseBtn');
            if (taskEntriesCloseBtn) {
                taskEntriesCloseBtn.addEventListener('click', this.closeTaskEntriesModal.bind(this));
            }
            
            const taskCancelBtn = document.getElementById('taskCancelBtn');
            if (taskCancelBtn) {
                taskCancelBtn.addEventListener('click', this.closeTaskEntriesModal.bind(this));
            }
            
            const taskSaveBtn = document.getElementById('taskSaveBtn');
            if (taskSaveBtn) {
                taskSaveBtn.addEventListener('click', this.saveTask.bind(this));
            }
            
            // 移動端樓層平面圖上傳按鈕
            const mobileUploadFloorPlanBtn = document.getElementById('mobileUploadFloorPlanBtn');
            if (mobileUploadFloorPlanBtn) {
                mobileUploadFloorPlanBtn.addEventListener('click', this.handleMobileFloorPlanUpload.bind(this));
            }
            
            // 移動端樓層平面圖文件輸入
            const mobileFloorPlanFileInput = document.getElementById('mobileFloorPlanFileInput');
            if (mobileFloorPlanFileInput) {
                mobileFloorPlanFileInput.addEventListener('change', this.handleMobileFloorPlanFileChange.bind(this));
            }
            
            // 點擊外部關閉下拉菜單
            document.addEventListener('click', (e) => {
                const dropdown = document.getElementById('mobileDropdown');
                const menuBtn = document.getElementById('mobilePneMenuBtn');
                
                if (dropdown && !menuBtn.contains(e.target) && !dropdown.contains(e.target)) {
                    dropdown.classList.remove('show');
                }
            });
        },
        
        // 初始化UI
        initUI: function() {
            // 設置初始狀態
            this.updateTaskCount(0);
            this.updateSelectedCount(0);
            this.updateTableCount(0);
            
            // 初始化分類網格
            this.initCategoriesGrid();
            
            // 設置標籤創建按鈕
            this.setupLabelCreationButtons();
            
            // 載入已保存的標籤
            this.loadMobileLabelsFromStorage();
            
            // 設置全局函數（與桌面版一致）
            this.setupGlobalFunctions();
            
            // 檢查並載入已保存的任務數據
            this.loadSavedTaskData();
        },
        
        // 隱藏載入指示器
        hideLoading: function() {
            const loadingOverlay = document.getElementById('mobileLoadingOverlay');
            if (loadingOverlay) {
                setTimeout(() => {
                    loadingOverlay.style.display = 'none';
                }, 500);
            }
        },
        
        // 設置響應式處理
        setupResponsiveHandling: function() {
            let resizeTimeout;
            
            // 監聽視窗大小變化
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => {
                    this.handleResponsiveResize();
                }, 250); // 防抖動
            });
            
            // 監聽設備方向變化
            window.addEventListener('orientationchange', () => {
                setTimeout(() => {
                    this.handleResponsiveResize();
                }, 500); // 等待方向變化完成
            });
        },
        
        // 處理響應式調整
        handleResponsiveResize: function() {
            const mobileFloorPlanCanvas = document.getElementById('mobileFloorPlanCanvas');
            const mobileFloorPlanViewer = document.getElementById('mobileFloorPlanViewer');
            const mobileLabelLayer = document.getElementById('mobileLabelLayer');
            
            // 只有在 Drawing 區域顯示且有 PDF 載入時才重新調整
            if (mobileFloorPlanCanvas && mobileFloorPlanViewer && 
                mobileFloorPlanCanvas.style.display !== 'none' && 
                mobileFloorPlanViewer.style.display === 'flex') {
                
                console.log('處理響應式調整...');
                
                // 獲取當前容器尺寸
                const containerRect = mobileFloorPlanViewer.getBoundingClientRect();
                const containerWidth = containerRect.width;
                const containerHeight = containerRect.height;
                
                if (containerWidth > 0 && containerHeight > 0) {
                    // 重新計算 Canvas 尺寸
                    const currentCanvasWidth = parseInt(mobileFloorPlanCanvas.style.width);
                    const currentCanvasHeight = parseInt(mobileFloorPlanCanvas.style.height);
                    
                    // 計算新的縮放比例
                    const scaleX = containerWidth / currentCanvasWidth;
                    const scaleY = containerHeight / currentCanvasHeight;
                    const newScale = Math.min(scaleX, scaleY) * 0.95;
                    
                    // 應用新的縮放
                    mobileFloorPlanCanvas.style.transform = `scale(${newScale})`;
                    mobileFloorPlanCanvas.style.transformOrigin = 'center center';
                    
                    // 調整標籤層
                    if (mobileLabelLayer) {
                        mobileLabelLayer.style.transform = `scale(${newScale})`;
                        mobileLabelLayer.style.transformOrigin = 'center center';
                    }
                    
                    console.log('響應式調整完成:', { 
                        containerWidth, 
                        containerHeight, 
                        newScale 
                    });
                }
            }
        },
        
        // 切換PNE菜單
        togglePneMenu: function() {
            const dropdown = document.getElementById('mobileDropdown');
            if (dropdown) {
                console.log('TogglePneMenu called');
                console.log('Current classes:', dropdown.className);
                console.log('Current style:', dropdown.style.cssText);
                dropdown.classList.toggle('show');
                console.log('After toggle, classes:', dropdown.className);
                console.log('After toggle, style:', dropdown.style.cssText);
                
                // 調試信息
                if (dropdown.classList.contains('show')) {
                    console.log('PNE Dropdown should be visible now');
                    console.log('Element dimensions:', {
                        width: dropdown.offsetWidth,
                        height: dropdown.offsetHeight,
                        top: dropdown.offsetTop,
                        left: dropdown.offsetLeft
                    });
                    console.log('Element computed style:', {
                        display: window.getComputedStyle(dropdown).display,
                        position: window.getComputedStyle(dropdown).position,
                        zIndex: window.getComputedStyle(dropdown).zIndex
                    });
                }
            } else {
                console.log('mobileDropdown not found');
            }
        },
        
        // 任務顯示功能已移除
        
        // 選擇照片
        selectPhotos: function() {
            const fileInput = document.getElementById('mobileAddPhotosFileInput');
            if (fileInput) {
                fileInput.click();
            }
        },
        
        // 提交到表格
        submitToTable: function() {
            console.log('提交到表格');
            // 這裡可以實現提交邏輯
            alert('提交功能將在後續版本中實現');
        },
        
        // 選擇照片文件夾
        selectPhotoFolder: function() {
            console.log('選擇照片文件夾');
            // 這裡可以實現文件夾選擇邏輯
            alert('文件夾選擇功能將在後續版本中實現');
        },
        
        // 清除所有分類
        clearAllCategories: function() {
            if (confirm('確定要清除所有分類嗎？')) {
                console.log('清除所有分類');
                // 這裡可以實現清除邏輯
                alert('清除功能將在後續版本中實現');
            }
        },
        
        // 切換區域
        switchSection: function(e) {
            const target = e.currentTarget;
            const section = target.dataset.section;
            
            // 移除所有active類
            document.querySelectorAll('.mobile-nav-home, .mobile-nav-drawing, .mobile-nav-photo, .mobile-nav-details').forEach(item => {
                item.classList.remove('active');
            });
            
            // 添加active類到當前項目
            target.classList.add('active');
            
            // 切換顯示對應的區域
            this.showSection(section);
        },
        
        // 顯示指定區域
        showSection: function(section) {
            // 隱藏所有區域
            const sections = document.querySelectorAll('.mobile-section');
            sections.forEach(sectionElement => {
                sectionElement.style.display = 'none';
            });
            
            // 顯示對應的區域
            const sectionMap = {
                'home': 'mobileHomeSection',
                'drawing': 'mobileDrawingSection',
                'photo': 'mobilePhotoSection',
                'details': 'mobileDetailsSection'
            };
            
            const sectionId = sectionMap[section];
            if (sectionId) {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.style.display = 'block';
                }
            }
            
            // 切換對應的 header 內容
            this.switchHeaderContent(section);
        },
        
        // 切換 header 內容
        switchHeaderContent: function(section) {
            // 移除所有 header 內容的 active 類
            const headerContents = document.querySelectorAll('.mobile-header-content');
            headerContents.forEach(content => {
                content.classList.remove('active');
                content.style.display = 'none';
            });
            
            // 顯示對應的 header 內容
            const headerContentMap = {
                'home': 'mobile-header-home',
                'drawing': 'mobile-header-drawing',
                'photo': 'mobile-header-photo',
                'details': 'mobile-header-details'
            };
            
            const headerClass = headerContentMap[section];
            if (headerClass) {
                const headerElement = document.querySelector(`.${headerClass}`);
                if (headerElement) {
                    headerElement.classList.add('active');
                    headerElement.style.display = 'flex';
                }
            }
        },
        
        // 處理工具菜單項動作
        handleToolAction: function(action, item) {
            console.log('handleToolAction called with action:', action);
            switch(action) {
                case 'add-label':
                    // 添加標籤功能
                    console.log('Add label action triggered');
                    this.enterMobileLabelCreationMode();
                    break;
                    
                case 'quick-label-toggle':
                    // Quick Label 開關
                    console.log('Quick label toggle action triggered');
                    this.toggleMobileQuickLabel();
                    break;
                    
                case 'label-size':
                    // 標籤大小控制已經在 HTML 中處理
                    console.log('Label size action triggered');
                    break;
                    
                case 'defect-size':
                    // 缺陷大小控制已經在 HTML 中處理
                    console.log('Defect size action triggered');
                    break;
                    
                case 'all-labels-detail':
                    console.log('All labels detail action triggered');
                    this.showAllLabelsDetail();
                    break;
                    
                case 'all-defects-detail':
                    console.log('All defects detail action triggered');
                    this.showAllDefectsDetail();
                    break;
                    
                case 'zoom-to-100':
                    console.log('Zoom to 100% action triggered');
                    this.resetPDFZoom();
                    break;
                    
                default:
                    console.log('Unknown tool action:', action);
            }
        },
        
        // 進入移動端標籤創建模式
        enterMobileLabelCreationMode: function() {
            console.log('enterMobileLabelCreationMode called');
            const mobileFloorPlanCanvas = document.getElementById('mobileFloorPlanCanvas');
            console.log('Canvas element:', mobileFloorPlanCanvas);
            console.log('Canvas display style:', mobileFloorPlanCanvas ? mobileFloorPlanCanvas.style.display : 'not found');
            
            if (!mobileFloorPlanCanvas || mobileFloorPlanCanvas.style.display === 'none') {
                alert('請先上傳平面圖');
                return;
            }
            
            console.log('Opening label modal...');
            // 打開標籤模態框
            this.openMobileLabelModal();
        },
        
        // 打開移動端標籤模態框
        openMobileLabelModal: function() {
            console.log('openMobileLabelModal called');
            const mobileLabelModalOverlay = document.getElementById('mobileLabelModalOverlay');
            console.log('Modal overlay element:', mobileLabelModalOverlay);
            
            if (mobileLabelModalOverlay) {
                mobileLabelModalOverlay.style.display = 'flex';
                console.log('Modal overlay display set to flex');
                
                // 直接綁定按鈕事件（在模態框打開時）
                this.bindModalButtons();
                
                // 聚焦到檢查編號輸入框
                setTimeout(() => {
                    const inputInspectionNo = document.getElementById('mobileLabelInspectionNo');
                    console.log('Inspection no input:', inputInspectionNo);
                    if (inputInspectionNo) {
                        inputInspectionNo.focus();
                        inputInspectionNo.select();
                        console.log('Input focused and selected');
                    }
                }, 100);
            } else {
                console.error('Modal overlay not found!');
            }
        },
        
        // 綁定模態框按鈕事件
        bindModalButtons: function() {
            console.log('Binding modal buttons...');
            
            const mobileLabelCreateBtn = document.getElementById('mobileLabelCreateBtn');
            const mobileLabelCancelBtn = document.getElementById('mobileLabelCancelBtn');
            
            console.log('Create button found:', mobileLabelCreateBtn);
            console.log('Cancel button found:', mobileLabelCancelBtn);
            
            if (mobileLabelCreateBtn) {
                console.log('Create button before binding:', {
                    disabled: mobileLabelCreateBtn.disabled,
                    style: mobileLabelCreateBtn.style.cssText,
                    computedStyle: window.getComputedStyle(mobileLabelCreateBtn).cssText,
                    offsetWidth: mobileLabelCreateBtn.offsetWidth,
                    offsetHeight: mobileLabelCreateBtn.offsetHeight
                });
                
                // 強制設置按鈕樣式
                mobileLabelCreateBtn.style.pointerEvents = 'auto';
                mobileLabelCreateBtn.style.cursor = 'pointer';
                mobileLabelCreateBtn.style.zIndex = '16000';
                mobileLabelCreateBtn.style.position = 'relative';
                mobileLabelCreateBtn.disabled = false;
                
                // 移除舊的事件監聽器（如果有的話）
                mobileLabelCreateBtn.removeEventListener('click', this.handleMobileLabelCreate);
                
                // 添加新的事件監聽器
                mobileLabelCreateBtn.addEventListener('click', (e) => {
                    console.log('Create button clicked directly!');
                    e.preventDefault();
                    e.stopPropagation();
                    this.handleMobileLabelCreate();
                });
                console.log('Create button event listener added directly');
                
                // 添加一個簡單的測試點擊
                setTimeout(() => {
                    console.log('Testing button clickability...');
                    const rect = mobileLabelCreateBtn.getBoundingClientRect();
                    console.log('Button position:', rect);
                    console.log('Button visible:', rect.width > 0 && rect.height > 0);
                }, 100);
                
                console.log('Create button after binding:', {
                    disabled: mobileLabelCreateBtn.disabled,
                    style: mobileLabelCreateBtn.style.cssText,
                    computedStyle: window.getComputedStyle(mobileLabelCreateBtn).cssText,
                    offsetWidth: mobileLabelCreateBtn.offsetWidth,
                    offsetHeight: mobileLabelCreateBtn.offsetHeight
                });
            }
            
            if (mobileLabelCancelBtn) {
                console.log('Cancel button before binding:', {
                    disabled: mobileLabelCancelBtn.disabled,
                    style: mobileLabelCancelBtn.style.cssText,
                    computedStyle: window.getComputedStyle(mobileLabelCancelBtn).cssText,
                    offsetWidth: mobileLabelCancelBtn.offsetWidth,
                    offsetHeight: mobileLabelCancelBtn.offsetHeight
                });
                
                // 強制設置按鈕樣式
                mobileLabelCancelBtn.style.pointerEvents = 'auto';
                mobileLabelCancelBtn.style.cursor = 'pointer';
                mobileLabelCancelBtn.style.zIndex = '16000';
                mobileLabelCancelBtn.style.position = 'relative';
                mobileLabelCancelBtn.disabled = false;
                
                // 移除舊的事件監聽器（如果有的話）
                mobileLabelCancelBtn.removeEventListener('click', this.closeMobileLabelModal);
                
                // 添加新的事件監聽器
                mobileLabelCancelBtn.addEventListener('click', (e) => {
                    console.log('Cancel button clicked directly!');
                    e.preventDefault();
                    e.stopPropagation();
                    this.closeMobileLabelModal();
                });
                console.log('Cancel button event listener added directly');
                
                console.log('Cancel button after binding:', {
                    disabled: mobileLabelCancelBtn.disabled,
                    style: mobileLabelCancelBtn.style.cssText,
                    computedStyle: window.getComputedStyle(mobileLabelCancelBtn).cssText,
                    offsetWidth: mobileLabelCancelBtn.offsetWidth,
                    offsetHeight: mobileLabelCancelBtn.offsetHeight
                });
            }
        },
        
        // 切換移動端 Quick Label 模式
        toggleMobileQuickLabel: function() {
            const quickLabelSwitch = document.getElementById('mobileQuickLabelSwitch');
            const mobileFloorPlanViewer = document.getElementById('mobileFloorPlanViewer');
            const mobileQuickLabelInstruction = document.getElementById('mobileQuickLabelInstruction');
            
            if (!quickLabelSwitch) return;
            
            const isEnabled = quickLabelSwitch.checked;
            
            if (isEnabled) {
                // 啟用 Quick Label 模式
                if (mobileFloorPlanViewer) {
                    mobileFloorPlanViewer.style.cursor = 'crosshair';
                }
                if (mobileQuickLabelInstruction) {
                    mobileQuickLabelInstruction.style.display = 'block';
                }
                console.log('Quick Label mode enabled');
            } else {
                // 禁用 Quick Label 模式
                if (mobileFloorPlanViewer) {
                    mobileFloorPlanViewer.style.cursor = 'grab';
                }
                if (mobileQuickLabelInstruction) {
                    mobileQuickLabelInstruction.style.display = 'none';
                }
                console.log('Quick Label mode disabled');
            }
        },
        
        // 設置標籤創建按鈕事件
        setupLabelCreationButtons: function() {
            console.log('Setting up label creation buttons...');
            
            // 使用事件委託，在 document 上監聽點擊事件
            document.addEventListener('click', (e) => {
                console.log('Document click event:', e.target);
                console.log('Target ID:', e.target.id);
                console.log('Target class:', e.target.className);
                console.log('Target tagName:', e.target.tagName);
                
                // 檢查是否點擊了創建按鈕或其子元素
                if (e.target && (e.target.id === 'mobileLabelCreateBtn' || e.target.closest('#mobileLabelCreateBtn'))) {
                    console.log('Create button clicked via delegation!');
                    e.preventDefault();
                    e.stopPropagation();
                    this.handleMobileLabelCreate();
                }
                
                // 檢查是否點擊了取消按鈕或其子元素
                if (e.target && (e.target.id === 'mobileLabelCancelBtn' || e.target.closest('#mobileLabelCancelBtn'))) {
                    console.log('Cancel button clicked via delegation!');
                    e.preventDefault();
                    e.stopPropagation();
                    this.closeMobileLabelModal();
                }
            });
            
            console.log('Label creation button event delegation set up');
        },
        
        // 處理移動端標籤創建
        handleMobileLabelCreate: function() {
            console.log('handleMobileLabelCreate called');
            const inspectionNoInput = document.getElementById('mobileLabelInspectionNo');
            console.log('Inspection no input found:', inspectionNoInput);
            
            if (!inspectionNoInput) {
                console.error('Inspection no input not found!');
                return;
            }
            
            const inspectionNo = inspectionNoInput.value.trim();
            console.log('Inspection no value:', inspectionNo);
            
            if (!inspectionNo) {
                console.log('No inspection number provided, showing alert');
                // 要求用戶輸入檢查編號
                alert('請輸入檢查編號');
                inspectionNoInput.focus();
                return;
            } else {
                // 檢查重複
                if (this.isDuplicateInspectionNo(inspectionNo)) {
                    alert('此檢查編號已存在，請使用不同的編號');
                    return;
                }
                
                // 準備標籤數據
                this.pendingMobileLabelData = {
                    inspectionNo: inspectionNo,
                    baseFontSize: this.getCurrentLabelSize()
                };
            }
            
            console.log('Pending label data:', this.pendingMobileLabelData);
            
            // 關閉模態框
            this.closeMobileLabelModal();
            
            // 進入放置模式
            this.enterMobileLabelPlacementMode();
        },
        
        // 檢查重複的檢查編號
        isDuplicateInspectionNo: function(inspectionNo) {
            // 檢查現有標籤
            if (window.labels && window.labels.length > 0) {
                return window.labels.some(label => label.inspectionNo === inspectionNo);
            }
            return false;
        },
        
        // 獲取當前標籤大小
        getCurrentLabelSize: function() {
            const slider = document.getElementById('mobileLabelSizeSlider');
            return slider ? parseInt(slider.value) : 24;
        },
        
        // 關閉移動端標籤模態框
        closeMobileLabelModal: function() {
            const mobileLabelModalOverlay = document.getElementById('mobileLabelModalOverlay');
            if (mobileLabelModalOverlay) {
                mobileLabelModalOverlay.style.display = 'none';
            }
            
            // 清空輸入框
            const inspectionNoInput = document.getElementById('mobileLabelInspectionNo');
            if (inspectionNoInput) {
                inspectionNoInput.value = '';
            }
        },
        
        // 進入移動端標籤放置模式
        enterMobileLabelPlacementMode: function() {
            console.log('enterMobileLabelPlacementMode called');
            if (!this.pendingMobileLabelData) {
                console.error('No pending label data!');
                return;
            }
            
            console.log('Pending label data:', this.pendingMobileLabelData);
            this.isMobileLabelCreationMode = true;
            
            const mobileFloorPlanViewer = document.getElementById('mobileFloorPlanViewer');
            console.log('Floor plan viewer:', mobileFloorPlanViewer);
            
            if (mobileFloorPlanViewer) {
                mobileFloorPlanViewer.style.cursor = 'crosshair';
                mobileFloorPlanViewer.classList.add('creating-label');
                console.log('Cursor set to crosshair, creating-label class added');
            }
            
            // 顯示提示信息
            this.showMobileNotification('點擊平面圖放置標籤', 'info');
            
            // 添加一個簡單的測試按鈕
            const testBtn = document.createElement('button');
            testBtn.textContent = '測試標籤放置';
            testBtn.style.position = 'fixed';
            testBtn.style.top = '100px';
            testBtn.style.right = '20px';
            testBtn.style.zIndex = '20000';
            testBtn.style.padding = '10px';
            testBtn.style.backgroundColor = '#007bff';
            testBtn.style.color = 'white';
            testBtn.style.border = 'none';
            testBtn.style.borderRadius = '5px';
            testBtn.style.cursor = 'pointer';
            
            testBtn.addEventListener('click', (e) => {
                console.log('=== TEST BUTTON CLICKED ===');
                // 模擬在平面圖中心放置標籤
                const rect = mobileFloorPlanViewer.getBoundingClientRect();
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const mockEvent = {
                    clientX: rect.left + centerX,
                    clientY: rect.top + centerY,
                    preventDefault: () => {},
                    stopPropagation: () => {}
                };
                
                console.log('Mock event created:', mockEvent);
                this.handleMobileLabelPlacement(mockEvent);
                
                // 移除測試按鈕
                testBtn.remove();
            });
            
            document.body.appendChild(testBtn);
            console.log('Test button added to page');
            
            // 添加雙擊事件監聽器來放置標籤
            if (mobileFloorPlanViewer) {
                console.log('Adding double-click event listener to:', mobileFloorPlanViewer);
                console.log('Current viewer classes:', mobileFloorPlanViewer.className);
                console.log('Current viewer style:', mobileFloorPlanViewer.style.cssText);
                
                mobileFloorPlanViewer.addEventListener('click', this.handleMobileLabelPlacement.bind(this), { once: true });
                console.log('Click event listener added to floor plan viewer');
                
                // 添加一個簡單的測試雙擊事件監聽器
                mobileFloorPlanViewer.addEventListener('dblclick', (e) => {
                    console.log('=== TEST: Double-click event detected! ===');
                    console.log('Test event:', e);
                }, { once: true });
                
                // 也添加單擊事件監聽器來測試
                mobileFloorPlanViewer.addEventListener('click', (e) => {
                    console.log('=== TEST: Single-click event detected! ===');
                    console.log('Test click event:', e);
                });
                
                // 添加備用的單擊事件處理器（如果雙擊不工作）
                let clickCount = 0;
                let clickTimer = null;
                
                mobileFloorPlanViewer.addEventListener('click', (e) => {
                    clickCount++;
                    console.log('Click count:', clickCount);
                    
                    if (clickCount === 1) {
                        clickTimer = setTimeout(() => {
                            console.log('Single click timeout, resetting counter');
                            clickCount = 0;
                        }, 300); // 300ms 內沒有第二次點擊就重置
                    } else if (clickCount === 2) {
                        console.log('Double click detected via single clicks!');
                        clearTimeout(clickTimer);
                        clickCount = 0;
                        
                        // 調用標籤放置函數
                        this.handleMobileLabelPlacement(e);
                    }
                });
                
                // 添加觸摸事件支持（移動端）
                mobileFloorPlanViewer.addEventListener('touchend', (e) => {
                    console.log('=== TEST: Touch event detected! ===');
                    console.log('Touch event:', e);
                    
                    // 模擬雙擊
                    clickCount++;
                    console.log('Touch count:', clickCount);
                    
                    if (clickCount === 1) {
                        clickTimer = setTimeout(() => {
                            console.log('Touch timeout, resetting counter');
                            clickCount = 0;
                        }, 300);
                    } else if (clickCount === 2) {
                        console.log('Double touch detected!');
                        clearTimeout(clickTimer);
                        clickCount = 0;
                        
                        // 調用標籤放置函數
                        this.handleMobileLabelPlacement(e);
                    }
                });
                
                // 測試雙擊事件是否被正確綁定
                setTimeout(() => {
                    console.log('Testing double-click event binding...');
                    // 添加一個簡單的測試雙擊事件
                    const testDblClick = new Event('dblclick', { bubbles: true, cancelable: true });
                    console.log('Test double-click event created:', testDblClick);
                    
                    // 測試手動觸發雙擊事件
                    console.log('Manually triggering double-click event...');
                    mobileFloorPlanViewer.dispatchEvent(testDblClick);
                }, 100);
            } else {
                console.error('Floor plan viewer not found!');
            }
        },
        
        // 處理移動端標籤放置
        handleMobileLabelPlacement: function(e) {
            console.log('=== handleMobileLabelPlacement called ===');
            console.log('Event type:', e.type);
            console.log('isMobileLabelCreationMode:', this.isMobileLabelCreationMode);
            console.log('pendingMobileLabelData:', this.pendingMobileLabelData);
            console.log('Event target:', e.target);
            console.log('Event currentTarget:', e.currentTarget);
            
            if (!this.isMobileLabelCreationMode || !this.pendingMobileLabelData) {
                console.log('Conditions not met, returning');
                console.log('isMobileLabelCreationMode:', this.isMobileLabelCreationMode);
                console.log('pendingMobileLabelData:', this.pendingMobileLabelData);
                return;
            }
            
            e.preventDefault();
            e.stopPropagation();
            
            const mobileFloorPlanViewer = document.getElementById('mobileFloorPlanViewer');
            console.log('Floor plan viewer:', mobileFloorPlanViewer);
            if (!mobileFloorPlanViewer) {
                console.error('Floor plan viewer not found!');
                return;
            }
            
            // 獲取點擊位置
            const rect = mobileFloorPlanViewer.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            console.log('Click position:', { clickX, clickY });
            console.log('Viewer rect:', rect);
            
            // 獲取 Canvas 的變換信息
            const canvas = document.getElementById('mobileFloorPlanCanvas');
            const canvasTransform = canvas.style.transform;
            console.log('Canvas transform:', canvasTransform);
            
            // 解析變換信息
            let scale = 1;
            let translateX = 0;
            let translateY = 0;
            
            if (canvasTransform && canvasTransform !== 'none') {
                const transformMatch = canvasTransform.match(/translate\(([^,]+),\s*([^)]+)\)\s*scale\(([^)]+)\)/);
                if (transformMatch) {
                    translateX = parseFloat(transformMatch[1]);
                    translateY = parseFloat(transformMatch[2]);
                    scale = parseFloat(transformMatch[3]);
                }
            }
            
            console.log('Transform values:', { scale, translateX, translateY });
            
            // 轉換為畫布座標（與桌面版一致）
            // scale 已經包含了 initialDisplayScale，所以直接使用
            const canvasX = (clickX - translateX) / scale;
            const canvasY = (clickY - translateY) / scale;
            
            console.log('Canvas coordinates:', { canvasX, canvasY });
            
            // 創建標籤數據
            const labelData = {
                id: Date.now(),
                ...this.pendingMobileLabelData,
                canvasPosition: { x: canvasX, y: canvasY },
                x: clickX,
                y: clickY,
                baseFontSize: this.pendingMobileLabelData.baseFontSize
            };
            console.log('Label data created:', labelData);
            
            // 添加到標籤數組
            if (!window.labels) {
                window.labels = [];
            }
            window.labels.push(labelData);
            console.log('Label added to array, total labels:', window.labels.length);
            
            // 保存到本地存儲
            this.saveMobileLabelsToStorage();
            
            // 創建標籤元素
            this.createMobileLabelElement(labelData);
            
            // 退出創建模式
            this.exitMobileLabelCreationMode();
            
            // 顯示成功消息
            this.showMobileNotification('標籤創建成功！', 'success');
            console.log('=== Label placement completed ===');
        },
        
        // 創建移動端標籤元素（完全複製桌面版）
        createMobileLabelElement: function(labelData) {
            const labelElement = document.createElement('div');
            labelElement.className = 'floor-plan-label';
            
            // 確保標籤顏色為黃色
            labelElement.style.color = '#FFBE00';
            
            // 檢查標籤是否已提交，如果是則添加submitted類（藍色）
            if (labelData.submitted) {
                labelElement.classList.add('submitted');
                labelElement.style.color = '#00A9FF';
            }
            
            // 檢查是否已分配
            if (labelData.assigned) {
                labelElement.classList.add('assigned');
                labelElement.style.color = '#0089FF';
            }
            
            // 設置標籤文字內容 - 只顯示檢查編號，不顯示日期
            let labelText = labelData.inspectionNo || `標籤 ${labelData.id}`;
            labelElement.textContent = labelText;
            labelElement.dataset.labelId = labelData.id;
            
            // 設置基礎字體大小
            const baseFontSize = labelData.baseFontSize || window.labelSizeScale || 24;
            labelElement.style.fontSize = baseFontSize + 'px';
            
            // 設置初始padding值
            labelElement.style.padding = '8px 12px';
            
            // 確保標籤可以接收鼠標事件
            labelElement.style.pointerEvents = 'auto';
            labelElement.style.zIndex = '1000';
            labelElement.style.background = 'transparent';
            labelElement.style.border = 'none';
            
            // 初始位置將由updateAllLabelPositions函數設置
            labelElement.style.left = '0px';
            labelElement.style.top = '0px';
            
            // 添加事件監聽器
            this.setupMobileLabelEvents(labelElement, labelData);
            
            const labelLayer = document.getElementById('mobileLabelLayer');
            if (labelLayer) {
                labelLayer.appendChild(labelElement);
            }
            
            // 立即更新位置
            this.updateSingleMobileLabelPosition(labelElement, labelData);
            
            return labelElement;
        },
        
        // 設置移動端標籤事件（完全複製桌面版）
        setupMobileLabelEvents: function(labelElement, labelData) {
            let isDragging = false;
            let dragStartTimer = null;
            let dragStartData = null;
            
            // 鼠標按下開始拖曳
            labelElement.addEventListener('mousedown', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // 記錄開始的鼠標位置和標籤的畫布座標
                const startMouseX = e.clientX;
                const startMouseY = e.clientY;
                const startCanvasX = labelData.canvasPosition ? labelData.canvasPosition.x : 0;
                const startCanvasY = labelData.canvasPosition ? labelData.canvasPosition.y : 0;
                
                // 添加拖拽準備狀態的視覺反饋
                labelElement.classList.add('drag-preparing');
                
                // 顯示準備拖拽提示
                this.showMobileNotification('Hold for 0.3 seconds to start dragging', 'info');
                
                // 設置0.3秒延遲來開始拖拽
                dragStartTimer = setTimeout(function() {
                    // 移除準備狀態，開始拖拽
                    labelElement.classList.remove('drag-preparing');
                    isDragging = true;
                    labelElement.classList.add('dragging');
                    
                    // 顯示拖拽開始提示
                    this.showMobileNotification('Label drag started - you can now move the label', 'success');
                
                // 添加全域事件監聽器
                const onMouseMove = function(e) {
                    if (!isDragging) return;
                    
                    // 計算鼠標移動的距離（屏幕像素）
                    const deltaX = e.clientX - startMouseX;
                    const deltaY = e.clientY - startMouseY;
                    
                    // 將像素移動距離轉換為畫布座標距離
                    // 使用當前的縮放比例進行轉換
                    const canvasDeltaX = deltaX / (window.currentScale || 1);
                    // 不需要反轉Y軸，因為我們使用的是畫布座標系統
                    const canvasDeltaY = deltaY / (window.currentScale || 1);
                    
                    // 更新標籤的畫布座標
                    if (!labelData.canvasPosition) {
                        labelData.canvasPosition = { x: 0, y: 0 };
                    }
                    labelData.canvasPosition.x = startCanvasX + canvasDeltaX;
                    labelData.canvasPosition.y = startCanvasY + canvasDeltaY;
                    
                    // 立即更新標籤的視覺位置
                    this.updateSingleMobileLabelPosition(labelElement, labelData);
                }.bind(this);
                
                const onMouseUp = function() {
                    isDragging = false;
                    labelElement.classList.remove('dragging');
                    if (typeof window.saveLabelsToStorage === 'function') {
                        window.saveLabelsToStorage();
                    }
                    document.removeEventListener('mousemove', onMouseMove);
                    document.removeEventListener('mouseup', onMouseUp);
                };
                
                document.addEventListener('mousemove', onMouseMove);
                document.addEventListener('mouseup', onMouseUp);
                }, 300); // 0.3秒延遲
                
                // 保存拖拽開始數據，用於取消拖拽
                dragStartData = {
                    startMouseX: startMouseX,
                    startMouseY: startMouseY,
                    startCanvasX: startCanvasX,
                    startCanvasY: startCanvasY
                };
            }.bind(this));
            
            // 鼠標抬起時取消拖拽開始計時器
            labelElement.addEventListener('mouseup', function(e) {
                if (dragStartTimer) {
                    clearTimeout(dragStartTimer);
                    dragStartTimer = null;
                }
                if (dragStartData) {
                    dragStartData = null;
                }
                // 移除拖拽準備狀態
                labelElement.classList.remove('drag-preparing');
            });
            
            // 鼠標離開標籤時取消拖拽開始計時器
            labelElement.addEventListener('mouseleave', function(e) {
                if (dragStartTimer) {
                    clearTimeout(dragStartTimer);
                    dragStartTimer = null;
                }
                if (dragStartData) {
                    dragStartData = null;
                }
                // 移除拖拽準備狀態
                labelElement.classList.remove('drag-preparing');
            });
            
            // 點擊事件（用於編輯）
            labelElement.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // 如果沒有拖拽，則編輯標籤
                if (!isDragging && !dragStartTimer) {
                    this.editMobileLabel(labelData.id);
                }
            }.bind(this));
        },
        
        // 更新單個移動端標籤位置（完全複製桌面版）
        updateSingleMobileLabelPosition: function(labelElement, labelData) {
            if (!labelElement || !labelData) return;
            
            // 檢查是否有畫布座標，如果沒有則創建一個
            if (!labelData.canvasPosition) {
                if (labelData.pdfX !== undefined && labelData.pdfY !== undefined) {
                    // 將PDF座標轉換為畫布座標
                    labelData.canvasPosition = { x: labelData.pdfX, y: labelData.pdfY };
                } else {
                    // 使用舊座標系統
                    labelData.canvasPosition = { x: labelData.x || 0, y: labelData.y || 0 };
                }
            }
            
            // 使用畫布座標（Plan.html方法）
            const canvasX = labelData.canvasPosition.x;
            const canvasY = labelData.canvasPosition.y;
            
            // 計算螢幕座標：畫布座標 * 縮放 + 偏移
            // 需要考慮初始顯示縮放（initialDisplayScale）
            const initialScale = window.initialDisplayScale || 1;
            const userScale = window.currentScale || 1;
            const finalScale = initialScale * userScale;
            
            const screenX = canvasX * finalScale + (window.translateX || 0);
            const screenY = canvasY * finalScale + (window.translateY || 0);
            
            // 計算縮放後的字體大小
            const baseFontSize = labelData.baseFontSize || window.labelSizeScale;
            const scaledFontSize = baseFontSize * finalScale;
            labelElement.style.fontSize = scaledFontSize + 'px';
            
            // 動態更新padding，確保標籤形狀保持固定
            const basePaddingX = 12;
            const basePaddingY = 8;
            
            // 按比例縮放內邊距（使用最終縮放比例）
            const scaledPaddingX = Math.max(4, basePaddingX / finalScale);
            const scaledPaddingY = Math.max(4, basePaddingY / finalScale);
            labelElement.style.padding = `${scaledPaddingY}px ${scaledPaddingX}px`;
            
            // 強制重排以確保尺寸計算正確
            labelElement.offsetHeight;
            
            // 獲取實際尺寸
            const labelWidth = labelElement.offsetWidth;
            const labelHeight = labelElement.offsetHeight;
            
            // 使用實際尺寸，否則估算
            const finalWidth = labelWidth > 0 ? labelWidth : Math.max(100, scaledFontSize * 8);
            const finalHeight = labelHeight > 0 ? labelHeight : Math.max(30, scaledFontSize * 2);
            
            // 定位標籤，使其中心位於計算的點
            labelElement.style.left = (screenX - finalWidth / 2) + 'px';
            labelElement.style.top = (screenY - finalHeight / 2) + 'px';
            
            // 移除transform，因為我們使用手動縮放
            labelElement.style.transform = 'none';
        },
        
        // 更新所有移動端標籤位置（完全複製桌面版）
        updateAllMobileLabelPositions: function() {
            const mobileLabelLayer = document.getElementById('mobileLabelLayer');
            if (!mobileLabelLayer) return;
            
            // 獲取所有標籤元素
            const labelElements = mobileLabelLayer.querySelectorAll('.floor-plan-label');
            
            // 使用 window.labels 而不是局部變量 labels
            const labelsArray = window.labels || [];
            
            labelElements.forEach(labelElement => {
                const labelId = labelElement.dataset.labelId;
                const labelData = labelsArray.find(l => l.id == labelId);
                
                if (labelData) {
                    // 使用統一的位置更新函數，確保中心點定位
                    this.updateSingleMobileLabelPosition(labelElement, labelData);
                }
            });
        },
        
        // 移動端 Canvas 變換應用函數（完全複製桌面版）
        applyMobileTransform: function() {
            const mobileFloorPlanCanvas = document.getElementById('mobileFloorPlanCanvas');
            if (!mobileFloorPlanCanvas) return;
            
            const t = `translate(${window.translateX || 0}px, ${window.translateY || 0}px) scale(${window.currentScale || 1})`;
            mobileFloorPlanCanvas.style.transform = t;
            
            // 立即更新標籤和缺陷標記位置（無延遲）
            if (typeof window.updateAllLabelPositions === 'function') {
                window.updateAllLabelPositions();
            }
        },
        
        // 編輯移動端標籤
        editMobileLabel: function(labelId) {
            const label = window.labels.find(l => l.id === labelId);
            if (label) {
                // 填充模態框
                const inspectionNoInput = document.getElementById('mobileLabelInspectionNo');
                if (inspectionNoInput) {
                    inspectionNoInput.value = label.inspectionNo;
                }
                
                // 打開模態框
                this.openMobileLabelModal();
                
                // 設置編輯模式
                this.editingMobileLabelId = labelId;
            }
        },
        
        // 退出移動端標籤創建模式
        exitMobileLabelCreationMode: function() {
            this.isMobileLabelCreationMode = false;
            this.pendingMobileLabelData = null;
            
            const mobileFloorPlanViewer = document.getElementById('mobileFloorPlanViewer');
            if (mobileFloorPlanViewer) {
                mobileFloorPlanViewer.style.cursor = 'grab';
                mobileFloorPlanViewer.classList.remove('creating-label');
            }
        },
        
        // 保存移動端標籤到存儲（與桌面版使用相同的存儲鍵）
        saveMobileLabelsToStorage: function() {
            try {
                // 使用與桌面版相同的存儲鍵
                localStorage.setItem('pne_labels', JSON.stringify(window.labels || []));
                console.log('Mobile labels saved to storage:', window.labels);
            } catch (error) {
                console.error('保存標籤失敗:', error);
            }
        },
        
        // 從存儲載入移動端標籤（與桌面版使用相同的存儲鍵）
        loadMobileLabelsFromStorage: function() {
            try {
                // 使用與桌面版相同的存儲鍵
                const saved = localStorage.getItem('pne_labels');
                if (saved) {
                    window.labels = JSON.parse(saved);
                    console.log('Mobile labels loaded from storage:', window.labels);
                    this.redrawMobileLabels();
                }
            } catch (error) {
                console.error('載入標籤失敗:', error);
            }
        },
        
        // 重新繪製移動端標籤（與桌面版一致）
        redrawMobileLabels: function() {
            const mobileLabelLayer = document.getElementById('mobileLabelLayer');
            if (!mobileLabelLayer) return;
            
            // 使用 window.labels
            const labelsArray = window.labels || [];
            
            console.log('redrawMobileLabels called. Current labels count:', labelsArray.length);
            
            // 清除所有現有標籤（但保留其他元素）
            const labelElements = mobileLabelLayer.querySelectorAll('.floor-plan-label');
            labelElements.forEach(element => element.remove());
            console.log('Cleared existing labels from mobileLabelLayer');
            
            // 為每個標籤創建DOM元素
            labelsArray.forEach(label => {
                this.createMobileLabelElement(label);
            });
            
            // 更新所有標籤位置
            this.updateAllMobileLabelPositions();
            
            console.log('Mobile labels redraw completed');
        },
        
        // 設置全局函數（完全複製桌面版）
        setupGlobalFunctions: function() {
            // 設置全局的 saveLabelsToStorage 函數
            window.saveLabelsToStorage = () => {
                this.saveMobileLabelsToStorage();
            };
            
            // 設置全局的 redrawLabels 函數
            window.redrawLabels = () => {
                this.redrawMobileLabels();
            };
            
            // 設置全局的 updateAllLabelPositions 函數
            window.updateAllLabelPositions = () => {
                this.updateAllMobileLabelPositions();
            };
            
            // 設置全局的 applyTransform 函數
            window.applyTransform = () => {
                this.applyMobileTransform();
            };
            
            console.log('Global functions set up for mobile');
        },
        
        // 顯示移動端通知
        showMobileNotification: function(message, type = 'info') {
            // 創建通知元素
            const notification = document.createElement('div');
            notification.className = `mobile-notification ${type}`;
            notification.textContent = message;
            notification.style.cssText = `
                position: fixed;
                top: 80px;
                left: 50%;
                transform: translateX(-50%);
                background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
                color: white;
                padding: 12px 24px;
                border-radius: 6px;
                font-size: 14px;
                z-index: 10000;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            document.body.appendChild(notification);
            
            // 顯示動畫
            setTimeout(() => {
                notification.style.opacity = '1';
            }, 100);
            
            // 自動隱藏
            setTimeout(() => {
                notification.style.opacity = '0';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.remove();
                    }
                }, 300);
            }, 3000);
        },
        
        // 設置 Header 按鈕事件
        setupHeaderButtons: function() {
            console.log('Setting up header buttons...');
            
            // 工具按鈕 - 顯示/隱藏工具下拉菜單
            const mobileToolsBtn = document.getElementById('mobileToolsBtn');
            const mobileToolsDropdown = document.getElementById('mobileToolsDropdown');
            
            console.log('MobileToolsBtn found:', !!mobileToolsBtn);
            console.log('MobileToolsDropdown found:', !!mobileToolsDropdown);
            
            if (mobileToolsBtn && mobileToolsDropdown) {
                console.log('Adding event listener to mobileToolsBtn');
                mobileToolsBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    console.log('MobileToolsBtn clicked, current classes:', mobileToolsDropdown.className);
                    console.log('Current style:', mobileToolsDropdown.style.cssText);
                    mobileToolsDropdown.classList.toggle('show');
                    console.log('After toggle, classes:', mobileToolsDropdown.className);
                    console.log('After toggle, style:', mobileToolsDropdown.style.cssText);
                });
                
                // 點擊外部關閉下拉菜單
                document.addEventListener('click', (e) => {
                    if (!mobileToolsBtn.contains(e.target) && !mobileToolsDropdown.contains(e.target)) {
                        mobileToolsDropdown.classList.remove('show');
                    }
                });
                
                // 處理工具菜單項點擊
                const toolItems = mobileToolsDropdown.querySelectorAll('.mobile-tools-item');
                toolItems.forEach(item => {
                    item.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const action = item.getAttribute('data-action');
                        this.handleToolAction(action, item);
                        mobileToolsDropdown.classList.remove('show');
                    });
                });
            }
        },
        
        // 設置 Header 按鈕事件
        setupHeaderButtons: function() {
            console.log('Setting up header buttons...');
            
            // 使用事件委託來處理動態顯示的元素
            document.addEventListener('click', (e) => {
                // 檢查是否點擊了 mobileToolsBtn
                if (e.target.closest('#mobileToolsBtn')) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const mobileToolsDropdown = document.getElementById('mobileToolsDropdown');
                    if (mobileToolsDropdown) {
                        console.log('MobileToolsBtn clicked via delegation');
                        console.log('Current classes:', mobileToolsDropdown.className);
                        console.log('Current style:', mobileToolsDropdown.style.cssText);
                        
                        // 檢查當前是否顯示
                        const isVisible = mobileToolsDropdown.style.opacity === '1';
                        
                        if (isVisible) {
                            // 隱藏下拉菜單
                            mobileToolsDropdown.style.opacity = '0';
                            mobileToolsDropdown.style.visibility = 'hidden';
                            mobileToolsDropdown.style.transform = 'translateY(-10px)';
                            mobileToolsDropdown.classList.remove('show');
                        } else {
                            // 顯示下拉菜單
                            mobileToolsDropdown.style.opacity = '1';
                            mobileToolsDropdown.style.visibility = 'visible';
                            mobileToolsDropdown.style.transform = 'translateY(0)';
                            mobileToolsDropdown.classList.add('show');
                            
                            // 調試信息
                            console.log('Dropdown should be visible now');
                            console.log('Element dimensions:', {
                                width: mobileToolsDropdown.offsetWidth,
                                height: mobileToolsDropdown.offsetHeight,
                                top: mobileToolsDropdown.offsetTop,
                                left: mobileToolsDropdown.offsetLeft
                            });
                            console.log('Element computed style:', {
                                display: window.getComputedStyle(mobileToolsDropdown).display,
                                position: window.getComputedStyle(mobileToolsDropdown).position,
                                zIndex: window.getComputedStyle(mobileToolsDropdown).zIndex
                            });
                        }
                        
                        console.log('After toggle, classes:', mobileToolsDropdown.className);
                        console.log('After toggle, style:', mobileToolsDropdown.style.cssText);
                    }
                }
                
                // 檢查是否點擊了工具菜單項
                if (e.target.closest('.mobile-tools-item')) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const item = e.target.closest('.mobile-tools-item');
                    const action = item.getAttribute('data-action');
                    this.handleToolAction(action, item);
                    
                    const mobileToolsDropdown = document.getElementById('mobileToolsDropdown');
                    if (mobileToolsDropdown) {
                        mobileToolsDropdown.style.opacity = '0';
                        mobileToolsDropdown.style.visibility = 'hidden';
                        mobileToolsDropdown.style.transform = 'translateY(-10px)';
                        mobileToolsDropdown.classList.remove('show');
                    }
                }
                
                // 點擊外部關閉下拉菜單
                if (!e.target.closest('#mobileToolsBtn') && !e.target.closest('#mobileToolsDropdown')) {
                    const mobileToolsDropdown = document.getElementById('mobileToolsDropdown');
                    if (mobileToolsDropdown) {
                        mobileToolsDropdown.style.opacity = '0';
                        mobileToolsDropdown.style.visibility = 'hidden';
                        mobileToolsDropdown.style.transform = 'translateY(-10px)';
                        mobileToolsDropdown.classList.remove('show');
                    }
                }
            });
            
            // Drawing 菜單按鈕
            const drawingMenuBtn = document.getElementById('mobileDrawingMenuBtn');
            if (drawingMenuBtn) {
                drawingMenuBtn.addEventListener('click', () => {
                    // 可以添加 Drawing 相關的菜單功能
                    console.log('Drawing menu clicked');
                });
            }
            
            
            // 設置 PDF 查看器的縮放和平移功能
            this.setupPDFViewerControls();
            
            // 設置 Drawing 區域的按鈕事件
            this.setupDrawingButtons();
            
            // 添加照片按鈕
            const addPhotosBtn = document.getElementById('mobileAddPhotosBtn');
            if (addPhotosBtn) {
                addPhotosBtn.addEventListener('click', () => {
                    const fileInput = document.getElementById('mobileAddPhotosFileInput');
                    if (fileInput) {
                        fileInput.click();
                    }
                });
            }
            
            // 導出按鈕
            const exportBtn = document.getElementById('mobileExportBtn');
            if (exportBtn) {
                exportBtn.addEventListener('click', () => {
                    // 可以添加導出功能
                    console.log('Export clicked');
                    alert('導出功能將在後續版本中實現');
                });
            }
        },
        
        // 設置 PDF 查看器控制功能
        setupPDFViewerControls: function() {
            const viewer = document.getElementById('mobileFloorPlanViewer');
            const canvas = document.getElementById('mobileFloorPlanCanvas');
            const labelLayer = document.getElementById('mobileLabelLayer');
            
            if (!viewer || !canvas) return;
            
            let isPanning = false;
            let startX, startY;
            let scale = 1;
            let translateX = 0;
            let translateY = 0;
            let lastTouchDistance = 0;
            let lastTouchCenter = { x: 0, y: 0 };
            let rafId = null; // 用於 requestAnimationFrame
            
            // 簡化變換更新 - 直接設置，無延遲
            const applyTransform = () => {
                const initialScale = window.initialDisplayScale || 1;
                const finalScale = scale * initialScale;
                const transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${finalScale})`;
                
                // 直接設置 transform（GPU 加速）
                canvas.style.transform = transform;
                if (labelLayer) {
                    labelLayer.style.transform = transform;
                }
            };
            
            // 用於延遲更新全局變數
            let globalUpdateRaf = null;
            const updateGlobalVars = () => {
                if (globalUpdateRaf) cancelAnimationFrame(globalUpdateRaf);
                globalUpdateRaf = requestAnimationFrame(() => {
                    window.currentScale = scale;
                    window.translateX = translateX;
                    window.translateY = translateY;
                    window.mobileCurrentScale = scale;
                    window.mobileTranslateX = translateX;
                    window.mobileTranslateY = translateY;
                    globalUpdateRaf = null;
                });
            };
            
            // 使用節流函數優化標籤更新
            let labelUpdateTimer = null;
            const debouncedLabelUpdate = () => {
                clearTimeout(labelUpdateTimer);
                labelUpdateTimer = setTimeout(() => {
                    this.updateAllMobileLabelPositions();
                }, 50); // 50ms 延遲更新標籤
            };
            
            // 鼠標事件
            viewer.addEventListener('mousedown', (e) => {
                // 在標籤創建模式下禁用拖拽
                if (this.isMobileLabelCreationMode) {
                    console.log('Label creation mode active, skipping panning');
                    return;
                }
                
                if (e.button === 0) { // 左鍵
                    isPanning = true;
                    startX = e.clientX - translateX;
                    startY = e.clientY - translateY;
                    viewer.style.cursor = 'grabbing';
                }
            });
            
            viewer.addEventListener('mousemove', (e) => {
                // 在標籤創建模式下禁用拖拽
                if (this.isMobileLabelCreationMode) {
                    return;
                }
                
                if (isPanning) {
                    translateX = e.clientX - startX;
                    translateY = e.clientY - startY;
                    applyTransform();
                    updateGlobalVars();
                    debouncedLabelUpdate();
                }
            });
            
            viewer.addEventListener('mouseup', () => {
                isPanning = false;
                viewer.style.cursor = 'grab';
            });
            
            viewer.addEventListener('mouseleave', () => {
                isPanning = false;
                viewer.style.cursor = 'grab';
            });
            
            // 滾輪縮放
            viewer.addEventListener('wheel', (e) => {
                e.preventDefault();
                const rect = viewer.getBoundingClientRect();
                const mouseX = e.clientX - rect.left;
                const mouseY = e.clientY - rect.top;
                
                const delta = e.deltaY > 0 ? 0.9 : 1.1;
                const newScale = Math.max(0.5, Math.min(50, scale * delta));
                
                // 以鼠標位置為中心縮放
                const scaleChange = newScale / scale;
                translateX = mouseX - (mouseX - translateX) * scaleChange;
                translateY = mouseY - (mouseY - translateY) * scaleChange;
                scale = newScale;
                
                applyTransform();
                updateGlobalVars();
                debouncedLabelUpdate();
            });
            
            // 觸摸事件
            viewer.addEventListener('touchstart', (e) => {
                e.preventDefault();
                
                if (e.touches.length === 1) {
                    // 單指拖拽
                    isPanning = true;
                    startX = e.touches[0].clientX - translateX;
                    startY = e.touches[0].clientY - translateY;
                } else if (e.touches.length === 2) {
                    // 雙指縮放
                    isPanning = false;
                    const touch1 = e.touches[0];
                    const touch2 = e.touches[1];
                    lastTouchDistance = Math.sqrt(
                        Math.pow(touch2.clientX - touch1.clientX, 2) +
                        Math.pow(touch2.clientY - touch1.clientY, 2)
                    );
                    lastTouchCenter = {
                        x: (touch1.clientX + touch2.clientX) / 2,
                        y: (touch1.clientY + touch2.clientY) / 2
                    };
                }
            });
            
            // 使用 passive: false 但優化事件處理
            viewer.addEventListener('touchmove', (e) => {
                e.preventDefault();
                
                if (e.touches.length === 1 && isPanning) {
                    // 單指拖拽 - 直接更新，不移除舊的 raf
                    translateX = e.touches[0].clientX - startX;
                    translateY = e.touches[0].clientY - startY;
                    applyTransform();
                    updateGlobalVars();
                    debouncedLabelUpdate();
                } else if (e.touches.length === 2) {
                    // 雙指縮放 - 簡化計算
                    const touch1 = e.touches[0];
                    const touch2 = e.touches[1];
                    const dx = touch2.clientX - touch1.clientX;
                    const dy = touch2.clientY - touch1.clientY;
                    const currentDistance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (lastTouchDistance > 0) {
                        const scaleChange = currentDistance / lastTouchDistance;
                        const newScale = Math.max(0.5, Math.min(50, scale * scaleChange));
                        
                        // 以雙指中心為縮放中心
                        const rect = viewer.getBoundingClientRect();
                        const centerX = (touch1.clientX + touch2.clientX) / 2 - rect.left;
                        const centerY = (touch1.clientY + touch2.clientY) / 2 - rect.top;
                        
                        const scaleRatio = newScale / scale;
                        translateX = centerX - (centerX - translateX) * scaleRatio;
                        translateY = centerY - (centerY - translateY) * scaleRatio;
                        scale = newScale;
                        
                        applyTransform();
                        updateGlobalVars();
                        debouncedLabelUpdate();
                    }
                    
                    lastTouchDistance = currentDistance;
                }
            }, { passive: false });
            
            viewer.addEventListener('touchend', (e) => {
                e.preventDefault();
                isPanning = false;
                lastTouchDistance = 0;
            });
            
            // 設置初始游標樣式
            viewer.style.cursor = 'grab';
        },
        
        // 更新 Canvas 變換
        updateCanvasTransform: function(canvas, scale, translateX, translateY) {
            // 獲取初始顯示縮放
            const initialScale = window.initialDisplayScale || 1;
            
            // 組合縮放：用戶縮放 * 初始顯示縮放
            const finalScale = scale * initialScale;
            
            // 使用 translate3d 啟用 GPU 加速
            canvas.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${finalScale})`;
            canvas.style.transformOrigin = '0 0';
            
            // 同步更新標籤層的變換（與桌面版本一致）
            const mobileLabelLayer = document.getElementById('mobileLabelLayer');
            if (mobileLabelLayer) {
                mobileLabelLayer.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${finalScale})`;
                mobileLabelLayer.style.transformOrigin = '0 0';
            }
            
            // 設置全局變量（與桌面版一致）
            window.currentScale = scale;
            window.translateX = translateX;
            window.translateY = translateY;
            
            // 移動端變換參數（用於同步）
            window.mobileCurrentScale = scale;
            window.mobileTranslateX = translateX;
            window.mobileTranslateY = translateY;
            
            // 立即更新標籤位置
            this.updateAllMobileLabelPositions();
        },
        
        // 設置 Drawing 區域的按鈕事件
        setupDrawingButtons: function() {
            // 縮放至100%按鈕
            const zoomTo100Btn = document.getElementById('mobileZoomTo100Btn');
            if (zoomTo100Btn) {
                zoomTo100Btn.addEventListener('click', () => {
                    this.resetPDFZoom();
                });
            }
            
            // 關閉平面圖按鈕
            const closeFloorPlanBtn = document.getElementById('mobileCloseFloorPlanBtn');
            if (closeFloorPlanBtn) {
                closeFloorPlanBtn.addEventListener('click', () => {
                    this.closeFloorPlan();
                });
            }
            
            // Detail 按鈕
            const allLabelsDetailBtn = document.querySelector('[data-action="all-labels-detail"]');
            if (allLabelsDetailBtn) {
                allLabelsDetailBtn.addEventListener('click', () => {
                    this.showAllLabelsDetail();
                });
            }
            
            const allDefectsDetailBtn = document.querySelector('[data-action="all-defects-detail"]');
            if (allDefectsDetailBtn) {
                allDefectsDetailBtn.addEventListener('click', () => {
                    this.showAllDefectsDetail();
                });
            }
            
            // 標籤大小滑塊
            const labelSizeSlider = document.getElementById('mobileLabelSizeSlider');
            if (labelSizeSlider) {
                labelSizeSlider.addEventListener('input', (e) => {
                    this.updateLabelSize(e.target.value);
                });
            }
            
            // 缺陷大小滑塊
            const defectSizeSlider = document.getElementById('mobileDefectSizeSlider');
            if (defectSizeSlider) {
                defectSizeSlider.addEventListener('input', (e) => {
                    this.updateDefectSize(e.target.value);
                });
            }
            
            // Quick Label 開關
            const quickLabelSwitch = document.getElementById('mobileQuickLabelSwitch');
            if (quickLabelSwitch) {
                quickLabelSwitch.addEventListener('change', (e) => {
                    this.toggleQuickLabel(e.target.checked);
                });
            }
        },
        
        // 重置 PDF 縮放
        resetPDFZoom: function() {
            const canvas = document.getElementById('mobileFloorPlanCanvas');
            const labelLayer = document.getElementById('mobileLabelLayer');
            
            // 獲取初始顯示縮放
            const initialScale = window.initialDisplayScale || 1;
            
            if (canvas) {
                canvas.style.transform = `translate(0px, 0px) scale(${initialScale})`;
                canvas.style.transformOrigin = '0 0';
            }
            
            // 同步重置標籤層
            if (labelLayer) {
                labelLayer.style.transform = `translate(0px, 0px) scale(${initialScale})`;
                labelLayer.style.transformOrigin = '0 0';
            }
            
            // 重置全局變量（用戶縮放回到 1）
            window.currentScale = 1;
            window.translateX = 0;
            window.translateY = 0;
            window.mobileCurrentScale = 1;
            window.mobileTranslateX = 0;
            window.mobileTranslateY = 0;
            
            // 更新所有標籤位置
            this.updateAllMobileLabelPositions();
        },
        
        // 關閉平面圖
        closeFloorPlan: function() {
            // 切換回 Home 區域
            this.showSection('home');
            // 更新底部導航
            document.querySelectorAll('.mobile-nav-home, .mobile-nav-drawing, .mobile-nav-photo, .mobile-nav-details').forEach(item => {
                item.classList.remove('active');
            });
            document.querySelector('.mobile-nav-home').classList.add('active');
        },
        
        // 顯示所有標籤詳情
        showAllLabelsDetail: function() {
            alert('所有標籤詳情功能將在後續版本中實現');
        },
        
        // 顯示所有缺陷詳情
        showAllDefectsDetail: function() {
            alert('所有缺陷詳情功能將在後續版本中實現');
        },
        
        // 更新標籤大小
        updateLabelSize: function(size) {
            const sizeValue = document.getElementById('mobileLabelSizeValue');
            if (sizeValue) {
                sizeValue.textContent = size + 'px';
            }
            // 這裡可以添加更新標籤大小的邏輯
        },
        
        // 更新缺陷大小
        updateDefectSize: function(size) {
            const sizeValue = document.getElementById('mobileDefectSizeValue');
            if (sizeValue) {
                sizeValue.textContent = size + 'px';
            }
            // 這裡可以添加更新缺陷大小的邏輯
        },
        
        // 切換快速標籤模式
        toggleQuickLabel: function(enabled) {
            console.log('Quick Label mode:', enabled ? 'enabled' : 'disabled');
            // 這裡可以添加快速標籤模式的邏輯
        },
        
        // 初始化分類網格
        initCategoriesGrid: function() {
            const categoriesGrid = document.getElementById('mobileCategoriesGrid');
            if (!categoriesGrid) return;
            
            const categories = [
                { id: 'a', name: 'A: Exposed structural metalwork', color: '#ff6b6b' },
                { id: 'b', name: 'B: Structural elements', color: '#4ecdc4' },
                { id: 'c', name: 'C: External building elements', color: '#45b7d1' },
                { id: 'd', name: 'D: Suspended objects', color: '#96ceb4' },
                { id: 'e', name: 'E: High level internal finishes', color: '#feca57' },
                { id: 'f', name: 'F: Heavy metal gates/doors', color: '#ff9ff3' },
                { id: 'g', name: 'G: Window and glass louvers', color: '#54a0ff' },
                { id: 'h', name: 'H: Drainage and Plumbing systems', color: '#5f27cd' },
                { id: 'i', name: 'I: Fire safety elements', color: '#00d2d3' },
                { id: 'j', name: 'J: Defects', color: '#ff3838' }
            ];
            
            categoriesGrid.innerHTML = '';
            
            categories.forEach(category => {
                const card = document.createElement('div');
                card.className = 'mobile-category-card';
                card.dataset.category = category.id;
                card.style.borderColor = category.color;
                
                card.innerHTML = `
                    <h4>${category.name}</h4>
                    <div class="mobile-category-count">0</div>
                `;
                
                card.addEventListener('click', () => {
                    this.toggleCategory(card, category.id);
                });
                
                categoriesGrid.appendChild(card);
            });
        },
        
        // 切換分類
        toggleCategory: function(card, categoryId) {
            card.classList.toggle('active');
            console.log('切換分類:', categoryId, card.classList.contains('active'));
        },
        
        // 更新任務計數
        updateTaskCount: function(count) {
            const taskCount = document.getElementById('mobileTaskCount');
            if (taskCount) {
                taskCount.textContent = count;
                taskCount.style.display = count > 0 ? 'inline' : 'none';
            }
        },
        
        // 更新選中照片計數
        updateSelectedCount: function(count) {
            const selectedCount = document.getElementById('mobileSelectedCount');
            if (selectedCount) {
                selectedCount.textContent = count;
            }
        },
        
        // 更新表格計數
        updateTableCount: function(count) {
            const tableCount = document.getElementById('mobileTableCount');
            if (tableCount) {
                tableCount.textContent = `${count} entries`;
            }
        },
        
        // 處理下拉選單動作
        handleDropdownAction: function(action) {
            switch (action) {
                case 'newtask':
                    this.showTaskEntriesModal();
                    break;
                case 'openpne':
                    this.openPneFile();
                    break;
                case 'saveaspne':
                    this.saveAsPneFile();
                    break;
                default:
                    console.log('未知動作:', action);
            }
        },
        
        // 顯示任務條目模態框
        showTaskEntriesModal: function() {
            const modal = document.getElementById('taskEntriesModal');
            if (modal) {
                modal.style.display = 'flex';
            }
        },
        
        // 關閉任務條目模態框
        closeTaskEntriesModal: function() {
            const modal = document.getElementById('taskEntriesModal');
            if (modal) {
                modal.style.display = 'none';
            }
        },
        
        // 在 Home 區域顯示任務信息
        displayTaskInfoInHome: function(taskData) {
            const mobileHomeSection = document.getElementById('mobileHomeSection');
            if (!mobileHomeSection) return;
            
            // 創建或更新任務信息容器
            let taskInfoContainer = document.getElementById('mobileTaskInfoContainer');
            if (!taskInfoContainer) {
                taskInfoContainer = document.createElement('div');
                taskInfoContainer.id = 'mobileTaskInfoContainer';
                taskInfoContainer.className = 'mobile-task-info-container';
                mobileHomeSection.appendChild(taskInfoContainer);
            }
            
            // 格式化日期
            const formatDate = (dateString) => {
                if (!dateString) return '未設定';
                const date = new Date(dateString);
                return date.toLocaleDateString('zh-TW');
            };
            
            // 顯示任務信息
            taskInfoContainer.innerHTML = `
                <div class="mobile-task-info-header">
                    <h3><i class="fas fa-tasks"></i> 當前任務</h3>
                    <button id="mobileTaskEditBtn" class="mobile-task-edit-btn">
                        <i class="fas fa-edit"></i> 編輯
                    </button>
                </div>
                <div class="mobile-task-info-content">
                    <div class="task-info-item">
                        <label>任務名稱:</label>
                        <span>${taskData.name}</span>
                    </div>
                    <div class="task-info-item">
                        <label>位置:</label>
                        <span>${taskData.location || '未設定'}</span>
                    </div>
                    <div class="task-info-item">
                        <label>開始日期:</label>
                        <span>${formatDate(taskData.startDate)}</span>
                    </div>
                    <div class="task-info-item">
                        <label>目標完成日期:</label>
                        <span>${formatDate(taskData.targetDate)}</span>
                    </div>
                    <div class="task-info-item">
                        <label>描述:</label>
                        <span>${taskData.description || '無描述'}</span>
                    </div>
                    <div class="task-info-item">
                        <label>創建時間:</label>
                        <span>${formatDate(taskData.createdAt)}</span>
                    </div>
                </div>
            `;
            
            // 綁定編輯按鈕事件
            const editBtn = document.getElementById('mobileTaskEditBtn');
            if (editBtn) {
                editBtn.addEventListener('click', () => {
                    this.showTaskEntriesModal();
                });
            }
            
            taskInfoContainer.style.display = 'block';
        },
        
        // 保存任務
        saveTask: function() {
            const taskName = document.getElementById('taskName').value;
            const taskLocation = document.getElementById('taskLocation').value;
            const taskStartDate = document.getElementById('taskStartDate').value;
            const taskTargetDate = document.getElementById('taskTargetDate').value;
            const taskDescription = document.getElementById('taskDescription').value;
            
            if (!taskName.trim()) {
                alert('請輸入任務名稱');
                return;
            }
            
            const taskData = {
                name: taskName,
                location: taskLocation,
                startDate: taskStartDate,
                targetDate: taskTargetDate,
                description: taskDescription,
                createdAt: new Date().toISOString()
            };
            
            // 保存到本地存儲
            try {
                localStorage.setItem('mobileTaskData', JSON.stringify(taskData));
                console.log('任務已保存:', taskData);
                
                // 關閉模態框
                this.closeTaskEntriesModal();
                
                // 在 mobile-nav-home 的 mobile-main 中顯示任務信息
                this.displayTaskInfoInHome(taskData);
                
                alert('任務已保存成功！');
            } catch (error) {
                console.error('保存任務失敗:', error);
                alert('保存任務失敗，請重試');
            }
        },
        
        
        // 載入已保存的任務數據
        loadSavedTaskData: function() {
            try {
                const savedTaskData = localStorage.getItem('mobileTaskData');
                if (savedTaskData) {
                    const taskData = JSON.parse(savedTaskData);
                    this.displayTaskInfoInHome(taskData);
                }
            } catch (error) {
                console.error('載入任務數據失敗:', error);
            }
        },
        
        // 處理移動端樓層平面圖上傳按鈕點擊
        handleMobileFloorPlanUpload: function() {
            const mobileFloorPlanFileInput = document.getElementById('mobileFloorPlanFileInput');
            if (mobileFloorPlanFileInput) {
                mobileFloorPlanFileInput.click();
            }
        },
        
        // 處理移動端樓層平面圖文件選擇
        handleMobileFloorPlanFileChange: function(e) {
            const file = e.target.files[0];
            if (file && file.type === 'application/pdf') {
                console.log('選擇的樓層平面圖文件:', file.name);
                this.loadMobilePDFFromFile(file);
            } else {
                alert('請選擇 PDF 文件');
            }
        },
        
        // 載入移動端 PDF 文件
        loadMobilePDFFromFile: async function(file) {
            try {
                // 顯示載入狀態
                const uploadBtn = document.getElementById('mobileUploadFloorPlanBtn');
                if (uploadBtn) {
                    uploadBtn.disabled = true;
                    uploadBtn.style.opacity = '0.5';
                }
                
                // 轉換為 ArrayBuffer 並創建副本
                const arrayBuffer = await file.arrayBuffer();
                const arrayBufferCopy = arrayBuffer.slice(); // 創建副本避免分離
                
                // 載入 PDF
                await this.loadMobilePDFFromArrayBuffer(arrayBufferCopy, file.name);
                
                // 重置按鈕狀態
                if (uploadBtn) {
                    uploadBtn.disabled = false;
                    uploadBtn.style.opacity = '1';
                }
                
                // 切換到 Drawing 區域
                this.showSection('drawing');
                
            } catch (error) {
                console.error('載入 PDF 失敗:', error);
                alert('載入 PDF 失敗: ' + error.message);
                
                // 重置按鈕狀態
                const uploadBtn = document.getElementById('mobileUploadFloorPlanBtn');
                if (uploadBtn) {
                    uploadBtn.disabled = false;
                    uploadBtn.style.opacity = '1';
                }
            }
        },
        
        // 從 ArrayBuffer 載入移動端 PDF（完全複製桌面版）
        loadMobilePDFFromArrayBuffer: async function(arrayBuffer, pdfPath) {
            console.log('🔍 PDF load: Starting loadMobilePDFFromArrayBuffer');
            console.log('🔍 PDF load: ArrayBuffer size:', arrayBuffer.byteLength);
            console.log('🔍 PDF load: PDF path:', pdfPath);
            
            const mobileFloorPlanCanvas = document.getElementById('mobileFloorPlanCanvas');
            const mobileFloorPlanViewer = document.getElementById('mobileFloorPlanViewer');
            const mobileFloorPlanUploadArea = document.getElementById('mobileFloorPlanUploadArea');
            const mobileLabelLayer = document.getElementById('mobileLabelLayer');
            
            console.log('🔍 PDF load: Elements found:', {
                canvas: !!mobileFloorPlanCanvas,
                viewer: !!mobileFloorPlanViewer,
                uploadArea: !!mobileFloorPlanUploadArea,
                labelLayer: !!mobileLabelLayer
            });
            
            if (!mobileFloorPlanCanvas || !mobileFloorPlanViewer) {
                throw new Error('移動端平面圖元素未找到');
            }
            
            // 等待容器尺寸穩定
            await new Promise(resolve => setTimeout(resolve, 100));
            
            // 創建 ArrayBuffer 副本，避免 PDF.js 轉移導致的分離問題
            const arrayBufferForPdf = arrayBuffer.slice();
            const arrayBufferForBase64 = arrayBuffer.slice();
            
            console.log('🔍 PDF load: ArrayBuffer copies created');
            
            // 載入 PDF.js
            if (typeof pdfjsLib === 'undefined') {
                console.log('🔍 PDF load: Loading PDF.js library');
                const script = document.createElement('script');
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
                document.head.appendChild(script);
                await new Promise(resolve => {
                    const checkPdfjs = setInterval(() => {
                        if (window.pdfjsLib) {
                            clearInterval(checkPdfjs);
                            pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
                            resolve();
                        }
                    }, 100);
                });
                console.log('🔍 PDF load: PDF.js library loaded');
            }
            
            console.log('🔍 PDF load: Creating PDF document');
            const pdf = await pdfjsLib.getDocument({
                data: arrayBufferForPdf,
                cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/cmaps/',
                cMapPacked: true
            }).promise;
            
            console.log('🔍 PDF load: PDF document created, pages:', pdf.numPages);
            
            // 獲取第一頁
            const page = await pdf.getPage(1);
            console.log('🔍 PDF load: First page loaded');
            
            // 獲取容器尺寸
            const containerRect = mobileFloorPlanViewer.getBoundingClientRect();
            let containerWidth = containerRect.width;
            let containerHeight = containerRect.height;
            
            console.log('🔍 PDF load: Container dimensions:', { containerWidth, containerHeight });
            
            // 如果容器尺寸為0，使用視窗尺寸作為備用
            if (containerWidth === 0 || containerHeight === 0) {
                containerWidth = window.innerWidth;
                containerHeight = window.innerHeight - 120; // 減去標題欄和底部導航的高度
                console.log('🔍 PDF load: Using window dimensions as fallback:', { containerWidth, containerHeight });
            }
            
            // 設置 canvas 尺寸 - 使用與桌面版本相同的設置
            const baseScale = 1.0;
            const viewport = page.getViewport({ scale: baseScale });
            
            // 計算適合容器的縮放比例，保持寬高比
            const scaleX = containerWidth / viewport.width;
            const scaleY = containerHeight / viewport.height;
            const displayScale = Math.min(scaleX, scaleY); // 完整的縮放比例，不減0.9
            
            // 設置 Canvas 的 CSS 尺寸（顯示尺寸）- 使用完整的 PDF 尺寸
            const cssWidth = Math.floor(viewport.width);
            const cssHeight = Math.floor(viewport.height);
            
            console.log('🔍 PDF load: Scale calculations:', {
                viewportWidth: viewport.width,
                viewportHeight: viewport.height,
                scaleX, scaleY, displayScale,
                cssWidth, cssHeight,
                displayScale: displayScale
            });
            
            mobileFloorPlanCanvas.style.width = cssWidth + 'px';
            mobileFloorPlanCanvas.style.height = cssHeight + 'px';
            mobileFloorPlanCanvas.style.position = 'relative';
            
            // 設置 Canvas 的實際尺寸（渲染尺寸）
            // 移動端使用較低的解析度以確保流暢性
            const devicePixelRatio = window.devicePixelRatio || 1;
            // 為移動端優化：降低解析度以提高性能
            const outputScale = devicePixelRatio > 2 ? 2 : Math.min(1.5, devicePixelRatio);
            
            // 存儲到全局變量，供其他函數使用
            window.outputScale = outputScale;
            
            mobileFloorPlanCanvas.width = Math.floor(cssWidth * outputScale);
            mobileFloorPlanCanvas.height = Math.floor(cssHeight * outputScale);
            
            // 初始化變換狀態 - 使用 displayScale 來適配容器
            mobileFloorPlanCanvas.style.transform = `translate(0px, 0px) scale(${displayScale})`;
            mobileFloorPlanCanvas.style.transformOrigin = '0 0';
            
            // 保存初始縮放狀態
            window.initialDisplayScale = displayScale;
            
            console.log('🔍 PDF load: Canvas dimensions set:', {
                cssWidth, cssHeight,
                canvasWidth: mobileFloorPlanCanvas.width,
                canvasHeight: mobileFloorPlanCanvas.height,
                outputScale
            });
            
            // 設置標籤層尺寸 - 與桌面版本一致，完全與 PDF canvas 相同大小
            if (mobileLabelLayer) {
                mobileLabelLayer.style.width = cssWidth + 'px';
                mobileLabelLayer.style.height = cssHeight + 'px';
                mobileLabelLayer.style.position = 'absolute';
                mobileLabelLayer.style.top = '0';
                mobileLabelLayer.style.left = '0';
                mobileLabelLayer.style.zIndex = '10'; // 確保標籤層在 PDF canvas 前面
                // 同步標籤層的變換
                mobileLabelLayer.style.transform = `translate(0px, 0px) scale(${displayScale})`;
                mobileLabelLayer.style.transformOrigin = '0 0';
                console.log('🔍 PDF load: Label layer dimensions set:', {
                    width: cssWidth,
                    height: cssHeight,
                    zIndex: '10',
                    transform: `scale(${displayScale})`
                });
            }
            
            // 渲染 PDF 到 canvas - 使用與桌面版本相同的設置
            const context = mobileFloorPlanCanvas.getContext('2d');
            
            // 優化高解析度渲染 - 與桌面版本一致
            context.imageSmoothingEnabled = true;
            context.imageSmoothingQuality = 'high';
            
            // 使用原始 viewport（scale = 1.0），與桌面版本一致
            // CSS 縮放通過 transform 處理
            const renderContext = {
                canvasContext: context,
                viewport: viewport,
                transform: outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null
            };
            
            console.log('🔍 PDF load: Starting PDF render with outputScale:', outputScale);
            await page.render(renderContext).promise;
            console.log('🔍 PDF load: PDF render completed');
            
            // 顯示 canvas（在渲染完成後）
            mobileFloorPlanCanvas.style.display = 'block';
            console.log('🔍 PDF load: Canvas displayed');
            
            // 顯示標籤層
            if (mobileLabelLayer) {
                mobileLabelLayer.style.display = 'block';
                console.log('🔍 PDF load: Label layer displayed');
            }
            
            // 顯示 viewer 並隱藏 upload area（與桌面版一致）
            if (mobileFloorPlanUploadArea) {
                mobileFloorPlanUploadArea.style.display = 'none';
                console.log('🔍 PDF load: Upload area hidden');
            }
            mobileFloorPlanViewer.style.display = 'flex';
            console.log('🔍 PDF load: Viewer shown');
            
            // 保存 PDF 數據到 localStorage（使用副本避免分離）
            const base64String = await this.arrayBufferToBase64(arrayBufferForBase64);
            localStorage.setItem('pne_floorplan_base64', base64String);
            localStorage.setItem('pne_floorplan_filename', pdfPath);
            
            console.log('🔍 PDF load: PDF data saved to localStorage');
            console.log('🔍 PDF load: Mobile PDF loaded successfully:', pdfPath);
        },
        
        // ArrayBuffer 轉 Base64
        arrayBufferToBase64: function(arrayBuffer) {
            const bytes = new Uint8Array(arrayBuffer);
            let binary = '';
            for (let i = 0; i < bytes.byteLength; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            return btoa(binary);
        },
        
        // Base64 轉 ArrayBuffer
        base64ToArrayBuffer: function(base64) {
            const binaryString = atob(base64);
            const bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            return bytes.buffer;
        },
        
        // 打開 PNE 檔案（完全複製桌面版）
        openPneFile: function() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.pne,application/json';
            input.style.display = 'none';
            
            input.addEventListener('change', async (e) => {
                if (e.target.files.length > 0) {
                    const file = e.target.files[0];
                    
                    // 設置 PNE 載入標誌
                    window.isPNELoading = true;
                    
                    // 保存PDF base64數據，避免被清除
                    const pdfBase64Data = localStorage.getItem('pne_floorplan_base64');
                    const pdfData = localStorage.getItem('pne_floorplan_data');
                    const pdfFilename = localStorage.getItem('pne_floorplan_filename');
                    
                    // 清除所有 localStorage 數據，避免與 .pne 文件數據衝突
                    console.log('Clearing all localStorage data before loading PNE file...');
                    localStorage.clear();
                    console.log('localStorage cleared successfully');
                    
                    // 恢復PDF數據
                    if (pdfBase64Data) {
                        localStorage.setItem('pne_floorplan_base64', pdfBase64Data);
                        console.log('PDF base64 data preserved');
                    }
                    if (pdfData) {
                        localStorage.setItem('pne_floorplan_data', pdfData);
                        console.log('PDF metadata preserved');
                    }
                    if (pdfFilename) {
                        localStorage.setItem('pne_floorplan_filename', pdfFilename);
                        console.log('PDF filename preserved');
                    }
                    
                    // 重置所有全局變量
                    window.labels = [];
                    window.defectMarks = [];
                    
                    console.log('Global variables reset');
                    
                    const text = await file.text();
                    try {
                        const data = JSON.parse(text);
                        
                        // 還原任務數據
                        if (data.currentTask) {
                            localStorage.setItem('mobileTaskData', JSON.stringify(data.currentTask));
                            this.displayTaskInfoInHome(data.currentTask);
                            console.log('📥 PNE load: Restored current task:', data.currentTask.name);
                        }
                        
                        // 還原標籤數據 - 支持多種數據結構
                        if (data.floorPlanLabels && Array.isArray(data.floorPlanLabels)) {
                            window.labels = data.floorPlanLabels;
                            console.log('📥 PNE load: Restored labels from floorPlanLabels:', window.labels.length);
                        } else if (data.floorPlanData && data.floorPlanData.labels) {
                            window.labels = data.floorPlanData.labels;
                            console.log('📥 PNE load: Restored labels from floorPlanData:', window.labels.length);
                        }
                        
                        // 還原缺陷標記數據 - 支持多種數據結構
                        if (data.floorPlanDefectMarks && Array.isArray(data.floorPlanDefectMarks)) {
                            window.defectMarks = data.floorPlanDefectMarks;
                            console.log('📥 PNE load: Restored defect marks from floorPlanDefectMarks:', window.defectMarks.length);
                        } else if (data.floorPlanData && data.floorPlanData.defectMarks) {
                            window.defectMarks = data.floorPlanData.defectMarks;
                            console.log('📥 PNE load: Restored defect marks from floorPlanData:', window.defectMarks.length);
                        }
                        
                        // 載入平面圖數據 - 支持多種數據結構
                        console.log('🔍 PNE load: Checking for embedded PDF data...');
                        let embeddedPDF = null;
                        
                        // 檢查新的數據結構 (embeddedPDF 直接在根級別)
                        if (data.embeddedPDF && data.embeddedPDF.hasEmbeddedPDF) {
                            embeddedPDF = data.embeddedPDF;
                            console.log('🔍 PNE load: Found embeddedPDF at root level:', embeddedPDF.filename);
                        }
                        // 檢查舊的數據結構 (embeddedPDF 在 floorPlanData 中)
                        else if (data.floorPlanData && data.floorPlanData.embeddedPDF) {
                            embeddedPDF = data.floorPlanData.embeddedPDF;
                            console.log('🔍 PNE load: Found embeddedPDF in floorPlanData:', embeddedPDF.filename);
                        }
                        
                        if (embeddedPDF && embeddedPDF.base64Data) {
                            console.log('🔍 PNE load: Found base64Data, length:', embeddedPDF.base64Data.length);
                            const arrayBuffer = this.base64ToArrayBuffer(embeddedPDF.base64Data);
                            console.log('🔍 PNE load: ArrayBuffer created, size:', arrayBuffer.byteLength);
                            
                            try {
                                await this.loadMobilePDFFromArrayBuffer(arrayBuffer, embeddedPDF.filename);
                                console.log('🔍 PNE load: PDF loaded successfully');
                                
                                // 切換到 Drawing 區域
                                this.showSection('drawing');
                                console.log('🔍 PNE load: Switched to drawing section');
                                
                                // 重新繪製標籤
                                if (window.labels && window.labels.length > 0) {
                                    this.redrawMobileLabels();
                                    console.log('🔍 PNE load: Labels redrawn');
                                }
                                
                                this.showMobileNotification(`PNE 檔案載入成功！\n任務: ${data.currentTask?.name || '未命名'}\n平面圖: ${embeddedPDF.filename}\n標籤: ${window.labels.length} 個`, 'success');
                            } catch (pdfError) {
                                console.error('🔍 PNE load: PDF loading failed:', pdfError);
                                this.showMobileNotification('PDF 載入失敗: ' + pdfError.message, 'error');
                            }
                        } else {
                            console.log('🔍 PNE load: No embedded PDF data found');
                            console.log('🔍 PNE load: Available data keys:', Object.keys(data));
                            this.showMobileNotification('PNE 檔案載入成功！\n任務: ' + (data.currentTask?.name || '未命名') + '\n注意: 此檔案沒有包含平面圖數據', 'info');
                        }
                        
                    } catch (error) {
                        console.error('解析 PNE 檔案失敗:', error);
                        this.showMobileNotification('解析 PNE 檔案失敗: ' + error.message, 'error');
                    } finally {
                        window.isPNELoading = false;
                    }
                }
            });
            
            document.body.appendChild(input);
            input.click();
            document.body.removeChild(input);
        },
        
        // 另存為 PNE 檔案（與桌面版數據結構一致）
        saveAsPneFile: function() {
            try {
                // 收集數據 - 使用與桌面版一致的結構
                const pneData = {
                    version: '7.1.0',
                    exportDate: new Date().toISOString(),
                    lastSaved: new Date().toISOString(),
                    
                    // 任務數據
                    currentTask: this.getCurrentTaskData(),
                    
                    // 樓層平面圖數據
                    floorPlanLabels: window.labels || [],
                    floorPlanDefectMarks: window.defectMarks || [],
                    
                    // 嵌入的 PDF 數據
                    embeddedPDF: this.getFloorPlanData()
                };
                
                // 創建下載鏈接
                const blob = new Blob([JSON.stringify(pneData, null, 2)], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `planpne_mobile_${new Date().toISOString().split('T')[0]}.pne`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                
                this.showMobileNotification('PNE 檔案已保存！', 'success');
                
            } catch (error) {
                console.error('保存 PNE 檔案失敗:', error);
                this.showMobileNotification('保存 PNE 檔案失敗: ' + error.message, 'error');
            }
        },
        
        // 獲取當前任務數據
        getCurrentTaskData: function() {
            try {
                const savedTaskData = localStorage.getItem('mobileTaskData');
                return savedTaskData ? JSON.parse(savedTaskData) : null;
            } catch (error) {
                console.error('獲取任務數據失敗:', error);
                return null;
            }
        },
        
        // 獲取平面圖數據
        getFloorPlanData: function() {
            try {
                // 使用與桌面版一致的 localStorage 鍵名
                const base64Data = localStorage.getItem('pne_floorplan_base64');
                const filename = localStorage.getItem('pne_floorplan_filename');
                
                if (base64Data && filename) {
                    return {
                        filename: filename,
                        base64Data: base64Data,
                        hasEmbeddedPDF: true,
                        size: base64Data.length
                    };
                }
                return null;
            } catch (error) {
                console.error('獲取平面圖數據失敗:', error);
                return null;
            }
        }
    };
    
    // 頁面載入完成後初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            MobileApp.init();
        });
    } else {
        MobileApp.init();
    }
    
    // 導出到全局
    window.MobileApp = MobileApp;
    
})();
