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
        
        // 切換PNE菜單
        togglePneMenu: function() {
            const dropdown = document.getElementById('mobileDropdown');
            if (dropdown) {
                dropdown.classList.toggle('show');
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
        
        // 打開 PNE 檔案
        openPneFile: function() {
            console.log('打開 PNE 檔案功能');
            alert('打開 PNE 檔案功能將在後續版本中實現');
        },
        
        // 另存為 PNE 檔案
        saveAsPneFile: function() {
            console.log('另存為 PNE 檔案功能');
            alert('另存為 PNE 檔案功能將在後續版本中實現');
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
            if (file) {
                console.log('選擇的樓層平面圖文件:', file.name);
                // 這裡可以實現文件處理邏輯
                // 暫時顯示一個提示
                alert(`已選擇文件: ${file.name}\n樓層平面圖功能將在後續版本中完全實現`);
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
