// Language system
const languages = {
    'zh-TW': {
        // Header
        'sortToggleText': '排序照片到文件夾',
        'languageToggleText': '中文繁體',
        
        // Table headers
        'defectNo': '缺陷編號',
        'inspectionNo': '檢查編號',
        'imminentDanger': '緊急危險',
        'inspectionDate': '檢查日期',
        'floor': '樓層',
        'areaName': '區域名稱',
        'roomNo': '房間編號',
        'photoNumbers': '照片編號',
        'categories': '分類',
        'defectType': '缺陷類型',
        'description': '描述',
        'remedialWorks': '修復工程',
        'action': '操作',
        
        // Labels table headers
        'labelInspectionNo': '檢查編號',
        'labelInspectionDate': '檢查日期',
        'labelFloor': '樓層',
        'labelAreaName': '區域名稱',
        'labelRoomNo': '房間編號',
        'labelCategoryA': '分類A',
        'labelCategoryB': '分類B',
        'labelCategoryC': '分類C',
        'labelCategoryD': '分類D',
        'labelCategoryE': '分類E',
        'labelCategoryF': '分類F',
        'labelCategoryG': '分類G',
        'labelCategoryH': '分類H',
        'labelCategoryI': '分類I',
        'labelCategoryJ': '分類J',
        'labelDefects': '缺陷',
        
        // Buttons
        'submit': '提交',
        'delete': '刪除',
        'save': '保存',
        'cancel': '取消',
        'close': '關閉',
        'add': '添加',
        'edit': '編輯',
        'assign': '分配',
        'create': '創建',
        'update': '更新',
        
        // Messages
        'dataSubmitted': '數據已提交到標籤詳細表格！',
        'defectDeleted': '缺陷記錄已刪除',
        'labelDeleted': '標籤記錄已刪除',
        'recordUpdated': '記錄已更新',
        'recordCreated': '記錄已創建',
        'confirmDelete': '確定要刪除這個記錄嗎？',
        'noData': '暫無數據',
        'loading': '載入中...',
        'success': '成功',
        'error': '錯誤',
        'warning': '警告',
        'info': '信息',
        
        // Form labels
        'inspectionNoLabel': '檢查編號',
        'inspectionDateLabel': '檢查日期',
        'floorLabel': '樓層',
        'areaNameLabel': '區域名稱',
        'roomNoLabel': '房間編號',
        'defectNoLabel': '缺陷編號',
        'imminentDangerLabel': '緊急危險',
        'photoNumbersLabel': '照片編號',
        'categoriesLabel': '分類',
        'defectTypeLabel': '缺陷類型',
        'descriptionLabel': '描述',
        'remedialWorksLabel': '修復工程',
        
        // Modal titles
        'defectForm': '缺陷表單',
        'labelForm': '標籤表單',
        'defectsDetail': '缺陷詳細',
        'labelsDetail': '標籤詳細',
        
        // Status
        'yes': '是',
        'no': '否',
        'assigned': '已分配',
        'unassigned': '未分配',
        'submitted': '已提交',
        'pending': '待處理',
        'defectRenumbered': '缺陷編號已重新排列',
        'defectDeleted': '缺陷記錄已刪除',
        'labelDeleted': '標籤記錄已刪除',
        
        // HTML attributes and placeholders
        'openFloorPlan': '開啟樓層平面圖',
        'sortPhotosToFolder': '排序照片到文件夾',
        'languageSwitch': '語言切換',
        'enterInspectionNumber': '輸入檢查編號',
        'enterFloor': '輸入樓層',
        'enterAreaName': '輸入區域名稱',
        'enterRoomNumber': '輸入房間編號',
        'photoZoomControl': '照片縮放控制',
        'submitToTable': '提交到表格',
        'clearAllCategories': '清除所有分類',
        'allLabelsDetail': '所有標籤詳細',
        'allDefectsDetail': '所有缺陷詳細',
        'imminentDangerSwitch': '緊急危險開關',
        'enterInspectionDate': '輸入檢查日期',
        'autoAssignedFromDefectSummary': '從缺陷摘要自動分配',
        'selectedPhotoNumbers': '選中的照片編號',
        'selectCategory': '選擇分類',
        'enterDefectTypeDirectly': '直接輸入缺陷類型或從下拉選單選擇',
        'searchDefectTypes': '搜索缺陷類型...',
        'clearSearch': '清除搜索',
        'enterDescription': '輸入描述',
        'selectCondition': '選擇條件',
        'enterHumidity': '輸入濕度',
        'enterMoistureContent': '輸入水分含量',
        'enterChlorideContent': '輸入氯化物含量',
        'enterCarbonationDetails': '輸入碳化詳情',
        'enterRemedialWorks': '輸入修復工程',
        'enterPreventiveWorks': '輸入預防性工程',
        'enterRemarks': '輸入備註',
        'close': '關閉',
        'resizePhoto': '調整照片大小',
        'photoPreview': '照片預覽',
        'addPhotos': '添加照片',
        'selectedPhotos': '已選擇',
        'photos': '張照片',
        'defectForm': '缺陷表單',
        'labelsDetail': '標籤詳細',
        'defectsDetail': '缺陷詳細',
        'inspectionNo': '檢查編號',
        'inspectionDate': '檢查日期',
        'floor': '樓層',
        'areaName': '區域名稱',
        'roomNo': '房間編號',
        'defectNo': '缺陷編號',
        'photoNo': '照片編號',
        'categories': '分類',
        'defectType': '缺陷類型',
        'description': '描述',
        'existingCondition': '現有條件',
        'humidity': '濕度',
        'moistureContent': '水分含量',
        'chlorideContent': '氯化物含量',
        'carbonationDetails': '碳化詳情',
        'remedialWorks': '修復工程',
        'preventiveWorks': '預防性工程',
        'remarks': '備註',
        'imminentDanger': '緊急危險',
        'yes': '是',
        'no': '否',
        'selectFolderToPreviewPhotos': '選擇文件夾以預覽照片',
        'selectPhotoFolder': '選擇照片文件夾',
        
        // Section titles
        'assignToCategories': '分配到分類',
        'inspectionRecords': '檢查記錄',
        'defectSummary': '缺陷摘要',
        'categoriesRecords': '分類記錄',
        
        // Inspection Records table headers
        'inspectionNoHeader': '檢查編號',
        'inspectionDateHeader': '檢查日期',
        'locationHeader': '位置（樓層、區域名稱和房間編號順序）',
        'categoryAHeader': 'A: 外露結構金屬件',
        'categoryBHeader': 'B: 結構元素',
        'categoryCHeader': 'C: 外部建築元素',
        'categoryDHeader': 'D: 懸掛物件',
        'categoryEHeader': 'E: 高層內部裝修',
        'categoryFHeader': 'F: 重型金屬門/閘門',
        'categoryGHeader': 'G: 窗戶和玻璃百葉',
        'categoryHHeader': 'H: 排水和管道系統',
        'categoryIHeader': 'I: 消防安全元素',
        'categoryJHeader': 'J: 缺陷',
        
        // Defect Summary table headers
        'defectNoHeader': '缺陷編號',
        'defectWithImminentDangerHeader': '缺陷（緊急危險 是/否）後續行動見A.5部分',
        'locationsOfDefectsHeader': '缺陷位置（樓層、區域名稱和房間編號順序）',
        'typeOfHighRiskBuildingElementsHeader': '高風險建築元素類型',
        'descriptionConstructionHeader': '描述/高風險建築元素構造',
        'existingConditionHeader': '高風險建築元素現有條件',
        'defectsDiagnosisHeader': '缺陷診斷和識別',
        'relativeHumidityHeader': '現場檢查期間測量的房間/區域相對濕度',
        'moistureContentHeader': '僅混凝土結構元素的水分含量',
        'chlorideContentHeader': '混凝土結構元素的氯化物含量',
        'depthExtentCarbonationHeader': '混凝土結構元素的碳化深度和範圍',
        'scopeExtentRepairHeader': '建議後續修復工程的範圍和程度',
        'scopeExtentPreventiveHeader': '建議預防性維護工程的範圍和程度',
        'remarksHeader': '備註',
        
        // Labels Detail table headers
        'actionsHeader': '操作',
        'inspectionNoHeaderLabels': '檢查編號',
        'floorHeaderLabels': '樓層',
        'areaNameHeaderLabels': '區域名稱',
        'roomNoHeaderLabels': '房間編號',
        'inspectionDateHeaderLabels': '檢查日期',
        'categoryAHeaderLabels': 'A: 外露結構金屬件',
        'categoryBHeaderLabels': 'B: 結構元素',
        'categoryCHeaderLabels': 'C: 外部建築元素',
        'categoryDHeaderLabels': 'D: 懸掛物件',
        'categoryEHeaderLabels': 'E: 高層內部裝修',
        'categoryFHeaderLabels': 'F: 重型金屬門/閘門',
        'categoryGHeaderLabels': 'G: 窗戶和玻璃百葉',
        'categoryHHeaderLabels': 'H: 排水和管道系統',
        'categoryIHeaderLabels': 'I: 消防安全元素',
        'categoryJHeaderLabels': 'J: 缺陷',
        
        // Defects Detail table headers
        'actionsHeaderDefects': '操作',
        'defectNoHeaderDefects': '缺陷編號',
        'inspectionNoHeaderDefects': '檢查編號',
        'imminentDangerHeaderDefects': '緊急危險',
        'inspectionDateHeaderDefects': '檢查日期',
        'floorHeaderDefects': '樓層',
        'areaNameHeaderDefects': '區域名稱',
        'roomNoHeaderDefects': '房間編號',
        'photoNumbersHeaderDefects': '照片編號',
        'categoriesHeaderDefects': '分類',
        'defectTypeHeaderDefects': '缺陷類型',
        'descriptionHeaderDefects': '描述',
        'remedialWorksHeaderDefects': '修復工程',
        
        // Category names
        'categoryA': 'A: 外露結構金屬件',
        'categoryB': 'B: 結構元素',
        'categoryC': 'C: 外部建築元素',
        'categoryD': 'D: 懸掛物件',
        'categoryE': 'E: 高層內部裝修',
        'categoryF': 'F: 重型金屬門/閘門',
        'categoryG': 'G: 窗戶和玻璃百葉',
        'categoryH': 'H: 排水和管道系統',
        'categoryI': 'I: 消防安全元素',
        'categoryJ': 'J: 缺陷',
        
        // Category table headers
        'locationNoHeader': '位置編號',
        'roomNoHeader': '房間編號',
        'photoNoHeader': '照片編號',
        'defectsHeader': '缺陷',
        
        // Category table titles
        'categoryTableA': 'A: 外露結構金屬件',
        'categoryTableB': 'B: 結構元素',
        'categoryTableC': 'C: 外部建築元素',
        'categoryTableD': 'D: 懸掛物件',
        'categoryTableE': 'E: 高層內部裝修',
        'categoryTableF': 'F: 重型金屬門/閘門',
        'categoryTableG': 'G: 窗戶和玻璃百葉',
        'categoryTableH': 'H: 排水和管道系統',
        'categoryTableI': 'I: 消防安全元素',
        
        // PNE dropdown menu items
        'openDrawingMode': '開啟繪圖模式',
        'selectPhotoFolder': '選擇照片文件夾',
        'openPNEFile': '開啟PNE文件',
        'saveAsPNEFile': '另存為PNE文件',
        'exportCSV': '匯出CSV',
        'defectsReport': '缺陷報告',
        'photoAssignmentSummary': '照片分配摘要',
        
        // Floor plan container
        'openFloorPlan': '開啟樓層平面圖',
        'newFloorPlan': '新建樓層平面圖',
        'showDetails': '顯示詳細信息',
        'allLabelsDetail': '所有標籤詳細信息',
        'allDefectsDetail': '所有缺陷詳細信息',
        'clearData': '清除數據',
        'clearAllLabels': '清除所有標籤',
        'clearAllDefectMarks': '清除所有缺陷標記',
        'clearAllLabelsAndDefectMarks': '清除所有標籤和缺陷標記',
        'exportAsPDF': '匯出為PDF',
        'zoomTo100AndCenter': '縮放至100%並居中',
        'close': '關閉',
        'previousFloorPlanDataFound': '發現之前的樓層平面圖數據',
        'clickToUploadPDFFloorPlan': '點擊上傳PDF樓層平面圖',
        'chooseFile': '選擇文件',
        'quickLabelMode': '快速標籤模式',
        'clickToAddLabel': '點擊添加標籤',
        'clickToAddDefect': '點擊添加缺陷',
        
        // Previous floor plan elements
        'previousFloorPlanDataFound': '發現之前的樓層平面圖數據',
        'youHaveLabelDataFromPreviousFloorPlan': '您有來自之前樓層平面圖的標籤數據。要查看和管理這些標籤，請開啟相同的樓層平面圖文件。',
        'previousFile': '之前的文件：',
        'openPreviousFloorPlan': '開啟之前的樓層平面圖',
        
        // Floor plan header
        'floorPlanTitle': '樓層平面圖',
        
        // Detail table containers
        'allLabelsDetailTableContainer': '所有標籤詳細表格',
        'allDefectsDetailTableContainer': '所有缺陷詳細表格',
        
        // Floor plan header
        'drawingMode': '繪圖模式',
        'newFloorPlan': '新建樓層平面圖',
        'exportAsPDF': '匯出為PDF',
        'quickLabel': '快速標籤',
        'doubleClickToPlaceDefectMark': '雙擊平面圖放置缺陷標記',
        'labelSize': '標籤大小',
        'defectSize': '缺陷大小',
        'allLabelsDetail': '所有標籤詳細',
        'allDefectsDetail': '所有缺陷詳細',
        'zoomTo100AndCenter': '縮放至100%並置中',
        'close': '關閉',
        
        // Floor plan content
        'previousFloorPlanDataFound': '發現先前的樓層平面圖數據',
        'previousFloorPlanDataDescription': '您有來自先前樓層平面圖的標籤數據。要查看和管理這些標籤，請開啟相同的樓層平面圖檔案。',
        'previousFile': '先前檔案：',
        'openPreviousFloorPlan': '開啟先前樓層平面圖',
        'clickToUploadPDFFloorPlan': '點擊上傳PDF樓層平面圖',
        'chooseFile': '選擇檔案',
        'doubleClickToPlaceLabel': '雙擊平面圖放置標籤',
        
        // Label modal
        'newLabel': '新建標籤',
        'inspectionNoRequired': '檢查編號 *',
        'floorOptional': '樓層（可選）',
        'areaNameOptional': '區域名稱（可選）',
        'roomNoOptional': '房間編號（可選）',
        'inspectionDateOptional': '檢查日期（可選）',
        'enterFloorNumber': '輸入樓層編號',
        'enterAreaName': '輸入區域名稱',
        'enterRoomNumber': '輸入房間編號',
        'onlyInspectionNoRequired': '* 只需要檢查編號',
        'otherFieldsOptional': '其他欄位為可選，可稍後填寫',
        'cancel': '取消',
        'create': '建立',
        'saveAndAssignToNewRecord': '儲存並指派至新記錄',
        
        // Quick label messages
        'quickLabelModeDisabled': '快速標籤模式已停用',
        
        // Session restore modal
        'restorePreviousSession': '恢復先前的會話？',
        'sessionRestoreDescription': '我們發現了先前儲存的數據和設置。您想要現在開啟它們，還是從空白頁面開始？',
        'previousFloorPlanPDFAndLabels': '先前的樓層平面圖PDF和標籤',
        'previouslyLoadedPhotosAndAssignments': '先前載入的照片和指派',
        'defectEntriesAndViewState': '缺陷條目和檢視狀態',
        'startFresh': '重新開始',
        'openPrevious': '開啟先前'
    },
    'en-GB': {
        // Header
        'sortToggleText': 'Sorting photo to folder',
        'languageToggleText': 'British English',
        
        // Table headers
        'defectNo': 'Defect No.',
        'inspectionNo': 'Inspection No.',
        'imminentDanger': 'Imminent Danger',
        'inspectionDate': 'Inspection Date',
        'floor': 'Floor',
        'areaName': 'Area Name',
        'roomNo': 'Room No.',
        'photoNumbers': 'Photo Numbers',
        'categories': 'Categories',
        'defectType': 'Defect Type',
        'description': 'Description',
        'remedialWorks': 'Remedial Works',
        'action': 'Action',
        
        // Labels table headers
        'labelInspectionNo': 'Inspection No.',
        'labelInspectionDate': 'Inspection Date',
        'labelFloor': 'Floor',
        'labelAreaName': 'Area Name',
        'labelRoomNo': 'Room No.',
        'labelCategoryA': 'Category A',
        'labelCategoryB': 'Category B',
        'labelCategoryC': 'Category C',
        'labelCategoryD': 'Category D',
        'labelCategoryE': 'Category E',
        'labelCategoryF': 'Category F',
        'labelCategoryG': 'Category G',
        'labelCategoryH': 'Category H',
        'labelCategoryI': 'Category I',
        'labelCategoryJ': 'Category J',
        'labelDefects': 'Defects',
        
        // Buttons
        'submit': 'Submit',
        'delete': 'Delete',
        'save': 'Save',
        'cancel': 'Cancel',
        'close': 'Close',
        'add': 'Add',
        'edit': 'Edit',
        'assign': 'Assign',
        'create': 'Create',
        'update': 'Update',
        
        // Messages
        'dataSubmitted': 'Data submitted to labels detail table!',
        'defectDeleted': 'Defect record deleted',
        'labelDeleted': 'Label record deleted',
        'recordUpdated': 'Record updated',
        'recordCreated': 'Record created',
        'confirmDelete': 'Are you sure you want to delete this record?',
        'noData': 'No data available',
        'loading': 'Loading...',
        'success': 'Success',
        'error': 'Error',
        'warning': 'Warning',
        'info': 'Information',
        
        // Form labels
        'inspectionNoLabel': 'Inspection No.',
        'inspectionDateLabel': 'Inspection Date',
        'floorLabel': 'Floor',
        'areaNameLabel': 'Area Name',
        'roomNoLabel': 'Room No.',
        'defectNoLabel': 'Defect No.',
        'imminentDangerLabel': 'Imminent Danger',
        'photoNumbersLabel': 'Photo Numbers',
        'categoriesLabel': 'Categories',
        'defectTypeLabel': 'Defect Type',
        'descriptionLabel': 'Description',
        'remedialWorksLabel': 'Remedial Works',
        
        // Modal titles
        'defectForm': 'Defect Form',
        'labelForm': 'Label Form',
        'defectsDetail': 'Defects Detail',
        'labelsDetail': 'Labels Detail',
        
        // Status
        'yes': 'Yes',
        'no': 'No',
        'assigned': 'Assigned',
        'unassigned': 'Unassigned',
        'submitted': 'Submitted',
        'pending': 'Pending',
        'defectRenumbered': 'Defect numbers have been renumbered',
        'defectDeleted': 'Defect record deleted',
        'labelDeleted': 'Label record deleted',
        
        // HTML attributes and placeholders
        'openFloorPlan': 'Open Floor Plan',
        'sortPhotosToFolder': 'Sort photos to folder',
        'languageSwitch': 'Language switch',
        'enterInspectionNumber': 'Enter inspection number',
        'enterFloor': 'Enter floor',
        'enterAreaName': 'Enter area name',
        'enterRoomNumber': 'Enter room number',
        'photoZoomControl': 'Photo zoom control',
        'submitToTable': 'Submit to table',
        'clearAllCategories': 'Clear all categories',
        'allLabelsDetail': 'All Labels Detail',
        'allDefectsDetail': 'All Defects Detail',
        'imminentDangerSwitch': 'Imminent danger switch',
        'enterInspectionDate': 'Enter inspection date',
        'autoAssignedFromDefectSummary': 'Auto-assigned from defect summary',
        'selectedPhotoNumbers': 'Selected photo numbers',
        'selectCategory': 'Select a category',
        'enterDefectTypeDirectly': 'Enter defect type directly or select from dropdown',
        'searchDefectTypes': 'Search defect types...',
        'clearSearch': 'Clear search',
        'enterDescription': 'Enter description',
        'selectCondition': 'Select condition',
        'enterHumidity': 'Enter humidity',
        'enterMoistureContent': 'Enter moisture content',
        'enterChlorideContent': 'Enter chloride content',
        'enterCarbonationDetails': 'Enter carbonation details',
        'enterRemedialWorks': 'Enter remedial works',
        'enterPreventiveWorks': 'Enter preventive works',
        'enterRemarks': 'Enter remarks',
        'close': 'Close',
        'resizePhoto': 'Resize Photo',
        'photoPreview': 'Photo Preview',
        'addPhotos': 'Add photos',
        'selectedPhotos': 'Selected',
        'photos': 'photos',
        'defectForm': 'Defect Form',
        'labelsDetail': 'Labels Detail',
        'defectsDetail': 'Defects Detail',
        'inspectionNo': 'Inspection No.',
        'inspectionDate': 'Inspection Date',
        'floor': 'Floor',
        'areaName': 'Area Name',
        'roomNo': 'Room No.',
        'defectNo': 'Defect No.',
        'photoNo': 'Photo No.',
        'categories': 'Categories',
        'defectType': 'Defect Type',
        'description': 'Description',
        'existingCondition': 'Existing Condition',
        'humidity': 'Humidity',
        'moistureContent': 'Moisture Content',
        'chlorideContent': 'Chloride Content',
        'carbonationDetails': 'Carbonation Details',
        'remedialWorks': 'Remedial Works',
        'preventiveWorks': 'Preventive Works',
        'remarks': 'Remarks',
        'imminentDanger': 'Imminent Danger',
        'yes': 'Yes',
        'no': 'No',
        'selectFolderToPreviewPhotos': 'Select a folder to preview photos',
        'selectPhotoFolder': 'Select Photo Folder',
        
        // Section titles
        'assignToCategories': 'Assign to Categories',
        'inspectionRecords': 'Inspection Records',
        'defectSummary': 'Defect Summary',
        'categoriesRecords': 'Categories Records',
        
        // Inspection Records table headers
        'inspectionNoHeader': 'Inspection No.',
        'inspectionDateHeader': 'Inspection Date',
        'locationHeader': 'Location (Floor, Area name and Room no. in sequence)',
        'categoryAHeader': 'A: Exposed structural metalwork',
        'categoryBHeader': 'B: Structural elements',
        'categoryCHeader': 'C: External building elements',
        'categoryDHeader': 'D: Suspended objects',
        'categoryEHeader': 'E: High level internal finishes',
        'categoryFHeader': 'F: Heavy metal gates/doors',
        'categoryGHeader': 'G: Window and glass louvers',
        'categoryHHeader': 'H: Drainage and Plumbing systems',
        'categoryIHeader': 'I: Fire safety elements',
        'categoryJHeader': 'J: Defects',
        
        // Defect Summary table headers
        'defectNoHeader': 'Defect No.',
        'defectWithImminentDangerHeader': 'Defect(s) with Imminent Danger (Yes/No) Follow up action at Part A.5',
        'locationsOfDefectsHeader': 'Locations of Defects (Floor, Area Name and Room No. in sequence)',
        'typeOfHighRiskBuildingElementsHeader': 'Type of High Risk Building Elements',
        'descriptionConstructionHeader': 'Description / Construction of High Risk Building Elements',
        'existingConditionHeader': 'Existing Condition of of High Risk Building Elements',
        'defectsDiagnosisHeader': 'Defects Diagnosis and Deficiencies Identified',
        'relativeHumidityHeader': 'Relative Humidity of Room / Area measured during Site Inspection',
        'moistureContentHeader': 'Moisture Content of Concrete Structural Elements only',
        'chlorideContentHeader': 'Chloride Content of Concrete Structural Elements',
        'depthExtentCarbonationHeader': 'Depth and Extent of Carbonation for Concrete Structural Elements',
        'scopeExtentRepairHeader': 'Scope and Extent of Recommended Follow-up Repair Remedial Works',
        'scopeExtentPreventiveHeader': 'Scope and Extent of Recommended Preventive Maintenance Works',
        'remarksHeader': 'Remarks',
        
        // Labels Detail table headers
        'actionsHeader': 'Actions',
        'inspectionNoHeaderLabels': 'Inspection No.',
        'floorHeaderLabels': 'Floor',
        'areaNameHeaderLabels': 'Area Name',
        'roomNoHeaderLabels': 'Room No.',
        'inspectionDateHeaderLabels': 'Inspection Date',
        'categoryAHeaderLabels': 'A: Exposed structural metalwork',
        'categoryBHeaderLabels': 'B: Structural elements',
        'categoryCHeaderLabels': 'C: External building elements',
        'categoryDHeaderLabels': 'D: Suspended objects',
        'categoryEHeaderLabels': 'E: High level internal finishes',
        'categoryFHeaderLabels': 'F: Heavy metal gates/doors',
        'categoryGHeaderLabels': 'G: Window and glass louvers',
        'categoryHHeaderLabels': 'H: Drainage and Plumbing systems',
        'categoryIHeaderLabels': 'I: Fire safety elements',
        'categoryJHeaderLabels': 'J: Defects',
        
        // Defects Detail table headers
        'actionsHeaderDefects': 'Actions',
        'defectNoHeaderDefects': 'Defect No.',
        'inspectionNoHeaderDefects': 'Inspection No.',
        'imminentDangerHeaderDefects': 'Imminent Danger',
        'inspectionDateHeaderDefects': 'Inspection Date',
        'floorHeaderDefects': 'Floor',
        'areaNameHeaderDefects': 'Area Name',
        'roomNoHeaderDefects': 'Room No.',
        'photoNumbersHeaderDefects': 'Photo Numbers',
        'categoriesHeaderDefects': 'Categories',
        'defectTypeHeaderDefects': 'Defect Type',
        'descriptionHeaderDefects': 'Description',
        'remedialWorksHeaderDefects': 'Remedial Works',
        
        // Category names
        'categoryA': 'A: Exposed structural metalwork',
        'categoryB': 'B: Structural elements',
        'categoryC': 'C: External building elements',
        'categoryD': 'D: Suspended objects',
        'categoryE': 'E: High level internal finishes',
        'categoryF': 'F: Heavy metal gates/doors',
        'categoryG': 'G: Window and glass louvers',
        'categoryH': 'H: Drainage and Plumbing systems',
        'categoryI': 'I: Fire safety elements',
        'categoryJ': 'J: Defects',
        
        // Category table headers
        'locationNoHeader': 'Location No.',
        'roomNoHeader': 'Room No.',
        'photoNoHeader': 'Photo No.',
        'defectsHeader': 'Defects',
        
        // Category table titles
        'categoryTableA': 'A: Exposed structural metalwork',
        'categoryTableB': 'B: Structural elements',
        'categoryTableC': 'C: External building elements',
        'categoryTableD': 'D: Suspended objects',
        'categoryTableE': 'E: High level internal finishes',
        'categoryTableF': 'F: Heavy metal gates/doors',
        'categoryTableG': 'G: Window and glass louvers',
        'categoryTableH': 'H: Drainage and Plumbing systems',
        'categoryTableI': 'I: Fire safety elements',
        
        // PNE dropdown menu items
        'openDrawingMode': 'Open drawing mode',
        'selectPhotoFolder': 'Select Photo Folder',
        'openPNEFile': 'Open PNE file',
        'saveAsPNEFile': 'Save as PNE file',
        'exportCSV': 'Export CSV',
        'defectsReport': 'Defects Report',
        'photoAssignmentSummary': 'Photo Assignment Summary',
        
        // Floor plan container
        'openFloorPlan': 'Open Floor Plan',
        'newFloorPlan': 'New Floor Plan',
        'showDetails': 'Show Details',
        'allLabelsDetail': 'All Labels Detail',
        'allDefectsDetail': 'All Defects Detail',
        'clearData': 'Clear Data',
        'clearAllLabels': 'Clear All Labels',
        'clearAllDefectMarks': 'Clear All Defect Marks',
        'clearAllLabelsAndDefectMarks': 'Clear All Labels & Defect Marks',
        'exportAsPDF': 'Export as PDF',
        'zoomTo100AndCenter': 'Zoom to 100% and center',
        'close': 'Close',
        'previousFloorPlanDataFound': 'Previous Floor Plan Data Found',
        'clickToUploadPDFFloorPlan': 'Click to upload PDF floor plan',
        'chooseFile': 'Choose File',
        'quickLabelMode': 'Quick Label Mode',
        'clickToAddLabel': 'Click to add label',
        'clickToAddDefect': 'Click to add defect',
        
        // Previous floor plan elements
        'previousFloorPlanDataFound': 'Previous Floor Plan Data Found',
        'youHaveLabelDataFromPreviousFloorPlan': 'You have label data from a previous floor plan. To view and manage these labels, please open the same floor plan file.',
        'previousFile': 'Previous file:',
        'openPreviousFloorPlan': 'Open Previous Floor Plan',
        
        // Floor plan header
        'floorPlanTitle': 'Floor Plan',
        
        // Detail table containers
        'allLabelsDetailTableContainer': 'All Labels Detail Table',
        'allDefectsDetailTableContainer': 'All Defects Detail Table',
        
        // Floor plan header
        'drawingMode': 'Drawing mode',
        'newFloorPlan': 'New Floor Plan',
        'exportAsPDF': 'Export as PDF',
        'quickLabel': 'Quick Label',
        'doubleClickToPlaceDefectMark': 'Double-click to place defect mark',
        'labelSize': 'Label size',
        'defectSize': 'Defect size',
        'allLabelsDetail': 'All Labels Detail',
        'allDefectsDetail': 'All Defects Detail',
        'zoomTo100AndCenter': 'Zoom to 100% and center',
        'close': 'Close',
        
        // Floor plan content
        'previousFloorPlanDataFound': 'Previous Floor Plan Data Found',
        'previousFloorPlanDataDescription': 'You have label data from a previous floor plan. To view and manage these labels, please open the same floor plan file.',
        'previousFile': 'Previous file:',
        'openPreviousFloorPlan': 'Open Previous Floor Plan',
        'clickToUploadPDFFloorPlan': 'Click to upload PDF floor plan',
        'chooseFile': 'Choose File',
        'doubleClickToPlaceLabel': 'Double-click to place label',
        
        // Label modal
        'newLabel': 'New Label',
        'inspectionNoRequired': 'Inspection no. *',
        'floorOptional': 'Floor (Optional)',
        'areaNameOptional': 'Area name (Optional)',
        'roomNoOptional': 'Room no. (Optional)',
        'inspectionDateOptional': 'Inspection date (Optional)',
        'enterFloorNumber': 'Enter floor number',
        'enterAreaName': 'Enter area name',
        'enterRoomNumber': 'Enter room number',
        'onlyInspectionNoRequired': '* Only Inspection No. is required',
        'otherFieldsOptional': 'Other fields are optional and can be filled later',
        'cancel': 'Cancel',
        'create': 'Create',
        'saveAndAssignToNewRecord': 'Save and Assign to New Record',
        
        // Quick label messages
        'quickLabelModeDisabled': 'Quick Label mode disabled',
        
        // Session restore modal
        'restorePreviousSession': 'Restore previous session?',
        'sessionRestoreDescription': 'We found previously saved data and settings. Would you like to open them now, or start with an empty page?',
        'previousFloorPlanPDFAndLabels': 'Previous floor plan PDF and labels',
        'previouslyLoadedPhotosAndAssignments': 'Previously loaded photos and assignments',
        'defectEntriesAndViewState': 'Defect entries and view state',
        'startFresh': 'Start fresh',
        'openPrevious': 'Open previous'
    }
};

let currentLanguage = 'zh-TW'; // Default language

// Language functions
function getText(key) {
    return languages[currentLanguage][key] || key;
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
    updateAllTexts();
}

function updateAllTexts() {
    // Update header texts
    const sortToggleText = document.getElementById('sortToggleText');
    const languageToggleText = document.getElementById('languageToggleText');
    
    if (sortToggleText) {
        sortToggleText.textContent = getText('sortToggleText');
    }
    if (languageToggleText) {
        languageToggleText.textContent = getText('languageToggleText');
    }
    
    // Update HTML attributes
    updateHTMLAttributes();
    
    // Update table headers
    updateTableHeaders();
    
    // Update button texts
    updateButtonTexts();
    
    // Update modal texts
    updateModalTexts();
    
    // Update form labels
    updateFormLabels();
    
    // Update placeholders
    updatePlaceholders();
    
    // Update other texts
    updateOtherTexts();
    
    // Update floor plan header texts
    updateFloorPlanHeaderTexts();
}

function updateTableHeaders() {
    // Update defects detail table headers
    const defectsTable = document.getElementById('defectsDetailTable');
    if (defectsTable) {
        const headers = defectsTable.querySelectorAll('th');
        const headerKeys = ['action', 'defectNo', 'inspectionNo', 'imminentDanger', 'inspectionDate', 'floor', 'areaName', 'roomNo', 'photoNumbers', 'categories', 'defectType', 'description', 'remedialWorks'];
        
        headers.forEach((header, index) => {
            if (headerKeys[index]) {
                header.textContent = getText(headerKeys[index]);
            }
        });
    }
    
    // Update labels detail table headers
    const labelsTable = document.getElementById('labelsDetailTable');
    if (labelsTable) {
        const headers = labelsTable.querySelectorAll('th');
        const headerKeys = ['action', 'labelInspectionNo', 'labelInspectionDate', 'labelFloor', 'labelAreaName', 'labelRoomNo', 'labelCategoryA', 'labelCategoryB', 'labelCategoryC', 'labelCategoryD', 'labelCategoryE', 'labelCategoryF', 'labelCategoryG', 'labelCategoryH', 'labelCategoryI', 'labelCategoryJ', 'labelDefects'];
        
        headers.forEach((header, index) => {
            if (headerKeys[index]) {
                header.textContent = getText(headerKeys[index]);
            }
        });
    }
}

function updateButtonTexts() {
    // Update specific button texts
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.textContent = getText('submitToTable');
    }
    
    const clearBtn = document.getElementById('clearBtn');
    if (clearBtn) {
        clearBtn.innerHTML = `<i class="fas fa-eraser"></i> ${getText('clearAllCategories')}`;
    }
    
    const addPhotosBtn = document.getElementById('addPhotosBtn');
    if (addPhotosBtn) {
        addPhotosBtn.textContent = getText('addPhotos');
    }
    
    const labelsDetailBtn = document.querySelector('[data-action="all-labels-detail"]');
    if (labelsDetailBtn) {
        labelsDetailBtn.innerHTML = `<i class="fas fa-list-alt"></i> ${getText('allLabelsDetail')}`;
    }
    
    const defectsDetailBtn = document.querySelector('[data-action="all-defects-detail"]');
    if (defectsDetailBtn) {
        defectsDetailBtn.innerHTML = `<i class="fas fa-clipboard-list"></i> ${getText('allDefectsDetail')}`;
    }
    
    // Update close buttons
    const closeButtons = document.querySelectorAll('.detail-popup-close, .resize-photo-close');
    closeButtons.forEach(btn => {
        btn.title = getText('close');
    });
    
    // Update common button texts
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        const text = button.textContent.trim();
        if (text === '提交' || text === 'Submit') {
            button.textContent = getText('submit');
        } else if (text === '刪除' || text === 'Delete') {
            button.textContent = getText('delete');
        } else if (text === '保存' || text === 'Save') {
            button.textContent = getText('save');
        } else if (text === '取消' || text === 'Cancel') {
            button.textContent = getText('cancel');
        } else if (text === '關閉' || text === 'Close') {
            button.textContent = getText('close');
        }
    });
}

function updateModalTexts() {
    // Update modal titles
    const modals = document.querySelectorAll('.modal-title, .modal-header h4, .modal-header h3');
    modals.forEach(modal => {
        const text = modal.textContent.trim();
        if (text.includes('缺陷') || text.includes('Defect')) {
            modal.textContent = getText('defectForm');
        } else if (text.includes('標籤') || text.includes('Label')) {
            modal.textContent = getText('labelForm');
        }
    });
}

function updateHTMLAttributes() {
    // Update title attributes
    const floorplanThumb = document.getElementById('floorplanThumb');
    if (floorplanThumb) {
        floorplanThumb.title = getText('openFloorPlan');
    }
    
    // Update aria-label attributes
    const sortToggle = document.querySelector('.sort-toggle');
    if (sortToggle) {
        sortToggle.setAttribute('aria-label', getText('sortPhotosToFolder'));
    }
    
    const languageToggle = document.querySelector('.language-toggle');
    if (languageToggle) {
        languageToggle.setAttribute('aria-label', getText('languageSwitch'));
    }
    
    // Update button aria-labels
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.setAttribute('aria-label', getText('submitToTable'));
    }
    
    const clearBtn = document.getElementById('clearBtn');
    if (clearBtn) {
        clearBtn.setAttribute('aria-label', getText('clearAllCategories'));
    }
    
    const labelsDetailBtn = document.querySelector('[data-action="all-labels-detail"]');
    if (labelsDetailBtn) {
        labelsDetailBtn.setAttribute('aria-label', getText('allLabelsDetail'));
    }
    
    const defectsDetailBtn = document.querySelector('[data-action="all-defects-detail"]');
    if (defectsDetailBtn) {
        defectsDetailBtn.setAttribute('aria-label', getText('allDefectsDetail'));
    }
    
    const imminentDangerSwitch = document.getElementById('imminentDangerSwitch');
    if (imminentDangerSwitch) {
        imminentDangerSwitch.setAttribute('aria-label', getText('imminentDangerSwitch'));
    }
    
    const zoomSliderElement = document.getElementById('zoomSlider');
    if (zoomSliderElement) {
        zoomSliderElement.setAttribute('aria-label', getText('photoZoomControl'));
    }
}

function updateFormLabels() {
    // Update header field labels
    const locationIdLabel = document.querySelector('label[for="locationId"]');
    if (locationIdLabel) {
        locationIdLabel.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${getText('inspectionNo')}`;
    }
    
    const inspectionDateLabel = document.querySelector('label[for="inspectionDate"]');
    if (inspectionDateLabel) {
        inspectionDateLabel.innerHTML = `<i class="fas fa-calendar-check"></i> ${getText('inspectionDate')}`;
    }
    
    const floorLabel = document.querySelector('label[for="floorHeader"]');
    if (floorLabel) {
        floorLabel.innerHTML = `<i class="fas fa-layer-group"></i> ${getText('floor')}`;
    }
    
    const areaNameLabel = document.querySelector('label[for="areaNameHeader"]');
    if (areaNameLabel) {
        areaNameLabel.innerHTML = `<i class="fas fa-map"></i> ${getText('areaName')}`;
    }
    
    const roomNoLabel = document.querySelector('label[for="roomNo"]');
    if (roomNoLabel) {
        roomNoLabel.innerHTML = `<i class="fas fa-door-closed"></i> ${getText('roomNo')}`;
    }
    
    // Update defect form labels
    const defectInspectionNoLabel = document.querySelector('label[for="defectInspectionNo"]');
    if (defectInspectionNoLabel) {
        defectInspectionNoLabel.textContent = getText('inspectionNo');
    }
    
    const inspectionDateDefectLabel = document.querySelector('label[for="inspectionDateDefect"]');
    if (inspectionDateDefectLabel) {
        inspectionDateDefectLabel.textContent = getText('inspectionDate');
    }
    
    const defectFloorLabel = document.querySelector('label[for="defectFloor"]');
    if (defectFloorLabel) {
        defectFloorLabel.textContent = getText('floor');
    }
    
    const defectAreaNameLabel = document.querySelector('label[for="defectAreaName"]');
    if (defectAreaNameLabel) {
        defectAreaNameLabel.textContent = getText('areaName');
    }
    
    const defectRoomNoLabel = document.querySelector('label[for="defectRoomNo"]');
    if (defectRoomNoLabel) {
        defectRoomNoLabel.textContent = getText('roomNo');
    }
    
    const defectNoLabel = document.querySelector('label[for="defectNo"]');
    if (defectNoLabel) {
        defectNoLabel.textContent = getText('defectNo');
    }
    
    const defectPhotoNoLabel = document.querySelector('label[for="defectPhotoNo"]');
    if (defectPhotoNoLabel) {
        defectPhotoNoLabel.textContent = getText('photoNo');
    }
    
    const defectCategoryLabel = document.querySelector('label[for="defectCategory"]');
    if (defectCategoryLabel) {
        defectCategoryLabel.textContent = getText('categories');
    }
    
    const defectDescriptionLabel = document.querySelector('label[for="defectDescription"]');
    if (defectDescriptionLabel) {
        defectDescriptionLabel.textContent = getText('description');
    }
    
    const defectExistingConditionLabel = document.querySelector('label[for="defectExistingCondition"]');
    if (defectExistingConditionLabel) {
        defectExistingConditionLabel.textContent = getText('existingCondition');
    }
    
    const defectHumidityLabel = document.querySelector('label[for="defectHumidity"]');
    if (defectHumidityLabel) {
        defectHumidityLabel.textContent = getText('humidity');
    }
    
    const defectMoistureLabel = document.querySelector('label[for="defectMoisture"]');
    if (defectMoistureLabel) {
        defectMoistureLabel.textContent = getText('moistureContent');
    }
    
    const defectChlorideLabel = document.querySelector('label[for="defectChloride"]');
    if (defectChlorideLabel) {
        defectChlorideLabel.textContent = getText('chlorideContent');
    }
    
    const defectCarbonationLabel = document.querySelector('label[for="defectCarbonation"]');
    if (defectCarbonationLabel) {
        defectCarbonationLabel.textContent = getText('carbonationDetails');
    }
    
    const defectRemedialWorksLabel = document.querySelector('label[for="defectRemedialWorks"]');
    if (defectRemedialWorksLabel) {
        defectRemedialWorksLabel.textContent = getText('remedialWorks');
    }
    
    const defectPreventiveWorksLabel = document.querySelector('label[for="defectPreventiveWorks"]');
    if (defectPreventiveWorksLabel) {
        defectPreventiveWorksLabel.textContent = getText('preventiveWorks');
    }
    
    const defectRemarksLabel = document.querySelector('label[for="defectRemarks"]');
    if (defectRemarksLabel) {
        defectRemarksLabel.textContent = getText('remarks');
    }
}

function updatePlaceholders() {
    // Update header field placeholders
    const locationId = document.getElementById('locationId');
    if (locationId) {
        locationId.placeholder = getText('enterInspectionNumber');
    }
    
    const floorHeader = document.getElementById('floorHeader');
    if (floorHeader) {
        floorHeader.placeholder = getText('enterFloor');
    }
    
    const areaNameHeader = document.getElementById('areaNameHeader');
    if (areaNameHeader) {
        areaNameHeader.placeholder = getText('enterAreaName');
    }
    
    const roomNo = document.getElementById('roomNo');
    if (roomNo) {
        roomNo.placeholder = getText('enterRoomNumber');
    }
    
    // Update defect form placeholders
    const defectInspectionNo = document.getElementById('defectInspectionNo');
    if (defectInspectionNo) {
        defectInspectionNo.placeholder = getText('enterInspectionNumber');
    }
    
    const inspectionDateDefect = document.getElementById('inspectionDateDefect');
    if (inspectionDateDefect) {
        inspectionDateDefect.placeholder = getText('enterInspectionDate');
    }
    
    const defectFloor = document.getElementById('defectFloor');
    if (defectFloor) {
        defectFloor.placeholder = getText('enterFloor');
    }
    
    const defectAreaName = document.getElementById('defectAreaName');
    if (defectAreaName) {
        defectAreaName.placeholder = getText('enterAreaName');
    }
    
    const defectRoomNo = document.getElementById('defectRoomNo');
    if (defectRoomNo) {
        defectRoomNo.placeholder = getText('enterRoomNumber');
    }
    
    const defectNo = document.getElementById('defectNo');
    if (defectNo) {
        defectNo.placeholder = getText('autoAssignedFromDefectSummary');
    }
    
    const defectPhotoNo = document.getElementById('defectPhotoNo');
    if (defectPhotoNo) {
        defectPhotoNo.placeholder = getText('selectedPhotoNumbers');
    }
    
    const defectTypeDirectInput = document.getElementById('defectTypeDirectInput');
    if (defectTypeDirectInput) {
        defectTypeDirectInput.placeholder = getText('enterDefectTypeDirectly');
    }
    
    const defectSearchInput = document.getElementById('defectSearchInput');
    if (defectSearchInput) {
        defectSearchInput.placeholder = getText('searchDefectTypes');
    }
    
    const defectDescription = document.getElementById('defectDescription');
    if (defectDescription) {
        defectDescription.placeholder = getText('enterDescription');
    }
    
    const defectHumidity = document.getElementById('defectHumidity');
    if (defectHumidity) {
        defectHumidity.placeholder = getText('enterHumidity');
    }
    
    const defectMoisture = document.getElementById('defectMoisture');
    if (defectMoisture) {
        defectMoisture.placeholder = getText('enterMoistureContent');
    }
    
    const defectChloride = document.getElementById('defectChloride');
    if (defectChloride) {
        defectChloride.placeholder = getText('enterChlorideContent');
    }
    
    const defectCarbonation = document.getElementById('defectCarbonation');
    if (defectCarbonation) {
        defectCarbonation.placeholder = getText('enterCarbonationDetails');
    }
    
    const defectRemedialWorks = document.getElementById('defectRemedialWorks');
    if (defectRemedialWorks) {
        defectRemedialWorks.placeholder = getText('enterRemedialWorks');
    }
    
    const defectPreventiveWorks = document.getElementById('defectPreventiveWorks');
    if (defectPreventiveWorks) {
        defectPreventiveWorks.placeholder = getText('enterPreventiveWorks');
    }
    
    const defectRemarks = document.getElementById('defectRemarks');
    if (defectRemarks) {
        defectRemarks.placeholder = getText('enterRemarks');
    }
}

function updateOtherTexts() {
    // Update photo preview title - preserve Add photos button
    const photoPreviewTitle = document.getElementById('photo-preview-title');
    if (photoPreviewTitle) {
        // Find the camera icon and update only the text content
        const cameraIcon = photoPreviewTitle.querySelector('i.fas.fa-camera');
        if (cameraIcon) {
            // Update the text node after the icon
            const textNode = cameraIcon.nextSibling;
            if (textNode && textNode.nodeType === Node.TEXT_NODE) {
                textNode.textContent = ` ${getText('photoPreview')}`;
            } else {
                // If no text node exists, create one
                photoPreviewTitle.insertBefore(document.createTextNode(` ${getText('photoPreview')}`), cameraIcon.nextSibling);
            }
        } else {
            // Fallback: if icon not found, update the entire content but preserve Add photos button
            const addPhotosBtn = photoPreviewTitle.querySelector('#addPhotosBtn');
            if (addPhotosBtn) {
                // Store the button temporarily
                const buttonHTML = addPhotosBtn.outerHTML;
                photoPreviewTitle.innerHTML = `<i class="fas fa-camera"></i> ${getText('photoPreview')} ${buttonHTML}`;
            } else {
                photoPreviewTitle.innerHTML = `<i class="fas fa-camera"></i> ${getText('photoPreview')}`;
            }
        }
    }
    
    // Update photo count text - preserve zoom controls
    const photoCount = document.querySelector('.photo-count');
    if (photoCount) {
        // Store the zoom controls before updating
        const zoomControls = photoCount.querySelector('.zoom-controls');
        const zoomControlsHTML = zoomControls ? zoomControls.outerHTML : '';
        
        // Update the text content while preserving zoom controls
        photoCount.innerHTML = `${getText('selectedPhotos')}: <span id="selectedCount">0</span> ${getText('photos')} ${zoomControlsHTML}`;
    }
    
    // Update empty preview text
    const emptyPreview = document.querySelector('.empty-preview p');
    if (emptyPreview) {
        emptyPreview.textContent = getText('selectFolderToPreviewPhotos');
    }
    
    // Update select folder button
    const centerFolderBtn = document.getElementById('centerFolderBtn');
    if (centerFolderBtn) {
        centerFolderBtn.innerHTML = `<i class="fas fa-folder-open"></i> ${getText('selectPhotoFolder')}`;
    }
    
    // Update modal titles
    const resizePhotoTitle = document.querySelector('#resizePhotoWindow h3');
    if (resizePhotoTitle) {
        resizePhotoTitle.innerHTML = `<i class="fas fa-expand-arrows-alt"></i> ${getText('resizePhoto')}`;
    }
    
    const labelsDetailTitle = document.querySelector('#labelsDetailPopup h3');
    if (labelsDetailTitle) {
        labelsDetailTitle.innerHTML = `<i class="fas fa-list-alt"></i> ${getText('labelsDetail')}`;
    }
    
    const defectsDetailTitle = document.querySelector('#defectsDetailPopup h3');
    if (defectsDetailTitle) {
        defectsDetailTitle.innerHTML = `<i class="fas fa-clipboard-list"></i> ${getText('defectsDetail')}`;
    }
    
    // Update dropdown items
    const labelsDetailDropdown = document.querySelector('[data-action="all-labels-detail"]');
    if (labelsDetailDropdown && labelsDetailDropdown.classList.contains('show-details-dropdown-item')) {
        labelsDetailDropdown.innerHTML = `<i class="fas fa-list-alt"></i> ${getText('allLabelsDetail')}`;
    }
    
    const defectsDetailDropdown = document.querySelector('[data-action="all-defects-detail"]');
    if (defectsDetailDropdown && defectsDetailDropdown.classList.contains('show-details-dropdown-item')) {
        defectsDetailDropdown.innerHTML = `<i class="fas fa-clipboard-list"></i> ${getText('allDefectsDetail')}`;
    }
    
    // Update select option texts
    const defectCategorySelect = document.getElementById('defectCategory');
    if (defectCategorySelect) {
        const selectOption = defectCategorySelect.querySelector('option[value=""]');
        if (selectOption) {
            selectOption.textContent = getText('selectCategory');
        }
    }
    
    const defectExistingConditionSelect = document.getElementById('defectExistingCondition');
    if (defectExistingConditionSelect) {
        const selectOption = defectExistingConditionSelect.querySelector('option[value=""]');
        if (selectOption) {
            selectOption.textContent = getText('selectCondition');
        }
    }
    
    // Update search clear button title
    const searchClearBtn = document.getElementById('searchClearBtn');
    if (searchClearBtn) {
        searchClearBtn.title = getText('clearSearch');
    }
    
    // Update section titles
    updateSectionTitles();
    
    // Update table headers
    updateAllTableHeaders();
    
    // Update category grid and category tables
    updateCategoryGrid();
    updateCategoryTables();
    
    // Update PNE dropdown and floor plan container
    updatePNEDropdown();
    updateFloorPlanContainer();
}

function updateSectionTitles() {
    // Update Categories title
    const categoriesTitle = document.getElementById('categories-title');
    if (categoriesTitle) {
        categoriesTitle.innerHTML = `<i class="fas fa-tags"></i> ${getText('assignToCategories')}`;
    }
    
    // Update Inspection Records title
    const inspectionRecordsTitle = document.getElementById('data-table-title');
    if (inspectionRecordsTitle) {
        inspectionRecordsTitle.innerHTML = `<i class="fas fa-table"></i> ${getText('inspectionRecords')}`;
    }
    
    // Update Defect Summary title
    const defectSummaryTitle = document.getElementById('defect-summary-title');
    if (defectSummaryTitle) {
        defectSummaryTitle.innerHTML = `<i class="fas fa-clipboard-list"></i> ${getText('defectSummary')}`;
    }
    
    // Update Categories Records title
    const categoriesRecordsTitle = document.getElementById('category-tables-title');
    if (categoriesRecordsTitle) {
        categoriesRecordsTitle.textContent = getText('categoriesRecords');
    }
}

function updateAllTableHeaders() {
    // Update Inspection Records table headers
    updateInspectionRecordsTableHeaders();
    
    // Update Defect Summary table headers
    updateDefectSummaryTableHeaders();
    
    // Update Labels Detail table headers
    updateLabelsDetailTableHeaders();
    
    // Update Defects Detail table headers
    updateDefectsDetailTableHeaders();
}

function updateInspectionRecordsTableHeaders() {
    const inspectionRecordsTable = document.querySelector('.data-table[aria-describedby="data-table-title"]');
    if (inspectionRecordsTable) {
        const headers = inspectionRecordsTable.querySelectorAll('th');
        const headerKeys = [
            'inspectionNoHeader',
            'inspectionDateHeader', 
            'locationHeader',
            'categoryAHeader',
            'categoryBHeader',
            'categoryCHeader',
            'categoryDHeader',
            'categoryEHeader',
            'categoryFHeader',
            'categoryGHeader',
            'categoryHHeader',
            'categoryIHeader',
            'categoryJHeader'
        ];
        
        headers.forEach((header, index) => {
            if (headerKeys[index]) {
                header.textContent = getText(headerKeys[index]);
            }
        });
    }
}

function updateDefectSummaryTableHeaders() {
    const defectSummaryTable = document.querySelector('.data-table[aria-describedby="defect-summary-title"]');
    if (defectSummaryTable) {
        const headers = defectSummaryTable.querySelectorAll('th');
        const headerKeys = [
            'defectNoHeader',
            'defectWithImminentDangerHeader',
            'locationsOfDefectsHeader',
            'typeOfHighRiskBuildingElementsHeader',
            'descriptionConstructionHeader',
            'existingConditionHeader',
            'defectsDiagnosisHeader',
            'relativeHumidityHeader',
            'moistureContentHeader',
            'chlorideContentHeader',
            'depthExtentCarbonationHeader',
            'scopeExtentRepairHeader',
            'scopeExtentPreventiveHeader',
            'remarksHeader'
        ];
        
        headers.forEach((header, index) => {
            if (headerKeys[index]) {
                header.textContent = getText(headerKeys[index]);
            }
        });
    }
}

function updateLabelsDetailTableHeaders() {
    const labelsDetailTable = document.getElementById('labelsDetailTable');
    if (labelsDetailTable) {
        const headers = labelsDetailTable.querySelectorAll('th');
        const headerKeys = [
            'actionsHeader',
            'inspectionNoHeaderLabels',
            'floorHeaderLabels',
            'areaNameHeaderLabels',
            'roomNoHeaderLabels',
            'inspectionDateHeaderLabels',
            'categoryAHeaderLabels',
            'categoryBHeaderLabels',
            'categoryCHeaderLabels',
            'categoryDHeaderLabels',
            'categoryEHeaderLabels',
            'categoryFHeaderLabels',
            'categoryGHeaderLabels',
            'categoryHHeaderLabels',
            'categoryIHeaderLabels',
            'categoryJHeaderLabels'
        ];
        
        headers.forEach((header, index) => {
            if (headerKeys[index]) {
                header.textContent = getText(headerKeys[index]);
            }
        });
    }
}

function updateDefectsDetailTableHeaders() {
    const defectsDetailTable = document.getElementById('defectsDetailTable');
    if (defectsDetailTable) {
        const headers = defectsDetailTable.querySelectorAll('th');
        const headerKeys = [
            'actionsHeaderDefects',
            'defectNoHeaderDefects',
            'inspectionNoHeaderDefects',
            'imminentDangerHeaderDefects',
            'inspectionDateHeaderDefects',
            'floorHeaderDefects',
            'areaNameHeaderDefects',
            'roomNoHeaderDefects',
            'photoNumbersHeaderDefects',
            'categoriesHeaderDefects',
            'defectTypeHeaderDefects',
            'descriptionHeaderDefects',
            'remedialWorksHeaderDefects'
        ];
        
        headers.forEach((header, index) => {
            if (headerKeys[index]) {
                header.textContent = getText(headerKeys[index]);
            }
        });
    }
}

function updateCategoryGrid() {
    // Update category headers in the categories grid
    const categoryHeaders = document.querySelectorAll('.category-header-text');
    categoryHeaders.forEach(header => {
        const icon = header.querySelector('i');
        const categoryId = header.parentElement.dataset.category;
        
        if (categoryId && icon) {
            const categoryKey = `category${categoryId.toUpperCase()}`;
            const categoryName = getText(categoryKey);
            header.innerHTML = `<i class="fas ${icon.className.split(' ')[1]}"></i> ${categoryName}`;
        }
    });
}

function updateCategoryTables() {
    // Update category table titles
    const categoryTableTitles = document.querySelectorAll('.category-table-title');
    categoryTableTitles.forEach(title => {
        const icon = title.querySelector('i');
        const tableId = title.parentElement.querySelector('table').id;
        const categoryId = tableId.replace('category-table-', '');
        
        if (categoryId && icon) {
            const categoryKey = `categoryTable${categoryId.toUpperCase()}`;
            const categoryName = getText(categoryKey);
            title.innerHTML = `<i class="fas ${icon.className.split(' ')[1]}"></i> ${categoryName}`;
        }
    });
    
    // Update category table headers
    const categoryTables = document.querySelectorAll('.category-table');
    categoryTables.forEach(table => {
        const headers = table.querySelectorAll('th');
        const headerKeys = [
            'locationNoHeader',
            'roomNoHeader', 
            'photoNoHeader',
            'defectsHeader'
        ];
        
        headers.forEach((header, index) => {
            if (headerKeys[index]) {
                header.textContent = getText(headerKeys[index]);
            }
        });
    });
}

function updatePNEDropdown() {
    // Update PNE dropdown menu items
    const pneDropdownItems = document.querySelectorAll('.pne-dropdown-item');
    pneDropdownItems.forEach(item => {
        const action = item.getAttribute('data-action');
        const icon = item.querySelector('i');
        const iconClass = icon ? icon.className : '';
        
        let textKey = '';
        switch(action) {
            case 'uploadfloorplan':
                textKey = 'openDrawingMode';
                break;
            case 'selectfolder':
                textKey = 'selectPhotoFolder';
                break;
            case 'open':
                textKey = 'openPNEFile';
                break;
            case 'saveas':
                textKey = 'saveAsPNEFile';
                break;
            case 'exportcsv':
                textKey = 'exportCSV';
                break;
            case 'preview':
                textKey = 'defectsReport';
                break;
            case 'summary':
                textKey = 'photoAssignmentSummary';
                break;
        }
        
        if (textKey && icon) {
            item.innerHTML = `<i class="${iconClass}"></i> ${getText(textKey)}`;
        }
    });
}

function updateFloorPlanContainer() {
    // Update floor plan thumbnail title
    const floorplanThumb = document.getElementById('floorplanThumb');
    if (floorplanThumb) {
        floorplanThumb.title = getText('openFloorPlan');
    }
    
    // Update floor plan dropdown menu items
    const floorPlanDropdownItems = document.querySelectorAll('.floor-plan-dropdown-item');
    floorPlanDropdownItems.forEach(item => {
        const action = item.getAttribute('data-action');
        const icon = item.querySelector('i');
        const iconClass = icon ? icon.className : '';
        
        let textKey = '';
        switch(action) {
            case 'new-floor-plan':
                textKey = 'newFloorPlan';
                break;
            case 'show-details':
                textKey = 'showDetails';
                break;
            case 'clear-data':
                textKey = 'clearData';
                break;
            case 'export-to-pdf':
                textKey = 'exportAsPDF';
                break;
        }
        
        if (textKey && icon) {
            // Check if there's a chevron icon (for submenu items)
            const chevron = item.querySelector('.fa-chevron-right');
            if (chevron) {
                item.innerHTML = `<i class="${iconClass}"></i> ${getText(textKey)} <i class="fas fa-chevron-right" style="margin-left: auto; font-size: 12px; pointer-events: none;"></i>`;
            } else {
                item.innerHTML = `<i class="${iconClass}"></i> ${getText(textKey)}`;
            }
        }
    });
    
    // Update show details dropdown items
    const showDetailsDropdownItems = document.querySelectorAll('.show-details-dropdown-item');
    showDetailsDropdownItems.forEach(item => {
        const action = item.getAttribute('data-action');
        const icon = item.querySelector('i');
        const iconClass = icon ? icon.className : '';
        
        let textKey = '';
        switch(action) {
            case 'all-labels-detail':
                textKey = 'allLabelsDetail';
                break;
            case 'all-defects-detail':
                textKey = 'allDefectsDetail';
                break;
        }
        
        if (textKey && icon) {
            item.innerHTML = `<i class="${iconClass}"></i> ${getText(textKey)}`;
        }
    });
    
    // Update clear data dropdown items
    const clearDataDropdownItems = document.querySelectorAll('.clear-data-dropdown-item');
    clearDataDropdownItems.forEach(item => {
        const action = item.getAttribute('data-action');
        const icon = item.querySelector('i');
        const iconClass = icon ? icon.className : '';
        
        let textKey = '';
        switch(action) {
            case 'clear-all-labels':
                textKey = 'clearAllLabels';
                break;
            case 'clear-all-defect-marks':
                textKey = 'clearAllDefectMarks';
                break;
            case 'clear-all-data':
                textKey = 'clearAllLabelsAndDefectMarks';
                break;
        }
        
        if (textKey && icon) {
            item.innerHTML = `<i class="${iconClass}"></i> ${getText(textKey)}`;
        }
    });
    
    // Update floor plan buttons
    const zoomTo100Btn = document.getElementById('zoomTo100Btn');
    if (zoomTo100Btn) {
        zoomTo100Btn.title = getText('zoomTo100AndCenter');
    }
    
    const closeFloorPlanBtn = document.getElementById('closeFloorPlanBtn');
    if (closeFloorPlanBtn) {
        closeFloorPlanBtn.title = getText('close');
    }
    
    // Update floor plan upload area text
    const uploadAreaText = document.querySelector('#floorPlanUploadArea p');
    if (uploadAreaText) {
        uploadAreaText.textContent = getText('clickToUploadPDFFloorPlan');
    }
    
    const uploadBtn = document.getElementById('uploadFloorPlanBtn');
    if (uploadBtn) {
        uploadBtn.textContent = getText('chooseFile');
    }
    
    // Update labels data reminder
    const labelsDataReminder = document.getElementById('labelsDataReminder');
    if (labelsDataReminder) {
        const reminderTitle = labelsDataReminder.querySelector('h4');
        if (reminderTitle) {
            reminderTitle.textContent = getText('previousFloorPlanDataFound');
        }
    }
    
    // Update quick label instruction
    const quickLabelInstruction = document.getElementById('quickLabelInstruction');
    if (quickLabelInstruction) {
        const labelText = quickLabelInstruction.querySelector('.quick-label-text');
        const defectText = quickLabelInstruction.querySelector('.quick-defect-text');
        
        if (labelText) {
            labelText.textContent = getText('clickToAddLabel');
        }
        if (defectText) {
            defectText.textContent = getText('clickToAddDefect');
        }
    }
    
    // Update previous floor plan elements
    updatePreviousFloorPlanElements();
    
    // Update floor plan header
    updateFloorPlanHeader();
    
    // Update detail table containers
    updateDetailTableContainers();
}

function updatePreviousFloorPlanElements() {
    // Update labels data reminder title
    const labelsDataReminder = document.getElementById('labelsDataReminder');
    if (labelsDataReminder) {
        const reminderTitle = labelsDataReminder.querySelector('h4');
        if (reminderTitle) {
            reminderTitle.textContent = getText('previousFloorPlanDataFound');
        }
        
        // Update reminder description
        const reminderDescription = labelsDataReminder.querySelector('p');
        if (reminderDescription) {
            reminderDescription.textContent = getText('youHaveLabelDataFromPreviousFloorPlan');
        }
        
        // Update previous file info
        const previousFileInfo = labelsDataReminder.querySelector('.previous-file-info');
        if (previousFileInfo) {
            const strongElement = previousFileInfo.querySelector('strong');
            if (strongElement) {
                strongElement.textContent = getText('previousFile');
            }
        }
        
        // Update open previous floor plan button
        const openPreviousFloorPlanBtn = document.getElementById('openPreviousFloorPlanBtn');
        if (openPreviousFloorPlanBtn) {
            const icon = openPreviousFloorPlanBtn.querySelector('i');
            const iconClass = icon ? icon.className : '';
            openPreviousFloorPlanBtn.innerHTML = `<i class="${iconClass}"></i> ${getText('openPreviousFloorPlan')}`;
        }
    }
}

function updateFloorPlanHeader() {
    // Update floor plan header title
    const floorPlanHeader = document.querySelector('.floor-plan-header');
    if (floorPlanHeader) {
        const titleElement = floorPlanHeader.querySelector('h3');
        if (titleElement) {
            const icon = titleElement.querySelector('i');
            const iconClass = icon ? icon.className : '';
            titleElement.innerHTML = `<i class="${iconClass}"></i> ${getText('floorPlanTitle')}`;
        }
    }
}

function updateFloorPlanHeaderTexts() {
    // Update floor plan dropdown items
    const newFloorPlanItem = document.querySelector('.floor-plan-dropdown-item[data-action="new-floor-plan"] span[data-text="newFloorPlan"]');
    if (newFloorPlanItem) {
        newFloorPlanItem.textContent = getText('newFloorPlan');
    }
    
    const exportPDFItem = document.querySelector('.floor-plan-dropdown-item[data-action="export-to-pdf"] span[data-text="exportAsPDF"]');
    if (exportPDFItem) {
        exportPDFItem.textContent = getText('exportAsPDF');
    }
    
    // Update drawing mode title
    const drawingModeTitle = document.querySelector('h3 span[data-text="drawingMode"]');
    if (drawingModeTitle) {
        drawingModeTitle.textContent = getText('drawingMode');
    }
    
    // Update quick label text
    const quickLabelText = document.querySelector('.quick-label-switch-container span[data-text="quickLabel"]');
    if (quickLabelText) {
        quickLabelText.textContent = getText('quickLabel');
    }
    
    // Update defect mark instruction
    const defectMarkInstruction = document.querySelector('#defectMarkInstruction span[data-text="doubleClickToPlaceDefectMark"]');
    if (defectMarkInstruction) {
        defectMarkInstruction.textContent = getText('doubleClickToPlaceDefectMark');
    }
    
    // Update label size text
    const labelSizeText = document.querySelector('.zoom-controls span[data-text="labelSize"]');
    if (labelSizeText) {
        labelSizeText.textContent = getText('labelSize');
    }
    
    // Update defect size text
    const defectSizeText = document.querySelector('.zoom-controls span[data-text="defectSize"]');
    if (defectSizeText) {
        defectSizeText.textContent = getText('defectSize');
    }
    
    // Update button titles
    const allLabelsDetailBtn = document.querySelector('.action-btn[data-action="all-labels-detail"]');
    if (allLabelsDetailBtn) {
        allLabelsDetailBtn.title = getText('allLabelsDetail');
    }
    
    const allDefectsDetailBtn = document.querySelector('.action-btn[data-action="all-defects-detail"]');
    if (allDefectsDetailBtn) {
        allDefectsDetailBtn.title = getText('allDefectsDetail');
    }
    
    const zoomTo100Btn = document.querySelector('#zoomTo100Btn');
    if (zoomTo100Btn) {
        zoomTo100Btn.title = getText('zoomTo100AndCenter');
    }
    
    const closeFloorPlanBtn = document.querySelector('#closeFloorPlanBtn');
    if (closeFloorPlanBtn) {
        closeFloorPlanBtn.title = getText('close');
    }
    
    // Update floor plan content texts
    const previousFloorPlanDataFound = document.querySelector('#labelsDataReminder h4[data-text="previousFloorPlanDataFound"]');
    if (previousFloorPlanDataFound) {
        previousFloorPlanDataFound.textContent = getText('previousFloorPlanDataFound');
    }
    
    const previousFloorPlanDataDescription = document.querySelector('#labelsDataReminder p[data-text="previousFloorPlanDataDescription"]');
    if (previousFloorPlanDataDescription) {
        previousFloorPlanDataDescription.textContent = getText('previousFloorPlanDataDescription');
    }
    
    const previousFile = document.querySelector('#labelsDataReminder .previous-file-info strong[data-text="previousFile"]');
    if (previousFile) {
        previousFile.textContent = getText('previousFile');
    }
    
    const openPreviousFloorPlanBtn = document.querySelector('#openPreviousFloorPlanBtn span[data-text="openPreviousFloorPlan"]');
    if (openPreviousFloorPlanBtn) {
        openPreviousFloorPlanBtn.textContent = getText('openPreviousFloorPlan');
    }
    
    const clickToUploadPDFFloorPlan = document.querySelector('#uploadPlaceholder p[data-text="clickToUploadPDFFloorPlan"]');
    if (clickToUploadPDFFloorPlan) {
        clickToUploadPDFFloorPlan.textContent = getText('clickToUploadPDFFloorPlan');
    }
    
    const chooseFileBtn = document.querySelector('#uploadFloorPlanBtn span[data-text="chooseFile"]');
    if (chooseFileBtn) {
        chooseFileBtn.textContent = getText('chooseFile');
    }
    
    // Update quick label instruction
    const quickLabelInstruction = document.querySelector('#quickLabelInstruction span[data-text="doubleClickToPlaceLabel"]');
    if (quickLabelInstruction) {
        quickLabelInstruction.textContent = getText('doubleClickToPlaceLabel');
    }
    
    // Update label modal texts
    const newLabelTitle = document.querySelector('.label-modal-header h4[data-text="newLabel"]');
    if (newLabelTitle) {
        newLabelTitle.textContent = getText('newLabel');
    }
    
    const inspectionNoRequired = document.querySelector('label[data-text="inspectionNoRequired"]');
    if (inspectionNoRequired) {
        inspectionNoRequired.textContent = getText('inspectionNoRequired');
    }
    
    const floorOptional = document.querySelector('label[data-text="floorOptional"]');
    if (floorOptional) {
        floorOptional.textContent = getText('floorOptional');
    }
    
    const areaNameOptional = document.querySelector('label[data-text="areaNameOptional"]');
    if (areaNameOptional) {
        areaNameOptional.textContent = getText('areaNameOptional');
    }
    
    const roomNoOptional = document.querySelector('label[data-text="roomNoOptional"]');
    if (roomNoOptional) {
        roomNoOptional.textContent = getText('roomNoOptional');
    }
    
    const inspectionDateOptional = document.querySelector('label[data-text="inspectionDateOptional"]');
    if (inspectionDateOptional) {
        inspectionDateOptional.textContent = getText('inspectionDateOptional');
    }
    
    // Update placeholders
    const enterFloorNumber = document.querySelector('input[data-placeholder="enterFloorNumber"]');
    if (enterFloorNumber) {
        enterFloorNumber.placeholder = getText('enterFloorNumber');
    }
    
    const enterAreaName = document.querySelector('input[data-placeholder="enterAreaName"]');
    if (enterAreaName) {
        enterAreaName.placeholder = getText('enterAreaName');
    }
    
    const enterRoomNumber = document.querySelector('input[data-placeholder="enterRoomNumber"]');
    if (enterRoomNumber) {
        enterRoomNumber.placeholder = getText('enterRoomNumber');
    }
    
    // Update form notes
    const onlyInspectionNoRequired = document.querySelector('.form-note small[data-text="onlyInspectionNoRequired"]');
    if (onlyInspectionNoRequired) {
        onlyInspectionNoRequired.textContent = getText('onlyInspectionNoRequired');
    }
    
    const otherFieldsOptional = document.querySelector('.form-note small[data-text="otherFieldsOptional"]');
    if (otherFieldsOptional) {
        otherFieldsOptional.textContent = getText('otherFieldsOptional');
    }
    
    // Update buttons
    const labelCancelBtn = document.querySelector('#labelCancelBtn[data-text="cancel"]');
    if (labelCancelBtn) {
        labelCancelBtn.textContent = getText('cancel');
    }
    
    const labelCreateBtn = document.querySelector('#labelCreateBtn[data-text="create"]');
    if (labelCreateBtn) {
        labelCreateBtn.textContent = getText('create');
    }
    
    const assignToNewRecordBtn = document.querySelector('#assignToNewRecordBtn[data-text="saveAndAssignToNewRecord"]');
    if (assignToNewRecordBtn) {
        assignToNewRecordBtn.textContent = getText('saveAndAssignToNewRecord');
    }
    
    // Update session restore modal texts
    const restorePreviousSession = document.querySelector('#sessionRestoreModal h3 span[data-text="restorePreviousSession"]');
    if (restorePreviousSession) {
        restorePreviousSession.textContent = getText('restorePreviousSession');
    }
    
    const sessionRestoreDescription = document.querySelector('#sessionRestoreModal p[data-text="sessionRestoreDescription"]');
    if (sessionRestoreDescription) {
        sessionRestoreDescription.textContent = getText('sessionRestoreDescription');
    }
    
    const previousFloorPlanPDFAndLabels = document.querySelector('#sessionRestoreModal li span[data-text="previousFloorPlanPDFAndLabels"]');
    if (previousFloorPlanPDFAndLabels) {
        previousFloorPlanPDFAndLabels.textContent = getText('previousFloorPlanPDFAndLabels');
    }
    
    const previouslyLoadedPhotosAndAssignments = document.querySelector('#sessionRestoreModal li span[data-text="previouslyLoadedPhotosAndAssignments"]');
    if (previouslyLoadedPhotosAndAssignments) {
        previouslyLoadedPhotosAndAssignments.textContent = getText('previouslyLoadedPhotosAndAssignments');
    }
    
    const defectEntriesAndViewState = document.querySelector('#sessionRestoreModal li span[data-text="defectEntriesAndViewState"]');
    if (defectEntriesAndViewState) {
        defectEntriesAndViewState.textContent = getText('defectEntriesAndViewState');
    }
    
    const startFreshBtn = document.querySelector('#startFreshBtn span[data-text="startFresh"]');
    if (startFreshBtn) {
        startFreshBtn.textContent = getText('startFresh');
    }
    
    const restoreSessionBtn = document.querySelector('#restoreSessionBtn span[data-text="openPrevious"]');
    if (restoreSessionBtn) {
        restoreSessionBtn.textContent = getText('openPrevious');
    }
    
    // Update session language toggle text
    const sessionLanguageToggleText = document.getElementById('sessionLanguageToggleText');
    if (sessionLanguageToggleText) {
        sessionLanguageToggleText.textContent = getText('languageToggleText');
    }
}

function updateDetailTableContainers() {
    // Update all labels detail table container title
    const labelsDetailTableContainer = document.querySelector('[data-action="all-labels-detail"]');
    if (labelsDetailTableContainer) {
        const titleElement = labelsDetailTableContainer.querySelector('.modal-title');
        if (titleElement) {
            titleElement.textContent = getText('allLabelsDetailTableContainer');
        }
    }
    
    // Update all defects detail table container title
    const defectsDetailTableContainer = document.querySelector('[data-action="all-defects-detail"]');
    if (defectsDetailTableContainer) {
        const titleElement = defectsDetailTableContainer.querySelector('.modal-title');
        if (titleElement) {
            titleElement.textContent = getText('allDefectsDetailTableContainer');
        }
    }
}

function initializeLanguageSystem() {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && languages[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    
    // Set initial language toggle state
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageToggle.checked = currentLanguage === 'en-GB';
        
        // Add event listener for language toggle
        languageToggle.addEventListener('change', function() {
            const newLanguage = this.checked ? 'en-GB' : 'zh-TW';
            setLanguage(newLanguage);
        });
    }
    
    // Initialize session restore modal language toggle
    const sessionLanguageToggle = document.getElementById('sessionLanguageToggle');
    if (sessionLanguageToggle) {
        sessionLanguageToggle.checked = currentLanguage === 'en-GB';
        
        // Add event listener for session language toggle
        sessionLanguageToggle.addEventListener('change', function() {
            const newLanguage = this.checked ? 'en-GB' : 'zh-TW';
            setLanguage(newLanguage);
        });
    }
    
    // Update all texts with current language
    updateAllTexts();
    
    window.logger.log('Language system initialized with:', currentLanguage);
}

// 全局函數定義
// 更新所有標籤的大小 - 全局函數
window.updateAllLabelSizes = function() {
    window.logger.log('=== UPDATE ALL LABEL SIZES ===');
    
    // 嘗試獲取 labelLayer
    let labelLayer = window.labelLayer || document.getElementById('labelLayer');
    if (!labelLayer) {
        window.logger.warn('Label layer not found, skipping size update');
        return;
    }
    
    // 確保 labels 變數存在 - 檢查多個可能的來源
    let labels = window.labels;
    if (typeof labels === 'undefined' || !Array.isArray(labels)) {
        // 嘗試從全局變數獲取
        labels = window.labels;
        if (typeof labels === 'undefined' || !Array.isArray(labels)) {
        window.logger.warn('Labels array not found, skipping size update');
        return;
        }
    }
    
    window.logger.log('Found label layer:', labelLayer);
    window.logger.log('Found labels array:', labels.length, 'labels');
    window.logger.log('Current label size scale:', window.labelSizeScale);
    
    const labelElements = labelLayer.querySelectorAll('.floor-plan-label');
    window.logger.log('Found label elements:', labelElements.length);
    labelElements.forEach((labelElement, index) => {
        const labelId = labelElement.dataset.labelId;
        const labelData = labels.find(l => l.id == labelId);
        
        window.logger.log(`Processing label ${index + 1}:`, { labelId, labelData: !!labelData });
        
        if (labelData) {
            // 使用與 updateSingleLabelPosition 相同的中心點計算邏輯
            // 獲取標籤的畫布座標（這是標籤的實際中心點位置）
            const canvasX = labelData.canvasPosition ? labelData.canvasPosition.x : (labelData.x || 0);
            const canvasY = labelData.canvasPosition ? labelData.canvasPosition.y : (labelData.y || 0);
            
            // 計算螢幕中心點位置（與 updateSingleLabelPosition 相同的邏輯）
            const screenCenterX = canvasX * (window.currentScale || 1) + (window.translateX || 0);
            const screenCenterY = canvasY * (window.currentScale || 1) + (window.translateY || 0);
            
            window.logger.log(`Label ${labelId} canvas center:`, { x: canvasX, y: canvasY });
            window.logger.log(`Label ${labelId} screen center:`, { x: screenCenterX, y: screenCenterY });
            
            // 更新標籤數據中的字體大小
            labelData.baseFontSize = window.labelSizeScale;
            // 重新計算縮放後的字體大小
            const scaledFontSize = window.labelSizeScale * (window.currentScale || 1);
            labelElement.style.fontSize = scaledFontSize + 'px';
            
            // 動態更新padding，確保標籤形狀保持固定
            const basePaddingX = 12;
            const basePaddingY = 8;
            const scaledPaddingX = Math.max(4, basePaddingX / (window.currentScale || 1));
            const scaledPaddingY = Math.max(4, basePaddingY / (window.currentScale || 1));
            labelElement.style.padding = `${scaledPaddingY}px ${scaledPaddingX}px`;
            
            window.logger.log(`Updated label ${labelId} font size to:`, scaledFontSize + 'px');
            
            // 等待字體大小更新後重新計算位置
            setTimeout(() => {
                // 獲取更新後的標籤尺寸
                const labelWidth = labelElement.offsetWidth;
                const labelHeight = labelElement.offsetHeight;
                
                // 使用實際尺寸，否則估算
                const finalWidth = labelWidth > 0 ? labelWidth : Math.max(100, scaledFontSize * 8);
                const finalHeight = labelHeight > 0 ? labelHeight : Math.max(30, scaledFontSize * 2);
                
                // 重新定位標籤，使其中心位於計算的點（與 updateSingleLabelPosition 相同的邏輯）
                labelElement.style.left = (screenCenterX - finalWidth / 2) + 'px';
                labelElement.style.top = (screenCenterY - finalHeight / 2) + 'px';
                
                window.logger.log(`Label ${labelId} repositioned to center:`, { 
                    left: labelElement.style.left, 
                    top: labelElement.style.top,
                    center: { x: screenCenterX, y: screenCenterY },
                    dimensions: { width: finalWidth, height: finalHeight }
                });
            }, 10);
        }
    });
    
    // 保存更新後的標籤數據
    if (typeof window.saveLabelsToStorage === 'function') {
        window.saveLabelsToStorage();
    }
    
    window.logger.log('Label size update completed');
};

// 更新所有缺陷標記的大小 - 全局函數
window.updateAllDefectMarkSizes = function() {
    window.logger.log('=== UPDATE ALL DEFECT MARK SIZES ===');
    
    // 嘗試獲取 labelLayer
    let labelLayer = window.labelLayer || document.getElementById('labelLayer');
    if (!labelLayer) {
        window.logger.warn('Label layer not found, skipping size update');
        return;
    }
    
    // 確保 defectMarks 變數存在 - 檢查多個可能的來源
    let defectMarks = window.defectMarks;
    if (typeof defectMarks === 'undefined' || !Array.isArray(defectMarks)) {
        // 嘗試從全局變數獲取
        defectMarks = window.defectMarks;
        if (typeof defectMarks === 'undefined' || !Array.isArray(defectMarks)) {
        window.logger.warn('Defect marks array not found, skipping size update');
        return;
        }
    }
    
    window.logger.log('Found label layer:', labelLayer);
    window.logger.log('Found defect marks array:', defectMarks.length, 'defect marks');
    window.logger.log('Current defect mark size scale:', window.defectMarkSizeScale);
    
    const defectElements = labelLayer.querySelectorAll('.defect-mark-dot, .defect-mark-textbox');
    window.logger.log('Found defect elements:', defectElements.length);
    
    defectElements.forEach((element, index) => {
        const defectId = element.dataset.defectMarkId || element.dataset.defectId;
        const defectData = defectMarks.find(d => d.id == defectId);
        
        window.logger.log(`Processing defect ${index + 1}:`, { defectId, defectData: !!defectData });
        
        if (defectData) {
            // 更新缺陷標記數據中的大小
            defectData.size = window.defectMarkSizeScale;
            
            if (element.classList.contains('defect-mark-dot')) {
                // 更新紅點大小
                const scaledSize = window.defectMarkSizeScale * (window.currentScale || 1);
                const scaledFontSize = Math.max(8, scaledSize * 0.5); // 字體大小為縮放後圓點大小的50%
                element.style.width = scaledSize + 'px';
                element.style.height = scaledSize + 'px';
                element.style.fontSize = scaledFontSize + 'px';
                element.style.borderRadius = (scaledSize / 2) + 'px';
                window.logger.log(`Updated defect dot ${defectId} size to:`, scaledSize + 'px', 'font size:', scaledFontSize + 'px');
            } else if (element.classList.contains('defect-mark-textbox')) {
                // 更新文字框大小
                const scaledSize = window.defectMarkSizeScale * (window.currentScale || 1);
                const scaledFontSize = Math.max(8, scaledSize * 0.4); // 文字框字體大小為縮放後圓點大小的40%
                const scaledPadding = 5 * (window.currentScale || 1); // 縮放 padding
                
                element.style.fontSize = scaledFontSize + 'px';
                element.style.padding = scaledPadding + 'px';
                element.style.borderRadius = '4px';
                element.style.width = 'auto';
                element.style.height = 'auto';
                element.style.minWidth = 'fit-content';
                element.style.minHeight = 'fit-content';
                element.style.display = 'flex';
                element.style.alignItems = 'center';
                element.style.justifyContent = 'center';
                
                window.logger.log(`Updated defect textbox ${defectId} font size to:`, scaledFontSize + 'px');
            }
            
            // 大小更新完成，位置將在後續的 updateAllDefectMarkPositions 中重新計算
        }
    });
    
    // 更新所有缺陷標記的位置和連接線
    setTimeout(() => {
        if (typeof window.updateAllDefectMarkPositions === 'function') {
            window.updateAllDefectMarkPositions();
        }
    }, 50);
    
    // 保存更新後的缺陷標記數據
    if (typeof window.saveDefectMarksToStorage === 'function') {
        window.saveDefectMarksToStorage();
    }
    
    window.logger.log('Defect mark size update completed');
};

// 標籤大小調整功能
window.initLabelSizeAdjustment = function() {
    window.logger.log('=== INITIALIZING LABEL SIZE SLIDER ===');
    const labelSizeSlider = document.getElementById('labelSizeSlider');
    const labelSizeValue = document.getElementById('labelSizeValue');
    
    window.logger.log('Label size slider element:', labelSizeSlider);
    window.logger.log('Label size value element:', labelSizeValue);
    window.logger.log('Floor plan overlay display:', document.getElementById('floorPlanOverlay')?.style.display);
    
    if (!labelSizeSlider || !labelSizeValue) {
        window.logger.log('Label size elements not found:', { slider: !!labelSizeSlider, value: !!labelSizeValue });
        window.logger.log('Retrying in 500ms...');
        setTimeout(() => {
            window.initLabelSizeAdjustment();
        }, 500);
        return;
    }
    
    // 從localStorage載入標籤大小
    const savedLabelSize = localStorage.getItem('pne_label_size_scale');
    if (savedLabelSize) {
        const size = parseInt(savedLabelSize);
        labelSizeSlider.value = size;
        labelSizeValue.textContent = size + 'px';
        window.logger.log('Loaded label size from localStorage:', size + 'px');
    }
    
    // 移除舊的事件監聽器（如果存在）
    if (labelSizeSlider._inputHandler) {
    labelSizeSlider.removeEventListener('input', labelSizeSlider._inputHandler);
    }
    
    // 標籤大小滑動條事件
    labelSizeSlider._inputHandler = function() {
        window.logger.log('Label size slider input event triggered!');
        const size = parseInt(this.value);
        labelSizeValue.textContent = size + 'px';
        
        // 更新全局變量
            window.labelSizeScale = size;
        
        // 保存到localStorage
        localStorage.setItem('pne_label_size_scale', size.toString());
        
        // 更新所有現有標籤的大小
        window.updateAllLabelSizes();
        
        window.logger.log('Label size updated:', size + 'px');
    };
    
    window.logger.log('Adding input event listener to label size slider');
    labelSizeSlider.addEventListener('input', labelSizeSlider._inputHandler);
    window.logger.log('Label size slider event listener added successfully');
    
    window.logger.log('Label size adjustment initialized successfully');
};

// 缺陷標記大小調整功能
window.initDefectMarkSizeAdjustment = function() {
    window.logger.log('=== INITIALIZING DEFECT MARK SIZE SLIDER ===');
    const defectSizeSlider = document.getElementById('defectSizeSlider');
    const defectSizeValue = document.getElementById('defectSizeValue');
    
    window.logger.log('Defect mark size slider element:', defectSizeSlider);
    window.logger.log('Defect mark size value element:', defectSizeValue);
    window.logger.log('Floor plan overlay display:', document.getElementById('floorPlanOverlay')?.style.display);
    
    if (!defectSizeSlider || !defectSizeValue) {
        window.logger.log('Defect mark size elements not found:', { slider: !!defectSizeSlider, value: !!defectSizeValue });
        window.logger.log('Retrying in 500ms...');
        setTimeout(() => {
            window.initDefectMarkSizeAdjustment();
        }, 500);
        return;
    }
    
    // 從localStorage載入缺陷標記大小
    const savedDefectSize = localStorage.getItem('pne_defect_mark_size_scale');
    if (savedDefectSize) {
        const size = parseInt(savedDefectSize);
        defectSizeSlider.value = size;
        defectSizeValue.textContent = size + 'px';
        window.logger.log('Loaded defect mark size from localStorage:', size + 'px');
    }
    
    // 移除舊的事件監聽器（如果存在）
    if (defectSizeSlider._inputHandler) {
    defectSizeSlider.removeEventListener('input', defectSizeSlider._inputHandler);
    }
    
    // 缺陷標記大小滑動條事件
    defectSizeSlider._inputHandler = function() {
        window.logger.log('Defect mark size slider input event triggered!');
        const size = parseInt(this.value);
        defectSizeValue.textContent = size + 'px';
        
        // 更新全局變量
            window.defectMarkSizeScale = size;
        
        // 保存到localStorage
        localStorage.setItem('pne_defect_mark_size_scale', size.toString());
        
        // 更新所有現有缺陷標記的大小
        window.updateAllDefectMarkSizes();
        
        window.logger.log('Defect mark size updated:', size + 'px');
    };
    
    window.logger.log('Adding input event listener to defect mark size slider');
    defectSizeSlider.addEventListener('input', defectSizeSlider._inputHandler);
    window.logger.log('Defect mark size slider event listener added successfully');
    
    window.logger.log('Defect mark size adjustment initialized successfully');
};

// 測試滑塊功能的函數
window.testSliders = function() {
    window.logger.log('=== TESTING SLIDERS ===');
    
    const labelSlider = document.getElementById('labelSizeSlider');
    const labelValue = document.getElementById('labelSizeValue');
    const defectSlider = document.getElementById('defectSizeSlider');
    const defectValue = document.getElementById('defectSizeValue');
    
    window.logger.log('Label slider:', labelSlider);
    window.logger.log('Label value:', labelValue);
    window.logger.log('Defect slider:', defectSlider);
    window.logger.log('Defect value:', defectValue);
    
    if (labelSlider) {
        window.logger.log('Label slider value:', labelSlider.value);
        window.logger.log('Label slider min:', labelSlider.min);
        window.logger.log('Label slider max:', labelSlider.max);
    }
    
    if (defectSlider) {
        window.logger.log('Defect slider value:', defectSlider.value);
        window.logger.log('Defect slider min:', defectSlider.min);
        window.logger.log('Defect slider max:', defectSlider.max);
    }
    
    // 測試手動觸發事件
    if (labelSlider) {
        window.logger.log('Testing label slider event...');
        labelSlider.value = '30';
        const event = new Event('input', { bubbles: true });
        labelSlider.dispatchEvent(event);
    }
    
    if (defectSlider) {
        window.logger.log('Testing defect slider event...');
        defectSlider.value = '25';
        const event = new Event('input', { bubbles: true });
        defectSlider.dispatchEvent(event);
    }
};

// 測試缺陷標記滑桿的專用函數
window.testDefectSlider = function() {
    window.logger.log('=== TESTING DEFECT MARK SLIDER ===');
    
    const defectSlider = document.getElementById('defectSizeSlider');
    const defectValue = document.getElementById('defectSizeValue');
    
    window.logger.log('Defect slider element:', defectSlider);
    window.logger.log('Defect value element:', defectValue);
    
    if (defectSlider) {
        window.logger.log('Current defect slider value:', defectSlider.value);
        window.logger.log('Current defect mark size scale:', window.defectMarkSizeScale);
        
        // 測試設置新值
        defectSlider.value = '35';
        window.logger.log('Set defect slider to 35');
        
        // 手動觸發input事件
        const event = new Event('input', { bubbles: true });
        defectSlider.dispatchEvent(event);
        
        window.logger.log('After event - defect slider value:', defectSlider.value);
        window.logger.log('After event - defect mark size scale:', window.defectMarkSizeScale);
        window.logger.log('After event - defect value text:', defectValue.textContent);
    } else {
        window.logger.error('Defect slider not found!');
    }
};

// 縮放和平移事件設置功能 - 全局定義，確保在所有地方都可用
window.setupZoomAndPanEvents = function() {
    const floorPlanViewer = document.getElementById('floorPlanViewer');
    if (!floorPlanViewer) {
        window.logger.error('setupZoomAndPanEvents: floorPlanViewer not found');
        return;
    }
    
    window.logger.log('setupZoomAndPanEvents: Setting up pan and zoom events');
    
    // 使用全局變數或創建它們
    if (typeof window.isPanning === 'undefined') window.isPanning = false;
    if (typeof window.lastX === 'undefined') window.lastX = 0;
    if (typeof window.lastY === 'undefined') window.lastY = 0;
    if (typeof window.isLabelCreationMode === 'undefined') window.isLabelCreationMode = false;
    if (typeof window.isDefectMarkCreationMode === 'undefined') window.isDefectMarkCreationMode = false;
    if (typeof window.translateX === 'undefined') window.translateX = 0;
    if (typeof window.translateY === 'undefined') window.translateY = 0;
    if (typeof window.currentScale === 'undefined') window.currentScale = 1.0;
    
    // 縮放事件
    floorPlanViewer.onwheel = function(event) {
        // 檢查快速標籤模式狀態
        const quickLabelSwitch = document.getElementById('quickLabelSwitch');
        const quickLabelMode = quickLabelSwitch ? quickLabelSwitch.checked : false;
        
        // 如果正在創建標籤或缺陷標記，或快速標籤模式啟用，不允許縮放
        if (window.isLabelCreationMode || window.isDefectMarkCreationMode || quickLabelMode) return;
        
        event.preventDefault();
        const delta = -event.deltaY; // up: positive
        const zoomFactor = delta > 0 ? 1.05 : 0.95;

        const rect = floorPlanViewer.getBoundingClientRect();
        const cursorX = event.clientX - rect.left;
        const cursorY = event.clientY - rect.top;

        // Convert cursor to canvas-local coords before scaling
        const canvasXBefore = (cursorX - window.translateX) / window.currentScale;
        const canvasYBefore = (cursorY - window.translateY) / window.currentScale;

        // 更新全局變量
        window.currentScale = Math.max(0.1, Math.min(10, window.currentScale * zoomFactor));

        // After new scale, compute new translate so cursor remains at same canvas point
        window.translateX = cursorX - canvasXBefore * window.currentScale;
        window.translateY = cursorY - canvasYBefore * window.currentScale;

        if (typeof window.applyTransform === 'function') {
            window.applyTransform();
        }
        
        // 保存視圖狀態
        if (typeof saveCurrentViewState === 'function') {
            saveCurrentViewState();
        }
        
        // 同時保存到localStorage作為備份
        try {
            const viewState = {
                scale: window.currentScale || 1.0,
                translateX: window.translateX || 0,
                translateY: window.translateY || 0,
                timestamp: Date.now()
            };
            localStorage.setItem('pne_current_view_state', JSON.stringify(viewState));
        } catch (error) {
            window.logger.error('Failed to save view state to localStorage:', error);
        }
    };
    
    // 平移事件
    floorPlanViewer.onmousedown = function(event) {
        window.logger.log('Pan mousedown event triggered');
        
        // 檢查快速標籤模式狀態
        const quickLabelSwitch = document.getElementById('quickLabelSwitch');
        const quickLabelMode = quickLabelSwitch ? quickLabelSwitch.checked : false;
        
        // 如果正在創建標籤或缺陷標記，或快速標籤模式啟用，不允許拖拽
        if (window.isLabelCreationMode || window.isDefectMarkCreationMode || quickLabelMode) {
            window.logger.log('Pan blocked: label or defect mark creation mode active, or quick label mode enabled');
            return;
        }
        
        window.isPanning = true;
        window.lastX = event.clientX;
        window.lastY = event.clientY;
        window.logger.log('Pan started:', { isPanning: window.isPanning, lastX: window.lastX, lastY: window.lastY });
        if (!window.isLabelCreationMode && !window.isDefectMarkCreationMode && !quickLabelMode) {
            floorPlanViewer.style.cursor = 'grabbing';
        }
    };
    
    // 滑鼠移動事件
    window.onmousemove = function(event) {
        // 檢查快速標籤模式狀態
        const quickLabelSwitch = document.getElementById('quickLabelSwitch');
        const quickLabelMode = quickLabelSwitch ? quickLabelSwitch.checked : false;
        
        if (!window.isPanning || window.isLabelCreationMode || window.isDefectMarkCreationMode || quickLabelMode) return;
        const dx = event.clientX - window.lastX;
        const dy = event.clientY - window.lastY;
        window.lastX = event.clientX;
        window.lastY = event.clientY;
        // 更新全局變量
        window.translateX += dx;
        window.translateY += dy;
        window.logger.log('Pan move:', { dx, dy, translateX: window.translateX, translateY: window.translateY });
        if (typeof window.applyTransform === 'function') {
            window.applyTransform();
        } else {
            window.logger.error('applyTransform function not available');
        }
        
        // 保存視圖狀態
        if (typeof saveCurrentViewState === 'function') {
            saveCurrentViewState();
        }
        
        // 同時保存到localStorage作為備份
        try {
            const viewState = {
                scale: window.currentScale || 1.0,
                translateX: window.translateX || 0,
                translateY: window.translateY || 0,
                timestamp: Date.now()
            };
            localStorage.setItem('pne_current_view_state', JSON.stringify(viewState));
        } catch (error) {
            window.logger.error('Failed to save view state to localStorage:', error);
        }
    };
    
    // 滑鼠釋放事件
    window.onmouseup = function() {
        window.logger.log('Pan mouseup event triggered');
        window.isPanning = false;
        
        // 檢查快速標籤模式狀態
        const quickLabelSwitch = document.getElementById('quickLabelSwitch');
        const quickLabelMode = quickLabelSwitch ? quickLabelSwitch.checked : false;
        
        if (!window.isLabelCreationMode && !window.isDefectMarkCreationMode && !quickLabelMode) {
            floorPlanViewer.style.cursor = 'grab';
        }
    };
    
    // 觸控板支持 - 兩指移動平移
    let lastTouchDistance = 0;
    let lastTouchCenterX = 0;
    let lastTouchCenterY = 0;
    let isTwoFingerPanning = false;
    
    // 觸控開始事件
    floorPlanViewer.addEventListener('touchstart', function(event) {
        // 檢查快速標籤模式狀態
        const quickLabelSwitch = document.getElementById('quickLabelSwitch');
        const quickLabelMode = quickLabelSwitch ? quickLabelSwitch.checked : false;
        
        // 如果正在創建標籤或缺陷標記，或快速標籤模式啟用，不允許觸控操作
        if (window.isLabelCreationMode || window.isDefectMarkCreationMode || quickLabelMode) return;
        
        if (event.touches.length === 2) {
            // 兩指觸控 - 準備平移
            event.preventDefault();
            isTwoFingerPanning = true;
            
            const touch1 = event.touches[0];
            const touch2 = event.touches[1];
            
            // 計算兩指中心點
            lastTouchCenterX = (touch1.clientX + touch2.clientX) / 2;
            lastTouchCenterY = (touch1.clientY + touch2.clientY) / 2;
            
            // 計算兩指距離（用於縮放檢測）
            const dx = touch1.clientX - touch2.clientX;
            const dy = touch1.clientY - touch2.clientY;
            lastTouchDistance = Math.sqrt(dx * dx + dy * dy);
            
            window.logger.log('Two finger touch start:', {
                centerX: lastTouchCenterX,
                centerY: lastTouchCenterY,
                distance: lastTouchDistance
            });
        }
    });
    
    // 觸控移動事件
    floorPlanViewer.addEventListener('touchmove', function(event) {
        // 檢查快速標籤模式狀態
        const quickLabelSwitch = document.getElementById('quickLabelSwitch');
        const quickLabelMode = quickLabelSwitch ? quickLabelSwitch.checked : false;
        
        // 如果正在創建標籤或缺陷標記，或快速標籤模式啟用，不允許觸控操作
        if (window.isLabelCreationMode || window.isDefectMarkCreationMode || quickLabelMode) return;
        
        if (event.touches.length === 2 && isTwoFingerPanning) {
            event.preventDefault();
            
            const touch1 = event.touches[0];
            const touch2 = event.touches[1];
            
            // 計算當前兩指中心點
            const currentTouchCenterX = (touch1.clientX + touch2.clientX) / 2;
            const currentTouchCenterY = (touch1.clientY + touch2.clientY) / 2;
            
            // 計算兩指距離變化
            const dx = touch1.clientX - touch2.clientX;
            const dy = touch1.clientY - touch2.clientY;
            const currentTouchDistance = Math.sqrt(dx * dx + dy * dy);
            
            // 檢查是否為縮放手勢（距離變化較大）
            const distanceChange = Math.abs(currentTouchDistance - lastTouchDistance);
            const distanceChangeThreshold = 10; // 縮放檢測閾值
            
            if (distanceChange > distanceChangeThreshold) {
                // 縮放手勢
                const zoomFactor = currentTouchDistance > lastTouchDistance ? 1.02 : 0.98;
                
                const rect = floorPlanViewer.getBoundingClientRect();
                const centerX = currentTouchCenterX - rect.left;
                const centerY = currentTouchCenterY - rect.top;
                
                // Convert center to canvas-local coords before scaling
                const canvasXBefore = (centerX - window.translateX) / window.currentScale;
                const canvasYBefore = (centerY - window.translateY) / window.currentScale;
                
                // 更新全局變量
                window.currentScale = Math.max(0.1, Math.min(10, window.currentScale * zoomFactor));
                
                // After new scale, compute new translate so center remains at same canvas point
                window.translateX = centerX - canvasXBefore * window.currentScale;
                window.translateY = centerY - canvasYBefore * window.currentScale;
                
                if (typeof window.applyTransform === 'function') {
                    window.applyTransform();
                }
                
                // 保存視圖狀態
                if (typeof saveCurrentViewState === 'function') {
                    saveCurrentViewState();
                }
                
                // 同時保存到localStorage作為備份
                try {
                    const viewState = {
                        scale: window.currentScale || 1.0,
                        translateX: window.translateX || 0,
                        translateY: window.translateY || 0,
                        timestamp: Date.now()
                    };
                    localStorage.setItem('pne_current_view_state', JSON.stringify(viewState));
                } catch (error) {
                    window.logger.error('Failed to save view state to localStorage:', error);
                }
                
                lastTouchDistance = currentTouchDistance;
            } else {
                // 平移手勢
                const deltaX = currentTouchCenterX - lastTouchCenterX;
                const deltaY = currentTouchCenterY - lastTouchCenterY;
                
                // 更新全局變量
                window.translateX += deltaX;
                window.translateY += deltaY;
                
                window.logger.log('Two finger pan:', {
                    deltaX, deltaY,
                    translateX: window.translateX,
                    translateY: window.translateY
                });
                
                if (typeof window.applyTransform === 'function') {
                    window.applyTransform();
                }
                
                // 保存視圖狀態
                if (typeof saveCurrentViewState === 'function') {
                    saveCurrentViewState();
                }
                
                // 同時保存到localStorage作為備份
                try {
                    const viewState = {
                        scale: window.currentScale || 1.0,
                        translateX: window.translateX || 0,
                        translateY: window.translateY || 0,
                        timestamp: Date.now()
                    };
                    localStorage.setItem('pne_current_view_state', JSON.stringify(viewState));
                } catch (error) {
                    window.logger.error('Failed to save view state to localStorage:', error);
                }
            }
            
            // 更新上次觸控中心點
            lastTouchCenterX = currentTouchCenterX;
            lastTouchCenterY = currentTouchCenterY;
        }
    });
    
    // 觸控結束事件
    floorPlanViewer.addEventListener('touchend', function(event) {
        if (event.touches.length < 2) {
            isTwoFingerPanning = false;
            lastTouchDistance = 0;
            window.logger.log('Two finger touch end');
        }
    });
    
    // 設置初始游標樣式
    const quickLabelSwitch = document.getElementById('quickLabelSwitch');
    const quickLabelMode = quickLabelSwitch ? quickLabelSwitch.checked : false;
    floorPlanViewer.style.cursor = quickLabelMode ? 'crosshair' : 'grab';
};

// Updated category data with new names
const categories = [
    {
        id: 'a',
        name: 'Exposed structural metalwork',
        icon: 'fa-hard-hat',
        color: 'var(--category-a)'
    },
    {
        id: 'b',
        name: 'Structural elements',
        icon: 'fa-cubes',
        color: 'var(--category-b)'
    },
    {
        id: 'c',
        name: 'External building elements',
        icon: 'fa-building',
        color: 'var(--category-c)'
    },
    {
        id: 'd',
        name: 'Suspended objects',
        icon: 'fa-layer-group',
        color: 'var(--category-d)'
    },
    {
        id: 'e',
        name: 'High level internal finishes',
        icon: 'fa-gem',
        color: 'var(--category-e)'
    },
    {
        id: 'f',
        name: 'Heavy metal gates/doors',
        icon: 'fa-door-open',
        color: 'var(--category-f)'
    },
    {
        id: 'g',
        name: 'Window and glass louvers',
        icon: 'fa-window-maximize',
        color: 'var(--category-g)'
    },
    {
        id: 'h',
        name: 'Drainage and Plumbing systems',
        icon: 'fa-faucet',
        color: 'var(--category-h)'
    },
    {
        id: 'i',
        name: 'Fire safety elements',
        icon: 'fa-fire-extinguisher',
        color: 'var(--category-i)'
    },
    {
        id: 'j',
        name: 'Defects',
        icon: 'fa-bug',
        color: 'var(--category-j)'
    }
];

// Defect types organized by category
const defectTypes = {
    a: [
        "The steel column is heavily rusted",
        "The steel beam is heavily rusted",
        "The metal frame is heavily rusted",
        "The metal panel is heavily rusted",
        "The metal roof is leaking",
        "The metal roof is heavily rusted and leaking"
    ],
    b: [
        "Water seepage is observed around the pipe penetrating the wall",
        "Water stains on ceiling",
        "Loose concrete at pipe sleeve",
        "Concrete spalling is observed around the pipe penetrating the ceiling",
        "Water seepage is observed from the concrete wall",
        "Water seepage from the concrete ceiling and the steel bar is exposed",
        "Water leakage is observed from the crack in concrete ceiling",
        "Concrete spalling on ceiling",
        "The vinyl floor mat is cracked and protrudes upward",
        "Water seepage from the ceiling",
        "Water seepage is observed around the drainpipe penetrating the concrete ceiling",
        "The abandoned steel bar is exposed",
        "Concrete spalling is observed in the ceiling",
        "The concrete steel bar is exposed",
        "Water leakage and concrete spalling is observed in the ceiling",
        "The concrete ceiling is cracked and leaking",
        "Water leakage is observed around the drainpipe penetrating the concrete ceiling",
        "Water seepage is observed around the cable tray penetrating the ceiling",
        "The wall tiles is damaged",
        "Water leakage is observed from the glass panel",
        "Water leakage is observed from the ceiling",
        "The abandoned concrete pipe is damaged",
        "Multiple crack have developed across the ceiling",
        "Multiple floor tiles were damaged",
        "Water will accumulate on the floor",
        "Multiple crack have developed on the concrete slab",
        "Hollow areas and cracking were observed on the floor screed"
    ],
    c: [
        "Hollow areas and cracking were observed on the plastered wall",
        "Hollow areas and cracking were observed on the wall tiles",
        "Cracking in wall plastering",
        "The dry wall is damaged"
    ],
    d: [
        "Gauge hanger wire damaged",
        "The gypsum board ceiling protrudes downward",
        "Abandoned object leave in false ceiling",
        "There are a lot of discarded debris in the false ceiling",
        "The tie wire of the false ceiling frame is loose",
        "Ceiling panel is missing",
        "Improper fixing on ceiling",
        "The false ceiling frame is heavily rusted and damaged",
        "The false ceiling panel is damaged"
    ],
    e: [
        "The wall tile is damaged"
    ],
    f: [
        "The metal gate is heavily rusted",
        "The door leaf is damaged",
        "The mortise bolt on the wooden door is missing",
        "The door closer is damaged",
        "The door closer is inoperative",
        "The door closer is missing",
        "The door leaf and frame is damaged",
        "The door coordinator has lost functionality",
        "The welded joint at the hinge of the metal door is fractured",
        "The door frame is damaged",
        "The door hinge is damaged",
        "The door hinge is loose",
        "The door handle is loose",
        "The metal door is stuck and cannot be opened",
        "The door closer is loose",
        "The wooden louver is damaged",
        "The door lock is damaged",
        "The screw is missing from the hinge",
        "The door coordinator is missing",
        "The push bar is loose",
        "The push bar is damaged",
        "The door leaf is loose and difficult to operate"
    ],
    g: [
        "Multiple cracks have developed across the glass block wall",
        "The window gasket has aged",
        "The window lock is inoperative",
        "The window lock is damaged",
        "The window gasket is damaged",
        "Water seepage is observed from the edge of window frame",
        "The window restrictor damaged",
        "Corrosion is observed in the aluminium window frame",
        "The window hinge is damaged",
        "The rivet is rusted",
        "The metal louver is heavily rusted",
        "The glass louver is heavily rusted and damaged"
    ],
    h: [
        "The drainpipe is rusted and water seepage is observed from the connection clamp",
        "The metal trap is rusted",
        "Incipient leakage from the pinholes in the copper pipe",
        "No vent cap installed on the pipe termination",
        "The drainpipe is heavily rusted",
        "The pipe bracket is loose",
        "Water leakage is observed from the water pipe",
        "The metal trap is leaking",
        "Water leakage is observed from the drainpipe",
        "The drainpipe is heavily rusted and leaking",
        "Water leakage is observed from the connection clamp of drainpipe",
        "The parapet wall drain grill is damaged",
        "The metal trap is heavily rusted",
        "The metal trap is heavily rusted and leaking",
        "Incipient leakage is observed from the pinhole in the drainpipe",
        "The drainpipe is heavily rusted and damaged",
        "The drainpipe is rusted",
        "The abandoned drainpipe is rusted",
        "The water supply pipe is heavily rusted",
        "The drainpipe has a reverse slope, causing water to pool instead of flowing out",
        "An abandoned drainpipe in ceiling",
        "An abandoned trap in ceiling",
        "The metal trap is damaged",
        "The water supply pipe is leaking",
        "The water pipe valve is heavily rusted",
        "The metal trap and drainpipe are heavily rusted and leaking",
        "The metal trap and drainpipe are rusted",
        "Water leakage is observed from the valve of A/C water pipe",
        "The push bar of fire door is loose"
    ],
    i: [
        "The smoke detector is obstructed by a plastic bag, impairing its functionality",
        "The glass of the nozzle storage box of the fire hose reel was broken",
        "The fire door leaf is damaged",
        "The mortise bolt on the fire door is missing",
        "The fire door closer is damaged",
        "The fire door closer is inoperative",
        "The fire door closer is missing",
        "The fire door leaf and frame is damaged",
        "The fire door coordinator has lost functionality",
        "The fire door frame is damaged",
        "The fire door hinge is damaged",
        "The fire door hinge is loose",
        "The fire door handle is loose",
        "The fire door closer is loose",
        "The fire door lock is damaged",
        "The screw is missing from the fire door hinge",
        "The fire door coordinator is missing",
        "The push bar of fire door is damaged",
        "The fire door leaf is loose and difficult to operate",
        "The metal louver of the fire door is heavily rusted"
    ]
};

// Store numbers for each category
const categoryNumbers = {};
// Store assigned photos by filename
const assignedPhotos = {};

// Store defect entries as objects
window.defectEntries = window.defectEntries || [];
window.submittedDefectEntries = window.submittedDefectEntries || [];

categories.forEach(category => {
    categoryNumbers[category.id] = [];
    assignedPhotos[category.id] = new Set();
});

// Store submitted data
let submittedData = [];

// Store selected photos
let selectedPhotos = [];

// Auto create defect mark mode
let autoCreateDefectMarkMode = false;

let allPhotos = [];

// Store folders for export
let photoFolders = [];

// Store submitted filenames
let submittedFilenames = new Set();

// Row ID counter for tracking
let rowIdCounter = 0;

// DOM Elements
const folderNameDisplay = document.getElementById('folderNameDisplay');
const photoGrid = document.getElementById('photoGrid');
const selectedCount = document.getElementById('selectedCount');
const categoriesGrid = document.getElementById('categoriesGrid');
const clearBtn = document.getElementById('clearBtn');
const submitBtn = document.getElementById('submitBtn');
// const exportBtn = document.getElementById('exportBtn'); // Moved to DOMContentLoaded
const dataTableBody = document.getElementById('dataTableBody');
const tableCount = document.getElementById('tableCount');
const locationIdInput = document.getElementById('locationId');
const inspectionDateInput = document.getElementById('inspectionDate');
const roomNoInput = document.getElementById('roomNo');
const sortToggle = document.getElementById('sortToggle');
const globalOverlay = document.getElementById('globalOverlay');
const cancelResetBtn = document.getElementById('cancelResetBtn');
const forceResetBtn = document.getElementById('forceResetBtn');
const defectWindow = document.getElementById('defectWindow');
const defectCategorySelect = document.getElementById('defectCategory');
const defectTypeSelect = document.getElementById('defectTypeSelect');
const defectTypeDirectInput = document.getElementById('defectTypeDirectInput');
const defectSearchInput = document.getElementById('defectSearchInput');
const searchClearBtn = document.getElementById('searchClearBtn');
const defectOptionsList = document.getElementById('defectOptionsList');
const defectCancelBtn = document.getElementById('defectCancelBtn');
// defectAssignBtn moved to setupDefectAssignButton() function
let zoomSlider = null; // Will be initialized in DOMContentLoaded
const imminentDangerSwitch = document.getElementById('imminentDangerSwitch');

// Set default date to today
inspectionDateInput.valueAsDate = new Date();

// Initialize categories
function initCategories() {
    categoriesGrid.innerHTML = '';
    
    categories.forEach(category => {
        const card = document.createElement('div');
        card.className = `category-card ${category.id === 'j' ? 'defects-card' : ''}`;
        
        // Get localized category name
        const categoryKey = `category${category.id.toUpperCase()}`;
        const localizedName = getText(categoryKey);
        
        card.innerHTML = `
            <div class="category-header ${category.id}" data-category="${category.id}" role="button" aria-label="Assign to ${localizedName}">
                <div class="category-header-text">
                    <i class="fas ${category.icon}"></i> ${localizedName}
                </div>
                <span class="count-badge" id="count-${category.id}">0</span>
            </div>
            <div class="category-content" id="result-${category.id}">
                <!-- Numbers will appear here -->
            </div>
            <button class="clear-category-btn" data-category="${category.id}" title="Clear this category" aria-label="Clear ${localizedName}">
                <i class="fas fa-times"></i>
            </button>
        `;
        categoriesGrid.appendChild(card);
        
        // Add click event to category header
        const header = card.querySelector('.category-header');
        header.addEventListener('click', () => {
            if (category.id === 'j') {
                showDefectWindow();
            } else {
                assignToCategory(category.id);
            }
        });
        
        // Add click event to clear category button
        const clearBtn = card.querySelector('.clear-category-btn');
        clearBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            clearCategory(category.id);
        });
    });
}

// Update folder name display based on state
function updateFolderDisplay() {
    window.logger.log('updateFolderDisplay called');
    window.logger.log('folderNameDisplay element:', folderNameDisplay);
    window.logger.log('folderNameDisplay textContent:', folderNameDisplay ? folderNameDisplay.textContent : 'N/A');
    window.logger.log('allPhotos length:', allPhotos.length);
    
    if (folderNameDisplay && folderNameDisplay.textContent && allPhotos.length > 0) {
        folderNameDisplay.classList.remove('empty');
        window.logger.log('Folder display updated - not empty');
    } else {
        if (folderNameDisplay) {
            folderNameDisplay.classList.add('empty');
            window.logger.log('Folder display updated - empty');
        } else {
            window.logger.log('folderNameDisplay element not found');
        }
    }
}

// 自動分配 Defect No. 函數
function assignDefectNo() {
    try {
        const defectNoInput = document.getElementById('defectNo');
        if (!defectNoInput) return;
        
        // 從 all defects detail-table-container 的數據源 (defectEntries) 中獲取最新的缺陷編號
        let nextDefectNo = 1; // 默認從 1 開始
        
        if (window.defectEntries && window.defectEntries.length > 0) {
            // 找到所有有效的缺陷編號
            const defectNumbers = window.defectEntries
                .map(entry => {
                    const defectNo = parseInt(entry.defectNo);
                    return isNaN(defectNo) ? 0 : defectNo;
                })
                .filter(num => num > 0);
            
            if (defectNumbers.length > 0) {
                // 獲取最大的缺陷編號並加 1
                const maxDefectNo = Math.max(...defectNumbers);
                nextDefectNo = maxDefectNo + 1;
            }
        }
        
        // 設置 defect no. 到輸入框
        defectNoInput.value = nextDefectNo.toString();
        
        window.logger.log('Defect No. assigned:', nextDefectNo, 'based on all defects detail-table-container');
        window.logger.log('Current defectEntries count:', window.defectEntries ? window.defectEntries.length : 0);
        
    } catch (error) {
        window.logger.error('Error assigning defect no.:', error);
    }
}

// 重新排列缺陷編號函數
function renumberDefectEntries() {
    try {
        window.logger.log('Starting defect renumbering process...');
        
        if (!window.defectEntries || window.defectEntries.length === 0) {
            window.logger.log('No defect entries to renumber');
            return;
        }
        
        // 按創建順序排序（使用id或時間戳）
        const sortedEntries = [...window.defectEntries].sort((a, b) => {
            // 如果有id字段，按id排序；否則按其他邏輯排序
            if (a.id && b.id) {
                return a.id - b.id;
            }
            // 如果沒有id，可以按其他字段排序，這裡暫時保持原順序
            return 0;
        });
        
        // 創建舊編號到新編號的映射
        const defectNoMapping = {};
        let newDefectNo = 1;
        
        // 為每個缺陷分配新的連續編號
        sortedEntries.forEach(entry => {
            const oldDefectNo = entry.defectNo;
            const newDefectNoStr = newDefectNo.toString();
            
            defectNoMapping[oldDefectNo] = newDefectNoStr;
            entry.defectNo = newDefectNoStr;
            
            window.logger.log(`Renumbered defect: ${oldDefectNo} -> ${newDefectNoStr}`);
            newDefectNo++;
        });
        
        // 更新 submittedDefectEntries
        if (window.submittedDefectEntries && window.submittedDefectEntries.length > 0) {
            window.submittedDefectEntries.forEach(entry => {
                if (defectNoMapping[entry.defectNo]) {
                    entry.defectNo = defectNoMapping[entry.defectNo];
                }
            });
        }
        
        // 更新缺陷標記
        if (window.defectMarks && window.defectMarks.length > 0) {
            window.defectMarks.forEach(mark => {
                if (defectNoMapping[mark.defectNo]) {
                    mark.defectNo = defectNoMapping[mark.defectNo];
                }
            });
            
            // 保存更新後的缺陷標記
            if (typeof saveDefectMarksToStorage === 'function') {
                saveDefectMarksToStorage();
            }
        }
        
        // 注意：標籤編號不應該被自動重新編號
        // 標籤的 inspectionNo 應該保持用戶設定的值
        // 只有缺陷標記需要重新編號
        window.logger.log('Labels numbering preserved - only defect marks are renumbered');
        
        // 更新類別內容中的缺陷編號
        if (window.categoryNumbers && window.categoryNumbers.j) {
            window.categoryNumbers.j = window.categoryNumbers.j.map(entry => {
                // 匹配格式: "編號) 範圍_描述"
                const match = entry.match(/^(\d+)\)\s*(.+)$/);
                if (match) {
                    const oldDefectNo = match[1];
                    const restOfEntry = match[2];
                    if (defectNoMapping[oldDefectNo]) {
                        return `${defectNoMapping[oldDefectNo]}) ${restOfEntry}`;
                    }
                }
                return entry;
            });
        }
        
        // 更新檢查記錄中的缺陷編號
        if (window.submittedData && window.submittedData.length > 0) {
            window.submittedData.forEach(record => {
                if (record.j && record.j !== 'N/A') {
                    const defects = record.j.split('\n');
                    const updatedDefects = defects.map(defect => {
                        const match = defect.match(/^(\*?\s*)(\d+)\)\s*(.+)$/);
                        if (match) {
                            const prefix = match[1]; // 可能包含 "* " 前綴
                            const oldDefectNo = match[2];
                            const restOfDefect = match[3];
                            if (defectNoMapping[oldDefectNo]) {
                                return `${prefix}${defectNoMapping[oldDefectNo]}) ${restOfDefect}`;
                            }
                        }
                        return defect;
                    });
                    record.j = updatedDefects.join('\n');
                }
            });
        }
        
        // 保存所有更新後的數據
        saveDataToStorage();
        
        // 重新渲染相關顯示
        updateCategoryDisplay('j');
        
        // 重新渲染缺陷標記（如果存在）
        if (typeof window.redrawDefectMarks === 'function') {
            window.redrawDefectMarks();
        }
        
        // 重新渲染標籤（如果存在）
        if (typeof window.redrawLabels === 'function') {
            window.redrawLabels();
        }
        
        // 更新缺陷摘要表格
        if (typeof window.updateDefectSummaryTable === 'function') {
            window.updateDefectSummaryTable();
        }
        
        // 同步到標籤詳細表格
        if (typeof syncDefectsToLabelsDetailTable === 'function') {
            syncDefectsToLabelsDetailTable();
        }
        
        window.logger.log('Defect renumbering completed successfully');
        showNotification(getText('defectRenumbered'), 'success');
        
    } catch (error) {
        window.logger.error('Error during defect renumbering:', error);
        showNotification('重新排列缺陷編號時發生錯誤', 'error');
    }
}

// Trigger auto create defect mark workflow
function triggerAutoCreateDefectMark() {
    window.logger.log('=== TRIGGER AUTO CREATE DEFECT MARK WORKFLOW ===');
    
    if (!window.pendingDefectData) {
        window.logger.error('No pending defect data for auto create defect mark');
        return;
    }
    
    window.logger.log('Triggering auto create defect mark workflow with data:', window.pendingDefectData);
    
    // Set waiting state - user must place defect mark before closing floor plan
    window.isWaitingForDefectMarkPlacement = true;
    window.logger.log('Set waiting state for defect mark placement');
    
    // Step 1: Close defect window
    window.logger.log('Step 1: Closing defect window...');
    defectWindow.style.display = 'none';
    window.logger.log('Defect window closed');
    
    // Step 2: Open floor plan overlay
    window.logger.log('Step 2: Opening floor plan overlay...');
    const floorPlanOverlay = document.getElementById('floorPlanOverlay');
    if (floorPlanOverlay) {
        window.logger.log('Floor plan overlay element found:', floorPlanOverlay);
        window.logger.log('Current display style:', floorPlanOverlay.style.display);
        
        floorPlanOverlay.style.display = 'flex';
        window.logger.log('Floor plan overlay opened, new display style:', floorPlanOverlay.style.display);
        
        // Disable close button - user must place defect mark first
        const closeBtn = document.getElementById('closeFloorPlanBtn');
        if (closeBtn) {
            closeBtn.disabled = true;
            closeBtn.style.opacity = '0.5';
            closeBtn.style.cursor = 'not-allowed';
            closeBtn.title = 'Please place the defect mark first';
            window.logger.log('Close button disabled - waiting for defect mark placement');
        }
        
        // 初始化滑塊功能
        window.logger.log('Step 2.1: Initializing sliders...');
        setTimeout(() => {
            window.logger.log('Initializing label size adjustment...');
            if (typeof window.initLabelSizeAdjustment === 'function') {
                window.initLabelSizeAdjustment();
                window.logger.log('Label size adjustment initialized');
            } else {
                window.logger.warn('initLabelSizeAdjustment function not found');
            }
            
            window.logger.log('Initializing defect mark size adjustment...');
            if (typeof window.initDefectMarkSizeAdjustment === 'function') {
                window.initDefectMarkSizeAdjustment();
                window.logger.log('Defect mark size adjustment initialized');
            } else {
                window.logger.warn('initDefectMarkSizeAdjustment function not found');
            }
        }, 100);
        
        // Step 3: Show defect mark reminder popup
        window.logger.log('Step 3: Showing defect mark reminder popup...');
        setTimeout(() => {
            window.logger.log('Executing Step 3: Displaying defect mark reminder...');
            showDefectMarkReminder();
        }, 500);
    } else {
        window.logger.error('Floor plan overlay not found');
    }
    
    window.logger.log('=== TRIGGER AUTO CREATE DEFECT MARK WORKFLOW COMPLETED ===');
}

// Show defect mark reminder popup
function showDefectMarkReminder() {
    window.logger.log('=== SHOW DEFECT MARK REMINDER POPUP ===');
    window.logger.log('Showing defect mark reminder popup...');
    
    if (!window.pendingDefectData) {
        window.logger.error('No pending defect data available for reminder');
        window.logger.log('window.pendingDefectData:', window.pendingDefectData);
        return;
    }
    
    window.logger.log('Pending defect data found:', window.pendingDefectData);
    
    // Get popup elements
    const popup = document.getElementById('defectMarkReminderPopup');
    const inspectionNoSpan = document.getElementById('reminderInspectionNo');
    const defectNoSpan = document.getElementById('reminderDefectNo');
    const photoNoSpan = document.getElementById('reminderPhotoNo');
    const defectTypeSpan = document.getElementById('reminderDefectType');
    
    window.logger.log('Popup elements found:', {
        popup: !!popup,
        inspectionNoSpan: !!inspectionNoSpan,
        defectNoSpan: !!defectNoSpan,
        photoNoSpan: !!photoNoSpan,
        defectTypeSpan: !!defectTypeSpan
    });
    
    if (!popup || !inspectionNoSpan || !defectNoSpan || !photoNoSpan || !defectTypeSpan) {
        window.logger.error('Defect mark reminder popup elements not found');
        window.logger.log('Missing elements:', {
            popup: !popup,
            inspectionNoSpan: !inspectionNoSpan,
            defectNoSpan: !defectNoSpan,
            photoNoSpan: !photoNoSpan,
            defectTypeSpan: !defectTypeSpan
        });
        return;
    }
    
    // Fill in the data
    inspectionNoSpan.textContent = window.pendingDefectData.inspectionNo || '-';
    defectNoSpan.textContent = window.pendingDefectData.defectNo || '-';
    photoNoSpan.textContent = window.pendingDefectData.photoNumbers || '-';
    defectTypeSpan.textContent = window.pendingDefectData.defectType || '-';
    
    window.logger.log('Data filled in:', {
        inspectionNo: inspectionNoSpan.textContent,
        defectNo: defectNoSpan.textContent,
        photoNumbers: photoNoSpan.textContent,
        defectType: defectTypeSpan.textContent
    });
    
    // Show the popup
    popup.style.display = 'flex';
    window.logger.log('Popup display style set to:', popup.style.display);
    window.logger.log('Popup computed style:', window.getComputedStyle(popup).display);
    
    window.logger.log('Defect mark reminder popup displayed with data:', {
        inspectionNo: window.pendingDefectData.inspectionNo,
        defectNo: window.pendingDefectData.defectNo,
        photoNumbers: window.pendingDefectData.photoNumbers,
        defectType: window.pendingDefectData.defectType
    });
    window.logger.log('=== SHOW DEFECT MARK REMINDER POPUP COMPLETED ===');
}

// Hide defect mark reminder popup and enable crosshair cursor
function hideDefectMarkReminder() {
    window.logger.log('=== HIDE DEFECT MARK REMINDER ===');
    window.logger.log('Hiding defect mark reminder popup...');
    
    const popup = document.getElementById('defectMarkReminderPopup');
    if (popup) {
        popup.style.display = 'none';
        window.logger.log('Popup hidden successfully');
    } else {
        window.logger.error('Popup element not found');
    }
    
    // Enable crosshair cursor on floor plan elements
    const floorPlanOverlay = document.getElementById('floorPlanOverlay');
    const floorPlanContent = document.querySelector('.floor-plan-content');
    const floorPlanContainer = document.querySelector('.floor-plan-container');
    const labelLayer = document.getElementById('labelLayer');
    const floorPlanCanvas = document.getElementById('floorPlanCanvas');
    
    window.logger.log('Floor plan elements found:', {
        overlay: !!floorPlanOverlay,
        content: !!floorPlanContent,
        container: !!floorPlanContainer,
        labelLayer: !!labelLayer,
        canvas: !!floorPlanCanvas
    });
    
    // Apply crosshair cursor to multiple elements
    const elementsToStyle = [floorPlanOverlay, floorPlanContent, floorPlanContainer, floorPlanCanvas].filter(el => el);
    
    elementsToStyle.forEach((element, index) => {
        if (element) {
            window.logger.log(`Styling element ${index}:`, element.className || element.id);
            window.logger.log('Current classes:', element.className);
            window.logger.log('Current computed cursor style:', window.getComputedStyle(element).cursor);
            
            element.classList.add('crosshair-cursor');
            element.style.cursor = 'crosshair';
            
            window.logger.log('New classes:', element.className);
            window.logger.log('New computed cursor style:', window.getComputedStyle(element).cursor);
        }
    });
    
    // Ensure label layer doesn't interfere with cursor
    if (labelLayer) {
        window.logger.log('Label layer found, ensuring it allows cursor events');
        labelLayer.style.pointerEvents = 'none'; // Keep it as none to avoid interference
        window.logger.log('Label layer pointer-events set to none');
    }
    
    if (elementsToStyle.length === 0) {
        window.logger.error('No floor plan elements found');
        window.logger.log('Available elements with floor-plan in class name:');
        const allElements = document.querySelectorAll('[class*="floor-plan"]');
        allElements.forEach((el, index) => {
            window.logger.log(`Element ${index}:`, el.className, el.tagName);
        });
    }
    
    window.logger.log('Defect mark reminder popup hidden, crosshair cursor enabled');
    window.logger.log('=== HIDE DEFECT MARK REMINDER COMPLETED ===');
}

// Disable crosshair cursor and resume normal cursor
function disableCrosshairCursor() {
    window.logger.log('Disabling crosshair cursor...');
    
    const floorPlanOverlay = document.getElementById('floorPlanOverlay');
    const floorPlanContent = document.querySelector('.floor-plan-content');
    const floorPlanContainer = document.querySelector('.floor-plan-container');
    const floorPlanCanvas = document.getElementById('floorPlanCanvas');
    
    // Remove crosshair cursor from multiple elements
    const elementsToStyle = [floorPlanOverlay, floorPlanContent, floorPlanContainer, floorPlanCanvas].filter(el => el);
    
    elementsToStyle.forEach((element, index) => {
        if (element) {
            window.logger.log(`Removing crosshair from element ${index}:`, element.className || element.id);
            element.classList.remove('crosshair-cursor');
            element.style.cursor = '';
        }
    });
    
    window.logger.log('Crosshair cursor disabled, normal cursor resumed');
}

// Open new defect entries menu and auto fill data
function openNewDefectEntriesMenu() {
    window.logger.log('=== OPEN NEW DEFECT ENTRIES MENU ===');
    
    if (!window.pendingDefectData) {
        window.logger.error('No pending defect data for auto fill');
        return;
    }
    
    window.logger.log('Attempting to open new defect entries menu...');
    window.logger.log('Pending defect data:', window.pendingDefectData);
    
    // Find and click the Add Defect button to open the new defect entries menu
    const addDefectBtn = document.getElementById('addDefectBtn');
    window.logger.log('Looking for Add Defect button...');
    window.logger.log('Add Defect button element:', addDefectBtn);
    
    if (addDefectBtn) {
        window.logger.log('Add Defect button found, clicking...');
        window.logger.log('Button visibility:', addDefectBtn.style.display);
        window.logger.log('Button disabled state:', addDefectBtn.disabled);
        
        addDefectBtn.click();
        window.logger.log('Add Defect button clicked');
        
        // Auto fill the form after a short delay to ensure it's open
        setTimeout(() => {
            window.logger.log('Attempting to auto fill form...');
            autoFillNewDefectEntriesMenu();
        }, 500); // Increased delay to 500ms
    } else {
        window.logger.error('Add Defect button not found');
        window.logger.log('Available buttons with "add" in ID:');
        document.querySelectorAll('[id*="add"]').forEach(btn => {
            window.logger.log('- Button ID:', btn.id, 'Element:', btn);
        });
    }
    
    window.logger.log('=== OPEN NEW DEFECT ENTRIES MENU COMPLETED ===');
}

// Auto fill new defect entries menu with pending defect data - 已移除模態框

// Update defect photo numbers display
function updateDefectPhotoNumbers() {
    const defectPhotoNoInput = document.getElementById('defectPhotoNo');
    if (!defectPhotoNoInput) return;
    
    if (selectedPhotos.length === 0) {
        defectPhotoNoInput.value = '';
        return;
    }
    
    // Extract photo numbers from selected photos
    const photoNumbers = selectedPhotos.map(index => {
        const file = allPhotos[index];
        const numberMatch = file.name.match(/\d+/);
        return numberMatch ? numberMatch[0] : '';
    }).filter(num => num !== '').sort((a, b) => parseInt(a) - parseInt(b));
    
    // Format photo numbers same as defects categories content
    if (photoNumbers.length === 0) {
        defectPhotoNoInput.value = '';
    } else if (photoNumbers.length === 1) {
        defectPhotoNoInput.value = photoNumbers[0];
    } else {
        // Group consecutive numbers
        const ranges = [];
        let start = parseInt(photoNumbers[0]);
        let end = start;
        
        for (let i = 1; i < photoNumbers.length; i++) {
            const current = parseInt(photoNumbers[i]);
            if (current === end + 1) {
                end = current;
            } else {
                if (start === end) {
                    ranges.push(start.toString());
                } else {
                    ranges.push(`${start}-${end}`);
                }
                start = current;
                end = current;
            }
        }
        
        // Add the last range
        if (start === end) {
            ranges.push(start.toString());
        } else {
            ranges.push(`${start}-${end}`);
        }
        
        defectPhotoNoInput.value = ranges.join(', ');
    }
}

// Show defect window
function showDefectWindow() {
    if (selectedPhotos.length === 0) {
        showNotification('Please select photos first', 'warning');
        return;
    }
    
    // 檢查是否在繪圖模式下（檢查localStorage中是否有PDF數據）
    const floorPlanOverlay = document.getElementById('floorPlanOverlay');
    const hasPDFData = localStorage.getItem('pne_floorplan_data') || localStorage.getItem('pne_floorplan_base64');
    const hasLabels = localStorage.getItem('pne_floorplan_labels');
    
    // 更可靠的繪圖模式檢測：檢查是否有PDF數據或標籤數據
    const isDrawingMode = hasPDFData || hasLabels;
    
    window.logger.log('Floor plan overlay check:', {
        element: !!floorPlanOverlay,
        display: floorPlanOverlay ? floorPlanOverlay.style.display : 'N/A',
        hasPDFData: !!hasPDFData,
        hasLabels: !!hasLabels,
        isDrawingMode: isDrawingMode
    });
    
    // 如果在繪圖模式下，啟用自動創建缺陷標記模式
    if (isDrawingMode) {
        autoCreateDefectMarkMode = true;
        window.logger.log('Drawing mode detected: Auto create defect mark mode enabled');
    } else {
        autoCreateDefectMarkMode = false;
        window.logger.log('Normal mode: Auto create defect mark mode disabled');
    }
    
    defectWindow.style.display = 'block';
    // 自動帶入 header 右側欄位資料
    var inspectionNoHeader = document.getElementById('locationId');
    var inspectionDateHeader = document.getElementById('inspectionDate');
    var floorHeader = document.getElementById('floorHeader');
    var areaNameHeader = document.getElementById('areaNameHeader');
    var roomNoHeader = document.getElementById('roomNo');

    if(document.getElementById('inspectionDateDefect')) document.getElementById('inspectionDateDefect').value = inspectionDateHeader ? inspectionDateHeader.value : '';
    if(document.getElementById('defectFloor')) document.getElementById('defectFloor').value = floorHeader ? floorHeader.value : '';
    if(document.getElementById('defectAreaName')) document.getElementById('defectAreaName').value = areaNameHeader ? areaNameHeader.value : '';
    if(document.getElementById('defectRoomNo')) document.getElementById('defectRoomNo').value = roomNoHeader ? roomNoHeader.value : '';
    
    // 自動填入 Inspection no. 從 header
    if(document.getElementById('defectInspectionNo')) {
        const headerValue = inspectionNoHeader ? inspectionNoHeader.value : '';
        document.getElementById('defectInspectionNo').value = headerValue;
    }
    
    // 自動分配 Defect No. 從 defect summary
    assignDefectNo();
    
    // 顯示選中的照片編號
    updateDefectPhotoNumbers();
    
    defectCategorySelect.value = '';
    defectTypeSelect.classList.add('disabled');
    defectTypeSelect.classList.remove('open');
    defectTypeSelect.setAttribute('data-selected', '');
    updateDefectTypeOptions([]);
    defectSearchInput.value = '';
    defectTypeDirectInput.value = '';
    imminentDangerSwitch.checked = false; // Reset to default "No"
    
    // Reset other form fields
    if(document.getElementById('defectDescription')) document.getElementById('defectDescription').value = '';
    if(document.getElementById('defectExistingCondition')) document.getElementById('defectExistingCondition').value = '';
    if(document.getElementById('defectHumidity')) document.getElementById('defectHumidity').value = '';
    if(document.getElementById('defectMoisture')) document.getElementById('defectMoisture').value = '';
    if(document.getElementById('defectChloride')) document.getElementById('defectChloride').value = '';
    if(document.getElementById('defectCarbonation')) document.getElementById('defectCarbonation').value = '';
    if(document.getElementById('defectRemedialWorks')) document.getElementById('defectRemedialWorks').value = '';
    if(document.getElementById('defectPreventiveWorks')) document.getElementById('defectPreventiveWorks').value = '';
    if(document.getElementById('defectRemarks')) document.getElementById('defectRemarks').value = '';
}

// Handle defect category change
defectCategorySelect.addEventListener('change', function() {
    if (this.value) {
        defectTypeSelect.classList.remove('disabled');
        const defects = defectTypes[this.value];
        updateDefectTypeOptions(defects);
    } else {
        defectTypeSelect.classList.add('disabled');
        updateDefectTypeOptions([]);
    }
});

// Handle defect cancel button
defectCancelBtn.addEventListener('click', function() {
    window.logger.log('Defect cancel button clicked');
    
    // 重置 defect no. 字段
    const defectNoInput = document.getElementById('defectNo');
    if (defectNoInput) {
        defectNoInput.value = '';
    }
    
    defectWindow.style.display = 'none';
});

// Update defect type options
function updateDefectTypeOptions(defects) {
    defectOptionsList.innerHTML = '';
    
    if (defects.length === 0) {
        const option = document.createElement('span');
        option.className = 'custom-option';
        option.setAttribute('data-value', '');
        option.textContent = 'Select a category first';
        defectOptionsList.appendChild(option);
    } else {
        // Add loading indicator briefly
        const loadingOption = document.createElement('span');
        loadingOption.className = 'custom-option loading';
        loadingOption.textContent = 'Loading options...';
        defectOptionsList.appendChild(loadingOption);
        
        // Remove loading and add options after a brief delay for smooth UX
        setTimeout(() => {
            defectOptionsList.innerHTML = '';
            defects.forEach(defect => {
                const option = document.createElement('span');
                option.className = 'custom-option';
                option.setAttribute('data-value', defect);
                option.textContent = defect;
                defectOptionsList.appendChild(option);
            });
        }, 100);
    }
    
    // Update trigger text only if no value is currently selected
    const triggerSpan = defectTypeSelect.querySelector('.custom-select__trigger span');
    const currentSelected = defectTypeSelect.getAttribute('data-selected');
    if (!currentSelected) {
        if (defects.length > 0) {
            triggerSpan.textContent = `Or select from dropdown (${defects.length} options)`;
        } else {
            triggerSpan.textContent = 'Select a category first';
        }
    }
}

// Initialize custom select functionality
function initCustomSelect() {
    window.logger.log('Initializing custom select...');
    
    // Handle direct input changes
    defectTypeDirectInput.addEventListener('input', function() {
        const value = this.value.trim();
        if (value) {
            // Clear dropdown selection when user types directly
            defectTypeSelect.setAttribute('data-selected', '');
            defectTypeSelect.querySelector('.custom-select__trigger span').textContent = 'Or select from dropdown';
            
            // Clear selected styling from options
            const options = defectOptionsList.querySelectorAll('.custom-option');
            options.forEach(option => {
                option.classList.remove('selected');
            });
        }
    });
    
    // Toggle dropdown
    defectTypeSelect.addEventListener('click', function(e) {
        window.logger.log('Defect type select clicked');
        if (this.classList.contains('disabled')) return;
        
        e.stopPropagation();
        this.classList.toggle('open');
        
        if (this.classList.contains('open')) {
            // Show search container when opening dropdown
            const searchContainer = defectSearchInput.closest('.search-container');
            if (searchContainer) {
                searchContainer.classList.remove('hidden');
            }
            
            // Check if there's a selected value
            const selectedValue = this.getAttribute('data-selected');
            if (selectedValue) {
                // Show only the selected option
                const options = defectOptionsList.querySelectorAll('.custom-option');
                options.forEach(option => {
                    const value = option.getAttribute('data-value');
                    if (value === selectedValue) {
                        option.classList.remove('hidden');
                    } else {
                        option.classList.add('hidden');
                    }
                });
            } else {
                // Show all options if nothing is selected
                filterDefectOptions('');
            }
            
            setTimeout(() => {
                defectSearchInput.focus();
                window.logger.log('Search input focused');
            }, 100);
        }
    });

            // Handle option selection
defectOptionsList.addEventListener('click', function(e) {
    // Don't handle clicks on search input
    if (e.target === defectSearchInput || defectSearchInput.contains(e.target)) {
        return;
    }
    
    const option = e.target.closest('.custom-option');
    if (!option || option.classList.contains('no-results')) return;
    
    const value = option.getAttribute('data-value');
    const text = option.textContent;
    
    // Update trigger text immediately for better UX
    const triggerSpan = defectTypeSelect.querySelector('.custom-select__trigger span');
    triggerSpan.textContent = text;
    
    // Store selected value
    defectTypeSelect.setAttribute('data-selected', value);
    
    // Update direct input field with selected value
    defectTypeDirectInput.value = text;
    
    // Clear search and hide search container first
    defectSearchInput.value = '';
    const searchContainer = defectSearchInput.closest('.search-container');
    if (searchContainer) {
        searchContainer.classList.add('hidden');
    }
    
    // Show only selected option
    showOnlySelectedOption(value, text);
    
    // Close dropdown after a short delay to show the animation
    setTimeout(() => {
        defectTypeSelect.classList.remove('open');
    }, 200);
    
    // Remove any highlighted option
    const highlighted = defectOptionsList.querySelector('.custom-option.highlighted');
    if (highlighted) {
        highlighted.classList.remove('highlighted');
    }
});

    // Handle search - prevent event bubbling
    defectSearchInput.addEventListener('click', function(e) {
        window.logger.log('Search input clicked');
        e.stopPropagation();
        
        // When clicking search input, show all options for easy searching
        const selectedValue = defectTypeSelect.getAttribute('data-selected');
        if (selectedValue) {
            // Show all options when clicking search input
            const options = defectOptionsList.querySelectorAll('.custom-option');
            options.forEach(option => {
                option.classList.remove('hidden');
            });
        }
    });
    
    // Handle search clear button
    searchClearBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        defectSearchInput.value = '';
        defectSearchInput.focus();
        
        // Show all options when clearing search
        const options = defectOptionsList.querySelectorAll('.custom-option');
        options.forEach(option => {
            option.classList.remove('hidden');
        });
        
        // Remove no results message if exists
        const noResultsMsg = defectOptionsList.querySelector('.no-results');
        if (noResultsMsg) {
            noResultsMsg.remove();
        }
    });

    // Debounced search function for better performance
    let searchTimeout;
    defectSearchInput.addEventListener('input', function(e) {
        e.stopPropagation();
        const searchTerm = e.target.value.toLowerCase();
        
        // Show/hide clear button based on input content
        searchClearBtn.style.display = searchTerm ? 'block' : 'none';
        
        // Clear previous timeout
        clearTimeout(searchTimeout);
        
        // When user starts typing, show all options for searching
        const options = defectOptionsList.querySelectorAll('.custom-option');
        options.forEach(option => {
            option.classList.remove('hidden');
        });
        
        // Debounce search to improve performance
        searchTimeout = setTimeout(() => {
            // When user starts typing, show all options that match
            filterDefectOptions(searchTerm);
        }, 100);
    });

    defectSearchInput.addEventListener('keydown', function(e) {
        // Don't interfere with copy/paste operations
        if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'v' || e.key === 'C' || e.key === 'V')) {
            return; // Allow normal copy/paste to work
        }
        
        e.stopPropagation();
        if (e.key === 'Escape') {
            defectTypeSelect.classList.remove('open');
        } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            navigateOptions(e.key === 'ArrowDown' ? 1 : -1);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            selectHighlightedOption();
        } else if (e.key === 'Tab') {
            // Allow tab navigation
            return;
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!defectTypeSelect.contains(e.target)) {
            defectTypeSelect.classList.remove('open');
        }
    });

    // Handle keyboard navigation
    defectTypeSelect.addEventListener('keydown', function(e) {
        // Don't interfere with copy/paste operations
        if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'v' || e.key === 'C' || e.key === 'V')) {
            return; // Allow normal copy/paste to work
        }
        
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.classList.toggle('open');
            if (this.classList.contains('open')) {
                setTimeout(() => defectSearchInput.focus(), 100);
            }
        }
    });
}

// Keyboard navigation functions
function navigateOptions(direction) {
    const visibleOptions = Array.from(defectOptionsList.querySelectorAll('.custom-option:not(.hidden)'));
    const currentHighlighted = defectOptionsList.querySelector('.custom-option.highlighted');
    let currentIndex = currentHighlighted ? visibleOptions.indexOf(currentHighlighted) : -1;
    
    // Remove current highlight
    if (currentHighlighted) {
        currentHighlighted.classList.remove('highlighted');
    }
    
    // Calculate new index
    let newIndex;
    if (direction > 0) {
        newIndex = currentIndex < visibleOptions.length - 1 ? currentIndex + 1 : 0;
    } else {
        newIndex = currentIndex > 0 ? currentIndex - 1 : visibleOptions.length - 1;
    }
    
    // Highlight new option
    if (visibleOptions[newIndex]) {
        visibleOptions[newIndex].classList.add('highlighted');
        visibleOptions[newIndex].scrollIntoView({ block: 'nearest' });
    }
}

function selectHighlightedOption() {
    const highlighted = defectOptionsList.querySelector('.custom-option.highlighted');
    if (highlighted) {
        highlighted.click();
    }
}

// Show only the selected option in the dropdown
function showOnlySelectedOption(selectedValue, selectedText) {
    const options = defectOptionsList.querySelectorAll('.custom-option');
    
    options.forEach(option => {
        const value = option.getAttribute('data-value');
        if (value === selectedValue) {
            option.classList.remove('hidden');
            option.classList.add('selected');
        } else {
            option.classList.add('hidden');
            option.classList.remove('selected');
        }
    });
}

// Filter defect options based on search term (optimized)
function filterDefectOptions(searchTerm) {
    const options = defectOptionsList.querySelectorAll('.custom-option');
    let visibleCount = 0;
    
    options.forEach(option => {
        const text = option.textContent.toLowerCase();
        const isVisible = text.includes(searchTerm);
        
        if (isVisible) {
            option.classList.remove('hidden');
            visibleCount++;
        } else {
            option.classList.add('hidden');
        }
    });
    
    // Show "no results" message if no options match
    const noResultsMsg = defectOptionsList.querySelector('.no-results');
    if (visibleCount === 0 && searchTerm.length > 0) {
        if (!noResultsMsg) {
            const msg = document.createElement('div');
            msg.className = 'custom-option no-results';
            msg.textContent = 'No matching defect types found';
            msg.style.textAlign = 'center';
            msg.style.color = '#666';
            msg.style.fontStyle = 'italic';
            defectOptionsList.appendChild(msg);
        }
    } else if (noResultsMsg) {
        noResultsMsg.remove();
    }
}



// Format numbers with dashes for consecutive series and commas for non-consecutive
function formatDefectNumbers(numbers) {
    if (numbers.length === 0) return "";
    
    // Convert to numbers and sort numerically
    const sorted = [...numbers].map(n => parseInt(n)).sort((a, b) => a - b);
    
    let result = [];
    let start = sorted[0];
    let end = start;
    
    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] === end + 1) {
            end = sorted[i];
        } else {
            if (start === end) {
                result.push(start);
            } else {
                result.push(`${start}-${end}`);
            }
            start = sorted[i];
            end = sorted[i];
        }
    }
    
    // Add the last range
    if (start === end) {
        result.push(start);
    } else {
        result.push(`${start}-${end}`);
    }
    
    return result.join(', ');
}

// Format defect numbers preserving leading zeros
function formatDefectNumbersWithLeadingZeros(numberStrings) {
    if (numberStrings.length === 0) return "";
    
    // Create array of objects with original string and numeric value
    const numbersWithInt = numberStrings.map(numStr => ({ 
        original: numStr, 
        numeric: parseInt(numStr, 10) 
    }));
    
    // Sort by numeric value
    numbersWithInt.sort((a, b) => a.numeric - b.numeric);
    
    let result = [];
    let start = numbersWithInt[0];
    let end = start;
    
    for (let i = 1; i < numbersWithInt.length; i++) {
        const current = numbersWithInt[i];
        if (current.numeric === end.numeric + 1) {
            end = current;
        } else {
            if (start === end) {
                result.push(start.original);
            } else {
                result.push(`${start.original}-${end.original}`);
            }
            start = current;
            end = current;
        }
    }
    
    // Add the last range
    if (start === end) {
        result.push(start.original);
    } else {
        result.push(`${start.original}-${end.original}`);
    }
    
    return result.join(', ');
}
// Assign defect to photos - moved to DOMContentLoaded
function setupDefectAssignButton() {
    const defectAssignBtn = document.getElementById('defectAssignBtn');
    if (!defectAssignBtn) {
        window.logger.error('defectAssignBtn element not found');
        return;
    }
    
defectAssignBtn.addEventListener('click', function() {
    // Check if we're in edit mode
    const isEditMode = window.editingDefectId && window.editingDefectNo;
    
    const category = defectCategorySelect.value;
    // Get defect type from direct input first, fallback to dropdown selection
    const defectType = defectTypeDirectInput.value.trim() || defectTypeSelect.getAttribute('data-selected');
    const isImminent = imminentDangerSwitch.checked;
    
    // Get inspection number from header (not from the readonly field)
    const inspectionNo = document.getElementById('locationId').value.trim();
    
    // Get location data from the form fields
    const floor = document.getElementById('defectFloor').value.trim();
    const areaName = document.getElementById('defectAreaName').value.trim();
    const roomNo = document.getElementById('defectRoomNo').value.trim();
    const description = document.getElementById('defectDescription').value.trim();
    const existingCondition = document.getElementById('defectExistingCondition').value.trim();
    const humidity = document.getElementById('defectHumidity').value.trim();
    const moisture = document.getElementById('defectMoisture').value.trim();
    const chloride = document.getElementById('defectChloride').value.trim();
    const carbonation = document.getElementById('defectCarbonation').value.trim();
    const remedialWorks = document.getElementById('defectRemedialWorks').value.trim();
    const preventiveWorks = document.getElementById('defectPreventiveWorks').value.trim();
    const remarks = document.getElementById('defectRemarks').value.trim();
    
    // 新增：同步 header 欄位資料
    const headerInspectionNo = document.getElementById('locationId').value.trim();
    const inspectionDate = document.getElementById('inspectionDate').value.trim();
    
    // Always set pending defect data for double-click creation
    window.logger.log('Setting pendingDefectData for double-click defect mark creation...');
    
        // Find the full category name from the category ID
        const categoryOption = document.querySelector(`#defectCategory option[value="${category}"]`);
        const fullCategoryName = categoryOption ? categoryOption.textContent : category;
        
        // Store defect data for auto create defect mark
    window.pendingDefectData = {
            defectNo: document.getElementById('defectNo').value.trim(),
            inspectionNo: inspectionNo,
            inspectionDate: inspectionDate,
            photoNumbers: document.getElementById('defectPhotoNo').value.trim(),
            categories: fullCategoryName,
            defectType: defectType
        };
        
    window.logger.log('pendingDefectData set:', window.pendingDefectData);

    if (!category) {
        showNotification('Please select a category', 'error');
        return;
    }
    if (!defectType) {
        showNotification('Please enter or select a defect type', 'error');
        return;
    }
    
    // Extract numbers from selected photos
    const numbers = [];
    selectedPhotos.forEach(index => {
        const file = allPhotos[index];
        const fileName = file.name;
        const numberMatch = fileName.match(/\d+/);
        if (numberMatch) {
            // Store the exact string to preserve leading zeros
            numbers.push(numberMatch[0]);
        }
    });
    
    if (numbers.length === 0) {
        showNotification('No numbers found in selected photos', 'warning');
        return;
    }
    
    // Format numbers using the new function that preserves leading zeros
    const formattedNumbers = formatDefectNumbersWithLeadingZeros(numbers);
    const entry = `${formattedNumbers}_${defectType}`;
    
    // Get photo numbers from selected photos
    const photoNumbers = selectedPhotos.map(index => {
        const file = allPhotos[index];
        const numberMatch = file.name.match(/\d+/);
        return numberMatch ? numberMatch[0] : '';
    }).filter(num => num !== '').sort((a, b) => parseInt(a) - parseInt(b));
    
    // Format photo numbers same as defects categories content
    let formattedPhotoNumbers = '';
    if (photoNumbers.length > 0) {
        if (photoNumbers.length === 1) {
            formattedPhotoNumbers = photoNumbers[0];
        } else {
            // Group consecutive numbers
            const ranges = [];
            let start = parseInt(photoNumbers[0]);
            let end = start;
            
            for (let i = 1; i < photoNumbers.length; i++) {
                const current = parseInt(photoNumbers[i]);
                if (current === end + 1) {
                    end = current;
                } else {
                    if (start === end) {
                        ranges.push(start.toString());
                    } else {
                        ranges.push(`${start}-${end}`);
                    }
                    start = current;
                    end = current;
                }
            }
            
            // Add the last range
            if (start === end) {
                ranges.push(start.toString());
            } else {
                ranges.push(`${start}-${end}`);
            }
            
            formattedPhotoNumbers = ranges.join(', ');
        }
    }
    
    // Add to defect entries with enhanced data
    const defectEntry = {
        id: Date.now() + Math.random(), // Unique ID
        range: formattedNumbers,
        description: defectType, // This is the defect type
        category: category,
        numbers: numbers,
        photoNumbers: formattedPhotoNumbers, // Add photo numbers
        imminentDanger: isImminent,
        // New fields for defect summary - match defect-form fields exactly
        defectNo: document.getElementById('defectNo').value.trim(), // Add missing defectNo
        floor: floor,
        areaName: areaName,
        roomNo: roomNo,
        descriptionConstruction: description, // This is the description/construction field
        existingCondition: existingCondition,
        humidity: humidity,
        moisture: moisture,
        chloride: chloride,
        carbonation: carbonation,
        remedialWorks: remedialWorks,
        preventiveWorks: preventiveWorks,
        remarks: remarks,
        // 新增 header 欄位
        locationId: headerInspectionNo,
        inspectionDate: inspectionDate,
        inspectionNo: inspectionNo,
        // Add defectType field for detail table
        defectType: defectType
    };
    window.defectEntries.push(defectEntry);
    window.submittedDefectEntries.push(defectEntry);
    // Note: updateDefectSummaryTable() will be called when data is saved in all defects detail-table-container
    
    // 將缺陷數據複製到缺陷類別內容（使用格式化的範圍和描述）
    const defectNo = document.getElementById('defectNo').value.trim();
    const defectCategoryEntry = `${defectNo}) ${formattedNumbers}_${defectType}`;
    if (!categoryNumbers.j.includes(defectCategoryEntry)) {
        categoryNumbers.j.push(defectCategoryEntry);
    }
    
    // Mark photos as assigned
    selectedPhotos.forEach(index => {
        const file = allPhotos[index];
        assignedPhotos.j.add(file.name);
        
        const photoItem = document.querySelector(`.photo-item[data-index="${index}"]`);
        if (photoItem) {
            photoItem.classList.add('assigned');
            const img = photoItem.querySelector('img');
            if (img) {
                img.style.filter = 'grayscale(100%)';
                img.style.opacity = '0.3';
            }
        }
    });
    
    // Also assign the same photos to the selected category (A-I)
    if (category && category !== 'j') {
        const numbersToAssign = [];
        
        selectedPhotos.forEach(index => {
            const file = allPhotos[index];
            const fileName = file.name;
            const numberMatch = fileName.match(/\d+/);
            
            if (numberMatch) {
                const number = numberMatch[0];
                if (!categoryNumbers[category].includes(number)) {
                    categoryNumbers[category].push(number);
                    assignedPhotos[category].add(fileName);
                    numbersToAssign.push(number);
                }
            }
        });
        
        if (numbersToAssign.length > 0) {
            updateCategoryDisplay(category);
            showNotification(`Also assigned ${numbersToAssign.length} numbers to category ${category.toUpperCase()}`, 'info');
        }
    }
    
    updateCategoryDisplay('j');
    
    // Update Inspection Records Defects based on inspection number
    updateInspectionRecordsDefects(inspectionNo, defectEntry);
    
    showNotification(`Defect added to category J`, 'success');
    
    // Clear selection after assignment
    selectedPhotos = [];
    updatePhotoSelection();
    updateSelectedCount();
    
    // Close defect window
    defectWindow.style.display = 'none';
    
    // Check if PDF file has been uploaded AND loaded (drawing mode is available)
    const floorPlanCanvas = document.getElementById('floorPlanCanvas');
    const floorPlanViewer = document.getElementById('floorPlanViewer');
    const hasPDFData = localStorage.getItem('pne_floorplan_data');
    const hasPDFFilename = localStorage.getItem('pne_floorplan_filename');
    
    // More strict check: PDF must be loaded AND canvas must have content AND viewer must be visible
    const isCanvasLoaded = floorPlanCanvas && floorPlanCanvas.width > 0 && floorPlanCanvas.height > 0;
    const isViewerVisible = floorPlanViewer && floorPlanViewer.style.display !== 'none';
    const hasPDFLoaded = isCanvasLoaded && isViewerVisible;
    
    const isDrawingModeAvailable = hasPDFLoaded && (hasPDFData || hasPDFFilename);
    
    window.logger.log('Drawing mode check:', {
        floorPlanCanvas: !!floorPlanCanvas,
        canvasWidth: floorPlanCanvas ? floorPlanCanvas.width : 0,
        canvasHeight: floorPlanCanvas ? floorPlanCanvas.height : 0,
        floorPlanViewer: !!floorPlanViewer,
        viewerDisplay: floorPlanViewer ? floorPlanViewer.style.display : 'N/A',
        hasPDFData: !!hasPDFData,
        hasPDFFilename: !!hasPDFFilename,
        isCanvasLoaded: isCanvasLoaded,
        isViewerVisible: isViewerVisible,
        hasPDFLoaded: hasPDFLoaded,
        isDrawingModeAvailable: isDrawingModeAvailable
    });
    
    if (isDrawingModeAvailable) {
        // Drawing mode: Set pending defect data and open floor plan content for defect mark placement
        window.logger.log('Drawing mode available - setting pending defect data and opening floor plan content');
        
        // Pending defect data is set for double-click creation in drawing mode
        window.logger.log('Pending defect data set for double-click creation:', {
            pendingDefectData: window.pendingDefectData,
            readyForDoubleClick: !!window.pendingDefectData
        });
        
        // Trigger the workflow that will show the reminder popup
        triggerAutoCreateDefectMark();
    } else {
        // Non-drawing mode: Clear pending defect data and only transfer data to detail-table
        window.logger.log('Non-drawing mode - clearing pending defect data and transferring to detail-table only');
        window.pendingDefectData = null; // Clear pending data since we're not in drawing mode
        
        // Update defect summary table to reflect the new data
        if (typeof window.updateDefectSummaryTable === 'function') {
    window.updateDefectSummaryTable();
}
        window.logger.log('Non-drawing mode: Updated defect summary table');
        
        showNotification('Defect record created successfully! Data saved to detail table.', 'success');
    }
    
    // Handle edit mode
    if (isEditMode) {
        // Find and update the existing defect entry
        const defectEntryIndex = window.defectEntries.findIndex(entry => 
            String(entry.defectNo) === String(window.editingDefectNo)
        );
        
        if (defectEntryIndex >= 0) {
            // Update the existing entry with new data
            window.defectEntries[defectEntryIndex] = defectEntry;
            
            // Also update in submittedDefectEntries
            const submittedDefectEntryIndex = window.submittedDefectEntries.findIndex(entry => 
                String(entry.defectNo) === String(window.editingDefectNo)
            );
            
            if (submittedDefectEntryIndex >= 0) {
                submittedDefectEntries[submittedDefectEntryIndex] = defectEntry;
            }
            
            // Update corresponding defect mark if it exists
            if (window.defectMarks && window.defectMarks.length > 0) {
                const defectMarkIndex = window.defectMarks.findIndex(mark => 
                    String(mark.defectNo) === String(window.editingDefectNo)
                );
                
                if (defectMarkIndex >= 0) {
                    // Update defect mark data
                    window.defectMarks[defectMarkIndex] = {
                        ...window.defectMarks[defectMarkIndex],
                        defectNo: defectEntry.defectNo,
                        recordDate: defectEntry.inspectionDate,
                        photoNo: defectEntry.photoNumbers,
                        categories: defectEntry.category,
                        defectType: defectEntry.defectType
                    };
                    
                    // Save and redraw defect marks
                    if (typeof saveDefectMarksToStorage === 'function') {
                        saveDefectMarksToStorage();
                    }
                    if (typeof window.redrawDefectMarks === 'function') {
                        window.redrawDefectMarks();
                    }
                }
            }
            
            // Update corresponding label if it exists
            if (window.labels && window.labels.length > 0) {
                const labelIndex = window.labels.findIndex(label => 
                    String(label.defectNo) === String(window.editingDefectNo)
                );
                
                if (labelIndex >= 0) {
                    // Update label data
                    window.labels[labelIndex] = {
                        ...window.labels[labelIndex],
                        defectNo: defectEntry.defectNo,
                        inspectionNo: defectEntry.inspectionNo,
                        inspectionDate: defectEntry.inspectionDate,
                        photoNumbers: defectEntry.photoNumbers,
                        category: defectEntry.category,
                        defectType: defectEntry.defectType
                    };
                    
                    // Save and redraw labels
                    if (typeof window.saveLabelsToStorage === 'function') {
                        window.saveLabelsToStorage();
                    }
                    if (typeof window.redrawLabels === 'function') {
                        window.redrawLabels();
                    }
                    
                    // 同步到 defects detail-table-container（檢查缺陷記錄的變化）
                    syncLabelsToDefectsDetailTable();
                }
            }
            
            // Update defect summary table
            if (typeof window.updateDefectSummaryTable === 'function') {
    window.updateDefectSummaryTable();
}
            
            // 更新照片狀態
            if (typeof updatePhotoStatusFromLabels === 'function') {
                updatePhotoStatusFromLabels();
            }
            
            // Clear edit mode
            window.editingDefectId = null;
            window.editingDefectNo = null;
            
            showNotification(`缺陷記錄 ${window.editingDefectNo} 已更新`, 'success');
        } else {
            showNotification('找不到要編輯的缺陷記錄', 'error');
        }
    } else {
        // Normal creation mode - update defect summary table
        if (typeof window.updateDefectSummaryTable === 'function') {
    window.updateDefectSummaryTable();
}
        showNotification('Defect record created successfully! Data saved to detail table.', 'success');
    }
    
    // Save data to localStorage to persist defect entries
    saveDataToStorage();
    window.logger.log('Saved defect entries to localStorage after assignment');
    
    // 重置 defect no. 字段
    const defectNoInput = document.getElementById('defectNo');
    if (defectNoInput) {
        defectNoInput.value = '';
    }
    
    // Clear edit mode flags
    window.editingDefectId = null;
    window.editingDefectNo = null;
});
}




// 恢復照片分配狀態
function restorePhotoAssignmentStatus() {
    window.logger.log('Restoring photo assignment status...');
    
    // 遍歷所有照片項目
    const photoItems = document.querySelectorAll('.photo-item');
    photoItems.forEach((photoItem, index) => {
        const filename = photoItem.dataset.filename;
        if (!filename) return;
        
        // 檢查照片是否已分配給任何分類
        let isAssigned = false;
        for (const categoryId in assignedPhotos) {
            if (assignedPhotos[categoryId].has(filename)) {
                isAssigned = true;
                photoItem.classList.add('assigned');
                
                // 設置照片的視覺狀態
                const img = photoItem.querySelector('img');
                if (img) {
                    img.style.filter = 'grayscale(100%)';
                    img.style.opacity = '0.3';
                }
                break;
            }
        }
        
        // 如果照片未分配，確保移除分配狀態
        if (!isAssigned) {
            photoItem.classList.remove('assigned');
            const img = photoItem.querySelector('img');
            if (img) {
                img.style.filter = '';
                img.style.opacity = '';
            }
        }
    });
    
    window.logger.log('Photo assignment status restored');
}

// Load data from storage
async function loadDataFromStorage() {
    console.log('🔍 loadDataFromStorage: Starting to load data from IndexedDB');
    const savedData = await window.storageAdapter.getItemDirect('photoNumberExtractorData');
    console.log('🔍 loadDataFromStorage: Retrieved savedData from IndexedDB:', !!savedData);
    if (savedData) {
        console.log('🔍 loadDataFromStorage: savedData keys:', Object.keys(savedData));
        console.log('🔍 loadDataFromStorage: savedData.submittedFilenames:', savedData.submittedFilenames);
    }
    if (savedData) {
        try {
            const parsedData = savedData;
            
            // 檢查是否為新的 PNE 兼容格式
            const isPNEFormat = parsedData.version && parsedData.version.startsWith('7.1');
            window.logger.log('Page reload: Data format detected:', isPNEFormat ? 'PNE-compatible (v7.1+)' : 'Legacy format');
            
            // 載入基本數據 - 兼容新舊格式
            submittedData = parsedData.inspectionRecords || parsedData.submittedData || [];
            rowIdCounter = parsedData.rowIdCounter || 0;
            photoFolders = parsedData.photoFolders || [];
            
            // Load defect entries for persistence - 兼容新舊格式
            window.defectEntries = parsedData.photoAssignments?.defectEntries || parsedData.defectEntries || [];
            window.submittedDefectEntries = parsedData.submittedDefectEntries || [];
            window.logger.log('Page reload: Loaded defect entries from storage:', window.defectEntries.length, 'entries');
            
            // 載入 header 欄位 - 新格式
            if (parsedData.headerFields) {
                const headerFields = parsedData.headerFields;
                const locationId = document.getElementById('locationId');
                const inspectionDate = document.getElementById('inspectionDate');
                const floorHeader = document.getElementById('floorHeader');
                const areaNameHeader = document.getElementById('areaNameHeader');
                const roomNo = document.getElementById('roomNo');
                // 注意：sortToggle 已移動到導出設置頁面，這裡不再設置
                
                if (locationId) locationId.value = headerFields.inspectionNo || '';
                if (inspectionDate) inspectionDate.value = headerFields.inspectionDate || '';
                if (floorHeader) floorHeader.value = headerFields.floor || '';
                if (areaNameHeader) areaNameHeader.value = headerFields.areaName || '';
                if (roomNo) roomNo.value = headerFields.roomNo || '';
                // sortEnabled 設置將在導出設置頁面中處理
                
                window.logger.log('Page reload: Loaded header fields from PNE format');
            }
            
            // 載入檔案路徑資訊 - 新格式
            if (parsedData.filePaths) {
                const filePaths = parsedData.filePaths;
                if (filePaths.photoFolderPath && folderNameDisplay) {
                    folderNameDisplay.textContent = filePaths.photoFolderPath;
                }
                window.logger.log('Page reload: Loaded file paths from PNE format');
            }
            
            // 載入照片統計 - 新格式
            if (parsedData.totalPhotos !== undefined) {
                window.logger.log('Page reload: Total photos from PNE format:', parsedData.totalPhotos);
            }
            if (parsedData.totalAssignments !== undefined) {
                window.logger.log('Page reload: Total assignments from PNE format:', parsedData.totalAssignments);
            }
            
            // Fix: If defectEntries is empty but submittedDefectEntries has data, restore defectEntries
            if (window.defectEntries.length === 0 && window.submittedDefectEntries.length > 0) {
                window.logger.log('Page reload: defectEntries is empty but submittedDefectEntries has data, restoring defectEntries');
                window.defectEntries = [...window.submittedDefectEntries]; // Copy submittedDefectEntries to defectEntries
                window.logger.log('Page reload: Restored defectEntries from submittedDefectEntries:', window.defectEntries.length, 'entries');
            }
            
            // 同時清除缺陷標記，防止重新載入時重新填充缺陷條目
            if (typeof window.defectMarks !== 'undefined') {
                window.defectMarks = [];
                window.logger.log('Page reload: Cleared defect marks to prevent defect entries re-population');
            }
            
            // 清除 submittedData 中與缺陷標記相關的資料，防止缺陷摘要表格顯示缺陷標記資料
            if (submittedData && submittedData.length > 0) {
                const originalLength = submittedData.length;
                submittedData = submittedData.filter(row => {
                    // 保留不包含缺陷資料的檢查記錄，或只保留來自檢查記錄的缺陷資料
                    return !row.j || row.j === 'N/A' || !row.fromDefectMark;
                });
                window.logger.log(`Page reload: Filtered submittedData from ${originalLength} to ${submittedData.length} entries`);
                console.log('🔍 Filtered submittedData:', submittedData);
            }
            
            // 移除：不再設置 skipDefectMarksLoad 標誌，允許缺陷標記正常載入
            // window.skipDefectMarksLoad = true;
            // window.logger.log('Page reload: Set skipDefectMarksLoad flag to prevent defect marks reload');
            
            // 載入照片分配資料 - 優先使用 PNE 格式的 photoAssignments
            if (parsedData.photoAssignments) {
                const pa = parsedData.photoAssignments;
                
                // 載入類別編號
                if (pa.categoryNumbers) {
                    Object.keys(pa.categoryNumbers).forEach(categoryId => {
                        if (categoryNumbers[categoryId]) {
                            categoryNumbers[categoryId] = [...(pa.categoryNumbers[categoryId] || [])];
                        }
                    });
                    window.logger.log('Page reload: Loaded category numbers from photoAssignments');
                }
                
                // 載入已分配照片 - 兼容新舊格式
                if (pa.assignedPhotos) {
                    if (Array.isArray(pa.assignedPhotos)) {
                        // 新格式：assignedPhotos 是陣列，但需要轉換為物件格式
                        window.logger.log('Page reload: Converting assigned photos array to object format');
                        // 清空現有的 assignedPhotos
                        Object.keys(assignedPhotos).forEach(key => {
                            assignedPhotos[key].clear();
                        });
                        
                        // 從數組格式轉換為物件格式（這裡需要根據實際數據結構調整）
                        // 暫時跳過數組格式的處理，因為我們需要知道數組的結構
                        window.logger.warn('Array format assignedPhotos not yet supported, skipping');
                    } else if (typeof pa.assignedPhotos === 'object') {
                        // 舊格式：assignedPhotos 是物件
                        Object.keys(pa.assignedPhotos).forEach(categoryId => {
                            if (assignedPhotos[categoryId]) {
                                assignedPhotos[categoryId] = new Set(pa.assignedPhotos[categoryId] || []);
                            }
                        });
                        window.logger.log('Page reload: Loaded assigned photos object from photoAssignments (legacy format)');
                    }
                }
                
                // 載入缺陷條目
                if (Array.isArray(pa.defectEntries) && pa.defectEntries.length > 0) {
                    window.defectEntries = [...pa.defectEntries];
                    window.logger.log('Page reload: Loaded defect entries from photoAssignments');
                }
            } else {
                // 向後相容：讀取頂層欄位
            if (parsedData.assignedPhotos) {
                Object.keys(parsedData.assignedPhotos).forEach(categoryId => {
                    if (assignedPhotos[categoryId]) {
                        assignedPhotos[categoryId] = new Set(parsedData.assignedPhotos[categoryId]);
                    }
                });
                    window.logger.log('Page reload: Loaded assigned photos from storage (legacy)');
            }
            if (parsedData.categoryNumbers) {
                Object.keys(parsedData.categoryNumbers).forEach(categoryId => {
                    if (categoryNumbers[categoryId]) {
                        categoryNumbers[categoryId] = [...parsedData.categoryNumbers[categoryId]];
                    }
                });
                    window.logger.log('Page reload: Loaded category numbers from storage (legacy)');
                }
            }
            
            // 若已用 FSA handle 載入照片，需要合併 IndexedDB 中的額外照片（例如通過 Add photos 添加的）
            const alreadyLoadedPhotos = Array.isArray(allPhotos) && allPhotos.length > 0 && window.loadedFromHandles === true;
            
            // 載入已提交的檔案名稱
            if (parsedData.submittedFilenames) {
                submittedFilenames = new Set(parsedData.submittedFilenames);
                console.log('🔍 Page reload: Loaded submitted filenames:', submittedFilenames.size, 'files:', Array.from(submittedFilenames));
            } else {
                console.log('🔍 Page reload: No submittedFilenames found in parsedData');
                console.log('🔍 parsedData keys:', Object.keys(parsedData));
            }
            
            // 載入照片元資料
            if (parsedData.photoMetadata) {
                window.logger.log('Loading photo metadata from IndexedDB:', parsedData.photoMetadata.length);
                
                // 從元資料重建照片物件（包含 dataURL）
                const photosFromStorage = parsedData.photoMetadata.map(metadata => {
                    // 檢查 dataURL 的類型和內容
                    let dataURL = metadata.dataURL || '';
                    if (typeof dataURL === 'object') {
                        window.logger.warn(`Invalid dataURL type for ${metadata.name}:`, typeof dataURL);
                        dataURL = ''; // 重置為空字符串
                    }
                    
                    return {
                    name: metadata.name,
                    size: metadata.size || 0,
                    type: metadata.type || 'image/jpeg',
                        lastModified: metadata.lastModified || Date.now(),
                        webkitRelativePath: metadata.webkitRelativePath || '',
                        dataURL: dataURL // 恢復 dataURL 以顯示照片
                    };
                });
                
                if (alreadyLoadedPhotos) {
                    // 如果已從 FSA handle 載入照片，需要合併 IndexedDB 中的照片
                    window.logger.log('Merging photos from FSA handle with IndexedDB...');
                    const existingPhotoNames = new Set(allPhotos.map(p => p.name));
                    
                    // 找出 IndexedDB 中有但 FSA handle 沒有的照片（通過 Add photos 添加的）
                    const additionalPhotos = photosFromStorage.filter(p => !existingPhotoNames.has(p.name) && p.dataURL);
                    
                    if (additionalPhotos.length > 0) {
                        window.logger.log(`Found ${additionalPhotos.length} additional photos in IndexedDB (added via Add photos)`);
                        allPhotos.push(...additionalPhotos);
                        
                        // 重新渲染所有照片
                        setTimeout(async () => {
                            try {
                                const lazyObserver = initLazyLoading();
                                await renderPhotos(allPhotos, lazyObserver);
                                window.logger.log('Photos re-rendered with additional photos from IndexedDB');
                            } catch (error) {
                                window.logger.error('Error re-rendering photos:', error);
                            }
                        }, 100);
                    }
                } else {
                    // 沒有從 FSA handle 載入，直接使用 IndexedDB 的照片
                    allPhotos = photosFromStorage;
                    window.logger.log('Loaded photos with dataURL:', allPhotos.filter(p => p.dataURL).length, 'of', allPhotos.length);
                    
                    // 渲染載入的照片 - 修復：即使沒有 dataURL 也要渲染照片
                    if (allPhotos.length > 0) {
                        window.logger.log('Rendering loaded photos from storage...');
                        setTimeout(async () => {
                            try {
                                const lazyObserver = initLazyLoading();
                                await renderPhotos(allPhotos, lazyObserver);
                                window.logger.log('Photos rendered successfully from storage');
                                
                                // 更新資料夾顯示和按鈕可見性
                                updateFolderDisplay();
                                updateAddPhotosButtonVisibility();
                            } catch (error) {
                                window.logger.error('Error rendering photos from storage:', error);
                            }
                        }, 100);
                    }
                }
            } else if (!alreadyLoadedPhotos && parsedData.allPhotoFilenames) {
                // 向後相容：載入舊版本的照片檔案名稱
                window.logger.log('Loading allPhotoFilenames (legacy):', parsedData.allPhotoFilenames);
                allPhotos = parsedData.allPhotoFilenames.map(filename => ({
                    name: filename,
                    size: 0,
                    type: 'image/jpeg'
                }));
            }
            
            // 載入樓層平面圖數據
            if (parsedData.floorPlanLabels) {
                // 確保 window.labels 存在
                if (typeof window.labels === 'undefined') {
                    window.labels = [];
                }
                
                // 合併標籤數據，避免覆蓋新創建的標籤
                const existingLabels = window.labels || [];
                const storedLabels = parsedData.floorPlanLabels || [];
                
                // 如果現有標籤為空，直接使用存儲的標籤
                if (existingLabels.length === 0) {
                    window.labels = storedLabels;
                    window.logger.log('Loaded floor plan labels from storage (no existing labels):', window.labels.length);
                } else {
                    // 合併標籤，避免重複
                    const mergedLabels = [...existingLabels];
                    storedLabels.forEach(storedLabel => {
                        const exists = mergedLabels.some(existing => existing.id === storedLabel.id);
                        if (!exists) {
                            mergedLabels.push(storedLabel);
                        }
                    });
                    window.labels = mergedLabels;
                    window.logger.log('Merged floor plan labels from storage:', {
                        existing: existingLabels.length,
                        stored: storedLabels.length,
                        merged: window.labels.length
                    });
                }
                
                // 標籤數據載入後，同步到檢查記錄表格（只顯示）
                if (typeof syncLabelsToInspectionRecords === 'function') {
                    syncLabelsToInspectionRecords();
                    window.logger.log('Synced labels to inspection records after loading from storage');
                }
                
                // 檢查樓層平面圖 canvas 是否已經準備好，如果準備好了才重新渲染標籤
                const floorPlanCanvas = document.getElementById('floorPlanCanvas');
                if (floorPlanCanvas && floorPlanCanvas.width > 0) {
                    // Canvas 已經準備好，立即渲染標籤
                    if (typeof window.redrawLabels === 'function') {
                        window.redrawLabels();
                        window.logger.log('Redrawn labels on floor plan after loading from storage (canvas ready)');
                    }
                } else {
                    // Canvas 還沒準備好，設置標誌以便稍後渲染
                    window.logger.log('Floor plan canvas not ready yet, labels will be rendered when drawing mode opens');
                    window.pendingLabelsRedraw = true;
                }
            }
            
            // 載入缺陷標記數據
            if (parsedData.floorPlanDefectMarks && typeof window.defectMarks !== 'undefined') {
                window.defectMarks = parsedData.floorPlanDefectMarks;
                window.logger.log('Loaded floor plan defect marks from storage:', window.defectMarks.length);
                
                // 檢查樓層平面圖 canvas 是否已經準備好，如果準備好了才重新渲染缺陷標記
                const floorPlanCanvas = document.getElementById('floorPlanCanvas');
                if (floorPlanCanvas && floorPlanCanvas.width > 0) {
                    // Canvas 已經準備好，立即渲染缺陷標記
                if (typeof window.redrawDefectMarks === 'function') {
                    window.redrawDefectMarks();
                        window.logger.log('Redrawn defect marks on floor plan after loading from storage (canvas ready)');
                    }
                } else {
                    // Canvas 還沒準備好，設置標誌以便稍後渲染
                    window.logger.log('Floor plan canvas not ready yet, defect marks will be rendered when drawing mode opens');
                    window.pendingDefectMarksRedraw = true;
                }
            }
            
            // 載入樓層平面圖視圖狀態 - 新格式
            if (parsedData.floorPlanViewState) {
                const viewState = parsedData.floorPlanViewState;
                window.currentScale = viewState.scale || 1.0;
                window.translateX = viewState.translateX || 0;
                window.translateY = viewState.translateY || 0;
                window.baseScale = viewState.baseScale || 1.0;
                window.labelSizeScale = viewState.labelSizeScale || 24;
                window.defectMarkSizeScale = viewState.defectMarkSizeScale || 24;
                
                // 設置標記，表示需要在 PDF 載入後應用視圖狀態
                window.pendingViewStateRestore = true;
                
                window.logger.log('Page reload: Loaded floor plan view state from PNE format');
            }
            
            // 載入嵌入的 PDF 數據 - 新格式
            if (parsedData.embeddedPDF && parsedData.embeddedPDF.hasEmbeddedPDF) {
                window.logger.log('Page reload: Found embedded PDF data in PNE format');
                
                // 將嵌入的 PDF 數據保存到 localStorage
                localStorage.setItem('pne_floorplan_base64', parsedData.embeddedPDF.base64Data);
                localStorage.setItem('pne_floorplan_data', JSON.stringify(parsedData.embeddedPDF.metadata));
                localStorage.setItem('pne_floorplan_filename', parsedData.embeddedPDF.filename);
                
                window.logger.log('Page reload: Embedded PDF data restored to localStorage');
            }
            
            window.logger.log('Page reload: Loaded defect marks from storage');
            
            // 不從 submittedData 重建表格，而是從標籤數據動態生成檢查記錄表格
            // 檢查記錄表格將在標籤數據載入後通過 syncLabelsToInspectionRecords 生成
            
            // 更新所有分類顯示
            categories.forEach(category => {
                updateCategoryDisplay(category.id);
            });
            
            // 更新缺陷摘要表格
            if (typeof window.updateDefectSummaryTable === 'function') {
                window.updateDefectSummaryTable();
            }
            
            // 更新分類記錄表格
            if (typeof window.updateCategoryTablesFromInspectionRecords === 'function') {
                window.updateCategoryTablesFromInspectionRecords();
                window.logger.log('Page reload: Updated category tables from inspection records');
            }
            
            // 恢復照片分配狀態
            if (!alreadyLoadedPhotos && allPhotos && allPhotos.length > 0) {
                setTimeout(() => {
                    // 首先更新照片提交狀態（從 submittedData 和 submittedFilenames）
                    if (typeof updatePhotoStatusFromInspectionRecords === 'function') {
                        updatePhotoStatusFromInspectionRecords();
                        window.logger.log('Page reload: Updated photo submission status from inspection records');
                    }
                    
                    restorePhotoAssignmentStatus();
                    // 驗證照片狀態是否與當前標籤數據一致
                    if (typeof updatePhotoStatusFromLabels === 'function') {
                        updatePhotoStatusFromLabels();
                    }
                }, 100);
            }
            
            // 更新缺陷分類顯示
            updateCategoryDisplay('j');
            
            // 顯示重新選擇訊息（如果有提交的資料且資料夾名稱存在）
            if (folderNameDisplay.textContent && 
                folderNameDisplay.textContent !== '' && 
                submittedData.length > 0 &&
                !folderNameDisplay.textContent.includes('Selected Files')) {
                showReselectMessage();
            } else {
                // 如果沒有提交的資料，顯示正常空狀態
                if (submittedData.length === 0 && !(Array.isArray(allPhotos) && allPhotos.length > 0 && window.loadedFromHandles === true)) {
                    photoGrid.innerHTML = `
                        <div class="empty-preview">
                            <i class="fas fa-images fa-4x"></i>
                            <p>Select a folder to preview photos</p>
                            <button id="centerFolderBtn" class="center-folder-btn" onclick="selectPhotoFolder()">
                                <i class="fas fa-folder-open"></i> Select Photo Folder
                            </button>
                        </div>
                    `;
                }
            }
            
            // 更新資料夾顯示
            updateFolderDisplay();
            
            // 更新 Add photos 按鈕可見性
            updateAddPhotosButtonVisibility();
            
            // 顯示載入成功訊息
            if (parsedData.lastSaved) {
                const lastSavedDate = new Date(parsedData.lastSaved);
                const timeDiff = Date.now() - lastSavedDate.getTime();
                const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
                
                if (hoursDiff < 24) {
                    showNotification(`Data loaded successfully. Last saved: ${hoursDiff} hours ago`, 'success');
                } else {
                    const daysDiff = Math.floor(hoursDiff / 24);
                    showNotification(`Data loaded successfully. Last saved: ${daysDiff} days ago`, 'success');
                }
            }
            
            window.logger.log('Enhanced data loaded from localStorage successfully');
            
        } catch (e) {
            window.logger.error('Failed to parse saved data', e);
            showNotification('Failed to load saved data. Starting fresh.', 'error');
        }
    } else {
        // 沒有保存的資料，顯示正常空狀態
        if (!(Array.isArray(allPhotos) && allPhotos.length > 0 && window.loadedFromHandles === true)) {
        photoGrid.innerHTML = `
            <div class="empty-preview">
                <i class="fas fa-images fa-4x"></i>
                <p>Select a folder to preview photos</p>
                <button id="centerFolderBtn" class="center-folder-btn" onclick="selectPhotoFolder()">
                    <i class="fas fa-folder-open"></i> Select Photo Folder
                </button>
            </div>
        `;}
        
        // 更新 Add photos 按鈕可見性
        updateAddPhotosButtonVisibility();
    }
    
    // 注意：不再清除分類內容，因為現在會從 localStorage 載入
    window.logger.log('Data loading completed. Categories content preserved from localStorage');
}

// Clear all categories content on page reload
function clearCategoriesOnPageReload() {
    window.logger.log('Clearing all categories content on page reload');
    
    // Clear all category numbers
    categories.forEach(category => {
        categoryNumbers[category.id] = [];
    });
    
    // Clear all assigned photos
    categories.forEach(category => {
        assignedPhotos[category.id] = new Set();
    });
    
    // Clear defect entries
    window.defectEntries.length = 0;
    
    // Remove assigned class from all photos (but keep submitted class)
    document.querySelectorAll('.photo-item').forEach(item => {
        if (item.classList.contains('assigned') && !item.classList.contains('submitted')) {
            item.classList.remove('assigned');
            const img = item.querySelector('img');
            if (img) {
                img.style.filter = '';
                img.style.opacity = '';
            }
            
            // Always show photo number (extracted from filename)
            const photoNumberDiv = item.querySelector('.photo-number');
            if (photoNumberDiv) {
                const filename = item.dataset.filename;
                const numberMatch = filename.match(/\d+/);
                const number = numberMatch ? numberMatch[0] : '';
                photoNumberDiv.textContent = number;
            }
        }
    });
    
    // Update all category displays
    categories.forEach(category => {
        updateCategoryDisplay(category.id);
    });
    
    // Update defect summary table after clearing categories
    if (typeof window.updateDefectSummaryTable === 'function') {
    window.updateDefectSummaryTable();
}
    
    window.logger.log('All categories content cleared on page reload');
}

// Show folder reselection message
function showReselectMessage() {
    // Show if we have submitted data OR defect entries (indicating previous work)
    if (submittedData.length === 0 && window.defectEntries.length === 0) {
        return;
    }
    
    photoGrid.innerHTML = '';
    const message = document.createElement('div');
    message.className = 'overlay-message';
    
    const isFolderSupported = isWebkitDirectorySupported();
    const buttonText = isFolderSupported ? 'Re-select Folder' : 'Re-select Photos';
    const buttonIcon = isFolderSupported ? 'fa-folder-open' : 'fa-images';
    
    message.innerHTML = `
        <h3><i class="fas fa-exclamation-circle"></i> ${isFolderSupported ? 'Folder' : 'Photo'} Reselection Required</h3>
        <p>Photos from the previous session are not displayed.</p>
        <p>Please reselect the ${isFolderSupported ? 'folder' : 'photos'} to view images.</p>
        <p>${isFolderSupported ? 'Folder' : 'Session'}: ${folderNameDisplay.textContent}</p>
        <button class="overlay-btn" id="reselectFolderBtn" style="margin-top: 15px;">
            <i class="fas ${buttonIcon}"></i> ${buttonText}
        </button>
    `;
    photoGrid.appendChild(message);

    // Add event listener for the button
    const reselectBtn = message.querySelector('#reselectFolderBtn');
    reselectBtn.addEventListener('click', () => {
        selectPhotoFolder();
    });
}

// Reset photo preview state
async function resetPhotoState() {
    // Clear photo arrays
    allPhotos = [];
    selectedPhotos = [];
    submittedFilenames = new Set();
    
    // Reset category assignments
    categories.forEach(category => {
        assignedPhotos[category.id] = new Set();
    });
    
    // Reset UI elements
    folderNameDisplay.textContent = '';
    updateFolderDisplay();
    
    // Show empty preview
    renderPhotos([]);
    selectedCount.textContent = '0';
    
    // Update button visibility
    updateAddPhotosButtonVisibility();
    
    // Clear saved photo data from storage
    const savedData = await window.storageAdapter.getItemDirect('photoNumberExtractorData');
    if (savedData) {
        delete savedData.allPhotoFilenames;
        await window.storageAdapter.setItemDirect('photoNumberExtractorData', savedData);
    }
}

// Handle folder selection - moved to PNE dropdown menu

// Handle cancel button
cancelResetBtn.addEventListener('click', () => {
    globalOverlay.style.display = 'none';
});

// Handle force reset button
forceResetBtn.addEventListener('click', () => {
    // Clear the table and reset state
    clearTable();
    // Hide the overlay
    globalOverlay.style.display = 'none';
    // Now proceed with folder selection
    selectPhotoFolder();
});

// Resize image function (supports various sizes up to 600px)
function resizeImage(file) {
    return new Promise((resolve, reject) => {
        window.logger.log(`Processing image: ${file.name} (${file.size} bytes)`);
        
        // Check if this is a metadata object with dataURL (from PNE file)
        if (file.dataURL) {
            window.logger.log(`Using existing dataURL for: ${file.name}`);
            resolve(file.dataURL);
            return;
        }
        
        // Check file size (limit to 10MB to prevent memory issues)
        if (file.size > 10 * 1024 * 1024) {
            reject(new Error(`File ${file.name} is too large (${Math.round(file.size / 1024 / 1024)}MB). Please use images smaller than 10MB.`));
            return;
        }
        
        // Check if file is a proper File object
        if (!(file instanceof File) && !(file instanceof Blob)) {
            window.logger.error(`Invalid file object for: ${file.name}`, file);
            reject(new Error(`Invalid file object for: ${file.name}`));
            return;
        }
        
        const reader = new FileReader();
        
        reader.onerror = function() {
            window.logger.error(`Failed to read file: ${file.name}`);
            reject(new Error(`Failed to read file: ${file.name}`));
        };
        
        reader.onload = function(e) {
            window.logger.log(`File read successfully: ${file.name}`);
            const img = new Image();
            
            img.onerror = function() {
                window.logger.error(`Failed to load image: ${file.name}`);
                reject(new Error(`Failed to load image: ${file.name}`));
            };
            
            img.onload = function() {
                window.logger.log(`Image loaded successfully: ${file.name} (${img.width}x${img.height})`);
                try {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    
                    // Calculate new dimensions
                    const maxWidth = 640;
                    const scale = maxWidth / img.width;
                    const newWidth = maxWidth;
                    const newHeight = img.height * scale;
                    
                    window.logger.log(`Resizing ${file.name} from ${img.width}x${img.height} to ${newWidth}x${newHeight}`);
                    
                    // Check if dimensions are reasonable
                    if (newWidth <= 0 || newHeight <= 0 || newHeight > 2000) {
                        reject(new Error(`Invalid image dimensions for ${file.name}`));
                        return;
                    }
                    
                    canvas.width = newWidth;
                    canvas.height = newHeight;
                    
                    // Draw resized image
                    ctx.drawImage(img, 0, 0, newWidth, newHeight);
                    
                    // Convert to data URL with error handling
                    try {
                        const dataURL = canvas.toDataURL('image/jpeg', 0.8);
                        window.logger.log(`Image resized successfully: ${file.name}`);
                        resolve(dataURL);
                    } catch (canvasError) {
                        window.logger.warn(`Canvas failed for ${file.name}, using original:`, canvasError);
                        // Fallback: return original data URL if canvas fails
                        resolve(e.target.result);
                    }
                } catch (error) {
                    window.logger.warn(`Resizing failed for ${file.name}, using original:`, error);
                    // Fallback: return original data URL if resizing fails
                    resolve(e.target.result);
                }
            };
            
            img.src = e.target.result;
        };
        
        reader.readAsDataURL(file);
    });
}

// Intersection Observer for lazy loading (simplified since we're not using data-src anymore)
function initLazyLoading() {
    const lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Since we're loading images directly, just unobserve
                lazyObserver.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '100px 0px',
        threshold: 0.1
    });
    
    return lazyObserver;
}

// Check browser support for webkitdirectory
function isWebkitDirectorySupported() {
    const input = document.createElement('input');
    return 'webkitdirectory' in input;
}

// Select multiple files (fallback for Safari/Firefox)
function selectMultipleFiles() {
    window.logger.log('selectMultipleFiles called');
    
    // Show loading indicator
    showNotification('Please select photo files...', 'info', 2000);
    
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = 'image/*';
    input.style.display = 'none';
    
    // Add user gesture optimization
    input.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    
    input.addEventListener('change', async (e) => {
        window.logger.log('File input change event triggered');
        if (e.target.files.length > 0) {
            window.logger.log('Files selected (Safari/Firefox):', e.target.files.length);
            
            // Show processing notification
            showNotification('Processing photos...', 'info', 1000);
            
            // Filter only image files
            const imageFiles = Array.from(e.target.files).filter(file =>
                /\.(jpe?g|png|gif|bmp|webp)$/i.test(file.name)
            );
            
            window.logger.log('Valid image files (Safari/Firefox):', imageFiles.length);
            
            if (imageFiles.length === 0) {
                showNotification('No valid image files selected!', 'error');
                return;
            }
            
            // Set folder name to "Selected Files" for Safari/Firefox
            folderNameDisplay.textContent = `Selected Files (${imageFiles.length})`;
            
            // Process files immediately without additional confirmation
            allPhotos = imageFiles;
            
            // Sort photos by filename for sequential display
            allPhotos.sort((a, b) => {
                return a.name.localeCompare(b.name, undefined, {numeric: true, sensitivity: 'base'});
            });
            
            window.logger.log('Starting to render photos (Safari/Firefox)...');
            
            // Initialize lazy loading observer
            const lazyObserver = initLazyLoading();
            
            // Render photos
            await renderPhotos(allPhotos, lazyObserver);
            
            window.logger.log('Photos rendered successfully (Safari/Firefox)');
            
            updateFolderDisplay();
            
            // Update button visibility
            updateAddPhotosButtonVisibility();
            
            showNotification(`Successfully loaded ${imageFiles.length} images!`, 'success');
        } else {
            window.logger.log('No files selected');
            showNotification('No files selected', 'warning');
        }
    });
    
    window.logger.log('Appending input to body and clicking');
    document.body.appendChild(input);
    
    // Use requestAnimationFrame for smoother experience
    requestAnimationFrame(() => {
        input.click();
        // Clean up immediately after click
        setTimeout(() => {
            if (document.body.contains(input)) {
                document.body.removeChild(input);
            }
        }, 100);
    });
}

// Actual folder selection function
async function selectPhotoFolder() {
    // Clear all categories and defects content silently
    categories.forEach(category => {
        clearCategory(category.id, true);
    });
    
    // Show loading indicator
    showNotification('Please select a photo folder...', 'info', 2000);
    
    // Check if webkitdirectory is supported
    if (window.showDirectoryPicker) {
        // Preferred: File System Access API
        try {
            const dirHandle = await window.showDirectoryPicker();
            // Persist handle
            try { await window.storageAdapter.setItem('pne_photos_dir_handle', dirHandle); } catch (e) {}
            folderNameDisplay.textContent = dirHandle.name || 'Selected Folder';
            // Iterate files
            const imageFiles = [];
            for await (const [name, handle] of dirHandle.entries()) {
                if (handle.kind === 'file' && /\.(jpe?g|png|gif|bmp|webp)$/i.test(name)) {
                    const file = await handle.getFile();
                    imageFiles.push(file);
                }
            }
            if (imageFiles.length === 0) {
                showNotification('No valid image files found in the selected folder!', 'error');
                return;
            }
            allPhotos = imageFiles.sort((a, b) => a.name.localeCompare(b.name, undefined, {numeric: true, sensitivity: 'base'}));
            const lazyObserver = initLazyLoading();
            await renderPhotos(allPhotos, lazyObserver);
            updateFolderDisplay();
            updateAddPhotosButtonVisibility();
            showNotification('Photos loaded from folder!', 'success');
            return;
        } catch (e) {
            // fallback to input method
        }
    }
    if (isWebkitDirectorySupported()) {
        // Chrome/Edge - use folder selection
        const input = document.createElement('input');
        input.type = 'file';
        input.webkitdirectory = true;
        input.multiple = true;
        input.accept = 'image/*';
        input.style.display = 'none';
        
        // Add user gesture optimization
        input.addEventListener('click', (e) => {
            // Prevent any potential issues with the file dialog
            e.stopPropagation();
        });
        
        input.addEventListener('change', async (e) => {
            if (e.target.files.length > 0) {
                window.logger.log('Files selected:', e.target.files.length);
                
                // Show processing notification
                showNotification('Processing photos...', 'info', 1000);
                
                const path = e.target.files[0].webkitRelativePath;
                const folder = path.split('/')[0];
                folderNameDisplay.textContent = folder;
                
                // Filter only image files
                const imageFiles = Array.from(e.target.files).filter(file =>
                    /\.(jpe?g|png|gif|bmp|webp)$/i.test(file.name)
                );
                
                window.logger.log('Valid image files:', imageFiles.length);
                
                if (imageFiles.length === 0) {
                    showNotification('No valid image files found in the selected folder!', 'error');
                    return;
                }
                
                // Process files immediately without additional confirmation
                allPhotos = imageFiles;
                
                // Sort photos by filename for sequential display
                allPhotos.sort((a, b) => {
                    return a.name.localeCompare(b.name, undefined, {numeric: true, sensitivity: 'base'});
                });
                
                window.logger.log('Starting to render photos...');
                
                // Initialize lazy loading observer
                const lazyObserver = initLazyLoading();
                
                // Render photos
                await renderPhotos(allPhotos, lazyObserver);
                
                window.logger.log('Photos rendered successfully');
                
                updateFolderDisplay();
                
                // Update button visibility
                updateAddPhotosButtonVisibility();
                
                showNotification(`Successfully loaded ${imageFiles.length} images from folder: ${folder}`, 'success');
            } else {
                showNotification('No files selected', 'warning');
            }
        });
        
        // Optimize file dialog trigger
        document.body.appendChild(input);
        
        // Use requestAnimationFrame to ensure smooth user experience
        requestAnimationFrame(() => {
            input.click();
            // Clean up immediately after click
            setTimeout(() => {
                if (document.body.contains(input)) {
                    document.body.removeChild(input);
                }
            }, 100);
        });
    } else {
        // Safari/Firefox - directly use multiple file selection
        window.logger.log('Browser does not support folder selection, using multiple file selection');
        selectMultipleFiles();
    }
}

// Render only new photos without re-rendering existing ones
async function renderNewPhotosOnly(newPhotos, lazyObserver) {
    window.logger.log('renderNewPhotosOnly called with', newPhotos.length, 'new photos');
    
    if (newPhotos.length === 0) {
        window.logger.log('No new photos to render');
        return;
    }
    
    // Get current photo count to determine starting index
    const currentPhotoCount = document.querySelectorAll('.photo-item').length;
    window.logger.log('Current photo count:', currentPhotoCount);
    
    // Process new photos
    for (let i = 0; i < newPhotos.length; i++) {
        const file = newPhotos[i];
        const index = currentPhotoCount + i;
        
        try {
            window.logger.log(`Creating photo item for new photo: ${file.name}`);
            // Use the dataURL that was already created during add photos process
            const resizedImageURL = file.dataURL;
            window.logger.log(`Got resized URL for new photo: ${file.name}`);
            
            const photoItem = document.createElement('div');
            photoItem.className = 'photo-item';
            photoItem.dataset.index = index;
            photoItem.dataset.filename = file.name;
            photoItem.setAttribute('role', 'gridcell');
            photoItem.setAttribute('aria-label', `Photo ${index + 1}`);
            photoItem.draggable = true;
            
            // Check if this photo is already assigned to any category
            let isAssigned = false;
            for (const cat in assignedPhotos) {
                if (assignedPhotos[cat].has(file.name)) {
                    isAssigned = true;
                    photoItem.classList.add('assigned');
                    break;
                }
            }
            
            // Check if this photo has been submitted - validate against current labels data
            let isSubmitted = false;
            if (window.labels && Array.isArray(window.labels)) {
                // Check if photo is in any submitted label
                for (const label of window.labels) {
                    if (label.submitted && label.photoFilenames && label.photoFilenames.includes(file.name)) {
                        isSubmitted = true;
                        break;
                    }
                }
            } else {
                // Fallback to submittedFilenames if labels data is not available
                isSubmitted = submittedFilenames.has(file.name);
            }
            
            if (isSubmitted) {
                photoItem.classList.add('submitted');
            }
            
            // Extract number from filename
            const numberMatch = file.name.match(/\d+/);
            const number = numberMatch ? numberMatch[0] : 'N/A';
            
            // Add "new" icon for newly added photos
            const newIconHtml = file.isNewlyAdded ? '<div class="new-icon">new</div>' : '';
            window.logger.log(`New photo ${file.name}: isNewlyAdded=${file.isNewlyAdded}, newIconHtml=${newIconHtml ? 'added' : 'not added'}`);
            
            photoItem.innerHTML = `
                <img src="${resizedImageURL}" alt="${file.name}">
                <div class="photo-number">${number}</div>
                <div class="photo-status" id="status-${index}"></div>
                ${newIconHtml}
            `;
            
            // Set status text if submitted
            if (isSubmitted) {
                const statusDiv = photoItem.querySelector('.photo-status');
                if (statusDiv) {
                    // Find the location ID for this photo
                    for (const row of submittedData) {
                        if (row.photoFilenames.includes(file.name)) {
                            statusDiv.textContent = `Submitted to ${row.locationId}`;
                            statusDiv.style.display = 'flex';
                            break;
                        }
                    }
                }
            }
            
            // Set status text if assigned to category
            if (isAssigned) {
                const statusDiv = photoItem.querySelector('.photo-status');
                if (statusDiv && !isSubmitted) {
                    // Find which category this photo is assigned to
                    for (const cat in assignedPhotos) {
                        if (assignedPhotos[cat].has(file.name)) {
                            const categoryName = categories.find(catObj => catObj.id === cat)?.name || cat.toUpperCase();
                            statusDiv.textContent = `Assigned to ${categoryName}`;
                            statusDiv.style.display = 'flex';
                            statusDiv.style.zIndex = '10'; // Ensure status is above placeholder
                            break;
                        }
                    }
                }
            }
            
            // Add drag event listeners
            photoItem.addEventListener('dragstart', (event) => {
                event.dataTransfer.setData('text/plain', JSON.stringify({
                    type: 'photo',
                    index: index,
                    filename: file.name,
                    file: file
                }));
                photoItem.classList.add('dragging');
                window.logger.log('Photo drag started:', file.name);
            });
            
            photoItem.addEventListener('dragend', (event) => {
                photoItem.classList.remove('dragging');
                window.logger.log('Photo drag ended:', file.name);
            });
            
            // Add click event listener
            photoItem.addEventListener('click', (event) => {
                // Skip if photo is already assigned or submitted
                if (photoItem.classList.contains('assigned') || photoItem.classList.contains('submitted')) {
                    return;
                }
                
                // Handle selection with shift key
                if (event.shiftKey && selectedPhotos.length > 0) {
                    const lastIndex = selectedPhotos[selectedPhotos.length - 1];
                    const currentIndex = parseInt(photoItem.dataset.index);
                    
                    // Select range
                    const start = Math.min(lastIndex, currentIndex);
                    const end = Math.max(lastIndex, currentIndex);
                    
                    for (let j = start; j <= end; j++) {
                        // Skip already assigned photos
                        const item = document.querySelector(`.photo-item[data-index="${j}"]`);
                        if (item && (item.classList.contains('assigned') || item.classList.contains('submitted'))) {
                            continue;
                        }
                        
                        if (!selectedPhotos.includes(j)) {
                            selectedPhotos.push(j);
                        }
                    }
                } 
                // Handle selection with ctrl/cmd key
                else if (event.ctrlKey || event.metaKey) {
                    const currentIndex = parseInt(photoItem.dataset.index);
                    if (selectedPhotos.includes(currentIndex)) {
                        selectedPhotos = selectedPhotos.filter(i => i !== currentIndex);
                    } else {
                        selectedPhotos.push(currentIndex);
                    }
                }
                // Normal selection
                else {
                    const currentIndex = parseInt(photoItem.dataset.index);
                    selectedPhotos = [currentIndex];
                }
                
                updatePhotoSelection();
                updateSelectedCount();
            });
            
            // Add to lazy loading observer
            if (lazyObserver) {
                lazyObserver.observe(photoItem);
            }
            
            // Append to photo grid
            photoGrid.appendChild(photoItem);
            
            window.logger.log(`New photo item created and added: ${file.name}`);
            
        } catch (error) {
            window.logger.error(`Error creating photo item for ${file.name}:`, error);
        }
    }
    
    window.logger.log('renderNewPhotosOnly completed successfully');
}

// Render photos in the grid with lazy loading and resizing
async function renderPhotos(photos, lazyObserver, isNewPhotos = false) {
    window.logger.log('renderPhotos called with', photos.length, 'photos');
    
    // Clear the grid
    photoGrid.innerHTML = '';

    // If there are no photos, show reselect message if applicable
    if (photos.length === 0) {
        window.logger.log('No photos to render, showing empty state');
        // Show reselect message if we have submitted data OR defect entries (indicating previous work)
        if (folderNameDisplay.textContent && folderNameDisplay.textContent !== '' && (submittedData.length > 0 || window.defectEntries.length > 0)) {
            showReselectMessage();
        } else {
            // Show initial empty state
            photoGrid.innerHTML = `
                <div class="empty-preview">
                    <i class="fas fa-images fa-4x"></i>
                    <p>Select a folder to preview photos</p>
                </div>
            `;
        }
        return;
    }

    // Show loading state for large batches
    let loadingDiv = null;
    if (photos.length > 50) {
        photoGrid.innerHTML = `
            <div class="empty-preview">
                <i class="fas fa-spinner fa-spin fa-3x"></i>
                <p>Loading ${photos.length} photos...</p>
                <p>Please wait while we process your images</p>
            </div>
        `;
        loadingDiv = photoGrid.querySelector('.empty-preview');
    }

    selectedPhotos = [];
    updateSelectedCount();

    // Process photos in batches to prevent browser freezing
    const batchSize = 20;
    const totalBatches = Math.ceil(photos.length / batchSize);
    
    window.logger.log(`Processing ${photos.length} photos in ${totalBatches} batches of ${batchSize}`);
    
    for (let batchIndex = 0; batchIndex < totalBatches; batchIndex++) {
        const startIndex = batchIndex * batchSize;
        const endIndex = Math.min(startIndex + batchSize, photos.length);
        const batchPhotos = photos.slice(startIndex, endIndex);
        
        window.logger.log(`Processing batch ${batchIndex + 1}/${totalBatches} (photos ${startIndex + 1}-${endIndex})`);
        
        // Process batch
        for (let i = 0; i < batchPhotos.length; i++) {
            const index = startIndex + i;
            const file = batchPhotos[i];
            
            try {
                window.logger.log(`Creating photo item for: ${file.name}`);
                // Check if file already has a valid dataURL, or generate one for new photos
                let resizedImageURL;
                if (file.dataURL && typeof file.dataURL === 'string' && file.dataURL.trim() !== '') {
                    resizedImageURL = file.dataURL;
                    window.logger.log(`Using existing dataURL for: ${file.name}`);
                } else if (file instanceof File) {
                    // For new uploaded photos, generate dataURL
                    window.logger.log(`Generating dataURL for new photo: ${file.name}`);
                    resizedImageURL = await resizeImage(file);
                    file.dataURL = resizedImageURL; // Save for future use
                } else {
                    window.logger.warn(`No valid dataURL for ${file.name}, cannot render photo`);
                    continue; // 跳過這張照片
                }
                
                const photoItem = document.createElement('div');
                photoItem.className = 'photo-item';
                photoItem.dataset.index = index;
                photoItem.dataset.filename = file.name;
                photoItem.setAttribute('role', 'gridcell');
                photoItem.setAttribute('aria-label', `Photo ${index + 1}`);
                photoItem.draggable = true;
                
                // Check if this photo is already assigned to any category
                let isAssigned = false;
                for (const cat in assignedPhotos) {
                    if (assignedPhotos[cat].has(file.name)) {
                        isAssigned = true;
                        photoItem.classList.add('assigned');
                        break;
                    }
                }
                
                // Check if this photo has been submitted - prioritize submittedFilenames over labels data
                let isSubmitted = false;
                
                // First check submittedFilenames (most reliable for PNE file loaded data)
                if (submittedFilenames && submittedFilenames.has(file.name)) {
                    isSubmitted = true;
                    console.log(`🔍 Photo ${file.name} marked as submitted via submittedFilenames`);
                } else if (window.labels && Array.isArray(window.labels)) {
                    // Fallback to labels data if submittedFilenames doesn't have this photo
                    for (const label of window.labels) {
                        if (label.submitted && label.photoFilenames && label.photoFilenames.includes(file.name)) {
                            isSubmitted = true;
                            window.logger.log(`Photo ${file.name} marked as submitted via labels data`);
                            break;
                        }
                    }
                }
                
                if (isSubmitted) {
                    photoItem.classList.add('submitted');
                }
                
                // Extract number from filename
                const numberMatch = file.name.match(/\d+/);
                const number = numberMatch ? numberMatch[0] : 'N/A';
                
                // Add "new" icon for newly added photos
                const newIconHtml = file.isNewlyAdded ? '<div class="new-icon">new</div>' : '';
                window.logger.log(`Photo ${file.name}: isNewlyAdded=${file.isNewlyAdded}, newIconHtml=${newIconHtml ? 'added' : 'not added'}`);
                
                photoItem.innerHTML = `
                    <img src="${resizedImageURL}" alt="${file.name}">
                    <div class="photo-number">${number}</div>
                    <div class="photo-status" id="status-${index}"></div>
                    ${newIconHtml}
                `;
                
                // Set status text if submitted
                if (isSubmitted) {
                    const statusDiv = photoItem.querySelector('.photo-status');
                    if (statusDiv) {
                        // Find the location ID for this photo
                        let locationId = null;
                        
                        // First try to find from submittedData (if available)
                        if (submittedData && submittedData.length > 0) {
                            console.log(`🔍 Looking for ${file.name} in submittedData:`, submittedData.length, 'records');
                        for (const row of submittedData) {
                                console.log(`🔍 Checking row:`, row.locationId, 'photos:', row.photoFilenames);
                                if (row.photoFilenames && row.photoFilenames.includes(file.name)) {
                                    locationId = row.locationId;
                                    console.log(`🔍 Found locationId in submittedData: ${locationId}`);
                                break;
                            }
                        }
                        } else {
                            console.log(`🔍 submittedData is empty or null:`, submittedData);
                        }
                        
                        // If not found in submittedData, try to find from window.labels
                        if (!locationId && window.labels && Array.isArray(window.labels)) {
                            console.log(`🔍 Looking for ${file.name} in window.labels:`, window.labels.length, 'labels');
                            for (const label of window.labels) {
                                console.log(`🔍 Checking label:`, label.inspectionNo || label.locationId, 'submitted:', label.submitted, 'photos:', label.photoFilenames);
                                if (label.submitted && label.photoFilenames && label.photoFilenames.includes(file.name)) {
                                    locationId = label.inspectionNo || label.locationId;
                                    console.log(`🔍 Found locationId in window.labels: ${locationId}`);
                                    break;
                                }
                            }
                        } else {
                            console.log(`🔍 window.labels is empty or null:`, window.labels);
                        }
                        
                        if (locationId) {
                            statusDiv.textContent = `Submitted to ${locationId}`;
                            statusDiv.style.display = 'flex !important';
                            statusDiv.style.visibility = 'visible';
                            photoItem.classList.add('submitted');
                            console.log(`🔍 Photo ${file.name} status set to: Submitted to ${locationId}`);
                            console.log(`🔍 DOM check - statusDiv.textContent: "${statusDiv.textContent}"`);
                            console.log(`🔍 DOM check - statusDiv.style.display: "${statusDiv.style.display}"`);
                            console.log(`🔍 DOM check - statusDiv.offsetHeight: ${statusDiv.offsetHeight}`);
                        } else {
                            // Fallback: just show "Submitted" without location ID
                            statusDiv.textContent = 'Submitted';
                            statusDiv.style.display = 'flex !important';
                            statusDiv.style.visibility = 'visible';
                            photoItem.classList.add('submitted');
                            console.log(`🔍 Photo ${file.name} status set to: Submitted (no location ID found)`);
                        }
                    }
                }
                
                // Set status text if assigned to category
                if (isAssigned) {
                    const statusDiv = photoItem.querySelector('.photo-status');
                    if (statusDiv && !isSubmitted) {
                        // Find which category this photo is assigned to
                        for (const cat in assignedPhotos) {
                            if (assignedPhotos[cat].has(file.name)) {
                                const categoryName = categories.find(catObj => catObj.id === cat)?.name || cat.toUpperCase();
                                statusDiv.textContent = `Assigned to ${categoryName}`;
                                statusDiv.style.display = 'flex';
                                statusDiv.style.zIndex = '10'; // Ensure status is above placeholder
                                break;
                            }
                        }
                    }
                }
                
                photoItem.addEventListener('click', (event) => {
                    // Skip if photo is already assigned or submitted
                    if (photoItem.classList.contains('assigned') || photoItem.classList.contains('submitted')) {
                        return;
                    }
                    
                    // Handle selection with shift key
                    if (event.shiftKey && selectedPhotos.length > 0) {
                        const lastIndex = selectedPhotos[selectedPhotos.length - 1];
                        const currentIndex = parseInt(photoItem.dataset.index);
                        
                        // Select range
                        const start = Math.min(lastIndex, currentIndex);
                        const end = Math.max(lastIndex, currentIndex);
                        
                        for (let j = start; j <= end; j++) {
                            // Skip already assigned photos
                            const item = document.querySelector(`.photo-item[data-index="${j}"]`);
                            if (item && (item.classList.contains('assigned') || item.classList.contains('submitted'))) {
                                continue;
                            }
                            
                            if (!selectedPhotos.includes(j)) {
                                selectedPhotos.push(j);
                            }
                        }
                    } 
                    // Handle selection with ctrl/cmd key
                    else if (event.ctrlKey || event.metaKey) {
                        const index = parseInt(photoItem.dataset.index);
                        if (selectedPhotos.includes(index)) {
                            selectedPhotos = selectedPhotos.filter(j => j !== index);
                        } else {
                            selectedPhotos.push(index);
                        }
                    } 
                    // Single selection
                    else {
                        selectedPhotos = [parseInt(photoItem.dataset.index)];
                    }
                    
                    // Update UI
                    updatePhotoSelection();
                    updateSelectedCount();
                });
                
                // Append to grid
                photoGrid.appendChild(photoItem);
                
                // Observe for lazy loading
                lazyObserver.observe(photoItem);
                
            } catch (error) {
                window.logger.warn(`Failed to process image: ${file.name}`, error);
                // Continue with next image instead of breaking
            }
        }
        
        // Update loading message for large batches
        if (loadingDiv && batchIndex < totalBatches - 1) {
            const progress = Math.round(((batchIndex + 1) / totalBatches) * 100);
            loadingDiv.innerHTML = `
                <i class="fas fa-spinner fa-spin fa-3x"></i>
                <p>Loading ${photos.length} photos... ${progress}%</p>
                <p>Please wait while we process your images</p>
            `;
        }
        
        // Allow browser to breathe between batches
        if (batchIndex < totalBatches - 1) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }
    
    // Clear loading message if it exists
    if (loadingDiv) {
        loadingDiv.remove();
    }
    
    window.logger.log('renderPhotos completed successfully');
    
    // 確保照片狀態與當前檢查記錄同步
    setTimeout(() => {
        if (typeof updatePhotoStatusFromInspectionRecords === 'function') {
            updatePhotoStatusFromInspectionRecords();
        }
    }, 100);
}

// Update photo selection UI
function updatePhotoSelection() {
    document.querySelectorAll('.photo-item').forEach(item => {
        const index = parseInt(item.dataset.index);
        if (selectedPhotos.includes(index)) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });
    
    // Update defect photo numbers if defect window is open
    if (defectWindow && defectWindow.style.display === 'block') {
        updateDefectPhotoNumbers();
    }
}

// Update selected photo count
function updateSelectedCount() {
    selectedCount.textContent = selectedPhotos.length;
}
// Assign selected photos to a category
function assignToCategory(categoryId) {
    if (selectedPhotos.length === 0) {
        showNotification('Please select photos first', 'warning');
        return;
    }
    
    let addedCount = 0;
    
    selectedPhotos.forEach(index => {
        const file = allPhotos[index];
        const fileName = file.name;
        
        // Extract numbers from filename
        const numberMatch = fileName.match(/\d+/);
        
        if (numberMatch) {
            const number = numberMatch[0];
            if (!categoryNumbers[categoryId].includes(number)) {
                categoryNumbers[categoryId].push(number);
                assignedPhotos[categoryId].add(fileName);
                addedCount++;
                
                // Mark photo as assigned
                const photoItem = document.querySelector(`.photo-item[data-index="${index}"]`);
                if (photoItem) {
                    photoItem.classList.add('assigned');
                    photoItem.querySelector('img').style.filter = 'grayscale(100%)';
                    photoItem.querySelector('img').style.opacity = '0.3';
                    
                    // Update photo number display
                    const photoNumberDiv = photoItem.querySelector('.photo-number');
                    if (photoNumberDiv) {
                        photoNumberDiv.textContent = number;
                    }
                }
            }
        }
    });
    
    if (addedCount > 0) {
        updateCategoryDisplay(categoryId);
        showNotification(`Added ${addedCount} numbers to category ${categoryId.toUpperCase()}`, 'success');
        
        // Clear selection after assignment
        selectedPhotos = [];
        updatePhotoSelection();
        updateSelectedCount();
    } else {
        showNotification('No new numbers added to this category', 'info');
    }
}

// Format numbers into ranges with improved formatting
function formatNumbers(numbers) {
    if (numbers.length === 0) return "";
    
    // Convert to numbers for sorting but keep original strings
    const sorted = [...numbers].sort((a, b) => parseInt(a) - parseInt(b));
    
    let result = [];
    let start = sorted[0];
    let end = start;
    
    for (let i = 1; i < sorted.length; i++) {
        const current = sorted[i];
        const prev = sorted[i-1];
        
        // Check if consecutive
        if (parseInt(current) === parseInt(end) + 1) {
            end = current;
        } else {
            if (start === end) {
                result.push(start);
            } else {
                result.push(`${start}-${end}`);
            }
            start = current;
            end = current;
        }
    }
    
    // Add the last range
    if (start === end) {
        result.push(start);
    } else {
        result.push(`${start}-${end}`);
    }
    
    return result.join(', ');
}

// Format date as "13 May 2025"
function formatDateDisplay(dateString) {
    if (!dateString) return "";
    
    const date = new Date(dateString);
    if (isNaN(date)) return "";
    
    const day = date.getDate();
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    
    return `${day}-${month}-${year}`;
}

// Format date as "13 May 2025" for folder names
function formatFolderDate(dateString) {
    if (!dateString) return "";
    
    const date = new Date(dateString);
    if (isNaN(date)) return "";
    
    const day = date.getDate();
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    
    return `${day}-${month}-${year}`;
}

// Update the display for a category
function updateCategoryDisplay(categoryId) {
    const contentDiv = document.getElementById(`result-${categoryId}`);
    const countBadge = document.getElementById(`count-${categoryId}`);
    const clearBtn = document.querySelector(`.clear-category-btn[data-category="${categoryId}"]`);
    
    // For defects category (J), use different formatting
    if (categoryId === 'j') {
        contentDiv.innerHTML = '';
        
        // 顯示缺陷類別內容（從缺陷表單複製的數據），而不是所有缺陷詳細表格容器的記錄
        if (categoryNumbers.j.length > 0) {
            categoryNumbers.j.forEach(entry => {
                const entryDiv = document.createElement('div');
                entryDiv.className = 'defect-entry';
                entryDiv.textContent = entry;
                contentDiv.appendChild(entryDiv);
            });
        } else {
            contentDiv.innerHTML = '<div class="empty-state">No defects in category</div>';
        }
        
        // 更新計數
        if (countBadge) {
            countBadge.textContent = categoryNumbers.j.length;
        }
        
        return; // 提前返回，不執行後續的缺陷詳細表格邏輯
    }
    
    // For other categories
    contentDiv.textContent = formatNumbers(categoryNumbers[categoryId]);
    countBadge.textContent = categoryNumbers[categoryId].length;
    // Show/hide clear button based on whether category has content
    if (categoryId === 'j' ? categoryNumbers.j.length > 0 : categoryNumbers[categoryId].length > 0) {
        clearBtn.classList.add('visible');
    } else {
        clearBtn.classList.remove('visible');
    }
}

// Clear a specific category - MODIFIED to preserve numbers with defect entries
function clearCategory(categoryId, silent = false) {
    if (categoryId === 'j') {
        // For defects category, clear categoryNumbers.j (defect category content)
        if (categoryNumbers.j.length === 0) {
            if (!silent) {
                showNotification(`Category ${categoryId.toUpperCase()} is already empty`, 'info');
            }
            return;
        }
        
        // If in silent mode (called from selectPhotoFolder), don't clear existing defect category content
        if (silent) {
            window.logger.log('Silent mode: Preserving existing defect category content during photo operations');
            return;
        }
        
        // Clear defect category content (but keep defect entries in detail table)
        categoryNumbers.j = [];
        
        // Remove assigned class from photos
        for (const filename of assignedPhotos[categoryId]) {
            const photoItems = document.querySelectorAll('.photo-item');
            for (const item of photoItems) {
                if (item.dataset.filename === filename) {
                    item.classList.remove('assigned');
                    const img = item.querySelector('img');
                    if (img) {
                        img.style.filter = '';
                        img.style.opacity = '';
                    }
                    
                    // Always show photo number (extracted from filename)
                    const photoNumberDiv = item.querySelector('.photo-number');
                    if (photoNumberDiv) {
                        const filename = item.dataset.filename;
                        const numberMatch = filename.match(/\d+/);
                        const number = numberMatch ? numberMatch[0] : '';
                        photoNumberDiv.textContent = number;
                    }
                }
            }
        }
        
        // Clear assigned photos
        assignedPhotos[categoryId] = new Set();
        
        // Update category display
        updateCategoryDisplay(categoryId);
        
        showNotification(`Category ${categoryId.toUpperCase()} cleared`, 'success');
    } else {
        // For non-defects categories
        if (categoryNumbers[categoryId].length === 0) {
            if (!silent) {
                showNotification(`Category ${categoryId.toUpperCase()} is already empty`, 'info');
            }
            return;
        }

        // Find numbers to preserve (those with defect entries)
        const preservedNumbers = new Set();
        window.defectEntries.forEach(entry => {
            if (entry.category === categoryId) {
                entry.numbers.forEach(num => {
                    // Convert to integer for comparison
                    const numInt = parseInt(num, 10);
                    if (!isNaN(numInt)) {
                        preservedNumbers.add(numInt);
                    }
                });
            }
        });

        // Filter out numbers without defect entries
        const keptNumbers = [];
        const removedNumbers = [];
        categoryNumbers[categoryId].forEach(numStr => {
            const numInt = parseInt(numStr, 10);
            if (!isNaN(numInt) && preservedNumbers.has(numInt)) {
                keptNumbers.push(numStr);
            } else {
                removedNumbers.push(numStr);
            }
        });

        // Update category numbers
        categoryNumbers[categoryId] = keptNumbers;

        // Update assigned photos
        const newAssignedPhotos = new Set();
        for (const filename of assignedPhotos[categoryId]) {
            const numberMatch = filename.match(/\d+/);
            if (numberMatch) {
                const numStr = numberMatch[0];
                const numInt = parseInt(numStr, 10);
                if (preservedNumbers.has(numInt)) {
                    newAssignedPhotos.add(filename);
                }
            }
        }
        assignedPhotos[categoryId] = newAssignedPhotos;

        // Update photo grid for removed numbers
        removedNumbers.forEach(number => {
            // Find photos with this number
            allPhotos.forEach((file, index) => {
                const fileNumber = file.name.match(/\d+/);
                if (fileNumber && fileNumber[0] === number) {
                    const photoItem = document.querySelector(`.photo-item[data-index="${index}"]`);
                    if (photoItem) {
                        // Only remove assignment if not in defects category
                        if (!assignedPhotos.j.has(file.name)) {
                            photoItem.classList.remove('assigned');
                            const img = photoItem.querySelector('img');
                            if (img) {
                                img.style.filter = '';
                                img.style.opacity = '';
                            }
                            
                            // Always show photo number (extracted from filename)
                            const photoNumberDiv = photoItem.querySelector('.photo-number');
                            if (photoNumberDiv) {
                                const filename = photoItem.dataset.filename;
                                const numberMatch = filename.match(/\d+/);
                                const number = numberMatch ? numberMatch[0] : '';
                                photoNumberDiv.textContent = number;
                            }
                        }
                    }
                }
            });
        });

        updateCategoryDisplay(categoryId);
        showNotification(`Category ${categoryId.toUpperCase()} cleared`, 'success');
    }
}

// Clear a specific defect entry
function clearDefectEntry(entryId) {
    window.logger.log('clearDefectEntry called with ID:', entryId);
    window.logger.log('Current defectEntries:', window.defectEntries);
    const entryIndex = window.defectEntries.findIndex(entry => entry.id === entryId);
    if (entryIndex === -1) {
        window.logger.log('Entry not found in defectEntries');
        return;
    }
    
    const entry = window.defectEntries[entryIndex];
    
    // CALL DATA RENEWAL SYSTEM FOR DEFECT DELETION
    // Find the inspection record that contains this defect
    const inspectionRecord = submittedData.find(record => record.locationId === entry.locationId);
    if (inspectionRecord) {
        // Get photo filenames for this defect
        const defectPhotoFilenames = [];
        if (entry.numbers && entry.numbers.length > 0) {
            entry.numbers.forEach(number => {
                allPhotos.forEach(file => {
                    const fileName = file.name;
                    const numberMatch = fileName.match(/\d+/);
                    if (numberMatch && numberMatch[0] === number) {
                        defectPhotoFilenames.push(fileName);
                    }
                });
            });
        }
        
        window.logger.log('Clearing defect entry - photo filenames:', defectPhotoFilenames);
        
        // Remove photos from inspection record
        defectPhotoFilenames.forEach(filename => {
            const index = inspectionRecord.photoFilenames.indexOf(filename);
            if (index > -1) {
                inspectionRecord.photoFilenames.splice(index, 1);
                window.logger.log(`Removed ${filename} from inspection record ${entry.locationId} due to defect deletion`);
            }
        });
        
        // Update folder name
        updateInspectionRecordFolderName(inspectionRecord);
        
        // Update photoFolders
        const folderIndex = photoFolders.findIndex(folder => folder.locationId === entry.locationId);
        if (folderIndex !== -1) {
            defectPhotoFilenames.forEach(filename => {
                const photoIndex = photoFolders[folderIndex].photos.indexOf(filename);
                if (photoIndex > -1) {
                    photoFolders[folderIndex].photos.splice(photoIndex, 1);
                }
            });
            
            // Remove folder if empty
            if (photoFolders[folderIndex].photos.length === 0) {
                photoFolders.splice(folderIndex, 1);
                window.logger.log(`Removed empty folder for ${entry.locationId}`);
            }
        }
        
        // Update photo status in UI
        defectPhotoFilenames.forEach(filename => {
            const photoItems = document.querySelectorAll('.photo-item');
            for (const item of photoItems) {
                if (item.dataset.filename === filename) {
                    const statusDiv = item.querySelector('.photo-status');
                    if (statusDiv) {
                        statusDiv.textContent = '';
                    }
                    // Remove submitted class if no longer in any record
                    const stillInUse = submittedData.some(record => 
                        record.photoFilenames.includes(filename) && record.locationId !== entry.locationId
                    );
                    if (!stillInUse) {
                        item.classList.remove('submitted');
                        submittedFilenames.delete(filename);
                    }
                }
            }
        });
    }
    
    // Release the photo assignments for this defect
    entry.numbers.forEach(number => {
        const numInt = parseInt(number, 10);
        if (isNaN(numInt)) return;
        
        // Find filenames matching this number
        allPhotos.forEach(file => {
            const fileName = file.name;
            const numberMatch = fileName.match(/\d+/);
            if (numberMatch) {
                const fileNumInt = parseInt(numberMatch[0], 10);
                if (fileNumInt === numInt) {
                    // Remove from assigned photos for defects category
                    assignedPhotos.j.delete(fileName);
                    
                    // Also remove from the linked category if exists
                    if (entry.category && entry.category !== 'j') {
                        assignedPhotos[entry.category].delete(fileName);
                        
                        // Remove from category numbers
                        const index = categoryNumbers[entry.category].indexOf(numberMatch[0]);
                        if (index !== -1) {
                            categoryNumbers[entry.category].splice(index, 1);
                        }
                    }
                }
            }
        });
    });
    
    // Remove the entry from both arrays
    window.defectEntries.splice(entryIndex, 1);
    
    // Also remove from submittedDefectEntries if it exists
    const submittedEntryIndex = window.submittedDefectEntries.findIndex(e => String(e.id) === String(entryId));
    if (submittedEntryIndex !== -1) {
        window.submittedDefectEntries.splice(submittedEntryIndex, 1);
    }
    
    // Remove from Inspection Records if it exists
    if (entry.locationId) {
        const inspectionRecord = submittedData.find(row => row.locationId === entry.locationId);
        if (inspectionRecord && inspectionRecord.j && inspectionRecord.j !== 'N/A') {
            const defectStr = `${entry.range}_${entry.description}`;
            const existingDefects = inspectionRecord.j.split('\n');
            const oldDefectPattern = `${entry.range}_${entry.description}`;
            const filteredDefects = existingDefects.filter(defect => {
                const cleanDefect = defect.trim().replace(/^\* /, ''); // Remove asterisk prefix
                return cleanDefect !== oldDefectPattern;
            });
            inspectionRecord.j = filteredDefects.length > 0 ? filteredDefects.join('\n') : 'N/A';
            
            // Update the inspection record's row
            const rowElement = document.querySelector(`tr[data-id="${inspectionRecord.id}"]`);
            if (rowElement) {
                rowElement.children[13].textContent = inspectionRecord.j;
                // Check if there are any remaining imminent danger defects
                const hasRemainingImminentDanger = filteredDefects.some(defect => defect.trim().startsWith('* '));
                inspectionRecord.hasImminentDanger = hasRemainingImminentDanger;
                rowElement.children[14].textContent = hasRemainingImminentDanger ? 'Yes' : 'No';
            }
        }
    }
    
    // Update displays
    updateCategoryDisplay('j');
    // Update defect summary table to reflect the deletion
    if (typeof window.updateDefectSummaryTable === 'function') {
    window.updateDefectSummaryTable();
}
    if (entry.category && entry.category !== 'j') {
        updateCategoryDisplay(entry.category);
    }
    
    // Update photo grid status
    updatePhotoGridAfterDefectRemoval();
    
    // Validate data integrity after deletion
    validateDataIntegrity();
    
    showNotification(`Defect entry cleared${entry.category && entry.category !== 'j' ? ' and linked numbers removed from category ' + entry.category.toUpperCase() : ''}`, 'success');
}

// Update photo grid after defect removal
function updatePhotoGridAfterDefectRemoval() {
    document.querySelectorAll('.photo-item').forEach(item => {
        const filename = item.dataset.filename;
        let isAssigned = false;
        let assignedNumber = null;
        
        // Check if still assigned to any category and get the assigned number
        for (const cat in assignedPhotos) {
            if (assignedPhotos[cat].has(filename)) {
                isAssigned = true;
                // Find the number assigned to this photo
                if (cat === 'j') {
                    // For defects category, find the defect entry that uses this photo
                    for (const entry of defectEntries) {
                        if (entry.numbers && entry.numbers.length > 0) {
                            const numberMatch = filename.match(/\d+/);
                            if (numberMatch && entry.numbers.includes(numberMatch[0])) {
                                assignedNumber = numberMatch[0];
                                break;
                            }
                        }
                    }
                } else {
                    // For other categories, find the number in categoryNumbers
                    const numberMatch = filename.match(/\d+/);
                    if (numberMatch && categoryNumbers[cat].includes(numberMatch[0])) {
                        assignedNumber = numberMatch[0];
                    }
                }
                break;
            }
        }
        
        if (isAssigned) {
            item.classList.add('assigned');
            const img = item.querySelector('img');
            if (img) {
                img.style.filter = 'grayscale(100%)';
                img.style.opacity = '0.3';
            }
            
            // Update photo number display
            const photoNumberDiv = item.querySelector('.photo-number');
            if (photoNumberDiv) {
                photoNumberDiv.textContent = assignedNumber || '';
            }
        } else {
            item.classList.remove('assigned');
            const img = item.querySelector('img');
            if (img) {
                img.style.filter = '';
                img.style.opacity = '';
            }
            
            // Always show photo number (extracted from filename)
            const photoNumberDiv = item.querySelector('.photo-number');
            if (photoNumberDiv) {
                const numberMatch = filename.match(/\d+/);
                const number = numberMatch ? numberMatch[0] : '';
                photoNumberDiv.textContent = number;
            }
        }
        
        // Remove status if no longer submitted
        if (!submittedFilenames.has(filename)) {
            item.classList.remove('submitted');
            const statusDiv = item.querySelector('.photo-status');
            if (statusDiv) {
                statusDiv.textContent = '';
            }
        }
    });
}

// Clear all categories function
function clearAllCategories() {
    // Check if any category has data
    const hasData = Object.values(categoryNumbers).some(numbers => numbers.length > 0) || window.defectEntries.length > 0;
    
    if (!hasData) {
        showNotification('All categories are already empty', 'info');
        return;
    }
    
    // Clear all category numbers
    categories.forEach(category => {
        categoryNumbers[category.id] = [];
    });
    
    // Clear all assigned photos
    categories.forEach(category => {
        assignedPhotos[category.id] = new Set();
    });
    
    // Clear defect entries
    window.defectEntries.length = 0;
    
    // Remove assigned class from all photos
    document.querySelectorAll('.photo-item').forEach(item => {
        // Only remove assigned class, keep submitted class
        if (item.classList.contains('assigned') && !item.classList.contains('submitted')) {
            item.classList.remove('assigned');
            const img = item.querySelector('img');
            if (img) {
                img.style.filter = '';
                img.style.opacity = '';
            }
            
            // Always show photo number (extracted from filename)
            const photoNumberDiv = item.querySelector('.photo-number');
            if (photoNumberDiv) {
                const filename = item.dataset.filename;
                const numberMatch = filename.match(/\d+/);
                const number = numberMatch ? numberMatch[0] : '';
                photoNumberDiv.textContent = number;
            }
        }
    });
    
    // Update all category displays
    categories.forEach(category => {
        updateCategoryDisplay(category.id);
    });
    
    // Update defect summary table
    if (typeof window.updateDefectSummaryTable === 'function') {
    window.updateDefectSummaryTable();
}
    
    // Clear selected photos
    selectedPhotos = [];
    updatePhotoSelection();
    updateSelectedCount();
    
    showNotification('All categories cleared successfully', 'success');
}

// Reset header-fields checkboxes to unchecked state
function resetHeaderCheckboxes() {
    const checkboxes = [
        'locationIdCheck',
        'inspectionDateCheck', 
        'floorHeaderCheck',
        'areaNameHeaderCheck',
        'roomNoCheck'
    ];
    
    // Reset all checkboxes to unchecked
    checkboxes.forEach(id => {
        const checkbox = document.getElementById(id);
        if (checkbox) {
            checkbox.checked = false;
        }
    });
    
    // Clear only room number input value (preserve inspection date, floor, and area name)
    // Note: inspection date, floor, and area name are preserved for next entry
    
    // Disable submit button after resetting checkboxes
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.5';
        submitBtn.style.cursor = 'not-allowed';
    }
    
    window.logger.log('Header checkboxes and fields reset to initial state');
}

// Header checkbox validation function
function checkHeaderCheckboxes() {
    const checkboxes = [
        'locationIdCheck',
        'inspectionDateCheck', 
        'floorHeaderCheck',
        'areaNameHeaderCheck',
        'roomNoCheck'
    ];
    
    const allChecked = checkboxes.every(id => {
        const checkbox = document.getElementById(id);
        return checkbox && checkbox.checked;
    });
    
    // Enable/disable submit button based on checkbox state
    if (submitBtn) {
        submitBtn.disabled = !allChecked;
        submitBtn.style.opacity = allChecked ? '1' : '0.5';
        submitBtn.style.cursor = allChecked ? 'pointer' : 'not-allowed';
    }
    
    return allChecked;
}

// Initialize header checkboxes
function initHeaderCheckboxes() {
    const checkboxes = [
        'locationIdCheck',
        'inspectionDateCheck', 
        'floorHeaderCheck',
        'areaNameHeaderCheck',
        'roomNoCheck'
    ];
    
    checkboxes.forEach(id => {
        const checkbox = document.getElementById(id);
        if (checkbox) {
            checkbox.addEventListener('change', checkHeaderCheckboxes);
        }
    });
    
    // Initial check and disable submit button
    checkHeaderCheckboxes();
    
    // Ensure submit button is initially disabled
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.5';
        submitBtn.style.cursor = 'not-allowed';
    }
}

// Add photos functionality
let addPhotosBtn = null;
let addPhotosFileInput = null;

// Show/hide Add photos button - always show to allow adding more photos
function updateAddPhotosButtonVisibility() {
    // Get the button element each time to ensure it exists
    addPhotosBtn = document.getElementById('addPhotosBtn');
    if (addPhotosBtn) {
        addPhotosBtn.style.display = 'inline-block';
        window.logger.log('Add photos button is now visible');
    } else {
        window.logger.log('Add photos button not found');
    }
}

// Add photos button click handler - moved to DOMContentLoaded

// Submit data to table
submitBtn.addEventListener('click', () => {
    // Check if all header checkboxes are checked
    if (!checkHeaderCheckboxes()) {
        showNotification('Please check all header fields before submitting', 'error');
        return;
    }
    
    // Get location and date values
    const locationId = locationIdInput.value.trim();
    const inspectionDate = inspectionDateInput.value;
    const roomNo = roomNoInput.value.trim();
    // 新增：取得 header 的 Floor 與 Area Name
    const floor = document.getElementById('floorHeader').value.trim();
    const areaName = document.getElementById('areaNameHeader').value.trim();
    
    // Validate location ID
    if (!locationId) {
        showNotification('Please enter a location ID', 'error');
        locationIdInput.focus();
        return;
    }
    
    // Check for duplicate inspection number (skip if from label assignment)
    if (checkInspectionNoDuplicate(locationId, -1, isHeaderFromLabelAssignment)) {
        showNotification('This Inspection No. already exists in the labels detail table. Please use a different number.', 'error');
        locationIdInput.focus();
        return;
    }
    
    // Validate inspection date
    if (!inspectionDate) {
        showNotification('Please select an inspection date', 'error');
        inspectionDateInput.focus();
        return;
    }
    
    // Format date as "13 May 2025"
    const formattedDate = formatDateDisplay(inspectionDate);
    const folderDate = formatFolderDate(inspectionDate);
    
    // Check if any category has data
    const hasData = Object.values(categoryNumbers).some(numbers => numbers.length > 0) || window.defectEntries.length > 0;
    
    if (!hasData) {
        showNotification('No data to submit!', 'warning');
        return;
    }
    
    // Check for imminent danger in defect entries
    const hasImminentDanger = window.defectEntries.some(entry => entry.imminentDanger);
    
    // Get all assigned photo filenames (across all categories)
    const allAssignedFilenames = new Set();
    Object.values(assignedPhotos).forEach(filenames => {
        filenames.forEach(filename => allAssignedFilenames.add(filename));
    });
    
    // Get the photo numbers for folder naming
    const photoNumbers = [];
    for (const filename of allAssignedFilenames) {
        const numberMatch = filename.match(/\d+/);
        if (numberMatch) {
            photoNumbers.push(parseInt(numberMatch[0]));
        }
    }
    
    // Calculate min and max photo numbers
    let minNumber = Math.min(...photoNumbers);
    let maxNumber = Math.max(...photoNumbers);
    
    // Create folder structure if sorting is enabled
    let folderName = '';
    // 檢查是否啟用排序（從導出設置頁面獲取，默認啟用）
    const sortPhotosToFolder = document.getElementById('sortPhotosToFolder') ? 
        document.getElementById('sortPhotosToFolder').checked : true;
    
    if (sortPhotosToFolder && allAssignedFilenames.size > 0) {
        folderName = `${locationId}_${folderDate} (${minNumber}-${maxNumber})`;
        
        // Store folder data for export
        photoFolders.push({
            name: folderName,
            photos: Array.from(allAssignedFilenames),
            locationId: locationId
        });
        
        showNotification(`Folder created: ${folderName}`, 'info');
    }
    
    // Mark photos as submitted
    for (const filename of allAssignedFilenames) {
        submittedFilenames.add(filename);
        
        const photoItems = document.querySelectorAll('.photo-item');
        for (const item of photoItems) {
            if (item.dataset.filename === filename) {
                item.classList.add('submitted');
                
                // Remove "new" icon if it exists
                const newIcon = item.querySelector('.new-icon');
                if (newIcon) {
                    newIcon.remove();
                }
                
                // Clear the isNewlyAdded flag from the photo object
                const photoObject = allPhotos.find(photo => photo.name === filename);
                if (photoObject) {
                    photoObject.isNewlyAdded = false;
                }
                item.querySelector('img').style.filter = 'grayscale(100%)';
                item.querySelector('img').style.opacity = '0.3';
                // Add location ID to the photo status
                const statusDiv = item.querySelector('.photo-status');
                if (statusDiv) {
                    statusDiv.textContent = locationId;
                }
            }
        }
    }
    
    // Get formatted data from all categories
    const rowData = {
        id: rowIdCounter++,
        locationId: locationId,
        inspectionDate: formattedDate,
        inspectionDateRaw: inspectionDate, // Store raw date
        floor: floor, // <-- 新增
        areaName: areaName, // <-- 新增
        roomNo: roomNo,
        a: formatNumbers(categoryNumbers.a),
        b: formatNumbers(categoryNumbers.b),
        c: formatNumbers(categoryNumbers.c),
        d: formatNumbers(categoryNumbers.d),
        e: formatNumbers(categoryNumbers.e),
        f: formatNumbers(categoryNumbers.f),
        g: formatNumbers(categoryNumbers.g),
        h: formatNumbers(categoryNumbers.h),
        i: formatNumbers(categoryNumbers.i),
        // Use category content data instead of all defect entries
        j: categoryNumbers.j.join('\n'),
        photoFilenames: Array.from(allAssignedFilenames),
        folderName: folderName,
        hasImminentDanger: hasImminentDanger
    };
    
    // 將數據提交到標籤詳細表格而不是檢查記錄表格
    submitToLabelsDetailTable(rowData);
    
    // 不再添加到檢查記錄表格
    // submittedData.push(rowData);
    // addTableRow(rowData);
    
    // Clear all categories including defects
    categories.forEach(category => {
        // Remove assigned class from photos (but keep submitted)
        for (const filename of assignedPhotos[category.id]) {
            const photoItems = document.querySelectorAll('.photo-item');
            for (const item of photoItems) {
                if (item.dataset.filename === filename) {
                    item.classList.remove('assigned');
                }
            }
        }
        
        // Clear category data
        categoryNumbers[category.id] = [];
        assignedPhotos[category.id] = new Set();
        
        updateCategoryDisplay(category.id);
    });
    
    // 不清除缺陷條目，保持缺陷詳細表格的數據
    // window.defectEntries.length = 0;
    // submittedDefectEntries.length = 0;
    
    // 不更新缺陷摘要表格，保持現有數據
    // if (typeof window.updateDefectSummaryTable === 'function') {
    //     window.updateDefectSummaryTable();
    // }
    
    // Note: updateDefectSummaryTable() is not called here as per requirement
    // Submit button only affects inspection records table, not defect summary table
    
    // Clear location ID for next entry
    locationIdInput.value = '';
    // Clear room number for next entry
    roomNoInput.value = '';
    
    // Reset header-fields checkboxes to unchecked state
    resetHeaderCheckboxes();
    
    // 不再更新檢查記錄表格計數，只更新文件夾顯示
    // updateTableCount(); // 移除檢查記錄表格計數更新
    updateFolderDisplay();
    
    // Save data to localStorage
    saveDataToStorage();
    
    // 重置 skipDefectMarksLoad 標誌，允許缺陷標記正常載入
    window.skipDefectMarksLoad = false;
    window.logger.log('Submit completed: Reset skipDefectMarksLoad flag to allow defect marks loading');
    
    // Show success message
    showNotification('Data submitted to labels detail table!', 'success');
    // 不再更新檢查記錄表格，只更新分類表格
    setTimeout(updateCategoryTablesFromInspectionRecords, 100);
});

// 提交數據到標籤詳細表格
function submitToLabelsDetailTable(rowData) {
    // 創建標籤記錄（從分類內容提交時，標記為已提交）
    const labelRecord = {
        id: Date.now() + Math.random(),
        inspectionNo: rowData.locationId,
        floor: rowData.floor,
        areaName: rowData.areaName,
        roomNo: rowData.roomNo,
        inspectionDate: rowData.inspectionDateRaw,
        a: rowData.a,
        b: rowData.b,
        c: rowData.c,
        d: rowData.d,
        e: rowData.e,
        f: rowData.f,
        g: rowData.g,
        h: rowData.h,
        i: rowData.i,
        j: rowData.j,
        // imminentDanger 不應該在標籤層面設置，只由缺陷表單控制
        photoFilenames: rowData.photoFilenames,
        folderName: rowData.folderName,
        // 標記為已提交（藍色標籤）
        submitted: true,
        submittedAt: new Date().toISOString()
    };

    // 添加到標籤數組（若已存在同 inspectionNo 的標籤，改為更新 submitted 狀態）
    if (!window.labels) {
        window.labels = [];
    }
    const existingIndex = window.labels.findIndex(l => String(l.inspectionNo) === String(labelRecord.inspectionNo));
    if (existingIndex >= 0) {
        // 更新已存在的標籤為提交狀態，並保留既有座標/屬性和已提交的照片
        const existingLabel = window.labels[existingIndex];
        const existingPhotoFilenames = existingLabel.photoFilenames || [];
        const newPhotoFilenames = labelRecord.photoFilenames || [];
        
        // 合併已提交的照片和新提交的照片，避免重複
        const mergedPhotoFilenames = [...new Set([...existingPhotoFilenames, ...newPhotoFilenames])];
        
        window.labels[existingIndex] = {
            ...existingLabel,
            ...labelRecord,
            photoFilenames: mergedPhotoFilenames, // 使用合併後的照片列表
            submitted: true,
            submittedAt: new Date().toISOString()
        };
        
        window.logger.log(`Updated existing label ${labelRecord.inspectionNo}:`, {
            existingPhotos: existingPhotoFilenames.length,
            newPhotos: newPhotoFilenames.length,
            mergedPhotos: mergedPhotoFilenames.length
        });
    } else {
        window.labels.push(labelRecord);
    }

    // 保存到本地存儲
    if (typeof window.saveLabelsToStorage === 'function') {
        window.saveLabelsToStorage();
    }

    // 同時保存到主數據存儲
    saveDataToStorage();

    // 重新渲染標籤（如果在地圖上），以亮藍色顯示已提交標籤
    if (typeof window.redrawLabels === 'function') {
        window.redrawLabels();
    }

    // 不再同步到檢查記錄表格，只更新分類表格
    // syncLabelsToInspectionRecords(); // 移除檢查記錄表格同步
    
    // 更新分類表格
    if (typeof window.updateCategoryTablesFromInspectionRecords === 'function') {
    window.updateCategoryTablesFromInspectionRecords();
}

    // 更新照片狀態
    if (typeof updatePhotoStatusFromLabels === 'function') {
        updatePhotoStatusFromLabels();
    }

    window.logger.log('Data submitted to labels detail table:', labelRecord);
}

// 舊的匯出功能已移除，統一使用新的匯出功能

// Reset application state after export
function resetAfterExport() {
    // Clear submitted data
    submittedData = [];
    photoFolders = [];
    submittedFilenames = new Set();
    window.defectEntries.length = 0;
    window.submittedDefectEntries.length = 0;
    
    // Reset photo states
    document.querySelectorAll('.photo-item').forEach(item => {
        item.classList.remove('submitted', 'assigned');
        const img = item.querySelector('img');
        if (img) {
            img.style.filter = '';
            img.style.opacity = '';
        }
        const statusDiv = item.querySelector('.photo-status');
        if (statusDiv) {
            statusDiv.textContent = '';
        }
    });
    
    // Clear the table
    dataTableBody.innerHTML = '<tr><td colspan="13" class="empty-state">No data submitted yet</td></tr>';
    updateTableCount();
    updateFolderDisplay();
    
    // Clear assigned photos
    categories.forEach(category => {
        categoryNumbers[category.id] = [];
        assignedPhotos[category.id] = new Set();
        updateCategoryDisplay(category.id);
    });
    
    // Clear selected photos
    selectedPhotos = [];
    updatePhotoSelection();
    updateSelectedCount();
    
    // Clear folder info
    folderNameDisplay.textContent = '';
    updateFolderDisplay();
    
    // Reset header-fields checkboxes and input values
    resetHeaderCheckboxes();
    
    // Save cleared state to localStorage
    saveDataToStorage();
    
    // Clear photo data from storage
    const savedData = JSON.parse(localStorage.getItem('photoNumberExtractorData') || '{}');
    if (savedData) {
        delete savedData.allPhotoFilenames;
        localStorage.setItem('photoNumberExtractorData', JSON.stringify(savedData));
    }
    
    // 同步更新分類表格
    if (typeof window.updateCategoryTablesFromInspectionRecords === 'function') {
    window.updateCategoryTablesFromInspectionRecords();
}
    // Note: updateDefectSummaryTable() is called separately in the calling function
}

// Generate defects list without edit and delete buttons
function generateDefectsWithButtons(defectsString, rowId) {
    if (!defectsString || defectsString === 'N/A') {
        return 'N/A';
    }
    
    const defects = defectsString.split('\n').filter(defect => defect.trim());
    if (defects.length === 0) {
        return 'N/A';
    }
    
    return defects.map((defect, index) => {
        const defectId = `${rowId}_defect_${index}`;
        
        // 直接顯示缺陷文本，不添加額外編號（編號已包含在 categoriesGrid 的缺陷類別內容中）
        return `
            <div class="defect-item" data-defect-id="${defectId}" data-row-id="${rowId}" data-defect-index="${index}">
                <span class="defect-text">${defect}</span>
            </div>
        `;
    }).join('');
}

// Add a row to the table
function addTableRow(rowData) {
    // Remove empty state if exists
    if (dataTableBody.querySelector('.empty-state')) {
        dataTableBody.innerHTML = '';
    }
    
    const row = document.createElement('tr');
    row.setAttribute('data-id', rowData.id);
    row.innerHTML = `
        <td>${rowData.locationId}</td>
        <td>${rowData.inspectionDate}</td>
        <td>${[rowData.floor || 'N/A', rowData.areaName || 'N/A', rowData.roomNo || 'N/A'].join(', ')}</td>
        <td class="number-cell">${rowData.a ? rowData.a : 'N/A'}</td>
        <td class="number-cell">${rowData.b ? rowData.b : 'N/A'}</td>
        <td class="number-cell">${rowData.c ? rowData.c : 'N/A'}</td>
        <td class="number-cell">${rowData.d ? rowData.d : 'N/A'}</td>
        <td class="number-cell">${rowData.e ? rowData.e : 'N/A'}</td>
        <td class="number-cell">${rowData.f ? rowData.f : 'N/A'}</td>
        <td class="number-cell">${rowData.g ? rowData.g : 'N/A'}</td>
        <td class="number-cell">${rowData.h ? rowData.h : 'N/A'}</td>
        <td class="number-cell">${rowData.i ? rowData.i : 'N/A'}</td>
        <td class="defects-cell">${generateDefectsWithButtons(rowData.j, rowData.id)}</td>
    `;
    dataTableBody.appendChild(row);
}

// Update the table count badge
function updateTableCount() {
    const count = submittedData.length;
    tableCount.textContent = `${count} ${count === 1 ? 'entry' : 'entries'}`;
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const colors = {
        info: '#388e3c',
        success: '#2e7d32',
        warning: '#f57c00',
        error: '#c62828'
    };
    
    const icons = {
        info: 'info-circle',
        success: 'check-circle',
        warning: 'exclamation-circle',
        error: 'exclamation-triangle'
    };
    
    const icon = icons[type] || 'info-circle';
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-${icon}"></i> ${message}
    `;
    notification.style.backgroundColor = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    // Remove after animation completes
    setTimeout(() => notification.remove(), 1000);
}

// clearRow function removed - no longer needed as action column is removed

// Clear the entire table
async function clearTable() {
    if (submittedData.length === 0 && window.defectEntries.length === 0) {
        showNotification('Table is already empty', 'info');
        return;
    }
    // Release all submitted photos
    submittedData.forEach(row => {
        row.photoFilenames.forEach(filename => {
            submittedFilenames.delete(filename);
            const photoItems = document.querySelectorAll('.photo-item');
            for (const item of photoItems) {
                if (item.dataset.filename === filename) {
                    item.classList.remove('submitted');
                    const img = item.querySelector('img');
                    if (img) {
                        img.style.filter = '';
                        img.style.opacity = '';
                    }
                    const statusDiv = item.querySelector('.photo-status');
                    if (statusDiv) {
                        statusDiv.textContent = '';
                    }
                    
                    // Always show photo number (extracted from filename)
                    const photoNumberDiv = item.querySelector('.photo-number');
                    if (photoNumberDiv) {
                        const filename = item.dataset.filename;
                        const numberMatch = filename.match(/\d+/);
                        const number = numberMatch ? numberMatch[0] : '';
                        photoNumberDiv.textContent = number;
                    }
                }
            }
        });
    });
    // Clear submitted data and folders
    submittedData = [];
    photoFolders = [];
    submittedFilenames = new Set();
    window.defectEntries = []; // 完全重置數組引用，而不只是清空內容
    submittedDefectEntries = [];
    window.logger.log('clearTable: submittedDefectEntries cleared, length:', submittedDefectEntries.length);
    
    // Clear floor plan labels and defect marks
    if (typeof window.labels !== 'undefined') {
        window.labels = [];
        window.logger.log('clearTable: Cleared floor plan labels');
    }
    if (typeof window.defectMarks !== 'undefined') {
        window.defectMarks = [];
        window.logger.log('clearTable: Cleared floor plan defect marks');
    }
    
    // Clear floor plan localStorage
    if (typeof window.saveLabelsToStorage === 'function') {
        window.saveLabelsToStorage();
        window.logger.log('clearTable: Cleared floor plan labels localStorage');
    }
    if (typeof saveDefectMarksToStorage === 'function') {
        saveDefectMarksToStorage();
        window.logger.log('clearTable: Cleared floor plan defect marks localStorage');
    }
    
    // 額外清除缺陷標記的 localStorage 鍵
    localStorage.removeItem('pne_floorplan_defect_marks');
    window.logger.log('clearTable: Removed pne_floorplan_defect_marks from localStorage');
    
    // 設置標誌，防止後續重新載入缺陷標記
    window.skipDefectMarksLoad = true;
    window.logger.log('clearTable: Set skipDefectMarksLoad flag to prevent defect marks reload');
    // Clear the table
    dataTableBody.innerHTML = '<tr><td colspan="13" class="empty-state">No data submitted yet</td></tr>';
    updateTableCount();
    updateFolderDisplay();
    // 清空 Defect Summary table
    if (typeof window.updateDefectSummaryTable === 'function') {
    window.updateDefectSummaryTable();
}
    
    // 更新缺陷分類內容顯示
    updateCategoryDisplay('j');
    
    // 額外確保缺陷摘要表格被清空
    const defectSummaryTableBody = document.getElementById('defectSummaryTableBody');
    const defectSummaryCount = document.getElementById('defectSummaryCount');
    if (defectSummaryTableBody) {
        // 檢查是否還有資料行（不是空狀態行）
        const dataRows = defectSummaryTableBody.querySelectorAll('tr:not(.empty-state)');
        if (dataRows.length > 0) {
            window.logger.log('clearTable: Found data rows in defect summary table, forcing clear');
            defectSummaryTableBody.innerHTML = '<tr><td colspan="14" class="empty-state">No defect summary data yet</td></tr>';
            defectSummaryCount.textContent = '0 entries';
        }
    }
    // Save cleared state to localStorage
    saveDataToStorage();
    
    // 強制清除 IndexedDB 中的所有相關數據
    const currentData = await window.storageAdapter.getItemDirect('photoNumberExtractorData') || {};
    currentData.defectEntries = [];
    currentData.submittedDefectEntries = [];
    currentData.submittedData = [];
    currentData.photoFolders = [];
    currentData.submittedFilenames = [];
    currentData.folderName = '';
    // 確保所有缺陷相關數據都被清除
    currentData.defectMarks = [];
    currentData.floorPlanDefectMarks = [];
    // 清除樓層平面圖相關數據
    if (typeof window.labels !== 'undefined') {
        currentData.floorPlanLabels = [];
    }
    if (typeof window.defectMarks !== 'undefined') {
        currentData.floorPlanDefectMarks = [];
    }
    await window.storageAdapter.setItemDirect('photoNumberExtractorData', currentData);
    window.logger.log('clearTable: Forced clear of all data in IndexedDB');
    
    // 確保 localStorage 中的缺陷資料被完全清空
    window.logger.log('clearTable: Final check - submittedDefectEntries.length:', submittedDefectEntries.length);
    
    // 強制重新載入頁面狀態以確保所有表格都被正確清空
    setTimeout(() => {
        // 再次檢查並清空缺陷摘要表格
        const defectSummaryTableBody = document.getElementById('defectSummaryTableBody');
        const defectSummaryCount = document.getElementById('defectSummaryCount');
        if (defectSummaryTableBody && window.submittedDefectEntries.length === 0) {
            defectSummaryTableBody.innerHTML = '<tr><td colspan="14" class="empty-state">No defect summary data yet</td></tr>';
            defectSummaryCount.textContent = '0 entries';
            window.logger.log('clearTable: Forced clear of defect summary table');
        }
        
        // 確保 storage 中的資料也被正確清空
        const currentData = JSON.parse(localStorage.getItem('photoNumberExtractorData') || '{}');
        if (currentData.submittedDefectEntries && currentData.submittedDefectEntries.length > 0) {
            window.logger.log('clearTable: Found old data in storage, clearing it');
            currentData.submittedDefectEntries = [];
            localStorage.setItem('photoNumberExtractorData', JSON.stringify(currentData));
        }
        
        // 額外檢查：確保沒有其他地方重新載入資料
        window.logger.log('clearTable: Final verification - submittedDefectEntries.length:', window.submittedDefectEntries.length);
        if (window.submittedDefectEntries.length > 0) {
            window.logger.log('clearTable: WARNING - submittedDefectEntries was re-populated, clearing again');
            window.submittedDefectEntries.length = 0;
            if (typeof window.updateDefectSummaryTable === 'function') {
    window.updateDefectSummaryTable();
}
        }
    }, 100);
    
    showNotification('Table cleared successfully', 'success');
    // 同步更新分類表格
    if (typeof window.updateCategoryTablesFromInspectionRecords === 'function') {
    window.updateCategoryTablesFromInspectionRecords();
}
}







// Initialize the page
initCategories();
initCustomSelect();
// 修復：恢復自動載入數據，確保頁面重新載入時能恢復所有數據
loadDataFromStorage(); 
updateTableCount();
updateFolderDisplay();

// Immediately update defect summary table to display any existing detail-table records
if (typeof window.updateDefectSummaryTable === 'function') {
    window.updateDefectSummaryTable();
}

// 修復：不要在頁面重新載入時清空分類內容，保留已保存的數據
// Clear all category content on page reload to prevent persistence issues
// categories.forEach(category => {
//     updateCategoryDisplay(category.id);
// });
// window.logger.log('Page initialization: Cleared all category content on reload');

// 全局變數：追蹤標題欄位是否來自標籤分配
let isHeaderFromLabelAssignment = false;

// 全局重複檢查函數
function checkInspectionNoDuplicate(inspectionNo, excludeIndex = -1, isFromLabelAssignment = false) {
    if (!inspectionNo || !inspectionNo.trim()) {
        return false;
    }
    
    // 如果檢查號碼來自標籤編輯選單的分配，則不檢查重複
    if (isFromLabelAssignment) {
        return false;
    }
    
    const trimmedNo = inspectionNo.trim();
    
    // 檢查標籤詳細表格中的重複
    if (window.labels && Array.isArray(window.labels)) {
        for (let i = 0; i < window.labels.length; i++) {
            if (i !== excludeIndex && window.labels[i].inspectionNo === trimmedNo) {
                return true;
            }
        }
    }
    
    return false;
}

// 全局更新重複狀態函數
function updateDuplicateStatus(inputElement, inspectionNo, excludeIndex = -1) {
    if (!inputElement) return;
    
    const isDuplicate = checkInspectionNoDuplicate(inspectionNo, excludeIndex);
    
    if (isDuplicate) {
        inputElement.classList.add('duplicate-inspection-no');
    } else {
        inputElement.classList.remove('duplicate-inspection-no');
    }
    
    return isDuplicate;
}

// Add event listener for inspection number field in defect window (for new entries)


document.addEventListener('DOMContentLoaded', async function() {
    // Initialize storage adapter first
    try {
        await window.storageAdapter.init();
        window.logger.log('Storage adapter initialized successfully');
    } catch (error) {
        window.logger.error('Failed to initialize storage adapter:', error);
    }
    
    // Initialize language system
    initializeLanguageSystem();
    
    // Initialize zoom slider
    zoomSlider = document.getElementById('zoomSlider');
    
    window.logger.log('Zoom slider initialization:', {
        element: zoomSlider,
        value: zoomSlider ? zoomSlider.value : 'N/A',
        min: zoomSlider ? zoomSlider.min : 'N/A',
        max: zoomSlider ? zoomSlider.max : 'N/A'
    });
    
    // Setup defect assign button
    setupDefectAssignButton();
    
    const inspectionNoField = document.getElementById('defectInspectionNo');
    if (inspectionNoField) {
        inspectionNoField.addEventListener('input', function() {
            updateLocationFromInspectionNo(this.value);
            // 檢查重複並更新視覺狀態
            const inspectionNo = this.value.trim();
            updateDuplicateStatus(this, inspectionNo);
        });
        
        inspectionNoField.addEventListener('blur', function() {
            const inspectionNo = this.value.trim();
            updateDuplicateStatus(this, inspectionNo);
        });
    }
    
    // Initialize header checkboxes
    initHeaderCheckboxes();
    
    // 啟動詢問：若偵測到已保存資料，顯示恢復會話彈窗
    try {
        const saved = await window.storageAdapter.getItem('photoNumberExtractorData');
        const modal = document.getElementById('sessionRestoreModal');
        if (saved && modal) {
            // 僅在尚未載入任何資料時顯示
            modal.style.display = 'flex';
            const restoreBtn = document.getElementById('restoreSessionBtn');
            const startFreshBtn = document.getElementById('startFreshBtn');
            if (restoreBtn) {
                restoreBtn.onclick = async () => {
                    modal.style.display = 'none';
                    // 優先使用已保存的 FSA handles 自動載入 PDF 與照片
                    let loadedWithHandles = false;
                    try {
                        // PDF
                        const pdfHandle = await window.storageAdapter.getItem('pne_pdf_file_handle');
                        if (pdfHandle && pdfHandle.kind === 'file') {
                            const p = await pdfHandle.queryPermission?.();
                            if (p === 'granted' || (await pdfHandle.requestPermission?.()) === 'granted') {
                                const file = await pdfHandle.getFile();
                                const arrayBuffer = await file.arrayBuffer();
                                await loadPDFFromArrayBuffer(arrayBuffer, file.name);
                                const floorPlanOverlay = document.getElementById('floorPlanOverlay');
                                const floorPlanUploadArea = document.getElementById('floorPlanUploadArea');
                                const floorPlanViewer = document.getElementById('floorPlanViewer');
                                if (floorPlanOverlay) floorPlanOverlay.style.display = 'flex';
                                if (floorPlanUploadArea && floorPlanViewer) {
                                    floorPlanUploadArea.style.display = 'none';
                                    floorPlanViewer.style.display = 'flex';
                                }
                                loadedWithHandles = true;
                            }
                        }
                        // Photos folder
                        const dirHandle = await window.storageAdapter.getItem('pne_photos_dir_handle');
                        if (dirHandle && dirHandle.kind === 'directory') {
                            const p = await dirHandle.queryPermission?.({mode: 'read'});
                            if (p === 'granted' || (await dirHandle.requestPermission?.({mode: 'read'})) === 'granted') {
                                const imageFiles = [];
                                for await (const [name, handle] of dirHandle.entries()) {
                                    if (handle.kind === 'file' && /\.(jpe?g|png|gif|bmp|webp)$/i.test(name)) {
                                        const f = await handle.getFile();
                                        imageFiles.push(f);
                                    }
                                }
                                if (imageFiles.length > 0) {
                                    window.loadedFromHandles = true; // 標記避免之後覆寫 allPhotos
                                    allPhotos = imageFiles.sort((a, b) => a.name.localeCompare(b.name, undefined, {numeric: true, sensitivity: 'base'}));
                                    const lazyObserver = initLazyLoading();
                                    await renderPhotos(allPhotos, lazyObserver);
                                    updateFolderDisplay();
                                    updateAddPhotosButtonVisibility();
                                    loadedWithHandles = true;
                                }
                            }
                        }
                    } catch (e) { /* 忽略 handle 載入錯誤，退回一般載入 */ }

                    // 載入其餘資料（標籤、缺陷、分類…），並避免覆寫已由 handle 載入的照片
                    await loadDataFromStorage();

                    // 若未能用 handle 載入 PDF，檢查是否有嵌入的 PDF 數據
                    try {
                        if (!loadedWithHandles) {
                            // 檢查 localStorage 中是否有嵌入的 PDF 數據
                            const pdfBase64 = localStorage.getItem('pne_floorplan_base64');
                            const pdfFilename = localStorage.getItem('pne_floorplan_filename');
                            
                            if (pdfBase64 && pdfFilename) {
                                window.logger.log('Open previous: Found embedded PDF in localStorage, loading...');
                                try {
                                    // 將 base64 數據轉換為 ArrayBuffer
                                    const binaryString = atob(pdfBase64);
                                    const arrayBuffer = new ArrayBuffer(binaryString.length);
                                    const uint8Array = new Uint8Array(arrayBuffer);
                                    for (let i = 0; i < binaryString.length; i++) {
                                        uint8Array[i] = binaryString.charCodeAt(i);
                                    }
                                    
                                    // 載入 PDF
                                    await loadPDFFromArrayBuffer(arrayBuffer, pdfFilename);
                                    
                                    // 打開繪圖模式
                                    const floorPlanOverlay = document.getElementById('floorPlanOverlay');
                                    const floorPlanUploadArea = document.getElementById('floorPlanUploadArea');
                                    const floorPlanViewer = document.getElementById('floorPlanViewer');
                                    if (floorPlanOverlay) floorPlanOverlay.style.display = 'flex';
                                    if (floorPlanUploadArea && floorPlanViewer) {
                                        floorPlanUploadArea.style.display = 'none';
                                        floorPlanViewer.style.display = 'flex';
                                    }
                                    
                                    window.logger.log('Open previous: Embedded PDF loaded successfully');
                                } catch (error) {
                                    window.logger.error('Open previous: Error loading embedded PDF:', error);
                                    // 至少打開繪圖模式以便使用者看到提醒與載入按鈕
                                    const floorPlanOverlay = document.getElementById('floorPlanOverlay');
                                    if (floorPlanOverlay) floorPlanOverlay.style.display = 'flex';
                                }
                            } else {
                                // 沒有嵌入的 PDF，至少打開繪圖模式以便使用者看到提醒與載入按鈕
                                const floorPlanOverlay = document.getElementById('floorPlanOverlay');
                                if (floorPlanOverlay) floorPlanOverlay.style.display = 'flex';
                            }
                        }
                    } catch (e) { 
                        window.logger.error('Open previous: Error in PDF loading logic:', e);
                        // 至少打開繪圖模式
                        const floorPlanOverlay = document.getElementById('floorPlanOverlay');
                        if (floorPlanOverlay) floorPlanOverlay.style.display = 'flex';
                    }
                };
            }
            if (startFreshBtn) {
                startFreshBtn.onclick = async () => {
                    modal.style.display = 'none';
                    
                    // 顯示載入指示器
                    const globalLoadingOverlay = document.getElementById('globalLoadingOverlay');
                    const loadingMessage = document.getElementById('loadingMessage');
                    if (globalLoadingOverlay && loadingMessage) {
                        loadingMessage.textContent = '正在清除所有數據並重置應用程式...';
                        globalLoadingOverlay.style.display = 'flex';
                    }
                    
                    try {
                        // 1) 先清空 IndexedDB（包含先前儲存的 FSA handles 與資料）
                        console.log('開始清除 IndexedDB 數據...');
                        await window.storageAdapter.clear();
                        console.log('IndexedDB 數據清除完成');
                        
                    // 也同步清空 localStorage（保險移除殘留鍵）
                        try { 
                            localStorage.clear(); 
                            console.log('localStorage 數據清除完成');
                        } catch (e) { 
                            console.warn('localStorage 清除失敗:', e);
                        }
                        
                        // 2) 重置前端狀態，提供完全空白的開始
                        console.log('開始重置前端狀態...');
                        submittedData = [];
                        submittedDefectEntries = [];
                        photoFolders = [];
                        submittedFilenames = new Set();
                        rowIdCounter = 0;
                        allPhotos = [];
                        selectedPhotos = [];
                        
                        // 重置缺陷相關數據
                        if (typeof window.defectEntries !== 'undefined') {
                            window.defectEntries = [];
                        }
                        
                        // 重置分類數據
                        categories.forEach(category => {
                            categoryNumbers[category.id] = [];
                            assignedPhotos[category.id] = new Set();
                        });
                        
                        // 重置樓層平面圖與缺陷標記
                        if (typeof window.labels !== 'undefined') window.labels = [];
                        if (typeof window.defectMarks !== 'undefined') window.defectMarks = [];
                        if (typeof window.redrawLabels === 'function') window.redrawLabels();
                        if (typeof window.redrawDefectMarks === 'function') window.redrawDefectMarks();
                        
                        // 關閉並重置繪圖模式與 PDF 檢視
                        const floorPlanOverlay = document.getElementById('floorPlanOverlay');
                        const floorPlanUploadArea = document.getElementById('floorPlanUploadArea');
                        const floorPlanViewer = document.getElementById('floorPlanViewer');
                        const floorPlanCanvas = document.getElementById('floorPlanCanvas');
                        const labelLayer = document.getElementById('labelLayer');
                        const floorplanThumb = document.getElementById('floorplanThumb');
                        const floorplanThumbImg = document.getElementById('floorplanThumbImg');
                        
                        if (floorPlanOverlay) floorPlanOverlay.style.display = 'none';
                        if (floorPlanViewer) floorPlanViewer.style.display = 'none';
                        if (floorPlanUploadArea) floorPlanUploadArea.style.display = 'block';
                        if (labelLayer) labelLayer.innerHTML = '';
                        if (floorPlanCanvas) {
                            try { 
                                const ctx = floorPlanCanvas.getContext('2d'); 
                                ctx && ctx.clearRect(0,0,floorPlanCanvas.width,floorPlanCanvas.height); 
                            } catch (e) { 
                                console.warn('清除 floorPlanCanvas 失敗:', e);
                            }
                        }
                        
                        // 關閉 PDF 縮圖
                        if (floorplanThumb) floorplanThumb.style.display = 'none';
                        if (floorplanThumbImg) floorplanThumbImg.src = '';
                        
                        // 重置資料夾名稱與狀態
                        if (folderNameDisplay) folderNameDisplay.textContent = '';
                        window.loadedFromHandles = false;
                        
                        // 3) 更新所有表格和 UI 元素
                        console.log('開始更新所有表格...');
                        await updateAllTablesAfterStartFresh();
                        
                        // 更新 UI
                        updateCategoryDisplay('j');
                        updateFolderDisplay();
                        
                        if (photoGrid) {
                            photoGrid.innerHTML = `
                                <div class="empty-preview">
                                    <i class="fas fa-images fa-4x"></i>
                                    <p>Select a folder to preview photos</p>
                                    <button id="centerFolderBtn" class="center-folder-btn" onclick="selectPhotoFolder()">
                                        <i class="fas fa-folder-open"></i> Select Photo Folder
                                    </button>
                                </div>
                            `;
                        }
                        
                        // 更新 Add photos 按鈕可見性
                        updateAddPhotosButtonVisibility();
                        
                        console.log('Start Fresh 完成 - 所有數據已清除，應用程式已重置');
                        showNotification('All saved data cleared. Starting fresh.', 'success');
                        
                    } catch (error) {
                        console.error('Start Fresh 過程中發生錯誤:', error);
                        showNotification('清除數據時發生錯誤，但應用程式已重置', 'warning');
                    } finally {
                        // 隱藏載入指示器
                        if (globalLoadingOverlay) {
                            globalLoadingOverlay.style.display = 'none';
                        }
                    }
                };
            }
        } else {
            // 沒有保存數據時，確保照片預覽區域顯示空狀態
            if (!saved && photoGrid) {
                photoGrid.innerHTML = `
                    <div class="empty-preview">
                        <i class="fas fa-images fa-4x"></i>
                        <p>Select a folder to preview photos</p>
                        <button id="centerFolderBtn" class="center-folder-btn" onclick="selectPhotoFolder()">
                            <i class="fas fa-folder-open"></i> Select Photo Folder
                        </button>
                    </div>
                `;
                window.logger.log('No saved data found. Displaying empty state.');
            }
        }
    } catch (e) { 
        // 初始化詢問錯誤時，也顯示空狀態
        if (photoGrid) {
            photoGrid.innerHTML = `
                <div class="empty-preview">
                    <i class="fas fa-images fa-4x"></i>
                    <p>Select a folder to preview photos</p>
                    <button id="centerFolderBtn" class="center-folder-btn" onclick="selectPhotoFolder()">
                        <i class="fas fa-folder-open"></i> Select Photo Folder
                    </button>
                </div>
            `;
        }
        window.logger.error('Error during session restore initialization:', e);
    }

    // 移除自動載入邏輯 - 只有在用戶選擇「Open previous」後才載入照片
    // 這樣確保在用戶做出選擇之前，照片預覽區域保持空白
    
    // Initialize Add photos button visibility with delay to ensure DOM is ready
    setTimeout(() => {
        updateAddPhotosButtonVisibility();
    }, 100);
    
    // Initialize zoom slider event listeners
    if (zoomSlider) {
        let isResizing = false;
        let resizeStartTime = 0;
        
        zoomSlider.addEventListener('input', function() {
            if (!isResizing) {
                isResizing = true;
                resizeStartTime = Date.now();
                
                // Store current scroll position and container dimensions
                const photoGrid = document.getElementById('photoGrid');
                if (photoGrid) {
                    const containerRect = photoGrid.getBoundingClientRect();
                    const scrollTop = photoGrid.scrollTop;
                    const scrollLeft = photoGrid.scrollLeft;
                    const containerCenterX = containerRect.width / 2;
                    const containerCenterY = containerRect.height / 2;
                    
                    // Store the center point relative to the scroll position
                    window.resizeCenterX = scrollLeft + containerCenterX;
                    window.resizeCenterY = scrollTop + containerCenterY;
                    
                    window.logger.log('Resize started - Center point:', {
                        centerX: window.resizeCenterX,
                        centerY: window.resizeCenterY,
                        scrollTop: scrollTop,
                        scrollLeft: scrollLeft
                    });
                }
            }
            
            const size = this.value + 'px';
            document.documentElement.style.setProperty('--photo-size', size);
            window.logger.log('Photo size changed to:', size);
        });
        
        // Handle resize end and center adjustment
        zoomSlider.addEventListener('change', function() {
            const size = this.value + 'px';
            document.documentElement.style.setProperty('--photo-size', size);
            
            // Adjust scroll position to maintain center after resize
            setTimeout(() => {
                const photoGrid = document.getElementById('photoGrid');
                if (photoGrid && window.resizeCenterX !== undefined && window.resizeCenterY !== undefined) {
                    const containerRect = photoGrid.getBoundingClientRect();
                    const containerCenterX = containerRect.width / 2;
                    const containerCenterY = containerRect.height / 2;
                    
                    // Calculate new scroll position to keep the same center point visible
                    const newScrollLeft = Math.max(0, window.resizeCenterX - containerCenterX);
                    const newScrollTop = Math.max(0, window.resizeCenterY - containerCenterY);
                    
                    photoGrid.scrollTo({
                        left: newScrollLeft,
                        top: newScrollTop,
                        behavior: 'smooth'
                    });
                    
                    window.logger.log('Resize completed - Adjusted scroll position:', {
                        newScrollLeft: newScrollLeft,
                        newScrollTop: newScrollTop,
                        originalCenterX: window.resizeCenterX,
                        originalCenterY: window.resizeCenterY
                    });
                    
                    // Clean up
                    delete window.resizeCenterX;
                    delete window.resizeCenterY;
                }
                
                isResizing = false;
            }, 100); // Small delay to allow CSS transition to complete
        });
        
        // Handle mouse up event to ensure resize end is captured
        zoomSlider.addEventListener('mouseup', function() {
            if (isResizing) {
                // Trigger the same logic as change event
                this.dispatchEvent(new Event('change'));
            }
        });
        
        window.logger.log('Zoom slider event listeners initialized');
    } else {
        window.logger.warn('Zoom slider not found during initialization');
    }
    
    // Add photos button click handler
    addPhotosBtn = document.getElementById('addPhotosBtn');
    addPhotosFileInput = document.getElementById('addPhotosFileInput');
    if (addPhotosBtn && addPhotosFileInput) {
        addPhotosBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); // Prevent global click handler interference
            window.logger.log('Add photos button clicked in Chrome');
            window.logger.log('File input element:', addPhotosFileInput);
            window.logger.log('File input display style:', window.getComputedStyle(addPhotosFileInput).display);
            
            // Show loading indicator
            showNotification('Please select additional photos...', 'info', 2000);
            
            // Use requestAnimationFrame for smoother experience
            requestAnimationFrame(() => {
                addPhotosFileInput.click();
            });
        });
        
        // Add photos file input change handler
        addPhotosFileInput.addEventListener('change', async (e) => {
            const files = Array.from(e.target.files);
            window.logger.log('Add photos: Files selected:', files.length);
            window.logger.log('DEBUG: defectEntries before photo upload:', window.defectEntries ? window.defectEntries.length : 'undefined');
            
            if (files.length === 0) {
                showNotification('No files selected', 'warning');
                return;
            }
            
            // Show processing notification
            showNotification('Processing additional photos...', 'info', 1000);
            
            try {
                // Check for duplicate photos by name and photo number
                const existingPhotoNames = new Set(allPhotos.map(photo => photo.name));
                const existingPhotoNumbers = new Set(allPhotos.map(photo => {
                    const numberMatch = photo.name.match(/\d+/);
                    return numberMatch ? numberMatch[0] : '';
                }).filter(num => num !== ''));
                
                window.logger.log('Add photos: Existing photos count:', allPhotos.length);
                window.logger.log('Add photos: Existing photo numbers:', Array.from(existingPhotoNumbers));
                
                const duplicatePhotos = [];
                const duplicatePhotoNumbers = [];
                const newPhotos = [];
                
                for (const file of files) {
                    window.logger.log('Add photos: Processing file:', file.name, 'Type:', file.type);
                    if (file.type.startsWith('image/')) {
                        // Extract photo number from filename
                        const numberMatch = file.name.match(/\d+/);
                        const photoNumber = numberMatch ? numberMatch[0] : '';
                        
                        // Check for duplicate filename
                        if (existingPhotoNames.has(file.name)) {
                            window.logger.log('Add photos: Duplicate filename found:', file.name);
                            duplicatePhotos.push(file.name);
                        }
                        // Check for duplicate photo number
                        else if (photoNumber && existingPhotoNumbers.has(photoNumber)) {
                            window.logger.log('Add photos: Duplicate photo number found:', photoNumber, 'in file:', file.name);
                            duplicatePhotoNumbers.push({ filename: file.name, number: photoNumber });
                        }
                        // Photo is new and unique
                        else {
                            window.logger.log('Add photos: Resizing new photo:', file.name, 'Number:', photoNumber);
                            const resizedDataURL = await resizeImage(file);
                            window.logger.log('Add photos: Resize completed for:', file.name);
                            
                            // Create a new file object with the resized data
                            const resizedFile = {
                                name: file.name,
                                size: file.size,
                                type: file.type,
                                lastModified: file.lastModified || Date.now(),
                                dataURL: resizedDataURL
                            };
                            newPhotos.push(resizedFile);
                        }
                    } else {
                        window.logger.log('Add photos: Skipping non-image file:', file.name);
                    }
                }
                
                // Add only new photos to existing photos
                if (newPhotos.length > 0) {
                    window.logger.log('Add photos: Adding', newPhotos.length, 'new photos to allPhotos');
                    
                    // Mark new photos with a flag before adding to allPhotos
                    const newPhotoNames = new Set(newPhotos.map(photo => photo.name));
                    newPhotos.forEach(photo => {
                        photo.isNewlyAdded = true;
                    });
                    
                    allPhotos.push(...newPhotos);
                    window.logger.log('Add photos: Total photos after adding:', allPhotos.length);
                    
                    // Update photo grid with new photos only (don't re-render existing ones)
                    window.logger.log('Add photos: Starting renderNewPhotosOnly...');
                    const lazyObserver = initLazyLoading();
                    await renderNewPhotosOnly(newPhotos, lazyObserver);
                    window.logger.log('Add photos: renderNewPhotosOnly completed');
                    
                    // Update folder display
                    updateFolderDisplay();
                    
                    // Update button visibility
                    updateAddPhotosButtonVisibility();
                    
                    // Save data to storage to persist the newly added photos
                    window.logger.log('Add photos: Saving data to storage...');
                    await saveDataToStorage();
                    window.logger.log('Add photos: Data saved successfully');
                } else {
                    window.logger.log('Add photos: No new photos to add');
                }
                
                window.logger.log('DEBUG: defectEntries after photo upload:', window.defectEntries ? window.defectEntries.length : 'undefined');
                
                // Show appropriate notification
                const totalDuplicates = duplicatePhotos.length + duplicatePhotoNumbers.length;
                
                if (totalDuplicates > 0 && newPhotos.length > 0) {
                    let message = `Added ${newPhotos.length} new photos. `;
                    if (duplicatePhotos.length > 0) {
                        message += `${duplicatePhotos.length} duplicate filenames were skipped. `;
                    }
                    if (duplicatePhotoNumbers.length > 0) {
                        message += `${duplicatePhotoNumbers.length} photos with duplicate numbers were skipped.`;
                    }
                    showNotification(message, 'warning');
                } else if (totalDuplicates > 0 && newPhotos.length === 0) {
                    let message = '';
                    if (duplicatePhotos.length > 0) {
                        message += `${duplicatePhotos.length} duplicate filenames were not uploaded. `;
                    }
                    if (duplicatePhotoNumbers.length > 0) {
                        message += `${duplicatePhotoNumbers.length} photos with duplicate numbers were not uploaded. `;
                    }
                    message += 'Please select different photos.';
                    showNotification(message, 'warning');
                } else if (newPhotos.length > 0) {
                    showNotification(`Added ${newPhotos.length} new photos`, 'success');
                }
                
            } catch (error) {
                window.logger.error('Error adding photos:', error);
                showNotification(`Error adding photos: ${error.message}`, 'error');
            }
            
            // Clear the input
            e.target.value = '';
        });
    }
});

// Clean up invalid folder data on page load
function cleanupInvalidFolderData() {
    // If we have folder name but no submitted data, clear the folder name
    if (folderNameDisplay.textContent && 
        folderNameDisplay.textContent !== '' && 
        submittedData.length === 0) {
        folderNameDisplay.textContent = '';
        updateFolderDisplay();
        
        // Show normal empty state
        photoGrid.innerHTML = `
            <div class="empty-preview">
                <i class="fas fa-images fa-4x"></i>
                <p>Select a folder to preview photos</p>
                <button id="centerFolderBtn" class="center-folder-btn" onclick="selectPhotoFolder()">
                    <i class="fas fa-folder-open"></i> Select Photo Folder
                </button>
            </div>
        `;
    }
}

// Run cleanup after initialization
cleanupInvalidFolderData();

// 載入嵌入的 PDF 並自動進入繪圖模式
async function loadEmbeddedPDFAndEnterDrawingMode(embeddedPDF) {
    window.logger.log('Loading embedded PDF and entering drawing mode:', embeddedPDF.filename);
    
    try {
        // 將 base64 轉換為 ArrayBuffer
        const binaryString = atob(embeddedPDF.base64Data);
        const arrayBuffer = new ArrayBuffer(binaryString.length);
        const uint8Array = new Uint8Array(arrayBuffer);
        
        for (let i = 0; i < binaryString.length; i++) {
            uint8Array[i] = binaryString.charCodeAt(i);
        }
        
        window.logger.log('Converted base64 to ArrayBuffer, size:', arrayBuffer.byteLength);
        
        // 載入 PDF
        await loadPDFFromArrayBuffer(arrayBuffer, embeddedPDF.filename);
        
        // 自動進入繪圖模式
        const floorPlanOverlay = document.getElementById('floorPlanOverlay');
        const floorPlanUploadArea = document.getElementById('floorPlanUploadArea');
        const floorPlanViewer = document.getElementById('floorPlanViewer');
        
        if (floorPlanOverlay) {
            floorPlanOverlay.style.display = 'flex';
            window.logger.log('Floor plan overlay opened');
        }
        
        if (floorPlanUploadArea && floorPlanViewer) {
            floorPlanUploadArea.style.display = 'none';
            floorPlanViewer.style.display = 'flex';
            window.logger.log('Floor plan viewer activated');
        }
        
        // 標籤和缺陷標記已經在 loadPDFFromArrayBuffer 中載入和渲染
        // 不需要重複載入
        
        // 應用保存的視圖狀態
        if (embeddedPDF.metadata && embeddedPDF.metadata.dimensions) {
            window.logger.log('Applying saved view state from embedded PDF');
            
            // 設置基礎縮放
            if (embeddedPDF.metadata.dimensions.width && embeddedPDF.metadata.dimensions.height) {
                const canvas = document.getElementById('floorPlanCanvas');
                if (canvas) {
                    const scaleX = canvas.width / embeddedPDF.metadata.dimensions.width;
                    const scaleY = canvas.height / embeddedPDF.metadata.dimensions.height;
                    window.baseScale = Math.min(scaleX, scaleY);
                    window.logger.log('Base scale calculated:', window.baseScale);
                }
            }
        }
        
        // 等待 PDF 完全載入後再恢復視圖狀態
        setTimeout(() => {
            // 嘗試從 localStorage 恢復視圖狀態
            const viewStateKey = `pne_view_state_${embeddedPDF.filename.replace(/[^a-zA-Z0-9]/g, '_')}`;
            const savedViewState = localStorage.getItem(viewStateKey);
            
            if (savedViewState) {
                try {
                    const viewState = JSON.parse(savedViewState);
                    window.logger.log('Restoring view state for embedded PDF:', viewState);
                    
                    // 應用視圖狀態
                    window.currentScale = viewState.scale || 1.0;
                    window.translateX = viewState.translateX || 0;
                    window.translateY = viewState.translateY || 0;
                    
                    if (viewState.baseScale) {
                        if (typeof baseScale !== 'undefined') {
                            baseScale = viewState.baseScale;
                        } else {
                            window.baseScale = viewState.baseScale;
                        }
                    }
                    
                    if (viewState.labelSizeScale) {
                        window.labelSizeScale = viewState.labelSizeScale;
                        if (typeof updateLabelSizeUI === 'function') {
                            updateLabelSizeUI();
                        }
                    }
                    
                    if (viewState.defectMarkSizeScale) {
                        window.defectMarkSizeScale = viewState.defectMarkSizeScale;
                        if (typeof updateDefectMarkSizeUI === 'function') {
                            updateDefectMarkSizeUI();
                        }
                    }
                    
                    // 應用變換
                    if (typeof window.applyTransform === 'function') {
                        window.applyTransform();
                        window.logger.log('View state applied successfully for embedded PDF');
                    }
                    
                    // 重新設置雙擊事件監聽器，確保缺陷標記創建功能正常
                    if (typeof setupDoubleClickHandler === 'function') {
                        setupDoubleClickHandler();
                        window.logger.log('Double-click handler re-initialized for embedded PDF');
                    }
                } catch (error) {
                    window.logger.error('Error restoring view state for embedded PDF:', error);
                }
            } else {
                window.logger.log('No saved view state found for embedded PDF, using default');
                
                // 即使沒有視圖狀態，也要重新設置雙擊事件監聽器
                if (typeof setupDoubleClickHandler === 'function') {
                    setupDoubleClickHandler();
                    window.logger.log('Double-click handler re-initialized for embedded PDF (no view state)');
                }
            }
        }, 500); // 等待 500ms 確保 PDF 完全載入
        
        // 顯示成功訊息
        showNotification(`PDF 檔案 "${embeddedPDF.filename}" 已自動載入並進入繪圖模式`, 'success');
        
        window.logger.log('Embedded PDF loaded successfully and drawing mode activated');
        
    } catch (error) {
        window.logger.error('Error loading embedded PDF:', error);
        showNotification('載入嵌入的 PDF 檔案時發生錯誤', 'error');
        throw error;
    }
}

// 更新所有表格在 Start Fresh 後
async function updateAllTablesAfterStartFresh() {
    console.log('開始更新所有表格...');
    
    try {
        // 1. 更新檢查記錄表格 (Inspection Records)
        const inspectionRecordsTableBody = document.getElementById('dataTableBody');
        const tableCount = document.getElementById('tableCount');
        
        if (inspectionRecordsTableBody) {
            inspectionRecordsTableBody.innerHTML = '<tr><td colspan="13" class="empty-state">No data submitted yet</td></tr>';
            console.log('檢查記錄表格已清空');
        }
        
        if (tableCount) {
            tableCount.textContent = '0 entries';
            console.log('檢查記錄計數已重置');
        }
        
        // 2. 更新缺陷摘要表格 (Defect Summary)
        if (typeof window.updateDefectSummaryTable === 'function') {
            window.updateDefectSummaryTable();
            console.log('缺陷摘要表格已更新');
        } else {
            const defectSummaryTableBody = document.getElementById('defectSummaryTableBody');
            const defectSummaryCount = document.getElementById('defectSummaryCount');
            
            if (defectSummaryTableBody) {
                defectSummaryTableBody.innerHTML = '<tr><td colspan="13" class="empty-state">No defect summary data yet</td></tr>';
                console.log('缺陷摘要表格已清空');
            }
            
            if (defectSummaryCount) {
                defectSummaryCount.textContent = '0 entries';
                console.log('缺陷摘要計數已重置');
            }
        }
        
        // 3. 更新分類表格 (Category Tables A-I)
        categories.forEach(category => {
            if (category.id !== 'j') { // 排除缺陷分類，它有自己的處理邏輯
                updateCategoryDisplay(category.id);
                console.log(`分類 ${category.id.toUpperCase()} 表格已更新`);
            }
        });
        
        // 3.1. 更新分類記錄表格 (Categories Records Tables)
        if (typeof window.updateCategoryTablesFromInspectionRecords === 'function') {
            window.updateCategoryTablesFromInspectionRecords();
            console.log('分類記錄表格已清空');
        }
        
        // 4. 更新標籤詳細表格 (Labels Detail)
        const labelsDetailTableBody = document.getElementById('labelsDetailTableBody');
        if (labelsDetailTableBody) {
            labelsDetailTableBody.innerHTML = '';
            console.log('標籤詳細表格已清空');
        }
        
        // 5. 更新缺陷詳細表格 (Defects Detail)
        const defectsDetailTableBody = document.getElementById('defectsDetailTableBody');
        if (defectsDetailTableBody) {
            defectsDetailTableBody.innerHTML = '';
            console.log('缺陷詳細表格已清空');
        }
        
        // 6. 重置所有分類的計數顯示
        categories.forEach(category => {
            const countBadge = document.getElementById(`count-${category.id}`);
            if (countBadge) {
                countBadge.textContent = '0';
            }
        });
        
        // 7. 重置選中的照片計數和狀態
        const selectedCount = document.getElementById('selectedCount');
        if (selectedCount) {
            selectedCount.textContent = '0';
        }
        
        // 重置照片選擇狀態
        if (typeof updatePhotoSelection === 'function') {
            updatePhotoSelection();
        }
        
        if (typeof updateSelectedCount === 'function') {
            updateSelectedCount();
        }
        
        // 8. 重置標題欄位
        const headerFields = [
            'locationId', 'inspectionDate', 'floorHeader', 
            'areaNameHeader', 'roomNo'
        ];
        
        headerFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field) {
                field.value = '';
            }
        });
        
        // 9. 重置標題欄位的勾選狀態
        const headerCheckboxes = [
            'locationIdCheck', 'inspectionDateCheck', 'floorHeaderCheck',
            'areaNameHeaderCheck', 'roomNoCheck'
        ];
        
        headerCheckboxes.forEach(checkboxId => {
            const checkbox = document.getElementById(checkboxId);
            if (checkbox) {
                checkbox.checked = false;
            }
        });
        
        console.log('所有表格更新完成');
        
    } catch (error) {
        console.error('更新表格時發生錯誤:', error);
        throw error; // 重新拋出錯誤，讓上層處理
    }
}

// Update button text based on browser support
function updateButtonText() {
    const centerFolderBtn = document.getElementById('centerFolderBtn');
    const pneSelectFolderBtn = document.querySelector('.pne-dropdown-item[data-action="selectfolder"]');
    
    if (isWebkitDirectorySupported()) {
        const buttonText = '<i class="fas fa-folder-open"></i> Select Photo Folder';
        const ariaLabel = 'Select photo folder';
        
        if (centerFolderBtn) {
            centerFolderBtn.innerHTML = buttonText;
            centerFolderBtn.setAttribute('aria-label', ariaLabel);
        }
        if (pneSelectFolderBtn) {
            pneSelectFolderBtn.innerHTML = buttonText;
            pneSelectFolderBtn.setAttribute('aria-label', ariaLabel);
        }
    } else {
        const buttonText = '<i class="fas fa-images"></i> Select Multiple Files';
        const ariaLabel = 'Select multiple files';
        
        if (centerFolderBtn) {
            centerFolderBtn.innerHTML = buttonText;
            centerFolderBtn.setAttribute('aria-label', ariaLabel);
        }
        if (pneSelectFolderBtn) {
            pneSelectFolderBtn.innerHTML = buttonText;
            pneSelectFolderBtn.setAttribute('aria-label', ariaLabel);
        }
    }
}

// Update button text on page load
updateButtonText();

// Add event listener for Clear All Categories button
clearBtn.addEventListener('click', () => {
    clearAllCategories();
});

// Clear row button event listener removed - no longer needed as action column is removed


// Zoom slider event listeners moved to DOMContentLoaded

// Export CSV functionality moved to PNE dropdown menu

// Save data when the page is about to unload
window.addEventListener('beforeunload', function() {
    saveDataToStorage();
});

// 檢查是否為 Safari 瀏覽器
function isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

// 檢查是否支援 webkitdirectory
function isWebkitDirectorySupported() {
    const input = document.createElement('input');
    return 'webkitdirectory' in input && !isSafari();
}

// 拖拽功能已移除

// 1. 定義 9 個分類表格的資料結構
const categoryTableIds = [
    {id: 'a', name: 'A: Exposed structural metalwork'},
    {id: 'b', name: 'B: Structural elements'},
    {id: 'c', name: 'C: External building elements'},
    {id: 'd', name: 'D: Suspended objects'},
    {id: 'e', name: 'E: High level internal finishes'},
    {id: 'f', name: 'F: Heavy metal gates/doors'},
    {id: 'g', name: 'G: Window and glass louvers'},
    {id: 'h', name: 'H: Drainage and Plumbing systems'},
    {id: 'i', name: 'I: Fire safety elements'}
];
let categoryTablesData = {}; // { a: [ {locationNo, roomNo, photoNo, defects}, ... ], ... }

// 2. 動態產生 9 個分類表格
function renderCategoryTables() {
    const section = document.getElementById('categoryTablesSection');
    section.innerHTML = '';
    categoryTableIds.forEach(cat => {
        const container = document.createElement('div');
        container.className = 'category-table-container';
        
        // Get localized category name and headers
        const categoryKey = `categoryTable${cat.id.toUpperCase()}`;
        const localizedName = getText(categoryKey);
        const locationNoHeader = getText('locationNoHeader');
        const roomNoHeader = getText('roomNoHeader');
        const photoNoHeader = getText('photoNoHeader');
        const defectsHeader = getText('defectsHeader');
        
        container.innerHTML = `
            <div class="category-table-title"><i class="fas fa-table"></i> ${localizedName}</div>
            <table class="category-table" id="category-table-${cat.id}">
                <thead>
                    <tr>
                        <th>${locationNoHeader}</th>
                        <th>${roomNoHeader}</th>
                        <th>${photoNoHeader}</th>
                        <th>${defectsHeader}</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        `;
        section.appendChild(container);
    });
}
renderCategoryTables();

// 同步標籤詳細表格的數據到檢查記錄表格（只顯示，不存儲）
function syncLabelsToInspectionRecords() {
    // 取得表格 body 並先清空為空狀態
    const dataTableBody = document.getElementById('dataTableBody');
    if (dataTableBody) {
        dataTableBody.innerHTML = '<tr><td colspan="13" class="empty-state">No data submitted yet</td></tr>';
    }
    
    // 清空 submittedData（僅顯示用途，不持久化）
    submittedData = [];
    
    // 只顯示藍色（已提交）的標籤
    const sourceLabels = Array.isArray(window.labels) ? window.labels : [];
    const labelsToSync = sourceLabels.filter(l => l && l.submitted);
    
    // 無資料時，維持空狀態並更新計數後返回
    if (!labelsToSync || labelsToSync.length === 0) {
        if (typeof updateTableCount === 'function') {
            updateTableCount();
        }
        window.logger.log('Synced labels to inspection records (display only): 0 records');
        return;
    }
    
    // 將標籤轉為檢查記錄列並新增到 submittedData（僅顯示）
    labelsToSync.forEach(label => {
        if (!label) return;
        const inspectionRecord = {
            id: label.id,
            locationId: label.inspectionNo,
            inspectionDate: label.inspectionDate,
            floor: label.floor,
            areaName: label.areaName,
            roomNo: label.roomNo,
            a: label.a || 'N/A',
            b: label.b || 'N/A',
            c: label.c || 'N/A',
            d: label.d || 'N/A',
            e: label.e || 'N/A',
            f: label.f || 'N/A',
            g: label.g || 'N/A',
            h: label.h || 'N/A',
            i: label.i || 'N/A',
            j: label.j || 'N/A',
            photoFilenames: label.photoFilenames || [],
            folderName: label.folderName || '',
            hasImminentDanger: label.imminentDanger || false,
            submittedAt: label.submittedAt
        };
        submittedData.push(inspectionRecord);
    });
    
    // 按檢查編號排序 submittedData
    submittedData.sort((a, b) => {
        const aNo = parseInt(a.locationId) || 0;
        const bNo = parseInt(b.locationId) || 0;
        return aNo - bNo;
    });
    
    // 清空表格並重新添加排序後的數據
    if (dataTableBody) {
        dataTableBody.innerHTML = '';
    }
    
    // 添加排序後的記錄到表格
    submittedData.forEach(inspectionRecord => {
        if (typeof addTableRow === 'function') {
            addTableRow(inspectionRecord);
        }
    });
    
    if (typeof updateTableCount === 'function') {
        updateTableCount();
    }
    window.logger.log('Synced labels to inspection records (display only):', submittedData.length, 'records');
}

// 3. 填充分類表格資料
window.updateCategoryTablesFromInspectionRecords = function() {
    // 先清空
    categoryTablesData = {};
    categoryTableIds.forEach(cat => categoryTablesData[cat.id] = []);
    
    // 同步標籤詳細表格的數據到檢查記錄表格
    syncLabelsToInspectionRecords();
    
    // 直接從 submittedData 陣列讀取資料，而不是從 DOM 表格
    if (submittedData.length === 0) {
        // 若無資料，保持空白
        categoryTableIds.forEach(cat => {
            const tbody = document.querySelector(`#category-table-${cat.id} tbody`);
            tbody.innerHTML = '';
        });
        return;
    }
    
    // 從 submittedData 陣列讀取每一筆資料
    submittedData.forEach(rowData => {
        const locationNo = rowData.locationId || 'N/A';
        const roomNo = rowData.roomNo || 'N/A';
        
        // 解析缺陷項目，根據其分類填入對應的分類表格
        const defectItems = rowData.j ? rowData.j.split('\n').filter(item => item.trim()) : [];
        
        // 為每個分類建立記錄
        categoryTableIds.forEach(cat => {
            const photoNo = rowData[cat.id] || 'N/A'; // 直接從 rowData 讀取對應分類的資料
            
            // 找出屬於此分類的缺陷項目
            const categoryDefects = defectItems.filter(item => {
                // 檢查缺陷項目是否屬於此分類
                // 缺陷項目的格式通常是: "range_description" 或 "* range_description"
                const description = item.replace(/^\*?\s*/, ''); // 移除星號前綴
                const defectDesc = description.split('_').slice(1).join('_'); // 取得描述部分
                
                // 檢查此描述是否在對應分類的缺陷類型列表中
                return defectTypes[cat.id] && defectTypes[cat.id].includes(defectDesc);
            });
            
            // 如果此分類有照片編號或有對應的缺陷項目，則建立記錄
            if (photoNo.trim() || categoryDefects.length > 0) {
                const defects = categoryDefects.length > 0 ? categoryDefects.join('; ') : 'N/A';
                categoryTablesData[cat.id].push({
                    locationNo, 
                    roomNo, 
                    photoNo: photoNo.trim() ? photoNo : 'N/A', 
                    defects
                });
            }
        });
    });
    
    // 寫入表格
    categoryTableIds.forEach(cat => {
        const tbody = document.querySelector(`#category-table-${cat.id} tbody`);
        if (categoryTablesData[cat.id].length === 0) {
            tbody.innerHTML = '';
        } else {
            tbody.innerHTML = categoryTablesData[cat.id].map(row =>
                `<tr>
                    <td>${row.locationNo}</td>
                    <td>${row.roomNo}</td>
                    <td>${row.photoNo}</td>
                    <td>${row.defects}</td>
                </tr>`
            ).join('');
        }
    });
}

// 同步更新 floor plan 中的缺陷標記編號
function updateFloorPlanDefectNumbers() {
    // 檢查是否有 floor plan 相關的變數和函數
    if (typeof defectMarks === 'undefined' || typeof redrawDefectMarks === 'undefined') {
        window.logger.log('Floor plan defect marks not available, skipping update');
        return;
    }
    
    window.logger.log('Updating floor plan defect numbers, current count:', window.defectMarks.length);
    
    // 按照缺陷標記的創建順序重新編號（從 1 開始）
    window.defectMarks.forEach((defectMark, index) => {
        const newDefectNo = index + 1;
        if (defectMark.defectNo !== newDefectNo.toString()) {
            window.logger.log(`Updating defect mark ${defectMark.id} from ${defectMark.defectNo} to ${newDefectNo}`);
            defectMark.defectNo = newDefectNo.toString();
        }
    });
    
    // 保存更新後的缺陷標記數據
    if (typeof saveDefectMarksToStorage === 'function') {
        saveDefectMarksToStorage();
    }
    
    // 重新渲染缺陷標記以顯示新的編號
    if (typeof window.redrawDefectMarks === 'function') {
        window.redrawDefectMarks();
    }
    
    // 注意：標籤編號不應該被自動重新編號
    // 標籤的 inspectionNo 應該保持用戶設定的值
    // 只更新標籤位置，不改變編號
    window.logger.log('Labels numbering preserved - only positions updated');
    
    // 同時更新標籤位置以確保同步
    if (typeof window.updateAllLabelPositions === 'function') {
        window.updateAllLabelPositions();
    }
    
    window.logger.log('Floor plan defect numbers updated successfully');
}


// Update Defect Summary Table
window.updateDefectSummaryTable = function() {
    
    const tbody = document.getElementById('defectSummaryTableBody');
    const countBadge = document.getElementById('defectSummaryCount');
    
    // 只從 defectEntries 中提取缺陷數據（這些數據來自 all defects detail-table-container）
    const allDefects = [];
    let globalDefectIndex = 0;
    
    // 從當前的缺陷條目中提取數據（來自 all defects detail-table-container 的資料）
    window.defectEntries.forEach((entry, entryIndex) => {
        // 將分類代碼轉換為完整的分類名稱
        const getCategoryName = (categoryCode) => {
            const category = categories.find(cat => cat.id === categoryCode);
            return category ? category.name : categoryCode;
        };
        
        allDefects.push({
            id: `defect_entry_${entryIndex}`,
            defectNo: entry.defectNo || (globalDefectIndex + 1),
            imminentDanger: entry.imminentDanger || false,
            location: `${entry.floor || 'N/A'}, ${entry.areaName || 'N/A'}, ${entry.roomNo || 'N/A'}`,
            category: getCategoryName(entry.category) || 'N/A',
            description: entry.description || 'N/A',
            range: entry.range || 'N/A',
            descriptionConstruction: entry.descriptionConstruction || 'N/A',
            existingCondition: entry.existingCondition || 'N/A',
            humidity: entry.humidity || 'N/A',
            moisture: entry.moisture || 'N/A',
            chloride: entry.chloride || 'N/A',
            carbonation: entry.carbonation || 'N/A',
            remedialWorks: entry.remedialWorks || 'N/A',
            preventiveWorks: entry.preventiveWorks || 'N/A',
            remarks: (entry.remarks && entry.remarks.trim() !== '') ? entry.remarks : 'N/A'
        });
        globalDefectIndex++;
    });
    
    window.logger.log('updateDefectSummaryTable: total defects found:', allDefects.length);
    window.logger.log('updateDefectSummaryTable: defectEntries array length:', window.defectEntries.length);
    window.logger.log('updateDefectSummaryTable: submittedData array length:', submittedData.length);
    window.logger.log('updateDefectSummaryTable: defectEntries content:', window.defectEntries);
    
    if (allDefects.length === 0) {
        window.logger.log('Clearing defect summary table - no defects found in defect entries or submitted data');
        tbody.innerHTML = '<tr><td colspan="13" class="empty-state">No defect summary data yet</td></tr>';
        countBadge.textContent = '0 entries';
        return;
    }
    
    // Remove empty state if exists
    if (tbody.querySelector('.empty-state')) {
        tbody.innerHTML = '';
    }
    
    // Generate defect summary rows with sequential numbering from 1
    const summaryRows = allDefects.map((defect) => {
        const imminentDanger = defect.imminentDanger ? 'Yes' : 'No';
        return `
            <tr data-defect-id="${defect.id}" data-defect-no="${defect.defectNo}">
                <td>${defect.defectNo}</td>
                <td>${imminentDanger}</td>
                <td>${defect.location}</td>
                <td>${defect.category}</td>
                <td>${defect.descriptionConstruction}</td>
                <td>${defect.existingCondition}</td>
                <td>${defect.description}</td>
                <td>${defect.humidity}</td>
                <td>${defect.moisture}</td>
                <td>${defect.chloride}</td>
                <td>${defect.carbonation}</td>
                <td>${defect.remedialWorks}</td>
                <td>${defect.preventiveWorks}</td>
                <td>${defect.remarks}</td>
            </tr>
        `;
    });
    tbody.innerHTML = summaryRows.join('');
    countBadge.textContent = `${allDefects.length} ${allDefects.length === 1 ? 'entry' : 'entries'}`;
    
    // 更新檢查記錄表格中的缺陷編號
    updateTableDefectsDisplay();
    
    // 如果缺陷項目條目菜單是打開的，重新分配缺陷編號
    if (defectWindow && defectWindow.style.display !== 'none') {
        assignDefectNo();
    }
    
    // 更新缺陷分類內容顯示
    updateCategoryDisplay('j');
}

// 編輯缺陷記錄函數
function editDefectRecord(defectId, defectNo) {
    window.logger.log('Editing defect record:', defectId, defectNo);
    
    // 找到對應的缺陷條目
    const defectEntryIndex = window.defectEntries.findIndex(entry => 
        String(entry.defectNo) === String(defectNo)
    );
    
    if (defectEntryIndex >= 0) {
        const defectEntry = window.defectEntries[defectEntryIndex];
        
        // 填充缺陷表單
        document.getElementById('defectInspectionNo').value = defectEntry.locationId || '';
        document.getElementById('inspectionDateDefect').value = defectEntry.inspectionDate || '';
        document.getElementById('defectFloor').value = defectEntry.floor || '';
        document.getElementById('defectAreaName').value = defectEntry.areaName || '';
        document.getElementById('defectRoomNo').value = defectEntry.roomNo || '';
        document.getElementById('defectNo').value = defectEntry.defectNo || '';
        document.getElementById('defectPhotoNo').value = defectEntry.photoNumbers || '';
        document.getElementById('defectCategory').value = defectEntry.category || '';
        document.getElementById('defectTypeDirectInput').value = defectEntry.defectType || '';
        document.getElementById('defectDescription').value = defectEntry.description || '';
        document.getElementById('defectExistingCondition').value = defectEntry.existingCondition || '';
        document.getElementById('defectHumidity').value = defectEntry.humidity || '';
        document.getElementById('defectMoisture').value = defectEntry.moisture || '';
        document.getElementById('defectChloride').value = defectEntry.chloride || '';
        document.getElementById('defectCarbonation').value = defectEntry.carbonation || '';
        document.getElementById('defectRemedialWorks').value = defectEntry.remedialWorks || '';
        document.getElementById('defectPreventiveWorks').value = defectEntry.preventiveWorks || '';
        document.getElementById('defectRemarks').value = defectEntry.remarks || '';
        
        // 設置緊急危險狀態
        const imminentDangerSwitch = document.getElementById('imminentDangerSwitch');
        if (imminentDangerSwitch) {
            imminentDangerSwitch.checked = defectEntry.imminentDanger || false;
        }
        
        // 打開缺陷表單窗口
        const defectWindow = document.getElementById('defectWindow');
        if (defectWindow) {
            defectWindow.style.display = 'block';
        }
        
        // 設置編輯模式標記
        window.editingDefectId = defectId;
        window.editingDefectNo = defectNo;
        
        showNotification('缺陷記錄已載入到編輯表單', 'info');
    } else {
        showNotification('找不到對應的缺陷記錄', 'error');
    }
}

// 刪除缺陷記錄函數
function deleteDefectRecord(defectId, defectNo) {
    window.logger.log('Deleting defect record:', defectId, defectNo);
    
    // 確認刪除
    if (!confirm(`確定要刪除缺陷記錄 ${defectNo} 嗎？此操作將同時刪除相關的缺陷標記。`)) {
        return;
    }
    
    // 從缺陷條目中刪除
    const defectEntryIndex = window.defectEntries.findIndex(entry => 
        String(entry.defectNo) === String(defectNo)
    );
    
    if (defectEntryIndex >= 0) {
        window.defectEntries.splice(defectEntryIndex, 1);
        window.logger.log('Deleted defect entry from defectEntries:', defectNo);
    }
    
    // 從提交的缺陷條目中刪除
    const submittedDefectEntryIndex = window.submittedDefectEntries.findIndex(entry => 
        String(entry.defectNo) === String(defectNo)
    );
    
    if (submittedDefectEntryIndex >= 0) {
        window.submittedDefectEntries.splice(submittedDefectEntryIndex, 1);
        window.logger.log('Deleted defect entry from submittedDefectEntries:', defectNo);
    }
    
    // 同步刪除對應的缺陷標記（如果存在）
    if (window.defectMarks && window.defectMarks.length > 0) {
        const defectMarkIndex = window.defectMarks.findIndex(mark => 
            String(mark.defectNo) === String(defectNo)
        );
        
        if (defectMarkIndex >= 0) {
            window.defectMarks.splice(defectMarkIndex, 1);
            window.logger.log('Deleted corresponding defect mark:', defectNo);
            
            // 保存缺陷標記到本地存儲
            if (typeof saveDefectMarksToStorage === 'function') {
                saveDefectMarksToStorage();
            }
            
            // 重新渲染缺陷標記
            if (typeof window.redrawDefectMarks === 'function') {
                window.redrawDefectMarks();
            }
        }
    }
    
    // 同步刪除對應的標籤（如果存在）
    if (window.labels && window.labels.length > 0) {
        const labelIndex = window.labels.findIndex(label => 
            String(label.defectNo) === String(defectNo)
        );
        
        if (labelIndex >= 0) {
            window.labels.splice(labelIndex, 1);
            window.logger.log('Deleted corresponding label:', defectNo);
            
            // 保存標籤到本地存儲
            if (typeof window.saveLabelsToStorage === 'function') {
                window.saveLabelsToStorage();
            }
            
            // 重新渲染標籤
            if (typeof window.redrawLabels === 'function') {
                window.redrawLabels();
            }
        }
    }
    
    // 保存數據到本地存儲
    saveDataToStorage();
    
    // 更新缺陷摘要表格
    if (typeof window.updateDefectSummaryTable === 'function') {
    window.updateDefectSummaryTable();
}
    
    // 更新缺陷分類內容顯示
    updateCategoryDisplay('j');
    
    // 同步到 labels detail-table-container（檢查標籤的缺陷列變化）
    syncDefectsToLabelsDetailTable();
    
    // 重新排列缺陷編號
    renumberDefectEntries();
    
    showNotification(`缺陷記錄 ${defectNo} 已刪除`, 'success');
}

// 檢測是否在繪圖模式
function isDrawingMode() {
    const floorPlanCanvas = document.getElementById('floorPlanCanvas');
    const floorPlanViewer = document.getElementById('floorPlanViewer');
    const hasPDFData = localStorage.getItem('pne_floorplan_data') || localStorage.getItem('pne_floorplan_base64');
    const hasLabels = localStorage.getItem('pne_floorplan_labels');
    
    // 檢查PDF是否已載入且畫布有內容
    const isCanvasLoaded = floorPlanCanvas && floorPlanCanvas.width > 0 && floorPlanCanvas.height > 0;
    const isViewerVisible = floorPlanViewer && floorPlanViewer.style.display !== 'none';
    const hasPDFLoaded = isCanvasLoaded && isViewerVisible;
    
    // 繪圖模式：PDF已載入且有標籤數據
    const isDrawingMode = hasPDFLoaded && (hasPDFData || hasLabels);
    
    window.logger.log('Drawing mode detection:', {
        isCanvasLoaded,
        isViewerVisible,
        hasPDFLoaded,
        hasPDFData: !!hasPDFData,
        hasLabels: !!hasLabels,
        isDrawingMode
    });
    
    return isDrawingMode;
}

// 刪除標籤函數
function deleteLabel(labelId) {
    window.logger.log('Deleting label:', labelId);
    
    // 檢測是否在繪圖模式
    const drawingMode = isDrawingMode();
    window.logger.log('Delete label - Drawing mode:', drawingMode);
    
    // 找到對應的標籤
    const labelIndex = window.labels.findIndex(label => String(label.id) === String(labelId));
    
    if (labelIndex >= 0) {
        const label = window.labels[labelIndex];
        const defectNo = label.defectNo;
        
        // 在刪除標籤前，先清理相關的照片分配記錄
        cleanupPhotoAssignmentsOnLabelDelete(label);
        
        // 從標籤數組中刪除
        window.labels.splice(labelIndex, 1);
        
        // 保存標籤到本地存儲
        if (typeof window.saveLabelsToStorage === 'function') {
            window.saveLabelsToStorage();
        }
        
        // 只在繪圖模式下重新渲染標籤（因為非繪圖模式下沒有地圖顯示）
        if (drawingMode && typeof window.redrawLabels === 'function') {
            window.redrawLabels();
        }
        
        // 同步更新檢查記錄表格（只顯示）
        if (typeof window.syncLabelsToInspectionRecords === 'function') {
            window.syncLabelsToInspectionRecords();
        }
        
        // 同步到 defects detail-table-container（檢查缺陷記錄的變化）
        // 這會自動處理缺陷記錄的刪除和更新
        syncLabelsToDefectsDetailTable();
        
        // 只在繪圖模式下刪除對應的缺陷標記（如果存在）
        if (drawingMode && window.defectMarks && window.defectMarks.length > 0 && defectNo) {
            const defectMarkIndex = window.defectMarks.findIndex(mark => 
                String(mark.defectNo) === String(defectNo)
            );
            
            if (defectMarkIndex >= 0) {
                window.defectMarks.splice(defectMarkIndex, 1);
                window.logger.log('Deleted corresponding defect mark:', defectNo);
                
                // 保存缺陷標記到本地存儲
                if (typeof saveDefectMarksToStorage === 'function') {
                    saveDefectMarksToStorage();
                }
                
                // 重新渲染缺陷標記
                if (typeof window.redrawDefectMarks === 'function') {
                    window.redrawDefectMarks();
                }
            }
        }
        
        // 更新缺陷摘要表格
        if (typeof window.updateDefectSummaryTable === 'function') {
            window.updateDefectSummaryTable();
            window.logger.log('Defect summary table updated after label deletion');
        }
        
        // 更新分類表格
        if (typeof window.updateCategoryTablesFromInspectionRecords === 'function') {
            window.updateCategoryTablesFromInspectionRecords();
            window.logger.log('Category tables updated after label deletion');
        }
        
        // 保存數據到本地存儲
        if (typeof window.saveDataToStorage === 'function') {
            window.saveDataToStorage();
        }
        
        // 根據模式顯示不同的成功訊息
        if (drawingMode) {
            showNotification('標籤已刪除（包含地圖標記）', 'success');
        } else {
            showNotification('標籤記錄已刪除', 'success');
        }
    } else {
        showNotification('找不到要刪除的標籤', 'error');
    }
}


// 多選功能變量 - 字段級別選擇
let selectedCells = new Set();
let lastSelectedCell = null;
let isMultiSelectMode = false;
let currentTable = null;

// 初始化多選功能
function initMultiSelect() {
    // 為標籤詳細表格添加多選功能
    const labelsTable = document.getElementById('labelsDetailTable');
    if (labelsTable) {
        labelsTable.addEventListener('click', handleTableClick);
    }

    // 為缺陷詳細表格添加多選功能
    const defectsTable = document.getElementById('defectsDetailTable');
    if (defectsTable) {
        defectsTable.addEventListener('click', handleTableClick);
    }

    // 多選按鈕已移除，不再需要綁定按鈕事件
}

// 處理表格點擊事件 - 字段級別選擇
function handleTableClick(event) {
    const cell = event.target.closest('td');
    if (!cell || cell.closest('thead')) {
        return;
    }

    const table = event.target.closest('table');
    if (!table) return;

    // 檢查是否點擊了按鈕或其他非字段交互元素
    const isNonFieldElement = event.target.tagName === 'BUTTON' ||
                            event.target.closest('button') ||
                            event.target.closest('.multiselect-btn') ||
                            event.target.closest('.action-buttons');
    if (isNonFieldElement) {
        return;
    }

    // 檢查是否切換了表格
    if (currentTable !== table) {
        clearAllSelections();
        currentTable = table;
    }

    event.preventDefault();
    event.stopPropagation();

    const isShiftClick = event.shiftKey;
    const isCtrlClick = event.ctrlKey || event.metaKey; // 支持 Mac 的 Command 鍵

    if (isShiftClick && lastSelectedCell && currentTable === table) {
        // Shift + 點擊：選擇範圍（連續選擇）
        selectCellRange(lastSelectedCell, cell);
    } else if (isCtrlClick) {
        // Ctrl/Cmd + 點擊：切換選擇狀態（多選）
        toggleCellSelection(cell);
    } else {
        // 普通點擊：清除其他選擇，只選擇當前字段
        clearAllSelections();
        selectCell(cell);
    }

    updateMultiSelectUI();
}

// 選擇單個字段
function selectCell(cell) {
    cell.classList.add('selected');
    selectedCells.add(cell);
    lastSelectedCell = cell;
}

// 取消選擇單個字段
function deselectCell(cell) {
    cell.classList.remove('selected', 'multi-select-range');
    selectedCells.delete(cell);
    if (lastSelectedCell === cell) {
        lastSelectedCell = null;
    }
}

// 切換字段選擇狀態
function toggleCellSelection(cell) {
    if (cell.classList.contains('selected')) {
        deselectCell(cell);
    } else {
        selectCell(cell);
    }
}

// 選擇字段範圍（支持垂直和水平方向）
function selectCellRange(startCell, endCell) {
    const table = startCell.closest('table');
    const startRow = startCell.closest('tr');
    const endRow = endCell.closest('tr');
    
    const startRowIndex = Array.from(table.querySelectorAll('tbody tr')).indexOf(startRow);
    const endRowIndex = Array.from(table.querySelectorAll('tbody tr')).indexOf(endRow);
    const startCellIndex = Array.from(startRow.children).indexOf(startCell);
    const endCellIndex = Array.from(endRow.children).indexOf(endCell);
    
    if (startRowIndex === -1 || endRowIndex === -1 || startCellIndex === -1 || endCellIndex === -1) return;

    const minRowIndex = Math.min(startRowIndex, endRowIndex);
    const maxRowIndex = Math.max(startRowIndex, endRowIndex);
    const minCellIndex = Math.min(startCellIndex, endCellIndex);
    const maxCellIndex = Math.max(startCellIndex, endCellIndex);

    // 清除範圍選擇樣式
    selectedCells.forEach(cell => cell.classList.remove('multi-select-range'));

    // 選擇範圍內的所有字段
    const rows = Array.from(table.querySelectorAll('tbody tr'));
    for (let rowIndex = minRowIndex; rowIndex <= maxRowIndex; rowIndex++) {
        const row = rows[rowIndex];
        const cells = Array.from(row.children);
        
        for (let cellIndex = minCellIndex; cellIndex <= maxCellIndex; cellIndex++) {
            if (cells[cellIndex]) {
                const cell = cells[cellIndex];
                selectCell(cell);
                
                // 標記範圍內的字段（除了起始和結束字段）
                if (!(rowIndex === startRowIndex && cellIndex === startCellIndex) &&
                    !(rowIndex === endRowIndex && cellIndex === endCellIndex)) {
                    cell.classList.add('multi-select-range');
                }
            }
        }
    }
}

// 清除所有選擇
function clearAllSelections() {
    selectedCells.forEach(cell => {
        cell.classList.remove('selected', 'multi-select-range');
    });
    selectedCells.clear();
    lastSelectedCell = null;
}

// 更新多選UI（簡化版本，僅用於調試）
function updateMultiSelectUI() {
    const count = selectedCells.size;
    window.logger.log('Selected cells count:', count);
    // 多選按鈕已移除，此函數保留用於調試
}

// 複製選中的字段內容 - 限制只能複製單個 td
function copySelectedCells() {
    if (selectedCells.size === 0) return;
    
    // 限制只能複製單個 td
    if (selectedCells.size > 1) {
        showNotification('複製功能只能在單個儲存格中使用', 'warning');
        return;
    }
    
    const cell = Array.from(selectedCells)[0];
    const input = cell.querySelector('input, textarea, select');
    const cellValue = input ? input.value || '' : cell.textContent.trim() || '';
    
    // 將數據存儲到剪貼板
    window.copiedCellData = [cellValue];
    
    // 嘗試使用 Clipboard API
    if (navigator.clipboard && window.ClipboardItem) {
        navigator.clipboard.writeText(cellValue).catch(() => {
            // 如果 Clipboard API 失敗，使用存儲的數據
            window.logger.log('Copied data stored in window.copiedCellData');
        });
    }
    
    showNotification('已複製儲存格內容', 'success');
}

// 粘貼到選中的字段
function pasteToSelectedCells() {
    if (selectedCells.size === 0) return;
    
    // 優先使用存儲的數據，避免瀏覽器許可提示
    if (window.copiedCellData) {
        pasteDataToCells(window.copiedCellData.join('\t'));
    } else {
        // 如果沒有存儲的數據，嘗試從 Clipboard API 讀取
        if (navigator.clipboard && window.ClipboardItem) {
            navigator.clipboard.readText().then(text => {
                pasteDataToCells(text);
            }).catch(() => {
                showNotification('沒有可粘貼的數據', 'warning');
            });
        } else {
            showNotification('沒有可粘貼的數據', 'warning');
        }
    }
}

// 將數據粘貼到選中的字段
function pasteDataToCells(data) {
    const dataArray = Array.isArray(data) ? data : data.split('\t');
    if (!dataArray || dataArray.length === 0) return;

    // 依行、列排序目前選中的儲存格
    const sortedCells = Array.from(selectedCells).sort((a, b) => {
        const aRow = a.closest('tr');
        const bRow = b.closest('tr');
        const aRowIndex = Array.from(aRow.parentNode.children).indexOf(aRow);
        const bRowIndex = Array.from(bRow.parentNode.children).indexOf(bRow);
        if (aRowIndex !== bRowIndex) return aRowIndex - bRowIndex;
        return Array.from(aRow.children).indexOf(a) - Array.from(bRow.children).indexOf(b);
    });

    let pastedCount = 0;

    // 情境 1：只有一個值 → 複製到所有選取欄位
    if (dataArray.length === 1) {
        const value = dataArray[0];
        sortedCells.forEach(cell => {
            const input = cell.querySelector('input, textarea, select');
            if (input) {
                input.value = value;
                input.dispatchEvent(new Event('input', { bubbles: true }));
                pastedCount++;
            }
        });
        showNotification(`已粘貼到 ${pastedCount} 個字段`, 'success');
        return;
    }

    // 情境 2：多個值
    // 先填滿已選欄位（依序對應）
    let dataIndex = 0;
    for (let i = 0; i < sortedCells.length && dataIndex < dataArray.length; i++, dataIndex++) {
        const cell = sortedCells[i];
        const input = cell.querySelector('input, textarea, select');
        if (input) {
            input.value = dataArray[dataIndex];
            input.dispatchEvent(new Event('input', { bubbles: true }));
            pastedCount++;
        }
    }

    // 若仍有剩餘資料，從最後一個選取欄位開始，依表格順序連續貼到之後的欄位
    if (dataIndex < dataArray.length && sortedCells.length > 0) {
        const lastCell = sortedCells[sortedCells.length - 1];
        const table = lastCell.closest('table');
        if (table) {
            // 取得表格內所有可編輯欄位（含 input/textarea/select）依 DOM 順序
            const allEditableCells = Array.from(table.querySelectorAll('tbody td'))
                .filter(td => td.querySelector('input, textarea, select'));

            // 找到最後一個選取欄位於 allEditableCells 的索引
            const lastIndexInAll = allEditableCells.indexOf(lastCell);
            // 從下一格開始連續填入
            for (let j = lastIndexInAll + 1; j < allEditableCells.length && dataIndex < dataArray.length; j++, dataIndex++) {
                const nextCell = allEditableCells[j];
                const input = nextCell.querySelector('input, textarea, select');
                if (input) {
                    input.value = dataArray[dataIndex];
                    input.dispatchEvent(new Event('input', { bubbles: true }));
                    pastedCount++;
                }
            }
        }
    }

    showNotification(`已粘貼到 ${pastedCount} 個字段`, 'success');
}

// 添加傳統的粘貼事件監聽器，避免瀏覽器許可提示
document.addEventListener('paste', function(event) {
    // 檢查是否在標籤詳細表格中
    const isInLabelsTable = event.target.closest('#labelsDetailTable');
    const isInDefectsTable = event.target.closest('#defectsDetailTable');
    
    if ((isInLabelsTable || isInDefectsTable) && selectedCells.size > 0) {
        event.preventDefault();
        
        // 獲取粘貼的文本數據
        const pastedText = (event.clipboardData || window.clipboardData).getData('text');
        
        if (pastedText) {
            // 將粘貼的數據存儲到全局變量
            window.copiedCellData = pastedText.split('\t');
            pasteDataToCells(pastedText);
        } else {
            showNotification('沒有可粘貼的數據', 'warning');
        }
    }
});


// 編輯選中的標籤字段
function editSelectedLabels() {
    if (selectedCells.size === 0) return;
    
    // 獲取選中字段所屬的行
    const selectedRows = new Set();
    selectedCells.forEach(cell => {
        const row = cell.closest('tr');
        if (row) {
            selectedRows.add(row);
        }
    });
    
    if (selectedRows.size === 1) {
        // 單個行編輯
        const row = Array.from(selectedRows)[0];
        const labelId = row.dataset.labelId;
        if (labelId) {
            // 這裡可以實現單個標籤的編輯邏輯
            showNotification('編輯單個標籤功能', 'info');
        }
    } else {
        // 批量編輯
        showNotification(`編輯 ${selectedRows.size} 個標籤功能`, 'info');
    }
}

// 刪除選中的標籤
function deleteSelectedLabels() {
    if (selectedCells.size === 0) return;

    // 獲取選中字段所屬的行
    const selectedRows = new Set();
    selectedCells.forEach(cell => {
        const row = cell.closest('tr');
        if (row) {
            selectedRows.add(row);
        }
    });

    const count = selectedRows.size;
    if (!confirm(`確定要刪除選中的 ${count} 個標籤嗎？`)) {
        return;
    }

    const rowsToDelete = Array.from(selectedRows);
    rowsToDelete.forEach(row => {
        const labelId = row.dataset.labelId;
        if (labelId && typeof deleteLabel === 'function') {
            deleteLabel(labelId);
        }
    });

    clearAllSelections();
    updateMultiSelectUI();
    
    // 同步更新檢查記錄表格
    syncLabelsToInspectionRecords();
    
    // 更新分類表格
    if (typeof window.updateCategoryTablesFromInspectionRecords === 'function') {
    window.updateCategoryTablesFromInspectionRecords();
}
    
    showNotification(`已刪除 ${count} 個標籤`, 'success');
}

// 編輯選中的缺陷字段
function editSelectedDefects() {
    if (selectedCells.size === 0) return;
    
    // 獲取選中字段所屬的行
    const selectedRows = new Set();
    selectedCells.forEach(cell => {
        const row = cell.closest('tr');
        if (row) {
            selectedRows.add(row);
        }
    });
    
    if (selectedRows.size === 1) {
        // 單個行編輯
        const row = Array.from(selectedRows)[0];
        const defectId = row.dataset.defectId;
        const defectNo = row.dataset.defectNo;
        if (defectId && defectNo && typeof editDefectRecord === 'function') {
            editDefectRecord(defectId, defectNo);
        }
    } else {
        // 批量編輯
        showNotification(`編輯 ${selectedRows.size} 個缺陷功能`, 'info');
    }
}

// 刪除選中的缺陷
function deleteSelectedDefects() {
    if (selectedCells.size === 0) return;

    // 獲取選中字段所屬的行
    const selectedRows = new Set();
    selectedCells.forEach(cell => {
        const row = cell.closest('tr');
        if (row) {
            selectedRows.add(row);
        }
    });

    const count = selectedRows.size;
    if (!confirm(`確定要刪除選中的 ${count} 個缺陷嗎？`)) {
        return;
    }

    const rowsToDelete = Array.from(selectedRows);
    rowsToDelete.forEach(row => {
        const defectId = row.dataset.defectId;
        const defectNo = row.dataset.defectNo;
        if (defectId && defectNo && typeof deleteDefectRecord === 'function') {
            deleteDefectRecord(defectId, defectNo);
        }
    });

    clearAllSelections();
    updateMultiSelectUI();
    showNotification(`已刪除 ${count} 個缺陷`, 'success');
}

// 鍵盤事件處理
document.addEventListener('keydown', function(event) {
    // ESC鍵清除所有選擇
    if (event.key === 'Escape' && selectedCells.size > 0) {
        clearAllSelections();
        updateMultiSelectUI();
        event.preventDefault();
    }
    
    // 複製功能 (Ctrl+C 或 Cmd+C)
    if ((event.ctrlKey || event.metaKey) && event.key === 'c' && selectedCells.size > 0) {
        copySelectedCells();
        event.preventDefault();
    }
    
    // 粘貼功能 (Ctrl+V 或 Cmd+V)
    if ((event.ctrlKey || event.metaKey) && event.key === 'v' && selectedCells.size > 0) {
        pasteToSelectedCells();
        event.preventDefault();
    }
});

// 在頁面載入時初始化多選功能
document.addEventListener('DOMContentLoaded', function() {
    initMultiSelect();
    
    // Add event listener for "Got it" button in defect mark reminder popup
    const gotItBtn = document.getElementById('gotItBtn');
    if (gotItBtn) {
        gotItBtn.addEventListener('click', function() {
            window.logger.log('Got it button clicked');
            hideDefectMarkReminder();
        });
    }
    
    // 初始化實時輸入監聽器
    initRealtimeInputListeners();
});

// 自動保存功能 - 全局函數
function addAutoSaveListeners(type) {
    const tableBody = type === 'labels' ? 
        document.getElementById('labelsDetailTableBody') : 
        document.getElementById('defectsDetailTableBody');
    
    if (!tableBody) return;
    
    // 為所有輸入字段添加事件監聽器
    const inputs = tableBody.querySelectorAll('input[data-field], textarea[data-field]');
    
    inputs.forEach(input => {
        // 移除現有的事件監聽器（如果有的話）
        input.removeEventListener('input', handleAutoSave);
        input.removeEventListener('change', handleAutoSave);
        input.removeEventListener('blur', handleAutoSave);
        
        // 添加新的事件監聽器
        input.addEventListener('input', handleAutoSave);
        input.addEventListener('change', handleAutoSave);
        input.addEventListener('blur', handleAutoSave);
    });
    
    function handleAutoSave(event) {
        const input = event.target;
        const index = parseInt(input.dataset.index);
        const field = input.dataset.field;
        
        if (isNaN(index) || !field) return;
        
        let value;
        if (input.type === 'checkbox') {
            value = input.checked;
        } else {
            value = input.value.trim();
        }
        
        // 根據類型更新相應的數據
        if (type === 'labels') {
            if (window.labels && window.labels[index]) {
                if (window.labels[index][field] !== value) {
                    window.labels[index][field] = value;
                    window.logger.log(`Auto-saved label ${index} field ${field}:`, value);
                    saveDataToStorage();
                    
                    // 實時更新相關表格
                    updateTablesOnLabelChange();
                }
            }
        } else if (type === 'defects') {
            if (window.defectEntries && window.defectEntries[index]) {
                if (window.defectEntries[index][field] !== value) {
                    window.defectEntries[index][field] = value;
                    window.logger.log(`Auto-saved defect ${index} field ${field}:`, value);
                    saveDataToStorage();
                    
                    // 實時更新相關表格
                    updateTablesOnDefectChange();
                }
            }
        }
    }
}

// 實時更新表格函數
function updateTablesOnLabelChange() {
    window.logger.log('Updating tables due to label change...');
    
    // 更新檢查記錄表格
    if (typeof window.syncLabelsToInspectionRecords === 'function') {
        window.syncLabelsToInspectionRecords();
        window.logger.log('Inspection records table updated');
    }
    
    // 更新分類記錄表格
    if (typeof window.updateCategoryTablesFromInspectionRecords === 'function') {
        window.updateCategoryTablesFromInspectionRecords();
        window.logger.log('Categories records table updated');
    }
    
    // 更新缺陷摘要表格（如果標籤變化影響缺陷數據）
    if (typeof window.updateDefectSummaryTable === 'function') {
        window.updateDefectSummaryTable();
        window.logger.log('Defect summary table updated');
    }
    
    // 同步到 defects detail-table-container（檢查 defects column 的變化）
    syncLabelsToDefectsDetailTable();
    
     // 移除：不再自動更新 imminent danger 狀態，防止意外變更
     // if (typeof updateImminentDangerInInspectionRecords === 'function') {
     //     updateImminentDangerInInspectionRecords();
     //     window.logger.log('Imminent danger status updated with unified logic');
     // }
    
    // 重新渲染樓層平面圖中的缺陷標記
    if (typeof window.redrawDefectMarks === 'function') {
        window.redrawDefectMarks();
        window.logger.log('Defect marks redrawn after label changes');
    }
}

// 初始化實時輸入監聽器
function initRealtimeInputListeners() {
    window.logger.log('Initializing realtime input listeners...');
    
    // 為標籤詳細表格添加實時輸入監聽器
    const labelsDetailTable = document.getElementById('labelsDetailTableBody');
    if (labelsDetailTable) {
        // 移除現有的事件監聽器（如果有的話）
        labelsDetailTable.removeEventListener('input', handleLabelsRealtimeUpdate);
        labelsDetailTable.removeEventListener('change', handleLabelsRealtimeUpdate);
        
        // 使用事件委託來處理動態添加的輸入字段
        labelsDetailTable.addEventListener('input', handleLabelsRealtimeUpdate);
        labelsDetailTable.addEventListener('change', handleLabelsRealtimeUpdate);
        
        window.logger.log('Labels detail table realtime listeners added');
    }
    
    // 為缺陷詳細表格添加實時輸入監聽器
    const defectsDetailTable = document.getElementById('defectsDetailTableBody');
    if (defectsDetailTable) {
        // 移除現有的事件監聽器（如果有的話）
        defectsDetailTable.removeEventListener('input', handleDefectsRealtimeUpdate);
        defectsDetailTable.removeEventListener('change', handleDefectsRealtimeUpdate);
        
        // 使用事件委託來處理動態添加的輸入字段
        defectsDetailTable.addEventListener('input', handleDefectsRealtimeUpdate);
        defectsDetailTable.addEventListener('change', handleDefectsRealtimeUpdate);
        
        window.logger.log('Defects detail table realtime listeners added');
    }
    
    window.logger.log('Realtime input listeners initialized successfully');
}

// 標籤實時更新處理函數
function handleLabelsRealtimeUpdate(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
        // 檢查是否是有 data-field 屬性的輸入字段（避免與自動保存監聽器衝突）
        if (e.target.dataset.field) {
            window.logger.log('Label detail table realtime update:', e.target.dataset.field);
            
            // 延遲執行以避免頻繁更新
            clearTimeout(window.labelRealtimeUpdateTimeout);
            window.labelRealtimeUpdateTimeout = setTimeout(() => {
                updateTablesOnLabelChange();
            }, 500); // 500ms 延遲，比自動保存的300ms稍長
        }
    }
}

// 缺陷實時更新處理函數
function handleDefectsRealtimeUpdate(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
        // 檢查是否是有 data-field 屬性的輸入字段（避免與自動保存監聽器衝突）
        if (e.target.dataset.field) {
            window.logger.log('Defect detail table realtime update:', e.target.dataset.field);
            
            // 延遲執行以避免頻繁更新
            clearTimeout(window.defectRealtimeUpdateTimeout);
            window.defectRealtimeUpdateTimeout = setTimeout(() => {
                updateTablesOnDefectChange();
            }, 500); // 500ms 延遲，比自動保存的300ms稍長
        }
    }
}

function updateTablesOnDefectChange() {
    window.logger.log('Updating tables due to defect change...');
    
    // 更新缺陷摘要表格
    if (typeof window.updateDefectSummaryTable === 'function') {
        window.updateDefectSummaryTable();
        window.logger.log('Defect summary table updated');
    }
    
    // 更新分類記錄表格
    if (typeof window.updateCategoryTablesFromInspectionRecords === 'function') {
        window.updateCategoryTablesFromInspectionRecords();
        window.logger.log('Categories records table updated');
    }
    
    // 更新檢查記錄表格（如果缺陷變化影響檢查記錄）
    if (typeof window.syncLabelsToInspectionRecords === 'function') {
        window.syncLabelsToInspectionRecords();
        window.logger.log('Inspection records table updated');
    }
    
    // 同步到 labels detail-table-container（檢查 defects column 的變化）
    syncDefectsToLabelsDetailTable();
    
     // 移除：不再自動更新 imminent danger 狀態，防止意外變更
     // if (typeof updateImminentDangerInInspectionRecords === 'function') {
     //     updateImminentDangerInInspectionRecords();
     //     window.logger.log('Imminent danger status updated with unified logic');
     // }
    
    // 重新渲染樓層平面圖中的缺陷標記
    if (typeof window.redrawDefectMarks === 'function') {
        window.redrawDefectMarks();
        window.logger.log('Defect marks redrawn after defect changes');
    }
}

// 如果DOM已經載入，立即初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMultiSelect);
} else {
    initMultiSelect();
}

// 從詳細表格中刪除標籤記錄
window.deleteLabelFromDetailTable = function(labelId, index) {
    window.logger.log('Deleting label from detail table:', labelId, index);
    
    // 檢測是否在繪圖模式
    const drawingMode = isDrawingMode();
    window.logger.log('Delete label from detail table - Drawing mode:', drawingMode);
    
    // 根據模式顯示不同的確認訊息
    let confirmMessage;
    if (drawingMode) {
        confirmMessage = '確定要刪除這個標籤記錄嗎？此操作將自動刪除所有相關的缺陷記錄、更新缺陷表格、刪除樓層平面圖中的缺陷標記，然後刪除標籤記錄和標籤標記。這是一個一體化的刪除過程。';
    } else {
        confirmMessage = '確定要刪除這個標籤記錄嗎？此操作將自動刪除所有相關的缺陷記錄、更新缺陷表格，然後刪除標籤記錄。這是一個一體化的刪除過程。';
    }
    
    if (!confirm(confirmMessage)) {
        return;
    }
    
    // 找到對應的標籤
    const labelIndex = window.labels.findIndex(label => String(label.id) === String(labelId));
    
    if (labelIndex >= 0) {
        const label = window.labels[labelIndex];
        
        // 收集所有相關的缺陷編號
        const defectNosToDelete = [];
        
        // 檢查 label.defectNo 字段（如果存在）
        if (label.defectNo) {
            defectNosToDelete.push(String(label.defectNo));
        }
        
        // 檢查 label.j 字段中的缺陷編號
        if (label.j && label.j.trim()) {
            const defectsArray = label.j.split('\n').filter(d => d.trim());
            defectsArray.forEach(defectText => {
                const defectNoMatch = defectText.match(/^(\d+)\)?\s*/);
                if (defectNoMatch) {
                    const defectNoFromJ = defectNoMatch[1];
                    if (!defectNosToDelete.includes(defectNoFromJ)) {
                        defectNosToDelete.push(defectNoFromJ);
                    }
                }
            });
        }
        
        // 檢查是否有缺陷記錄與此標籤的檢查編號相關聯
        if (window.defectEntries && Array.isArray(window.defectEntries)) {
            window.defectEntries.forEach(defect => {
                if (String(defect.locationId) === String(label.inspectionNo)) {
                    const defectNo = String(defect.defectNo);
                    if (!defectNosToDelete.includes(defectNo)) {
                        defectNosToDelete.push(defectNo);
                        window.logger.log(`Found associated defect ${defectNo} for label ${label.inspectionNo}`);
                    }
                }
            });
        }
        
        window.logger.log('Defect numbers to delete from label:', defectNosToDelete);
        
        // 如果有缺陷編號，使用統一的刪除函數
        if (defectNosToDelete.length > 0) {
            defectNosToDelete.forEach(defectNoToDelete => {
                deleteDefectRecordComprehensive(defectNoToDelete, 'labels detail table');
            });
            
            // 缺陷刪除完成後，繼續刪除標籤
            window.logger.log('Defects deleted, now proceeding to delete the label');
        }
        
        // 無論是否有缺陷，都繼續刪除標籤
        // 在刪除標籤前，先清理相關的照片分配記錄
        cleanupPhotoAssignmentsOnLabelDelete(label);
        
        window.labels.splice(labelIndex, 1);
        
        // 保存標籤到本地存儲
        if (typeof window.saveLabelsToStorage === 'function') {
            window.saveLabelsToStorage();
        }
        
        // 只在繪圖模式下重新渲染標籤（因為非繪圖模式下沒有地圖顯示）
        if (drawingMode && typeof window.redrawLabels === 'function') {
            window.redrawLabels();
        }
        
        // 同步到 defects detail-table-container（檢查缺陷記錄的變化）
        // 這會自動處理缺陷記錄的刪除和更新
        syncLabelsToDefectsDetailTable();
        
        // 更新缺陷摘要表格
        if (typeof window.updateDefectSummaryTable === 'function') {
            window.updateDefectSummaryTable();
            window.logger.log('Defect summary table updated after label deletion');
        }
        
        // 更新分類表格
        if (typeof window.updateCategoryTablesFromInspectionRecords === 'function') {
            window.updateCategoryTablesFromInspectionRecords();
            window.logger.log('Category tables updated after label deletion');
        }
        
        // 更新照片狀態
        if (typeof updatePhotoStatusFromLabels === 'function') {
            updatePhotoStatusFromLabels();
        }
        
        // 重新顯示標籤詳細表格
        if (typeof window.showLabelsDetailPopup === 'function') {
            window.showLabelsDetailPopup();
        }
        
        showNotification(`標籤記錄 ${label.inspectionNo} 已刪除（包括所有相關缺陷記錄和標記）`, 'success');
    } else {
        showNotification('找不到要刪除的標籤記錄', 'error');
    }
}

// 從詳細表格中刪除缺陷記錄
window.deleteDefectFromDetailTable = function(defectId, defectNo, index) {
    window.logger.log('Deleting defect from detail table:', defectId, defectNo, index);
    
    // 檢測是否在繪圖模式
    const drawingMode = isDrawingMode();
    window.logger.log('Delete defect from detail table - Drawing mode:', drawingMode);
    
    // 根據模式顯示不同的確認訊息
    let confirmMessage;
    if (drawingMode) {
        confirmMessage = `確定要刪除缺陷記錄 ${defectNo} 嗎？此操作將同時刪除樓層平面圖中對應的缺陷標記。`;
    } else {
        confirmMessage = `確定要刪除缺陷記錄 ${defectNo} 嗎？`;
    }
    
    if (!confirm(confirmMessage)) {
        return;
    }
    
    // 使用統一的刪除函數進行全面刪除
    deleteDefectRecordComprehensive(defectNo, 'defects detail table');
    
    // 重新顯示缺陷詳細表格
    if (typeof window.showDefectsDetailPopup === 'function') {
        window.showDefectsDetailPopup();
    }
}

// Save data to storage (with fallback) - 與 .pne 檔案格式完全一致
window.saveDataToStorage = async function() {
    // 收集 header 欄位
    const headerFields = {
        inspectionNo: (document.getElementById('locationId') || {}).value || '',
        inspectionDate: (document.getElementById('inspectionDate') || {}).value || '',
        floor: (document.getElementById('floorHeader') || {}).value || '',
        areaName: (document.getElementById('areaNameHeader') || {}).value || '',
        roomNo: (document.getElementById('roomNo') || {}).value || '',
                sortEnabled: !!(document.getElementById('sortPhotosToFolder') && document.getElementById('sortPhotosToFolder').checked)
    };

    // 收集 localStorage 內容（避免 {...localStorage} 在部分瀏覽器取不到資料）
    const localStorageData = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        localStorageData[key] = localStorage.getItem(key);
    }

    // 安全取得樓層平面標籤/缺陷標記（避免未宣告變數 ReferenceError）
    const floorPlanLabels = (typeof labels !== 'undefined' && Array.isArray(labels))
        ? labels
        : (typeof window !== 'undefined' && Array.isArray(window.labels) ? window.labels : []);
    const floorPlanDefectMarks = (typeof defectMarks !== 'undefined' && Array.isArray(defectMarks))
        ? defectMarks
        : (typeof window !== 'undefined' && Array.isArray(window.defectMarks) ? window.defectMarks : []);

    const dataToSave = {
        // 版本與時間 - 與 .pne 檔案一致
        version: '7.1.0',
        exportDate: new Date().toISOString(),
        lastSaved: new Date().toISOString(),

        // Header/UI 狀態 - 與 .pne 檔案一致
        headerFields: headerFields,

        // 檔案路徑資訊 - 與 .pne 檔案一致
        filePaths: {
            // PDF 檔案路徑（樓層平面圖）- 只保存文件引用
            pdfPath: localStorage.getItem('pne_floorplan_filename') || '',
            pdfData: localStorage.getItem('pne_floorplan_data') || '',
            pdfFileReference: (() => {
                try {
                    const floorPlanData = JSON.parse(localStorage.getItem('pne_floorplan_data') || '{}');
                    return floorPlanData.fileReference || null;
                } catch (e) {
                    return null;
                }
            })(),
            
            // 照片資料夾路徑
            photoFolderPath: (document.getElementById('folderNameDisplay') && document.getElementById('folderNameDisplay').textContent) || '',
            photoFolderName: (document.getElementById('folderNameDisplay') && document.getElementById('folderNameDisplay').textContent.split('/').pop()) || '',
            
            // 照片檔案路徑列表
            photoFilePaths: (allPhotos || []).map(file => ({
                name: file.name,
                webkitRelativePath: file.webkitRelativePath || '',
                fullPath: file.webkitRelativePath ? `${(document.getElementById('folderNameDisplay') && document.getElementById('folderNameDisplay').textContent) || ''}/${file.webkitRelativePath}` : file.name
            }))
        },

        // 文件引用系統 - 與 .pne 檔案一致
        files: (() => {
            const files = [];
            
            // 添加 PDF 文件引用
            const pdfFilename = localStorage.getItem('pne_floorplan_filename');
            const pdfData = localStorage.getItem('pne_floorplan_data');
            if (pdfFilename && pdfData) {
                try {
                    const floorPlanData = JSON.parse(pdfData);
                    files.push({
                        id: 'pdf_floorplan',
                        name: pdfFilename,
                        path: pdfFilename,
                        type: 'pdf',
                        description: '樓層平面圖 PDF 文件',
                        uploadDate: floorPlanData.uploadDate || new Date().toISOString(),
                        size: `${(floorPlanData.fileSize / 1024 / 1024).toFixed(2)} MB`,
                        fileReference: floorPlanData.fileReference,
                        hasBase64Data: floorPlanData.hasBase64Data || false
                    });
                } catch (e) {
                    window.logger.error('Error parsing PDF data:', e);
                }
            }
            
            // 添加照片文件引用
            (allPhotos || []).forEach((photo, index) => {
                files.push({
                    id: `photo_${index}`,
                    name: photo.name,
                    path: photo.webkitRelativePath || photo.name,
                    type: 'image',
                    description: `檢查照片 - ${photo.name}`,
                    uploadDate: new Date(photo.lastModified).toISOString(),
                    size: `${(photo.size / 1024 / 1024).toFixed(2)} MB`,
                    dataURL: photo.dataURL || '',
                    webkitRelativePath: photo.webkitRelativePath || ''
                });
            });
            
            return files;
        })(),

        // 照片基本與指派統計 - 與 .pne 檔案一致
        totalPhotos: (allPhotos || []).length,
        totalAssignments: Object.values(assignedPhotos || {}).reduce((sum, photos) => sum + photos.size, 0),
        photoMetadata: (allPhotos || []).map(file => {
            // 如果沒有 dataURL，嘗試從 DOM 中獲取
            let dataURL = file.dataURL || '';
            if (!dataURL) {
                const photoItem = document.querySelector(`[data-filename="${file.name}"]`);
                if (photoItem) {
                    const img = photoItem.querySelector('img');
                    if (img && img.src && img.src.startsWith('data:')) {
                        dataURL = img.src;
                    }
                }
            }
            
            return {
            name: file.name,
            size: file.size,
            type: file.type,
                lastModified: file.lastModified || Date.now(),
                webkitRelativePath: file.webkitRelativePath || '',
                dataURL: dataURL
            };
        }),

        // 主資料表 - 與 .pne 檔案一致
        inspectionRecords: submittedData || [],
        submittedDefectEntries: submittedDefectEntries || [],
        rowIdCounter: rowIdCounter || 0,
        categories: categories || [],
        defectTypes: defectTypes || [],

        // 照片分配資料 - 與 .pne 檔案一致
        photoAssignments: {
            categoryNumbers: categoryNumbers || {},
            assignedPhotos: Object.fromEntries(
                Object.entries(assignedPhotos || {}).map(([key, value]) => [key, Array.from(value || [])])
            ),
            defectEntries: window.defectEntries || []
        },

        // App 狀態 - 與 .pne 檔案一致
        uploadedFolderPath: (document.getElementById('folderNameDisplay') && document.getElementById('folderNameDisplay').textContent) || '',
        submittedFilenames: (() => {
            const filenames = Array.from(submittedFilenames || new Set());
            console.log('🔍 saveDataToStorage: Saving submittedFilenames:', filenames.length, 'files:', filenames);
            return filenames;
        })(),
        photoFolders: photoFolders || [],
        localStorage: localStorageData,

        // 樓層平面圖 - 與 .pne 檔案一致
        floorPlanLabels: floorPlanLabels,
        floorPlanDefectMarks: floorPlanDefectMarks,
        
        // 嵌入 PDF 檔案數據 - 與 .pne 檔案一致
        embeddedPDF: (() => {
            const pdfBase64 = localStorage.getItem('pne_floorplan_base64');
            const pdfData = localStorage.getItem('pne_floorplan_data');
            const pdfFilename = localStorage.getItem('pne_floorplan_filename');
            
            if (pdfBase64 && pdfData && pdfFilename) {
                try {
                    const floorPlanData = JSON.parse(pdfData);
                    return {
                        filename: pdfFilename,
                        base64Data: pdfBase64,
                        metadata: floorPlanData,
                        hasEmbeddedPDF: true,
                        size: pdfBase64.length
                    };
                } catch (e) {
                    window.logger.error('Error parsing PDF data for embedding:', e);
                    return null;
                }
            } else {
                return null;
            }
        })(),
        
        // 樓層平面圖視圖狀態 - 與 .pne 檔案一致
        floorPlanViewState: {
            scale: window.currentScale || 1.0,
            translateX: window.translateX || 0,
            translateY: window.translateY || 0,
            baseScale: (typeof baseScale !== 'undefined' ? baseScale : (window.baseScale || 1.0)),
            labelSizeScale: (window.labelSizeScale || 24),
            defectMarkSizeScale: (window.defectMarkSizeScale || 24)
        },
        
        // 照片提交狀態 - 與 .pne 檔案一致
        photoSubmissionStatus: {
            submittedPhotos: Array.from(submittedFilenames || new Set()),
            photoAssignments: Object.fromEntries(
                Object.entries(assignedPhotos || {}).map(([key, value]) => [key, Array.from(value || [])])
            )
        }
    };
    
    // 詳細日誌
    window.logger.log('saveDataToStorage: Preparing to save data with PNE-compatible structure');
    window.logger.log(`- Version: ${dataToSave.version}`);
    window.logger.log(`- Total photos: ${dataToSave.totalPhotos}`);
    window.logger.log(`- Total assignments: ${dataToSave.totalAssignments}`);
    window.logger.log(`- Photos with dataURL: ${dataToSave.photoMetadata.filter(p => p.dataURL && p.dataURL.length > 0).length}`);
    window.logger.log(`- Floor plan labels: ${dataToSave.floorPlanLabels.length}`);
    window.logger.log(`- Floor plan defect marks: ${dataToSave.floorPlanDefectMarks.length}`);
    window.logger.log(`- Has embedded PDF: ${dataToSave.embeddedPDF ? 'Yes' : 'No'}`);
    
    // 保存到 IndexedDB，使用與 .pne 檔案完全一致的結構
    console.log('🔍 saveDataToStorage: About to save dataToSave to IndexedDB');
    console.log('🔍 saveDataToStorage: dataToSave keys:', Object.keys(dataToSave));
    console.log('🔍 saveDataToStorage: dataToSave.submittedFilenames:', dataToSave.submittedFilenames);
    await window.storageAdapter.setItemDirect('photoNumberExtractorData', dataToSave);
    console.log('🔍 saveDataToStorage: Data saved to IndexedDB successfully');
    window.logger.log('saveDataToStorage: PNE-compatible data successfully saved to IndexedDB');

    // 同步更新單獨的樓層平面圖儲存鍵，避免重載時不同來源互相覆蓋
    try {
        if (typeof LABELS_LS_KEY !== 'undefined') {
            await window.storageAdapter.setItem(LABELS_LS_KEY, dataToSave.floorPlanLabels || []);
        } else {
            await window.storageAdapter.setItem('pne_floorplan_labels', dataToSave.floorPlanLabels || []);
        }
        if (typeof DEFECT_MARKS_LS_KEY !== 'undefined') {
            await window.storageAdapter.setItem(DEFECT_MARKS_LS_KEY, dataToSave.floorPlanDefectMarks || []);
        } else {
            await window.storageAdapter.setItem('pne_floorplan_defect_marks', dataToSave.floorPlanDefectMarks || []);
        }
        window.logger.log('saveDataToStorage: Synced floor plan data with latest state');
    } catch (err) {
        window.logger.error('saveDataToStorage: Failed syncing floor plan keys', err);
    }
}

// 4. 監聽「Submit to Table」按鈕，填充 Inspection Records 與 9 個分類表 - 已移除重複的監聽器

// 5. 監聽 Inspection Records 表格資料修改，同步更新分類表

// updateCategoryTablesFromInspectionRecords();

// 生成 Inspection Records CSV
function generateInspectionRecordsCSV() {
    let csv = 'Inspection no.,Inspection Date,Location (Floor, Area name and Room no. in sequence),A: Exposed structural metalwork,B: Structural elements,C: External building elements,D: Suspended objects,E: High level internal finishes,F: Heavy metal gates/doors,G: Window and glass louvers,H: Drainage and Plumbing systems,I: Fire safety elements,J: Defects,Imminent Danger\n';
    
    submittedData.forEach(row => {
        // 組合位置信息：floor, Area name, Room no.
        const locationInfo = `${row.floor || 'N/A'}, ${row.areaName || 'N/A'}, ${row.roomNo || 'N/A'}`;
        
        csv += `"${row.locationId}","${row.inspectionDate}","${locationInfo}",`;
        csv += `"${row.a || 'N/A'}","${row.b || 'N/A'}","${row.c || 'N/A'}",`;
        csv += `"${row.d || 'N/A'}","${row.e || 'N/A'}","${row.f || 'N/A'}",`;
        csv += `"${row.g || 'N/A'}","${row.h || 'N/A'}","${row.i || 'N/A'}",`;
        csv += `"${row.j || 'N/A'}","${row.hasImminentDanger ? 'Yes' : 'No'}"\n`;
    });
    
    return csv;
}

// 生成 Defect Summary CSV
function generateDefectSummaryCSV() {
    let csv = 'Defect no.,Defect(s) with Imminent Danger (Yes/No) Follow up action at Part A.5,Locations of Defects (Floor Area Name and Room No. in sequence),Type of High Risk Building Elements,Description / Construction of High Risk Building Elements,Existing Condition of of High Risk Building Elements,Defects Diagnosis and Deficiencies Identified,Relative Humidity of Room / Area measured during Site Inspection,Moisture Content of Concrete Structural Elements only,Chloride Content of Concrete Structural Elements,Depth and Extent of Carbonation for Concrete Structural Elements,Scope and Extent of Recommended Follow-up Repair Remedial Works,Scope and Extent of Recommended Preventive Maintenance Works,Remarks\n';
    
    // 只從缺陷條目中提取缺陷數據 - 只包含來自 defect-window 的資料，排除來自缺陷標記的資料
    // 不再從 submittedData 中提取數據，只顯示來自 defect-window 的缺陷記錄
    const allDefects = [];
    let globalDefectIndex = 0;
    
    window.defectEntries.filter(entry => !entry.fromDefectMark).forEach((entry, entryIndex) => {
        // 將分類代碼轉換為完整的分類名稱
        const getCategoryName = (categoryCode) => {
            const category = categories.find(cat => cat.id === categoryCode);
            return category ? category.name : categoryCode;
        };
                
                allDefects.push({
            id: `defect_entry_${entryIndex}`,
            defectNo: entry.defectNo || (globalDefectIndex + 1),
            imminentDanger: entry.imminentDanger || false,
            location: `${entry.floor || 'N/A'}, ${entry.areaName || 'N/A'}, ${entry.roomNo || 'N/A'}`,
            category: getCategoryName(entry.category) || 'N/A',
            description: entry.description || 'N/A',
            range: entry.range || 'N/A',
            descriptionConstruction: entry.descriptionConstruction || 'N/A',
            existingCondition: entry.existingCondition || 'N/A',
            humidity: entry.humidity || 'N/A',
            moisture: entry.moisture || 'N/A',
            chloride: entry.chloride || 'N/A',
            carbonation: entry.carbonation || 'N/A',
            remedialWorks: entry.remedialWorks || 'N/A',
            preventiveWorks: entry.preventiveWorks || 'N/A',
                    remarks: (entry.remarks && entry.remarks.trim() !== '') ? entry.remarks : 'N/A'
                });
                globalDefectIndex++;
    });
    
    // 使用提取的缺陷數據生成 CSV
    allDefects.forEach((defect, index) => {
        const defectNo = index + 1; // Simple sequential numbering starting from 1
        const imminentDanger = defect.imminentDanger ? 'Yes' : 'No';
        const location = defect.location;
        // 將分類代碼轉換為完整的分類名稱
        const getCategoryName = (categoryCode) => {
            const category = categories.find(cat => cat.id === categoryCode);
            return category ? category.name : categoryCode;
        };
        const categoryName = getCategoryName(defect.category) || 'Defects';
        
        csv += `"${defectNo}","${imminentDanger}","${location}","${categoryName}",`;
        csv += `"${defect.descriptionConstruction}","${defect.existingCondition}","${defect.description}","${defect.humidity}","${defect.moisture}","${defect.chloride}","${defect.carbonation}","${defect.remedialWorks}","${defect.preventiveWorks}","${defect.remarks}"\n`;
    });
    
    return csv;
}

// 生成分類表格 CSV
async function generateCategoryTableCSV(categoryId) {
    const cat = categoryTableIds.find(c => c.id === categoryId);
    if (!cat) return '';
    
    let csv = 'Location no.,Room no.,Photo no.,Defects,Photo Files\n';
    
    // 確保分類表格數據可用
    let categoryData = [];
    
    // 優先使用當前記憶體中的數據
    if (categoryTablesData[categoryId] && categoryTablesData[categoryId].length > 0) {
        categoryData = categoryTablesData[categoryId];
        window.logger.log(`Using category ${categoryId} data from memory:`, categoryData.length);
    } else {
        // 嘗試從存儲中恢復分類表格數據
        try {
            const savedData = window.storageAdapter ? 
                await window.storageAdapter.getItem('photoNumberExtractorData') : 
                JSON.parse(localStorage.getItem('photoNumberExtractorData') || '{}');
            
            if (savedData && savedData.inspectionRecords && savedData.inspectionRecords.length > 0) {
                // 從檢查記錄重新生成分類表格數據
                const inspectionRecords = savedData.inspectionRecords;
                categoryData = [];
                
                inspectionRecords.forEach(rowData => {
                    const locationNo = rowData.locationId || 'N/A';
                    const roomNo = rowData.roomNo || 'N/A';
                    const photoNo = rowData[categoryId] || 'N/A';
                    
                    const defectItems = rowData.j ? rowData.j.split('\n').filter(item => item.trim()) : [];
                    
                    // 找出屬於此分類的缺陷項目
                    const categoryDefects = defectItems.filter(item => {
                        const description = item.replace(/^\*?\s*/, '');
                        const defectDesc = description.split('_').slice(1).join('_');
                        return defectTypes[categoryId] && defectTypes[categoryId].includes(defectDesc);
                    });
                    
                    if (photoNo.trim() || categoryDefects.length > 0) {
                        const defects = categoryDefects.length > 0 ? categoryDefects.join('; ') : 'N/A';
                        categoryData.push({
                            locationNo, 
                            roomNo, 
                            photoNo: photoNo.trim() ? photoNo : 'N/A', 
                            defects
                        });
                    }
                });
                
                window.logger.log(`Restored category ${categoryId} data from storage:`, categoryData.length);
            }
        } catch (error) {
            window.logger.error(`Error restoring category ${categoryId} data:`, error);
        }
    }
    
    if (categoryData.length > 0) {
        // 按照照片編號排序資料
        const sortedData = categoryData.sort((a, b) => {
            const numA = parseInt(a.photoNo.match(/\d+/)?.[0] || '0');
            const numB = parseInt(b.photoNo.match(/\d+/)?.[0] || '0');
            return numA - numB;
        });
        
        sortedData.forEach(row => {
            // 根據照片編號找到對應的照片檔案名稱
            let photoFiles = [];
            if (row.photoNo && row.photoNo !== 'N/A') {
                // 從 submittedData 中找到對應的記錄
                const inspectionRecord = submittedData.find(record => 
                    record.locationId === row.locationNo && record.roomNo === row.roomNo
                );
                
                if (inspectionRecord && inspectionRecord.photoFilenames) {
                    // 過濾出屬於此分類的照片
                    photoFiles = inspectionRecord.photoFilenames.filter(filename => {
                        const photoNumber = filename.match(/\d+/)?.[0];
                        if (!photoNumber) return false;
                        
                        // 檢查照片編號是否在此分類中
                        const photoNumbers = row.photoNo.split(/[,\-]/).map(num => num.trim());
                        return photoNumbers.includes(photoNumber);
                    });
                    
                    // 按照照片編號排序
                    photoFiles.sort((a, b) => {
                        const numA = parseInt(a.match(/\d+/)?.[0] || '0');
                        const numB = parseInt(b.match(/\d+/)?.[0] || '0');
                        return numA - numB;
                    });
                }
            }
            
            csv += `"${row.locationNo}","${row.roomNo}","${row.photoNo}","${row.defects}","${photoFiles.join('; ')}"\n`;
        });
    }
    
    return csv;
}

// 新增：顯示照片分配狀態摘要
function showPhotoAssignmentSummary() {
    const totalPhotos = allPhotos.length;
    const totalAssigned = Object.values(assignedPhotos).reduce((sum, photos) => sum + photos.size, 0);
    const totalSubmitted = submittedFilenames.size;
    
    let summary = `照片分配狀態摘要:\n`;
    summary += `總照片數: ${totalPhotos}\n`;
    summary += `已分配照片: ${totalAssigned}\n`;
    summary += `已提交照片: ${totalSubmitted}\n\n`;
    
    // 各分類的分配狀況
    categories.forEach(category => {
        const assignedCount = assignedPhotos[category.id]?.size || 0;
        const numbersCount = categoryNumbers[category.id]?.length || 0;
        summary += `${category.name}: ${assignedCount} 張照片, ${numbersCount} 個編號\n`;
    });
    
    window.logger.log(summary);
    return summary;
}

// 頁面載入時初始化分類表和缺陷摘要表
window.logger.log('Page initialization: Starting category tables and defect summary table updates');
if (typeof window.updateCategoryTablesFromInspectionRecords === 'function') {
    window.updateCategoryTablesFromInspectionRecords();
}

// 頁面重新載入時清空缺陷摘要表格，防止顯示來自缺陷標記的數據
// 修復：只有在沒有已保存的缺陷數據時才清空表格
const defectSummaryTableBody = document.getElementById('defectSummaryTableBody');
const defectSummaryCount = document.getElementById('defectSummaryCount');
if (defectSummaryTableBody) {
    // 檢查是否有已保存的缺陷數據
    const hasSavedDefectData = window.submittedDefectEntries && window.submittedDefectEntries.length > 0;
    
    if (!hasSavedDefectData) {
        defectSummaryTableBody.innerHTML = '<tr><td colspan="14" class="empty-state">No defect summary data yet</td></tr>';
        defectSummaryCount.textContent = '0 entries';
        window.logger.log('Page initialization: Cleared defect summary table on reload (no saved defect data)');
    } else {
        window.logger.log('Page initialization: Preserving defect summary table (has saved defect data)');
    }
}

// 確保在 loadDataFromStorage 後也更新分類表和缺陷摘要表
setTimeout(() => {
    window.logger.log('Page initialization: Delayed updates, submittedDefectEntries.length:', submittedDefectEntries.length);
    if (typeof window.updateCategoryTablesFromInspectionRecords === 'function') {
    window.updateCategoryTablesFromInspectionRecords();
}
    
    // 更新缺陷摘要表格以顯示來自 all defects detail-table-container 的記錄
    // 這確保了如果 detail-table 中有記錄，它們會在任何時候都顯示在 summary table 中
    if (typeof window.updateDefectSummaryTable === 'function') {
    window.updateDefectSummaryTable();
}
    window.logger.log('Page initialization: Updated defect summary table to display detail-table records');
    
    // 顯示照片分配狀態摘要
    if (allPhotos.length > 0) {
        showPhotoAssignmentSummary();
    }
}, 100);

// PNE下拉選單互動（由hover改為點擊）
const pneBtn = document.querySelector('.pne-func-btn');
const pneDropdown = pneBtn.querySelector('.pne-dropdown');

pneBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    pneDropdown.style.display = (pneDropdown.style.display === 'block') ? 'none' : 'block';
});
// 點擊外部自動收起
window.addEventListener('click', () => {
    pneDropdown.style.display = 'none';
});
// 點擊選單項目時自動收起並處理動作
pneDropdown.addEventListener('click', e => {
    if(e.target.classList.contains('pne-dropdown-item')) {
        const action = e.target.getAttribute('data-action');
        
        // 立即關閉下拉選單
        pneDropdown.style.display = 'none';
        
        // 處理各種動作
        switch(action) {
            case 'selectfolder':
                // Check if there are unexported records AND sorting is enabled
                if (submittedData.length > 0 && sortToggle.checked) {
                    // Show the overlay message
                    globalOverlay.style.display = 'flex';
                    return;
                }
                
                // Proceed with folder selection if no unexported data or sorting is disabled
                selectPhotoFolder();
                break;
                
            case 'uploadfloorplan':
                // Open drawing mode (floor plan)
                if (typeof openFloorPlanOverlay === 'function') {
                    openFloorPlanOverlay();
                }
                break;
                
            case 'open':
                // Open PNE file - this is handled by separate event listener
                // The dropdown is already closed above
                break;
                
            case 'saveas':
                // Save as PNE file - this is handled by separate event listener
                // The dropdown is already closed above
                break;
                
            case 'exportcsv':
                // Export CSV - this is handled by separate event listener
                // The dropdown is already closed above
                break;
                
            case 'preview':
                // Defects Report - this is handled by separate event listener
                // The dropdown is already closed above
                break;
                
            case 'summary':
                // Photo Assignment Summary
                const summary = showPhotoAssignmentSummary();
                
                // 創建彈出視窗顯示摘要
                const overlay = document.createElement('div');
                overlay.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background: rgba(0,0,0,0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 5000;
                `;
                
                const popup = document.createElement('div');
                popup.style.cssText = `
                    background: white;
                    padding: 30px;
                    border-radius: 12px;
                    max-width: 600px;
                    max-height: 80vh;
                    overflow-y: auto;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                `;
                
                popup.innerHTML = `
                    <h3 style="color: var(--primary); margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
                        <i class="fas fa-info-circle"></i> 照片分配狀態摘要
                    </h3>
                    <pre style="white-space: pre-wrap; font-family: monospace; font-size: 14px; line-height: 1.6; background: #f8f9fa; padding: 15px; border-radius: 8px; border: 1px solid #e9ecef;">${summary}</pre>
                    <div style="text-align: center; margin-top: 20px;">
                        <button id="closeSummaryBtn" style="background: var(--primary); color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; font-weight: 600;">關閉</button>
                    </div>
                `;
                
                overlay.appendChild(popup);
                document.body.appendChild(overlay);
                
                // 添加關閉按鈕的事件監聽器
                const closeBtn = popup.querySelector('#closeSummaryBtn');
                if (closeBtn) {
                    closeBtn.addEventListener('click', () => {
                        overlay.remove();
                    });
                }
                
                // 點擊背景也可以關閉彈出視窗
                overlay.addEventListener('click', (e) => {
                    if (e.target === overlay) {
                        overlay.remove();
                    }
                });
                break;
                
            case 'fileviewer':
                // File Viewer - 顯示當前載入的文件
                const currentFiles = [];
                
                // 添加 PDF 文件（如果存在）
                const pdfFilename = localStorage.getItem('pne_floorplan_filename');
                const pdfData = localStorage.getItem('pne_floorplan_data');
                if (pdfFilename && pdfData) {
                    try {
                        const floorPlanData = JSON.parse(pdfData);
                        currentFiles.push({
                            id: 'pdf_floorplan',
                            name: pdfFilename,
                            path: pdfFilename,
                            type: 'pdf',
                            description: '樓層平面圖 PDF 文件',
                            uploadDate: floorPlanData.uploadDate || new Date().toISOString(),
                            size: `${(floorPlanData.fileSize / 1024 / 1024).toFixed(2)} MB`,
                            fileReference: floorPlanData.fileReference,
                            hasBase64Data: floorPlanData.hasBase64Data || false
                        });
                    } catch (e) {
                        window.logger.error('Error parsing PDF data:', e);
                    }
                }
                
                // 添加照片文件（如果存在）
                if (allPhotos && allPhotos.length > 0) {
                    allPhotos.forEach((photo, index) => {
                        currentFiles.push({
                            id: `photo_${index}`,
                            name: photo.name,
                            path: photo.webkitRelativePath || photo.name,
                            type: 'image',
                            description: `檢查照片 - ${photo.name}`,
                            uploadDate: new Date(photo.lastModified).toISOString(),
                            size: `${(photo.size / 1024 / 1024).toFixed(2)} MB`,
                            dataURL: photo.dataURL || '',
                            webkitRelativePath: photo.webkitRelativePath || ''
                        });
                    });
                }
                
                if (currentFiles.length === 0) {
                    showNotification('沒有可顯示的文件', 'warning');
                } else {
                    createFileDisplaySystem(currentFiles);
                }
                break;
                
            default:
                window.logger.log('Unknown PNE dropdown action:', action);
                break;
        }
    }
});

// Export CSV from PNE menu
const exportCSVBtn = document.querySelector('.pne-dropdown-item[data-action="exportcsv"]');
exportCSVBtn.addEventListener('click', function() {
    // 關閉下拉選單
    const pneDropdown = document.querySelector('.pne-dropdown');
    if (pneDropdown) {
        pneDropdown.style.display = 'none';
    }
    
    // 直接顯示導出設置頁面，不檢查數據
    showExportSettingsModal();
});

// 顯示導出設置頁面
function showExportSettingsModal() {
    const modal = document.getElementById('exportSettingsModal');
    if (modal) {
        modal.style.display = 'flex';
        
        // 初始化設置
        initializeExportSettings();
        
        // 添加事件監聽器
        setupExportSettingsEventListeners();
    }
}

// 初始化導出設置
function initializeExportSettings() {
    // 檢查各項數據的可用性
    const hasInspectionRecords = submittedData && submittedData.length > 0;
    const hasDefectSummary = window.defectEntries && window.defectEntries.length > 0;
    // 分類記錄表格基於 submittedData 中的分類數據，而不是當前分配的照片
    const hasCategories = submittedData && submittedData.length > 0 && 
        submittedData.some(record => {
            // 檢查是否有任何分類 (A-I) 有數據
            return ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'].some(categoryId => {
                const value = record[categoryId];
                return value && value.trim() && value.trim() !== 'N/A';
            });
        });
    const hasFloorPlanPDF = localStorage.getItem('pne_floorplan_filename') || localStorage.getItem('pne_floorplan_base64');
    const hasPhotos = allPhotos && allPhotos.length > 0;
    
    // 設置複選框狀態
    const inspectionRecordsCheckbox = document.getElementById('exportInspectionRecords');
    const defectSummaryCheckbox = document.getElementById('exportDefectSummary');
    const categoriesCheckbox = document.getElementById('exportCategories');
    const floorPlanPDFCheckbox = document.getElementById('exportFloorPlanPDF');
    const sortPhotosCheckbox = document.getElementById('sortPhotosToFolder');
    
    if (inspectionRecordsCheckbox) {
        inspectionRecordsCheckbox.checked = hasInspectionRecords;
        inspectionRecordsCheckbox.disabled = !hasInspectionRecords;
        // 添加視覺提示
        if (!hasInspectionRecords) {
            inspectionRecordsCheckbox.parentElement.style.opacity = '0.6';
            inspectionRecordsCheckbox.parentElement.title = 'No inspection records available';
        } else {
            inspectionRecordsCheckbox.parentElement.style.opacity = '1';
            inspectionRecordsCheckbox.parentElement.title = '';
        }
    }
    
    if (defectSummaryCheckbox) {
        defectSummaryCheckbox.checked = hasDefectSummary;
        defectSummaryCheckbox.disabled = !hasDefectSummary;
        if (!hasDefectSummary) {
            defectSummaryCheckbox.parentElement.style.opacity = '0.6';
            defectSummaryCheckbox.parentElement.title = 'No defect summary available';
        } else {
            defectSummaryCheckbox.parentElement.style.opacity = '1';
            defectSummaryCheckbox.parentElement.title = '';
        }
    }
    
    if (categoriesCheckbox) {
        window.logger.log('Categories checkbox found, hasCategories:', hasCategories);
        window.logger.log('submittedData for categories check:', submittedData);
        categoriesCheckbox.checked = hasCategories;
        categoriesCheckbox.disabled = !hasCategories;
        if (!hasCategories) {
            categoriesCheckbox.parentElement.style.opacity = '0.6';
            categoriesCheckbox.parentElement.title = 'No category records available';
            window.logger.log('Categories checkbox disabled - no category records available');
        } else {
            categoriesCheckbox.parentElement.style.opacity = '1';
            categoriesCheckbox.parentElement.title = '';
            window.logger.log('Categories checkbox enabled - category records available');
        }
    } else {
        window.logger.error('Categories checkbox not found!');
    }
    
    if (floorPlanPDFCheckbox) {
        floorPlanPDFCheckbox.checked = !!hasFloorPlanPDF;
        floorPlanPDFCheckbox.disabled = !hasFloorPlanPDF;
        if (!hasFloorPlanPDF) {
            floorPlanPDFCheckbox.parentElement.style.opacity = '0.6';
            floorPlanPDFCheckbox.parentElement.title = 'No floor plan PDF available';
        } else {
            floorPlanPDFCheckbox.parentElement.style.opacity = '1';
            floorPlanPDFCheckbox.parentElement.title = '';
        }
    }
    
    if (sortPhotosCheckbox) {
        sortPhotosCheckbox.checked = true; // 默認啟用
        sortPhotosCheckbox.disabled = !hasPhotos; // 只有在有照片時才啟用
        if (!hasPhotos) {
            sortPhotosCheckbox.parentElement.style.opacity = '0.6';
            sortPhotosCheckbox.parentElement.title = 'No photos available for sorting';
        } else {
            sortPhotosCheckbox.parentElement.style.opacity = '1';
            sortPhotosCheckbox.parentElement.title = '';
        }
    }
}

// 設置導出設置頁面的事件監聽器
function setupExportSettingsEventListeners() {
    const modal = document.getElementById('exportSettingsModal');
    const closeBtn = document.getElementById('closeExportSettingsBtn');
    const cancelBtn = document.getElementById('cancelExportBtn');
    const exportBtn = document.getElementById('confirmExportBtn');
    
    // 關閉按鈕
    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.style.display = 'none';
        };
    }
    
    // 取消按鈕
    if (cancelBtn) {
        cancelBtn.onclick = () => {
            modal.style.display = 'none';
        };
    }
    
    // 導出按鈕
    if (exportBtn) {
        exportBtn.onclick = async () => {
            await performExport();
            modal.style.display = 'none';
        };
    }
    
    // 點擊模態框外部關閉
    if (modal) {
        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        };
    }
}

// 執行導出 - 與 pne.html 邏輯一致
async function performExport() {
    try {
        // 獲取用戶選擇的設置
        const exportSettings = {
            inspectionRecords: document.getElementById('exportInspectionRecords').checked,
            defectSummary: document.getElementById('exportDefectSummary').checked,
            categories: document.getElementById('exportCategories').checked,
            floorPlanPDF: document.getElementById('exportFloorPlanPDF').checked,
            sortPhotosToFolder: document.getElementById('sortPhotosToFolder').checked
        };
        
        // 添加調試信息
        window.logger.log('Export settings:', exportSettings);
        window.logger.log('sortPhotosToFolder checkbox element:', document.getElementById('sortPhotosToFolder'));
        window.logger.log('sortPhotosToFolder checked:', document.getElementById('sortPhotosToFolder').checked);
        
        // 檢查是否至少選擇了一項
        const hasSelection = Object.values(exportSettings).some(setting => setting === true);
        if (!hasSelection) {
            showNotification('Please select at least one item to export, or add some data to the application first.', 'warning');
        return;
    }
        
        showNotification('Preparing export...', 'info');
    
    // 創建 ZIP 檔案
    const zip = new JSZip();
    
    // 1. 匯出 Inspection Records 表格
        if (exportSettings.inspectionRecords) {
    const inspectionRecordsCSV = generateInspectionRecordsCSV();
    zip.file("Inspection_Records.csv", inspectionRecordsCSV);
        }
    
    // 2. 匯出 Defect Summary 表格
        if (exportSettings.defectSummary) {
    const defectSummaryCSV = generateDefectSummaryCSV();
    zip.file("Defect_Summary.csv", defectSummaryCSV);
        }
        
        // 3. 匯出分類表格 (A-I)
        if (exportSettings.categories) {
            window.logger.log('Exporting category tables (A-I)...');
            window.logger.log('categoryTableIds:', categoryTableIds);
            window.logger.log('submittedData for categories:', submittedData);
            
            for (const cat of categoryTableIds) {
                window.logger.log(`Generating CSV for category ${cat.id}: ${cat.name}`);
                const categoryCSV = await generateCategoryTableCSV(cat.id);
        const filename = `${cat.name.replace(/[^a-zA-Z0-9]/g, '_')}.csv`;
                window.logger.log(`Adding ${filename} to ZIP, CSV length:`, categoryCSV.length);
        zip.file(filename, categoryCSV);
            }
            window.logger.log('Category tables export completed');
        }
        
        // 4. 匯出樓層平面圖 PDF
        if (exportSettings.floorPlanPDF) {
            await exportFloorPlanToZip(zip);
        }
        
        // 5. 添加照片到 ZIP - 與 pne.html 邏輯一致
        if (exportSettings.sortPhotosToFolder) {
            window.logger.log('Starting photo export with folder sorting (pne.html style)');
            await exportPhotosToZipPneStyle(zip);
        }
        
        // 6. 生成並下載 ZIP 檔案
        const content = await zip.generateAsync({type: 'blob'});
        const url = URL.createObjectURL(content);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Inspection_Data_${new Date().toISOString().split('T')[0]}.zip`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showNotification('Data exported successfully!', 'success');
        
    } catch (error) {
        window.logger.error('Export error:', error);
        showNotification('Export failed!', 'error');
    }
}

// 導出樓層平面圖 PDF 到 ZIP - 使用與繪圖模式相同的邏輯
async function exportFloorPlanToZip(zip) {
    try {
        const pdfBase64 = localStorage.getItem('pne_floorplan_base64');
        const pdfFilename = localStorage.getItem('pne_floorplan_filename');
        const floorPlanData = JSON.parse(localStorage.getItem('pne_floorplan_data') || '{}');
        
        if (pdfBase64 && pdfFilename) {
            window.logger.log('Exporting floor plan PDF to ZIP:', pdfFilename);
            
            // 檢查是否有標籤或缺陷標記需要導出
            let labelsToExport = [];
            let defectMarksToExport = [];
            
            // 優先使用當前記憶體中的數據
            if (window.labels && window.labels.length > 0) {
                labelsToExport = window.labels;
                window.logger.log('Using labels from memory:', labelsToExport.length);
            } else {
                // 嘗試從存儲中恢復標籤數據
                try {
                    const savedData = await window.storageAdapter.getItem('photoNumberExtractorData');
                    if (savedData && savedData.floorPlanLabels && savedData.floorPlanLabels.length > 0) {
                        labelsToExport = savedData.floorPlanLabels;
                        window.logger.log('Restored labels from storage:', labelsToExport.length);
                    }
                } catch (error) {
                    window.logger.error('Error restoring labels from storage:', error);
                }
            }
            
            if (window.defectMarks && window.defectMarks.length > 0) {
                defectMarksToExport = window.defectMarks;
                window.logger.log('Using defect marks from memory:', defectMarksToExport.length);
            } else {
                // 嘗試從存儲中恢復缺陷標記數據
                try {
                    const savedData = await window.storageAdapter.getItem('photoNumberExtractorData');
                    if (savedData && savedData.floorPlanDefectMarks && savedData.floorPlanDefectMarks.length > 0) {
                        defectMarksToExport = savedData.floorPlanDefectMarks;
                        window.logger.log('Restored defect marks from storage:', defectMarksToExport.length);
                    }
                } catch (error) {
                    window.logger.error('Error restoring defect marks from storage:', error);
                }
            }
            
            // 如果有標籤或缺陷標記，生成帶註釋的 PDF（使用與繪圖模式相同的邏輯）
            if (labelsToExport.length > 0 || defectMarksToExport.length > 0) {
                window.logger.log('Generating annotated PDF with labels and defect marks for ZIP export');
                
                try {
                    // 檢查pdf-lib是否可用
                    if (typeof PDFLib === 'undefined') {
                        window.logger.error('PDFLib library not loaded');
                        // 如果 PDFLib 不可用，使用原始 PDF
                        const binaryString = atob(pdfBase64);
                        const bytes = new Uint8Array(binaryString.length);
                        for (let i = 0; i < binaryString.length; i++) {
                            bytes[i] = binaryString.charCodeAt(i);
                        }
                        zip.file(`Floor_Plan_${pdfFilename}`, bytes);
                        window.logger.log('PDFLib not available, added original PDF to ZIP');
                        return;
                    }
                    
                    // 將base64轉換為ArrayBuffer
                    const binaryString = atob(pdfBase64);
                    const arrayBuffer = new ArrayBuffer(binaryString.length);
                    const uint8Array = new Uint8Array(arrayBuffer);
                    for (let i = 0; i < binaryString.length; i++) {
                        uint8Array[i] = binaryString.charCodeAt(i);
                    }
                    
                    // 使用pdf-lib加載PDF
                    const { PDFDocument, rgb } = PDFLib;
                    const pdfDoc = await PDFDocument.load(arrayBuffer);
                    const newPdfDoc = await PDFDocument.create();

                    // 獲取頁面
                    const pages = pdfDoc.getPages();
                    const [firstPage] = await newPdfDoc.copyPages(pdfDoc, [0]);
                    newPdfDoc.addPage(firstPage);

                    // 獲取頁面尺寸
                    const { width, height } = firstPage.getSize();
                    
                    // 獲取Canvas尺寸用於坐標轉換
                    const floorPlanCanvas = document.getElementById('floorPlanCanvas');
                    const canvasWidth = parseFloat(floorPlanCanvas.style.width) || floorPlanCanvas.width / (window.outputScale || 1);
                    const canvasHeight = parseFloat(floorPlanCanvas.style.height) || floorPlanCanvas.height / (window.outputScale || 1);

                    window.logger.log('PDF page size:', width, height);
                    window.logger.log('Canvas size:', canvasWidth, canvasHeight);

                    // 繪製標籤到PDF
                    if (labelsToExport.length > 0) {
                        window.logger.log('Drawing labels to PDF for ZIP export:', labelsToExport.length);
                        for (const label of labelsToExport) {
                            // 檢查是否有canvasPosition，如果沒有則使用舊座標系統
                            if (!label.canvasPosition && (label.x !== undefined || label.y !== undefined)) {
                                label.canvasPosition = { x: label.x || 0, y: label.y || 0 };
                            }
                            
                            if (label.canvasPosition) {
                                window.logger.log('Drawing label to PDF:', label.id, 'Canvas position:', label.canvasPosition);
                                await drawLabelOnPDF(firstPage, label, canvasWidth, canvasHeight, width, height);
                            } else {
                                window.logger.warn('Label missing canvasPosition:', label);
                            }
                        }
                    }

                    // 繪製缺陷標記到PDF
                    if (defectMarksToExport.length > 0) {
                        window.logger.log('Drawing defect marks to PDF for ZIP export:', defectMarksToExport.length);
                        defectMarksToExport.forEach(defectMark => {
                            // 檢查是否有canvasPosition，如果沒有則使用舊座標系統
                            if (!defectMark.canvasPosition && (defectMark.x !== undefined || defectMark.y !== undefined)) {
                                defectMark.canvasPosition = { x: defectMark.x || 0, y: defectMark.y || 0 };
                            }
                            
                            if (defectMark.canvasPosition) {
                                window.logger.log('Drawing defect mark to PDF:', defectMark.id, 'Canvas position:', defectMark.canvasPosition);
                                drawDefectMarkOnPDF(firstPage, defectMark, canvasWidth, canvasHeight, width, height);
                            } else {
                                window.logger.warn('Defect mark missing canvasPosition:', defectMark);
                            }
                        });
                    }

                    // 生成PDF bytes
                    window.logger.log('Generating annotated PDF bytes for ZIP...');
                    const pdfBytes = await newPdfDoc.save();
                    window.logger.log('Annotated PDF bytes generated, size:', pdfBytes.length);
                    
                    // 添加到ZIP
                    zip.file(`Floor_Plan_${pdfFilename}`, pdfBytes);
                    window.logger.log('Annotated floor plan PDF added to ZIP');
                    
                } catch (error) {
                    window.logger.error('Error generating annotated PDF for ZIP:', error);
                    // 如果生成帶註釋的 PDF 失敗，使用原始 PDF
                    const binaryString = atob(pdfBase64);
                    const bytes = new Uint8Array(binaryString.length);
                    for (let i = 0; i < binaryString.length; i++) {
                        bytes[i] = binaryString.charCodeAt(i);
                    }
                    zip.file(`Floor_Plan_${pdfFilename}`, bytes);
                    window.logger.log('Fallback: Original floor plan PDF added to ZIP');
                }
            } else {
                // 沒有標籤或缺陷標記，使用原始 PDF
                window.logger.log('No labels or defect marks, using original PDF');
                const binaryString = atob(pdfBase64);
                const bytes = new Uint8Array(binaryString.length);
                for (let i = 0; i < binaryString.length; i++) {
                    bytes[i] = binaryString.charCodeAt(i);
                }
                zip.file(`Floor_Plan_${pdfFilename}`, bytes);
                window.logger.log('Original floor plan PDF added to ZIP');
            }
        } else {
            window.logger.warn('No floor plan PDF data found for export');
        }
    } catch (error) {
        window.logger.error('Error exporting floor plan PDF:', error);
    }
}

// 導出照片到 ZIP - 與 pne.html 邏輯完全一致
async function exportPhotosToZipPneStyle(zip) {
    try {
        window.logger.log('Exporting photos - photoFolders:', photoFolders);
        window.logger.log('Exporting photos - allPhotos:', allPhotos.length, 'files');
        
    if (photoFolders.length > 0) {
        const photosFolder = zip.folder("Inspection_Photos");
        
        for (const folder of photoFolders) {
                window.logger.log('Processing folder:', folder.name, 'with', folder.photos.length, 'photos');
                const folderInZip = photosFolder.folder(folder.name);
                
                for (const filename of folder.photos) {
                    const photoData = allPhotos.find(f => f.name === filename);
                    window.logger.log('Looking for file:', filename, 'found:', !!photoData, 'size:', photoData?.size);
                    
                    if (photoData && photoData.blob) {
                        // 使用存儲的 Blob 對象（已經調整過大小）
                        folderInZip.file(photoData.name, photoData.blob);
                        window.logger.log('Added resized photo blob:', filename);
                    } else if (photoData && photoData.dataURL) {
                        // 使用 dataURL 創建 Blob
                        const blob = dataURLToBlob(photoData.dataURL);
                        folderInZip.file(photoData.name, blob);
                        window.logger.log('Added photo from dataURL:', filename);
                    } else {
                        // 如果沒有找到照片物件，創建佔位符圖片
                        window.logger.warn(`Photo file not found: ${filename}, creating placeholder image`);
                        
                        // 創建一個簡單的 1x1 像素透明 PNG 圖片
                        const placeholderImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==';
                        
                        // 將 base64 轉換為 Blob
                        const byteCharacters = atob(placeholderImage.split(',')[1]);
                        const byteNumbers = new Array(byteCharacters.length);
                        for (let i = 0; i < byteCharacters.length; i++) {
                            byteNumbers[i] = byteCharacters.charCodeAt(i);
                        }
                        const byteArray = new Uint8Array(byteNumbers);
                        const placeholderBlob = new Blob([byteArray], {type: 'image/png'});
                        
                        folderInZip.file(filename, placeholderBlob);
                    }
                }
            }
        } else {
            // 如果沒有 photoFolders，嘗試從 submittedData 重建
            if (submittedData.length > 0) {
                window.logger.log('No photoFolders found, rebuilding from submittedData...');
                const photosFolder = zip.folder("Inspection_Photos");
                
                submittedData.forEach(record => {
                    if (record.photoFilenames && record.photoFilenames.length > 0) {
                        const folderName = record.folderName || `${record.locationId}_folder`;
                        window.logger.log('Creating folder:', folderName, 'with', record.photoFilenames.length, 'photos');
                        const folderInZip = photosFolder.folder(folderName);
                        
                        record.photoFilenames.forEach(filename => {
                            const photoData = allPhotos.find(f => f.name === filename);
                            if (photoData && photoData.blob) {
                                folderInZip.file(photoData.name, photoData.blob);
                                window.logger.log('Added photo to folder:', folderName, filename);
                            } else if (photoData && photoData.dataURL) {
                                const blob = dataURLToBlob(photoData.dataURL);
                                folderInZip.file(photoData.name, blob);
                                window.logger.log('Added photo from dataURL to folder:', folderName, filename);
                            } else {
                                // 創建佔位符圖片
                                const placeholderImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==';
                                const byteCharacters = atob(placeholderImage.split(',')[1]);
                                const byteNumbers = new Array(byteCharacters.length);
                                for (let i = 0; i < byteCharacters.length; i++) {
                                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                                }
                                const byteArray = new Uint8Array(byteNumbers);
                                const placeholderBlob = new Blob([byteArray], {type: 'image/png'});
                                folderInZip.file(filename, placeholderBlob);
                                window.logger.log('Added placeholder to folder:', folderName, filename);
                            }
                        });
                    }
                });
            } else {
                window.logger.log('No photoFolders to export and no submittedData available');
            }
        }
        
        window.logger.log('Photos added to ZIP (pne.html style)');
    } catch (error) {
        window.logger.error('Error exporting photos (pne.html style):', error);
    }
}

// 導出照片到 ZIP
async function exportPhotosToZip(zip, sortToFolder) {
    try {
        // 確保照片數據可用
        let photosToExport = [];
        let foldersToExport = [];
        
        // 優先使用當前記憶體中的照片數據
        if (allPhotos && allPhotos.length > 0) {
            photosToExport = allPhotos;
            window.logger.log('Using photos from memory:', photosToExport.length);
        } else if (photoFolders && photoFolders.length > 0) {
            foldersToExport = photoFolders;
            window.logger.log('Using photo folders from memory:', foldersToExport.length);
        } else {
            // 嘗試從存儲中恢復照片數據
            try {
                const savedData = await window.storageAdapter.getItem('photoNumberExtractorData');
                if (savedData && savedData.photoMetadata && savedData.photoMetadata.length > 0) {
                    photosToExport = savedData.photoMetadata.map(meta => ({
                        name: meta.name,
                        size: meta.size || 0,
                        type: meta.type || 'image/jpeg',
                        lastModified: meta.lastModified || Date.now(),
                        webkitRelativePath: meta.webkitRelativePath || '',
                        dataURL: meta.dataURL || ''
                    }));
                    window.logger.log('Restored photos from storage:', photosToExport.length);
                }
                
                if (savedData && savedData.photoFolders && savedData.photoFolders.length > 0) {
                    foldersToExport = savedData.photoFolders;
                    window.logger.log('Restored photo folders from storage:', foldersToExport.length);
                }
            } catch (error) {
                window.logger.error('Error restoring photos from storage:', error);
            }
        }
        
        if (sortToFolder) {
            // 啟用照片排序到資料夾
            window.logger.log('Photo sorting to folders enabled');
            window.logger.log('Available folders:', foldersToExport.length);
            window.logger.log('Available photos:', photosToExport.length);
            window.logger.log('Assigned photos structure:', assignedPhotos);
            
            const photosFolder = zip.folder("Inspection_Photos");
            
            if (foldersToExport.length > 0) {
                // 使用現有的照片資料夾結構
                window.logger.log('Using existing photo folder structure:', foldersToExport.length);
                
                for (const folder of foldersToExport) {
            const folderZip = photosFolder.folder(folder.name);
            
            for (const photo of folder.photos) {
                try {
                            // 檢查是否在 file:// 協議下運行
                            if (window.location.protocol === 'file:' && photo.dataURL) {
                                // 在 file:// 協議下，直接從 dataURL 創建 blob
                                const blob = dataURLToBlob(photo.dataURL);
                                folderZip.file(photo.name, blob);
                            } else if (photo.url) {
                                // 在非 file:// 協議下，使用 fetch
                    const response = await fetch(photo.url);
                    const blob = await response.blob();
                    folderZip.file(photo.name, blob);
                            }
                } catch (error) {
                    window.logger.error(`Error adding photo ${photo.name}:`, error);
                }
            }
                }
            } else if (photosToExport.length > 0) {
                // 沒有現成的資料夾結構，但需要排序，嘗試從 assignedPhotos 創建資料夾
                window.logger.log('Creating folder structure from assigned photos');
                
                // 從 assignedPhotos 創建資料夾結構
                const folderStructure = {};
                
                // 遍歷所有照片，根據 assignedPhotos 分類
                for (const photo of photosToExport) {
                    let assignedToCategory = null;
                    
                    // 檢查照片被分配到哪個分類
                    for (const [category, filenames] of Object.entries(assignedPhotos || {})) {
                        // 處理 Set 對象或數組
                        const filenameArray = Array.isArray(filenames) ? filenames : Array.from(filenames || []);
                        if (filenameArray.includes(photo.name)) {
                            assignedToCategory = category;
                            break;
                        }
                    }
                    
                    if (assignedToCategory) {
                        if (!folderStructure[assignedToCategory]) {
                            folderStructure[assignedToCategory] = [];
                        }
                        folderStructure[assignedToCategory].push(photo);
                    } else {
                        // 未分配的照片放到 "Unassigned" 資料夾
                        if (!folderStructure['Unassigned']) {
                            folderStructure['Unassigned'] = [];
                        }
                        folderStructure['Unassigned'].push(photo);
                    }
                }
                
                // 創建資料夾並添加照片
                for (const [categoryName, photos] of Object.entries(folderStructure)) {
                    const folderZip = photosFolder.folder(categoryName);
                    
                    for (const photo of photos) {
                        try {
                            if (photo.dataURL) {
                                const blob = dataURLToBlob(photo.dataURL);
                                folderZip.file(photo.name, blob);
                            }
                        } catch (error) {
                            window.logger.error(`Error adding photo ${photo.name} to ${categoryName}:`, error);
                        }
                    }
                }
            } else {
                window.logger.warn('No photos available for folder sorting');
            }
        } else if (photosToExport.length > 0) {
            // 不排序，直接添加所有照片
            const photosFolder = zip.folder("Inspection_Photos");
            
            for (const photo of photosToExport) {
                try {
                    if (photo.dataURL) {
                        // 直接從 dataURL 創建 blob，避免使用 fetch
                        const blob = dataURLToBlob(photo.dataURL);
                        photosFolder.file(photo.name, blob);
                    }
    } catch (error) {
                    window.logger.error(`Error adding photo ${photo.name}:`, error);
                }
            }
        } else {
            window.logger.warn('No photos available for export');
        }
        
        window.logger.log('Photos added to ZIP');
    } catch (error) {
        window.logger.error('Error exporting photos:', error);
    }
}

// 將 dataURL 轉換為 Blob 的輔助函數
function dataURLToBlob(dataURL) {
    try {
        // 解析 dataURL
        const arr = dataURL.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        
        return new Blob([u8arr], { type: mime });
    } catch (error) {
        window.logger.error('Error converting dataURL to blob:', error);
        throw error;
    }
}

// Save as PNE file
const saveAsPNEBtn = document.querySelector('.pne-dropdown-item[data-action="saveas"]');
saveAsPNEBtn.addEventListener('click', function() {
    // 關閉下拉選單
    const pneDropdown = document.querySelector('.pne-dropdown');
    if (pneDropdown) {
        pneDropdown.style.display = 'none';
    }
    try {
        // 收集 localStorage 內容（避免 {...localStorage} 在部分瀏覽器取不到資料）
        const localStorageData = {};
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            localStorageData[key] = localStorage.getItem(key);
        }

        // 安全取得樓層平面標籤/缺陷標記（避免未宣告變數 ReferenceError）
        const floorPlanLabels = (typeof labels !== 'undefined' && Array.isArray(labels))
            ? labels
            : (typeof window !== 'undefined' && Array.isArray(window.labels) ? window.labels : []);
        const floorPlanDefectMarks = (typeof defectMarks !== 'undefined' && Array.isArray(defectMarks))
            ? defectMarks
            : (typeof window !== 'undefined' && Array.isArray(window.defectMarks) ? window.defectMarks : []);

        // 收集 header 欄位
        const headerFields = {
            inspectionNo: (document.getElementById('locationId') || {}).value || '',
            inspectionDate: (document.getElementById('inspectionDate') || {}).value || '',
            floor: (document.getElementById('floorHeader') || {}).value || '',
            areaName: (document.getElementById('areaNameHeader') || {}).value || '',
            roomNo: (document.getElementById('roomNo') || {}).value || '',
                sortEnabled: !!(document.getElementById('sortPhotosToFolder') && document.getElementById('sortPhotosToFolder').checked)
        };

        // 收集所有資料，包括照片分配資料
        const data = {
            // 版本與時間
            version: '7.1.0',
            exportDate: new Date().toISOString(),

            // Header/UI 狀態
            headerFields: headerFields,

            // 檔案路徑資訊
            filePaths: {
                // PDF 檔案路徑（樓層平面圖）- 只保存文件引用
                pdfPath: localStorage.getItem('pne_floorplan_filename') || '',
                pdfData: localStorage.getItem('pne_floorplan_data') || '',
                // 移除PDF base64數據，只保存文件引用
                pdfFileReference: (() => {
                    try {
                        const floorPlanData = JSON.parse(localStorage.getItem('pne_floorplan_data') || '{}');
                        return floorPlanData.fileReference || null;
                    } catch (e) {
                        return null;
                    }
                })(),
                
                // 照片資料夾路徑
                photoFolderPath: folderNameDisplay.textContent || '',
                photoFolderName: folderNameDisplay.textContent.split('/').pop() || '',
                
                // 照片檔案路徑列表
                photoFilePaths: allPhotos.map(file => ({
                    name: file.name,
                    webkitRelativePath: file.webkitRelativePath || '',
                    fullPath: file.webkitRelativePath ? `${folderNameDisplay.textContent}/${file.webkitRelativePath}` : file.name
                }))
            },

            // 新增：文件引用系統（基於 JSON 結構示例）
            files: (() => {
                const files = [];
                
                // 添加 PDF 文件引用
                const pdfFilename = localStorage.getItem('pne_floorplan_filename');
                const pdfData = localStorage.getItem('pne_floorplan_data');
                if (pdfFilename && pdfData) {
                    try {
                        const floorPlanData = JSON.parse(pdfData);
                        files.push({
                            id: 'pdf_floorplan',
                            name: pdfFilename,
                            path: pdfFilename, // 相對路徑
                            type: 'pdf',
                            description: '樓層平面圖 PDF 文件',
                            uploadDate: floorPlanData.uploadDate || new Date().toISOString(),
                            size: `${(floorPlanData.fileSize / 1024 / 1024).toFixed(2)} MB`,
                            fileReference: floorPlanData.fileReference,
                            hasBase64Data: floorPlanData.hasBase64Data || false
                        });
                    } catch (e) {
                        window.logger.error('Error parsing PDF data:', e);
                    }
                }
                
                // 添加照片文件引用
                allPhotos.forEach((photo, index) => {
                    files.push({
                        id: `photo_${index}`,
                        name: photo.name,
                        path: photo.webkitRelativePath || photo.name,
                        type: 'image',
                        description: `檢查照片 - ${photo.name}`,
                        uploadDate: new Date(photo.lastModified).toISOString(),
                        size: `${(photo.size / 1024 / 1024).toFixed(2)} MB`,
                        dataURL: photo.dataURL || '',
                        webkitRelativePath: photo.webkitRelativePath || ''
                    });
                });
                
                return files;
            })(),

            // 照片基本與指派統計
            totalPhotos: allPhotos.length,
            totalAssignments: Object.values(assignedPhotos).reduce((sum, photos) => sum + photos.size, 0),
            photoMetadata: allPhotos.map(file => {
                // 如果沒有 dataURL，嘗試從 DOM 中獲取
                let dataURL = file.dataURL || '';
                if (!dataURL) {
                    // 使用正確的 selector: data-filename 而不是 data-photo-name
                    const photoItem = document.querySelector(`[data-filename="${file.name}"]`);
                    if (photoItem) {
                        const img = photoItem.querySelector('img');
                        if (img && img.src && img.src.startsWith('data:')) {
                            dataURL = img.src;
                        }
                    }
                }
                
                return {
                name: file.name,
                size: file.size,
                type: file.type,
                    lastModified: file.lastModified || Date.now(),
                    webkitRelativePath: file.webkitRelativePath || '',
                    dataURL: dataURL // 保存照片的 dataURL 以便恢復
                };
            }),

            // 主資料表
            inspectionRecords: submittedData,
            submittedDefectEntries: submittedDefectEntries,
            rowIdCounter: rowIdCounter,
            categories: categories,
            defectTypes: defectTypes,

            // 照片分配資料
            photoAssignments: {
                categoryNumbers: categoryNumbers,
                assignedPhotos: Object.fromEntries(
                    Object.entries(assignedPhotos).map(([key, value]) => [key, Array.from(value)])
                ),
                defectEntries: defectEntries
            },

            // App 狀態
            uploadedFolderPath: folderNameDisplay.textContent,
            submittedFilenames: Array.from(submittedFilenames),
            photoFolders: photoFolders,
            localStorage: localStorageData,

            // 樓層平面圖
            floorPlanLabels: floorPlanLabels,
            floorPlanDefectMarks: floorPlanDefectMarks,
            
            // 嵌入 PDF 檔案數據
            embeddedPDF: (() => {
                const pdfBase64 = localStorage.getItem('pne_floorplan_base64');
                const pdfData = localStorage.getItem('pne_floorplan_data');
                const pdfFilename = localStorage.getItem('pne_floorplan_filename');
                
                if (pdfBase64 && pdfData && pdfFilename) {
                    try {
                        const floorPlanData = JSON.parse(pdfData);
                        window.logger.log('Embedding PDF in PNE file:', pdfFilename, 'Size:', pdfBase64.length, 'characters');
                        return {
                            filename: pdfFilename,
                            base64Data: pdfBase64,
                            metadata: floorPlanData,
                            hasEmbeddedPDF: true,
                            size: pdfBase64.length
                        };
                    } catch (e) {
                        window.logger.error('Error parsing PDF data for embedding:', e);
                        return null;
                    }
                } else {
                    window.logger.log('No PDF data found for embedding in PNE file');
                    return null;
                }
            })(),
            
            // 樓層平面圖視圖狀態
            floorPlanViewState: {
                scale: window.currentScale || 1.0,
                translateX: window.translateX || 0,
                translateY: window.translateY || 0,
                baseScale: (typeof baseScale !== 'undefined' ? baseScale : (window.baseScale || 1.0)),
                labelSizeScale: (window.labelSizeScale || 24),
                defectMarkSizeScale: (window.defectMarkSizeScale || 24)
            },
            
            // 照片提交狀態
            photoSubmissionStatus: {
                submittedPhotos: Array.from(submittedFilenames),
                photoAssignments: Object.fromEntries(
                    Object.entries(assignedPhotos).map(([key, value]) => [key, Array.from(value)])
                )
            }
        };

        // 下載JSON，預設檔名：PNE_資料夾名稱_日期.pne
        const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        const dateStr = new Date().toISOString().slice(0,10);
        let folderName = folderNameDisplay.textContent.trim() || 'unknown';
        folderName = folderName.replace(/[^a-zA-Z0-9_-]/g, '_');
        let defaultName = `PNE_${folderName}_${dateStr}`;

        // 直接使用默認檔名（避免在 Google Sites 中因 prompt 被禁用而無法工作）
        let inputName = defaultName;
        // 清理不合法字元
        inputName = inputName.replace(/[\\/:*?"<>|]/g, '_');
        // 若未包含 .pne 副檔名則自動補上
        if (!inputName.toLowerCase().endsWith('.pne')) {
            inputName += '.pne';
        }

        a.download = inputName;
        a.href = url;
        a.style.display = 'none';
        document.body.appendChild(a);
        
        try {
            // 嘗試觸發下載
            a.click();
            showNotification('PNE 檔案已匯出，包含完整資料！', 'success');
        } catch (downloadError) {
            window.logger.error('Download failed:', downloadError);
            // 如果下載失敗，嘗試在新窗口中打開
            try {
                window.open(url, '_blank');
                showNotification('PNE 檔案已在新窗口中打開，請手動保存！', 'info');
            } catch (openError) {
                window.logger.error('Open in new window failed:', openError);
                // 最後的備用方案：複製到剪貼板
                try {
                    navigator.clipboard.writeText(JSON.stringify(data, null, 2)).then(() => {
                        showNotification('PNE 資料已複製到剪貼板，請貼到文字編輯器中保存！', 'info');
                    }).catch(() => {
                        showNotification('無法下載檔案，請檢查瀏覽器設定或嘗試在其他瀏覽器中打開！', 'error');
                    });
                } catch (clipboardError) {
                    showNotification('無法下載檔案，請檢查瀏覽器設定或嘗試在其他瀏覽器中打開！', 'error');
                }
            }
        } finally {
            // 清理資源
            setTimeout(() => {
                if (document.body.contains(a)) {
                    document.body.removeChild(a);
                }
                URL.revokeObjectURL(url);
            }, 1000);
        }
    } catch (err) {
        showNotification('匯出 PNE 檔案失敗: ' + err.message, 'error');
    }
});
// 清理PDF數據存儲的函數（已更新：系統不再保存PDF base64數據）
function clearPDFDataFromStorage() {
    try {
        // 系統現在只保存文件引用，不保存PDF base64數據
        // 此函數保留用於向後兼容，但實際上不再需要清理base64數據
        window.logger.log('PDF storage system now only saves file references, no base64 data to clear');
    } catch (error) {
        window.logger.error('Error in PDF storage cleanup:', error);
    }
}

// 驗證PDF文件引用並提供重新載入功能
function validatePDFFileReference() {
    try {
        const floorPlanData = JSON.parse(localStorage.getItem('pne_floorplan_data') || '{}');
        const filename = localStorage.getItem('pne_floorplan_filename');
        
        if (floorPlanData.fileReference && filename) {
            window.logger.log('PDF file reference found:', floorPlanData.fileReference);
            window.logger.log('PDF filename:', filename);
            
            // 顯示提示信息，告知用戶需要重新上傳PDF
            if (typeof showNotification === 'function') {
                showNotification(`檢測到PDF文件引用：${filename}。請重新上傳PDF文件以查看樓層平面圖。`, 'info');
            }
            
            return {
                hasReference: true,
                filename: filename,
                fileReference: floorPlanData.fileReference
            };
        }
        
        return { hasReference: false };
    } catch (error) {
        window.logger.error('Error validating PDF file reference:', error);
        return { hasReference: false };
    }
}

// PDF生成功能 - 將標籤和缺陷標記繪製到PDF上
async function generateAnnotatedPDF() {
    try {
        // 檢查是否有PDF文件
        const floorPlanData = JSON.parse(localStorage.getItem('pne_floorplan_data') || '{}');
        if (!floorPlanData.fileReference) {
            showNotification('請先上傳PDF文件', 'error');
            return;
        }

        // 初始化標籤和缺陷標記數組（如果不存在）
        if (!window.labels) {
            window.labels = [];
        }
        if (!window.defectMarks) {
            window.defectMarks = [];
        }
        
        // 檢查是否有標籤或缺陷標記
        if (window.labels.length === 0 && window.defectMarks.length === 0) {
            showNotification('沒有標籤或缺陷標記需要繪製', 'warning');
            return;
        }
        
        window.logger.log('PDF Export - Labels count:', window.labels.length);
        window.logger.log('PDF Export - Defect marks count:', window.defectMarks.length);

        showNotification('正在生成帶標註的PDF文件...', 'info');

        // 獲取原始PDF文件（需要用戶重新選擇）
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'application/pdf';
        fileInput.style.display = 'none';
        document.body.appendChild(fileInput);

        fileInput.click();

        fileInput.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (!file) {
                document.body.removeChild(fileInput);
                return;
            }

            try {
                // 讀取PDF文件
                const arrayBuffer = await file.arrayBuffer();
                
                // 使用pdf-lib加載PDF
                const { PDFDocument, rgb } = PDFLib;
                const pdfDoc = await PDFDocument.load(arrayBuffer);
                const newPdfDoc = await PDFDocument.create();

                // 獲取頁面
                const pages = pdfDoc.getPages();
                const [firstPage] = await newPdfDoc.copyPages(pdfDoc, [0]);
                newPdfDoc.addPage(firstPage);

                // 獲取頁面尺寸
                const { width, height } = firstPage.getSize();
                window.logger.log('PDF page size:', width, height);

                // 獲取Canvas尺寸（用於坐標轉換）
                const floorPlanCanvas = document.getElementById('floorPlanCanvas');
                
                // 使用 CSS 尺寸，因為 canvasPosition 是基於 CSS 尺寸計算的
                const canvasWidth = parseFloat(floorPlanCanvas.style.width) || floorPlanCanvas.width / (window.outputScale || 1);
                const canvasHeight = parseFloat(floorPlanCanvas.style.height) || floorPlanCanvas.height / (window.outputScale || 1);
                
                window.logger.log('Canvas CSS size:', canvasWidth, canvasHeight);
                window.logger.log('Canvas actual size:', floorPlanCanvas.width, floorPlanCanvas.height);
                // 提高 PDF 導出的解析度
                const exportScale = Math.max(2, Math.min(4, (window.devicePixelRatio || 1) * 1.5));
                window.logger.log('Output scale:', exportScale);

                // 初始化標籤和缺陷標記數組（如果不存在）
                if (!window.labels) {
                    window.labels = [];
                }
                if (!window.defectMarks) {
                    window.defectMarks = [];
                }
                
                window.logger.log('PDF Export - Labels count:', window.labels.length);
                window.logger.log('PDF Export - Defect marks count:', window.defectMarks.length);

                // 繪製標籤
                if (window.labels.length > 0) {
                    window.logger.log('Drawing labels:', window.labels.length);
                    for (const label of window.labels) {
                        // 檢查是否有canvasPosition，如果沒有則使用舊座標系統
                        if (!label.canvasPosition && (label.x !== undefined || label.y !== undefined)) {
                            label.canvasPosition = { x: label.x || 0, y: label.y || 0 };
                        }
                        
                        if (label.canvasPosition) {
                            window.logger.log('Drawing label:', label.id, 'Canvas position:', label.canvasPosition);
                            await drawLabelOnPDF(firstPage, label, canvasWidth, canvasHeight, width, height);
                        } else {
                            window.logger.warn('Label missing canvasPosition:', label);
                        }
                    }
                }

                // 繪製缺陷標記
                if (window.defectMarks.length > 0) {
                    window.logger.log('Drawing defect marks:', window.defectMarks.length);
                    window.defectMarks.forEach(defectMark => {
                        // 檢查是否有canvasPosition，如果沒有則使用舊座標系統
                        if (!defectMark.canvasPosition && (defectMark.x !== undefined || defectMark.y !== undefined)) {
                            defectMark.canvasPosition = { x: defectMark.x || 0, y: defectMark.y || 0 };
                        }
                        
                        if (defectMark.canvasPosition) {
                            window.logger.log('Drawing defect mark:', defectMark.id, 'Canvas position:', defectMark.canvasPosition);
                            drawDefectMarkOnPDF(firstPage, defectMark, canvasWidth, canvasHeight, width, height);
                        } else {
                            window.logger.warn('Defect mark missing canvasPosition:', defectMark);
                        }
                    });
                }

                // 生成並下載PDF
                const pdfBytes = await newPdfDoc.save();
                const blob = new Blob([pdfBytes], { type: 'application/pdf' });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = `annotated-${floorPlanData.filename || 'floorplan'}.pdf`;
                link.click();
                URL.revokeObjectURL(link.href);

                showNotification('帶標註的PDF文件已生成並下載', 'success');

            } catch (error) {
                window.logger.error('Error generating PDF:', error);
                showNotification('生成PDF時發生錯誤: ' + error.message, 'error');
            } finally {
                document.body.removeChild(fileInput);
            }
        });

    } catch (error) {
        window.logger.error('Error in generateAnnotatedPDF:', error);
        showNotification('生成PDF時發生錯誤: ' + error.message, 'error');
    }
}

// 在PDF上繪製標籤
async function drawLabelOnPDF(page, label, canvasWidth, canvasHeight, pdfWidth, pdfHeight) {
    try {
        const { rgb } = PDFLib;
        
        // 載入粗體字體 - 匹配原始標籤的粗體樣式
        const boldFont = await page.doc.embedFont('Helvetica-Bold');
        
        // 使用 canvasPosition 座標進行轉換，如果沒有則使用原始座標
        const labelX = label.canvasPosition ? label.canvasPosition.x : label.x;
        const labelY = label.canvasPosition ? label.canvasPosition.y : label.y;
        
        // 坐標轉換：Canvas坐標轉換為PDF坐標
        // 使用與缺陷標記相同的轉換邏輯（直接轉換，不進行範圍限制）
        const pdfX = (labelX / canvasWidth) * pdfWidth;
        const pdfY = pdfHeight - ((labelY / canvasHeight) * pdfHeight); // PDF坐標系Y軸向上
        
        window.logger.log('Label coordinate conversion:', {
            labelId: label.id,
            canvasCoord: { x: labelX, y: labelY },
            canvasSize: { width: canvasWidth, height: canvasHeight },
            pdfSize: { width: pdfWidth, height: pdfHeight },
            pdfCoord: { x: pdfX, y: pdfY },
            isValidPosition: pdfX >= 0 && pdfX <= pdfWidth && pdfY >= 0 && pdfY <= pdfHeight
        });

        // 繪製標籤文字 - 匹配 floor-plan-content 樣式
        const labelText = label.inspectionNo || '';
        
        // 使用與樓層平面圖相同的字體大小計算
        const baseFontSize = label.baseFontSize || window.labelSizeScale || 24;
        // PDF 中的字體大小需要根據 PDF 尺寸進行縮放
        const fontSize = Math.max(8, Math.min(20, baseFontSize * (pdfWidth / canvasWidth) * 0.8));
        
        // 檢查標籤文字和座標有效性
        if (!labelText || labelText.trim() === '') {
            window.logger.warn('Label has no text, skipping:', label.id);
            return;
        }
        
        if (pdfX < 0 || pdfX > pdfWidth || pdfY < 0 || pdfY > pdfHeight) {
            window.logger.warn('Label position is outside PDF bounds, skipping:', {
                labelId: label.id,
                pdfCoord: { x: pdfX, y: pdfY },
                pdfSize: { width: pdfWidth, height: pdfHeight }
            });
            return;
        }
        
        // 根據標籤狀態選擇顏色 - 匹配 floor-plan-content 樣式
        let labelColor;
        
        // 調試日誌：記錄標籤狀態
        window.logger.log('Label state for PDF:', {
            labelId: label.id,
            inspectionNo: label.inspectionNo,
            submitted: label.submitted,
            assignedToRecord: label.assignedToRecord
        });
        
        if (label.submitted) {
            // 已提交的標籤樣式（亮藍色）
            labelColor = rgb(0, 0.663, 1); // #00A9FF (亮藍色 - 已提交)
            window.logger.log('Using submitted label color: #00A9FF (bright blue)');
        } else {
            // 未分配或已分配的標籤樣式（黃色）
            labelColor = rgb(1, 0.745, 0); // #FFBE00 (黃色 - 未分配/已分配)
            window.logger.log('Using label color: #FFBE00 (yellow - unassigned/assigned)');
        }
        
        // 計算標籤的實際尺寸（考慮 padding）
        const textWidth = labelText.length * fontSize * 0.6; // 估算文字寬度
        const textHeight = fontSize;
        const paddingX = fontSize * 0.5; // 水平 padding
        const paddingY = fontSize * 0.3; // 垂直 padding
        
        // 計算標籤的左上角位置（考慮 padding）
        const labelLeft = pdfX - (textWidth / 2) - paddingX;
        const labelTop = pdfY - (textHeight / 2) - paddingY;
        
        page.drawText(labelText, {
            x: labelLeft + paddingX,  // 文字位置 = 標籤左邊 + padding
            y: pdfY - fontSize/2 + fontSize * 0.1, // 微調：稍微向上調整
            size: fontSize,
            color: labelColor,
            font: boldFont, // 使用粗體字體匹配原始樣式
        });
        
        window.logger.log('Successfully drew label on PDF:', {
            labelId: label.id,
            text: labelText,
            canvasPosition: { x: labelX, y: labelY },
            pdfPosition: { x: pdfX, y: pdfY },
            drawPosition: { x: labelLeft + paddingX, y: labelTop + paddingY + textHeight },
            fontSize: fontSize,
            baseFontSize: baseFontSize,
            color: labelColor,
            dimensions: { textWidth, textHeight, paddingX, paddingY },
            canvasSize: { width: canvasWidth, height: canvasHeight },
            pdfSize: { width: pdfWidth, height: pdfHeight }
        });

    } catch (error) {
        window.logger.error('Error drawing label on PDF:', error);
        window.logger.error('Label data:', label);
        window.logger.error('Canvas dimensions:', { canvasWidth, canvasHeight });
        window.logger.error('PDF dimensions:', { pdfWidth, pdfHeight });
    }
}

// 診斷函數 - 檢查標籤數據和座標
function diagnoseLabelData() {
    window.logger.log('=== LABEL DATA DIAGNOSIS ===');
    window.logger.log('Labels count:', window.labels ? window.labels.length : 'undefined');
    window.logger.log('Label size scale:', window.labelSizeScale);
    window.logger.log('Current scale:', window.currentScale);
    window.logger.log('Translate:', { x: window.translateX, y: window.translateY });
    
    if (window.labels && window.labels.length > 0) {
        window.labels.forEach((label, index) => {
            window.logger.log(`Label ${index + 1}:`, {
                id: label.id,
                inspectionNo: label.inspectionNo,
                canvasPosition: label.canvasPosition,
                x: label.x,
                y: label.y,
                baseFontSize: label.baseFontSize,
                submitted: label.submitted
            });
        });
    }
    
    const floorPlanCanvas = document.getElementById('floorPlanCanvas');
    if (floorPlanCanvas) {
        window.logger.log('Canvas element:', {
            width: floorPlanCanvas.width,
            height: floorPlanCanvas.height,
            styleWidth: floorPlanCanvas.style.width,
            styleHeight: floorPlanCanvas.style.height
        });
    }
}

// 測試座標轉換函數
function testCoordinateConversion() {
    window.logger.log('=== COORDINATE CONVERSION TEST ===');
    
    const floorPlanCanvas = document.getElementById('floorPlanCanvas');
    if (!floorPlanCanvas) {
        window.logger.error('Floor plan canvas not found');
        return;
    }
    
    // 使用與 PDF 匯出相同的尺寸計算
    const canvasWidth = parseFloat(floorPlanCanvas.style.width) || floorPlanCanvas.width / (window.outputScale || 1);
    const canvasHeight = parseFloat(floorPlanCanvas.style.height) || floorPlanCanvas.height / (window.outputScale || 1);
    
    window.logger.log('Canvas dimensions:', { 
        cssWidth: parseFloat(floorPlanCanvas.style.width),
        cssHeight: parseFloat(floorPlanCanvas.style.height),
        actualWidth: floorPlanCanvas.width,
        actualHeight: floorPlanCanvas.height,
        outputScale: window.outputScale,
        calculatedWidth: canvasWidth,
        calculatedHeight: canvasHeight
    });
    
    if (window.labels && window.labels.length > 0) {
        window.labels.forEach((label, index) => {
            const labelX = label.canvasPosition ? label.canvasPosition.x : label.x;
            const labelY = label.canvasPosition ? label.canvasPosition.y : label.y;
            
            // 模擬 PDF 座標轉換
            const pdfWidth = 595; // A4 寬度
            const pdfHeight = 842; // A4 高度
            
            const pdfX = (labelX / canvasWidth) * pdfWidth;
            const pdfY = pdfHeight - ((labelY / canvasHeight) * pdfHeight);
            
            window.logger.log(`Label ${index + 1} coordinate test:`, {
                canvasPosition: { x: labelX, y: labelY },
                pdfPosition: { x: pdfX, y: pdfY },
                ratio: { x: labelX / canvasWidth, y: labelY / canvasHeight },
                canvasSize: { width: canvasWidth, height: canvasHeight },
                pdfSize: { width: pdfWidth, height: pdfHeight }
            });
        });
    }
}

// 在PDF上繪製缺陷標記
function drawDefectMarkOnPDF(page, defectMark, canvasWidth, canvasHeight, pdfWidth, pdfHeight) {
    try {
        const { rgb } = PDFLib;
        
        // 使用 canvasPosition 座標進行轉換，如果沒有則使用原始座標
        const markX = defectMark.canvasPosition ? defectMark.canvasPosition.x : defectMark.x;
        const markY = defectMark.canvasPosition ? defectMark.canvasPosition.y : defectMark.y;
        
        // 坐標轉換：Canvas坐標轉換為PDF坐標
        const pdfX = (markX / canvasWidth) * pdfWidth;
        const pdfY = pdfHeight - ((markY / canvasHeight) * pdfHeight);
        
        window.logger.log('Defect mark coordinate conversion:', {
            markId: defectMark.id,
            defectNo: defectMark.defectNo,
            photoNo: defectMark.photoNo,
            canvasCoord: { x: markX, y: markY },
            canvasSize: { width: canvasWidth, height: canvasHeight },
            pdfSize: { width: pdfWidth, height: pdfHeight },
            pdfCoord: { x: pdfX, y: pdfY },
            connectionPosition: defectMark.connectionPosition,
            textboxOffset: { 
                x: defectMark.textboxOffsetX, 
                y: defectMark.textboxOffsetY 
            },
            fullDefectMark: defectMark
        });

        // 計算文字框位置 - 使用 connectionPosition 或預設偏移
        let textboxX, textboxY;
        if (defectMark.connectionPosition) {
            // 使用實際的連接位置
            const connX = defectMark.connectionPosition.x;
            const connY = defectMark.connectionPosition.y;
            textboxX = (connX / canvasWidth) * pdfWidth;
            textboxY = pdfHeight - ((connY / canvasHeight) * pdfHeight);
        } else {
            // 使用預設偏移量
            const offsetX = defectMark.textboxOffsetX || 80;
            const offsetY = defectMark.textboxOffsetY || 40;
            textboxX = pdfX + (offsetX / canvasWidth) * pdfWidth;
            textboxY = pdfY - (offsetY / canvasHeight) * pdfHeight;
        }

        // 1. 先繪製連接線（在最後面的圖層）
        page.drawLine({
            start: { x: pdfX, y: pdfY },
            end: { x: textboxX, y: textboxY },
            thickness: 1, // 匹配 floor-plan-content 中的 1px
            color: rgb(0.863, 0.208, 0.271), // #dc3545 (紅色)
        });

        // 2. 繪製圓角文字框 - 使用 photoNo 而不是 photoNumbers
        const photoNo = defectMark.photoNo || defectMark.photoNumbers || '';
        const textContent = photoNo ? `Photo no.: ${photoNo}` : `Defect ${defectMark.defectNo || defectMark.id || ''}`;
        const textSize = 10;
        const textWidth = Math.max(textContent.length * 6, 120); // 更精確的寬度計算
        const textHeight = 20; // 標準高度
        const borderRadius = 4; // 圓角半徑

        // 繪製圓角矩形背景 - 使用更精確的圓角實現
        const rectX = textboxX - textWidth/2;
        const rectY = textboxY - textHeight/2;

        // 主矩形（中間部分）
        page.drawRectangle({
            x: rectX + borderRadius,
            y: rectY,
            width: textWidth - 2 * borderRadius,
            height: textHeight,
            color: rgb(1, 1, 1), // 白色背景
        });
        
        // 左側矩形
        page.drawRectangle({
            x: rectX,
            y: rectY + borderRadius,
            width: borderRadius,
            height: textHeight - 2 * borderRadius,
            color: rgb(1, 1, 1),
        });
        
        // 右側矩形
        page.drawRectangle({
            x: rectX + textWidth - borderRadius,
            y: rectY + borderRadius,
            width: borderRadius,
            height: textHeight - 2 * borderRadius,
            color: rgb(1, 1, 1),
        });

        // 繪製四個圓角
        const corners = [
            { x: rectX + borderRadius, y: rectY + textHeight - borderRadius }, // 左上
            { x: rectX + textWidth - borderRadius, y: rectY + textHeight - borderRadius }, // 右上
            { x: rectX + borderRadius, y: rectY + borderRadius }, // 左下
            { x: rectX + textWidth - borderRadius, y: rectY + borderRadius }  // 右下
        ];
        
        corners.forEach(corner => {
            page.drawCircle({
                x: corner.x,
                y: corner.y,
                size: borderRadius,
                color: rgb(1, 1, 1),
            });
        });

        // 繪製紅色邊框
        page.drawRectangle({
            x: rectX,
            y: rectY,
            width: textWidth,
            height: textHeight,
            color: rgb(1, 1, 1, 0), // 透明填充
            borderColor: rgb(0.863, 0.208, 0.271), // #dc3545 (紅色邊框)
            borderWidth: 1,
        });

        // 繪製完美居中的文字
        const textX = textboxX - (textContent.length * textSize * 0.25); // 精確的居中計算
        const textY = textboxY - textSize/2; // 垂直居中
        
        page.drawText(textContent, {
            x: textX,
            y: textY,
            size: textSize,
            color: rgb(0.863, 0.208, 0.271), // #dc3545 (紅色文字)
        });

        // 3. 最後繪製紅色圓點（在最前面的圖層）
        const dotRadius = 12; // 24px diameter / 2 = 12px radius
        page.drawCircle({
            x: pdfX,
            y: pdfY,
            size: dotRadius,
            color: rgb(0.863, 0.208, 0.271), // #dc3545 (紅色)
        });

        // 在紅點中繪製缺陷編號 - 完美居中
        const defectNo = defectMark.defectNo || defectMark.id || '';
        if (defectNo) {
            const defectNoStr = defectNo.toString();
            const defectNoSize = 10;
            
            // 更精確的居中計算 - 考慮字符寬度差異和 PDF.js 渲染特性
            // 數字字符通常比字母窄，使用更精確的寬度估算
            let totalTextWidth = 0;
            for (let i = 0; i < defectNoStr.length; i++) {
                const char = defectNoStr[i];
                // 數字字符通常較窄，約為字體大小的 50-55%
                if (/\d/.test(char)) {
                    totalTextWidth += defectNoSize * 0.52; // 更精確的數字字符寬度
                } else {
                    // 其他字符使用標準寬度
                    totalTextWidth += defectNoSize * 0.58;
                }
            }
            
            // 水平居中：圓心 - 文字寬度的一半
            const textX = pdfX - (totalTextWidth / 2);
            
            // 垂直居中：考慮 PDF.js 的文字基線和行高
            // PDF.js 中文字基線在底部，需要考慮上升部分（ascender）
            // 對於數字，上升部分約為字體大小的 70-80%
            const ascenderHeight = defectNoSize * 0.75;
            const textY = pdfY - (ascenderHeight / 2);
            
            window.logger.log('Defect number centering (improved):', {
                defectNo: defectNoStr,
                dotCenter: { x: pdfX, y: pdfY },
                textPosition: { x: textX, y: textY },
                textWidth: totalTextWidth,
                fontSize: defectNoSize,
                dotRadius: dotRadius
            });
            
            page.drawText(defectNoStr, {
                x: textX,
                y: textY,
                size: defectNoSize,
                color: rgb(1, 1, 1), // 白色文字
            });
        }


    } catch (error) {
        window.logger.error('Error drawing defect mark on PDF:', error);
    }
}


// 自動載入 PDF 檔案函數（已棄用，僅保留文件引用）
async function autoLoadPDFFromBase64(pdfBase64, pdfPath) {
    return new Promise(async (resolve, reject) => {
        try {
            window.logger.log('PDF file reference found:', pdfPath);
            window.logger.log('PDF files are no longer stored in localStorage. Please re-upload the PDF file to view the floor plan.');
            
            // 顯示提示信息，告知用戶需要重新上傳PDF
            showNotification(`檢測到PDF文件引用：${pdfPath}。請重新上傳PDF文件以查看樓層平面圖。`, 'info');
            
            
            resolve();
        } catch (error) {
            window.logger.error('Error processing PDF file reference:', error);
            reject(error);
        }
    });
}

async function loadPDFFromArrayBuffer(arrayBuffer, pdfPath) {
    const floorPlanOverlay = document.getElementById('floorPlanOverlay');
    const floorPlanCanvas = document.getElementById('floorPlanCanvas');
    const floorPlanViewer = document.getElementById('floorPlanViewer');
    const floorPlanUploadArea = document.getElementById('floorPlanUploadArea');
    const labelLayer = document.getElementById('labelLayer');
    
    // 創建兩個 ArrayBuffer 副本，避免因 PDF.js 轉移導致的分離問題
    const arrayBufferForPdf = arrayBuffer.slice();
    const arrayBufferForBase64 = arrayBuffer.slice();
    
    // 載入PDF.js
    if (typeof pdfjsLib === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
        document.head.appendChild(script);
        await new Promise(resolve => {
            const checkPdfjs = setInterval(() => {
                if (window.pdfjsLib) {
                    clearInterval(checkPdfjs);
                    // 配置 PDF.js worker
                    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
                    resolve();
                }
            }, 100);
        });
    }
    
    const pdf = await pdfjsLib.getDocument({
        data: arrayBufferForPdf,
        cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/cmaps/',
        cMapPacked: true
    }).promise;
    
    // 獲取第一頁
    const page = await pdf.getPage(1);
    
    // 設置canvas尺寸
    baseScale = 1.0;
    const viewport = page.getViewport({ scale: baseScale });
    // 提高輸出解析度，支持高解析度顯示器
    const outputScale = Math.max(2, Math.min(4, (window.devicePixelRatio || 1) * 1.5));
    const cssWidth = Math.floor(viewport.width);
    const cssHeight = Math.floor(viewport.height);
    floorPlanCanvas.style.width = cssWidth + 'px';
    floorPlanCanvas.style.height = cssHeight + 'px';
    floorPlanCanvas.width = Math.floor(viewport.width * outputScale);
    floorPlanCanvas.height = Math.floor(viewport.height * outputScale);
    
    // 設置標籤層尺寸
    if (labelLayer) {
        labelLayer.style.width = cssWidth + 'px';
        labelLayer.style.height = cssHeight + 'px';
    }
    
    // 渲染PDF到canvas
    const context = floorPlanCanvas.getContext('2d');
    
    // 優化高解析度渲染
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = 'high';
    
    const renderContext = {
        canvasContext: context,
        viewport: viewport,
        transform: outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null
    };
    
    await page.render(renderContext).promise;
    
    // 顯示viewer
    floorPlanUploadArea.style.display = 'none';
    floorPlanViewer.style.display = 'flex';
    
    // 初始化大小設定
    window.logger.log('Initializing size settings after PDF load');
    
    // 設置縮放和平移事件
    if (typeof window.setupZoomAndPanEvents === 'function') {
        window.setupZoomAndPanEvents();
        window.logger.log('Zoom and pan events set up after PDF load');
    }
    
    // 從localStorage載入標籤大小設定
    const savedLabelSize = localStorage.getItem('pne_label_size_scale');
    if (savedLabelSize) {
        window.labelSizeScale = parseInt(savedLabelSize);
        window.logger.log('Loaded label size from localStorage:', window.labelSizeScale + 'px');
    } else {
        window.labelSizeScale = window.labelSizeScale || 24;
        window.logger.log('Using default label size:', window.labelSizeScale + 'px');
    }
    
    // 從localStorage載入缺陷標記大小設定
    const savedDefectSize = localStorage.getItem('pne_defect_mark_size_scale');
    if (savedDefectSize) {
        window.defectMarkSizeScale = parseInt(savedDefectSize);
        window.logger.log('Loaded defect mark size from localStorage:', window.defectMarkSizeScale + 'px');
    } else {
        window.defectMarkSizeScale = window.defectMarkSizeScale || 24;
        window.logger.log('Using default defect mark size:', window.defectMarkSizeScale + 'px');
    }
    
    // 設置縮放和平移事件監聽器
    window.logger.log('Calling setupZoomAndPanEvents from loadPDFFromArrayBuffer');
    if (typeof window.setupZoomAndPanEvents === 'function') {
        window.setupZoomAndPanEvents();
    } else {
        window.logger.log('setupZoomAndPanEvents function not available yet');
    }
    
    // 應用保存的視圖狀態
    let savedViewState = null;
    try {
        const pneViewState = localStorage.getItem('pne_floorplan_view_state');
        if (pneViewState) {
            savedViewState = JSON.parse(pneViewState);
            window.logger.log('Found saved view state from PNE file:', savedViewState);
        }
    } catch (error) {
        window.logger.error('Error parsing saved view state:', error);
    }
    
    // 應用視圖狀態的函數
    function applyViewState(viewState) {
        if (!viewState) return;
        
        window.logger.log('Applying view state:', viewState);
        
        // 應用縮放和平移
        window.currentScale = viewState.scale || 1.0;
        window.translateX = viewState.translateX || 0;
        window.translateY = viewState.translateY || 0;
        
        // 更新標籤大小
        if (viewState.labelSizeScale) {
            window.labelSizeScale = viewState.labelSizeScale;
            if (typeof updateLabelSizeUI === 'function') {
                updateLabelSizeUI();
            }
        }
        
        // 更新缺陷標記大小
        if (viewState.defectMarkSizeScale) {
            window.defectMarkSizeScale = viewState.defectMarkSizeScale;
            if (typeof updateDefectMarkSizeUI === 'function') {
                updateDefectMarkSizeUI();
            }
        }
        
        // 應用變換
        if (typeof window.applyTransform === 'function') {
            window.applyTransform();
            window.logger.log('View state applied successfully');
        } else {
            window.logger.warn('applyTransform function not available');
        }
    }
    
    if (savedViewState) {
        // 應用保存的視圖狀態
        applyViewState(savedViewState);
        
        // 清除保存的視圖狀態
        localStorage.removeItem('pne_floorplan_view_state');
        } else {
            // 嘗試從localStorage載入視圖狀態
            let viewStateRestored = false;
            
            // 首先嘗試從PNE文件載入的視圖狀態
            if (typeof loadViewStateFromLocalStorage === 'function') {
                loadViewStateFromLocalStorage();
                window.logger.log('Loaded view state from localStorage');
                
                // 應用載入的視圖狀態
                if (typeof window.applyTransform === 'function') {
                    window.applyTransform();
                    viewStateRestored = true;
                }
            }
            
            // 如果沒有恢復成功，嘗試從備份中恢復
            if (!viewStateRestored) {
                try {
                    const backupViewState = localStorage.getItem('pne_current_view_state');
                    if (backupViewState) {
                        const parsedBackup = JSON.parse(backupViewState);
                        window.logger.log('Found backup view state:', parsedBackup);
                        
                        // 檢查時間戳，如果太舊（超過24小時）則不使用
                        const now = Date.now();
                        const stateAge = now - (parsedBackup.timestamp || 0);
                        const maxAge = 24 * 60 * 60 * 1000; // 24小時
                        
                        if (stateAge < maxAge) {
                            applyViewState(parsedBackup);
                            viewStateRestored = true;
                            window.logger.log('Restored view state from backup');
                        } else {
                            window.logger.log('Backup view state too old, ignoring');
                        }
                    }
                } catch (error) {
                    window.logger.error('Error restoring backup view state:', error);
                }
            }
            
            // 如果仍然沒有恢復成功，使用默認視圖
            if (!viewStateRestored) {
                // 居中顯示 - 使用可用的函數
                if (typeof zoomTo100AndCenter === 'function') {
                    zoomTo100AndCenter();
                } else if (typeof window.applyTransform === 'function') {
                    // 設置默認視圖
                    window.currentScale = 1.0;
                    window.translateX = 0;
                    window.translateY = 0;
                    window.applyTransform();
                }
                window.logger.log('Using default view state');
            }
        }
    
    // 生成縮圖
    try {
        window.logger.log('Generating thumbnail...');
        window.logger.log('Floor plan canvas:', {
            width: floorPlanCanvas.width,
            height: floorPlanCanvas.height,
            element: floorPlanCanvas
        });
        
        const thumbMaxW = 640;
        const scaleThumb = Math.min(1, thumbMaxW / floorPlanCanvas.width);
        const tw = Math.max(1, Math.floor(floorPlanCanvas.width * scaleThumb));
        const th = Math.max(1, Math.floor(floorPlanCanvas.height * scaleThumb));
        
        window.logger.log('Thumbnail dimensions:', { tw, th, scaleThumb });
        
        const thumbCanvas = document.createElement('canvas');
        thumbCanvas.width = tw;
        thumbCanvas.height = th;
        const tctx = thumbCanvas.getContext('2d');
        tctx.drawImage(floorPlanCanvas, 0, 0, tw, th);
        const dataUrl = thumbCanvas.toDataURL('image/png');
        
        window.logger.log('Thumbnail data URL generated, length:', dataUrl.length);
        
        const floorplanThumb = document.getElementById('floorplanThumb');
        const floorplanThumbImg = document.getElementById('floorplanThumbImg');
        
        window.logger.log('Thumbnail elements:', {
            floorplanThumb: !!floorplanThumb,
            floorplanThumbImg: !!floorplanThumbImg
        });
        
        if (floorplanThumb && floorplanThumbImg) {
            floorplanThumbImg.src = dataUrl;
            floorplanThumb.style.display = 'flex';
            window.logger.log('Thumbnail displayed successfully');
        } else {
            window.logger.error('Thumbnail elements not found');
        }
    } catch (e) { 
        window.logger.error('Thumbnail generation failed:', e);
        window.logger.log('Floor plan canvas dimensions:', {
            width: floorPlanCanvas.width,
            height: floorPlanCanvas.height
        });
    }
    
    // 將ArrayBuffer轉換為base64並存儲（使用專用副本，避免分離）
    const uint8Array = new Uint8Array(arrayBufferForBase64);
    const binaryString = Array.from(uint8Array, byte => String.fromCharCode(byte)).join('');
    const pdfBase64 = btoa(binaryString);
    localStorage.setItem('pne_floorplan_base64', pdfBase64);
    
    // 保存PDF文件引用和元數據到localStorage
    const floorPlanData = {
        filename: pdfPath,
        fileSize: arrayBufferForBase64.byteLength,
        lastModified: Date.now(),
        uploadDate: new Date().toISOString(),
        pageCount: pdf.numPages,
        dimensions: {
            width: viewport.width,
            height: viewport.height
        },
        labelsCount: (typeof window.labels !== 'undefined' && window.labels) ? window.labels.length : 0,
        defectMarksCount: (typeof window.defectMarks !== 'undefined' && window.defectMarks) ? window.defectMarks.length : 0,
        // 保存文件引用
        fileReference: {
            name: pdfPath,
            size: arrayBufferForBase64.byteLength,
            lastModified: Date.now(),
            type: 'application/pdf'
        },
        // 標記有 base64 數據可用於匯出
        hasBase64Data: true
    };
    
    localStorage.setItem('pne_floorplan_data', JSON.stringify(floorPlanData));
    localStorage.setItem('pne_floorplan_filename', pdfPath);
    
    // 重置 skipDefectMarksLoad 標誌，允許缺陷標記載入
    window.skipDefectMarksLoad = false;
    window.logger.log('PDF upload: Reset skipDefectMarksLoad flag to allow defect marks loading');
    
    // 載入標籤和缺陷標記數據
    if (typeof loadLabelsFromStorage === 'function') {
        await loadLabelsFromStorage();
        window.logger.log('PDF upload: Labels loaded from storage');
    }
    
    if (typeof loadDefectMarksFromStorage === 'function') {
        await loadDefectMarksFromStorage();
        window.logger.log('PDF upload: Defect marks loaded from storage');
    }
    
    // 重新渲染標籤和缺陷標記
    if (typeof redrawLabels === 'function') {
        redrawLabels();
        window.logger.log('PDF upload: Labels redrawn');
    }
    
    if (typeof redrawDefectMarks === 'function') {
        redrawDefectMarks();
        window.logger.log('PDF upload: Defect marks redrawn');
    }
    
    // 檢查是否有待恢復的視圖狀態（頁面重新載入時）
    if (window.pendingViewStateRestore) {
        window.logger.log('Applying pending view state restore after PDF load');
        
        // 等待一小段時間確保 PDF 完全渲染
        setTimeout(() => {
            if (typeof window.applyTransform === 'function') {
                window.applyTransform();
                window.logger.log('Pending view state applied successfully');
            }
            
            // 更新標籤和缺陷標記大小 UI
            if (window.labelSizeScale && typeof updateLabelSizeUI === 'function') {
                updateLabelSizeUI();
            }
            if (window.defectMarkSizeScale && typeof updateDefectMarkSizeUI === 'function') {
                updateDefectMarkSizeUI();
            }
            
            // 重新設置雙擊事件監聽器，確保缺陷標記創建功能正常
            if (typeof setupDoubleClickHandler === 'function') {
                setupDoubleClickHandler();
                window.logger.log('Double-click handler re-initialized after PDF load');
            }
            
            // 清除標記
            window.pendingViewStateRestore = false;
        }, 300);
    }
    
    window.logger.log('PDF loaded successfully from base64 data');
}


async function autoLoadPDFFromData(pdfData, pdfPath) {
    return new Promise((resolve, reject) => {
        try {
            window.logger.log('PDF file reference found:', pdfPath);
            window.logger.log('PDF files are no longer stored in localStorage. Please re-upload the PDF file to view the floor plan.');
            
            // 顯示提示信息，告知用戶需要重新上傳PDF
            showNotification(`檢測到PDF文件引用：${pdfPath}。請重新上傳PDF文件以查看樓層平面圖。`, 'info');
            
                    
                    resolve();
                } catch (error) {
            window.logger.error('Error processing PDF file reference:', error);
            reject(error);
        }
    });
}

// 恢復樓層平面圖標籤
function restoreFloorPlanLabels(labelsData) {
    try {
        window.logger.log('Restoring floor plan labels:', labelsData.length);
        
        const labelLayer = document.getElementById('labelLayer');
        if (!labelLayer) {
            window.logger.error('Label layer not found');
            return;
        }
        
        // 清除現有標籤
        labelLayer.innerHTML = '';
        
        // 恢復每個標籤
        labelsData.forEach(labelData => {
            const labelElement = document.createElement('div');
            labelElement.className = 'floor-plan-label';
            
            // 使用保存的座標位置
            if (labelData.x !== undefined && labelData.y !== undefined) {
                labelElement.style.left = labelData.x + 'px';
                labelElement.style.top = labelData.y + 'px';
            }
            
            // 使用保存的字體大小
            if (labelData.fontSize !== undefined) {
                labelElement.style.fontSize = labelData.fontSize + 'px';
            } else {
                const labelSizeValue = window.labelSizeScale || 24;
                labelElement.style.fontSize = labelSizeValue + 'px';
            }
            
            labelElement.dataset.labelId = labelData.id;
            
            // 設置標籤內容
            labelElement.innerHTML = `
                <div class="label-content">
                    <span class="label-text">${labelData.text || ''}</span>
                    <button class="label-delete-btn" onclick="deleteLabel('${labelData.id}')">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
            
            labelLayer.appendChild(labelElement);
        });
        
        window.logger.log('Floor plan labels restored successfully');
    } catch (error) {
        window.logger.error('Error restoring floor plan labels:', error);
    }
}

// 恢復樓層平面圖缺陷標記
function restoreFloorPlanDefectMarks(defectMarksData) {
    try {
        window.logger.log('Restoring floor plan defect marks:', defectMarksData.length);
        
        const labelLayer = document.getElementById('labelLayer');
        if (!labelLayer) {
            window.logger.error('Label layer not found');
            return;
        }
        
        // 恢復每個缺陷標記
        defectMarksData.forEach(markData => {
            const markElement = document.createElement('div');
            markElement.className = 'defect-mark-dot';
            
            // 使用保存的座標位置
            if (markData.x !== undefined && markData.y !== undefined) {
                markElement.style.left = markData.x + 'px';
                markElement.style.top = markData.y + 'px';
            }
            
            markElement.dataset.markId = markData.id;
            
            // 創建缺陷標記元素
            markElement.innerHTML = `
                <div class="defect-mark-textbox">
                    <span class="defect-mark-number">${markData.number || markData.defectNo || ''}</span>
                    <button class="defect-mark-delete-btn" onclick="deleteDefectMark('${markData.id}')">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
            
            labelLayer.appendChild(markElement);
        });
        
        window.logger.log('Floor plan defect marks restored successfully');
    } catch (error) {
        window.logger.error('Error restoring floor plan defect marks:', error);
    }
}

// 更新照片狀態基於標籤數據
function updatePhotoStatusFromLabels() {
    window.logger.log('Updating photo status from labels data');
    
    // 收集所有已提交的照片文件名
    const submittedPhotos = new Set();
    const photoLocationMap = new Map(); // 照片文件名 -> location ID
    const categoryPhotoMap = new Map(); // 照片文件名 -> category assignments
    
    // 首先處理 submittedData 中的照片（優先級最高）
    if (submittedData && submittedData.length > 0) {
        submittedData.forEach(record => {
            if (record.photoFilenames && record.photoFilenames.length > 0) {
                record.photoFilenames.forEach(filename => {
                    submittedPhotos.add(filename);
                    photoLocationMap.set(filename, record.locationId || '');
                });
            }
        });
    }
    
    if (window.labels && Array.isArray(window.labels)) {
        window.labels.forEach(label => {
            // 處理已提交的照片 - 添加驗證確保照片確實屬於該標籤
            if (label.submitted && label.photoFilenames && Array.isArray(label.photoFilenames)) {
                label.photoFilenames.forEach(filename => {
                    // 驗證照片是否真的屬於這個標籤
                    const isValidAssignment = validatePhotoLabelAssignment(filename, label);
                    if (isValidAssignment) {
                        submittedPhotos.add(filename);
                        photoLocationMap.set(filename, label.inspectionNo || label.locationId || '');
                    } else {
                        window.logger.warn(`Photo ${filename} is not properly assigned to label ${label.inspectionNo}, skipping`);
                    }
                });
            }
            
            // 處理分類欄位中的照片編號 - 添加更嚴格的驗證
            categories.forEach(category => {
                const categoryKey = category.id;
                if (label[categoryKey] && label[categoryKey] !== 'N/A') {
                    // 解析照片編號，支持範圍格式（如 1234-1236）
                    const photoNumbers = [];
                    const parts = label[categoryKey].split(/[,\-]/).map(num => num.trim()).filter(num => num);
                    
                    parts.forEach(part => {
                        // 檢查是否為範圍格式（如 1234-1236）
                        if (part.includes('-')) {
                            const rangeParts = part.split('-');
                            if (rangeParts.length === 2) {
                                const start = parseInt(rangeParts[0].trim());
                                const end = parseInt(rangeParts[1].trim());
                                if (!isNaN(start) && !isNaN(end) && start <= end) {
                                    // 生成範圍內的所有照片編號
                                    for (let i = start; i <= end; i++) {
                                        photoNumbers.push(i.toString());
                                    }
                                }
                            }
                        } else {
                            // 單個照片編號
                            photoNumbers.push(part);
                        }
                    });
                    
                    // 根據照片編號找到對應的照片文件名 - 添加驗證
                    if (allPhotos && allPhotos.length > 0) {
                        photoNumbers.forEach(photoNumber => {
                            allPhotos.forEach(file => {
                                const fileNumber = file.name.match(/\d+/);
                                if (fileNumber && fileNumber[0] === photoNumber) {
                                    // 驗證照片是否真的屬於這個標籤的這個分類
                                    const isValidAssignment = validatePhotoCategoryAssignment(file.name, label, categoryKey);
                                    if (isValidAssignment) {
                                        if (!categoryPhotoMap.has(file.name)) {
                                            categoryPhotoMap.set(file.name, new Set());
                                        }
                                        categoryPhotoMap.get(file.name).add(categoryKey);
                                        
                                        // 更新 assignedPhotos
                                        if (!assignedPhotos[categoryKey]) {
                                            assignedPhotos[categoryKey] = new Set();
                                        }
                                        assignedPhotos[categoryKey].add(file.name);
                                    } else {
                                        window.logger.warn(`Photo ${file.name} is not properly assigned to label ${label.inspectionNo} category ${categoryKey}, skipping`);
                                    }
                                }
                            });
                        });
                    }
                }
            });
        });
    }
    
    // 同步更新 submittedFilenames 集合
    submittedFilenames.clear();
    submittedPhotos.forEach(filename => submittedFilenames.add(filename));
    
    // 清理 assignedPhotos 集合中不再需要的照片
    categories.forEach(category => {
        if (assignedPhotos[category.id]) {
            const currentAssignedPhotos = new Set(assignedPhotos[category.id]);
            currentAssignedPhotos.forEach(filename => {
                // 檢查照片是否仍在該分類中
                const categoryAssignments = categoryPhotoMap.get(filename);
                if (!categoryAssignments || !categoryAssignments.has(category.id)) {
                    assignedPhotos[category.id].delete(filename);
                }
            });
        }
    });
    
    // 清除所有照片狀態，然後重新設置（與 PNE.html 保持一致）
    document.querySelectorAll('.photo-item').forEach(item => {
        item.classList.remove('submitted', 'assigned');
        const img = item.querySelector('img');
        if (img) {
            img.style.filter = '';
            img.style.opacity = '';
        }
        const statusDiv = item.querySelector('.photo-status');
        if (statusDiv) {
            statusDiv.textContent = '';
            statusDiv.style.display = 'none';
        }
    });
    
    // 處理已提交的照片（優先級最高）
    submittedPhotos.forEach(filename => {
        const photoItem = document.querySelector(`.photo-item[data-filename="${filename}"]`);
        if (photoItem) {
            // Mark as submitted
            photoItem.classList.add('submitted');
            
            // Update visual appearance
            const img = photoItem.querySelector('img');
            if (img) {
                img.style.filter = 'grayscale(100%)';
                img.style.opacity = '0.3';
            }
            
            // Update status display
            const statusDiv = photoItem.querySelector('.photo-status');
            if (statusDiv) {
                statusDiv.textContent = `Submitted to ${photoLocationMap.get(filename) || ''}`;
                statusDiv.style.display = 'flex';
                statusDiv.style.zIndex = '10'; // Ensure status is above placeholder
            }
            
            // Update photo number display
            const photoNumberDiv = photoItem.querySelector('.photo-number');
            if (photoNumberDiv) {
                const numberMatch = filename.match(/\d+/);
                const number = numberMatch ? numberMatch[0] : '';
                photoNumberDiv.textContent = number;
            }
        }
    });
    
    // 處理已分配但未提交的照片
    Object.keys(assignedPhotos).forEach(categoryId => {
        if (assignedPhotos[categoryId] && assignedPhotos[categoryId].size > 0) {
            assignedPhotos[categoryId].forEach(filename => {
                const photoItem = document.querySelector(`.photo-item[data-filename="${filename}"]`);
                if (photoItem && !photoItem.classList.contains('submitted')) {
                    // Check if this photo is still in any submittedData row
                    const isStillSubmitted = submittedData.some(row => 
                        row.photoFilenames && row.photoFilenames.includes(filename)
                    );
                    
                    if (!isStillSubmitted) {
                        // Mark as assigned only if not submitted
                        photoItem.classList.add('assigned');
                        
                        // Update visual appearance
                        const img = photoItem.querySelector('img');
                        if (img) {
                            img.style.filter = 'grayscale(100%)';
                            img.style.opacity = '0.3';
                        }
                        
                        // Update status display to show category
                        const statusDiv = photoItem.querySelector('.photo-status');
                        if (statusDiv) {
                            const categoryName = categories.find(cat => cat.id === categoryId)?.name || categoryId.toUpperCase();
                            statusDiv.textContent = `Assigned to ${categoryName}`;
                            statusDiv.style.display = 'flex';
                            statusDiv.style.zIndex = '10'; // Ensure status is above placeholder
                        }
                        
                        // Update photo number display
                        const photoNumberDiv = photoItem.querySelector('.photo-number');
                        if (photoNumberDiv) {
                            const numberMatch = filename.match(/\d+/);
                            const number = numberMatch ? numberMatch[0] : '';
                            photoNumberDiv.textContent = number;
                        }
                    } else {
                        // If photo is still submitted, ensure it shows as submitted
                        photoItem.classList.remove('assigned');
                        photoItem.classList.add('submitted');
                        const img = photoItem.querySelector('img');
                        if (img) {
                            img.style.filter = 'grayscale(100%)';
                            img.style.opacity = '0.3';
                        }
                        const statusDiv = photoItem.querySelector('.photo-status');
                        if (statusDiv) {
                            statusDiv.textContent = 'Submitted';
                            statusDiv.style.display = 'flex';
                            statusDiv.style.zIndex = '10';
                        }
                    }
                }
            });
        }
    });
    
    window.logger.log('Photo status updated from labels data');
    window.logger.log('Updated submittedFilenames:', Array.from(submittedFilenames));
    window.logger.log('Updated category assignments:', categoryPhotoMap);
}

// 處理標籤詳細表格中照片編號的即時更新
function handleLabelsDetailTablePhotoUpdate() {
    window.logger.log('Handling labels detail table photo number updates');
    
    // 監聽標籤詳細表格中的輸入變化
    const labelsDetailTable = document.getElementById('labelsDetailTable');
    if (labelsDetailTable) {
        // 移除舊的事件監聽器
        labelsDetailTable.removeEventListener('input', handleLabelsRealtimeUpdate);
        labelsDetailTable.removeEventListener('change', handleLabelsRealtimeUpdate);
        
        // 添加新的事件監聽器
        labelsDetailTable.addEventListener('input', handleLabelsRealtimeUpdate);
        labelsDetailTable.addEventListener('change', handleLabelsRealtimeUpdate);
    }
}

// 處理標籤詳細表格的即時更新
function handleLabelsRealtimeUpdate(event) {
    const target = event.target;
    if (!target.matches('input[data-field]')) return;
    
    const field = target.dataset.field;
    const index = parseInt(target.dataset.index);
    
    // 分類欄位（a-j）現在是只讀的，不處理這些欄位的更新
    const categoryFields = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    if (categoryFields.includes(field)) return;
    
    window.logger.log(`Updating category ${field} for label index ${index}`);
    
    // 更新對應的標籤數據
    if (window.labels && window.labels[index]) {
        const label = window.labels[index];
        const newValue = target.value.trim();
        
        // 更新標籤數據
        label[field] = newValue || 'N/A';
        
        // 保存標籤數據
        if (typeof window.saveLabelsToStorage === 'function') {
            window.saveLabelsToStorage();
        }
        
        // 即時更新照片預覽狀態
        setTimeout(() => {
            if (typeof updatePhotoStatusFromLabels === 'function') {
                updatePhotoStatusFromLabels();
            }
        }, 100);
        
        window.logger.log(`Updated label ${label.inspectionNo} category ${field} to: ${newValue}`);
    }
}

// 更新照片狀態基於檢查記錄（參考 PNE611.html 的正確實現）
function updatePhotoStatusFromInspectionRecords() {
    window.logger.log('Updating photo status from inspection records');
    
    // 清除所有照片狀態，然後重新設置
    document.querySelectorAll('.photo-item').forEach(item => {
        item.classList.remove('submitted', 'assigned');
        const img = item.querySelector('img');
        if (img) {
            img.style.filter = '';
            img.style.opacity = '';
        }
        const statusDiv = item.querySelector('.photo-status');
        if (statusDiv) {
            statusDiv.textContent = '';
            statusDiv.style.display = 'none';
        }
    });
    
    // 處理已提交的照片（優先級最高）
    submittedData.forEach(record => {
        if (record.photoFilenames && record.photoFilenames.length > 0) {
            record.photoFilenames.forEach(filename => {
                const photoItem = document.querySelector(`.photo-item[data-filename="${filename}"]`);
                if (photoItem) {
                    // Mark as submitted
                    photoItem.classList.add('submitted');
                    submittedFilenames.add(filename);
                    
                    // Update visual appearance
                    const img = photoItem.querySelector('img');
                    if (img) {
                        img.style.filter = 'grayscale(100%)';
                        img.style.opacity = '0.3';
                    }
                    
                    // Update status display
                    const statusDiv = photoItem.querySelector('.photo-status');
                    if (statusDiv) {
                        statusDiv.textContent = `Submitted to ${record.locationId}`;
                        statusDiv.style.display = 'flex';
                        statusDiv.style.zIndex = '10'; // Ensure status is above placeholder
                    }
                    
                    // Update photo number display
                    const photoNumberDiv = photoItem.querySelector('.photo-number');
                    if (photoNumberDiv) {
                        const numberMatch = filename.match(/\d+/);
                        const number = numberMatch ? numberMatch[0] : '';
                        photoNumberDiv.textContent = number;
                    }
                }
            });
        }
    });
    
    // 處理已分配但未提交的照片
    Object.keys(assignedPhotos).forEach(categoryId => {
        if (assignedPhotos[categoryId] && assignedPhotos[categoryId].size > 0) {
            assignedPhotos[categoryId].forEach(filename => {
                const photoItem = document.querySelector(`.photo-item[data-filename="${filename}"]`);
                if (photoItem) {
                    // Check if photo is already submitted
                    const isStillSubmitted = submittedData.some(record => 
                        record.photoFilenames && record.photoFilenames.includes(filename)
                    );
                    
                    if (!isStillSubmitted) {
                        // Mark as assigned only if not submitted
                        photoItem.classList.add('assigned');
                        
                        // Update visual appearance
                        const img = photoItem.querySelector('img');
                        if (img) {
                            img.style.filter = 'grayscale(100%)';
                            img.style.opacity = '0.3';
                        }
                        
                        // Update status display to show category
                        const statusDiv = photoItem.querySelector('.photo-status');
                        if (statusDiv) {
                            const categoryName = categories.find(cat => cat.id === categoryId)?.name || categoryId.toUpperCase();
                            statusDiv.textContent = `Assigned to ${categoryName}`;
                            statusDiv.style.display = 'flex';
                            statusDiv.style.zIndex = '10'; // Ensure status is above placeholder
                        }
                        
                        // Update photo number display
                        const photoNumberDiv = photoItem.querySelector('.photo-number');
                        if (photoNumberDiv) {
                            const numberMatch = filename.match(/\d+/);
                            const number = numberMatch ? numberMatch[0] : '';
                            photoNumberDiv.textContent = number;
                        }
                    } else {
                        // Photo is submitted, ensure it shows as submitted
                        photoItem.classList.remove('assigned');
                        photoItem.classList.add('submitted');
                        const img = photoItem.querySelector('img');
                        if (img) {
                            img.style.filter = 'grayscale(100%)';
                            img.style.opacity = '0.3';
                        }
                        const statusDiv = photoItem.querySelector('.photo-status');
                        if (statusDiv) {
                            statusDiv.textContent = 'Submitted';
                            statusDiv.style.display = 'flex';
                            statusDiv.style.zIndex = '10';
                        }
                    }
                }
            });
        }
    });
    
    window.logger.log('Photo status update completed');
    
    // Log final status for debugging
    const submittedCount = document.querySelectorAll('.photo-item.submitted').length;
    const assignedCount = document.querySelectorAll('.photo-item.assigned').length;
    const normalCount = document.querySelectorAll('.photo-item:not(.submitted):not(.assigned)').length;
    
    window.logger.log(`Final photo status - Submitted: ${submittedCount}, Assigned: ${assignedCount}, Normal: ${normalCount}`);
}

// 更新照片提交狀態顯示
function updatePhotoSubmissionStatus() {
    window.logger.log('Updating photo submission status display');
    
    // 使用新的函數來更新照片狀態
    updatePhotoStatusFromInspectionRecords();
    
    // 更新分類顯示
    categories.forEach(category => {
        updateCategoryDisplay(category.id);
    });
    
    window.logger.log('Photo submission status updated');
}

// 自動載入照片函數
async function autoLoadPhotosFromPaths(photoFilePaths, photoMetadata) {
    try {
        window.logger.log('Attempting to auto-load photos from paths:', photoFilePaths.length);
        
        // 檢查是否在 file:// 協議下運行
        if (window.location.protocol === 'file:') {
            window.logger.log('Running in file:// protocol, checking for cached dataURLs');
            
            // 在 file:// 協議下，只能使用快取的 dataURL
            if (photoMetadata && photoMetadata.some(meta => meta.dataURL && meta.dataURL.trim() !== '')) {
                window.logger.log('Using cached dataURLs for photo restoration in file:// protocol');
                
                // 過濾出有效的 dataURL
                const validPhotos = photoMetadata.filter(meta => 
                    meta.dataURL && 
                    typeof meta.dataURL === 'string' && 
                    meta.dataURL.trim() !== '' &&
                    meta.dataURL.startsWith('data:image/')
                );
                
                window.logger.log(`Found ${validPhotos.length} valid photos with dataURL out of ${photoMetadata.length} total`);
                
                if (validPhotos.length > 0) {
                    allPhotos = validPhotos.map(metadata => ({
                        name: metadata.name,
                        size: metadata.size || 0,
                        type: metadata.type || 'image/jpeg',
                        lastModified: metadata.lastModified || Date.now(),
                        webkitRelativePath: metadata.webkitRelativePath || '',
                        dataURL: metadata.dataURL
                    }));
                    
                    // 渲染照片
                    const lazyObserver = initLazyLoading();
                    await renderPhotos(allPhotos, lazyObserver);
                    updateFolderDisplay();
                    updateAddPhotosButtonVisibility();
                    
                    showNotification(`從 PNE 檔案快取中恢復了 ${allPhotos.length} 張照片 (file:// 協議)`, 'success');
                    return;
                } else {
                    window.logger.warn('No valid dataURLs found in file:// protocol');
                    showNotification('在 file:// 協議下無法載入照片，請手動選擇照片資料夾', 'warning');
                    return;
                }
            } else {
                window.logger.log('No cached dataURLs available in file:// protocol');
                showNotification('在 file:// 協議下無法自動載入照片，請手動選擇照片資料夾', 'info');
                return;
            }
        }
        
        // 如果有 dataURL，直接使用（適用於照片已經在記憶體中的情況）
        if (photoMetadata && photoMetadata.some(meta => meta.dataURL && meta.dataURL.trim() !== '')) {
            window.logger.log('Using cached dataURLs for photo restoration');
            window.logger.log('Photo metadata details:', {
                totalCount: photoMetadata.length,
                withDataURL: photoMetadata.filter(meta => meta.dataURL && meta.dataURL.trim() !== '').length,
                sampleDataURL: photoMetadata.find(meta => meta.dataURL && meta.dataURL.trim() !== '')?.dataURL?.substring(0, 50) + '...'
            });
            allPhotos = photoMetadata.map(metadata => {
                // 檢查 dataURL 的類型和內容
                let dataURL = metadata.dataURL || '';
                if (typeof dataURL === 'object') {
                    window.logger.warn(`Invalid dataURL type for ${metadata.name}:`, typeof dataURL, dataURL);
                    dataURL = ''; // 重置為空字符串
                }
                
                return {
                    name: metadata.name,
                    size: metadata.size || 0,
                    type: metadata.type || 'image/jpeg',
                    lastModified: metadata.lastModified || Date.now(),
                    webkitRelativePath: metadata.webkitRelativePath || '',
                    dataURL: dataURL
                };
            });
            
            // 渲染照片
            const lazyObserver = initLazyLoading();
            await renderPhotos(allPhotos, lazyObserver);
            updateFolderDisplay();
            updateAddPhotosButtonVisibility();
            
            showNotification(`從 PNE 檔案快取中恢復了 ${allPhotos.length} 張照片`, 'success');
            return;
        } else {
            window.logger.log('No valid dataURLs found in photo metadata, attempting alternative loading methods');
            window.logger.log('Photo metadata analysis:', {
                totalCount: photoMetadata ? photoMetadata.length : 0,
                hasMetadata: !!photoMetadata,
                sampleMetadata: photoMetadata ? photoMetadata[0] : null,
                dataURLStatus: photoMetadata ? photoMetadata.map(meta => ({
                    name: meta.name,
                    hasDataURL: !!meta.dataURL,
                    dataURLLength: meta.dataURL ? meta.dataURL.length : 0,
                    dataURLPreview: meta.dataURL ? meta.dataURL.substring(0, 20) + '...' : 'none'
                })) : []
            });
        }
        
        // 嘗試使用 File System Access API 載入照片（如果支援）
        // 注意：這會彈出目錄選擇對話框，不是真正的自動載入
        if ('showDirectoryPicker' in window) {
            try {
                window.logger.log('Attempting to use File System Access API for photo loading');
                const directoryHandle = await window.showDirectoryPicker();
                const files = [];
                
                for await (const [name, handle] of directoryHandle.entries()) {
                    if (handle.kind === 'file' && /\.(jpe?g|png|gif|bmp|webp)$/i.test(name)) {
                        const file = await handle.getFile();
                        files.push(file);
                    }
                }
                
                if (files.length > 0) {
                    allPhotos = files;
                    const lazyObserver = initLazyLoading();
                    await renderPhotos(allPhotos, lazyObserver);
                    updateFolderDisplay();
                    updateAddPhotosButtonVisibility();
                    
                    showNotification(`從選定目錄載入了 ${files.length} 張照片`, 'success');
                    return;
                }
            } catch (error) {
                window.logger.log('File System Access API not available or user cancelled:', error);
            }
        }
        
        // 如果無法自動載入，顯示提示訊息
        window.logger.log('All auto-loading methods failed, prompting user to manually select folder');
        showNotification('無法自動載入照片，請手動選擇照片資料夾以恢復照片', 'info');
        
    } catch (error) {
        window.logger.error('Error auto-loading photos:', error);
        showNotification('自動載入照片失敗，請手動選擇照片資料夾', 'warning');
    }
}

// Open PNE file
const openPNEBtn = document.querySelector('.pne-dropdown-item[data-action="open"]');
openPNEBtn.addEventListener('click', function() {
    // 關閉下拉選單
    const pneDropdown = document.querySelector('.pne-dropdown');
    if (pneDropdown) {
        pneDropdown.style.display = 'none';
    }
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pne,application/json';
    input.style.display = 'none';
    input.addEventListener('change', async (e) => {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            
            // 保存PDF base64數據，避免被清除
            const pdfBase64Data = localStorage.getItem('pne_floorplan_base64');
            const pdfData = localStorage.getItem('pne_floorplan_data');
            const pdfFilename = localStorage.getItem('pne_floorplan_filename');
            
            // 清除所有 localStorage 數據，避免與 .pne 文件數據衝突
            window.logger.log('Clearing all localStorage data before loading PNE file...');
            localStorage.clear();
            window.logger.log('localStorage cleared successfully');
            
            // 恢復PDF數據
            if (pdfBase64Data) {
                localStorage.setItem('pne_floorplan_base64', pdfBase64Data);
                window.logger.log('PDF base64 data preserved');
            }
            if (pdfData) {
                localStorage.setItem('pne_floorplan_data', pdfData);
                window.logger.log('PDF metadata preserved');
            }
            if (pdfFilename) {
                localStorage.setItem('pne_floorplan_filename', pdfFilename);
                window.logger.log('PDF filename preserved');
            }
            
            // 重置所有全局變量
            submittedData = [];
            submittedFilenames = new Set();
            photoFolders = [];
            submittedDefectEntries = [];
            rowIdCounter = 0;
            allPhotos = [];
            window.labels = [];
            window.defectMarks = [];
            
            window.logger.log('Global variables reset');
            
            const text = await file.text();
            try {
                const data = JSON.parse(text);
                
                // 還原Inspection Records
                if (data.inspectionRecords) {
                    submittedData = data.inspectionRecords;
                    console.log('🔍 PNE load: Restored submittedData:', submittedData.length, 'records');
                    console.log('🔍 submittedData content:', submittedData);
                }
                if (Array.isArray(data.submittedFilenames)) {
                    submittedFilenames = new Set(data.submittedFilenames);
                    console.log('🔍 PNE load: Restored submittedFilenames:', submittedFilenames.size, 'files');
                    console.log('🔍 submittedFilenames content:', Array.from(submittedFilenames));
                } else {
                    console.log('🔍 PNE load: No submittedFilenames found in data');
                }
                if (Array.isArray(data.photoFolders)) {
                    photoFolders = data.photoFolders;
                }
                if (Array.isArray(data.submittedDefectEntries)) {
                    submittedDefectEntries = data.submittedDefectEntries;
                }
                if (typeof data.rowIdCounter === 'number') {
                    rowIdCounter = data.rowIdCounter;
                }
                
                // 新增：還原照片分配資料
                if (data.photoAssignments) {
                    window.logger.log('Restoring photo assignments from PNE file');
                    
                    // 還原分類編號
                    if (data.photoAssignments.categoryNumbers) {
                        Object.keys(data.photoAssignments.categoryNumbers).forEach(categoryId => {
                            if (categoryNumbers[categoryId]) {
                                categoryNumbers[categoryId] = data.photoAssignments.categoryNumbers[categoryId] || [];
                            }
                        });
                    }
                    
                    // 還原已分配的照片
                    if (data.photoAssignments.assignedPhotos) {
                        Object.keys(data.photoAssignments.assignedPhotos).forEach(categoryId => {
                            if (assignedPhotos[categoryId]) {
                                assignedPhotos[categoryId] = new Set(data.photoAssignments.assignedPhotos[categoryId] || []);
                            }
                        });
                    }
                    
                    // 還原缺陷條目
                    if (data.photoAssignments.defectEntries) {
                        window.defectEntries = data.photoAssignments.defectEntries || [];
                        window.logger.log('Restored defect entries from PNE file:', window.defectEntries.length);
                    }
                }
                
                // 新增：還原照片元資料和檔案路徑
                if (data.photoMetadata) {
                    window.logger.log('Restoring photo metadata from PNE file:', data.photoMetadata.length);
                    // 不直接設置 allPhotos，讓 autoLoadPhotosFromPaths 處理
                    // allPhotos = data.photoMetadata.map(metadata => ({
                    //     name: metadata.name,
                    //     size: metadata.size || 0,
                    //     type: metadata.type || 'image/jpeg',
                    //     lastModified: metadata.lastModified || Date.now(),
                    //     webkitRelativePath: metadata.webkitRelativePath || '',
                    //     dataURL: metadata.dataURL || ''
                    // }));
                }
                
                // 新增：還原檔案路徑資訊
                if (data.filePaths) {
                    window.logger.log('Restoring file paths from PNE file');
                    
                    // 還原 PDF 路徑
                    if (data.filePaths.pdfPath) {
                        localStorage.setItem('pne_floorplan_filename', data.filePaths.pdfPath);
                    }
                    if (data.filePaths.pdfData) {
                        localStorage.setItem('pne_floorplan_data', data.filePaths.pdfData);
                    }
                    
                    // 還原照片資料夾路徑
                    if (data.filePaths.photoFolderPath) {
                        folderNameDisplay.textContent = data.filePaths.photoFolderPath;
                        window.logger.log('Restored folder name:', data.filePaths.photoFolderPath);
                    }
                    
                    // 如果有照片檔案路徑，嘗試自動載入照片
                    if (data.filePaths.photoFilePaths && data.filePaths.photoFilePaths.length > 0) {
                        window.logger.log('Found photo file paths in PNE file, attempting to auto-load photos');
                        await autoLoadPhotosFromPaths(data.filePaths.photoFilePaths, data.photoMetadata);
                    }
                    
                    // 更新UI狀態
                    updateFolderDisplay();
                    updateAddPhotosButtonVisibility();
                    window.logger.log('Updated folder display and add photos button visibility');
                }
                
                // 新增：處理文件引用系統 - 跳過文件顯示容器，直接執行自動流程
                if (data.files && data.files.length > 0) {
                    window.logger.log('Found file references in PNE file:', data.files.length);
                    
                    // 不顯示文件顯示容器，直接執行自動流程
                    window.logger.log('Skipping file display container, executing auto workflow...');
                    
                    // 1. 首先確保照片預覽區域已準備好
                    setTimeout(() => {
                        // 確保照片網格可見
                        const photoGrid = document.getElementById('photoGrid');
                        if (photoGrid) {
                            photoGrid.style.display = 'grid';
                            window.logger.log('Photo preview area opened');
                        }
                        
                        // 更新UI狀態
                        updateFolderDisplay();
                        updateAddPhotosButtonVisibility();
                        window.logger.log('Updated UI state after opening photo preview area');
                        
                        // 2. 自動打開繪圖模式
                        setTimeout(() => {
                            const floorPlanOverlay = document.getElementById('floorPlanOverlay');
                            if (floorPlanOverlay) {
                                floorPlanOverlay.style.display = 'flex';
                                window.logger.log('Drawing mode opened automatically');
                                
                                // 調用必要的初始化函數
                                if (typeof checkLabelsDataAndShowContent === 'function') {
                                    // 在調用前檢查PDF數據狀態
                                    window.logger.log('Before checkLabelsDataAndShowContent - PDF data check:');
                                    window.logger.log('pne_floorplan_base64 exists:', !!localStorage.getItem('pne_floorplan_base64'));
                                    window.logger.log('pne_floorplan_data exists:', !!localStorage.getItem('pne_floorplan_data'));
                                    window.logger.log('pne_floorplan_filename exists:', !!localStorage.getItem('pne_floorplan_filename'));
                                    
                                    checkLabelsDataAndShowContent();
                                    
                                    // 在調用後再次檢查PDF數據狀態
                                    window.logger.log('After checkLabelsDataAndShowContent - PDF data check:');
                                    window.logger.log('pne_floorplan_base64 exists:', !!localStorage.getItem('pne_floorplan_base64'));
                                    window.logger.log('pne_floorplan_data exists:', !!localStorage.getItem('pne_floorplan_data'));
                                    window.logger.log('pne_floorplan_filename exists:', !!localStorage.getItem('pne_floorplan_filename'));
                                }
                                
                                // 初始化滑塊功能
                                setTimeout(() => {
                                    if (typeof window.initLabelSizeAdjustment === 'function') {
                                        window.initLabelSizeAdjustment();
                                    }
                                    if (typeof window.initDefectMarkSizeAdjustment === 'function') {
                                        window.initDefectMarkSizeAdjustment();
                                    }
                                }, 100);
                                
                                // 3. 自動載入之前的PDF文件
                                setTimeout(() => {
                                    // 檢查PNE文件中的PDF數據
                                    let pdfFileReference = null;
                                    let pdfFileName = '';
                                    
                                    // 從filePaths中獲取PDF文件引用
                                    if (data.filePaths && data.filePaths.pdfFileReference) {
                                        pdfFileReference = data.filePaths.pdfFileReference;
                                        pdfFileName = pdfFileReference.name || '';
                                        window.logger.log('Found PDF file reference in PNE file:', pdfFileName);
                                    }
                                    
                                    // 也檢查是否有PDF路徑
                                    if (!pdfFileName && data.filePaths && data.filePaths.pdfPath) {
                                        pdfFileName = data.filePaths.pdfPath;
                                        window.logger.log('Found PDF path in PNE file:', pdfFileName);
                                    }
                                    
                                    if (pdfFileName) {
                                        window.logger.log('Auto-loading previous PDF file:', pdfFileName);
                                        
                                        // 檢查是否有PDF的base64數據
                                        const pdfBase64 = localStorage.getItem('pne_floorplan_base64');
                                        window.logger.log('PDF base64 data check:', {
                                            exists: !!pdfBase64,
                                            length: pdfBase64 ? pdfBase64.length : 0,
                                            firstChars: pdfBase64 ? pdfBase64.substring(0, 50) : 'N/A'
                                        });
                                        
                                        if (pdfBase64) {
                                            try {
                                                // 將base64數據轉換為ArrayBuffer
                                                const binaryString = atob(pdfBase64);
                                                const arrayBuffer = new ArrayBuffer(binaryString.length);
                                                const uint8Array = new Uint8Array(arrayBuffer);
                                                for (let i = 0; i < binaryString.length; i++) {
                                                    uint8Array[i] = binaryString.charCodeAt(i);
                                                }
                                                
                                                // 使用現有的PDF載入函數
                                                if (typeof loadPDFFromArrayBuffer === 'function') {
                                                    loadPDFFromArrayBuffer(arrayBuffer, pdfFileName);
                                                    window.logger.log('PDF loaded successfully from base64 data');
                                                } else {
                                                    window.logger.log('loadPDFFromArrayBuffer function not available');
                                                    if (typeof showNotification === 'function') {
                                                        showNotification(`檢測到PDF文件：${pdfFileName}。請手動上傳PDF文件以查看樓層平面圖。`, 'info');
                                                    }
                                                }
                                            } catch (error) {
                                                window.logger.error('Error loading PDF from base64:', error);
                                                if (typeof showNotification === 'function') {
                                                    showNotification('載入PDF文件時發生錯誤，請手動上傳PDF文件。', 'error');
                                                }
                                            }
                                        } else {
                                            window.logger.log('No PDF base64 data found in localStorage');
                                            if (typeof showNotification === 'function') {
                                                showNotification(`檢測到PDF文件引用：${pdfFileName}。請重新上傳PDF文件以查看樓層平面圖。`, 'info');
                                            }
                                        }
                                    } else {
                                        window.logger.log('No previous PDF file found in PNE file');
                                    }
                                }, 500); // 等待繪圖模式完全打開
                            } else {
                                window.logger.log('floorPlanOverlay element not found');
                            }
                        }, 300); // 等待照片預覽區域準備好
                    }, 200); // 等待PNE文件載入完成
                }
                
                // 注意：不再還原分類內容資料，避免重新載入後仍顯示已分配狀態
                
                // 還原資料夾路徑
                if (data.uploadedFolderPath) {
                    folderNameDisplay.textContent = data.uploadedFolderPath;
                }
                
                // 注意：不再還原 localStorage，因為我們已經在開始時清除了所有數據
                // 現在只從 .pne 文件數據中恢復必要的數據
                
                // 還原樓層平面標籤
                if (data.floorPlanLabels) {
                    window.labels = Array.isArray(data.floorPlanLabels) ? data.floorPlanLabels : [];
                }
                
                // 還原樓層平面缺陷標記
                if (data.floorPlanDefectMarks) {
                    window.defectMarks = Array.isArray(data.floorPlanDefectMarks) ? data.floorPlanDefectMarks : [];
                }
                
                // 處理嵌入的 PDF 檔案
                if (data.embeddedPDF && data.embeddedPDF.hasEmbeddedPDF) {
                    window.logger.log('Found embedded PDF in PNE file:', data.embeddedPDF.filename);
                    
                    try {
                        // 將嵌入的 PDF 數據保存到 localStorage
                        localStorage.setItem('pne_floorplan_base64', data.embeddedPDF.base64Data);
                        localStorage.setItem('pne_floorplan_data', JSON.stringify(data.embeddedPDF.metadata));
                        localStorage.setItem('pne_floorplan_filename', data.embeddedPDF.filename);
                        
                        window.logger.log('Embedded PDF data saved to localStorage');
                        
                        // 自動載入 PDF 並進入繪圖模式
                        await loadEmbeddedPDFAndEnterDrawingMode(data.embeddedPDF);
                        
                    } catch (error) {
                        window.logger.error('Error processing embedded PDF:', error);
                        showNotification('載入嵌入的 PDF 檔案時發生錯誤', 'warning');
                    }
                }
                
                // 還原樓層平面圖視圖狀態
                if (data.floorPlanViewState) {
                    window.logger.log('Restoring floor plan view state:', data.floorPlanViewState);
                    
                    // 使用全局變量
                    if (typeof data.floorPlanViewState.scale === 'number') {
                        window.currentScale = data.floorPlanViewState.scale;
                    }
                    if (typeof data.floorPlanViewState.translateX === 'number') {
                        window.translateX = data.floorPlanViewState.translateX;
                    }
                    if (typeof data.floorPlanViewState.translateY === 'number') {
                        window.translateY = data.floorPlanViewState.translateY;
                    }
                    if (typeof data.floorPlanViewState.baseScale === 'number') {
                        if (typeof baseScale === 'undefined') {
                            window.baseScale = data.floorPlanViewState.baseScale;
                        } else {
                            baseScale = data.floorPlanViewState.baseScale;
                        }
                    }
                    if (typeof data.floorPlanViewState.labelSizeScale === 'number') {
                        window.labelSizeScale = data.floorPlanViewState.labelSizeScale;
                    }
                    if (typeof data.floorPlanViewState.defectMarkSizeScale === 'number') {
                        window.defectMarkSizeScale = data.floorPlanViewState.defectMarkSizeScale;
                    }
                    
                    // 更新 labelViewState
                    const currentScaleValue = window.currentScale || 1.0;
                    const translateXValue = window.translateX || 0;
                    const translateYValue = window.translateY || 0;
                    
                    if (typeof labelViewState !== 'undefined') {
                        labelViewState = {
                            scale: currentScaleValue,
                            tx: translateXValue,
                            ty: translateYValue
                        };
                    } else {
                        window.labelViewState = {
                            scale: currentScaleValue,
                            tx: translateXValue,
                            ty: translateYValue
                        };
                    }
                }
                
                // 還原 Header 欄位
                if (data.headerFields) {
                    try {
                        const h = data.headerFields;
                        const lid = document.getElementById('locationId');
                        const idate = document.getElementById('inspectionDate');
                        const floorInput = document.getElementById('floorHeader');
                        const areaInput = document.getElementById('areaNameHeader');
                        const roomInput = document.getElementById('roomNo');
                        const sortToggleEl = document.getElementById('sortToggle');
                        if (lid && typeof h.inspectionNo === 'string') lid.value = h.inspectionNo;
                        if (idate && typeof h.inspectionDate === 'string') idate.value = h.inspectionDate;
                        if (floorInput && typeof h.floor === 'string') floorInput.value = h.floor;
                        if (areaInput && typeof h.areaName === 'string') areaInput.value = h.areaName;
                        if (roomInput && typeof h.roomNo === 'string') roomInput.value = h.roomNo;
                        if (sortToggleEl && typeof h.sortEnabled === 'boolean') sortToggleEl.checked = h.sortEnabled;
                    } catch(_) {}
                }

                // 保存所有恢復的數據到 IndexedDB
                window.logger.log('Saving restored data to IndexedDB...');
                
                // 保存主要數據
                const mainData = {
                    submittedData: submittedData,
                    rowIdCounter: rowIdCounter,
                    photoFolders: photoFolders,
                    submittedDefectEntries: submittedDefectEntries,
                    photoMetadata: allPhotos,
                    folderName: folderNameDisplay.textContent || '',
                    submittedFilenames: Array.from(submittedFilenames || new Set())
                };
                await window.storageAdapter.setItemDirect('photoNumberExtractorData', mainData);
                window.logger.log('Main data saved to IndexedDB');
                
                // 保存樓層平面標籤和缺陷標記到 localStorage
                if (window.labels && window.labels.length > 0) {
                    if (typeof window.saveLabelsToStorage === 'function') {
                        window.saveLabelsToStorage();
                        window.logger.log('Labels saved to localStorage:', window.labels.length);
                    }
                }
                if (window.defectMarks && window.defectMarks.length > 0) {
                    saveDefectMarksToStorage();
                    window.logger.log('Defect marks saved to localStorage:', window.defectMarks.length);
                }
                
                window.logger.log('All data successfully saved to localStorage');
                
                // 恢復樓層平面圖視圖狀態和註解，並自動載入PDF
                if (data.floorPlanViewState || (window.labels && window.labels.length > 0) || (window.defectMarks && window.defectMarks.length > 0)) {
                    window.logger.log('Restoring floor plan view state and annotations from PNE data');
                    
                    // 保存視圖狀態到 localStorage
                    if (data.floorPlanViewState) {
                        try {
                            localStorage.setItem('pne_floorplan_view_state', JSON.stringify(data.floorPlanViewState));
                            window.logger.log('Floor plan view state saved to localStorage');
                        } catch (error) {
                            window.logger.error('Failed to save view state to localStorage:', error);
                        }
                    }
                    
                    // 初始化缺陷標記大小調整功能
                    if (typeof window.initDefectMarkSizeAdjustment === 'function') {
                        window.initDefectMarkSizeAdjustment();
                    }
                    
                    // 重新設置縮放和平移功能，確保在 PNE 文件載入後功能正常
                    window.logger.log('Re-initializing zoom and pan functionality after PNE file load');
                    if (typeof window.setupZoomAndPanEvents === 'function') {
                        window.setupZoomAndPanEvents();
                        window.logger.log('Zoom and pan events re-initialized successfully');
                    } else {
                        window.logger.log('setupZoomAndPanEvents function not available yet');
                    }
                    
                    // 檢查PDF文件引用（不再從base64載入）
                    if (data.filePaths && data.filePaths.pdfFileReference) {
                        window.logger.log('PDF file reference found in PNE file:', data.filePaths.pdfFileReference);
                        showNotification('樓層平面圖視圖狀態和註解已從 PNE 檔案中恢復。請重新上傳 PDF 檔案以查看樓層平面圖。', 'info');
                    } else if (data.filePaths && data.filePaths.pdfPath) {
                        window.logger.log('PDF file path found in PNE file:', data.filePaths.pdfPath);
                        showNotification('樓層平面圖視圖狀態和註解已從 PNE 檔案中恢復。請重新上傳 PDF 檔案以查看樓層平面圖。', 'info');
                    } else {
                        showNotification('樓層平面圖視圖狀態和註解已從 PNE 檔案中恢復，請手動上傳 PDF 檔案以查看', 'success');
                    }
                }
                
                // 更新表格計數
                updateTableCount();
                
                // 重建表格
                if (submittedData.length > 0) {
                    // 按檢查編號排序 submittedData
                    submittedData.sort((a, b) => {
                        const aNo = parseInt(a.locationId) || 0;
                        const bNo = parseInt(b.locationId) || 0;
                        return aNo - bNo;
                    });
                    
                    dataTableBody.innerHTML = '';
                    submittedData.forEach(row => {
                        addTableRow(row);
                    });
                }
                
                // 更新所有分類顯示，確保已提交狀態在圖片上反映
                categories.forEach(category => {
                    updateCategoryDisplay(category.id);
                });
                // 重新渲染照片以套用 submitted 樣式（如果已有照片）
                if (allPhotos && allPhotos.length > 0) {
                    const lazyObserver = initLazyLoading ? initLazyLoading() : null;
                    renderPhotos(allPhotos, lazyObserver);
                    
                    // 恢復照片提交狀態
                    if (data.photoSubmissionStatus) {
                        window.logger.log('Restoring photo submission status');
                        
                        // 只有在 photoSubmissionStatus.submittedPhotos 有數據時才覆蓋 submittedFilenames
                        if (data.photoSubmissionStatus.submittedPhotos && data.photoSubmissionStatus.submittedPhotos.length > 0) {
                            submittedFilenames = new Set(data.photoSubmissionStatus.submittedPhotos);
                            window.logger.log('Restored submittedFilenames from photoSubmissionStatus:', submittedFilenames.size);
                        } else {
                            window.logger.log('photoSubmissionStatus.submittedPhotos is empty, keeping existing submittedFilenames:', submittedFilenames.size);
                        }
                        
                        // 恢復照片分配狀態
                        if (data.photoSubmissionStatus.photoAssignments) {
                            Object.entries(data.photoSubmissionStatus.photoAssignments).forEach(([categoryId, photoNames]) => {
                                if (assignedPhotos[categoryId]) {
                                    assignedPhotos[categoryId] = new Set(photoNames);
                                }
                            });
                        }
                        
                        // 等待照片渲染完成後再更新狀態
                        setTimeout(() => {
                            updatePhotoSubmissionStatus();
                            // 驗證照片狀態是否與當前標籤數據一致
                            if (typeof updatePhotoStatusFromLabels === 'function') {
                                updatePhotoStatusFromLabels();
                            }
                        }, 100);
                    }
                } else {
                    // 沒有照片時提示重新選擇資料夾以恢復實體檔案
                    showReselectMessage();
                }
                
                // 無論是否有照片提交狀態數據，都要驗證照片狀態與標籤數據的一致性
                setTimeout(() => {
                    if (typeof updatePhotoStatusFromLabels === 'function') {
                        updatePhotoStatusFromLabels();
                    }
                }, 200);
                
                // 更新畫面
                updateFolderDisplay();
                if (typeof window.updateCategoryTablesFromInspectionRecords === 'function') {
    window.updateCategoryTablesFromInspectionRecords();
}
                if (typeof window.updateDefectSummaryTable === 'function') {
    window.updateDefectSummaryTable();
}
                
                // 更新缺陷分類內容顯示
                updateCategoryDisplay('j');
                
                // 確保縮放和平移功能在 PNE 文件載入後正常工作
                window.logger.log('Ensuring zoom and pan functionality is available after PNE file load');
                setTimeout(() => {
                    if (typeof window.setupZoomAndPanEvents === 'function') {
                        window.setupZoomAndPanEvents();
                        window.logger.log('Zoom and pan events set up after PNE file load');
                    } else {
                        window.logger.log('setupZoomAndPanEvents function not available, will retry later');
                        // 如果函數還不可用，稍後再試
                        setTimeout(() => {
                            if (typeof window.setupZoomAndPanEvents === 'function') {
                                window.setupZoomAndPanEvents();
                                window.logger.log('Zoom and pan events set up on retry');
                            }
                        }, 1000);
                    }
                }, 100);
                
                // 顯示載入成功訊息，包含統計資訊
                let successMsg = 'PNE 檔案載入成功！';
                if (data.totalPhotos) {
                    successMsg += ` (${data.totalPhotos} 張照片, ${data.totalAssignments || 0} 個分配)`;
                }
                if (data.filePaths && data.filePaths.pdfPath) {
                    successMsg += `, PDF 檔案已恢復`;
                }
                if (data.embeddedPDF && data.embeddedPDF.hasEmbeddedPDF) {
                    successMsg += `, PDF 檔案 "${data.embeddedPDF.filename}" 已載入`;
                }
                if (data.floorPlanLabels && data.floorPlanLabels.length > 0) {
                    successMsg += `, ${data.floorPlanLabels.length} 個標籤已恢復`;
                }
                if (data.floorPlanDefectMarks && data.floorPlanDefectMarks.length > 0) {
                    successMsg += `, ${data.floorPlanDefectMarks.length} 個缺陷標記已恢復`;
                }
                if (data.floorPlanViewState) {
                    successMsg += `, 視圖狀態已恢復 (縮放: ${Math.round((data.floorPlanViewState.scale || 1) * 100)}%)`;
                }
                if (data.exportDate) {
                    const exportDate = new Date(data.exportDate);
                    const timeDiff = Date.now() - exportDate.getTime();
                    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                    if (daysDiff > 0) {
                        successMsg += ` - 匯出於 ${daysDiff} 天前`;
                    }
                }
                
                showNotification(successMsg, 'success');
                
                // 保存到localStorage以保持一致性
                console.log('🔍 About to call saveDataToStorage...');
                console.log('🔍 Current submittedFilenames before save:', submittedFilenames.size, Array.from(submittedFilenames));
                saveDataToStorage();
                console.log('🔍 saveDataToStorage completed');
                
                // 更新缺陷標記大小UI和實際標記大小
                if (typeof updateDefectMarkSizeUI === 'function') {
                    updateDefectMarkSizeUI();
                }
                if (typeof updateAllDefectMarkSizes === 'function') {
                    updateAllDefectMarkSizes();
                }
                
            } catch (err) {
                showNotification('載入 PNE 檔案失敗: ' + err.message, 'error');
            }
        }
    });
    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
});

// Defects Report互動
const defectPreviewBtn = document.querySelector('.pne-dropdown-item[data-action="preview"]');
const defectPreviewPopup = document.getElementById('defectPreviewPopup');
const closeDefectPreview = document.getElementById('closeDefectPreview');
defectPreviewBtn.addEventListener('click', function() {
    // 關閉下拉選單
    const pneDropdown = document.querySelector('.pne-dropdown');
    if (pneDropdown) {
        pneDropdown.style.display = 'none';
    }
  defectPreviewPopup.style.display = 'flex';
});
closeDefectPreview.addEventListener('click', function() {
  defectPreviewPopup.style.display = 'none';
});
defectPreviewPopup.addEventListener('click', function(e) {
  if(e.target === defectPreviewPopup) defectPreviewPopup.style.display = 'none';
});


// Export PDF功能（暫時停用 - 功能即將推出）
const exportDefectPDF = document.getElementById('exportDefectPDF');
exportDefectPDF.addEventListener('click', function(e) {
  e.preventDefault();
  // 功能暫時停用
  showNotification('This function is coming soon!', 'info');
  return false;
  
  // 原始功能程式碼保留但停用
  /*
  const content = document.getElementById('pdfCanvas');
  const opt = {
    margin:       0.3,
    filename:     'Defect_Report.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(content).save();
  */
});

// 頁面載入時不自動顯示 defectPreviewPopup，且預設為隱藏
document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('defectPreviewPopup');
    if (popup) popup.style.display = 'none';
});



// Function to update location fields based on inspection number
function updateLocationFromInspectionNo(inspectionNo) {
    // Find the inspection record with matching inspection number
    const inspectionRecord = submittedData.find(row => row.locationId === inspectionNo);
    
    if (inspectionRecord) {
        // Update the location fields with data from inspection record
        document.getElementById('defectFloor').value = inspectionRecord.floor || '';
        document.getElementById('defectAreaName').value = inspectionRecord.areaName || '';
        document.getElementById('defectRoomNo').value = inspectionRecord.roomNo || '';
    } else {
        // Clear the fields if no matching inspection record found
        document.getElementById('defectFloor').value = '';
        document.getElementById('defectAreaName').value = '';
        document.getElementById('defectRoomNo').value = '';
    }
}

// Function to update table defects display
function updateTableDefectsDisplay() {
    // Update all table rows to refresh their defects display
    submittedData.forEach(rowData => {
        if (rowData.j && rowData.j !== 'N/A') {
            const rowElement = document.querySelector(`tr[data-id="${rowData.id}"]`);
            if (rowElement) {
                const defectsCell = rowElement.querySelector('.defects-cell');
                if (defectsCell) {
                    defectsCell.innerHTML = generateDefectsWithButtons(rowData.j, rowData.id);
                }
            }
        }
    });
}

// Function to update Inspection Records Defects based on inspection number
// Helper function to update photo number columns for an inspection record
// This function works the same way as updateCategoryDisplay for categories A-I
function updateInspectionRecordPhotoColumns(inspectionRecord) {
    const recordRowElement = document.querySelector(`tr[data-id="${inspectionRecord.id}"]`);
    if (recordRowElement) {
        const categories = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
        categories.forEach((cat, index) => {
            const columnIndex = index + 4; // Categories start at column 4
            
            // Get photo numbers for this category that belong to this inspection record
            const photoNumbers = [];
            
            // Check categoryNumbers for this category and filter by inspection record
            if (categoryNumbers[cat] && categoryNumbers[cat].length > 0) {
                categoryNumbers[cat].forEach(number => {
                    // Check if this photo number belongs to this inspection record
                    // by checking if any defect entry with this category and number belongs to this inspection record
                    const belongsToThisRecord = submittedDefectEntries.some(entry => 
                        entry.category === cat && 
                        entry.locationId === inspectionRecord.locationId && 
                        entry.numbers && 
                        entry.numbers.includes(number)
                    );
                    
                    if (belongsToThisRecord && !photoNumbers.includes(number)) {
                        photoNumbers.push(number);
                    }
                });
            }
            
            // Update the column with formatted numbers (same as updateCategoryDisplay)
            if (photoNumbers.length > 0) {
                const formattedNumbers = formatNumbers(photoNumbers.sort((a, b) => parseInt(a) - parseInt(b)));
                recordRowElement.children[columnIndex].textContent = formattedNumbers;
                inspectionRecord[cat] = formattedNumbers;
            } else {
                recordRowElement.children[columnIndex].textContent = 'N/A';
                inspectionRecord[cat] = 'N/A';
            }
        });
    }
}

// COMPREHENSIVE DATA RENEWAL SYSTEM
// This function handles all data updates when defects are moved between inspection records
// IMPORTANT: Only moves photos for Defects category (J), keeps other categories (A-I) in their original locations
function renewInspectionRecordData(defectEntry, newInspectionNo, oldInspectionNo = null) {
    window.logger.log('=== DATA RENEWAL SYSTEM ===');
    window.logger.log('Defect Entry:', defectEntry);
    window.logger.log('New Inspection No:', newInspectionNo);
    window.logger.log('Old Inspection No:', oldInspectionNo);
    
    // Step 1: Find the inspection records
    const newInspectionRecord = submittedData.find(row => row.locationId === newInspectionNo);
    const oldInspectionRecord = oldInspectionNo ? submittedData.find(row => row.locationId === oldInspectionNo) : null;
    
    if (!newInspectionRecord) {
        window.logger.error('New inspection record not found:', newInspectionNo);
        return;
    }
    
    // Step 2: Get photo filenames for this defect (ONLY FOR DEFECTS CATEGORY J)
    const defectPhotoFilenames = [];
    if (defectEntry.numbers && defectEntry.numbers.length > 0) {
        defectEntry.numbers.forEach(number => {
            allPhotos.forEach(file => {
                const fileName = file.name;
                const numberMatch = fileName.match(/\d+/);
                if (numberMatch && numberMatch[0] === number) {
                    defectPhotoFilenames.push(fileName);
                }
            });
        });
    }
    
    window.logger.log('Defect photo filenames (J category only):', defectPhotoFilenames);
    
    // Step 3: MOVE PHOTOS TO NEW INSPECTION RECORD AND UPDATE CATEGORY ASSIGNMENTS
    // When defect moves to new record, its photos must move to the same category in the new record
    // and be removed from the same category in the old record
    if (oldInspectionRecord && oldInspectionNo !== newInspectionNo) {
        window.logger.log('Moving defect photos between inspection records');
        
        // If this defect has a category (A-I), we need to update the category assignments
        if (defectEntry.category && defectEntry.category !== 'j') {
            window.logger.log(`Updating category ${defectEntry.category.toUpperCase()} assignments`);
            
            defectPhotoFilenames.forEach(filename => {
                const numberMatch = filename.match(/\d+/);
                if (numberMatch) {
                    const photoNumber = numberMatch[0];
                    
                    // Remove photo number from the same category in ALL inspection records
                    // because photo numbers must be unique per category across the system
                    submittedData.forEach(record => {
                        if (record.locationId !== newInspectionNo) {
                            // Check if this record has this photo number in the same category
                            const hasPhotoInSameCategory = submittedDefectEntries.some(entry => 
                                entry.category === defectEntry.category && 
                                entry.locationId === record.locationId && 
                                entry.numbers && 
                                entry.numbers.includes(photoNumber)
                            );
                            
                            if (hasPhotoInSameCategory) {
                                // Remove from old record's photoFilenames
                                const photoIndex = record.photoFilenames.indexOf(filename);
                                if (photoIndex > -1) {
                                    record.photoFilenames.splice(photoIndex, 1);
                                    window.logger.log(`Removed ${filename} from record ${record.locationId} (same category reassignment)`);
                                }
                                
                                // Update folder name for the affected record
                                updateInspectionRecordFolderName(record);
                            }
                        }
                    });
                    
                    // Remove from category numbers and assigned photos globally
                    const categoryNumberIndex = categoryNumbers[defectEntry.category].indexOf(photoNumber);
                    if (categoryNumberIndex > -1) {
                        categoryNumbers[defectEntry.category].splice(categoryNumberIndex, 1);
                        window.logger.log(`Removed photo number ${photoNumber} from category ${defectEntry.category.toUpperCase()} globally`);
                    }
                    
                    assignedPhotos[defectEntry.category].delete(filename);
                    window.logger.log(`Removed ${filename} from assigned photos for category ${defectEntry.category.toUpperCase()}`);
                }
            });
        }
    }
    
    // Step 4: Update photoFilenames for defect photos
    if (oldInspectionRecord && oldInspectionNo !== newInspectionNo) {
        // Remove defect photos from old record (they've already been removed from other categories above)
        defectPhotoFilenames.forEach(filename => {
            const index = oldInspectionRecord.photoFilenames.indexOf(filename);
            if (index > -1) {
                oldInspectionRecord.photoFilenames.splice(index, 1);
                window.logger.log(`Removed ${filename} from old record ${oldInspectionNo}`);
            }
        });
        
        // Add photos to new record (avoid duplicates)
        defectPhotoFilenames.forEach(filename => {
            if (!newInspectionRecord.photoFilenames.includes(filename)) {
                newInspectionRecord.photoFilenames.push(filename);
                window.logger.log(`Added ${filename} to new record ${newInspectionNo}`);
            }
        });
        
        // Update folder names if needed
        updateInspectionRecordFolderName(oldInspectionRecord);
        updateInspectionRecordFolderName(newInspectionRecord);
    }
    
    // Step 5: Update photo status in UI
    defectPhotoFilenames.forEach(filename => {
        const photoItems = document.querySelectorAll('.photo-item');
        for (const item of photoItems) {
            if (item.dataset.filename === filename) {
                const statusDiv = item.querySelector('.photo-status');
                if (statusDiv) {
                    statusDiv.textContent = newInspectionNo;
                }
            }
        }
    });
    
    // Step 6: Update photoFolders array
    if (oldInspectionRecord && oldInspectionNo !== newInspectionNo) {
        // Update old folder - remove defect photos
        const oldFolderIndex = photoFolders.findIndex(folder => folder.locationId === oldInspectionNo);
        if (oldFolderIndex !== -1) {
            defectPhotoFilenames.forEach(filename => {
                const photoIndex = photoFolders[oldFolderIndex].photos.indexOf(filename);
                if (photoIndex > -1) {
                    photoFolders[oldFolderIndex].photos.splice(photoIndex, 1);
                }
            });
            
            // If old folder is empty, remove it
            if (photoFolders[oldFolderIndex].photos.length === 0) {
                photoFolders.splice(oldFolderIndex, 1);
                window.logger.log(`Removed empty folder for ${oldInspectionNo}`);
            }
        }
        
        // Update new folder
        let newFolderIndex = photoFolders.findIndex(folder => folder.locationId === newInspectionNo);
        if (newFolderIndex === -1) {
            // Create new folder if it doesn't exist
            photoFolders.push({
                name: newInspectionRecord.folderName || `${newInspectionNo}_folder`,
                photos: [...defectPhotoFilenames],
                locationId: newInspectionNo
            });
            window.logger.log(`Created new folder for ${newInspectionNo}`);
        } else {
            // Add photos to existing folder (avoid duplicates)
            defectPhotoFilenames.forEach(filename => {
                if (!photoFolders[newFolderIndex].photos.includes(filename)) {
                    photoFolders[newFolderIndex].photos.push(filename);
                }
            });
        }
    }
    
    // Step 7: Save data to storage
    saveDataToStorage();
    
    window.logger.log('=== DATA RENEWAL COMPLETED ===');
    window.logger.log('Updated old record:', oldInspectionRecord);
    window.logger.log('Updated new record:', newInspectionRecord);
    window.logger.log('Updated photoFolders:', photoFolders);
    
    // VERIFICATION: Log the current state of categories after reassignment
    window.logger.log('=== VERIFICATION ===');
    window.logger.log('Current categoryNumbers:', categoryNumbers);
    window.logger.log('Current assignedPhotos:', assignedPhotos);
    
    // Check category reassignment results
    const categories = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    categories.forEach(cat => {
        const numbersInCategory = categoryNumbers[cat] || [];
        const photosInCategory = Array.from(assignedPhotos[cat] || []);
        window.logger.log(`Category ${cat.toUpperCase()}: Numbers=[${numbersInCategory.join(', ')}], Photos=[${photosInCategory.join(', ')}]`);
    });
}

// Helper function to update folder name based on current photos
function updateInspectionRecordFolderName(inspectionRecord) {
    if (!inspectionRecord.photoFilenames || inspectionRecord.photoFilenames.length === 0) {
        inspectionRecord.folderName = '';
        return;
    }
    
    const photoNumbers = [];
    inspectionRecord.photoFilenames.forEach(filename => {
        const numberMatch = filename.match(/\d+/);
        if (numberMatch) {
            photoNumbers.push(parseInt(numberMatch[0]));
        }
    });
    
    if (photoNumbers.length > 0) {
        const minNumber = Math.min(...photoNumbers);
        const maxNumber = Math.max(...photoNumbers);
        const folderDate = formatFolderDate(inspectionRecord.inspectionDateRaw || inspectionRecord.inspectionDate);
        inspectionRecord.folderName = `${inspectionRecord.locationId}_${folderDate} (${minNumber}-${maxNumber})`;
        window.logger.log(`Updated folder name: ${inspectionRecord.folderName}`);
    }
}
// DATA INTEGRITY VALIDATION SYSTEM
// This function validates and ensures data consistency across all data structures
function validateDataIntegrity() {
    window.logger.log('=== DATA INTEGRITY VALIDATION ===');
    
    let validationErrors = [];
    let fixedIssues = [];
    
    // 1. Validate submittedData consistency
    submittedData.forEach(record => {
        if (!record.photoFilenames) {
            record.photoFilenames = [];
            fixedIssues.push(`Fixed missing photoFilenames for record ${record.locationId}`);
        }
        
        // Ensure photoFilenames contains only valid filenames
        const validFilenames = [];
        record.photoFilenames.forEach(filename => {
            const fileExists = allPhotos.some(photo => photo.name === filename);
            if (fileExists) {
                validFilenames.push(filename);
            } else {
                fixedIssues.push(`Removed invalid filename ${filename} from record ${record.locationId}`);
            }
        });
        record.photoFilenames = validFilenames;
    });
    
    // 2. Validate photoFolders consistency
    photoFolders.forEach((folder, index) => {
        const relatedRecord = submittedData.find(record => record.locationId === folder.locationId);
        if (!relatedRecord) {
            photoFolders.splice(index, 1);
            fixedIssues.push(`Removed orphaned folder ${folder.name}`);
            return;
        }
        
        // Ensure folder photos match record photoFilenames
        const validPhotos = [];
        folder.photos.forEach(filename => {
            if (relatedRecord.photoFilenames.includes(filename)) {
                validPhotos.push(filename);
            } else {
                fixedIssues.push(`Removed invalid photo ${filename} from folder ${folder.name}`);
            }
        });
        folder.photos = validPhotos;
    });
    
    // 3. Validate categoryNumbers and assignedPhotos consistency
    categories.forEach(category => {
        const categoryId = category.id;
        
        // Ensure categoryNumbers has corresponding files in assignedPhotos
        const validNumbers = [];
        categoryNumbers[categoryId].forEach(number => {
            const hasCorrespondingFile = Array.from(assignedPhotos[categoryId]).some(filename => {
                const numberMatch = filename.match(/\d+/);
                return numberMatch && numberMatch[0] === number;
            });
            
            if (hasCorrespondingFile) {
                validNumbers.push(number);
            } else {
                fixedIssues.push(`Removed orphaned number ${number} from category ${categoryId.toUpperCase()}`);
            }
        });
        categoryNumbers[categoryId] = validNumbers;
        
        // Ensure assignedPhotos files exist in allPhotos
        const validAssignedPhotos = new Set();
        assignedPhotos[categoryId].forEach(filename => {
            const fileExists = allPhotos.some(photo => photo.name === filename);
            if (fileExists) {
                validAssignedPhotos.add(filename);
            } else {
                fixedIssues.push(`Removed invalid assigned photo ${filename} from category ${categoryId.toUpperCase()}`);
            }
        });
        assignedPhotos[categoryId] = validAssignedPhotos;
    });
    
    // 4. Validate submittedDefectEntries consistency
    // Only validate if submittedData is not empty (to avoid clearing defect entries after clearTable)
    if (submittedData.length > 0) {
        const validDefectEntries = [];
        submittedDefectEntries.forEach(entry => {
            const relatedRecord = submittedData.find(record => record.locationId === entry.locationId);
            if (relatedRecord) {
                validDefectEntries.push(entry);
            } else {
                fixedIssues.push(`Removed orphaned defect entry for location ${entry.locationId}`);
            }
        });
        window.submittedDefectEntries.length = 0;
        window.submittedDefectEntries.push(...validDefectEntries);
    } else {
        window.logger.log('validateDataIntegrity: submittedData is empty, skipping submittedDefectEntries validation');
    }
    
    // 5. Report validation results
    if (validationErrors.length > 0) {
        window.logger.warn('Data integrity validation errors:', validationErrors);
        showNotification(`Found ${validationErrors.length} data integrity issues`, 'warning');
    }
    
    if (fixedIssues.length > 0) {
        window.logger.log('Data integrity issues fixed:', fixedIssues);
        showNotification(`Fixed ${fixedIssues.length} data integrity issues`, 'success');
        
        // Save corrected data
        saveDataToStorage();
    }
    
    window.logger.log('=== DATA INTEGRITY VALIDATION COMPLETED ===');
    return { errors: validationErrors, fixes: fixedIssues };
}

function updateInspectionRecordsDefects(inspectionNo, defectEntry, oldInspectionNo = null) {
    // Generate the defect string
    const defectStr = `${defectEntry.range}_${defectEntry.description}`;
    
    // If old inspection number is provided and different from new one, remove from old record
    if (oldInspectionNo && oldInspectionNo !== inspectionNo) {
        window.logger.log('Moving defect from old record to new record');
        window.logger.log('Old inspection number:', oldInspectionNo);
        window.logger.log('New inspection number:', inspectionNo);
        
        const oldInspectionRecord = submittedData.find(row => row.locationId === oldInspectionNo);
        window.logger.log('Old inspection record found:', !!oldInspectionRecord);
        
        // Store the original photo numbers for this defect category before moving
        const originalPhotoNumbers = defectEntry.numbers ? [...defectEntry.numbers] : [];
        window.logger.log('Original photo numbers for defect:', originalPhotoNumbers);
        
        if (oldInspectionRecord && oldInspectionRecord.j && oldInspectionRecord.j !== 'N/A') {
            window.logger.log('Old inspection record defects before removal:', oldInspectionRecord.j);
            const existingDefects = oldInspectionRecord.j.split('\n');
            // Remove the defect by matching the range and description (without asterisk)
            const oldDefectPattern = `${defectEntry.range}_${defectEntry.description}`;
            window.logger.log('Looking for defect pattern to remove:', oldDefectPattern);
            
            const filteredDefects = existingDefects.filter(defect => {
                const cleanDefect = defect.trim().replace(/^\* /, ''); // Remove asterisk prefix
                const matches = cleanDefect !== oldDefectPattern;
                window.logger.log('Checking defect:', defect, 'clean:', cleanDefect, 'keep:', matches);
                return matches;
            });
            
            oldInspectionRecord.j = filteredDefects.length > 0 ? filteredDefects.join('\n') : 'N/A';
            window.logger.log('Old inspection record defects after removal:', oldInspectionRecord.j);
            
            // Update the old record's row
            const oldRowElement = document.querySelector(`tr[data-id="${oldInspectionRecord.id}"]`);
            if (oldRowElement) {
                oldRowElement.children[13].innerHTML = generateDefectsWithButtons(oldInspectionRecord.j, oldInspectionRecord.id);
                // Check if there are any remaining imminent danger defects
                const hasRemainingImminentDanger = filteredDefects.some(defect => defect.trim().startsWith('* '));
                oldInspectionRecord.hasImminentDanger = hasRemainingImminentDanger;
                oldRowElement.children[14].textContent = hasRemainingImminentDanger ? 'Yes' : 'No';
                window.logger.log('Updated old record row in table');
            }
        }
    }
    
    // Find the inspection record with matching inspection number
    const inspectionRecord = submittedData.find(row => row.locationId === inspectionNo);
    window.logger.log('New inspection record found:', !!inspectionRecord);
    
    if (inspectionRecord) {
        window.logger.log('New inspection record defects before update:', inspectionRecord.j);
        
        // First, remove the old version of this defect if it exists
        if (inspectionRecord.j && inspectionRecord.j !== 'N/A') {
            const existingDefects = inspectionRecord.j.split('\n');
            // Remove the old version by matching the range and description (without asterisk)
            const oldDefectPattern = `${defectEntry.range}_${defectEntry.description}`;
            window.logger.log('Removing old version of defect pattern:', oldDefectPattern);
            
            const filteredDefects = existingDefects.filter(defect => {
                const cleanDefect = defect.trim().replace(/^\* /, ''); // Remove asterisk prefix
                const matches = cleanDefect !== oldDefectPattern;
                window.logger.log('Checking existing defect:', defect, 'clean:', cleanDefect, 'keep:', matches);
                return matches;
            });
            inspectionRecord.j = filteredDefects.length > 0 ? filteredDefects.join('\n') : 'N/A';
        }
        
        window.logger.log('Adding new defect string:', defectStr);
        // Now add the updated defect
        if (!inspectionRecord.j || inspectionRecord.j === 'N/A') {
            inspectionRecord.j = defectStr;
        } else {
            inspectionRecord.j += '\n' + defectStr;
        }
        
        window.logger.log('New inspection record defects after update:', inspectionRecord.j);
        
        // 移除：不再自動更新 imminent danger 狀態，防止意外變更
        // if (typeof updateImminentDangerInInspectionRecords === 'function') {
        //     updateImminentDangerInInspectionRecords();
        // } else {
        //     // 備用邏輯：檢查缺陷記錄中的 imminent danger
        //     if (defectEntry.imminentDanger) {
        //         inspectionRecord.hasImminentDanger = true;
        //     } else {
        //         // Check if there are any remaining imminent danger defects
        //         const allDefects = inspectionRecord.j.split('\n');
        //         inspectionRecord.hasImminentDanger = allDefects.some(defect => defect.trim().startsWith('* '));
        //     }
        // }
        
        // Re-render the specific row in the inspection records table
        const rowElement = document.querySelector(`tr[data-id="${inspectionRecord.id}"]`);
        if (rowElement) {
            // Update the defects column (column 13, index 13)
            rowElement.children[13].innerHTML = generateDefectsWithButtons(inspectionRecord.j, inspectionRecord.id);
            // Update the imminent danger column (column 14, index 14)
            rowElement.children[14].textContent = inspectionRecord.hasImminentDanger ? 'Yes' : 'No';
        }
        

        
        // Update categoryNumbers and assignedPhotos when defect moves between inspection records
        if (oldInspectionNo && oldInspectionNo !== inspectionNo && defectEntry.category && defectEntry.category !== 'j') {
            window.logger.log('Updating categoryNumbers and assignedPhotos for defect move');
            window.logger.log('Defect category:', defectEntry.category);
            window.logger.log('Defect photo numbers:', originalPhotoNumbers);
    
            // The category reassignment has already been handled by renewInspectionRecordData
            // We just need to update the category display to reflect the change
            updateCategoryDisplay(defectEntry.category);
        }
        
        // AUTO-ASSIGN DEFECT PHOTOS TO SAME CATEGORY COLUMN
        // If defect has a category (A-I) and photo numbers, auto-assign them to the same category column
        // IMPORTANT: This only affects the defect's own category, not other categories
        if (defectEntry.category && defectEntry.category !== 'j' && defectEntry.numbers && defectEntry.numbers.length > 0) {
            window.logger.log('Auto-assigning defect photos to same category column');
            window.logger.log('Defect category:', defectEntry.category);
            window.logger.log('Defect photo numbers:', defectEntry.numbers);
    
            // SAFETY CHECK: Only modify the defect's own category, preserve other categories
            const targetCategory = defectEntry.category;
        
            // Add the photo numbers to the category if they're not already there
            let addedNumbers = 0;
            defectEntry.numbers.forEach(number => {
                if (!categoryNumbers[targetCategory].includes(number)) {
                    categoryNumbers[targetCategory].push(number);
                    addedNumbers++;
                }
                
                // Also add to assignedPhotos for visual feedback
                allPhotos.forEach(file => {
                    const fileName = file.name;
                    const numberMatch = fileName.match(/\d+/);
                    if (numberMatch && numberMatch[0] === number) {
                        assignedPhotos[targetCategory].add(fileName);
                }
                });
            });

            if (addedNumbers > 0) {
                window.logger.log(`Auto-assigned ${addedNumbers} photo numbers to category ${targetCategory.toUpperCase()}`);
                // Update the category display to show the new numbers
                updateCategoryDisplay(targetCategory);
        }
        
            // VERIFICATION: Check category reassignment results
            window.logger.log('=== CATEGORY REASSIGNMENT CHECK ===');
            window.logger.log(`Target category ${targetCategory.toUpperCase()} now has: ${categoryNumbers[targetCategory].length} numbers`);
            const otherCategories = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'].filter(cat => cat !== targetCategory);
            otherCategories.forEach(cat => {
                window.logger.log(`Category ${cat.toUpperCase()} has: ${categoryNumbers[cat].length} numbers`);
            });
        }
        
        // CALL COMPREHENSIVE DATA RENEWAL SYSTEM
        // This handles all data updates including photoFilenames, photoFolders, and UI updates
        if (oldInspectionNo && oldInspectionNo !== inspectionNo) {
            window.logger.log('Calling data renewal system for defect move');
            renewInspectionRecordData(defectEntry, inspectionNo, oldInspectionNo);
        
            // Validate data integrity after renewal
            validateDataIntegrity();
            }
        
        // Update photo number columns for both old and new inspection records after defect move
        if (oldInspectionNo && oldInspectionNo !== inspectionNo) {
            const oldInspectionRecord = submittedData.find(row => row.locationId === oldInspectionNo);
            
            window.logger.log('Updating photo number columns for both records');
            window.logger.log('Defect category:', defectEntry.category);
            window.logger.log('Defect photo numbers:', originalPhotoNumbers);
            
            // Update both old and new inspection records using the helper function
            if (oldInspectionRecord) {
                updateInspectionRecordPhotoColumns(oldInspectionRecord);
            }
            updateInspectionRecordPhotoColumns(inspectionRecord);
                    } else {
            // Even if not moving between records, update the current record
            updateInspectionRecordPhotoColumns(inspectionRecord);
        }
        
        showNotification(`Defect updated in Inspection Records for ${inspectionNo}`, 'success');
                    
        // Update category tables from inspection records
        if (typeof window.updateCategoryTablesFromInspectionRecords === 'function') {
    window.updateCategoryTablesFromInspectionRecords();
}
    }
}




// 移除：不再自動更新 Imminent Danger 欄位，防止意外變更
// function updateImminentDangerInInspectionRecords() {
//     // 此函數已被禁用，防止 Imminent Danger 欄位被自動修改
//     window.logger.log('Imminent danger auto-update disabled to prevent unwanted changes');
// }

// 文件顯示系統（基於 JSON 結構示例）
function createFileDisplaySystem(files) {
    window.logger.log('Creating file display system with', files.length, 'files');
    
    // 創建文件顯示容器
    let fileDisplayContainer = document.getElementById('fileDisplayContainer');
    if (!fileDisplayContainer) {
        fileDisplayContainer = document.createElement('div');
        fileDisplayContainer.id = 'fileDisplayContainer';
        fileDisplayContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            font-family: Arial, sans-serif;
        `;
        
        // 創建主容器
        const mainContainer = document.createElement('div');
        mainContainer.style.cssText = `
            background: white;
            border-radius: 12px;
            max-width: 90vw;
            max-height: 90vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        `;
        
        // 創建標題欄
        const header = document.createElement('div');
        header.style.cssText = `
            background: var(--primary, #1e88e5);
            color: white;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        `;
        header.innerHTML = `
            <h2 style="margin: 0; display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-file-import"></i> 文件預覽器
            </h2>
            <button id="closeFileDisplay" style="background: none; border: none; color: white; font-size: 24px; cursor: pointer;">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // 創建文件網格
        const fileGrid = document.createElement('div');
        fileGrid.id = 'fileGrid';
        fileGrid.style.cssText = `
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 20px;
            padding: 20px;
            overflow-y: auto;
            flex: 1;
        `;
        
        // 創建預覽容器
        const previewContainer = document.createElement('div');
        previewContainer.id = 'previewContainer';
        previewContainer.style.cssText = `
            background: #f8f9fa;
            padding: 20px;
            border-top: 1px solid #e9ecef;
            min-height: 200px;
            display: none;
        `;
        
        mainContainer.appendChild(header);
        mainContainer.appendChild(fileGrid);
        mainContainer.appendChild(previewContainer);
        fileDisplayContainer.appendChild(mainContainer);
        document.body.appendChild(fileDisplayContainer);
        
        // 添加關閉按鈕事件
        const closeBtn = header.querySelector('#closeFileDisplay');
        closeBtn.addEventListener('click', () => {
            fileDisplayContainer.remove();
        });
        
        // 點擊背景關閉
        fileDisplayContainer.addEventListener('click', (e) => {
            if (e.target === fileDisplayContainer) {
                fileDisplayContainer.remove();
            }
        });
    }
    
    // 渲染文件列表
    renderFileList(files);
}

function renderFileList(files) {
    const fileGrid = document.getElementById('fileGrid');
    const previewContainer = document.getElementById('previewContainer');
    
    if (!fileGrid) return;
    
    // 清空現有內容
    fileGrid.innerHTML = '';
    
    files.forEach(file => {
        const fileCard = document.createElement('div');
        fileCard.style.cssText = `
            background: white;
            border-radius: 8px;
            padding: 15px;
            text-align: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
        `;
        
        // 懸停效果
        fileCard.addEventListener('mouseenter', () => {
            fileCard.style.transform = 'translateY(-2px)';
            fileCard.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
        });
        
        fileCard.addEventListener('mouseleave', () => {
            fileCard.style.transform = 'translateY(0)';
            fileCard.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        });
        
        // 文件圖標
        const icon = file.type === 'image' ? '🖼️' : '📄';
        
        fileCard.innerHTML = `
            <div style="font-size: 48px; margin-bottom: 10px;">${icon}</div>
            <div style="font-weight: bold; margin-bottom: 5px; word-break: break-word;">${file.name}</div>
            <div style="color: #666; font-size: 0.9em; margin-bottom: 5px;">${file.type.toUpperCase()}</div>
            <div style="color: #888; font-size: 0.8em;">${file.size}</div>
        `;
        
        // 點擊事件
        fileCard.addEventListener('click', () => {
            previewFile(file);
            previewContainer.style.display = 'block';
        });
        
        fileGrid.appendChild(fileCard);
    });
}

function previewFile(file) {
    let previewContent = document.getElementById('previewContent');
    if (!previewContent) {
        const previewContainer = document.getElementById('previewContainer');
        if (!previewContainer) return;
        
        const content = document.createElement('div');
        content.id = 'previewContent';
        content.style.cssText = `
            text-align: center;
        `;
        previewContainer.appendChild(content);
        previewContent = content;
    }
    
    if (file.type === 'image') {
        if (file.dataURL) {
            // 使用 dataURL 顯示圖片
            previewContent.innerHTML = `
                <h3 style="color: var(--primary, #1e88e5); margin-bottom: 20px;">${file.name}</h3>
                <img src="${file.dataURL}" alt="${file.name}" style="max-width: 100%; max-height: 500px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);" onerror="handleImageError(this)">
                <p style="margin-top: 15px; color: #666;">上傳日期: ${new Date(file.uploadDate).toLocaleDateString()} | 大小: ${file.size}</p>
            `;
        } else {
            previewContent.innerHTML = `
                <h3 style="color: var(--primary, #1e88e5); margin-bottom: 20px;">${file.name}</h3>
                <div style="padding: 40px; color: #666;">
                    <i class="fas fa-image" style="font-size: 48px; margin-bottom: 15px;"></i>
                    <p>圖片數據不可用</p>
                    <p style="font-size: 0.9em;">路徑: ${file.path}</p>
                </div>
                <p style="margin-top: 15px; color: #666;">上傳日期: ${new Date(file.uploadDate).toLocaleDateString()} | 大小: ${file.size}</p>
            `;
        }
    } else if (file.type === 'pdf') {
        if (file.hasBase64Data) {
            // 嘗試從 localStorage 獲取 PDF base64 數據
            const pdfBase64 = localStorage.getItem('pne_floorplan_base64');
            if (pdfBase64) {
                const pdfDataUrl = `data:application/pdf;base64,${pdfBase64}`;
                previewContent.innerHTML = `
                    <h3 style="color: var(--primary, #1e88e5); margin-bottom: 20px;">${file.name}</h3>
                    <iframe src="${pdfDataUrl}" style="width: 100%; height: 600px; border: 1px solid #ddd; border-radius: 8px;" title="${file.name}"></iframe>
                    <p style="margin-top: 15px; color: #666;">如果 PDF 無法顯示，<a href="${pdfDataUrl}" target="_blank" style="color: var(--primary, #1e88e5);">點擊這裡下載</a></p>
                    <p style="margin-top: 10px; color: #666;">上傳日期: ${new Date(file.uploadDate).toLocaleDateString()} | 大小: ${file.size}</p>
                `;
            } else {
                previewContent.innerHTML = `
                    <h3 style="color: var(--primary, #1e88e5); margin-bottom: 20px;">${file.name}</h3>
                    <div style="padding: 40px; color: #666;">
                        <i class="fas fa-file-pdf" style="font-size: 48px; margin-bottom: 15px;"></i>
                        <p>PDF 數據不可用</p>
                        <p style="font-size: 0.9em;">路徑: ${file.path}</p>
                    </div>
                    <p style="margin-top: 15px; color: #666;">上傳日期: ${new Date(file.uploadDate).toLocaleDateString()} | 大小: ${file.size}</p>
                `;
            }
        } else {
            previewContent.innerHTML = `
                <h3 style="color: var(--primary, #1e88e5); margin-bottom: 20px;">${file.name}</h3>
                <div style="padding: 40px; color: #666;">
                    <i class="fas fa-file-pdf" style="font-size: 48px; margin-bottom: 15px;"></i>
                    <p>PDF 文件引用</p>
                    <p style="font-size: 0.9em;">路徑: ${file.path}</p>
                </div>
                <p style="margin-top: 15px; color: #666;">上傳日期: ${new Date(file.uploadDate).toLocaleDateString()} | 大小: ${file.size}</p>
            `;
        }
    }
}

function handleImageError(img) {
    img.style.display = 'none';
    const previewContent = document.getElementById('previewContent');
    if (previewContent) {
        previewContent.innerHTML += '<p style="color: red; margin-top: 15px;">錯誤：圖片無法載入</p>';
    }
}

// Resize Photo 浮動選單控制
document.addEventListener('DOMContentLoaded', function() {
  const resizePhotoWindow = document.getElementById('resizePhotoWindow');
  const resizePhotoOutputBtn = document.getElementById('resizePhotoOutputBtn');
  const resizePhotoCloseBtn = document.getElementById('resizePhotoCloseBtn');
  const resizePhotoMenuItem = document.querySelector('.pne-dropdown-item[data-action="resizephoto"]');
  const quickSelectPhotoFolderBtn = document.getElementById('quickSelectPhotoFolderBtn');
  const resizePhotoOptions = document.getElementById('resizePhotoOptions');
  const quickResizeOutputBtn = document.getElementById('quickResizeOutputBtn');
  const quickSelectedFolderPath = document.getElementById('quickSelectedFolderPath');
  let quickSelectedFiles = [];
  let quickSelectedFolder = '';

  // 檢查是否支援 webkitdirectory
  function isWebkitDirectorySupported() {
    const input = document.createElement('input');
    return 'webkitdirectory' in input && !/safari/i.test(navigator.userAgent);
  }

  // 點選下拉選單顯示浮動選單
  if (resizePhotoMenuItem && resizePhotoWindow) {
    resizePhotoMenuItem.addEventListener('click', function() {
      // 關閉下拉選單
      const pneDropdown = document.querySelector('.pne-dropdown');
      if (pneDropdown) {
        pneDropdown.style.display = 'none';
      }
      resizePhotoWindow.style.display = 'block';
      quickSelectedFiles = [];
      quickSelectedFolder = '';
      quickSelectedFolderPath.style.display = 'none';
      quickSelectedFolderPath.textContent = '';
    });
  }
  // 關閉按鈕
  if (resizePhotoCloseBtn && resizePhotoWindow) {
    resizePhotoCloseBtn.addEventListener('click', function() {
      resizePhotoWindow.style.display = 'none';
      quickSelectedFiles = [];
      quickSelectedFolder = '';
      quickSelectedFolderPath.style.display = 'none';
      quickSelectedFolderPath.textContent = '';
    });
  }
  // 點擊外部自動關閉
  document.addEventListener('mousedown', function(e) {
    if (resizePhotoWindow.style.display === 'block' && !resizePhotoWindow.contains(e.target) && !resizePhotoMenuItem.contains(e.target)) {
      resizePhotoWindow.style.display = 'none';
      quickSelectedFiles = [];
      quickSelectedFolder = '';
      quickSelectedFolderPath.style.display = 'none';
      quickSelectedFolderPath.textContent = '';
    }
  });
  // 選擇資料夾
  quickSelectPhotoFolderBtn.addEventListener('click', function() {
    if (!isWebkitDirectorySupported()) {
      showNotification('Your browser does not support folder selection. Please use Chrome/Edge for this feature.', 'error');
      return;
    }
    const input = document.createElement('input');
    input.type = 'file';
    input.webkitdirectory = true;
    input.multiple = true;
    input.accept = 'image/*';
    input.style.display = 'none';
    input.addEventListener('change', function(e) {
      if (e.target.files.length > 0) {
        quickSelectedFiles = Array.from(e.target.files).filter(file => /\.(jpe?g|png|gif|bmp|webp)$/i.test(file.name));
        // 取得資料夾路徑
        let folderPath = '';
        if (quickSelectedFiles.length > 0 && quickSelectedFiles[0].webkitRelativePath) {
          folderPath = quickSelectedFiles[0].webkitRelativePath.split('/')[0];
        }
        quickSelectedFolder = folderPath;
        quickSelectedFolderPath.textContent = folderPath ? `Selected: ${folderPath}` : '';
        quickSelectedFolderPath.style.display = folderPath ? 'block' : 'none';
      } else {
        quickSelectedFiles = [];
        quickSelectedFolder = '';
        quickSelectedFolderPath.style.display = 'none';
        quickSelectedFolderPath.textContent = '';
      }
    });
    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
  });
  // Output
  quickResizeOutputBtn.addEventListener('click', async function() {
    if (!quickSelectedFiles || quickSelectedFiles.length === 0) {
      showNotification('No photos selected!', 'error');
      return;
    }
    const size = parseInt(document.querySelector('input[name="resizePhotoSizeQuick"]:checked').value, 10);
    let defaultName = quickSelectedFolder ? quickSelectedFolder : 'Resized_Photos';
    let zipFileHandle = null;
    let useFSAPI = false;
    // 嘗試 File System Access API
    if (window.showSaveFilePicker) {
      try {
        zipFileHandle = await window.showSaveFilePicker({
          suggestedName: `${defaultName}.zip`,
          types: [{description: 'ZIP file', accept: {'application/zip': ['.zip']}}]
        });
        useFSAPI = true;
      } catch (e) {
        // 用戶取消
        return;
      }
    }
    const zip = new JSZip();
    for (const file of quickSelectedFiles) {
      const dataUrl = await resizeImageToSize(file, size);
      const blob = dataURLtoBlob(dataUrl);
      zip.file(file.name, blob);
    }
    const zipContent = await zip.generateAsync({type: "blob"});
    if (useFSAPI && zipFileHandle) {
      const writable = await zipFileHandle.createWritable();
      await writable.write(zipContent);
      await writable.close();
      showNotification('Resized photos exported as zip!', 'success');
    } else {
      saveAs(zipContent, `${defaultName}.zip`);
      showNotification('Resized photos exported as zip!', 'success');
    }
    resizePhotoWindow.style.display = 'none';
    quickSelectedFiles = [];
    quickSelectedFolder = '';
    quickSelectedFolderPath.style.display = 'none';
    quickSelectedFolderPath.textContent = '';
  });
});

// 監聽 header Inspection no. 欄位變化，及時同步到所有新增菜單
const headerInspectionNoInput = document.getElementById('locationId');
if (headerInspectionNoInput) {
    headerInspectionNoInput.addEventListener('input', function() {
        // 檢查重複並更新視覺狀態
        const inspectionNo = this.value.trim();
        updateDuplicateStatus(this, inspectionNo);
        
        // 重置標籤分配標記（用戶手動輸入時）
        isHeaderFromLabelAssignment = false;
        
        // Defects 新增菜單同步
        if (defectWindow && defectWindow.style.display !== 'none') {
            // 只有在 Assign 按鈕顯示時才同步（即新增模式）
            const defectAssignBtn = document.getElementById('defectAssignBtn');
            if (defectAssignBtn && defectAssignBtn.style.display !== 'none') {
                const defectInspectionNoInput = document.getElementById('defectInspectionNo');
                if (defectInspectionNoInput) {
                    defectInspectionNoInput.value = headerInspectionNoInput.value;
                    // 同時更新缺陷輸入框的重複狀態
                    updateDuplicateStatus(defectInspectionNoInput, inspectionNo);
                }
            }
        }
        // Defect Summary 編輯菜單同步（同一個 defectWindow，但 Assign 按鈕顯示才算新增）
        // 若未來有獨立的編輯菜單，請補充對應 ID
    });
    
    // 添加失焦事件監聽器
    headerInspectionNoInput.addEventListener('blur', function() {
        const inspectionNo = this.value.trim();
        updateDuplicateStatus(this, inspectionNo);
    });
}
// Floor Plan Functionality - Initialize after DOM is loaded
document.addEventListener('DOMContentLoaded', async function() {
    // 檢查PDF數據狀態
    window.logger.log('DOMContentLoaded - PDF data status check:');
    window.logger.log('pne_floorplan_base64 exists:', !!localStorage.getItem('pne_floorplan_base64'));
    window.logger.log('pne_floorplan_data exists:', !!localStorage.getItem('pne_floorplan_data'));
    window.logger.log('pne_floorplan_filename exists:', !!localStorage.getItem('pne_floorplan_filename'));
    
    // 檢查所有localStorage鍵
    window.logger.log('All localStorage keys:', Object.keys(localStorage));
    
    // 檢查PDF元數據內容
    const pdfData = localStorage.getItem('pne_floorplan_data');
    if (pdfData) {
        try {
            const parsed = JSON.parse(pdfData);
            window.logger.log('PDF metadata:', parsed);
        } catch (e) {
            window.logger.log('Error parsing PDF metadata:', e);
        }
    }
    
    // 修復：不要清理PDF數據存儲，保留文件引用和標籤/缺陷標記數據
    // clearPDFDataFromStorage(); // 註釋掉，避免清理已保存的數據
    
    // 再次檢查PDF數據狀態
    window.logger.log('After clearPDFDataFromStorage - PDF data status check:');
    window.logger.log('pne_floorplan_base64 exists:', !!localStorage.getItem('pne_floorplan_base64'));
    window.logger.log('pne_floorplan_data exists:', !!localStorage.getItem('pne_floorplan_data'));
    window.logger.log('pne_floorplan_filename exists:', !!localStorage.getItem('pne_floorplan_filename'));
    
    // 驗證PDF文件引用
    setTimeout(() => {
        validatePDFFileReference();
    }, 1000);
    const floorPlanOverlay = document.getElementById('floorPlanOverlay');
    const closeFloorPlanBtn = document.getElementById('closeFloorPlanBtn');
    const uploadFloorPlanBtn = document.getElementById('uploadFloorPlanBtn');
    const floorPlanFileInput = document.getElementById('floorPlanFileInput');
    const floorPlanUploadArea = document.getElementById('floorPlanUploadArea');
    const floorPlanViewer = document.getElementById('floorPlanViewer');
    const floorPlanCanvas = document.getElementById('floorPlanCanvas');


    // Load PDF.js
    if (typeof pdfjsLib === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
        document.head.appendChild(script);
        // 配置 PDF.js worker
        script.onload = function() {
            if (window.pdfjsLib) {
                pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
            }
        };
    }

    // Close floor plan overlay (do not reset or clear anything)
    function closeFloorPlan() {
        // Check if user is waiting to place defect mark
        if (window.isWaitingForDefectMarkPlacement) {
            window.logger.log('Cannot close floor plan - user must place defect mark first');
            showNotification('Please place the defect mark before closing the floor plan', 'warning');
            return;
        }
        
        floorPlanOverlay.style.display = 'none';
        
        // Reset Quick Label Switch when closing floor plan
        const quickLabelSwitch = document.getElementById('quickLabelSwitch');
        if (quickLabelSwitch) {
            quickLabelSwitch.checked = false;
            window.logger.log('Quick Label Switch reset to OFF when closing floor plan');
        }
        
        // Reset Quick Label mode states
        const floorPlanViewer = document.getElementById('floorPlanViewer');
        const quickLabelInstruction = document.getElementById('quickLabelInstruction');
        if (floorPlanViewer) {
            floorPlanViewer.style.cursor = 'grab';
        }
        if (quickLabelInstruction) {
            quickLabelInstruction.style.display = 'none';
        }
        // Reset mouse tracking
        mouseTrackingActive = false;
        
        // Reset display states when closing
        const labelsDataReminder = document.getElementById('labelsDataReminder');
        const uploadPlaceholder = document.getElementById('uploadPlaceholder');
        if (labelsDataReminder) labelsDataReminder.style.display = 'none';
        if (uploadPlaceholder) uploadPlaceholder.style.display = 'block';
        
        // Re-render photos to ensure submission status is correct
        if (allPhotos && allPhotos.length > 0) {
            console.log('🔍 Re-rendering photos after closing floor plan');
            console.log('🔍 submittedData status:', submittedData ? submittedData.length : 'null');
            console.log('🔍 window.labels status:', window.labels ? window.labels.length : 'null');
            console.log('🔍 submittedFilenames status:', submittedFilenames ? submittedFilenames.size : 'null');
            const lazyObserver = typeof initLazyLoading === 'function' ? initLazyLoading() : null;
            renderPhotos(allPhotos, lazyObserver);
            
            // 延遲確保狀態設置不會被其他函數覆蓋
            setTimeout(() => {
                console.log('🔍 Final photo status check after delay');
                document.querySelectorAll('.photo-item.submitted').forEach(item => {
                    const statusDiv = item.querySelector('.photo-status');
                    if (statusDiv && statusDiv.textContent.includes('Submitted to')) {
                        console.log(`🔍 Photo status preserved: ${statusDiv.textContent}`);
                    } else {
                        console.log(`🔍 Photo status missing, re-applying`);
                        // 重新應用狀態
                        const filename = item.getAttribute('data-filename');
                        if (filename && submittedFilenames.has(filename)) {
                            // 從 submittedData 查找檢查編號
                            let locationId = null;
                            if (submittedData && submittedData.length > 0) {
                                for (const row of submittedData) {
                                    if (row.photoFilenames && row.photoFilenames.includes(filename)) {
                                        locationId = row.locationId;
                                        break;
                                    }
                                }
                            }
                            if (locationId) {
                                statusDiv.textContent = `Submitted to ${locationId}`;
                                statusDiv.style.display = 'flex !important';
                                statusDiv.style.visibility = 'visible';
                                item.classList.add('submitted');
                                console.log(`🔍 Re-applied status: Submitted to ${locationId}`);
                            }
                        }
                    }
                });
            }, 500);
        }
    }

    // Close button event
    if (closeFloorPlanBtn) {
        closeFloorPlanBtn.addEventListener('click', closeFloorPlan);
    }

    // ESC key event
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && floorPlanOverlay.style.display !== 'none') {
            closeFloorPlan();
        }
    });

    // Double Command/Ctrl key shortcut to open Drawing mode (cross-platform)
    let commandKeyPressCount = 0;
    let commandKeyTimer = null;
    
    document.addEventListener('keydown', function(e) {
        // Check if Command key (Mac) or Ctrl key (Windows) is pressed
        // Also check for Windows key (e.metaKey on Windows)
        const isCommandKey = e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey; // Mac Command key
        const isCtrlKey = e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey; // Windows Ctrl key
        const isWindowsKey = e.metaKey && e.ctrlKey && !e.altKey && !e.shiftKey; // Windows key
        
        // Don't interfere with copy/paste operations (Ctrl+C, Ctrl+V, Cmd+C, Cmd+V)
        if (e.key === 'c' || e.key === 'v' || e.key === 'C' || e.key === 'V') {
            return; // Allow normal copy/paste to work
        }
        
        if (isCommandKey || isCtrlKey || isWindowsKey) {
            commandKeyPressCount++;
            
            // Clear any existing timer
            if (commandKeyTimer) {
                clearTimeout(commandKeyTimer);
            }
            
            // Set a timer to reset the count after 500ms
            commandKeyTimer = setTimeout(() => {
                commandKeyPressCount = 0;
            }, 500);
            
            // If double click detected (count >= 2)
            if (commandKeyPressCount >= 2) {
                e.preventDefault();
                commandKeyPressCount = 0;
                
                // Open Drawing mode
                if (floorPlanOverlay.style.display === 'none' || !floorPlanOverlay.style.display) {
                    floorPlanOverlay.style.display = 'flex';
                    checkLabelsDataAndShowContent();
                    
                    // 初始化滑塊功能
                    setTimeout(() => {
                        if (typeof window.initLabelSizeAdjustment === 'function') {
                            window.initLabelSizeAdjustment();
                        }
                        if (typeof window.initDefectMarkSizeAdjustment === 'function') {
                            window.initDefectMarkSizeAdjustment();
                        }
                    }, 100);
                    
                    // Show appropriate notification based on platform
                    const keyName = isCommandKey ? 'Command' : (isCtrlKey ? 'Ctrl' : 'Windows');
                    showNotification(`Drawing mode opened (Double ${keyName} key)`, 'info');
                }
            }
        }
    });

    // Add label shortcut key: Cmd+E (Mac) / Ctrl+E (Windows)
    document.addEventListener('keydown', function(e) {
        // Check if Cmd+E (Mac) or Ctrl+E (Windows) is pressed
        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        const isCmdE = isMac && e.metaKey && e.key === 'e' && !e.ctrlKey && !e.altKey && !e.shiftKey;
        const isCtrlE = !isMac && e.ctrlKey && e.key === 'e' && !e.metaKey && !e.altKey && !e.shiftKey;
        
        if (isCmdE || isCtrlE) {
            e.preventDefault();
            
            // Check if floor plan is loaded
            if (!floorPlanCanvas) {
                showNotification('Please upload a floor plan first', 'warning');
                return;
            }
            
            // Enter label creation mode
            enterLabelCreationMode();
            
            // Focus on inspection no. input after a short delay
            setTimeout(() => {
                const inputInspectionNo = document.getElementById('labelInspectionNo');
                if (inputInspectionNo) {
                    inputInspectionNo.focus();
                    inputInspectionNo.select(); // Select existing text
                }
            }, 100);
        }
    });

    // Upload button event
    if (uploadFloorPlanBtn) {
        uploadFloorPlanBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation(); // Prevent global click handler interference
            window.logger.log('Upload floor plan button clicked in Chrome');
            // Preferred: File System Access API
            if (window.showOpenFilePicker) {
                (async () => {
                    try {
                        const [handle] = await window.showOpenFilePicker({
                            types: [{description: 'PDF', accept: {'application/pdf': ['.pdf']}}]
                        });
                        if (handle) {
                            try { await window.storageAdapter.setItem('pne_pdf_file_handle', handle); } catch (e) {}
                            const file = await handle.getFile();
                            uploadFloorPlanBtn.textContent = 'Loading...';
                            uploadFloorPlanBtn.disabled = true;
                            const arrayBuffer = await file.arrayBuffer();
                            await loadPDFFromArrayBuffer(arrayBuffer, file.name);
                            uploadFloorPlanBtn.textContent = 'Choose File';
                            uploadFloorPlanBtn.disabled = false;
                            floorPlanUploadArea.style.display = 'none';
                            floorPlanViewer.style.display = 'flex';
                        }
                    } catch (err) {
                        // fallback to input
            floorPlanFileInput.click();
                    }
                })();
            } else {
                floorPlanFileInput.click();
            }
        });
    }

    // Label state - 使用新的標籤層系統
    const labelLayer = document.getElementById('labelLayer');
    const labelModalOverlay = document.getElementById('labelModalOverlay');
    const addLabelBtn = document.getElementById('addLabelBtn');
    const labelCreateBtn = document.getElementById('labelCreateBtn');
    const labelCancelBtn = document.getElementById('labelCancelBtn');
    const inputInspectionNo = document.getElementById('labelInspectionNo');
    const inputFloor = document.getElementById('labelFloor');
    const inputAreaName = document.getElementById('labelAreaName');
    const inputRoomNo = document.getElementById('labelRoomNo');
    const inputInspectionDate = document.getElementById('labelInspectionDate');
    
    // Add real-time validation for duplicate inspection numbers in label creation form
    if (inputInspectionNo) {
        inputInspectionNo.addEventListener('input', function() {
            const inspectionNo = this.value.trim();
            const isDuplicate = updateDuplicateStatus(this, inspectionNo);
            
            // Show warning message if duplicate
            if (isDuplicate) {
                // Remove any existing warning
                const existingWarning = this.parentNode.querySelector('.duplicate-warning');
                if (existingWarning) {
                    existingWarning.remove();
                }
                
                // Add warning message after the input element
                const warning = document.createElement('div');
                warning.className = 'duplicate-warning';
                warning.style.color = '#ff0000';
                warning.style.fontSize = '12px';
                warning.style.marginTop = '4px';
                warning.style.marginBottom = '8px';
                warning.textContent = 'This inspection number already exists. Please use a different number.';
                
                // Insert the warning after the input element
                this.parentNode.insertBefore(warning, this.nextSibling);
            } else {
                // Remove warning if not duplicate
                const existingWarning = this.parentNode.querySelector('.duplicate-warning');
                if (existingWarning) {
                    existingWarning.remove();
                }
            }
        });
    }

    // 為檢查日期輸入框添加事件監聽器，以便更新"Assign to New Record"按鈕狀態
    if (inputInspectionDate) {
        inputInspectionDate.addEventListener('input', function() {
            updateAssignButtonState();
        });
    }
    
    // 為標籤檢查號碼輸入框添加重複檢查
    if (inputInspectionNo) {
        inputInspectionNo.addEventListener('input', function() {
            const inspectionNo = this.value.trim();
            updateDuplicateStatus(this, inspectionNo);
        });
        
        inputInspectionNo.addEventListener('blur', function() {
            const inspectionNo = this.value.trim();
            updateDuplicateStatus(this, inspectionNo);
        });
    }

    // 設置為全局變數，以便滑塊功能可以訪問
    window.labels = []; // {id, x, y, inspectionNo, floor, areaName, roomNo, inspectionDate}
    window.defectMarks = []; // {id, x, y, defectNo, recordDate, photoNo, canvasPosition}
    window.isWaitingForDefectMarkPlacement = false; // Track if user needs to place defect mark
    const LABELS_LS_KEY = 'pne_floorplan_labels';
    const DEFECT_MARKS_LS_KEY = 'pne_floorplan_defect_marks';
    const VIEW_LS_KEY = 'pne_floorplan_view';
    let labelViewState = { scale: 1, tx: 0, ty: 0 };
    
    // 函數聲明 - 解決函數提升問題
    // 這些函數將在後面定義，使用 var 聲明來避免提升問題
    var loadLabelsFromStorage, loadDefectMarksFromStorage, redrawLabels, redrawDefectMarks;
    var initLabelSizeAdjustment, initDefectMarkSizeAdjustment, setupZoomAndPanEvents;
    
    
    
    
    // 載入標籤數據功能
    loadLabelsFromStorage = async function() {
        try {
            const parsed = await window.storageAdapter.getItem(LABELS_LS_KEY);
            window.logger.log('Raw labels data from storage:', parsed);
            if (!parsed) {
                window.logger.log('No labels data found in storage');
                return;
            }
            window.logger.log('Parsed labels data:', parsed);
            if (Array.isArray(parsed)) {
                window.labels = parsed;
                window.logger.log('Labels array updated:', window.labels);
            } else {
                window.logger.log('Parsed data is not an array:', typeof parsed);
            }
        } catch(error) {
            window.logger.error('Error loading labels from storage:', error);
        }
    };
    
    // 載入缺陷標記數據功能
    loadDefectMarksFromStorage = async function() {
        try {
            window.logger.log('loadDefectMarksFromStorage called, skipDefectMarksLoad:', window.skipDefectMarksLoad);
            
            // 檢查是否應該跳過載入（頁面重新載入時）
            if (window.skipDefectMarksLoad) {
                window.logger.log('Skipping defect marks load due to skipDefectMarksLoad flag');
                window.defectMarks = [];
                return;
            }
            
            const parsed = await window.storageAdapter.getItem(DEFECT_MARKS_LS_KEY);
            window.logger.log('Raw defect marks data from storage:', parsed);
            if (!parsed) {
                window.logger.log('No defect marks data found in storage');
                window.defectMarks = [];
                return;
            }
            window.logger.log('Parsed defect marks data:', parsed);
            if (Array.isArray(parsed)) {
                window.defectMarks = parsed;
                window.logger.log('Defect marks array updated with', window.defectMarks.length, 'defect marks');
            } else {
                window.logger.log('Parsed defect marks data is not an array:', typeof parsed);
            }
        } catch(error) {
            window.logger.error('Error loading defect marks from storage:', error);
        }
    };
    
    // 缺陷標記大小管理 - 使用全局變量
    window.defectMarkSizeScale = window.defectMarkSizeScale || 24; // 默認大小 24px
    const DEFECT_MARK_SIZE_LS_KEY = 'pne_floorplan_defect_mark_size';
    const deviceScale = window.devicePixelRatio || 1;
    
    // 簡化的變換狀態 - 使用全局變量
    // 使用全局變量 window.currentScale, window.translateX, window.translateY
    window.baseScale = window.baseScale || 1.0;
    
    // 標籤大小調整狀態 - 使用全局變量
    window.labelSizeScale = window.labelSizeScale || 24; // 默認24px

    window.saveLabelsToStorage = async function() {
        try { 
            await window.storageAdapter.setItem(LABELS_LS_KEY, window.labels); 
            window.logger.log('Labels saved to storage:', window.labels);
        } catch(error) { 
            window.logger.error('Error saving labels to storage:', error);
        }
    };
    window.saveDefectMarksToStorage = async function() {
        try { 
            await window.storageAdapter.setItem(DEFECT_MARKS_LS_KEY, window.defectMarks); 
            window.logger.log('Defect marks saved to storage:', window.defectMarks);
        } catch(error) { 
            window.logger.error('Error saving defect marks to storage:', error);
        }
    };
    
    function saveDefectMarkSizeToLocalStorage() {
        try { 
            localStorage.setItem(DEFECT_MARK_SIZE_LS_KEY, defectMarkSizeScale.toString()); 
            window.logger.log('Defect mark size saved to storage:', defectMarkSizeScale);
        } catch(error) { 
            window.logger.error('Error saving defect mark size to storage:', error);
        }
    }
    
    function loadDefectMarkSizeFromLocalStorage() {
        try {
            const raw = localStorage.getItem(DEFECT_MARK_SIZE_LS_KEY);
            if (!raw) return;
            const parsed = parseInt(raw);
            if (!isNaN(parsed) && parsed >= 5 && parsed <= 60) {
                defectMarkSizeScale = parsed;
            }
        } catch(_) {}
    }
    function saveViewStateToLocalStorage() {
        try { localStorage.setItem(VIEW_LS_KEY, JSON.stringify(labelViewState)); } catch(_) {}
    }
    
    // 保存當前視圖狀態（包含完整的視圖信息）
    function saveCurrentViewState(filename = null) {
        try {
            // 優先使用傳入的文件名，否則從 localStorage 獲取
            const currentFilename = filename || localStorage.getItem('pne_floorplan_filename');
            window.logger.log('saveCurrentViewState called. currentFilename:', currentFilename, 'currentScale:', window.currentScale || 1, 'translateX:', window.translateX || 0, 'translateY:', window.translateY || 0);
            
            if (currentFilename) {
                const viewState = {
                    scale: window.currentScale || 1.0,
                    translateX: window.translateX || 0,
                    translateY: window.translateY || 0,
                    baseScale: baseScale || 1.0,
                    labelSizeScale: labelSizeScale || 24,
                    defectMarkSizeScale: defectMarkSizeScale || 24,
                    filename: currentFilename,
                    timestamp: Date.now()
                };
                
                // 保存到 localStorage，使用文件名作為鍵的一部分
                const viewStateKey = `pne_view_state_${currentFilename.replace(/[^a-zA-Z0-9]/g, '_')}`;
                localStorage.setItem(viewStateKey, JSON.stringify(viewState));
                window.logger.log('View state saved to localStorage with key:', viewStateKey, 'value:', viewState);
                
                // 同時更新 labelViewState
                if (typeof labelViewState !== 'undefined') {
                    labelViewState = {
                        scale: viewState.scale,
                        tx: viewState.translateX,
                        ty: viewState.translateY
                    };
                    saveViewStateToLocalStorage();
                    window.logger.log('labelViewState updated:', labelViewState);
                }
                
                window.logger.log('Current view state saved successfully:', viewState);
            } else {
                window.logger.log('No current filename found, cannot save view state');
            }
        } catch (error) {
            window.logger.error('Error saving current view state:', error);
        }
    }
    
    // 調試函數：列出所有保存的視圖狀態
    function listAllViewStates() {
        window.logger.log('=== All View States in localStorage ===');
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && (key.startsWith('pne_view_state_') || key === 'pne_floorplan_filename' || key === 'labelViewState')) {
                const value = localStorage.getItem(key);
                window.logger.log(`${key}:`, value);
            }
        }
        window.logger.log('=== End of View States ===');
    }
    
    // 將調試函數添加到全局作用域
    window.listAllViewStates = listAllViewStates;
    
    // 手動觸發視圖狀態恢復的測試函數
    window.testViewStateRestore = function() {
        window.logger.log('=== Testing View State Restore ===');
        const currentFilename = localStorage.getItem('pne_floorplan_filename');
        window.logger.log('Current filename:', currentFilename);
        
        if (currentFilename) {
            const viewStateKey = `pne_view_state_${currentFilename.replace(/[^a-zA-Z0-9]/g, '_')}`;
            const savedViewState = localStorage.getItem(viewStateKey);
            window.logger.log('Saved view state key:', viewStateKey);
            window.logger.log('Saved view state:', savedViewState);
            
            if (savedViewState) {
                try {
                    const viewState = JSON.parse(savedViewState);
                    window.logger.log('Parsed view state:', viewState);
                    
                    // 應用視圖狀態
                    // 使用全局變量
                    window.currentScale = viewState.scale || 1.0;
                    window.translateX = viewState.translateX || 0;
                    window.translateY = viewState.translateY || 0;
                        
                    if (typeof applyTransform === 'function') {
                        applyTransform();
                        window.logger.log('View state applied manually');
                    }
                } catch (error) {
                    window.logger.error('Error parsing view state:', error);
                }
            } else {
                window.logger.log('No saved view state found');
            }
        } else {
            window.logger.log('No current filename found');
        }
        window.logger.log('=== End Test ===');
    };
    
    function loadViewStateFromLocalStorage() {
        try {
            const raw = localStorage.getItem(VIEW_LS_KEY);
            if (!raw) return;
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === 'object') {
                const sc = Number(parsed.scale);
                const tx = Number(parsed.tx);
                const ty = Number(parsed.ty);
                if (!Number.isNaN(sc) && !Number.isNaN(tx) && !Number.isNaN(ty)) {
                    labelViewState = { scale: sc, tx, ty };
                    // 同步全域變數
                    window.currentScale = sc;
                    window.translateX = tx;
                    window.translateY = ty;
                }
            }
        } catch(_) {}
    }
    let editingLabelId = null;

    // 更新"Assign to New Record"按鈕狀態的函數
    function updateAssignButtonState() {
        const assignBtn = document.getElementById('assignToNewRecordBtn');
        if (!assignBtn) return;
        
        // 檢查檢查日期字段是否可見（只在編輯模式下可見）
        const inspectionDateField = document.getElementById('inspectionDateField');
        const isInspectionDateVisible = inspectionDateField && inspectionDateField.style.display !== 'none';
        
        if (!isInspectionDateVisible) {
            // 如果檢查日期字段不可見，禁用按鈕
            assignBtn.disabled = true;
            assignBtn.title = 'Inspection date field is required for this function';
            assignBtn.textContent = 'Assign to New Record';
            return;
        }
        
        const inspectionDate = inputInspectionDate ? inputInspectionDate.value.trim() : '';
        const hasInspectionDate = inspectionDate.length > 0;
        
        // 移除對assignedToRecord的檢查 - 已分配標籤不再變藍色
        // const isAlreadyAssigned = editingLabelId && window.labels.find(label => label.id === editingLabelId)?.assignedToRecord;
        
        // 只檢查是否已提交
        const isSubmitted = editingLabelId && window.labels.find(label => label.id === editingLabelId)?.submitted;
        
        if (isSubmitted) {
            // 如果標籤已經被提交，禁用按鈕並顯示相應提示
            assignBtn.disabled = true;
            assignBtn.title = 'This label is already assigned to a record';
            assignBtn.textContent = 'Already Assigned';
        } else if (hasInspectionDate) {
            // 如果有檢查日期且未分配，啟用按鈕
            assignBtn.disabled = false;
            assignBtn.title = 'Click to save and assign this label to new record';
            assignBtn.textContent = 'Save and Assign to New Record';
        } else {
            // 如果沒有檢查日期，禁用按鈕
            assignBtn.disabled = true;
            assignBtn.title = 'Please enter inspection date to enable this function';
            assignBtn.textContent = 'Save and Assign to New Record';
        }
    }

    function openLabelModal(prefill) {
        if (!labelModalOverlay) return;
        
        // 更新模態框標題
        const modalTitle = document.querySelector('.label-modal h4');
        if (modalTitle) {
            modalTitle.textContent = prefill ? 'Edit Label' : 'New Label';
        }
        
        // Show the modal first
        labelModalOverlay.style.display = 'flex';
        
        // Auto number functionality removed
        
        // 更新按鈕文字和狀態
        const createBtn = document.getElementById('labelCreateBtn');
        if (createBtn) {
            if (prefill) {
                // 檢查標籤是否已提交（亮藍色狀態）
                const currentLabel = window.labels.find(label => label.id === editingLabelId);
                const isSubmitted = currentLabel?.submitted;
                
                if (isSubmitted) {
                    createBtn.textContent = 'Already Assigned';
                    createBtn.disabled = true;
                    createBtn.title = 'This label is already assigned/submitted and cannot be modified';
                } else {
                    createBtn.textContent = 'Save';
                    createBtn.disabled = false;
                    createBtn.title = 'Save changes to this label';
                }
            } else {
                createBtn.textContent = 'Create';
                createBtn.disabled = false;
                createBtn.title = 'Create new label';
            }
        }
        
        // 處理"Assign to New Record"按鈕的顯示和狀態
        const assignBtn = document.getElementById('assignToNewRecordBtn');
        if (assignBtn) {
            if (prefill) {
                // 編輯模式下顯示按鈕
                assignBtn.style.display = 'inline-block';
                
                // 檢查標籤是否已提交（亮藍色狀態）
                const currentLabel = window.labels.find(label => label.id === editingLabelId);
                const isSubmitted = currentLabel?.submitted;
                
                if (isSubmitted) {
                    // 如果標籤已經被分配或提交，禁用按鈕
                    assignBtn.disabled = true;
                    assignBtn.title = 'This label is already assigned/submitted and cannot be reassigned';
                    assignBtn.textContent = 'Already Assigned';
                } else {
                // 根據檢查日期設置按鈕狀態
                updateAssignButtonState();
                }
            } else {
                // 創建模式下隱藏按鈕
                assignBtn.style.display = 'none';
            }
        }
        
        // 處理檢查日期字段的顯示/隱藏
        const inspectionDateField = document.getElementById('inspectionDateField');
        if (inspectionDateField) {
            if (prefill) {
                // 編輯模式下顯示檢查日期字段
                inspectionDateField.style.display = 'block';
                // 啟用檢查日期輸入框
                if (inputInspectionDate) {
                    inputInspectionDate.disabled = false;
                }
            } else {
                // 創建模式下隱藏檢查日期字段
                inspectionDateField.style.display = 'none';
                // 禁用並清空檢查日期輸入框
                if (inputInspectionDate) {
                    inputInspectionDate.disabled = true;
                    inputInspectionDate.value = '';
                }
            }
        }
        
        // 處理可選字段（floor、area name、room no.）的顯示/隱藏
        const floorField = document.getElementById('floorField');
        const areaNameField = document.getElementById('areaNameField');
        const roomNoField = document.getElementById('roomNoField');
        
        if (floorField && areaNameField && roomNoField) {
            if (prefill) {
                // 編輯模式下顯示這些字段
                floorField.classList.remove('hidden');
                areaNameField.classList.remove('hidden');
                roomNoField.classList.remove('hidden');
            } else {
                // 創建模式下隱藏這些字段
                floorField.classList.add('hidden');
                areaNameField.classList.add('hidden');
                roomNoField.classList.add('hidden');
            }
        }
        
        // 添加或移除編輯模式的提示信息和樣式
        let infoText = document.querySelector('.label-modal .edit-info');
        const labelModal = document.querySelector('.label-modal');
        
        if (prefill && !infoText) {
            // 添加編輯模式提示
            infoText = document.createElement('div');
            infoText.className = 'edit-info';
            infoText.textContent = `Editing label: ${prefill.inspectionNo || 'Label'} (ID: ${prefill.id})`;
            
            const labelForm = document.querySelector('.label-modal .label-form');
            if (labelForm) {
                labelForm.parentNode.insertBefore(infoText, labelForm);
            }
            
            // 添加編輯模式CSS類
            if (labelModal) {
                labelModal.classList.add('editing');
            }
        } else if (!prefill && infoText) {
            // 移除編輯模式提示
            infoText.remove();
            
            // 移除編輯模式CSS類
            if (labelModal) {
                labelModal.classList.remove('editing');
            }
        }
        
        if (prefill) {
            inputInspectionNo.value = prefill.inspectionNo || '';
            inputFloor.value = prefill.floor || '';
            inputAreaName.value = prefill.areaName || '';
            inputRoomNo.value = prefill.roomNo || '';
            inputInspectionDate.value = prefill.inspectionDate || '';
            
            // 在設置值後更新按鈕狀態
            updateAssignButtonState();
        } else {
            inputInspectionNo.value = '';
            inputFloor.value = '';
            inputAreaName.value = '';
            inputRoomNo.value = '';
            inputInspectionDate.value = '';
        }
    }
    
    

    function closeLabelModal() {
        if (labelModalOverlay) labelModalOverlay.style.display = 'none';
        editingLabelId = null;
        
        // 重置模態框標題和按鈕文字
        const modalTitle = document.querySelector('.label-modal h4');
        if (modalTitle) {
            modalTitle.textContent = 'New Label';
        }
        
        // Reset input field state
        inputInspectionNo.value = '';
        inputInspectionNo.disabled = false;
        inputInspectionNo.style.backgroundColor = '';
        
        // 重置可選字段的狀態
        const floorField = document.getElementById('floorField');
        const areaNameField = document.getElementById('areaNameField');
        const roomNoField = document.getElementById('roomNoField');
        
        if (floorField && areaNameField && roomNoField) {
            // 隱藏這些字段（創建模式）
            floorField.classList.add('hidden');
            areaNameField.classList.add('hidden');
            roomNoField.classList.add('hidden');
        }
        
        const createBtn = document.getElementById('labelCreateBtn');
        if (createBtn) {
            createBtn.textContent = 'Create';
            // 重置按鈕的 onclick 事件
            createBtn.onclick = null;
        }
        
        // 隱藏"Assign to New Record"按鈕
        const assignBtn = document.getElementById('assignToNewRecordBtn');
        if (assignBtn) {
            assignBtn.style.display = 'none';
        }
        
        // 移除編輯模式提示信息和樣式
        const infoText = document.querySelector('.label-modal .edit-info');
        if (infoText) {
            infoText.remove();
        }
        
        const labelModal = document.querySelector('.label-modal');
        if (labelModal) {
            labelModal.classList.remove('editing');
        }
        
        // 如果正在創建模式下，退出創建模式
        if (isLabelCreationMode) {
            exitLabelCreationMode();
        }
    }
    

    // 新的標籤渲染系統 - 使用DOM元素而非canvas
    window.redrawLabels = function() {
        if (!labelLayer) return;
        
        // 使用 window.labels 而不是局部變量 labels
        const labelsArray = window.labels || [];
        
        // 調試日誌：僅在開發環境下輸出
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            window.logger.log('redrawLabels called. Current labels count:', labelsArray.length);
        }
        
        // 清除所有現有標籤（但保留缺陷標記）
        const labelElements = labelLayer.querySelectorAll('.floor-plan-label');
        labelElements.forEach(element => element.remove());
        // 調試日誌：僅在開發環境下輸出
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            window.logger.log('Cleared existing labels from labelLayer');
        }
        
        // 為每個標籤創建DOM元素
        labelsArray.forEach(label => {
            createLabelElement(label);
        });
        
        // 更新所有標籤位置
        if (typeof window.updateAllLabelPositions === 'function') {
            window.updateAllLabelPositions();
        }
        
        // 調試日誌：僅在開發環境下輸出
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            window.logger.log('redrawLabels completed');
        }
    }
    
    // 更新所有缺陷標記位置
    window.updateAllDefectMarkPositions = function() {
        if (!labelLayer) return;
        
        // 獲取所有缺陷標記元素
        const dotElements = labelLayer.querySelectorAll('.defect-mark-dot');
        
        // 調試日誌：僅在開發環境下輸出
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            window.logger.log('updateAllDefectMarkPositions called. Found dot elements:', dotElements.length);
        }
        
        dotElements.forEach(dotElement => {
            const defectMarkId = dotElement.dataset.defectMarkId;
            const defectMarkData = window.defectMarks.find(d => d.id == defectMarkId);
            
            if (defectMarkData) {
                const textboxElement = labelLayer.querySelector(`.defect-mark-textbox[data-defect-mark-id="${defectMarkId}"]`);
                const connectionElement = labelLayer.querySelector(`.defect-mark-connection[data-defect-mark-id="${defectMarkId}"]`);
                
                window.logger.log('Found elements for defect mark:', defectMarkId, {
                    textbox: !!textboxElement,
                    connection: !!connectionElement
                });
                
                if (textboxElement && connectionElement) {
                    updateDefectMarkPosition(dotElement, textboxElement, connectionElement, defectMarkData);
                }
            }
        });
    };
    
    // 缺陷標記渲染系統
    window.redrawDefectMarks = function() {
        if (!labelLayer) {
            window.logger.log('redrawDefectMarks: labelLayer not found');
            return;
        }
        
        window.logger.log('redrawDefectMarks called. Current defect marks count:', window.defectMarks ? window.defectMarks.length : 'defectMarks is undefined');
        window.logger.log('Defect marks data:', window.defectMarks);
        
        // 清除所有現有缺陷標記（但保留標籤）
        const defectMarkElements = labelLayer.querySelectorAll('.defect-mark-dot, .defect-mark-textbox, .defect-mark-connection');
        defectMarkElements.forEach(element => element.remove());
        // 調試日誌：僅在開發環境下輸出
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            window.logger.log('Cleared existing defect marks from labelLayer');
        }
        
        // 為每個缺陷標記創建DOM元素
        if (window.defectMarks && window.defectMarks.length > 0) {
        window.defectMarks.forEach(defectMark => {
                window.logger.log('Creating defect mark element for:', defectMark.id);
            createDefectMarkElement(defectMark);
        });
        } else {
            window.logger.log('No defect marks to render');
        }
        
        // 更新所有缺陷標記位置
        updateAllDefectMarkPositions();
        
        // 同時更新標籤位置以確保同步
if (typeof window.updateAllLabelPositions === 'function') {
        window.updateAllLabelPositions();
    }
        
        // 調試日誌：僅在開發環境下輸出
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            window.logger.log('redrawDefectMarks completed');
        }
    };
    
                function createLabelElement(labelData) {
        const labelElement = document.createElement('div');
        labelElement.className = 'floor-plan-label';
        
        // 移除assigned類的添加 - 已分配標籤不再變藍色
        // if (labelData.assignedToRecord) {
        //     labelElement.classList.add('assigned');
        // }
        
        // 檢查標籤是否已提交，如果是則添加submitted類（藍色）
        if (labelData.submitted) {
            labelElement.classList.add('submitted');
        }
        
        // 設置標籤文字內容 - 只顯示檢查編號，不顯示日期
        let labelText = labelData.inspectionNo || `標籤 ${labelData.id}`;
        
        // 移除日期顯示邏輯 - 根據用戶要求，標籤只顯示檢查編號
        // 不再根據 assignedToRecord 或 submitted 狀態來決定是否顯示日期
        labelElement.textContent = labelText;
        labelElement.dataset.labelId = labelData.id;
        
        // 設置基礎字體大小
        const baseFontSize = labelData.baseFontSize || labelSizeScale;
        labelElement.style.fontSize = baseFontSize + 'px';
        
        // 設置初始padding值
        labelElement.style.padding = '8px 12px';
        
        // 確保標籤可以接收鼠標事件
        labelElement.style.pointerEvents = 'auto';
        labelElement.style.zIndex = '1000';
        
        // 調試日誌：僅在開發環境下輸出
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            window.logger.log('Label element created with pointer-events:', labelElement.style.pointerEvents);
            window.logger.log('Label element z-index:', labelElement.style.zIndex);
        }
        
        // 初始位置將由updateAllLabelPositions函數設置
        labelElement.style.left = '0px';
        labelElement.style.top = '0px';
        
        // 添加事件監聽器
        setupLabelEvents(labelElement, labelData);
        
        labelLayer.appendChild(labelElement);
        
        // 立即更新位置
        updateSingleLabelPosition(labelElement, labelData);
        
        return labelElement;
    }
    
    // 創建缺陷標記元素
    function createDefectMarkElement(defectMarkData) {
        // 創建紅色圓點
        const dotElement = document.createElement('div');
        dotElement.className = 'defect-mark-dot';
        dotElement.textContent = defectMarkData.defectNo;
        dotElement.dataset.defectMarkId = defectMarkData.id;
        
        // 設置圓點大小（基礎大小，縮放會在 updateDefectMarkPosition 中處理）
        const size = window.defectMarkSizeScale || 24;
        const scaledSize = size * (window.currentScale || 1);
        dotElement.style.width = scaledSize + 'px';
        dotElement.style.height = scaledSize + 'px';
        dotElement.style.fontSize = Math.max(8, scaledSize * 0.5) + 'px'; // 字體大小為縮放後圓點大小的50%，最小8px
        dotElement.style.borderRadius = (scaledSize / 2) + 'px'; // 確保圓點保持圓形
        dotElement.style.display = 'flex';
        dotElement.style.alignItems = 'center';
        dotElement.style.justifyContent = 'center';
        
        // 創建文字框
        const textboxElement = document.createElement('div');
        textboxElement.className = 'defect-mark-textbox';
        textboxElement.textContent = 'Photo no.: ' + defectMarkData.photoNo;
        textboxElement.dataset.defectMarkId = defectMarkData.id;
        
        // 設置文字框大小（基礎大小，縮放會在 updateDefectMarkPosition 中處理）
        const fontSize = Math.max(8, scaledSize * 0.4) + 'px'; // 字體大小為縮放後圓點大小的40%，最小8px
        textboxElement.style.fontSize = fontSize;
        
        // 設置固定的 padding 和 border-radius，不隨縮放變化
        textboxElement.style.padding = '5px';
        textboxElement.style.borderRadius = '4px';
        
        // 設置文字框為自動調整大小，保持 5px 邊距
        textboxElement.style.width = 'auto';
        textboxElement.style.height = 'auto';
        textboxElement.style.minWidth = 'fit-content';
        textboxElement.style.minHeight = 'fit-content';
        textboxElement.style.display = 'flex';
        textboxElement.style.alignItems = 'center';
        textboxElement.style.justifyContent = 'center';
        
        // 創建連接線容器
        const connectionElement = document.createElement('div');
        connectionElement.className = 'defect-mark-connection';
        connectionElement.dataset.defectMarkId = defectMarkData.id;
        connectionElement.style.position = 'absolute';
        connectionElement.style.pointerEvents = 'none';
        connectionElement.style.zIndex = '999';
        
        // 設置初始位置
        updateDefectMarkPosition(dotElement, textboxElement, connectionElement, defectMarkData);
        
        // 添加到標籤層
        labelLayer.appendChild(dotElement);
        labelLayer.appendChild(textboxElement);
        labelLayer.appendChild(connectionElement);
        
        window.logger.log('Defect mark elements added to labelLayer:', {
            dot: dotElement,
            textbox: textboxElement,
            connection: connectionElement
        });
        
        // 添加事件監聽器
        setupDefectMarkEvents(dotElement, textboxElement, defectMarkData);
        
        return { dot: dotElement, textbox: textboxElement, connection: connectionElement };
    }
    
                                // 更新缺陷標記位置
    function updateDefectMarkPosition(dotElement, textboxElement, connectionElement, defectMarkData) {
        if (!defectMarkData.canvasPosition) return;
        
        const canvasX = defectMarkData.canvasPosition.x;
        const canvasY = defectMarkData.canvasPosition.y;
        
        // 計算螢幕座標
        const screenX = canvasX * (window.currentScale || 1) + (window.translateX || 0);
        const screenY = canvasY * (window.currentScale || 1) + (window.translateY || 0);
        
        // 計算縮放後的尺寸（與標籤的縮放邏輯一致）
        const baseDotSize = window.defectMarkSizeScale || 24;
        const scaledDotSize = baseDotSize * (window.currentScale || 1);
        
        // 計算縮放後的字體大小
        const scaledDotFontSize = Math.max(8, scaledDotSize * 0.5); // 圓點字體大小為縮放後圓點大小的50%
        const scaledTextboxFontSize = Math.max(8, scaledDotSize * 0.4); // 文字框字體大小為縮放後圓點大小的40%
        
        // 更新圓點尺寸和字體大小，設置中心對齊
        dotElement.style.width = scaledDotSize + 'px';
        dotElement.style.height = scaledDotSize + 'px';
        dotElement.style.fontSize = scaledDotFontSize + 'px';
        dotElement.style.borderRadius = (scaledDotSize / 2) + 'px'; // 確保圓點保持圓形
        dotElement.style.display = 'flex';
        dotElement.style.alignItems = 'center';
        dotElement.style.justifyContent = 'center';
        
        // 更新文字框字體大小和樣式
        textboxElement.style.fontSize = scaledTextboxFontSize + 'px';
        
        // 設置文字框為自動調整大小，保持 5px 邊距
        const scaledPadding = 5 * (window.currentScale || 1); // 縮放 padding
        textboxElement.style.padding = scaledPadding + 'px';
        textboxElement.style.borderRadius = '4px';
        textboxElement.style.width = 'auto';
        textboxElement.style.height = 'auto';
        textboxElement.style.minWidth = 'fit-content';
        textboxElement.style.minHeight = 'fit-content';
        textboxElement.style.display = 'flex';
        textboxElement.style.alignItems = 'center';
        textboxElement.style.justifyContent = 'center';
        
        // 計算文字框中心位置（使用畫布座標偏移，與圓點定位方法一致）
        // 注意：textboxOffsetX/Y 現在代表文字框中心點相對於圓點中心點的畫布座標偏移
        // 這樣可以確保文字框在縮放時保持正確的相對位置，不會移動
        // 修正預設偏移值，避免90度移動時的跳躍問題
        const textboxOffsetX = defectMarkData.textboxOffsetX !== undefined ? defectMarkData.textboxOffsetX : 80;
        const textboxOffsetY = defectMarkData.textboxOffsetY !== undefined ? defectMarkData.textboxOffsetY : 40;
        
        // 將畫布座標偏移轉換為螢幕座標
        const textboxCenterCanvasX = canvasX + textboxOffsetX;
        const textboxCenterCanvasY = canvasY + textboxOffsetY;
        const textboxCenterScreenX = textboxCenterCanvasX * (window.currentScale || 1) + (window.translateX || 0);
        const textboxCenterScreenY = textboxCenterCanvasY * (window.currentScale || 1) + (window.translateY || 0);
        
        // 設置圓點位置（中心點）
        const dotRadius = scaledDotSize / 2; // 縮放後的圓點半徑
        dotElement.style.left = (screenX - dotRadius) + 'px';
        dotElement.style.top = (screenY - dotRadius) + 'px';
        
        // 設置文字框位置（以中心點為基準）
        // 由於文字框現在是自動調整大小，我們需要先獲取其實際尺寸
        // 強制重新計算文字框尺寸
        textboxElement.style.display = 'none';
        textboxElement.offsetHeight; // 強制重排
        textboxElement.style.display = 'flex';
        
        const textboxRect = textboxElement.getBoundingClientRect();
        const actualTextboxWidth = textboxRect.width;
        const actualTextboxHeight = textboxRect.height;
        
        textboxElement.style.left = (textboxCenterScreenX - actualTextboxWidth / 2) + 'px';
        textboxElement.style.top = (textboxCenterScreenY - actualTextboxHeight / 2) + 'px';
        
        // 計算連接線端點 - 從圓點中心到文字框中心
        const dotCenterX = screenX; // 圓點中心X
        const dotCenterY = screenY; // 圓點中心Y
        
        // 確保文字框中心點計算正確（使用實際的文字框位置加上尺寸的一半）
        const actualTextboxCenterX = textboxCenterScreenX;
        const actualTextboxCenterY = textboxCenterScreenY;
        
        // 驗證座標值是否為有效數字
        if (isNaN(dotCenterX) || isNaN(dotCenterY) || isNaN(textboxCenterScreenX) || isNaN(textboxCenterScreenY)) {
            window.logger.error('Invalid coordinates detected:', {
                dotCenterX, dotCenterY, textboxCenterScreenX, textboxCenterScreenY,
                screenX, screenY, textboxOffsetX, textboxOffsetY
            });
            return;
        }
        
        window.logger.log('Updating defect mark position:', {
            defectMarkId: defectMarkData.id,
            canvasPosition: defectMarkData.canvasPosition,
            screenPosition: { x: screenX, y: screenY },
            dotPosition: { left: dotElement.style.left, top: dotElement.style.top },
            textboxPosition: { left: textboxElement.style.left, top: textboxElement.style.top },
            textboxDimensions: { width: actualTextboxWidth, height: actualTextboxHeight },
            connectionEndpoints: { 
                dotCenter: { x: dotCenterX, y: dotCenterY }, 
                textboxCenter: { x: textboxCenterScreenX, y: textboxCenterScreenY } 
            }
        });
        
        updateDefectMarkConnection(connectionElement, dotCenterX, dotCenterY, actualTextboxCenterX, actualTextboxCenterY);
    }
    
    // 更新缺陷標記連接線
    function updateDefectMarkConnection(connectionElement, x1, y1, x2, y2) {
        const svgNS = "http://www.w3.org/2000/svg";
        connectionElement.innerHTML = '';
        
        // 計算 SVG 的邊界
        const minX = Math.min(x1, x2);
        const minY = Math.min(y1, y2);
        const maxX = Math.max(x1, x2);
        const maxY = Math.max(y1, y2);
        
        // 添加一些邊距
        const margin = 50;
        const svgWidth = maxX - minX + margin * 2;
        const svgHeight = maxY - minY + margin * 2;
        
        // 創建 SVG 元素
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("width", svgWidth);
        svg.setAttribute("height", svgHeight);
        svg.setAttribute("style", `position: absolute; left: ${minX - margin}px; top: ${minY - margin}px; pointer-events: none; z-index: 998;`);
        
        // 確保 SVG 的 viewBox 設置正確
        svg.setAttribute("viewBox", `0 0 ${svgWidth} ${svgHeight}`);
        
        // 調整線條座標到 SVG 的相對位置
        const lineX1 = x1 - minX + margin;
        const lineY1 = y1 - minY + margin;
        const lineX2 = x2 - minX + margin;
        const lineY2 = y2 - minY + margin;
        
        const line = document.createElementNS(svgNS, "line");
        line.setAttribute("x1", lineX1);
        line.setAttribute("y1", lineY1);
        line.setAttribute("x2", lineX2);
        line.setAttribute("y2", lineY2);
        line.setAttribute("stroke", "#dc3545");
        line.setAttribute("stroke-opacity", "0.8");
        // 保持線條寬度固定，不隨縮放變化
        const strokeWidth = 1;
        line.setAttribute("stroke-width", strokeWidth.toString());
        
        svg.appendChild(line);
        connectionElement.appendChild(svg);
        
        // 調試日誌（僅在開發模式下顯示）
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            window.logger.log('Connection line updated:', { 
                originalCoords: { x1, y1, x2, y2 },
                svgBounds: { minX, minY, maxX, maxY },
                svgDimensions: { width: svgWidth, height: svgHeight },
                lineCoords: { x1: lineX1, y1: lineY1, x2: lineX2, y2: lineY2 },
                currentScale: window.currentScale || 1,
                strokeWidth: strokeWidth
            });
        }
        
        // 驗證 SVG 元素是否正確創建（僅在開發模式下顯示）
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            window.logger.log('SVG element created:', svg);
            window.logger.log('Line element created:', line);
            window.logger.log('Connection element children:', connectionElement.children.length);
        }
    }
    
    // 計算畫布座標的輔助函數（Plan.html方法）
    function calculateCanvasPosition(label) {
        // 獲取PDF canvas的實際位置
        const canvasRect = floorPlanCanvas.getBoundingClientRect();
        const labelRect = label.getBoundingClientRect();
        
        // 計算標籤的中心點
        const labelCenterX = labelRect.left + labelRect.width / 2;
        const labelCenterY = labelRect.top + labelRect.height / 2;
        
        // 計算標籤相對於PDF canvas的位置（使用中心點）
        const relativeToCanvasX = labelCenterX - canvasRect.left;
        const relativeToCanvasY = labelCenterY - canvasRect.top;
        
        // 轉換為畫布座標，移除當前的變換
        // 這給了我們原始畫布座標系統中的位置
        const canvasX = (relativeToCanvasX - (window.translateX || 0)) / (window.currentScale || 1);
        const canvasY = (relativeToCanvasY - (window.translateY || 0)) / (window.currentScale || 1);
        
        window.logger.log('Canvas position calculated:', {
            labelCenter: { x: labelCenterX, y: labelCenterY },
            canvasRect: { left: canvasRect.left, top: canvasRect.top },
            relativeToCanvas: { x: relativeToCanvasX, y: relativeToCanvasY },
            canvasPosition: { x: canvasX, y: canvasY },
            scale: window.currentScale || 1,
            offsetX: window.translateX || 0,
            offsetY: window.translateY || 0
        });
        
        return { x: canvasX, y: canvasY };
    }
    
    // 更新單個標籤位置的輔助函數 - 以中心點為基準（修復縮放偏移問題）
    function updateSingleLabelPosition(labelElement, labelData) {
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
        // 這裡的座標是相對於PDF內容的，需要加上偏移來得到螢幕位置
        const screenX = canvasX * (window.currentScale || 1) + (window.translateX || 0);
        const screenY = canvasY * (window.currentScale || 1) + (window.translateY || 0);
        
        // 計算縮放後的字體大小
        const baseFontSize = labelData.baseFontSize || window.labelSizeScale;
        const scaledFontSize = baseFontSize * (window.currentScale || 1);
        labelElement.style.fontSize = scaledFontSize + 'px';
        
        // 動態更新padding，確保標籤形狀保持固定
        const basePaddingX = 12;
        const basePaddingY = 8;
        
        // 按比例縮放內邊距
        const scaledPaddingX = Math.max(4, basePaddingX / (window.currentScale || 1));
        const scaledPaddingY = Math.max(4, basePaddingY / (window.currentScale || 1));
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
        
        // 調試日誌：僅在開發環境下輸出
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            window.logger.log('Label position updated:', {
                labelId: labelData.id,
                canvasPosition: { x: canvasX, y: canvasY },
                screenPosition: { x: screenX, y: screenY },
                finalPosition: { 
                    left: (screenX - finalWidth / 2) + 'px',
                    top: (screenY - finalHeight / 2) + 'px'
                },
                scale: window.currentScale || 1,
                translate: { x: window.translateX || 0, y: window.translateY || 0 },
                dimensions: { width: finalWidth, height: finalHeight }
            });
        }
    }
    
    // 重新實現標籤位置同步函數 - 使用Plan.html的方法
    // 將函數定義為全局函數，確保在applyTransform中可以調用
    window.updateAllLabelPositions = function() {
        if (!labelLayer) return;
        
        // 隱藏所有刪除按鈕（當標籤位置更新時）
        hideAllDeleteButtons();
        
        // 獲取所有標籤元素
        const labelElements = labelLayer.querySelectorAll('.floor-plan-label');
        
        // 使用 window.labels 而不是局部變量 labels
        const labelsArray = window.labels || [];
        
        labelElements.forEach(labelElement => {
            const labelId = labelElement.dataset.labelId;
            const labelData = labelsArray.find(l => l.id == labelId);
            
            if (labelData) {
                // 使用統一的位置更新函數，確保中心點定位
                updateSingleLabelPosition(labelElement, labelData);
            }
        });
    }
    
    // 防抖變數
    let transformDebounceTimer = null;
    
    // 全局的applyTransform函數 - 用於更新PDF變換和標籤位置
    window.applyTransform = function() {
        const floorPlanCanvas = document.getElementById('floorPlanCanvas');
        if (!floorPlanCanvas) return;
        
        const t = `translate(${window.translateX || 0}px, ${window.translateY || 0}px) scale(${window.currentScale || 1})`;
        floorPlanCanvas.style.transform = t;
        
        // 立即更新標籤和缺陷標記位置（無延遲）
        if (typeof window.updateAllLabelPositions === 'function') {
            window.updateAllLabelPositions();
        }
        if (typeof window.updateAllDefectMarkPositions === 'function') {
            window.updateAllDefectMarkPositions();
        }
        
        // 清除之前的防抖計時器
        if (transformDebounceTimer) {
            clearTimeout(transformDebounceTimer);
        }
        
        // 使用防抖來減少重複的狀態保存
        transformDebounceTimer = setTimeout(() => {
            // 保存視圖狀態
            if (typeof labelViewState !== 'undefined') {
                labelViewState = { scale: window.currentScale || 1, tx: window.translateX || 0, ty: window.translateY || 0 };
                saveViewStateToLocalStorage();
            }
            
            // 調試日誌
            window.logger.log('Transform applied:', {
                scale: window.currentScale || 1,
                translateX: window.translateX || 0,
                translateY: window.translateY || 0,
                transform: t
            });
        }, 100); // 100ms 防抖延遲，僅用於狀態保存
    }
    
    // 縮放至100%並居中函數
    function zoomTo100AndCenter() {
        if (!floorPlanCanvas || !floorPlanViewer) {
            window.logger.log('Floor plan canvas or viewer not available');
            return;
        }
        
        // 設置縮放為100%
        window.currentScale = 1.0;
        
        // 獲取PDF內容和視窗的尺寸
        const canvasRect = floorPlanCanvas.getBoundingClientRect();
        const viewerRect = floorPlanViewer.getBoundingClientRect();
        
        // 計算居中所需的偏移量
        // 將PDF內容居中於視窗中
        const centerX = (viewerRect.width - canvasRect.width) / 2;
        const centerY = (viewerRect.height - canvasRect.height) / 2;
        
        // 設置偏移量以居中顯示
        window.translateX = centerX;
        window.translateY = centerY;
        
        // 應用變換
        if (typeof window.applyTransform === 'function') {
            window.applyTransform();
        }
        
        // 保存視圖狀態
        saveCurrentViewState();
        
        window.logger.log('Zoomed to 100% and centered:', {
            scale: window.currentScale,
            translateX: window.translateX,
            translateY: window.translateY,
            canvasSize: { width: canvasRect.width, height: canvasRect.height },
            viewerSize: { width: viewerRect.width, height: viewerRect.height }
        });
        
        showNotification('Zoomed to 100% and centered', 'success');
    }
    
    // 顯示標籤詳細信息彈出表格
    window.showLabelsDetailPopup = function() {
        const popup = document.getElementById('labelsDetailPopup');
        const tableBody = document.getElementById('labelsDetailTableBody');
        
        if (!popup || !tableBody) {
            window.logger.error('Labels detail popup elements not found');
            return;
        }
        
        // 清空表格內容
        tableBody.innerHTML = '';
        
        // 使用 window.labels 而不是局部變量 labels
        const labelsArray = window.labels || [];
        
        if (labelsArray.length === 0) {
            const row = document.createElement('tr');
            row.innerHTML = '<td colspan="17" style="text-align: center; color: #666; font-style: italic;">No labels found</td>';
            tableBody.appendChild(row);
        } else {
            // 按檢查號碼排序（數字排序，從1開始）
            const sortedLabels = [...labelsArray].sort((a, b) => {
                const aNo = parseInt(a.inspectionNo) || 0;
                const bNo = parseInt(b.inspectionNo) || 0;
                return aNo - bNo;
            });
            
            sortedLabels.forEach((label, index) => {
                const row = document.createElement('tr');
                row.dataset.labelId = label.id;
                row.dataset.labelIndex = index;
                row.innerHTML = `
                    <td class="action-buttons">
                        <button class="btn-delete-label" onclick="deleteLabelFromDetailTable('${label.id}', ${index})" title="刪除標籤記錄">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                    <td><input type="text" value="${label.inspectionNo || ''}" data-field="inspectionNo" data-index="${index}"></td>
                    <td><input type="text" value="${label.floor || ''}" data-field="floor" data-index="${index}"></td>
                    <td><input type="text" value="${label.areaName || ''}" data-field="areaName" data-index="${index}"></td>
                    <td><input type="text" value="${label.roomNo || ''}" data-field="roomNo" data-index="${index}"></td>
                    <td><input type="date" value="${label.inspectionDate || ''}" data-field="inspectionDate" data-index="${index}"></td>
                    <td><input type="text" value="${label.a || ''}" data-field="a" data-index="${index}" readonly></td>
                    <td><input type="text" value="${label.b || ''}" data-field="b" data-index="${index}" readonly></td>
                    <td><input type="text" value="${label.c || ''}" data-field="c" data-index="${index}" readonly></td>
                    <td><input type="text" value="${label.d || ''}" data-field="d" data-index="${index}" readonly></td>
                    <td><input type="text" value="${label.e || ''}" data-field="e" data-index="${index}" readonly></td>
                    <td><input type="text" value="${label.f || ''}" data-field="f" data-index="${index}" readonly></td>
                    <td><input type="text" value="${label.g || ''}" data-field="g" data-index="${index}" readonly></td>
                    <td><input type="text" value="${label.h || ''}" data-field="h" data-index="${index}" readonly></td>
                    <td><input type="text" value="${label.i || ''}" data-field="i" data-index="${index}" readonly></td>
                    <td><input type="text" value="${getDefectsFromDefectsDetailTable(label.inspectionNo)}" data-field="j" data-index="${index}" readonly></td>
                `;
                tableBody.appendChild(row);
            });
        }
        
        // 顯示彈出表格
        popup.style.display = 'flex';
        
        // 添加自動保存功能
        addAutoSaveListeners('labels');
        
        // 重新初始化實時輸入監聽器（確保新創建的輸入字段有監聽器）
        initRealtimeInputListeners();
        
        // 設置標籤詳細表格的照片編號即時更新功能
        if (typeof handleLabelsDetailTablePhotoUpdate === 'function') {
            handleLabelsDetailTablePhotoUpdate();
        }
        
        // 清除多選狀態
        clearAllSelections();
        updateMultiSelectUI();
    }
    
    // 顯示缺陷標記詳細信息彈出表格
    window.showDefectsDetailPopup = function() {
        const popup = document.getElementById('defectsDetailPopup');
        const tableBody = document.getElementById('defectsDetailTableBody');
        
        if (!popup || !tableBody) {
            window.logger.error('Defects detail popup elements not found');
            return;
        }
        
        // 清空表格內容
        tableBody.innerHTML = '';
        
        // 使用 window.defectEntries 而不是 window.defectMarks，因為我們要顯示來自 defect-form 的數據
        if (window.defectEntries.length === 0) {
            const row = document.createElement('tr');
            row.innerHTML = '<td colspan="20" style="text-align: center; color: #666; font-style: italic;">No defect entries found</td>';
            tableBody.appendChild(row);
        } else {
            window.defectEntries.forEach((defect, index) => {
                const row = document.createElement('tr');
                row.dataset.defectId = defect.id;
                row.dataset.defectNo = defect.defectNo;
                row.dataset.defectIndex = index;
                
                // 將分類代碼轉換為完整的分類名稱
                const getCategoryName = (categoryCode) => {
                    const category = categories.find(cat => cat.id === categoryCode);
                    return category ? category.name : categoryCode;
                };
                
                row.innerHTML = `
                    <td class="action-buttons">
                        <button class="btn-delete-defect" onclick="deleteDefectFromDetailTable('${defect.id}', '${defect.defectNo}', ${index})" title="刪除缺陷記錄">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                    <td><input type="text" value="${defect.defectNo || ''}" data-field="defectNo" data-index="${index}" readonly></td>
                    <td><input type="text" value="${defect.locationId || defect.inspectionNo || ''}" data-field="locationId" data-index="${index}" readonly></td>
                     <td><input type="text" value="${defect.imminentDanger ? 'Yes' : 'No'}" data-field="imminentDanger" data-index="${index}" readonly></td>
                    <td><input type="date" value="${defect.inspectionDate || ''}" data-field="inspectionDate" data-index="${index}" readonly></td>
                    <td><input type="text" value="${defect.floor || ''}" data-field="floor" data-index="${index}" readonly></td>
                    <td><input type="text" value="${defect.areaName || ''}" data-field="areaName" data-index="${index}" readonly></td>
                    <td><input type="text" value="${defect.roomNo || ''}" data-field="roomNo" data-index="${index}" readonly></td>
                    <td><input type="text" value="${defect.photoNumbers || ''}" data-field="photoNumbers" data-index="${index}"></td>
                    <td><input type="text" value="${getCategoryName(defect.category) || ''}" data-field="category" data-index="${index}"></td>
                    <td><input type="text" value="${defect.defectType || defect.description || ''}" data-field="defectType" data-index="${index}"></td>
                    <td><textarea data-field="descriptionConstruction" data-index="${index}">${defect.descriptionConstruction || ''}</textarea></td>
                    <td><input type="text" value="${defect.existingCondition || ''}" data-field="existingCondition" data-index="${index}"></td>
                    <td><input type="text" value="${defect.humidity || ''}" data-field="humidity" data-index="${index}"></td>
                    <td><input type="text" value="${defect.moisture || ''}" data-field="moisture" data-index="${index}"></td>
                    <td><input type="text" value="${defect.chloride || ''}" data-field="chloride" data-index="${index}"></td>
                    <td><input type="text" value="${defect.carbonation || ''}" data-field="carbonation" data-index="${index}"></td>
                    <td><textarea data-field="remedialWorks" data-index="${index}">${defect.remedialWorks || ''}</textarea></td>
                    <td><textarea data-field="preventiveWorks" data-index="${index}">${defect.preventiveWorks || ''}</textarea></td>
                    <td><textarea data-field="remarks" data-index="${index}">${defect.remarks || ''}</textarea></td>
                `;
                tableBody.appendChild(row);
            });
        }
        
        // 顯示彈出表格
        popup.style.display = 'flex';
        
        // 添加自動保存功能
        addAutoSaveListeners('defects');
        
        // 重新初始化實時輸入監聽器（確保新創建的輸入字段有監聽器）
        initRealtimeInputListeners();
        
        // 清除多選狀態
        clearAllSelections();
        updateMultiSelectUI();
    }
    
    // 保存標籤更改
    function saveLabelsChanges() {
        const tableBody = document.getElementById('labelsDetailTableBody');
        const inputs = tableBody.querySelectorAll('input[data-field]');
        
        let hasChanges = false;
        
        inputs.forEach(input => {
            const index = parseInt(input.dataset.index);
            const field = input.dataset.field;
            let value;
            
            // 處理checkbox字段
            if (input.type === 'checkbox') {
                value = input.checked;
            } else {
                value = input.value.trim();
            }
            
            // 處理所有字段，但跳過只讀的分類字段（a-j）
            const editableFields = ['inspectionNo', 'floor', 'areaName', 'roomNo', 'inspectionDate', 'imminentDanger'];
            if (window.labels && window.labels[index] && editableFields.includes(field)) {
                if (window.labels[index][field] !== value) {
                    window.labels[index][field] = value;
                    hasChanges = true;
                }
            }
        });
        
        if (hasChanges) {
            // 不在這裡設置 submitted 狀態，標籤只在從分類內容提交時才變藍色
            
            // 保存到本地存儲
            if (typeof window.saveLabelsToStorage === 'function') {
                window.saveLabelsToStorage();
            }
            
            // 同時保存到主數據存儲
            saveDataToStorage();
            
            // 移除標籤重新渲染 - 根據用戶要求，更新標籤詳細表格時不改變樓層平面圖中的標籤
            // if (typeof window.redrawLabels === 'function') {
            //     window.redrawLabels();
            // }
            
            // 同步更新檢查記錄表格
            syncLabelsToInspectionRecords();
            
            // 更新分類表格
            if (typeof window.updateCategoryTablesFromInspectionRecords === 'function') {
    window.updateCategoryTablesFromInspectionRecords();
}
            
            // 顯示成功通知
            showNotification('Labels updated successfully!', 'success');
            
            // 關閉彈出表格
            const popup = document.getElementById('labelsDetailPopup');
            if (popup) {
                popup.style.display = 'none';
            }
        } else {
            showNotification('No changes to save.', 'info');
        }
    }
    
    // 保存缺陷標記更改
    function saveDefectsChanges() {
        const tableBody = document.getElementById('defectsDetailTableBody');
        const inputs = tableBody.querySelectorAll('input[data-field], textarea[data-field]');
        
        let hasChanges = false;
        
        // 按索引分組輸入
        const changesByIndex = {};
        
        inputs.forEach(input => {
            const index = parseInt(input.dataset.index);
            const field = input.dataset.field;
            const value = input.value.trim();
            
            if (!changesByIndex[index]) {
                changesByIndex[index] = {};
            }
            changesByIndex[index][field] = value;
        });
        
        // 應用更改到 defectEntries
        Object.keys(changesByIndex).forEach(indexStr => {
            const index = parseInt(indexStr);
            const changes = changesByIndex[index];
            
            if (window.defectEntries[index]) {
                // 更新所有字段
                Object.keys(changes).forEach(field => {
                    if (window.defectEntries[index][field] !== changes[field]) {
                        window.defectEntries[index][field] = changes[field];
                            hasChanges = true;
                    }
                });
            }
        });
        
        if (hasChanges) {
            // 保存到本地存儲
            saveDataToStorage();
            
            // 更新缺陷摘要表格
            if (typeof window.updateDefectSummaryTable === 'function') {
    window.updateDefectSummaryTable();
}
            
            // 顯示成功通知
            showNotification('Defect entries updated successfully!', 'success');
            
            // 關閉彈出表格
            const popup = document.getElementById('defectsDetailPopup');
            if (popup) {
                popup.style.display = 'none';
            }
        } else {
            showNotification('No changes to save.', 'info');
        }
    }
    
    // 新的標籤事件處理系統
    function setupLabelEvents(labelElement, labelData) {
        let isDragging = false;
        let dragStartTimer = null;
        let dragStartData = null;
        
        // 鼠標按下開始拖曳
        labelElement.addEventListener('mousedown', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // 隱藏刪除按鈕（當開始拖曳時）
            hideAllDeleteButtons();
            
            // 記錄開始的鼠標位置和標籤的畫布座標
            const startMouseX = e.clientX;
            const startMouseY = e.clientY;
            const startCanvasX = labelData.canvasPosition ? labelData.canvasPosition.x : 0;
            const startCanvasY = labelData.canvasPosition ? labelData.canvasPosition.y : 0;
            
            // 添加拖拽準備狀態的視覺反饋
            labelElement.classList.add('drag-preparing');
            
            // 顯示準備拖拽提示
            showNotification('Hold for 0.3 seconds to start dragging', 'info');
            
            // 設置0.3秒延遲來開始拖拽
            dragStartTimer = setTimeout(function() {
                // 移除準備狀態，開始拖拽
                labelElement.classList.remove('drag-preparing');
                isDragging = true;
                labelElement.classList.add('dragging');
                
                // 顯示拖拽開始提示
                showNotification('Label drag started - you can now move the label', 'success');
            
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
                updateSingleLabelPosition(labelElement, labelData);
            };
            
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
        });
        
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
        
        // 右鍵顯示刪除按鈕
        labelElement.addEventListener('contextmenu', function(e) {
            window.logger.log('Right-click detected on label:', labelData.id);
            window.logger.log('Event:', e);
            window.logger.log('Label element:', labelElement);
            
            e.preventDefault();
            e.stopPropagation();
            
            try {
                showDeleteButton(labelElement, labelData);
                window.logger.log('showDeleteButton called successfully');
            } catch (error) {
                window.logger.error('Error in showDeleteButton:', error);
            }
        });
        
        // 雙擊編輯標籤
        labelElement.addEventListener('dblclick', function(e) {
            e.preventDefault();
            e.stopPropagation();
            editingLabelId = labelData.id;
            openLabelModal(labelData);
        });
    }

    // 顯示刪除按鈕函數
    function showDeleteButton(labelElement, labelData) {
        window.logger.log('showDeleteButton called for label:', labelData.id);
        window.logger.log('Label element:', labelElement);
        
        // 隱藏所有現有的刪除按鈕
        hideAllDeleteButtons();
        
        // 創建刪除按鈕
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'label-delete-btn';
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.title = `Delete Label: ${labelData.inspectionNo || 'Label'}`;
        deleteBtn.setAttribute('aria-label', `Delete label ${labelData.inspectionNo || 'Label'}`);
        
        // 確保按鈕可以接收事件
        deleteBtn.style.pointerEvents = 'auto';
        deleteBtn.style.zIndex = '1001';
        deleteBtn.style.position = 'absolute';
        deleteBtn.style.top = '-30px';
        deleteBtn.style.right = '-10px';
        deleteBtn.style.width = '24px';
        deleteBtn.style.height = '24px';
        deleteBtn.style.background = '#dc3545'; /* 紅色背景 */
        deleteBtn.style.color = 'white';
        deleteBtn.style.border = 'none';
        deleteBtn.style.borderRadius = '50%';
        deleteBtn.style.cursor = 'pointer';
        deleteBtn.style.display = 'flex';
        deleteBtn.style.alignItems = 'center';
        deleteBtn.style.justifyContent = 'center';
        deleteBtn.style.fontSize = '12px';
        deleteBtn.style.boxShadow = '0 2px 8px rgba(220, 53, 69, 0.3)';
        deleteBtn.style.transition = 'all 0.2s ease';
        
        window.logger.log('Delete button created:', deleteBtn);
        
        // 添加點擊刪除事件
        deleteBtn.addEventListener('click', function(e) {
            window.logger.log('Delete button click event triggered');
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            
            window.logger.log('Delete button clicked for label:', labelData.id);
            window.logger.log('Event target:', e.target);
            window.logger.log('Event currentTarget:', e.currentTarget);
            
            // 直接刪除標籤，無需確認
            window.logger.log('Deleting label:', labelData.id);
            
            const index = window.labels.findIndex(l => l.id === labelData.id);
            window.logger.log('Found label at index:', index);
            window.logger.log('Current labels array:', window.labels);
            
            if (index >= 0) {
                // 先隱藏刪除按鈕，避免在重新渲染時出現問題
                hideAllDeleteButtons();
                
                // 刪除標籤數據
                window.labels.splice(index, 1);
                window.logger.log('Label removed from array. New length:', window.labels.length);
                window.logger.log('Updated labels array:', window.labels);
                
                // 保存到本地存儲
                if (typeof window.saveLabelsToStorage === 'function') {
                    window.saveLabelsToStorage();
                }
                window.logger.log('Labels saved to localStorage');
                
                // 重新渲染標籤
                if (typeof window.redrawLabels === 'function') {
                    window.redrawLabels();
                }
                window.logger.log('Labels redrawn');
                
                // 更新所有缺陷/標籤詳細表格容器
                if (typeof updateDefectSummaryTable === 'function') {
                    if (typeof window.updateDefectSummaryTable === 'function') {
    window.updateDefectSummaryTable();
}
                    window.logger.log('Defect summary table updated after label deletion');
                }
                if (typeof updateCategoryTablesFromInspectionRecords === 'function') {
                    if (typeof window.updateCategoryTablesFromInspectionRecords === 'function') {
    window.updateCategoryTablesFromInspectionRecords();
}
                    window.logger.log('Category tables updated after label deletion');
                }
                
                // 更新照片狀態
                if (typeof updatePhotoStatusFromLabels === 'function') {
                    updatePhotoStatusFromLabels();
                }
                
                // 顯示成功消息
                if (typeof showNotification === 'function') {
                    showNotification('Label deleted successfully!', 'success');
                }
            } else {
                window.logger.error('Label not found in array');
                window.logger.error('Labels array:', labels);
                window.logger.error('Looking for label ID:', labelData.id);
            }
        });
        
        // 添加mousedown事件，確保按鈕可以接收點擊
        deleteBtn.addEventListener('mousedown', function(e) {
            window.logger.log('Delete button mousedown event');
            e.stopPropagation();
        });
        
        // 將刪除按鈕添加到標籤元素上
        labelElement.appendChild(deleteBtn);
        window.logger.log('Delete button appended to label element');
        window.logger.log('Label element children count:', labelElement.children.length);
        
        // 驗證刪除按鈕創建成功
        window.logger.log('Delete button created successfully');
        
        // 添加點擊外部隱藏功能
        setTimeout(() => {
            document.addEventListener('click', hideAllDeleteButtons, { once: true });
        }, 100);
    }
    
    // 隱藏所有刪除按鈕函數
    function hideAllDeleteButtons() {
        const deleteButtons = document.querySelectorAll('.label-delete-btn');
            window.logger.log('hideAllDeleteButtons called. Found delete buttons:', deleteButtons.length);
        deleteButtons.forEach(btn => {
            window.logger.log('Removing delete button:', btn);
            btn.remove();
        });
    }
    
    // 添加全局點擊事件監聽器，點擊PDF區域時隱藏刪除按鈕
    document.addEventListener('click', function(e) {
        window.logger.log('Global click event:', e.target);
        window.logger.log('Is label?', e.target.closest('.floor-plan-label'));
        window.logger.log('Is delete button?', e.target.closest('.label-delete-btn'));
        window.logger.log('Is defect mark?', e.target.closest('.defect-mark-dot, .defect-mark-textbox'));
        window.logger.log('Is defect delete button?', e.target.closest('.defect-mark-delete-btn'));
        
        // 如果點擊的不是標籤或刪除按鈕，則隱藏所有標籤刪除按鈕
        if (!e.target.closest('.floor-plan-label') && !e.target.closest('.label-delete-btn')) {
            window.logger.log('Hiding label delete buttons due to external click');
            hideAllDeleteButtons();
        }
        
        // 如果點擊的不是缺陷標記或缺陷刪除按鈕，則隱藏所有缺陷標記刪除按鈕
        if (!e.target.closest('.defect-mark-dot, .defect-mark-textbox') && !e.target.closest('.defect-mark-delete-btn')) {
            window.logger.log('Hiding defect mark delete buttons due to external click');
            hideAllDefectMarkDeleteButtons();
        }
    });
    
    // 添加鍵盤事件監聽器，按ESC鍵時隱藏刪除按鈕
    document.addEventListener('keydown', function(e) {
        // Don't interfere with copy/paste operations
        if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'v' || e.key === 'C' || e.key === 'V')) {
            return; // Allow normal copy/paste to work
        }
        
        if (e.key === 'Escape') {
            hideAllDeleteButtons();
            hideAllDefectMarkDeleteButtons();
        }
    });

    // 同步標籤層尺寸函數 - 新系統不再需要，因為標籤層尺寸在PDF渲染時已設置

    // 缺陷標記事件處理函數
    function setupDefectMarkEvents(dotElement, textboxElement, defectMarkData) {
        let isDotDragging = false;
        let isTextboxDragging = false;
        let dotDragStartTimer = null;
        let textboxDragStartTimer = null;
        let dotDragStartData = null;
        let textboxDragStartData = null;
        
        // 雙擊編輯缺陷標記 - 已移除編輯功能
        
        // 右鍵顯示刪除按鈕
        dotElement.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            e.stopPropagation();
            showDefectMarkDeleteButton(defectMarkData.id, e.clientX, e.clientY);
        });
        
        textboxElement.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            e.stopPropagation();
            showDefectMarkDeleteButton(defectMarkData.id, e.clientX, e.clientY);
        });
        
        // 圓點拖拽功能 - 移動整個缺陷標記
        dotElement.addEventListener('mousedown', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // 記錄開始的鼠標位置和缺陷標記的畫布座標
            const startMouseX = e.clientX;
            const startMouseY = e.clientY;
            const startCanvasX = defectMarkData.canvasPosition ? defectMarkData.canvasPosition.x : 0;
            const startCanvasY = defectMarkData.canvasPosition ? defectMarkData.canvasPosition.y : 0;
            
            // 添加拖拽準備狀態的視覺反饋
            dotElement.classList.add('drag-preparing');
            
            // 顯示準備拖拽提示
            showNotification('Hold for 0.3 seconds to start dragging defect mark', 'info');
            
            // 設置0.3秒延遲來開始拖拽
            dotDragStartTimer = setTimeout(function() {
                // 移除準備狀態，開始拖拽
                dotElement.classList.remove('drag-preparing');
                isDotDragging = true;
                dotElement.classList.add('dragging');
                
                // 顯示拖拽開始提示
                showNotification('Defect mark drag started - you can now move it', 'success');
                
                // 添加全域事件監聽器
                const onMouseMove = function(e) {
                    if (!isDotDragging) return;
                    
                    // 計算鼠標移動的距離（屏幕像素）
                    const deltaX = e.clientX - startMouseX;
                    const deltaY = e.clientY - startMouseY;
                    
                    // 將像素移動距離轉換為畫布座標距離
                    const canvasDeltaX = deltaX / (window.currentScale || 1);
                    const canvasDeltaY = deltaY / (window.currentScale || 1);
                    
                    // 更新缺陷標記的畫布座標
                    if (!defectMarkData.canvasPosition) {
                        defectMarkData.canvasPosition = { x: 0, y: 0 };
                    }
                    defectMarkData.canvasPosition.x = startCanvasX + canvasDeltaX;
                    defectMarkData.canvasPosition.y = startCanvasY + canvasDeltaY;
                    
                    // 立即更新缺陷標記的視覺位置
                    updateDefectMarkPosition(dotElement, textboxElement, 
                        document.querySelector(`.defect-mark-connection[data-defect-mark-id="${defectMarkData.id}"]`), 
                        defectMarkData);
                };
                
                const onMouseUp = function() {
                    isDotDragging = false;
                    dotElement.classList.remove('dragging');
                    saveDefectMarksToStorage();
                    document.removeEventListener('mousemove', onMouseMove);
                    document.removeEventListener('mouseup', onMouseUp);
                };
                
                document.addEventListener('mousemove', onMouseMove);
                document.addEventListener('mouseup', onMouseUp);
            }, 300); // 0.3秒延遲
            
            // 保存拖拽開始數據，用於取消拖拽
            dotDragStartData = {
                startMouseX: startMouseX,
                startMouseY: startMouseY,
                startCanvasX: startCanvasX,
                startCanvasY: startCanvasY
            };
        });
        
        // 文字框拖拽功能 - 單獨移動文字框
        textboxElement.addEventListener('mousedown', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // 記錄開始的鼠標位置和文字框的當前位置
            const startMouseX = e.clientX;
            const startMouseY = e.clientY;
            // 注意：textboxOffsetX/Y 現在代表文字框中心點相對於圓點中心點的畫布座標偏移
            // 修正預設偏移值，避免90度移動時的跳躍問題
            const startTextboxOffsetX = defectMarkData.textboxOffsetX !== undefined ? defectMarkData.textboxOffsetX : 80;
            const startTextboxOffsetY = defectMarkData.textboxOffsetY !== undefined ? defectMarkData.textboxOffsetY : 40;
            
            // 添加拖拽準備狀態的視覺反饋
            textboxElement.classList.add('drag-preparing');
            
            // 顯示準備拖拽提示
            showNotification('Hold for 0.3 seconds to start dragging textbox', 'info');
            
            // 設置0.3秒延遲來開始拖拽
            textboxDragStartTimer = setTimeout(function() {
                // 移除準備狀態，開始拖拽
                textboxElement.classList.remove('drag-preparing');
                isTextboxDragging = true;
                textboxElement.classList.add('dragging');
                
                // 顯示拖拽開始提示
                showNotification('Textbox drag started - you can now move it', 'success');
                
                // 添加全域事件監聽器
                const onMouseMove = function(e) {
                    if (!isTextboxDragging) return;
                    
                    // 計算鼠標移動的距離（屏幕像素）
                    const deltaX = e.clientX - startMouseX;
                    const deltaY = e.clientY - startMouseY;
                    
                    // 將屏幕像素的移動轉換為畫布座標的偏移
                    // 這樣可以確保文字框在縮放時保持正確的相對位置
                    const canvasDeltaX = deltaX / (window.currentScale || 1);
                    const canvasDeltaY = deltaY / (window.currentScale || 1);
                    
                    // 更新文字框的畫布座標偏移量
                    defectMarkData.textboxOffsetX = startTextboxOffsetX + canvasDeltaX;
                    defectMarkData.textboxOffsetY = startTextboxOffsetY + canvasDeltaY;
                    
                    // 立即更新缺陷標記的視覺位置
                    updateDefectMarkPosition(dotElement, textboxElement, 
                        document.querySelector(`.defect-mark-connection[data-defect-mark-id="${defectMarkData.id}"]`), 
                        defectMarkData);
                };
                
                const onMouseUp = function() {
                    isTextboxDragging = false;
                    textboxElement.classList.remove('dragging');
                    saveDefectMarksToStorage();
                    document.removeEventListener('mousemove', onMouseMove);
                    document.removeEventListener('mouseup', onMouseUp);
                };
                
                document.addEventListener('mousemove', onMouseMove);
                document.addEventListener('mouseup', onMouseUp);
            }, 300); // 0.3秒延遲
            
            // 保存拖拽開始數據，用於取消拖拽
            textboxDragStartData = {
                startMouseX: startMouseX,
                startMouseY: startMouseY,
                startTextboxOffsetX: startTextboxOffsetX,
                startTextboxOffsetY: startTextboxOffsetY
            };
        });
        
        // 圓點鼠標抬起時取消拖拽開始計時器
        dotElement.addEventListener('mouseup', function(e) {
            if (dotDragStartTimer) {
                clearTimeout(dotDragStartTimer);
                dotDragStartTimer = null;
            }
            if (dotDragStartData) {
                dotDragStartData = null;
            }
            // 移除拖拽準備狀態
            dotElement.classList.remove('drag-preparing');
        });
        
        // 圓點鼠標離開時取消拖拽開始計時器
        dotElement.addEventListener('mouseleave', function(e) {
            if (dotDragStartTimer) {
                clearTimeout(dotDragStartTimer);
                dotDragStartTimer = null;
            }
            if (dotDragStartData) {
                dotDragStartData = null;
            }
            // 移除拖拽準備狀態
            dotElement.classList.remove('drag-preparing');
        });
        
        // 文字框鼠標抬起時取消拖拽開始計時器
        textboxElement.addEventListener('mouseup', function(e) {
            if (textboxDragStartTimer) {
                clearTimeout(textboxDragStartTimer);
                textboxDragStartTimer = null;
            }
            if (textboxDragStartData) {
                textboxDragStartData = null;
            }
            // 移除拖拽準備狀態
            textboxElement.classList.remove('drag-preparing');
        });
        
        // 文字框鼠標離開時取消拖拽開始計時器
        textboxElement.addEventListener('mouseleave', function(e) {
            if (textboxDragStartTimer) {
                clearTimeout(textboxDragStartTimer);
                textboxDragStartTimer = null;
            }
            if (textboxDragStartData) {
                textboxDragStartData = null;
            }
            // 移除拖拽準備狀態
            textboxElement.classList.remove('drag-preparing');
        });
    }
    
    // 顯示缺陷標記刪除按鈕
    function showDefectMarkDeleteButton(defectMarkId, clientX, clientY) {
        // 隱藏所有現有的刪除按鈕
        hideAllDefectMarkDeleteButtons();
        
        // 創建刪除按鈕
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'defect-mark-delete-btn';
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.title = `Delete Defect Mark: ${defectMarkId}`;
        deleteBtn.style.position = 'fixed';
        deleteBtn.style.left = clientX + 'px';
        deleteBtn.style.top = (clientY - 40) + 'px'; // 顯示在紅色圓點上方
        deleteBtn.style.zIndex = '10000';
        
        // 添加點擊事件
        deleteBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            deleteDefectMark(defectMarkId);
            hideAllDefectMarkDeleteButtons();
        });
        
        // 添加到頁面
        document.body.appendChild(deleteBtn);
        
        window.logger.log('Defect mark delete button shown for:', defectMarkId);
    }
    
    // 隱藏所有缺陷標記刪除按鈕
    function hideAllDefectMarkDeleteButtons() {
        const deleteButtons = document.querySelectorAll('.defect-mark-delete-btn');
            window.logger.log('hideAllDefectMarkDeleteButtons called. Found delete buttons:', deleteButtons.length);
        deleteButtons.forEach(btn => {
            window.logger.log('Removing defect mark delete button:', btn);
            btn.remove();
        });
    }
    
    // 刪除缺陷標記
    function deleteDefectMark(defectMarkId) {
        const index = window.defectMarks.findIndex(d => d.id === defectMarkId);
        if (index >= 0) {
            const defectMark = window.defectMarks[index];
            const defectNo = defectMark.defectNo;
            
            // 從缺陷標記數組中刪除
            window.defectMarks.splice(index, 1);
            saveDefectMarksToStorage();
                                if (typeof window.redrawDefectMarks === 'function') {
                                    window.redrawDefectMarks();
                                }
            
            // 同時從 defectEntries 中刪除對應的記錄
            if (defectNo) {
                const defectEntryIndex = window.defectEntries.findIndex(entry => String(entry.defectNo) === String(defectNo));
                if (defectEntryIndex >= 0) {
                    window.defectEntries.splice(defectEntryIndex, 1);
                    window.logger.log('Deleted corresponding defect entry from defectEntries:', defectNo);
                }
                
                // 也從 submittedDefectEntries 中刪除
                const submittedDefectEntryIndex = window.submittedDefectEntries.findIndex(entry => String(entry.defectNo) === String(defectNo));
                if (submittedDefectEntryIndex >= 0) {
                    window.submittedDefectEntries.splice(submittedDefectEntryIndex, 1);
                    window.logger.log('Deleted corresponding defect entry from submittedDefectEntries:', defectNo);
                }
            }
            
            // 同時更新標籤位置以確保同步
if (typeof window.updateAllLabelPositions === 'function') {
        window.updateAllLabelPositions();
    }
            
            // 更新所有缺陷/標籤詳細表格容器
            if (typeof updateDefectSummaryTable === 'function') {
                if (typeof window.updateDefectSummaryTable === 'function') {
    window.updateDefectSummaryTable();
}
                window.logger.log('Defect summary table updated after defect mark deletion');
            }
            if (typeof updateCategoryTablesFromInspectionRecords === 'function') {
                if (typeof window.updateCategoryTablesFromInspectionRecords === 'function') {
    window.updateCategoryTablesFromInspectionRecords();
}
                window.logger.log('Category tables updated after defect mark deletion');
            }
            
            showNotification('Defect mark deleted successfully!', 'success');
        }
    }

    // Load labels + view from localStorage at startup
    await loadLabelsFromStorage();
    await loadDefectMarksFromStorage();
    loadViewStateFromLocalStorage();
    
    // 現在調用之前跳過的函數
    if (typeof window.redrawLabels === 'function') {
        window.redrawLabels();
    }
    if (typeof window.redrawDefectMarks === 'function') {
        window.redrawDefectMarks();
    }
    
    // 調用全局函數
    if (typeof window.initLabelSizeAdjustment === 'function') {
        window.initLabelSizeAdjustment();
    } else {
        window.logger.log('initLabelSizeAdjustment function not available yet');
    }
    
    if (typeof window.initDefectMarkSizeAdjustment === 'function') {
        window.initDefectMarkSizeAdjustment();
    } else {
        window.logger.log('initDefectMarkSizeAdjustment function not available yet');
    }
    
    // Load label size scale from localStorage
    loadLabelSizeFromLocalStorage();
    
    // Load defect mark size scale from localStorage
    loadDefectMarkSizeFromLocalStorage();
    
    // Note: checkLabelsDataAndShowContent() is called when floor plan overlay is opened,
    // not during page load, since the reminder message is inside the overlay
    
    // Setup initial button event listeners if page is already loaded
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setupOpenPreviousFloorPlanButton();
        if (typeof window.initDefectMarkSizeAdjustment === 'function') {
            window.initDefectMarkSizeAdjustment();
        }
    }

    // File input change event
    if (floorPlanFileInput) {
        floorPlanFileInput.addEventListener('change', async function(e) {
            window.logger.log('PDF file input change event triggered!');
            window.logger.log('Available files:', e.target.files);
            const file = e.target.files[0];
            window.logger.log('Selected file:', file);
            if (file && file.type === 'application/pdf') {
                try {
                    // Show loading
                    uploadFloorPlanBtn.textContent = 'Loading...';
                    uploadFloorPlanBtn.disabled = true;
                    
                    // Load PDF using the centralized function
                    const arrayBuffer = await file.arrayBuffer();
                    await loadPDFFromArrayBuffer(arrayBuffer, file.name);
                    
                    // Reset button text
                    uploadFloorPlanBtn.textContent = 'Choose File';
                    uploadFloorPlanBtn.disabled = false;
                    
                    // PDF rendering is handled in loadPDFFromArrayBuffer
                    // Show viewer
                    floorPlanUploadArea.style.display = 'none';
                    floorPlanViewer.style.display = 'flex';
                    
                    // PDF loading is now complete via loadPDFFromArrayBuffer
                    window.logger.log('PDF loaded successfully via loadPDFFromArrayBuffer');
                    
                } catch (error) {
                    window.logger.error('Error loading PDF:', error);
                    alert('Error loading PDF file. Please try again.');
                    uploadFloorPlanBtn.textContent = 'Choose File';
                    uploadFloorPlanBtn.disabled = false;
                }
            } else {
                alert('Please select a valid PDF file.');
            }
        });
    }
    
    // Function to check labels data and show appropriate content
    async function checkLabelsDataAndShowContent() {
        window.logger.log('checkLabelsDataAndShowContent called');
        
        // 確保 skipDefectMarksLoad 標誌為 false，允許缺陷標記載入
        window.skipDefectMarksLoad = false;
        window.logger.log('Reset skipDefectMarksLoad flag to allow defect marks loading');
        
        // Debug: Check all localStorage keys related to floor plan
        window.logger.log('All storage keys:', Object.keys(localStorage));
        window.logger.log('pne_floorplan_labels:', localStorage.getItem('pne_floorplan_labels'));
        window.logger.log('pne_floorplan_defect_marks:', localStorage.getItem('pne_floorplan_defect_marks'));
        window.logger.log('pne_floorplan_filename:', localStorage.getItem('pne_floorplan_filename'));
        window.logger.log('pne_floorplan_data:', localStorage.getItem('pne_floorplan_data'));
        
        // Load labels and defect marks from localStorage first
        // 只有在 window.labels 為空時才從存儲載入，避免覆蓋已載入的標籤
        if (!window.labels || window.labels.length === 0) {
        await loadLabelsFromStorage();
            window.logger.log('Loaded labels from storage in checkLabelsDataAndShowContent');
        } else {
            window.logger.log('Skipping labels load - already have labels:', window.labels.length);
        }
        
        await loadDefectMarksFromStorage();
        
        window.logger.log('Labels loaded from localStorage:', window.labels);
        window.logger.log('Labels length:', window.labels ? window.labels.length : 'labels is null/undefined');
        
        const labelsDataReminder = document.getElementById('labelsDataReminder');
        const uploadPlaceholder = document.getElementById('uploadPlaceholder');
        const previousFileName = document.getElementById('previousFileName');
        
        window.logger.log('labelsDataReminder element:', labelsDataReminder);
        window.logger.log('uploadPlaceholder element:', uploadPlaceholder);
        
        // Check both labels and defect marks for reminder
        const hasLabels = window.labels && window.labels.length > 0;
        const hasDefectMarks = defectMarks && defectMarks.length > 0;
        window.logger.log('Has labels:', hasLabels, 'Has defect marks:', hasDefectMarks);
        
        if (hasLabels || hasDefectMarks) {
            window.logger.log('Showing reminder message - labels found:', window.labels.length, 'defect marks found:', defectMarks.length);
            // Show reminder if there are labels
            if (labelsDataReminder) labelsDataReminder.style.display = 'block';
            if (uploadPlaceholder) uploadPlaceholder.style.display = 'none';
            
            // Try to get previous file name and data from storage
            const previousFile = localStorage.getItem('pne_floorplan_filename');
            const floorPlanDataStr = localStorage.getItem('pne_floorplan_data');
            
            if (previousFile && previousFileName) {
                previousFileName.textContent = previousFile;
            }
            
            // Display additional file details if available
            const fileDetails = document.getElementById('fileDetails');
            if (fileDetails && floorPlanDataStr) {
                try {
                    const floorPlanData = JSON.parse(floorPlanDataStr);
                    const uploadDate = new Date(floorPlanData.uploadDate).toLocaleDateString();
                    const fileSizeKB = Math.round(floorPlanData.fileSize / 1024);
                    
                    // Get defect marks count - use saved count if available, otherwise get current count
                    let defectMarksCount = floorPlanData.defectMarksCount || 0;
                    if (defectMarksCount === 0) {
                        // Fallback to current count if saved count is not available
                        const currentDefectMarks = localStorage.getItem('pne_floorplan_defect_marks');
                        try {
                            if (currentDefectMarks) {
                                const parsedDefectMarks = JSON.parse(currentDefectMarks);
                                defectMarksCount = Array.isArray(parsedDefectMarks) ? parsedDefectMarks.length : 0;
                            }
                        } catch (e) {
                            window.logger.error('Error parsing defect marks for display:', e);
                        }
                    }
                    
                    fileDetails.innerHTML = `
                        <div>📅 Uploaded: ${uploadDate}</div>
                        <div>📏 Dimensions: ${Math.round(floorPlanData.dimensions.width)} × ${Math.round(floorPlanData.dimensions.height)} px</div>
                        <div>📄 Pages: ${floorPlanData.pageCount}</div>
                        <div>🏷️ Labels: ${floorPlanData.labelsCount}</div>
                        <div>🔴 Defect Marks: ${defectMarksCount}</div>
                        <div>💾 Size: ${fileSizeKB} KB</div>
                    `;
                } catch (e) {
                    window.logger.error('Error parsing floor plan data:', e);
                    fileDetails.innerHTML = '<div>⚠️ File details unavailable</div>';
                }
            }
            
            // Render labels and defect marks on the canvas if floor plan is already loaded
            const floorPlanCanvas = document.getElementById('floorPlanCanvas');
            if (floorPlanCanvas && floorPlanCanvas.width > 0) {
                // Use setTimeout to ensure the canvas is fully rendered before drawing labels
                setTimeout(() => {
                    if (typeof window.redrawLabels === 'function') {
                        window.redrawLabels();
                    }
                    if (typeof window.redrawDefectMarks === 'function') {
                        window.redrawDefectMarks();
                    }
                    window.logger.log('Rendered existing labels and defect marks on canvas');
                }, 100);
            } else {
                // Canvas not ready yet, but we have labels/defect marks data
                // This means we need to render them when PDF is loaded
                window.logger.log('Canvas not ready yet, will render labels/defect marks when PDF loads');
            }
            
            // 檢查是否有待渲染的標籤和缺陷標記（來自頁面重新載入）
            if (window.pendingLabelsRedraw || window.pendingDefectMarksRedraw) {
                window.logger.log('Found pending redraw flags - labels:', window.pendingLabelsRedraw, 'defect marks:', window.pendingDefectMarksRedraw);
                
                // 清除待渲染標誌
                if (window.pendingLabelsRedraw) {
                    window.pendingLabelsRedraw = false;
                }
                if (window.pendingDefectMarksRedraw) {
                    window.pendingDefectMarksRedraw = false;
                }
            }
        } else {
            window.logger.log('No labels found, showing normal upload area');
            // Show normal upload area if no labels
            if (labelsDataReminder) labelsDataReminder.style.display = 'none';
            if (uploadPlaceholder) uploadPlaceholder.style.display = 'block';
        }
        
        // Setup the button event listener after content is shown
        setupOpenPreviousFloorPlanButton();
        
        // 重新設置雙擊事件監聽器，確保缺陷標記創建功能正常
        if (typeof setupDoubleClickHandler === 'function') {
            setupDoubleClickHandler();
            window.logger.log('Double-click handler re-initialized for defect mark creation');
        }
    }

    // Add event listener for "Open Previous Floor Plan" button
    function setupOpenPreviousFloorPlanButton() {
        const openPreviousFloorPlanBtn = document.getElementById('openPreviousFloorPlanBtn');
        if (openPreviousFloorPlanBtn) {
            // Remove existing event listeners to avoid duplicates
            openPreviousFloorPlanBtn.replaceWith(openPreviousFloorPlanBtn.cloneNode(true));
            
            // Get the new button reference
            const newOpenPreviousFloorPlanBtn = document.getElementById('openPreviousFloorPlanBtn');
            if (newOpenPreviousFloorPlanBtn) {
                newOpenPreviousFloorPlanBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation(); // Prevent global click handler interference
                    // Trigger file input click to open file dialog
                    if (floorPlanFileInput) {
                            floorPlanFileInput.click();
                    }
                });
            }
        }
    }

    // Handle upload floor plan action from PNE dropdown
    const uploadFloorPlanMenuItem = document.querySelector('.pne-dropdown-item[data-action="uploadfloorplan"]');
    if (uploadFloorPlanMenuItem) {
        uploadFloorPlanMenuItem.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent global click handler interference
            
            // 關閉下拉選單
            const pneDropdown = document.querySelector('.pne-dropdown');
            if (pneDropdown) {
                pneDropdown.style.display = 'none';
            }
            floorPlanOverlay.style.display = 'flex';
            checkLabelsDataAndShowContent();
            
            // 初始化滑塊功能
            setTimeout(() => {
                if (typeof window.initLabelSizeAdjustment === 'function') {
                    window.initLabelSizeAdjustment();
                }
                if (typeof window.initDefectMarkSizeAdjustment === 'function') {
                    window.initDefectMarkSizeAdjustment();
                }
            }, 100);
        });
    }


    // Clicking thumbnail opens overlay
    const floorplanThumb = document.getElementById('floorplanThumb');
    if (floorplanThumb) {
        floorplanThumb.addEventListener('click', function(e) {
            e.stopPropagation();
            floorPlanOverlay.style.display = 'flex';
            checkLabelsDataAndShowContent();
            
            // 初始化滑塊功能
            setTimeout(() => {
                if (typeof window.initLabelSizeAdjustment === 'function') {
                    window.initLabelSizeAdjustment();
                }
                if (typeof window.initDefectMarkSizeAdjustment === 'function') {
                    window.initDefectMarkSizeAdjustment();
                }
            }, 100);
        });
    }

    // Quick Label Switch functionality
    const quickLabelSwitch = document.getElementById('quickLabelSwitch');
    let quickLabelMode = false;
    let mouseTrackingActive = false;
    
    // Mouse tracking function for quick label instruction
    function updateQuickLabelInstructionPosition(event) {
        if (!mouseTrackingActive) return;
        
        const quickLabelInstruction = document.getElementById('quickLabelInstruction');
        if (quickLabelInstruction && quickLabelInstruction.style.display !== 'none') {
            const offset = 30; // 30px offset from mouse pointer
            const x = event.clientX + offset;
            const y = event.clientY + offset;
            
            quickLabelInstruction.style.left = x + 'px';
            quickLabelInstruction.style.top = y + 'px';
        }
    }
    
    if (quickLabelSwitch) {
        quickLabelSwitch.addEventListener('change', function() {
            quickLabelMode = this.checked;
            window.logger.log('Quick Label mode:', quickLabelMode ? 'ON' : 'OFF');
            
            const floorPlanViewer = document.getElementById('floorPlanViewer');
            const quickLabelInstruction = document.getElementById('quickLabelInstruction');
            
            if (quickLabelMode) {
                showNotification('Quick Label mode enabled - Double click on floor plan to create labels', 'info');
                // 設定滑鼠指針為十字形
                if (floorPlanViewer) {
                    floorPlanViewer.style.cursor = 'crosshair';
                }
                // 顯示持續提醒訊息並啟用滑鼠追蹤
                if (quickLabelInstruction) {
                    quickLabelInstruction.style.display = 'block';
                    mouseTrackingActive = true;
                }
            } else {
                showNotification(getText('quickLabelModeDisabled'), 'info');
                // 恢復預設滑鼠指針
                if (floorPlanViewer) {
                    floorPlanViewer.style.cursor = 'grab';
                }
                // 隱藏提醒訊息並停用滑鼠追蹤
                if (quickLabelInstruction) {
                    quickLabelInstruction.style.display = 'none';
                    mouseTrackingActive = false;
                }
            }
        });
    }
    
    // Add global mouse move listener for quick label instruction tracking
    document.addEventListener('mousemove', updateQuickLabelInstructionPosition);
    
    // Function to setup double-click handler
    function setupDoubleClickHandler() {
        const floorPlanViewer = document.getElementById('floorPlanViewer');
        window.logger.log('Setting up double-click handler on floor plan viewer:', floorPlanViewer);
        if (floorPlanViewer) {
            // Remove any existing listener first
            floorPlanViewer.removeEventListener('dblclick', handleFloorPlanDoubleClick);
            floorPlanViewer.addEventListener('dblclick', handleFloorPlanDoubleClick);
            window.logger.log('Double-click event listener added successfully to floorPlanViewer');
        } else {
            window.logger.error('Floor plan viewer element not found');
        }
    }
    
    // Double-click handler function
    function handleFloorPlanDoubleClick(e) {
        window.logger.log('Double-click event triggered on floor plan content');
            
            // Prevent default double-click behavior
            e.preventDefault();
            e.stopPropagation();
            
            // Get the click position relative to the floor plan viewer
            const floorPlanViewer = document.getElementById('floorPlanViewer');
        if (!floorPlanViewer) {
            window.logger.error('Floor plan viewer not found in double-click handler');
            return;
        }
            
            // Use the same position calculation as the existing label system
            const rect = floorPlanViewer.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            
            // Convert to canvas coordinates (same as existing system)
            const canvasX = (clickX - (window.translateX || 0)) / (window.currentScale || 1);
            const canvasY = (clickY - (window.translateY || 0)) / (window.currentScale || 1);
            
        // Check if we have pending defect data from defect window
        window.logger.log('Double-click detected, checking for pending defect data:', window.pendingDefectData);
        if (window.pendingDefectData) {
            window.logger.log('Creating defect mark from pending data at:', clickX, clickY);
            createDefectMarkFromPendingData(clickX, clickY, canvasX, canvasY);
            return;
        } else {
            window.logger.log('No pending defect data found, skipping defect mark creation');
        }
        
        // Otherwise, handle quick label creation if in quick label mode
        if (!quickLabelMode) {
            window.logger.log('Quick label mode is disabled, no action taken');
            return;
        }
        
        window.logger.log('Quick label double-click detected at:', e.clientX, e.clientY);
        window.logger.log('Quick label click position relative to viewer:', clickX, clickY);
            window.logger.log('Quick label canvas coordinates:', canvasX, canvasY);
            window.logger.log('Current scale:', window.currentScale, 'Translate:', window.translateX, window.translateY);
            
            // Create quick label with precise positioning
            createQuickLabel(clickX, clickY, canvasX, canvasY);
    }
    
    // Setup double-click handler initially
    setupDoubleClickHandler();
    
    // Function to enter defect mark placement mode
    function enterDefectMarkPlacementMode() {
        window.logger.log('Entering defect mark placement mode...');
        window.logger.log('Current pendingDefectData:', window.pendingDefectData);
        
        // 設置全局缺陷標記創建模式標誌
        window.isDefectMarkCreationMode = true;
        
        const floorPlanViewer = document.getElementById('floorPlanViewer');
        if (!floorPlanViewer) {
            window.logger.error('Floor plan viewer not found');
            return;
        }
        
        window.logger.log('Floor plan viewer found:', floorPlanViewer);
        
        // Add the creating-defect-mark class for visual feedback
        floorPlanViewer.classList.add('creating-defect-mark');
        window.logger.log('Added creating-defect-mark class');
        window.logger.log('Floor plan viewer classes:', floorPlanViewer.className);
        window.logger.log('Floor plan viewer computed styles:', window.getComputedStyle(floorPlanViewer).cursor);
        
        // 設定滑鼠指針為十字形
        floorPlanViewer.style.cursor = 'crosshair';
        
        // 顯示缺陷標記提醒訊息
        const defectMarkInstruction = document.getElementById('defectMarkInstruction');
        window.logger.log('Looking for defect mark instruction element:', defectMarkInstruction);
        if (defectMarkInstruction) {
            defectMarkInstruction.style.display = 'block';
            window.logger.log('Defect mark instruction displayed successfully');
        } else {
            window.logger.error('Defect mark instruction element not found!');
        }
        
        // Add ESC key listener for cancellation (remove any existing first)
        document.removeEventListener('keydown', handleDefectMarkPlacementEsc);
        document.addEventListener('keydown', handleDefectMarkPlacementEsc);
        window.logger.log('Added ESC key listener');
        
        // Show notification
        if (typeof showNotification === 'function') {
            showNotification('Double-click on the floor plan to place the defect mark (Press ESC to cancel)', 'info');
        }
        
        window.logger.log('Defect mark placement mode activated');
    }
    
    // Function to exit defect mark placement mode
    function exitDefectMarkPlacementMode() {
        window.logger.log('Exiting defect mark placement mode...');
        
        // 清除全局缺陷標記創建模式標誌
        window.isDefectMarkCreationMode = false;
        
        const floorPlanViewer = document.getElementById('floorPlanViewer');
        if (floorPlanViewer) {
            floorPlanViewer.classList.remove('creating-defect-mark');
            // 恢復滑鼠指針為抓取樣式
            floorPlanViewer.style.cursor = 'grab';
        }
        
        // 隱藏缺陷標記提醒訊息
        const defectMarkInstruction = document.getElementById('defectMarkInstruction');
        window.logger.log('Hiding defect mark instruction element:', defectMarkInstruction);
        if (defectMarkInstruction) {
            defectMarkInstruction.style.display = 'none';
            window.logger.log('Defect mark instruction hidden successfully');
        } else {
            window.logger.error('Defect mark instruction element not found when trying to hide!');
        }
        
        // Clear pending data
        window.pendingDefectData = null;
        
        // Enable close button and clear waiting state (in case user cancelled)
        window.isWaitingForDefectMarkPlacement = false;
        const closeBtn = document.getElementById('closeFloorPlanBtn');
        if (closeBtn) {
            closeBtn.disabled = false;
            closeBtn.style.opacity = '1';
            closeBtn.style.cursor = 'pointer';
            closeBtn.title = 'Close';
            window.logger.log('Close button enabled - defect mark placement cancelled');
        }
        
        // Remove ESC key listener
        document.removeEventListener('keydown', handleDefectMarkPlacementEsc);
        
        window.logger.log('Defect mark placement mode deactivated');
    }
    
    // ESC key handler for defect mark placement mode
    function handleDefectMarkPlacementEsc(e) {
        if (e.key === 'Escape') {
            exitDefectMarkPlacementMode();
            if (typeof showNotification === 'function') {
                showNotification('Defect mark placement cancelled', 'info');
            }
        }
    }
    
    // Function to create defect mark from pending data at double-click position
    function createDefectMarkFromPendingData(clickX, clickY, canvasX, canvasY) {
        window.logger.log('Creating defect mark from pending data at click position:', clickX, clickY);
        window.logger.log('Creating defect mark from pending data at canvas position:', canvasX, canvasY);
        window.logger.log('Pending defect data:', window.pendingDefectData);
        
        if (!window.pendingDefectData) {
            window.logger.error('No pending defect data available');
            return;
        }
        
        // Create defect mark data using the pending data from defect window
        const defectMarkData = {
            id: Date.now() + Math.random(),
            defectNo: window.pendingDefectData.defectNo,
            recordDate: window.pendingDefectData.inspectionDate,
            photoNo: window.pendingDefectData.photoNumbers,
            categories: window.pendingDefectData.categories,
            defectType: window.pendingDefectData.defectType,
            x: clickX, // Screen coordinates for display
            y: clickY, // Screen coordinates for display
            canvasPosition: {
                x: canvasX, // Canvas coordinates for precise positioning
                y: canvasY  // Canvas coordinates for precise positioning
            }
        };
        
        // Add to defect marks array
        if (!window.defectMarks) {
            window.defectMarks = [];
        }
        window.defectMarks.push(defectMarkData);
        
        // Save to local storage
        if (typeof saveDefectMarksToStorage === 'function') {
            saveDefectMarksToStorage();
        }
        
        // Re-render defect marks
        if (typeof window.redrawDefectMarks === 'function') {
            window.redrawDefectMarks();
        }
        
        // Also update label positions to ensure they stay synchronized
        if (typeof window.updateAllLabelPositions === 'function') {
            window.updateAllLabelPositions();
        }
        
        // Exit placement mode and clear pending data
        exitDefectMarkPlacementMode();
        
        // Disable crosshair cursor and resume normal cursor
        disableCrosshairCursor();
        
        // Enable close button and clear waiting state
        window.isWaitingForDefectMarkPlacement = false;
        const closeBtn = document.getElementById('closeFloorPlanBtn');
        if (closeBtn) {
            closeBtn.disabled = false;
            closeBtn.style.opacity = '1';
            closeBtn.style.cursor = 'pointer';
            closeBtn.title = 'Close';
            window.logger.log('Close button enabled - defect mark placed successfully');
        }
        
        // Show success notification
        if (typeof showNotification === 'function') {
            showNotification('Defect mark created successfully!', 'success');
        }
        
        window.logger.log('Defect mark created and added to defectMarks array');
    }
    
    // Function to create quick label with precise positioning
    function createQuickLabel(clickX, clickY, canvasX, canvasY) {
        window.logger.log('Creating quick label at click position:', clickX, clickY);
        window.logger.log('Creating quick label at canvas position:', canvasX, canvasY);
        
        // Get next label number
        const nextNumber = getNextLabelNumber();
        
        // Create label data with proper structure (same as existing system)
        const labelData = {
            id: Date.now() + Math.random(),
            inspectionNo: nextNumber.toString(),
            x: clickX, // Screen coordinates
            y: clickY, // Screen coordinates
            baseFontSize: window.labelSizeScale || 24,
            canvasPosition: {
                x: canvasX, // Canvas coordinates for precise positioning
                y: canvasY  // Canvas coordinates for precise positioning
            },
            // Add default properties to match existing label structure
            assignedToRecord: null,
            assignedAt: null,
            inspectionDate: null
        };
        
        // Add to labels array - use window.labels
        if (!window.labels) {
            window.labels = [];
        }
        window.labels.push(labelData);
        window.logger.log('Added label to window.labels array, new count:', window.labels.length);
        
        // Create visual label element
        createQuickLabelElement(labelData);
        
        // Trigger label redraw to ensure proper rendering
        if (typeof window.redrawLabels === 'function') {
            window.redrawLabels();
            window.logger.log('Triggered redrawLabels after quick label creation');
        }
        
        // Save to localStorage
        if (typeof saveLabelsToLocalStorage === 'function') {
            if (typeof window.saveLabelsToStorage === 'function') {
            window.saveLabelsToStorage();
        }
            window.logger.log('Saved quick label to localStorage');
        } else if (typeof window.saveLabelsToStorage === 'function') {
            window.saveLabelsToStorage();
            window.logger.log('Saved quick label to localStorage via window function');
        }
        
        showNotification(`Quick label "${nextNumber}" created`, 'success');
        window.logger.log('Quick label created:', labelData);
    }
    
    // Function to get next label number - Modified to prevent auto-renumbering
    function getNextLabelNumber() {
        // Use the same labels variable as the existing system
        const labelsArray = typeof labels !== 'undefined' ? labels : window.labels;
        
        if (typeof labelsArray === 'undefined' || !Array.isArray(labelsArray)) {
            window.logger.log('No existing labels found, starting with number 1');
            return 1;
        }
        
        // Find the highest number in existing labels
        let maxNumber = 0;
        labelsArray.forEach(label => {
            const number = parseInt(label.inspectionNo);
            if (!isNaN(number) && number > maxNumber) {
                maxNumber = number;
            }
        });
        
        const nextNumber = maxNumber + 1;
        window.logger.log('Next label number:', nextNumber, 'from', labelsArray.length, 'existing labels');
        return nextNumber;
    }
    
    // Function to get next available label number (for manual assignment)
    function getNextAvailableLabelNumber() {
        const labelsArray = typeof labels !== 'undefined' ? labels : window.labels;
        
        if (typeof labelsArray === 'undefined' || !Array.isArray(labelsArray)) {
            return 1;
        }
        
        // Find the highest number in existing labels
        let maxNumber = 0;
        labelsArray.forEach(label => {
            const number = parseInt(label.inspectionNo);
            if (!isNaN(number) && number > maxNumber) {
                maxNumber = number;
            }
        });
        
        return maxNumber + 1;
    }
    
    // Function to create quick label - use existing label system
    function createQuickLabelElement(labelData) {
        window.logger.log('Creating quick label element for:', labelData);
        
        // Use the existing createLabelElement function if available
        if (typeof createLabelElement === 'function') {
            const labelElement = createLabelElement(labelData);
            window.logger.log('Created label element using existing function:', labelElement);
            return labelElement;
        }
        
        // Fallback: create basic label element
        const labelLayer = document.getElementById('labelLayer');
        if (!labelLayer) {
            window.logger.error('Label layer not found');
            return null;
        }
        
        const labelElement = document.createElement('div');
        labelElement.className = 'floor-plan-label';
        labelElement.dataset.labelId = labelData.id;
        labelElement.style.position = 'absolute';
        labelElement.style.left = labelData.x + 'px';
        labelElement.style.top = labelData.y + 'px';
        labelElement.style.fontSize = labelData.baseFontSize + 'px';
        labelElement.style.padding = '8px 12px';
        labelElement.style.backgroundColor = '#007EFF';
        labelElement.style.color = 'white';
        labelElement.style.borderRadius = '6px';
        labelElement.style.cursor = 'pointer';
        labelElement.style.zIndex = '1000';
        labelElement.style.pointerEvents = 'auto';
        labelElement.style.transform = 'none';
        labelElement.textContent = labelData.inspectionNo;
        
        // Add click handler for editing
        labelElement.addEventListener('click', function(e) {
            e.stopPropagation();
            // You can add edit functionality here if needed
        });
        
        labelLayer.appendChild(labelElement);
        
        // Update position using the existing position update function
        if (typeof updateSingleLabelPosition === 'function') {
            updateSingleLabelPosition(labelElement, labelData);
            window.logger.log('Updated quick label position using updateSingleLabelPosition');
        }
        
        window.logger.log('Created fallback label element:', labelElement);
        return labelElement;
    }

    // Add Label button
    if (addLabelBtn) {
        addLabelBtn.addEventListener('click', function() {
            // 進入標籤創建模式
            enterLabelCreationMode();
        });
    }
    
    // Add Defect button
    const addDefectBtn = document.getElementById('addDefectBtn');
    if (addDefectBtn) {
        addDefectBtn.addEventListener('click', function() {
            // 缺陷標記創建模式已移除，現在使用雙擊創建
            showNotification('Please use the defect window to create defects, then double-click on the floor plan to place marks', 'info');
        });
    }
    
    // Zoom to 100% button
    const zoomTo100Btn = document.getElementById('zoomTo100Btn');
    if (zoomTo100Btn) {
        zoomTo100Btn.addEventListener('click', function() {
            // 縮放至100%並居中
            zoomTo100AndCenter();
        });
    }
    
    // Close buttons for detail popups
    const closeLabelsDetailBtn = document.getElementById('closeLabelsDetailBtn');
    if (closeLabelsDetailBtn) {
        closeLabelsDetailBtn.addEventListener('click', function() {
            window.logger.log('Closing labels detail popup - saving changes...');
            
            // 保存標籤更改
            if (typeof saveLabelsChanges === 'function') {
                saveLabelsChanges();
            }
            
            // 更新相關表格
            if (typeof updateTablesOnLabelChange === 'function') {
                updateTablesOnLabelChange();
            }
            
            // 關閉彈出表格
            const popup = document.getElementById('labelsDetailPopup');
            if (popup) {
                popup.style.display = 'none';
            }
            
            window.logger.log('Labels detail popup closed and changes saved');
        });
    }
    
    const closeDefectsDetailBtn = document.getElementById('closeDefectsDetailBtn');
    if (closeDefectsDetailBtn) {
        closeDefectsDetailBtn.addEventListener('click', function() {
            window.logger.log('Closing defects detail popup - saving changes...');
            
            // 保存缺陷更改
            if (typeof saveDefectsChanges === 'function') {
                saveDefectsChanges();
            }
            
            // 更新相關表格
            if (typeof updateTablesOnDefectChange === 'function') {
                updateTablesOnDefectChange();
            }
            
            // 關閉彈出表格
            const popup = document.getElementById('defectsDetailPopup');
            if (popup) {
                popup.style.display = 'none';
            }
            
            window.logger.log('Defects detail popup closed and changes saved');
        });
    }
    
    // Save buttons removed - changes are saved automatically
    
    // Close popups when clicking outside
    document.addEventListener('click', function(e) {
        const labelsPopup = document.getElementById('labelsDetailPopup');
        const defectsPopup = document.getElementById('defectsDetailPopup');
        
        if (labelsPopup && labelsPopup.style.display === 'flex') {
            if (e.target === labelsPopup) {
                window.logger.log('Closing labels detail popup by clicking outside - saving changes...');
                
                // 保存標籤更改
                if (typeof saveLabelsChanges === 'function') {
                    saveLabelsChanges();
                }
                
                // 更新相關表格
                if (typeof updateTablesOnLabelChange === 'function') {
                    updateTablesOnLabelChange();
                }
                
                labelsPopup.style.display = 'none';
                window.logger.log('Labels detail popup closed by outside click and changes saved');
            }
        }
        
        if (defectsPopup && defectsPopup.style.display === 'flex') {
            if (e.target === defectsPopup) {
                window.logger.log('Closing defects detail popup by clicking outside - saving changes...');
                
                // 保存缺陷更改
                if (typeof saveDefectsChanges === 'function') {
                    saveDefectsChanges();
                }
                
                // 更新相關表格
                if (typeof updateTablesOnDefectChange === 'function') {
                    updateTablesOnDefectChange();
                }
                
                defectsPopup.style.display = 'none';
                window.logger.log('Defects detail popup closed by outside click and changes saved');
            }
        }
    });
    
    // ESC鍵關閉詳細表格彈出窗口
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const labelsPopup = document.getElementById('labelsDetailPopup');
            const defectsPopup = document.getElementById('defectsDetailPopup');
            
            if (labelsPopup && labelsPopup.style.display === 'flex') {
                window.logger.log('Closing labels detail popup by ESC key - saving changes...');
                
                // 保存標籤更改
                if (typeof saveLabelsChanges === 'function') {
                    saveLabelsChanges();
                }
                
                // 更新相關表格
                if (typeof updateTablesOnLabelChange === 'function') {
                    updateTablesOnLabelChange();
                }
                
                labelsPopup.style.display = 'none';
                window.logger.log('Labels detail popup closed by ESC key and changes saved');
                e.preventDefault(); // 防止其他ESC鍵處理
            }
            
            if (defectsPopup && defectsPopup.style.display === 'flex') {
                window.logger.log('Closing defects detail popup by ESC key - saving changes...');
                
                // 保存缺陷更改
                if (typeof saveDefectsChanges === 'function') {
                    saveDefectsChanges();
                }
                
                // 更新相關表格
                if (typeof updateTablesOnDefectChange === 'function') {
                    updateTablesOnDefectChange();
                }
                
                defectsPopup.style.display = 'none';
                window.logger.log('Defects detail popup closed by ESC key and changes saved');
                e.preventDefault(); // 防止其他ESC鍵處理
            }
        }
    });
    
    // 標籤創建模式狀態
    let isLabelCreationMode = false;
    let pendingLabelData = null;
    
    // 缺陷標記創建模式狀態
    let isDefectMarkCreationMode = false;
    let pendingDefectMarkData = null;
    
    
    // 進入標籤創建模式
    function enterLabelCreationMode() {
        if (!floorPlanCanvas) {
            showNotification('Please upload a floor plan first', 'warning');
            return;
        }
        
        // 打開標籤創建模態框
        openLabelModal();
        
        // 設置創建按鈕的特殊行為
        const createBtn = document.getElementById('labelCreateBtn');
        if (createBtn) {
            createBtn.textContent = 'Create & Place';
            createBtn.onclick = function() {
                // 驗證必填字段 - 只需要 inspection no.
                const inspectionNo = inputInspectionNo.value.trim();
                
                if (!inspectionNo) {
                    alert('Please fill in Inspection No. before creating the label.');
                    return;
                }
                
                // 檢查重複並更新視覺狀態
                const isDuplicate = updateDuplicateStatus(inputInspectionNo, inspectionNo);
                if (isDuplicate) {
                    alert('This Inspection No. already exists in the labels detail table. Please use a different number.');
                    inputInspectionNo.focus();
                    return;
                }
                
                // 準備標籤數據 - 只需要 inspection no.
                pendingLabelData = {
                    inspectionNo: inspectionNo,
                    baseFontSize: labelSizeScale // 設置當前選擇的標籤大小
                };
                
                // 關閉模態框
                closeLabelModal();
                
                // 進入放置模式
                enterLabelPlacementMode();
            };
        }
    }
    
    // 進入缺陷標記創建模式 - 已移除，現在使用雙擊創建
    
    // 進入標籤放置模式
    function enterLabelPlacementMode() {
        if (!pendingLabelData) return;
        
        isLabelCreationMode = true;
        
        // 改變鼠標指針樣式
        if (floorPlanViewer) {
            floorPlanViewer.classList.add('creating-label');
        }
        
        // 顯示提示信息
        showNotification('Click on the floor plan to place the label', 'info');
        
        // 添加點擊事件監聽器
        floorPlanViewer.addEventListener('click', handleLabelPlacement, { once: true });
        
        // 添加ESC鍵取消功能
        const escHandler = function(e) {
            if (e.key === 'Escape') {
                cancelLabelPlacement();
                document.removeEventListener('keydown', escHandler);
            }
        };
        document.addEventListener('keydown', escHandler);
    }
    
    // 進入缺陷標記放置模式 - 已移除，使用新的雙擊創建方式
    
    // 處理標籤放置
    function handleLabelPlacement(e) {
        if (!isLabelCreationMode || !pendingLabelData) return;
        
        e.preventDefault();
        e.stopPropagation();
        
        // 獲取點擊位置
        const rect = floorPlanViewer.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;
        
        // 轉換為畫布座標
        const canvasX = (clickX - (window.translateX || 0)) / (window.currentScale || 1);
        const canvasY = (clickY - (window.translateY || 0)) / (window.currentScale || 1);
        
        // 創建標籤數據
        const labelData = {
            id: Date.now(),
            ...pendingLabelData,
            canvasPosition: { x: canvasX, y: canvasY },
            x: clickX,
            y: clickY,
            baseFontSize: labelSizeScale // 設置當前選擇的標籤大小
        };
        
        // 添加到標籤數組
        labels.push(labelData);
        
        // 保存到本地存儲
        if (typeof window.saveLabelsToStorage === 'function') {
            window.saveLabelsToStorage();
        }
        
        // 重新渲染標籤
        if (typeof window.redrawLabels === 'function') {
            window.redrawLabels();
        }
        
        // 退出創建模式
        exitLabelCreationMode();
        
        // 顯示成功消息
        showNotification('Label created successfully!', 'success');
    }
    
    // 處理缺陷標記放置
    function handleDefectMarkPlacement(e) {
        if (!isDefectMarkCreationMode || !pendingDefectMarkData) return;
        
        e.preventDefault();
        e.stopPropagation();
        
        // 獲取點擊位置
        const rect = floorPlanViewer.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;
        
        // 轉換為畫布座標
        const canvasX = (clickX - (window.translateX || 0)) / (window.currentScale || 1);
        const canvasY = (clickY - (window.translateY || 0)) / (window.currentScale || 1);
        
        // 創建缺陷標記數據
        const defectMarkData = {
            id: Date.now(),
            ...pendingDefectMarkData,
            canvasPosition: { x: canvasX, y: canvasY },
            x: clickX,
            y: clickY,
            textboxOffsetX: 80, // 初始文字框中心點X偏移量（相對於圓點中心的畫布座標）
            textboxOffsetY: 40  // 初始文字框中心點Y偏移量（相對於圓點中心的畫布座標）
        };
        
        // 添加到缺陷標記數組
        window.defectMarks.push(defectMarkData);
        
        // 保存到本地存儲
        saveDefectMarksToStorage();
        
        // 重新渲染缺陷標記
                                if (typeof window.redrawDefectMarks === 'function') {
                                    window.redrawDefectMarks();
                                }
        
        // 同時更新標籤位置以確保同步
if (typeof window.updateAllLabelPositions === 'function') {
        window.updateAllLabelPositions();
    }
        
        // 退出創建模式
        exitDefectMarkCreationMode();
        
        // 顯示成功消息
        showNotification('Defect mark created successfully!', 'success');
    }
    
    // 取消標籤放置
    function cancelLabelPlacement() {
        exitLabelCreationMode();
        showNotification('Label creation cancelled', 'info');
    }
    
    // 取消缺陷標記放置
    function cancelDefectMarkPlacement() {
        exitDefectMarkCreationMode();
        showNotification('Defect mark creation cancelled', 'info');
    }
    
    // 退出標籤創建模式
    function exitLabelCreationMode() {
        isLabelCreationMode = false;
        pendingLabelData = null;
        
        // 恢復鼠標指針樣式
        if (floorPlanViewer) {
            floorPlanViewer.classList.remove('creating-label');
        }
        
        // 移除事件監聽器
        floorPlanViewer.removeEventListener('click', handleLabelPlacement);
        
        // 重置創建按鈕
        const createBtn = document.getElementById('labelCreateBtn');
        if (createBtn) {
            createBtn.textContent = 'Create';
            createBtn.onclick = null;
        }
    }
    
    // 退出缺陷標記創建模式
    function exitDefectMarkCreationMode() {
        isDefectMarkCreationMode = false;
        pendingDefectMarkData = null;
        
        // 恢復鼠標指針樣式
        if (floorPlanViewer) {
            floorPlanViewer.classList.remove('creating-label');
        }
        
        // 移除事件監聽器
        floorPlanViewer.removeEventListener('click', handleDefectMarkPlacement);
        
        // 重置創建按鈕
        const createBtn = document.getElementById('defectMarkCreateBtn');
        if (createBtn) {
            createBtn.textContent = 'Create';
            createBtn.onclick = null;
        }
    }
    
    
    // 更新所有標籤的大小
    function updateAllLabelSizes() {
        if (!labelLayer) return;
        
        const labelElements = labelLayer.querySelectorAll('.floor-plan-label');
        // 使用 window.labels 而不是局部變量 labels
        const labelsArray = window.labels || [];
        
        labelElements.forEach(labelElement => {
            const labelId = labelElement.dataset.labelId;
            const labelData = labelsArray.find(l => l.id == labelId);
            
            if (labelData) {
                // 更新標籤數據中的字體大小
                labelData.baseFontSize = labelSizeScale;
                // 重新計算縮放後的字體大小
                const scaledFontSize = labelSizeScale * (window.currentScale || 1);
                labelElement.style.fontSize = scaledFontSize + 'px';
                
                // 重新計算標籤位置，確保中心點保持不變
                updateSingleLabelPosition(labelElement, labelData);
            }
        });
        
        // 保存更新後的標籤數據
        if (typeof window.saveLabelsToStorage === 'function') {
            window.saveLabelsToStorage();
        }
    }
    
    // 保存標籤大小到本地存儲
    function saveLabelSizeToLocalStorage() {
        try {
            localStorage.setItem('pne_label_size_scale', JSON.stringify(labelSizeScale));
        } catch(error) {
            window.logger.error('Error saving label size scale to storage:', error);
        }
    }
    
    // 從本地存儲載入標籤大小
    function loadLabelSizeFromLocalStorage() {
        try {
            const savedScale = localStorage.getItem('pne_label_size_scale');
            if (savedScale) {
                const scale = parseInt(savedScale);
                if (scale >= 5 && scale <= 60) {
                    window.labelSizeScale = scale;
                    window.logger.log('Loaded label size from localStorage:', scale + 'px');
                }
            } else {
                window.logger.log('No saved label size found, using default:', window.labelSizeScale + 'px');
            }
            // 無論是否有保存的值，都嘗試更新UI
            updateLabelSizeUI();
        } catch(error) {
            window.logger.error('Error loading label size scale from localStorage:', error);
            // 即使出錯也要更新UI
            updateLabelSizeUI();
        }
    }
    
    // 更新標籤大小UI
    function updateLabelSizeUI() {
        const slider = document.getElementById('labelSizeSlider');
        const valueDisplay = document.getElementById('labelSizeValue');
        if (slider && valueDisplay) {
            slider.value = window.labelSizeScale;
            valueDisplay.textContent = window.labelSizeScale + 'px';
            window.logger.log('Label size UI updated:', window.labelSizeScale + 'px');
        } else {
            window.logger.log('Label size UI elements not found:', { slider: !!slider, valueDisplay: !!valueDisplay });
        }
    }
    
    // 更新所有缺陷標記的大小
    function updateAllDefectMarkSizes() {
        if (!labelLayer) return;
        
        const dotElements = labelLayer.querySelectorAll('.defect-mark-dot');
        const textboxElements = labelLayer.querySelectorAll('.defect-mark-textbox');
        
        // 創建一個 Map 來關聯圓點和文字框
        const defectMarkMap = new Map();
        
        dotElements.forEach(dotElement => {
            const defectMarkId = dotElement.dataset.defectMarkId;
            if (defectMarkId) {
                defectMarkMap.set(defectMarkId, { dot: dotElement });
            }
        });
        
        textboxElements.forEach(textboxElement => {
            const defectMarkId = textboxElement.dataset.defectMarkId;
            if (defectMarkId && defectMarkMap.has(defectMarkId)) {
                defectMarkMap.get(defectMarkId).textbox = textboxElement;
            }
        });
        
        // 更新每個缺陷標記的大小和位置
        defectMarkMap.forEach((elements, defectMarkId) => {
            if (elements.dot && elements.textbox) {
                const defectMarkData = window.defectMarks.find(d => d.id == defectMarkId);
                if (defectMarkData) {
                    // 找到連接線元素
                    const connectionElement = labelLayer.querySelector(`.defect-mark-connection[data-defect-mark-id="${defectMarkId}"]`);
                    
                    // 重新計算位置和大小（這會確保文字框以中心點為基準，並應用縮放）
                    updateDefectMarkPosition(elements.dot, elements.textbox, connectionElement, defectMarkData);
                }
            }
        });
        
        window.logger.log('All defect mark sizes updated to:', window.defectMarkSizeScale + 'px');
    }
    
    // 更新缺陷標記大小UI
    function updateDefectMarkSizeUI() {
        const slider = document.getElementById('defectSizeSlider');
        const valueDisplay = document.getElementById('defectSizeValue');
        if (slider && valueDisplay) {
            slider.value = window.defectMarkSizeScale;
            valueDisplay.textContent = window.defectMarkSizeScale + 'px';
            window.logger.log('Defect mark size UI updated:', window.defectMarkSizeScale + 'px');
        } else {
            window.logger.log('Defect mark size UI elements not found:', { slider: !!slider, valueDisplay: !!valueDisplay });
        }
    }
    
    // Floor Plan Menu Button and Dropdown
    const floorPlanMenuBtn = document.getElementById('floorPlanMenuBtn');
    const floorPlanDropdown = document.getElementById('floorPlanDropdown');
    
    if (floorPlanMenuBtn && floorPlanDropdown) {
        // Toggle dropdown when menu button is clicked
        floorPlanMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            floorPlanDropdown.style.display = floorPlanDropdown.style.display === 'none' ? 'block' : 'none';
        });
        
        // Handle dropdown item clicks
        floorPlanDropdown.addEventListener('click', function(e) {
            window.logger.log('Floor plan dropdown clicked, target:', e.target);
            const target = e.target.closest('.floor-plan-dropdown-item');
            window.logger.log('Closest floor-plan-dropdown-item:', target);
            if (target) {
                const action = target.getAttribute('data-action');
                window.logger.log('Action:', action);
                if (action === 'new-floor-plan') {
                    // Check if there are existing labels or defect marks
                    if (window.labels.length > 0 || defectMarks.length > 0) {
                        const message = `You have ${window.labels.length} labels and ${defectMarks.length} defect marks. All labels and defect marks will be cleared after uploading a new floor plan. Do you want to continue?`;
                        if (confirm(message)) {
                            // Trigger file input click
                            const floorPlanFileInput = document.getElementById('floorPlanFileInput');
                            if (floorPlanFileInput) {
                                floorPlanFileInput.click();
                            }
                        }
                    } else {
                        // No existing data, directly trigger file input
                        const floorPlanFileInput = document.getElementById('floorPlanFileInput');
                        if (floorPlanFileInput) {
                            floorPlanFileInput.click();
                        }
                    }
                } else if (action === 'show-details') {
                    // Toggle show details dropdown
                    window.logger.log('Show Details button clicked');
                    const showDetailsDropdown = document.getElementById('showDetailsDropdown');
                    const clearDataDropdown = document.getElementById('clearDataDropdown');
                    
                    if (showDetailsDropdown) {
                        const isVisible = showDetailsDropdown.style.display === 'block';
                        
                        // Close clear data dropdown if it's open
                        if (clearDataDropdown && clearDataDropdown.style.display === 'block') {
                            clearDataDropdown.style.display = 'none';
                            window.logger.log('Clear data dropdown closed due to show details click');
                        }
                        
                        showDetailsDropdown.style.display = isVisible ? 'none' : 'block';
                        window.logger.log('Show details dropdown toggled:', !isVisible ? 'shown' : 'hidden');
                    }
                    // Don't close the main dropdown when toggling show details dropdown
                    e.stopPropagation();
                } else if (action === 'clear-data') {
                    // Toggle clear data dropdown
                    window.logger.log('Clear Data button clicked');
                    const clearDataDropdown = document.getElementById('clearDataDropdown');
                    const showDetailsDropdown = document.getElementById('showDetailsDropdown');
                    
                    if (clearDataDropdown) {
                        const isVisible = clearDataDropdown.style.display === 'block';
                        
                        // Close show details dropdown if it's open
                        if (showDetailsDropdown && showDetailsDropdown.style.display === 'block') {
                            showDetailsDropdown.style.display = 'none';
                            window.logger.log('Show details dropdown closed due to clear data click');
                        }
                        
                        clearDataDropdown.style.display = isVisible ? 'none' : 'block';
                        window.logger.log('Clear data dropdown toggled:', !isVisible ? 'shown' : 'hidden');
                        
                        // Debug positioning
                        if (!isVisible) {
                            const rect = clearDataDropdown.getBoundingClientRect();
                            window.logger.log('Clear data dropdown position:', {
                                top: rect.top,
                                left: rect.left,
                                width: rect.width,
                                height: rect.height,
                                display: clearDataDropdown.style.display
                            });
                        }
                    }
                    // Don't close the main dropdown when toggling clear data dropdown
                    e.stopPropagation();
                    return;
                } else if (action === 'clear-all-labels') {
                    // 使用新的綜合清除函數，按照指定順序執行
                    clearAllLabelsDetailTableRecords();
                } else if (action === 'clear-all-defect-marks') {
                    if (window.defectMarks.length > 0) {
                        if (confirm('Are you sure you want to clear all defect marks? This action cannot be undone.')) {
                            window.defectMarks = [];
                            saveDefectMarksToStorage();
                            if (typeof window.redrawDefectMarks === 'function') {
                                window.redrawDefectMarks();
                            }
                            // 同時更新標籤位置以確保同步
if (typeof window.updateAllLabelPositions === 'function') {
        window.updateAllLabelPositions();
    }
                            showNotification('All defect marks cleared successfully!', 'success');
                        }
                    } else {
                        showNotification('No defect marks to clear.', 'info');
                    }
                } else if (action === 'clear-all-data') {
                    if (window.labels.length > 0 || window.defectMarks.length > 0) {
                        if (confirm('Are you sure you want to clear ALL data (labels and defect marks)? This action cannot be undone.')) {
                            window.labels = [];
                            window.defectMarks = [];
                            if (typeof window.saveLabelsToStorage === 'function') {
                    window.saveLabelsToStorage();
                }
                            saveDefectMarksToStorage();
                            if (typeof window.redrawLabels === 'function') {
                                window.redrawLabels();
                            }
                            if (typeof window.redrawDefectMarks === 'function') {
                                window.redrawDefectMarks();
                            }
                            
                            // 更新所有缺陷/標籤詳細表格容器
                            if (typeof updateDefectSummaryTable === 'function') {
                                if (typeof window.updateDefectSummaryTable === 'function') {
    window.updateDefectSummaryTable();
}
                                window.logger.log('Defect summary table updated after clearing all data');
                            }
                            if (typeof updateCategoryTablesFromInspectionRecords === 'function') {
                                if (typeof window.updateCategoryTablesFromInspectionRecords === 'function') {
    window.updateCategoryTablesFromInspectionRecords();
}
                                window.logger.log('Category tables updated after clearing all data');
                            }
                            
                            showNotification('All data cleared successfully!', 'success');
                        }
                    } else {
                        showNotification('No data to clear.', 'info');
                    }
                } else if (action === 'export-to-pdf') {
                    window.logger.log('Export to PDF action triggered');
                    exportFloorPlanAsPDF();
                }
                // Close dropdown after action (except for clear-data and show-details which handle their own closing)
                if (action !== 'clear-data' && action !== 'show-details') {
                    floorPlanDropdown.style.display = 'none';
                }
            }
        });
        
        // Handle clear data dropdown item clicks
        const clearDataDropdown = document.getElementById('clearDataDropdown');
        if (clearDataDropdown) {
            clearDataDropdown.addEventListener('click', function(e) {
                window.logger.log('Clear data dropdown clicked');
                const target = e.target.closest('.clear-data-dropdown-item');
                if (target) {
                    const action = target.getAttribute('data-action');
                    window.logger.log('Clear data action:', action);
                    if (action === 'clear-all-labels') {
                        if (window.labels.length > 0) {
                            if (confirm('Are you sure you want to clear all labels? This action cannot be undone.')) {
                                window.labels = [];
                                if (typeof window.saveLabelsToStorage === 'function') {
                    window.saveLabelsToStorage();
                }
                                if (typeof window.redrawLabels === 'function') {
                                window.redrawLabels();
                            }
                                showNotification('All labels cleared successfully!', 'success');
                            }
                        } else {
                            showNotification('No labels to clear.', 'info');
                        }
                    } else if (action === 'clear-all-defect-marks') {
                        if (defectMarks.length > 0) {
                            if (confirm('Are you sure you want to clear all defect marks? This action cannot be undone.')) {
                                defectMarks = [];
                                saveDefectMarksToStorage();
                                if (typeof window.redrawDefectMarks === 'function') {
                                window.redrawDefectMarks();
                            }
                                // 同時更新標籤位置以確保同步
if (typeof window.updateAllLabelPositions === 'function') {
        window.updateAllLabelPositions();
    }
                                showNotification('All defect marks cleared successfully!', 'success');
                            }
                        } else {
                            showNotification('No defect marks to clear.', 'info');
                        }
                    } else if (action === 'clear-all-data') {
                        if (window.labels.length > 0 || defectMarks.length > 0) {
                            if (confirm('Are you sure you want to clear ALL data (labels and defect marks)? This action cannot be undone.')) {
                                window.labels = [];
                                window.defectMarks = [];
                                if (typeof window.saveLabelsToStorage === 'function') {
                    window.saveLabelsToStorage();
                }
                                saveDefectMarksToStorage();
                                if (typeof window.redrawLabels === 'function') {
                                window.redrawLabels();
                            }
                                if (typeof window.redrawDefectMarks === 'function') {
                                window.redrawDefectMarks();
                            }
                                
                                // 更新所有缺陷/標籤詳細表格容器
                                if (typeof updateDefectSummaryTable === 'function') {
                                    if (typeof window.updateDefectSummaryTable === 'function') {
    window.updateDefectSummaryTable();
}
                                    window.logger.log('Defect summary table updated after clearing all data');
                                }
                                if (typeof updateCategoryTablesFromInspectionRecords === 'function') {
                                    if (typeof window.updateCategoryTablesFromInspectionRecords === 'function') {
    window.updateCategoryTablesFromInspectionRecords();
}
                                    window.logger.log('Category tables updated after clearing all data');
                                }
                                
                                showNotification('All data cleared successfully!', 'success');
                            }
                        } else {
                            showNotification('No data to clear.', 'info');
                        }
                    }
                    // Close both dropdowns after action
                    clearDataDropdown.style.display = 'none';
                    floorPlanDropdown.style.display = 'none';
                }
            });
        }
        
        // Handle show details dropdown item clicks
        const showDetailsDropdown = document.getElementById('showDetailsDropdown');
        if (showDetailsDropdown) {
            showDetailsDropdown.addEventListener('click', function(e) {
                window.logger.log('Show details dropdown clicked');
                const target = e.target.closest('.show-details-dropdown-item');
                if (target) {
                    const action = target.getAttribute('data-action');
                    window.logger.log('Show details action:', action);
                    
                    // 確保樓層平面圖覆蓋層已經開啟
                    const floorPlanOverlay = document.getElementById('floorPlanOverlay');
                    if (floorPlanOverlay && floorPlanOverlay.style.display === 'none') {
                        floorPlanOverlay.style.display = 'flex';
                        checkLabelsDataAndShowContent();
                        
                        // 初始化滑塊功能
                        setTimeout(() => {
                            if (typeof window.initLabelSizeAdjustment === 'function') {
                                window.initLabelSizeAdjustment();
                            }
                            if (typeof window.initDefectMarkSizeAdjustment === 'function') {
                                window.initDefectMarkSizeAdjustment();
                            }
                        }, 100);
                    }
                    
                    // 然後開啟對應的詳細資訊彈窗
                    setTimeout(() => {
                        if (action === 'all-labels-detail') {
                            showLabelsDetailPopup();
                        } else if (action === 'all-defects-detail') {
                            showDefectsDetailPopup();
                        }
                    }, 200); // 稍微延遲以確保樓層平面圖完全載入
                    
                    // Close both dropdowns after action
                    showDetailsDropdown.style.display = 'none';
                    floorPlanDropdown.style.display = 'none';
                }
            });
        }
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!floorPlanMenuBtn.contains(e.target) && !floorPlanDropdown.contains(e.target)) {
                floorPlanDropdown.style.display = 'none';
                if (clearDataDropdown) {
                    clearDataDropdown.style.display = 'none';
                }
                if (showDetailsDropdown) {
                    showDetailsDropdown.style.display = 'none';
                }
            }
        });
    }
    
    // Add event listener for new detail buttons in table headers
    document.addEventListener('click', function(e) {
        const target = e.target.closest('[data-action="all-labels-detail"], [data-action="all-defects-detail"]');
        if (target) {
            const action = target.getAttribute('data-action');
            window.logger.log('Table header detail button clicked:', action);
            
            // 先開啟樓層平面圖覆蓋層
            const floorPlanOverlay = document.getElementById('floorPlanOverlay');
            if (floorPlanOverlay) {
                floorPlanOverlay.style.display = 'flex';
                checkLabelsDataAndShowContent();
                
                // 初始化滑塊功能
                setTimeout(() => {
                    if (typeof window.initLabelSizeAdjustment === 'function') {
                        window.initLabelSizeAdjustment();
                    }
                    if (typeof window.initDefectMarkSizeAdjustment === 'function') {
                        window.initDefectMarkSizeAdjustment();
                    }
                }, 100);
                
                // 然後開啟對應的詳細資訊彈窗
                setTimeout(() => {
                    if (action === 'all-labels-detail') {
                        showLabelsDetailPopup();
                    } else if (action === 'all-defects-detail') {
                        showDefectsDetailPopup();
                    }
                }, 200); // 稍微延遲以確保樓層平面圖完全載入
            }
        }
    });
    
    if (labelCancelBtn) {
        labelCancelBtn.addEventListener('click', function() {
            closeLabelModal();
        });
    }
    
    // Calculate next inspection number function
    function calculateNextInspectionNumber() {
        if (!window.labels || window.labels.length === 0) {
            return 1;
        }
        
        // Get all inspection numbers from existing labels
        const inspectionNumbers = window.labels
            .map(label => {
                const num = parseInt(label.inspectionNo);
                return isNaN(num) ? 0 : num;
            })
            .filter(num => num > 0);
        
        if (inspectionNumbers.length === 0) {
            return 1;
        }
        
        // Find the maximum number and add 1
        const maxNumber = Math.max(...inspectionNumbers);
        return maxNumber + 1;
    }
    
    // Auto number switch functionality removed
    
    // 缺陷標記取消按鈕事件監聽器 - 已移除模態框
    
    // 缺陷標記創建按鈕事件監聽器 - 已移除模態框
    if (labelCreateBtn) {
        labelCreateBtn.addEventListener('click', function() {
            // 檢查是否在創建模式下（按鈕文字為 "Create & Place"）
            if (this.textContent === 'Create & Place') {
                // 這個情況由 enterLabelCreationMode 中的 onclick 處理
                return;
            }
            
            // 驗證必填字段 - 只有檢查編號是必填的
            const inspectionNo = inputInspectionNo.value.trim();
            const floor = inputFloor.value.trim();
            const areaName = inputAreaName.value.trim();
            const roomNo = inputRoomNo.value.trim();
            
            if (!inspectionNo) {
                alert('Please fill in Inspection No. before saving.');
                return;
            }
            
            if (editingLabelId) {
                // 編輯現有標籤 - 檢查是否已分配
                const labelIndex = window.labels.findIndex(label => label.id === editingLabelId);
                if (labelIndex !== -1) {
                    const currentLabel = window.labels[labelIndex];
                    
                    // 如果標籤已經被提交（亮藍色），不允許保存
                    if (currentLabel.submitted) {
                        alert('This label is already submitted and cannot be modified.');
                        return;
                    }
                    
                    // 編輯未分配的標籤
                    const inspectionDate = inputInspectionDate.value;
                    
                    // 更新標籤數據
                    window.labels[labelIndex].inspectionNo = inspectionNo;
                    window.labels[labelIndex].floor = floor;
                    window.labels[labelIndex].areaName = areaName;
                    window.labels[labelIndex].roomNo = roomNo;
                    window.labels[labelIndex].inspectionDate = inspectionDate;
                    
                    // 保存並重新渲染
                    if (typeof window.saveLabelsToStorage === 'function') {
                    window.saveLabelsToStorage();
                }
                    closeLabelModal();
                    // 不調用 redrawLabels，避免標籤變藍色（只有提交數據後才應該變藍）
                    // if (typeof window.redrawLabels === 'function') {
                    //     window.redrawLabels();
                    // }
                    
                    // 同步到 defects detail-table-container（檢查缺陷記錄的變化）
                    syncLabelsToDefectsDetailTable();
                    
                    // 顯示成功消息
                    if (typeof showNotification === 'function') {
                        showNotification('Label updated successfully!', 'success');
                    }
                }
            } else {
                // 創建新標籤（直接創建在中心位置）
                const data = {
                    id: Date.now(),
                    inspectionNo: inspectionNo,
                    floor: floor || '', // 可選字段，如果為空則設為空字串
                    areaName: areaName || '', // 可選字段，如果為空則設為空字串
                    roomNo: roomNo || '', // 可選字段，如果為空則設為空字串
                    inspectionDate: '', // 新標籤不需要檢查日期
                    baseFontSize: labelSizeScale // 設置當前選擇的標籤大小
                };
                // 新的標籤定位系統：使用畫布座標系統（Plan.html方法）
                    if (floorPlanCanvas) {
                        // 取得PDF canvas的實際位置和尺寸
                        const canvasRect = floorPlanCanvas.getBoundingClientRect();
                        
                        // 計算PDF canvas在視窗中的實際中心點
                        const canvasCenterX = canvasRect.left + canvasRect.width / 2;
                        const canvasCenterY = canvasRect.top + canvasRect.height / 2;
                        
                        // 轉換為畫布座標（相對於PDF內容的原始位置）
                    // 這裡我們需要計算相對於PDF內容的座標
                        const canvasX = (canvasCenterX - (window.translateX || 0)) / (window.currentScale || 1);
                        const canvasY = (canvasCenterY - (window.translateY || 0)) / (window.currentScale || 1);
                        
                        // 設置畫布座標
                        data.canvasPosition = { x: canvasX, y: canvasY };
                        
                        // 保留舊座標系統作為後備
                        data.x = canvasCenterX;
                        data.y = canvasCenterY;
                    } else {
                        // 後備方案：使用視口中心
                        const rect = floorPlanViewer.getBoundingClientRect();
                        data.x = rect.width / 2;
                        data.y = rect.height / 2;
                        data.canvasPosition = { x: data.x, y: data.y };
                    }
                labels.push(data);
                if (typeof window.saveLabelsToStorage === 'function') {
                    window.saveLabelsToStorage();
                }
                closeLabelModal();
                                if (typeof window.redrawLabels === 'function') {
                                    window.redrawLabels();
                                }
                
                // 顯示成功消息
                if (typeof showNotification === 'function') {
                    showNotification('Label created successfully!', 'success');
                }
            }
        });
    }

    // 為"Assign to New Record"按鈕添加事件監聽器
    const assignToNewRecordBtn = document.getElementById('assignToNewRecordBtn');
    if (assignToNewRecordBtn) {
        assignToNewRecordBtn.addEventListener('click', function() {
            if (!editingLabelId) {
                showNotification('No label is being edited', 'error');
                return;
            }
            
            // 獲取當前編輯的標籤數據
            const currentLabel = window.labels.find(label => label.id === editingLabelId);
            if (!currentLabel) {
                showNotification('Label data not found', 'error');
                return;
            }
            
            // 檢查標籤是否已經被提交（亮藍色狀態）
            if (currentLabel.submitted) {
                showNotification('This label is already submitted and cannot be reassigned', 'error');
                return;
            }
            
            // 檢查檢查日期是否已填寫
            const inspectionDate = inputInspectionDate ? inputInspectionDate.value.trim() : '';
            if (!inspectionDate) {
                showNotification('Please enter inspection date before saving and assigning to new record', 'warning');
                return;
            }
            
            // 創建包含當前 modal 中最新數據的 label 對象
            const updatedLabelData = {
                ...currentLabel, // 保留原有數據
                inspectionNo: inputInspectionNo.value.trim(),
                floor: inputFloor.value.trim(),
                areaName: inputAreaName.value.trim(),
                roomNo: inputRoomNo.value.trim(),
                inspectionDate: inspectionDate
            };
            
            window.logger.log('Updated label data for assignment:', updatedLabelData);
            
            // 直接執行分配給新記錄的邏輯，使用更新後的數據
            // 不需要先保存，因為 assignLabelToNewRecord 會處理保存
            assignLabelToNewRecord(updatedLabelData);
        });
    }

    // 關閉floor-plan-content的函數
    function closeFloorPlanContent() {
        try {
            // Check if user is waiting to place defect mark
            if (window.isWaitingForDefectMarkPlacement) {
                window.logger.log('Cannot close floor plan content - user must place defect mark first');
                showNotification('Please place the defect mark before closing the floor plan', 'warning');
                return;
            }
            
            const floorPlanOverlay = document.getElementById('floorPlanOverlay');
            if (floorPlanOverlay) {
                floorPlanOverlay.style.display = 'none';
                window.logger.log('Floor plan content closed');
                
                // Reset Quick Label Switch when closing floor plan
                const quickLabelSwitch = document.getElementById('quickLabelSwitch');
                if (quickLabelSwitch) {
                    quickLabelSwitch.checked = false;
                    window.logger.log('Quick Label Switch reset to OFF when closing floor plan content');
                }
                
                // Reset Quick Label mode states
                const floorPlanViewer = document.getElementById('floorPlanViewer');
                const quickLabelInstruction = document.getElementById('quickLabelInstruction');
                if (floorPlanViewer) {
                    floorPlanViewer.style.cursor = 'grab';
                }
                if (quickLabelInstruction) {
                    quickLabelInstruction.style.display = 'none';
                }
                // Reset mouse tracking
                mouseTrackingActive = false;
                
                // Re-render photos to ensure submission status is correct
                if (allPhotos && allPhotos.length > 0) {
                    console.log('🔍 Re-rendering photos after closing floor plan content');
                    const lazyObserver = typeof initLazyLoading === 'function' ? initLazyLoading() : null;
                    renderPhotos(allPhotos, lazyObserver);
                }
            }
        } catch (error) {
            window.logger.error('Error closing floor plan content:', error);
        }
    }


    // 將標籤數據分配到header-fields的函數
    function assignDataToHeaderFields(labelData) {
        try {
            // 設置標記：標題欄位來自標籤分配
            isHeaderFromLabelAssignment = true;
            
            // 獲取header-fields中的輸入框
            const locationIdInput = document.getElementById('locationId');
            const inspectionDateInput = document.getElementById('inspectionDate');
            const floorHeaderInput = document.getElementById('floorHeader');
            const areaNameHeaderInput = document.getElementById('areaNameHeader');
            const roomNoInput = document.getElementById('roomNo');
            
            // 填充數據到對應的header-fields
            if (locationIdInput && labelData.inspectionNo) {
                locationIdInput.value = labelData.inspectionNo;
            }
            
            // 檢查日期需要特殊處理，確保從當前輸入框獲取最新值
            const currentInspectionDate = inputInspectionDate ? inputInspectionDate.value.trim() : '';
            window.logger.log('assignDataToHeaderFields - Current inspection date from input:', currentInspectionDate);
            window.logger.log('assignDataToHeaderFields - Label data inspection date:', labelData.inspectionDate);
            
            if (inspectionDateInput && currentInspectionDate) {
                inspectionDateInput.value = currentInspectionDate;
                window.logger.log('Inspection date set to header field from input:', currentInspectionDate);
            } else if (inspectionDateInput && labelData.inspectionDate) {
                inspectionDateInput.value = labelData.inspectionDate;
                window.logger.log('Inspection date set to header field from label data:', labelData.inspectionDate);
            } else {
                window.logger.log('No inspection date available to set');
            }
            
            if (floorHeaderInput && labelData.floor) {
                floorHeaderInput.value = labelData.floor;
            }
            
            if (areaNameHeaderInput && labelData.areaName) {
                areaNameHeaderInput.value = labelData.areaName;
            }
            
            if (roomNoInput && labelData.roomNo) {
                roomNoInput.value = labelData.roomNo;
            }
            
            // 自動勾選所有header-field的複選框
            const checkboxes = [
                'locationIdCheck',
                'inspectionDateCheck', 
                'floorHeaderCheck',
                'areaNameHeaderCheck',
                'roomNoCheck'
            ];
            
            checkboxes.forEach(checkboxId => {
                const checkbox = document.getElementById(checkboxId);
                if (checkbox) {
                    checkbox.checked = true;
                }
            });
            
            // 觸發複選框change事件以更新Submit按鈕狀態
            checkboxes.forEach(checkboxId => {
                const checkbox = document.getElementById(checkboxId);
                if (checkbox) {
                    checkbox.dispatchEvent(new Event('change'));
                }
            });
            
            window.logger.log('Header fields updated with label data:', {
                inspectionNo: labelData.inspectionNo,
                inspectionDate: labelData.inspectionDate,
                floor: labelData.floor,
                areaName: labelData.areaName,
                roomNo: labelData.roomNo
            });
            
        } catch (error) {
            window.logger.error('Error assigning data to header fields:', error);
        }
    }

    // 分配標籤給新記錄的函數
    function assignLabelToNewRecord(labelData) {
        try {
            // 獲取當前檢查日期值
            const currentInspectionDate = inputInspectionDate ? inputInspectionDate.value.trim() : '';
            window.logger.log('Current inspection date from input:', currentInspectionDate);
            window.logger.log('Original label data inspection date:', labelData.inspectionDate);
            
            // 創建新的記錄數據
            const newRecord = {
                id: Date.now(),
                inspectionNo: labelData.inspectionNo,
                floor: labelData.floor,
                areaName: labelData.areaName,
                roomNo: labelData.roomNo,
                inspectionDate: currentInspectionDate,
                labelId: labelData.id,
                assignedAt: new Date().toISOString(),
                status: 'assigned'
            };
            
            window.logger.log('New record created:', newRecord);
            
            // 這裡可以添加將記錄保存到數據庫或本地存儲的邏輯
            // 目前先保存到localStorage作為示例
            const existingRecords = JSON.parse(localStorage.getItem('pne_assigned_records') || '[]');
            existingRecords.push(newRecord);
            localStorage.setItem('pne_assigned_records', JSON.stringify(existingRecords));
            
            // 不更新標籤狀態，保持標籤原樣（不設置分配狀態，不更新檢查日期）
            // labelData.assignedToRecord = newRecord.id; // 移除這行，不讓標籤變藍色
            // labelData.assignedAt = newRecord.assignedAt; // 移除這行，不更新分配時間
            // labelData.inspectionDate = currentInspectionDate; // 移除這行，不更新檢查日期
            // 不設置 assigned 狀態，標籤保持原色和原設置
            
            // 移除assignedToRecord的設置，標籤不再變藍色
            // 標籤只會在submitted狀態時變為亮藍色
            
            // 不更新 window.labels 數組中的標籤，保持標籤原樣
            // const labelIndex = window.labels.findIndex(label => label.id === labelData.id);
            // if (labelIndex >= 0) {
            //     window.labels[labelIndex] = labelData;
            // }
            
            window.logger.log('Record created without updating label data:', newRecord);
            
            // 不保存標籤數據到localStorage，保持標籤原樣
            // saveLabelsToLocalStorage();
            
            // 將標籤數據分配到header-fields中（這是必要的功能）
            assignDataToHeaderFields(labelData);
            
            // 顯示成功消息
            showNotification(`Label "${labelData.inspectionNo}" successfully saved and assigned to new record!`, 'success');
            
            // 關閉模態框
            closeLabelModal();
            
            // 不重新渲染標籤，保持標籤原樣
            // if (typeof window.redrawLabels === 'function') {
            //     window.redrawLabels();
            // }
            
            // 關閉floor-plan-content
            closeFloorPlanContent();
            
            // 驗證數據是否正確保存
            window.logger.log('Final verification - Label data after assignment:', {
                id: labelData.id,
                inspectionNo: labelData.inspectionNo,
                inspectionDate: labelData.inspectionDate,
                floor: labelData.floor,
                areaName: labelData.areaName,
                roomNo: labelData.roomNo,
                assignedToRecord: null, // 移除assignedToRecord的設置
                assignedAt: null // 移除assignedAt的設置
            });
            
            window.logger.log('Label assigned to new record:', {
                labelData: labelData,
                newRecord: newRecord,
                headerFieldsUpdated: true
            });
            
        } catch (error) {
            window.logger.error('Error assigning label to new record:', error);
            showNotification('Error saving and assigning label to new record', 'error');
        }
    }

    // 舊的標籤事件處理代碼已移除，新系統使用DOM元素
    
    // Export floor plan as PDF blob (for ZIP export)
    async function exportFloorPlanAsPDFBlob() {
        try {
            // 檢查是否有PDF文件引用
            const floorPlanData = JSON.parse(localStorage.getItem('pne_floorplan_data') || '{}');
            if (!floorPlanData.fileReference) {
                throw new Error('No PDF file reference found');
            }

            // 檢查是否有標籤或缺陷標記
            if ((!labels || labels.length === 0) && (!defectMarks || defectMarks.length === 0)) {
                throw new Error('No labels or defect marks to export');
            }

            // 獲取原始PDF文件（需要用戶重新選擇）
            return new Promise((resolve, reject) => {
                const fileInput = document.createElement('input');
                fileInput.type = 'file';
                fileInput.accept = 'application/pdf';
                fileInput.style.display = 'none';
                document.body.appendChild(fileInput);

                // 先添加事件監聽器，再觸發點擊
                fileInput.addEventListener('change', async (e) => {
                    const file = e.target.files[0];
                    if (!file) {
                        document.body.removeChild(fileInput);
                        reject(new Error('No file selected'));
                        return;
                    }

                    try {
                        // 讀取PDF文件
                        const arrayBuffer = await file.arrayBuffer();
                        
                        // 使用pdf-lib加載PDF
                        const { PDFDocument, rgb } = PDFLib;
                        const pdfDoc = await PDFDocument.load(arrayBuffer);
                        const newPdfDoc = await PDFDocument.create();

                        // 獲取頁面
                        const pages = pdfDoc.getPages();
                        const [firstPage] = await newPdfDoc.copyPages(pdfDoc, [0]);
                        newPdfDoc.addPage(firstPage);

                        // 獲取頁面尺寸
                        const { width, height } = firstPage.getSize();
                        
                        // 獲取Canvas尺寸用於坐標轉換
                        // 使用 CSS 尺寸而不是實際 canvas 尺寸，因為標籤位置是基於 CSS 尺寸計算的
                        const canvasWidth = parseFloat(floorPlanCanvas.style.width) || floorPlanCanvas.width;
                        const canvasHeight = parseFloat(floorPlanCanvas.style.height) || floorPlanCanvas.height;

                        // 初始化標籤和缺陷標記數組（如果不存在）
                        if (!window.labels) {
                            window.labels = [];
                        }
                        if (!window.defectMarks) {
                            window.defectMarks = [];
                        }
                        
                        window.logger.log('PDF Export - Labels count:', window.labels.length);
                        window.logger.log('PDF Export - Defect marks count:', window.defectMarks.length);

                        // 繪製標籤到PDF
                        if (window.labels.length > 0) {
                            window.labels.forEach(label => {
                                // 檢查是否有canvasPosition，如果沒有則使用舊座標系統
                                if (!label.canvasPosition && (label.x !== undefined || label.y !== undefined)) {
                                    label.canvasPosition = { x: label.x || 0, y: label.y || 0 };
                                }
                                
                                if (label.canvasPosition) {
                                    window.logger.log('Drawing label:', label.id, 'Canvas position:', label.canvasPosition);
                                    drawLabelOnPDF(firstPage, label, canvasWidth, canvasHeight, width, height);
                                } else {
                                    window.logger.warn('Label missing canvasPosition:', label);
                                }
                            });
                        }

                        // 繪製缺陷標記到PDF
                        if (window.defectMarks.length > 0) {
                            window.defectMarks.forEach(defectMark => {
                                // 檢查是否有canvasPosition，如果沒有則使用舊座標系統
                                if (!defectMark.canvasPosition && (defectMark.x !== undefined || defectMark.y !== undefined)) {
                                    defectMark.canvasPosition = { x: defectMark.x || 0, y: defectMark.y || 0 };
                                }
                                
                                if (defectMark.canvasPosition) {
                                    window.logger.log('Drawing defect mark:', defectMark.id, 'Canvas position:', defectMark.canvasPosition);
                                    drawDefectMarkOnPDF(firstPage, defectMark, canvasWidth, canvasHeight, width, height);
                                } else {
                                    window.logger.warn('Defect mark missing canvasPosition:', defectMark);
                                }
                            });
                        }

                        // 生成PDF blob
                        const pdfBytes = await newPdfDoc.save();
                        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
                        
                        resolve(blob);
                        
                    } catch (error) {
                        window.logger.error('Error generating PDF:', error);
                        reject(error);
                    } finally {
                        document.body.removeChild(fileInput);
                    }
                });

                // 在事件監聽器添加完成後觸發點擊
                fileInput.click();
            });

        } catch (error) {
            window.logger.error('Error in exportFloorPlanAsPDFBlob:', error);
            throw error;
        }
    }

    // Export floor plan as PNG blob (for ZIP export) - 保留用於向後兼容
    function exportFloorPlanAsPNG() {
        return new Promise((resolve, reject) => {
            if (!floorPlanCanvas) {
                reject(new Error('No floor plan canvas found'));
                return;
            }
            
            if (labels.length === 0 && defectMarks.length === 0) {
                reject(new Error('No labels or defect marks to export'));
                return;
            }
            
            // First, temporarily hide any modals or overlays that shouldn't be in the export
            const labelModal = document.getElementById('labelModalOverlay');
            const labelModalDisplay = labelModal ? labelModal.style.display : 'none';
            
            if (labelModal) labelModal.style.display = 'none';
            
            // Create a temporary canvas for export at 100% scale
            const exportCanvas = document.createElement('canvas');
            const ctx = exportCanvas.getContext('2d');
            
            // Get the original PDF canvas dimensions
            const originalWidth = floorPlanCanvas.width;
            const originalHeight = floorPlanCanvas.height;
            
            // Set export canvas to original PDF size (100% scale)
            exportCanvas.width = originalWidth;
            exportCanvas.height = originalHeight;
            
            // Draw the PDF content at 100% scale
            ctx.drawImage(floorPlanCanvas, 0, 0, originalWidth, originalHeight);
            
            // Get current view state
            const currentViewScale = window.currentScale || 1;
            const currentTranslateX = window.translateX || 0;
            const currentTranslateY = window.translateY || 0;
            
            // Draw elements in correct layering order: connections first, then dots/textboxes, then labels
            const scaleX = originalWidth / (floorPlanCanvas.style.width ? parseFloat(floorPlanCanvas.style.width) : originalWidth);
            const scaleY = originalHeight / (floorPlanCanvas.style.height ? parseFloat(floorPlanCanvas.style.height) : originalHeight);
            
            // Draw defect mark connections first
            window.defectMarks.forEach(defectMark => {
                if (defectMark.canvasPosition && defectMark.connectionPosition) {
                    ctx.strokeStyle = '#dc3545';
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.moveTo(
                        defectMark.canvasPosition.x * scaleX,
                        defectMark.canvasPosition.y * scaleY
                    );
                    ctx.lineTo(
                        defectMark.connectionPosition.x * scaleX,
                        defectMark.connectionPosition.y * scaleY
                    );
                    ctx.stroke();
                }
            });
            
            // Draw defect mark dots and textboxes
            window.defectMarks.forEach(defectMark => {
                if (defectMark.canvasPosition) {
                    const x = defectMark.canvasPosition.x * scaleX;
                    const y = defectMark.canvasPosition.y * scaleY;
                    
                    // Draw dot
                    ctx.fillStyle = '#dc3545';
                    ctx.beginPath();
                    ctx.arc(x, y, (defectMarkSizeScale || 24) * scaleX / 2, 0, 2 * Math.PI);
                    ctx.fill();
                    
                    // Draw textbox if it has content
                    if (defectMark.connectionPosition && defectMark.photoNumbers) {
                        const textX = defectMark.connectionPosition.x * scaleX;
                        const textY = defectMark.connectionPosition.y * scaleY;
                        
                        ctx.fillStyle = 'white';
                        ctx.strokeStyle = '#dc3545';
                        ctx.lineWidth = 1;
                        const textWidth = ctx.measureText(`Photo no.: ${defectMark.photoNumbers}`).width + 16;
                        const textHeight = 20;
                        
                        const borderRadius = 4 * scaleX; // 4px border radius scaled
                        
                        // Draw rounded rectangle background using path
                        ctx.beginPath();
                        ctx.moveTo(textX - textWidth/2 + borderRadius, textY - textHeight/2);
                        ctx.lineTo(textX + textWidth/2 - borderRadius, textY - textHeight/2);
                        ctx.quadraticCurveTo(textX + textWidth/2, textY - textHeight/2, textX + textWidth/2, textY - textHeight/2 + borderRadius);
                        ctx.lineTo(textX + textWidth/2, textY + textHeight/2 - borderRadius);
                        ctx.quadraticCurveTo(textX + textWidth/2, textY + textHeight/2, textX + textWidth/2 - borderRadius, textY + textHeight/2);
                        ctx.lineTo(textX - textWidth/2 + borderRadius, textY + textHeight/2);
                        ctx.quadraticCurveTo(textX - textWidth/2, textY + textHeight/2, textX - textWidth/2, textY + textHeight/2 - borderRadius);
                        ctx.lineTo(textX - textWidth/2, textY - textHeight/2 + borderRadius);
                        ctx.quadraticCurveTo(textX - textWidth/2, textY - textHeight/2, textX - textWidth/2 + borderRadius, textY - textHeight/2);
                        ctx.closePath();
                        ctx.fill();
                        
                        // Draw rounded rectangle border
                        ctx.beginPath();
                        ctx.moveTo(textX - textWidth/2 + borderRadius, textY - textHeight/2);
                        ctx.lineTo(textX + textWidth/2 - borderRadius, textY - textHeight/2);
                        ctx.quadraticCurveTo(textX + textWidth/2, textY - textHeight/2, textX + textWidth/2, textY - textHeight/2 + borderRadius);
                        ctx.lineTo(textX + textWidth/2, textY + textHeight/2 - borderRadius);
                        ctx.quadraticCurveTo(textX + textWidth/2, textY + textHeight/2, textX + textWidth/2 - borderRadius, textY + textHeight/2);
                        ctx.lineTo(textX - textWidth/2 + borderRadius, textY + textHeight/2);
                        ctx.quadraticCurveTo(textX - textWidth/2, textY + textHeight/2, textX - textWidth/2, textY + textHeight/2 - borderRadius);
                        ctx.lineTo(textX - textWidth/2, textY - textHeight/2 + borderRadius);
                        ctx.quadraticCurveTo(textX - textWidth/2, textY - textHeight/2, textX - textWidth/2 + borderRadius, textY - textHeight/2);
                        ctx.closePath();
                        ctx.stroke();
                        
                        ctx.fillStyle = '#dc3545';
                        ctx.font = 'bold 11px Arial';
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.fillText(`Photo no.: ${defectMark.photoNumbers}`, textX, textY);
                    }
                }
            });
            
            // Draw labels
            labels.forEach(label => {
                if (label.canvasPosition) {
                    const x = label.canvasPosition.x * scaleX;
                    const y = label.canvasPosition.y * scaleY;
                    
                    // Try to get the actual DOM element for styling
                    const labelElement = document.querySelector(`[data-label-id="${label.id}"]`);
                    if (labelElement) {
                        const computedStyle = window.getComputedStyle(labelElement);
                        const labelFontSize = parseFloat(computedStyle.fontSize) * scaleX;
                        ctx.fillStyle = computedStyle.color;
                        ctx.font = `${computedStyle.fontWeight} ${labelFontSize}px ${computedStyle.fontFamily}`;
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.fillText(label.inspectionNo, x, y);
                    } else {
                        // Fallback if element not found
                        ctx.fillStyle = '#FFBE00';
                        ctx.font = 'bold 12px Arial';
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.fillText(label.inspectionNo, x, y);
                    }
                }
            });
            
            // Convert canvas to blob
            exportCanvas.toBlob(function(blob) {
                // Restore modal displays
                if (labelModal) labelModal.style.display = labelModalDisplay;
                
                if (blob) {
                    resolve(blob);
                } else {
                    reject(new Error('Failed to create PNG blob'));
                }
            }, 'image/png');
        });
    }

    // PDF導出診斷功能
    function diagnosePDFExport() {
        const diagnosis = {
            pdfLibLoaded: typeof PDFLib !== 'undefined',
            floorPlanData: JSON.parse(localStorage.getItem('pne_floorplan_data') || '{}'),
            labelsCount: window.labels ? window.labels.length : 0,
            defectMarksCount: window.defectMarks ? window.defectMarks.length : 0,
            hasBase64Data: !!localStorage.getItem('pne_floorplan_base64'),
            floorPlanCanvas: !!document.getElementById('floorPlanCanvas')
        };
        
        window.logger.log('PDF Export Diagnosis:', diagnosis);
        return diagnosis;
    }
    
    // 全域診斷函數，方便調試
    window.diagnosePDFExport = diagnosePDFExport;

    // Export floor plan as PDF function (for direct download)
    async function exportFloorPlanAsPDF() {
        window.logger.log('exportFloorPlanAsPDF function called');
        
        // 先進行診斷
        const diagnosis = diagnosePDFExport();
        
        try {
            // 檢查是否有PDF文件引用
            const floorPlanData = JSON.parse(localStorage.getItem('pne_floorplan_data') || '{}');
            window.logger.log('Floor plan data:', floorPlanData);
            
            // 檢查是否有 PDF 文件引用或者有 base64 數據
            if (!floorPlanData.fileReference && !floorPlanData.hasBase64Data && !floorPlanData.pdfBase64) {
                window.logger.log('No PDF file reference or base64 data found');
                showNotification('請先上傳PDF文件。診斷信息：PDFLib=' + diagnosis.pdfLibLoaded + ', 標籤=' + diagnosis.labelsCount + ', 缺陷=' + diagnosis.defectMarksCount, 'error');
                return;
            }

            // 初始化標籤和缺陷標記數組（如果不存在）
            if (!window.labels) {
                window.labels = [];
            }
            if (!window.defectMarks) {
                window.defectMarks = [];
            }
            
            // 檢查是否有標籤或缺陷標記
            if (window.labels.length === 0 && window.defectMarks.length === 0) {
                showNotification('沒有標籤或缺陷標記需要導出', 'warning');
                return;
            }
            
            window.logger.log('PDF Export - Labels count:', window.labels.length);
            window.logger.log('PDF Export - Defect marks count:', window.defectMarks.length);

            showNotification('正在準備PDF導出...', 'info');

            // 檢查是否有存儲的PDF base64數據
            const pdfBase64 = localStorage.getItem('pne_floorplan_base64') || floorPlanData.pdfBase64;
            const hasBase64Data = floorPlanData.hasBase64Data || pdfBase64;
            window.logger.log('PDF base64 data found:', pdfBase64 ? 'Yes' : 'No');
            window.logger.log('Has base64 data flag:', hasBase64Data);
            
            if (hasBase64Data && pdfBase64) {
                // 如果有 base64 數據，直接使用
                try {
                    // 將base64轉換為ArrayBuffer
                    const binaryString = atob(pdfBase64);
                    const arrayBuffer = new ArrayBuffer(binaryString.length);
                    const uint8Array = new Uint8Array(arrayBuffer);
                    for (let i = 0; i < binaryString.length; i++) {
                        uint8Array[i] = binaryString.charCodeAt(i);
                    }
                    
                    // 檢查pdf-lib是否可用
                    if (typeof PDFLib === 'undefined') {
                        window.logger.error('PDFLib library not loaded');
                        showNotification('PDF處理庫未載入，請重新整理頁面後重試', 'error');
                        return;
                    }
                    window.logger.log('PDFLib available:', typeof PDFLib);
                    
                    // 使用pdf-lib加載PDF
                    const { PDFDocument, rgb } = PDFLib;
                    const pdfDoc = await PDFDocument.load(arrayBuffer);
                    const newPdfDoc = await PDFDocument.create();

                    // 獲取頁面
                    const pages = pdfDoc.getPages();
                    const [firstPage] = await newPdfDoc.copyPages(pdfDoc, [0]);
                    newPdfDoc.addPage(firstPage);

                    // 獲取頁面尺寸
                    const { width, height } = firstPage.getSize();
                    
                    // 獲取Canvas尺寸用於坐標轉換
                    // 使用 CSS 尺寸，因為 canvasPosition 是基於 CSS 尺寸計算的
                    const canvasWidth = parseFloat(floorPlanCanvas.style.width) || floorPlanCanvas.width / (window.outputScale || 1);
                    const canvasHeight = parseFloat(floorPlanCanvas.style.height) || floorPlanCanvas.height / (window.outputScale || 1);

                    window.logger.log('PDF page size:', width, height);
                    window.logger.log('Canvas size:', canvasWidth, canvasHeight);
                    window.logger.log('Current scale:', window.currentScale, 'Translate:', window.translateX, window.translateY);

                    // 初始化標籤和缺陷標記數組（如果不存在）
                    if (!window.labels) {
                        window.labels = [];
                    }
                    if (!window.defectMarks) {
                        window.defectMarks = [];
                    }
                    
                    window.logger.log('PDF Export - Labels count:', window.labels.length);
                    window.logger.log('PDF Export - Defect marks count:', window.defectMarks.length);

                    // 繪製標籤到PDF
                    if (window.labels.length > 0) {
                        window.logger.log('Drawing labels:', window.labels.length);
                        for (const label of window.labels) {
                            // 檢查是否有canvasPosition，如果沒有則使用舊座標系統
                            if (!label.canvasPosition && (label.x !== undefined || label.y !== undefined)) {
                                label.canvasPosition = { x: label.x || 0, y: label.y || 0 };
                            }
                            
                            if (label.canvasPosition) {
                                window.logger.log('Drawing label:', label.id, 'Canvas position:', label.canvasPosition);
                                await drawLabelOnPDF(firstPage, label, canvasWidth, canvasHeight, width, height);
                            } else {
                                window.logger.warn('Label missing canvasPosition:', label);
                            }
                        }
                    }

                    // 繪製缺陷標記到PDF
                    if (window.defectMarks.length > 0) {
                        window.logger.log('Drawing defect marks:', window.defectMarks.length);
                        window.defectMarks.forEach(defectMark => {
                            // 檢查是否有canvasPosition，如果沒有則使用舊座標系統
                            if (!defectMark.canvasPosition && (defectMark.x !== undefined || defectMark.y !== undefined)) {
                                defectMark.canvasPosition = { x: defectMark.x || 0, y: defectMark.y || 0 };
                            }
                            
                            if (defectMark.canvasPosition) {
                                window.logger.log('Drawing defect mark:', defectMark.id, 'Canvas position:', defectMark.canvasPosition);
                                drawDefectMarkOnPDF(firstPage, defectMark, canvasWidth, canvasHeight, width, height);
                            } else {
                                window.logger.warn('Defect mark missing canvasPosition:', defectMark);
                            }
                        });
                    }

                    // 生成並下載PDF
                    window.logger.log('Generating PDF bytes...');
                    const pdfBytes = await newPdfDoc.save();
                    window.logger.log('PDF bytes generated, size:', pdfBytes.length);
                    
                    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
                    window.logger.log('PDF blob created, size:', blob.size);
                    
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = `annotated-${floorPlanData.filename || 'floorplan'}.pdf`;
                    window.logger.log('Download link created:', link.download);
                    
                    // 添加到DOM並觸發下載
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    
                    window.logger.log('PDF download triggered successfully');
                    showNotification('帶標註的PDF文件已生成並下載', 'success');
                    
                } catch (error) {
                    window.logger.error('Error generating PDF from base64:', error);
                    showNotification('生成PDF時發生錯誤: ' + error.message + '。請檢查控制台獲取詳細信息。', 'error');
                    
                    // 提供診斷信息
                    const diagnosis = diagnosePDFExport();
                    console.group('PDF Export Error Diagnosis');
                    window.logger.log('Error:', error);
                    window.logger.log('Diagnosis:', diagnosis);
                    window.logger.log('Floor Plan Data:', floorPlanData);
                    console.groupEnd();
                }
            } else {
                // 如果沒有 base64 數據，需要用戶重新選擇PDF文件
                showNotification('PDF文件內容未找到，請重新上傳PDF文件以進行匯出', 'warning');
                window.logger.log('No base64 data available, requesting user to re-upload PDF');
                return new Promise((resolve, reject) => {
                    const fileInput = document.createElement('input');
                    fileInput.type = 'file';
                    fileInput.accept = 'application/pdf';
                    fileInput.style.display = 'none';
                    document.body.appendChild(fileInput);

                    // 先添加事件監聽器，再觸發點擊
                    fileInput.addEventListener('change', async (e) => {
                        const file = e.target.files[0];
                        if (!file) {
                            document.body.removeChild(fileInput);
                            showNotification('未選擇PDF文件', 'warning');
                            return;
                        }

                        try {
                            // 讀取PDF文件
                            const arrayBuffer = await file.arrayBuffer();
                            
                            // 檢查pdf-lib是否可用
                            if (typeof PDFLib === 'undefined') {
                                window.logger.error('PDFLib library not loaded');
                                showNotification('PDF處理庫未載入，請重新整理頁面後重試', 'error');
                                document.body.removeChild(fileInput);
                                return;
                            }
                            window.logger.log('PDFLib available:', typeof PDFLib);
                            
                            // 使用pdf-lib加載PDF
                            const { PDFDocument, rgb } = PDFLib;
                            const pdfDoc = await PDFDocument.load(arrayBuffer);
                            const newPdfDoc = await PDFDocument.create();

                            // 獲取頁面
                            const pages = pdfDoc.getPages();
                            const [firstPage] = await newPdfDoc.copyPages(pdfDoc, [0]);
                            newPdfDoc.addPage(firstPage);

                            // 獲取頁面尺寸
                            const { width, height } = firstPage.getSize();
                            
                            // 獲取Canvas尺寸用於坐標轉換
                            // 使用 CSS 尺寸而不是實際 canvas 尺寸，因為標籤位置是基於 CSS 尺寸計算的
                            const canvasWidth = parseFloat(floorPlanCanvas.style.width) || floorPlanCanvas.width;
                            const canvasHeight = parseFloat(floorPlanCanvas.style.height) || floorPlanCanvas.height;

                            window.logger.log('PDF page size:', width, height);
                            window.logger.log('Canvas size:', canvasWidth, canvasHeight);

                            // 初始化標籤和缺陷標記數組（如果不存在）
                            if (!window.labels) {
                                window.labels = [];
                            }
                            if (!window.defectMarks) {
                                window.defectMarks = [];
                            }
                            
                            window.logger.log('PDF Export - Labels count:', window.labels.length);
                            window.logger.log('PDF Export - Defect marks count:', window.defectMarks.length);

                            // 繪製標籤到PDF
                            if (window.labels.length > 0) {
                                window.logger.log('Drawing labels:', window.labels.length);
                                window.labels.forEach(label => {
                                    // 檢查是否有canvasPosition，如果沒有則使用舊座標系統
                                    if (!label.canvasPosition && (label.x !== undefined || label.y !== undefined)) {
                                        label.canvasPosition = { x: label.x || 0, y: label.y || 0 };
                                    }
                                    
                                    if (label.canvasPosition) {
                                        window.logger.log('Drawing label:', label.id, 'Canvas position:', label.canvasPosition);
                                        drawLabelOnPDF(firstPage, label, canvasWidth, canvasHeight, width, height);
                                    } else {
                                        window.logger.warn('Label missing canvasPosition:', label);
                                    }
                                });
                            }

                            // 繪製缺陷標記到PDF
                            if (window.defectMarks.length > 0) {
                                window.logger.log('Drawing defect marks:', window.defectMarks.length);
                                window.defectMarks.forEach(defectMark => {
                                    // 檢查是否有canvasPosition，如果沒有則使用舊座標系統
                                    if (!defectMark.canvasPosition && (defectMark.x !== undefined || defectMark.y !== undefined)) {
                                        defectMark.canvasPosition = { x: defectMark.x || 0, y: defectMark.y || 0 };
                                    }
                                    
                                    if (defectMark.canvasPosition) {
                                        window.logger.log('Drawing defect mark:', defectMark.id, 'Canvas position:', defectMark.canvasPosition);
                                        drawDefectMarkOnPDF(firstPage, defectMark, canvasWidth, canvasHeight, width, height);
                                    } else {
                                        window.logger.warn('Defect mark missing canvasPosition:', defectMark);
                                    }
                                });
                            }

                            // 生成並下載PDF
                            window.logger.log('Generating PDF bytes...');
                            const pdfBytes = await newPdfDoc.save();
                            window.logger.log('PDF bytes generated, size:', pdfBytes.length);
                            
                            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
                            window.logger.log('PDF blob created, size:', blob.size);
                            
                            const link = document.createElement('a');
                            link.href = URL.createObjectURL(blob);
                            link.download = `annotated-${floorPlanData.filename || 'floorplan'}.pdf`;
                            window.logger.log('Download link created:', link.download);
                            
                            // 添加到DOM並觸發下載
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                            
                            window.logger.log('PDF download triggered successfully');
                            showNotification('帶標註的PDF文件已生成並下載', 'success');
                            resolve();
                            
                        } catch (error) {
                            window.logger.error('Error generating PDF:', error);
                            showNotification('生成PDF時發生錯誤: ' + error.message, 'error');
                            reject(error);
                        } finally {
                            document.body.removeChild(fileInput);
                        }
                    });

                    // 在事件監聽器添加完成後觸發點擊
                    fileInput.click();
                });
            }

        } catch (error) {
            window.logger.error('Error in exportFloorPlanAsPDF:', error);
            showNotification('導出PDF時發生錯誤: ' + error.message, 'error');
        }
    }

    // Export floor plan as image function (for direct download) - 保留用於向後兼容
    function exportFloorPlanAsImage() {
        if (!floorPlanCanvas) {
            showNotification('Please upload a floor plan first', 'warning');
            return;
        }
        
        if (labels.length === 0 && defectMarks.length === 0) {
            showNotification('No labels or defect marks to export', 'warning');
            return;
        }
        
        showNotification('Preparing export...', 'info');
        
        // Instead of trying to recreate the visual state, let's capture what the user actually sees
        // We'll use html2canvas to capture the entire floor plan viewer with all elements
        
        // First, temporarily hide any modals or overlays that shouldn't be in the export
        const labelModal = document.getElementById('labelModalOverlay');
        const labelModalDisplay = labelModal ? labelModal.style.display : 'none';
        
        if (labelModal) labelModal.style.display = 'none';
        
        // Instead of html2canvas, let's create a comprehensive export that captures the entire floor plan
        // Create a temporary canvas for export at 100% scale
        const exportCanvas = document.createElement('canvas');
        const ctx = exportCanvas.getContext('2d');
        
        // Get the original PDF canvas dimensions
        const originalWidth = floorPlanCanvas.width;
        const originalHeight = floorPlanCanvas.height;
        
        // Set export canvas to original PDF size (100% scale)
        exportCanvas.width = originalWidth;
        exportCanvas.height = originalHeight;
        
        // Draw the PDF content at 100% scale
        ctx.drawImage(floorPlanCanvas, 0, 0, originalWidth, originalHeight);
        
        // Try a different approach: get the actual DOM element positions and convert them
        // Get current view state
        const currentViewScale = window.currentScale || 1;
        const currentTranslateX = window.translateX || 0;
        const currentTranslateY = window.translateY || 0;
        
        window.logger.log('Export debug info:', {
            currentScale: currentViewScale,
            translateX: currentTranslateX,
            translateY: currentTranslateY,
            originalWidth,
            originalHeight,
            labelsCount: labels.length,
            defectMarksCount: defectMarks.length
        });
        
        // Draw elements in correct layering order: connections first, then dots/textboxes, then labels
        
        // Calculate scale factors once for the entire export
        const canvasRect = floorPlanCanvas.getBoundingClientRect();
        const scaleX = originalWidth / canvasRect.width;
        const scaleY = originalHeight / canvasRect.height;
        
        window.logger.log('Export scaling factors:', { scaleX, scaleY, canvasRect: { width: canvasRect.width, height: canvasRect.height } });
        
        // First, collect all positions for proper layering
        const elementsToDraw = [];
        
        // Collect defect mark positions
        window.defectMarks.forEach(defect => {
            const defectElement = document.querySelector(`[data-defect-mark-id="${defect.id}"]`);
            if (defectElement) {
                const rect = defectElement.getBoundingClientRect();
                
                const relativeX = rect.left + rect.width / 2 - canvasRect.left;
                const relativeY = rect.top + rect.height / 2 - canvasRect.top;
                
                const x = relativeX * scaleX;
                const y = relativeY * scaleY;
                
                // Find textbox element
                const textboxElement = document.querySelector(`.defect-mark-textbox[data-defect-mark-id="${defect.id}"]`);
                if (textboxElement) {
                    const textboxRect = textboxElement.getBoundingClientRect();
                    const textboxRelativeX = textboxRect.left + textboxRect.width / 2 - canvasRect.left;
                    const textboxRelativeY = textboxRect.top + textboxRect.height / 2 - canvasRect.top;
                    const textboxX = textboxRelativeX * scaleX;
                    const textboxY = textboxRelativeY * scaleY;
                    
                    elementsToDraw.push({
                        type: 'connection',
                        x1: x, y1: y, x2: textboxX, y2: textboxY,
                        defect: defect
                    });
                }
                
                elementsToDraw.push({
                    type: 'dot',
                    x: x, y: y,
                    defect: defect
                });
                
                if (textboxElement) {
                    const textboxRect = textboxElement.getBoundingClientRect();
                    const textboxRelativeX = textboxRect.left + textboxRect.width / 2 - canvasRect.left;
                    const textboxRelativeY = textboxRect.top + textboxRect.height / 2 - canvasRect.top;
                    const textboxX = textboxRelativeX * scaleX;
                    const textboxY = textboxRelativeY * scaleY;
                    
                    elementsToDraw.push({
                        type: 'textbox',
                        x: textboxX, y: textboxY,
                        defect: defect
                    });
                }
            }
        });
        
        // Collect label positions
        labels.forEach(label => {
            const labelElement = document.querySelector(`[data-label-id="${label.id}"]`);
            if (labelElement) {
                const rect = labelElement.getBoundingClientRect();
                
                const relativeX = rect.left + rect.width / 2 - canvasRect.left;
                const relativeY = rect.top + rect.height / 2 - canvasRect.top;
                
                const x = relativeX * scaleX;
                const y = relativeY * scaleY;
                
                elementsToDraw.push({
                    type: 'label',
                    x: x, y: y,
                    label: label
                });
            }
        });
        
        // Now draw in correct order: connections first (z-index 999), then dots/textboxes (z-index 1001), then labels (z-index 1000)
        
        // 1. Draw connection lines first (behind everything)
        elementsToDraw.forEach(element => {
            if (element.type === 'connection') {
                ctx.strokeStyle = '#dc3545';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(element.x1, element.y1);
                ctx.lineTo(element.x2, element.y2);
                ctx.stroke();
            }
        });
        
        // 2. Draw defect mark dots
        elementsToDraw.forEach(element => {
            if (element.type === 'dot') {
                // Get the actual DOM element to read computed styles and dimensions
                const defectElement = document.querySelector(`[data-defect-mark-id="${element.defect.id}"]`);
                if (defectElement) {
                    const computedStyle = window.getComputedStyle(defectElement);
                    const rect = defectElement.getBoundingClientRect();
                    
                    window.logger.log('Defect dot computed styles:', {
                        width: computedStyle.width,
                        height: computedStyle.height,
                        fontSize: computedStyle.fontSize,
                        fontWeight: computedStyle.fontWeight,
                        fontFamily: computedStyle.fontFamily,
                        actualSize: { width: rect.width, height: rect.height }
                    });
                    
                    // Use actual computed dimensions and scale them to export canvas resolution
                    const dotSize = (rect.width / 2) * scaleX; // Convert width to radius and scale to PDF resolution
                    
                    // Draw red dot with scaled size
                    ctx.fillStyle = '#dc3545';
                    ctx.beginPath();
                    ctx.arc(element.x, element.y, dotSize, 0, 2 * Math.PI);
                    ctx.fill();
                    
                    // Draw defect number with scaled font properties
                    const fontSize = parseFloat(computedStyle.fontSize) * scaleX;
                    ctx.fillStyle = 'white';
                    ctx.font = `${computedStyle.fontWeight} ${fontSize}px ${computedStyle.fontFamily}`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(element.defect.defectNo || '', element.x, element.y);
                } else {
                    // Fallback
                    ctx.fillStyle = '#dc3545';
                    ctx.beginPath();
                    ctx.arc(element.x, element.y, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    
                    ctx.fillStyle = 'white';
                    ctx.font = 'bold 12px Arial';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(element.defect.defectNo || '', element.x, element.y);
                }
            }
        });
        
        // 3. Draw defect mark textboxes
        elementsToDraw.forEach(element => {
            if (element.type === 'textbox') {
                // Get the actual textbox DOM element to read computed styles and dimensions
                const textboxElement = document.querySelector(`.defect-mark-textbox[data-defect-mark-id="${element.defect.id}"]`);
                if (textboxElement) {
                    const computedStyle = window.getComputedStyle(textboxElement);
                    const rect = textboxElement.getBoundingClientRect();
                    
                    window.logger.log('Textbox computed styles:', {
                        width: computedStyle.width,
                        height: computedStyle.height,
                        fontSize: computedStyle.fontSize,
                        fontWeight: computedStyle.fontWeight,
                        fontFamily: computedStyle.fontFamily,
                        padding: computedStyle.padding,
                        border: computedStyle.border,
                        actualSize: { width: rect.width, height: rect.height }
                    });
                    
                    // Use actual computed dimensions and scale them to export canvas resolution
                    const textboxWidth = rect.width * scaleX;
                    const textboxHeight = rect.height * scaleY;
                    
                    // Draw textbox background (white)
                    ctx.fillStyle = 'white';
                    ctx.fillRect(element.x - textboxWidth/2, element.y - textboxHeight/2, textboxWidth, textboxHeight);
                    
                    // Draw textbox border (#dc3545, 1px)
                    ctx.strokeStyle = '#dc3545';
                    ctx.lineWidth = 1;
                    ctx.strokeRect(element.x - textboxWidth/2, element.y - textboxHeight/2, textboxWidth, textboxHeight);
                    
                    // Draw textbox text with scaled font properties
                    const textboxFontSize = parseFloat(computedStyle.fontSize) * scaleX;
                    ctx.fillStyle = '#dc3545';
                    ctx.font = `${computedStyle.fontWeight} ${textboxFontSize}px ${computedStyle.fontFamily}`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText('Photo no.: ' + (element.defect.photoNo || ''), element.x, element.y);
                } else {
                    // Fallback
                    const textboxWidth = 120;
                    const textboxHeight = 30;
                    
                    ctx.fillStyle = 'white';
                    ctx.fillRect(element.x - textboxWidth/2, element.y - textboxHeight/2, textboxWidth, textboxHeight);
                    
                    ctx.strokeStyle = '#dc3545';
                    ctx.lineWidth = 1;
                    ctx.strokeRect(element.x - textboxWidth/2, element.y - textboxHeight/2, textboxWidth, textboxHeight);
                    
                    ctx.fillStyle = '#dc3545';
                    ctx.font = 'bold 11px Arial';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText('Photo no.: ' + (element.defect.photoNo || ''), element.x, element.y);
                }
            }
        });
        
        // 4. Draw labels last (on top)
        elementsToDraw.forEach(element => {
            if (element.type === 'label') {
                // Get the actual computed styles from the DOM element to match exactly
                const labelElement = document.querySelector(`[data-label-id="${element.label.id}"]`);
                if (labelElement) {
                    const computedStyle = window.getComputedStyle(labelElement);
                    const rect = labelElement.getBoundingClientRect();
                    
                    window.logger.log('Label computed styles:', {
                        color: computedStyle.color,
                        fontSize: computedStyle.fontSize,
                        fontWeight: computedStyle.fontWeight,
                        fontFamily: computedStyle.fontFamily,
                        padding: computedStyle.padding,
                        width: computedStyle.width,
                        height: computedStyle.height,
                        actualSize: { width: rect.width, height: rect.height }
                    });
                    
                    // Use the actual computed styles from the DOM with scaled font size
                    const labelFontSize = parseFloat(computedStyle.fontSize) * scaleX;
                    ctx.fillStyle = computedStyle.color;
                    ctx.font = `${computedStyle.fontWeight} ${labelFontSize}px ${computedStyle.fontFamily}`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(element.label.inspectionNo, element.x, element.y);
                } else {
                    // Fallback if element not found
                    ctx.fillStyle = '#FFBE00';
                    ctx.font = 'bold 12px Arial';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(element.label.inspectionNo, element.x, element.y);
                }
            }
        });
        
        // Convert canvas to blob and download
        exportCanvas.toBlob(function(blob) {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'floor_plan_with_annotations.png';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            showNotification('Floor plan exported as PNG successfully!', 'success');
        }, 'image/png');
        
        // Restore modal displays
        if (labelModal) labelModal.style.display = labelModalDisplay;
    }
    
    // 初始化標籤大小調整功能
    if (typeof window.initLabelSizeAdjustment === 'function') {
        window.initLabelSizeAdjustment();
    }
    
    // 確保在頁面加載完成後也初始化一次
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            window.logger.log('DOM loaded, initializing label size adjustment');
            if (typeof window.initLabelSizeAdjustment === 'function') {
                window.initLabelSizeAdjustment();
            }
            if (typeof window.initDefectMarkSizeAdjustment === 'function') {
                window.initDefectMarkSizeAdjustment();
            }
            // 延遲一點時間確保DOM完全加載
            setTimeout(updateLabelSizeUI, 100);
            setTimeout(updateDefectMarkSizeUI, 100);
        });
    } else {
        window.logger.log('DOM already loaded, initializing label size adjustment immediately');
        if (typeof window.initLabelSizeAdjustment === 'function') {
            window.initLabelSizeAdjustment();
        }
        if (typeof window.initDefectMarkSizeAdjustment === 'function') {
            window.initDefectMarkSizeAdjustment();
        }
        // 延遲一點時間確保DOM完全加載
        setTimeout(updateLabelSizeUI, 100);
        setTimeout(updateDefectMarkSizeUI, 100);
    }
});
// 同步函數：從 defects detail-table 同步到 labels detail-table
function syncDefectToLabelsDetailTable(defectNo) {
    window.logger.log('Syncing defect to labels detail table:', defectNo);
    
    if (!window.labels || !defectNo) {
        window.logger.log('No labels data or defect number provided');
        return;
    }
    
    // 查找包含該缺陷編號的標籤記錄
    window.labels.forEach((label, labelIndex) => {
        if (label.j && label.j.includes(defectNo)) {
            // 從 defects column 中移除該缺陷
            const defectsArray = label.j.split('\n').filter(d => d.trim());
            const updatedDefects = defectsArray.filter(d => !d.includes(defectNo));
            label.j = updatedDefects.join('\n');
            
            window.logger.log(`Updated label ${label.inspectionNo} defects column, removed defect ${defectNo}`);
            
            // 保存更新後的標籤數據
            if (typeof window.saveLabelsToStorage === 'function') {
                window.saveLabelsToStorage();
            }
        }
    });
}

// 同步函數：從 labels detail-table 同步到 defects detail-table
function syncLabelToDefectsDetailTable(labelId) {
    window.logger.log('Syncing label to defects detail table:', labelId);
    
    if (!window.labels || !labelId) {
        window.logger.log('No labels data or label ID provided');
        return;
    }
    
    // 查找被刪除的標籤記錄
    const deletedLabel = window.labels.find(label => String(label.id) === String(labelId));
    
    if (deletedLabel && deletedLabel.j) {
        // 從該標籤的 defects column 中提取缺陷編號
        const defectsArray = deletedLabel.j.split('\n').filter(d => d.trim());
        
        defectsArray.forEach(defectText => {
            // 提取缺陷編號（假設格式為 "1) Defect description" 或 "1-5_Crack"）
            const defectNoMatch = defectText.match(/^(\d+)\)?\s*/);
            if (defectNoMatch) {
                const defectNo = defectNoMatch[1];
                
                // 從 defects detail-table 中刪除對應的記錄
                const defectIndex = window.defectEntries.findIndex(entry => 
                    String(entry.defectNo) === String(defectNo)
                );
                
                if (defectIndex >= 0) {
                    window.defectEntries.splice(defectIndex, 1);
                    window.logger.log(`Removed defect ${defectNo} from defects detail table`);
                }
                
                // 從 submittedDefectEntries 中刪除
                const submittedIndex = window.submittedDefectEntries.findIndex(entry => 
                    String(entry.defectNo) === String(defectNo)
                );
                
                if (submittedIndex >= 0) {
                    window.submittedDefectEntries.splice(submittedIndex, 1);
                    window.logger.log(`Removed defect ${defectNo} from submitted defects`);
                }
            }
        });
        
        // 保存更新後的缺陷數據
        if (typeof saveDataToStorage === 'function') {
            saveDataToStorage();
        }
    }
}

// 同步函數：從 labels detail-table 同步到 defects detail-table（處理刪除和更新情況）
function syncLabelsToDefectsDetailTable() {
    window.logger.log('Syncing labels to defects detail table (delete and update case)');
    
    if (!window.labels || !window.defectEntries) {
        window.logger.log('No labels or defects data available');
        return;
    }
    
    // 收集所有標籤中的缺陷編號和對應的標籤信息
    const labelDefectMap = new Map();
    window.labels.forEach(label => {
        // 檢查標籤的 defectNo 字段
        if (label.defectNo) {
            const defectNo = String(label.defectNo);
            labelDefectMap.set(defectNo, {
                inspectionNo: label.inspectionNo,
                inspectionDate: label.inspectionDate,
                floor: label.floor,
                areaName: label.areaName,
                roomNo: label.roomNo
                // imminentDanger: label.imminentDanger || false // 移除：不再從標籤更新imminentDanger
            });
        }
        
        // 也檢查標籤的缺陷列 (label.j)
        if (label.j) {
            const defectsArray = label.j.split('\n').filter(d => d.trim());
            defectsArray.forEach(defectText => {
                const defectNoMatch = defectText.match(/^(\d+)\)?\s*/);
                if (defectNoMatch) {
                    const defectNo = defectNoMatch[1];
                    // 存儲標籤信息，用於更新缺陷記錄
                    labelDefectMap.set(defectNo, {
                        inspectionNo: label.inspectionNo,
                        inspectionDate: label.inspectionDate,
                        floor: label.floor,
                        areaName: label.areaName,
                        roomNo: label.roomNo,
                        // imminentDanger: label.imminentDanger || false // 移除：不再從標籤更新imminentDanger
                    });
                }
            });
        }
    });
    
    // 檢查 defects detail-table 中的記錄
    const defectsToRemove = [];
    const defectsToUpdate = [];
    
    window.logger.log('Label defect map:', labelDefectMap);
    window.logger.log('Current defect entries:', window.defectEntries.map(d => d.defectNo));
    
    window.defectEntries.forEach((defect, index) => {
        const defectNo = String(defect.defectNo);
        
        // 修改：不要自動刪除不在標籤中的缺陷記錄
        // 因為用戶可能直接在 detail-table-container 中創建了缺陷記錄
        // 或者標籤可能被刪除了，但缺陷記錄仍然有效
        if (labelDefectMap.has(defectNo)) {
            // 缺陷在標籤中，檢查是否需要更新字段
            const labelInfo = labelDefectMap.get(defectNo);
            const needsUpdate = 
                defect.locationId !== labelInfo.inspectionNo ||
                defect.inspectionDate !== labelInfo.inspectionDate ||
                defect.floor !== labelInfo.floor ||
                defect.areaName !== labelInfo.areaName ||
                defect.roomNo !== labelInfo.roomNo;
            
            if (needsUpdate) {
                defectsToUpdate.push({ index, defect, labelInfo });
            }
        }
        // 移除自動刪除邏輯，保留所有缺陷記錄
    });
    
    // 更新缺陷記錄的字段
    defectsToUpdate.forEach(({ index, defect, labelInfo }) => {
        const originalDefect = { ...defect };
        
        // 更新缺陷記錄的字段
        defect.locationId = labelInfo.inspectionNo;
        defect.inspectionDate = labelInfo.inspectionDate;
        defect.floor = labelInfo.floor;
        defect.areaName = labelInfo.areaName;
        defect.roomNo = labelInfo.roomNo;
         // defect.imminentDanger = labelInfo.imminentDanger; // 移除：不再從標籤更新imminentDanger
        
        window.logger.log(`Updated defect ${defect.defectNo} fields:`, {
            inspectionNo: defect.locationId,
            inspectionDate: defect.inspectionDate,
            floor: defect.floor,
            areaName: defect.areaName,
            roomNo: defect.roomNo,
             // imminentDanger: defect.imminentDanger // 移除：不再記錄imminentDanger更新
        });
        
        // 同時更新 submittedDefectEntries 中的記錄
        const submittedIndex = window.submittedDefectEntries.findIndex(entry => 
            String(entry.defectNo) === String(defect.defectNo)
        );
        
        if (submittedIndex >= 0) {
            window.submittedDefectEntries[submittedIndex] = { ...defect };
            window.logger.log(`Updated defect ${defect.defectNo} in submitted defects`);
        }
    });
    
    // 移除自動刪除邏輯，保留所有缺陷記錄
    // 用戶可以手動刪除不需要的缺陷記錄
        if (defectsToRemove.length > 0) {
        window.logger.log(`Found ${defectsToRemove.length} defects not in labels, but keeping them (user can manually delete if needed)`);
    }
    
    if (defectsToUpdate.length > 0) {
        // 只處理更新，不刪除缺陷記錄
        
        // 保存更新後的缺陷數據
        if (typeof saveDataToStorage === 'function') {
            saveDataToStorage();
        }
        
        // 2. 重新分配缺陷編號（從第一個到最後一個，按順序編號）
        if (defectsToRemove.length > 0) {
            window.logger.log('Reassigning defect numbers...');
            window.defectEntries.forEach((defect, index) => {
                const newDefectNo = index + 1;
                const oldDefectNo = defect.defectNo;
                
                if (String(oldDefectNo) !== String(newDefectNo)) {
                    window.logger.log(`Reassigning defect ${oldDefectNo} to ${newDefectNo}`);
                    
                    // 更新缺陷記錄的編號
                    defect.defectNo = newDefectNo;
                    
                    // 同時更新 submittedDefectEntries 中的記錄
                    const submittedIndex = window.submittedDefectEntries.findIndex(entry => 
                        String(entry.defectNo) === String(oldDefectNo)
                    );
                    
                    if (submittedIndex >= 0) {
                        window.submittedDefectEntries[submittedIndex].defectNo = newDefectNo;
                    }
                    
                    // 更新樓層平面圖中的缺陷標記編號
                    if (window.defectMarks && window.defectMarks.length > 0) {
                        const defectMarkIndex = window.defectMarks.findIndex(mark => 
                            String(mark.defectNo) === String(oldDefectNo)
                        );
                        
                        if (defectMarkIndex >= 0) {
                            window.defectMarks[defectMarkIndex].defectNo = newDefectNo;
                            window.logger.log(`Updated defect mark ${oldDefectNo} to ${newDefectNo} in floor plan`);
                        }
                    }
                    
                    // 注意：標籤編號不應該被自動重新編號
                    // 標籤的 inspectionNo 應該保持用戶設定的值
                    // 只更新 label.j 中的缺陷編號，不改變 inspectionNo
                    if (window.labels && window.labels.length > 0) {
                        window.labels.forEach(label => {
                            // 注意：不更新 label.defectNo，因為這會影響標籤編號
                            // 標籤的 inspectionNo 應該保持用戶設定的值
                            
                            // 只更新 label.j 中的缺陷編號
                            if (label.j) {
                                const defectsArray = label.j.split('\n').filter(d => d.trim());
                                const updatedDefects = defectsArray.map(defectText => {
                                    const defectNoMatch = defectText.match(/^(\d+)\)?\s*(.*)$/);
                                    if (defectNoMatch && String(defectNoMatch[1]) === String(oldDefectNo)) {
                                        return `${newDefectNo}) ${defectNoMatch[2]}`;
                                    }
                                    return defectText;
                                });
                                label.j = updatedDefects.join('\n');
                            }
                        });
                        
                        // 保存標籤數據
        if (typeof window.saveLabelsToStorage === 'function') {
            window.saveLabelsToStorage();
        }
                    }
                }
            });
            
            // 重新保存數據
            if (typeof saveDataToStorage === 'function') {
                saveDataToStorage();
            }
            
            if (typeof saveDefectMarksToStorage === 'function') {
                saveDefectMarksToStorage();
            }
        }
        
        // 3. 更新樓層平面圖容器的缺陷標記和標籤詳細表格容器的缺陷記錄
        if (defectsToRemove.length > 0) {
            // 重新渲染缺陷標記
            if (typeof window.redrawDefectMarks === 'function') {
                window.redrawDefectMarks();
            }
            
            // 移除標籤重新渲染 - 根據用戶要求，更新標籤詳細表格時不改變樓層平面圖中的標籤
            // if (typeof window.redrawLabels === 'function') {
            //     window.redrawLabels();
            // }
            
            // 同步更新檢查記錄表格
            if (typeof window.syncLabelsToInspectionRecords === 'function') {
                window.syncLabelsToInspectionRecords();
            }
        }
        
        // 更新缺陷摘要表格
        if (typeof window.updateDefectSummaryTable === 'function') {
            window.updateDefectSummaryTable();
        }
        
        window.logger.log(`Sync completed: ${defectsToUpdate.length} defects updated, ${defectsToRemove.length} defects removed`);
    }
}

// 格式化照片編號字符串，將連續的編號合併為範圍格式
function formatPhotoNumbersString(photoNumbers) {
    if (!photoNumbers || photoNumbers.length === 0) {
        return '';
    }
    
    // 將字符串轉換為數字並排序
    const numbers = photoNumbers.map(num => parseInt(num)).filter(num => !isNaN(num)).sort((a, b) => a - b);
    
    if (numbers.length === 0) {
        return '';
    }
    
    const ranges = [];
    let start = numbers[0];
    let end = numbers[0];
    
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] === end + 1) {
            // 連續的數字，擴展範圍
            end = numbers[i];
        } else {
            // 不連續，保存當前範圍並開始新範圍
            if (start === end) {
                ranges.push(start.toString());
            } else {
                ranges.push(`${start}-${end}`);
            }
            start = numbers[i];
            end = numbers[i];
        }
    }
    
    // 添加最後一個範圍
    if (start === end) {
        ranges.push(start.toString());
    } else {
        ranges.push(`${start}-${end}`);
    }
    
    return ranges.join(', ');
}

// 清除所有標籤詳細表格記錄的函數 - 按照指定順序執行
function clearAllLabelsDetailTableRecords() {
    window.logger.log('Starting comprehensive clear all labels detail table records process');
    
    if (window.labels.length === 0) {
        showNotification('No labels to clear.', 'info');
        return;
    }
    
    // 確認刪除
    if (!confirm('Are you sure you want to clear all labels? This action will delete all defect items first, then update all tables and floor plan, and finally delete all label records. This action cannot be undone.')) {
        return;
    }
    
    window.logger.log('Step 1: Collecting all defect numbers from labels');
    
    // Step 1: 收集所有標籤中的缺陷編號
    const allDefectNumbers = new Set();
    window.labels.forEach(label => {
        if (label.defectNo) {
            allDefectNumbers.add(label.defectNo);
        }
    });
    
    window.logger.log('Found defect numbers to delete:', Array.from(allDefectNumbers));
    
    // Step 2: 首先刪除所有缺陷項目
    window.logger.log('Step 2: Deleting all defect items first');
    allDefectNumbers.forEach(defectNo => {
        // 使用統一的缺陷記錄刪除函數
        deleteDefectRecordComprehensive(defectNo, 'labels detail table clear all');
    });
    
    // Step 3: 更新所有缺陷詳細表格容器和樓層平面圖內容
    window.logger.log('Step 3: Updating all defects detail-table-container and floor-plan-content');
    
    // 更新缺陷摘要表格
    if (typeof window.updateDefectSummaryTable === 'function') {
        window.updateDefectSummaryTable();
        window.logger.log('Defect summary table updated');
    }
    
    // 更新分類表格
    if (typeof window.updateCategoryTablesFromInspectionRecords === 'function') {
        window.updateCategoryTablesFromInspectionRecords();
        window.logger.log('Category tables updated');
    }
    
    // 更新樓層平面圖內容
    if (typeof window.redrawDefectMarks === 'function') {
        window.redrawDefectMarks();
        window.logger.log('Floor plan defect marks redrawn');
    }
    
    if (typeof window.redrawLabels === 'function') {
        window.redrawLabels();
        window.logger.log('Floor plan labels redrawn');
    }
    
    // 更新檢查記錄表格
    if (typeof window.syncLabelsToInspectionRecords === 'function') {
        window.syncLabelsToInspectionRecords();
        window.logger.log('Inspection records table updated');
    }
    
    // 更新照片狀態
    if (typeof updatePhotoStatusFromLabels === 'function') {
        updatePhotoStatusFromLabels();
        window.logger.log('Photo status updated');
    }
    
    // Step 4: 最後刪除所有標籤詳細表格容器的記錄
    window.logger.log('Step 4: Deleting all labels detail-table-container records');
    
    // 清空標籤數組
    window.labels = [];
    
    // 保存標籤到本地存儲
    if (typeof window.saveLabelsToStorage === 'function') {
        window.saveLabelsToStorage();
        window.logger.log('Labels saved to storage');
    }
    
    // 重新渲染標籤（清空狀態）
    if (typeof window.redrawLabels === 'function') {
        window.redrawLabels();
        window.logger.log('Labels redrawn (empty state)');
    }
    
    // 最終更新所有表格
    if (typeof window.updateDefectSummaryTable === 'function') {
        window.updateDefectSummaryTable();
        window.logger.log('Final defect summary table update');
    }
    
    if (typeof window.updateCategoryTablesFromInspectionRecords === 'function') {
        window.updateCategoryTablesFromInspectionRecords();
        window.logger.log('Final category tables update');
    }
    
    // 同步更新檢查記錄表格
    if (typeof window.syncLabelsToInspectionRecords === 'function') {
        window.syncLabelsToInspectionRecords();
        window.logger.log('Final inspection records table update');
    }
    
    window.logger.log('Comprehensive clear all labels detail table records process completed');
    showNotification('All labels cleared successfully! All defect items deleted first, then all tables and floor plan updated, and finally all label records deleted.', 'success');
}

// 統一的缺陷記錄刪除函數 - 處理雙向同步刪除
function deleteDefectRecordComprehensive(defectNo, source = 'unknown') {
    window.logger.log(`Comprehensive deletion of defect ${defectNo} from source: ${source}`);
    
    if (!defectNo) {
        window.logger.error('No defect number provided for deletion');
        return;
    }
    
    const defectNoStr = String(defectNo);
    let deletedFrom = [];
    
    // 首先找到要刪除的缺陷記錄，獲取其照片編號和分類信息（在刪除之前）
    let deletedDefectPhotoNumbers = [];
    let deletedDefectCategory = null;
    
    const defectEntryToDelete = window.defectEntries.find(entry => 
        String(entry.defectNo) === defectNoStr
    );
    
    if (defectEntryToDelete) {
        // 改進照片編號解析，支持範圍格式（如 1234-1236）
        if (defectEntryToDelete.photoNumbers) {
            const photoNumbersStr = defectEntryToDelete.photoNumbers;
            const photoNumbers = [];
            
            // 分割照片編號字符串
            const parts = photoNumbersStr.split(/[,\-]/).map(num => num.trim()).filter(num => num);
            
            parts.forEach(part => {
                // 檢查是否為範圍格式（如 1234-1236）
                if (part.includes('-')) {
                    const rangeParts = part.split('-');
                    if (rangeParts.length === 2) {
                        const start = parseInt(rangeParts[0].trim());
                        const end = parseInt(rangeParts[1].trim());
                        if (!isNaN(start) && !isNaN(end) && start <= end) {
                            // 生成範圍內的所有照片編號
                            for (let i = start; i <= end; i++) {
                                photoNumbers.push(i.toString());
                            }
                        }
                    }
                } else {
                    // 單個照片編號
                    photoNumbers.push(part);
                }
            });
            
            deletedDefectPhotoNumbers = photoNumbers;
        } else {
            deletedDefectPhotoNumbers = [];
        }
        
        deletedDefectCategory = defectEntryToDelete.category;
        window.logger.log(`Found defect ${defectNo} with photo numbers: ${deletedDefectPhotoNumbers.join(', ')} and category: ${deletedDefectCategory}`);
    }
    
    // 1. 從缺陷詳細表格中刪除
    const defectIndex = window.defectEntries.findIndex(entry => 
        String(entry.defectNo) === defectNoStr
    );
    
    if (defectIndex >= 0) {
        window.defectEntries.splice(defectIndex, 1);
        deletedFrom.push('defects detail table');
        window.logger.log(`Deleted defect ${defectNo} from defects detail table`);
    }
    
    // 2. 從提交的缺陷條目中刪除
    const submittedIndex = window.submittedDefectEntries.findIndex(entry => 
        String(entry.defectNo) === defectNoStr
    );
    
    if (submittedIndex >= 0) {
        window.submittedDefectEntries.splice(submittedIndex, 1);
        deletedFrom.push('submitted defects');
        window.logger.log(`Deleted defect ${defectNo} from submitted defects`);
    }
    
    // 3. 從標籤詳細表格中刪除（基於缺陷編號）並更新分類欄位中的照片編號
    if (window.labels && window.labels.length > 0) {
        const labelsToUpdate = [];
        const labelsToDelete = [];
        
        // 使用之前獲取的缺陷信息
        
        window.labels.forEach((label, labelIndex) => {
            let needsUpdate = false;
            let shouldDeleteLabel = false;
            
            // 檢查標籤的 defectNo 字段
            if (label.defectNo && String(label.defectNo) === defectNoStr) {
                // 標記為需要刪除整個標籤，但不立即刪除
                shouldDeleteLabel = true;
                deletedFrom.push('labels detail table (defectNo field)');
                window.logger.log(`Marked label with defectNo ${defectNo} for deletion from labels detail table`);
            }
            
            // 只有在不刪除整個標籤的情況下，才檢查和更新缺陷列
            if (!shouldDeleteLabel && label.j && label.j.includes(defectNoStr)) {
                const defectsArray = label.j.split('\n').filter(d => d.trim());
                const updatedDefects = defectsArray.filter(defectText => {
                    const defectNoMatch = defectText.match(/^(\d+)\)?\s*/);
                    return !defectNoMatch || defectNoMatch[1] !== defectNoStr;
                });
                
                if (updatedDefects.length !== defectsArray.length) {
                    label.j = updatedDefects.join('\n');
                    deletedFrom.push('labels detail table (defects column)');
                    window.logger.log(`Removed defect ${defectNo} from label ${label.inspectionNo} defects column`);
                    needsUpdate = true;
                }
            }
            
            // 更新分類欄位中的照片編號（移除被刪除缺陷的照片編號）
            // 只有在不刪除整個標籤的情況下，才更新分類欄位
            if (!shouldDeleteLabel && deletedDefectPhotoNumbers.length > 0 && deletedDefectCategory) {
                const categoryKey = deletedDefectCategory.toLowerCase();
                if (label[categoryKey] && label[categoryKey] !== 'N/A') {
                    // 解析分類欄位中的照片編號，支持範圍格式
                    const currentPhotoNumbersStr = label[categoryKey];
                    const currentPhotoNumbers = [];
                    
                    // 分割照片編號字符串
                    const parts = currentPhotoNumbersStr.split(/[,\-]/).map(num => num.trim()).filter(num => num);
                    
                    parts.forEach(part => {
                        // 檢查是否為範圍格式（如 1234-1236）
                        if (part.includes('-')) {
                            const rangeParts = part.split('-');
                            if (rangeParts.length === 2) {
                                const start = parseInt(rangeParts[0].trim());
                                const end = parseInt(rangeParts[1].trim());
                                if (!isNaN(start) && !isNaN(end) && start <= end) {
                                    // 生成範圍內的所有照片編號
                                    for (let i = start; i <= end; i++) {
                                        currentPhotoNumbers.push(i.toString());
                                    }
                                }
                            }
                        } else {
                            // 單個照片編號
                            currentPhotoNumbers.push(part);
                        }
                    });
                    
                    // 移除被刪除缺陷的照片編號
                    const updatedPhotoNumbers = currentPhotoNumbers.filter(photoNum => 
                        !deletedDefectPhotoNumbers.includes(photoNum)
                    );
                    
                    if (updatedPhotoNumbers.length !== currentPhotoNumbers.length) {
                        // 重新格式化照片編號字符串
                        const formattedPhotoNumbers = formatPhotoNumbersString(updatedPhotoNumbers);
                        label[categoryKey] = formattedPhotoNumbers || 'N/A';
                        deletedFrom.push(`labels detail table (${categoryKey.toUpperCase()} category column)`);
                        window.logger.log(`Removed photo numbers ${deletedDefectPhotoNumbers.join(', ')} from label ${label.inspectionNo} ${categoryKey.toUpperCase()} category`);
                        needsUpdate = true;
                    }
                }
            }
            
            if (shouldDeleteLabel) {
                labelsToDelete.push(labelIndex);
            } else if (needsUpdate) {
                labelsToUpdate.push(labelIndex);
            }
        });
        
        // 先刪除需要刪除的標籤（從後往前刪除，避免索引問題）
        labelsToDelete.sort((a, b) => b - a).forEach(index => {
            window.labels.splice(index, 1);
            window.logger.log(`Deleted label at index ${index} from labels array`);
        });
        
        // 保存更新後的標籤數據
        if ((labelsToUpdate.length > 0 || labelsToDelete.length > 0) && typeof window.saveLabelsToStorage === 'function') {
            window.saveLabelsToStorage();
        }
    }
    
    // 4. 從樓層平面圖中刪除缺陷標記
    if (window.defectMarks && window.defectMarks.length > 0) {
        const defectMarkIndex = window.defectMarks.findIndex(mark => 
            String(mark.defectNo) === defectNoStr
        );
        
        if (defectMarkIndex >= 0) {
            window.defectMarks.splice(defectMarkIndex, 1);
            deletedFrom.push('floor plan content');
            window.logger.log(`Deleted defect mark ${defectNo} from floor plan`);
            
            // 保存缺陷標記到本地存儲
            if (typeof saveDefectMarksToStorage === 'function') {
                saveDefectMarksToStorage();
            }
            
            // 重新渲染缺陷標記
            if (typeof window.redrawDefectMarks === 'function') {
                window.redrawDefectMarks();
            }
        }
    }
    
    // 5. 從檢查記錄表格中刪除
    if (window.submittedData && window.submittedData.length > 0) {
        window.submittedData.forEach(record => {
            if (record.j && record.j !== 'N/A') {
                const defects = record.j.split('\n');
                const updatedDefects = defects.filter(defect => {
                    const defectNoMatch = defect.match(/^(\*?\s*)(\d+)\)?\s*(.+)$/);
                    return !defectNoMatch || defectNoMatch[2] !== defectNoStr;
                });
                
                if (updatedDefects.length !== defects.length) {
                    record.j = updatedDefects.length > 0 ? updatedDefects.join('\n') : 'N/A';
                    deletedFrom.push('inspection records table');
                    window.logger.log(`Removed defect ${defectNo} from inspection record ${record.locationId}`);
                }
            }
        });
    }
    
    // 6. 更新缺陷摘要表格
    if (typeof window.updateDefectSummaryTable === 'function') {
        window.updateDefectSummaryTable();
        deletedFrom.push('defect summary table');
        window.logger.log('Defect summary table updated after deletion');
    }
    
    // 7. 更新缺陷分類內容顯示
    updateCategoryDisplay('j');
    
    // 8. 重新排列缺陷編號
    renumberDefectEntries();
    
    // 9. 保存所有數據到本地存儲
    saveDataToStorage();
    
    // 10. 重新渲染標籤（如果存在）
    if (typeof window.redrawLabels === 'function') {
        window.redrawLabels();
    }
    
    // 11. 同步更新檢查記錄表格
    if (typeof window.syncLabelsToInspectionRecords === 'function') {
        window.syncLabelsToInspectionRecords();
    }
    
    // 12. 同步更新分類表格
    if (typeof window.updateCategoryTablesFromInspectionRecords === 'function') {
        window.updateCategoryTablesFromInspectionRecords();
    }
    
    // 13. 更新照片狀態
    if (typeof updatePhotoStatusFromLabels === 'function') {
        updatePhotoStatusFromLabels();
    }
    
    // 14. 如果來源是 labels detail table，重新顯示標籤詳細表格
    if (source === 'labels detail table' && typeof window.showLabelsDetailPopup === 'function') {
        window.showLabelsDetailPopup();
    }
    
    window.logger.log(`Comprehensive deletion completed for defect ${defectNo}. Deleted from: ${deletedFrom.join(', ')}`);
    showNotification(`缺陷記錄 ${defectNo} 已從所有相關位置刪除`, 'success');
}

// 從缺陷詳細表格中查找對應檢查號碼的缺陷數據
function getDefectsFromDefectsDetailTable(inspectionNo) {
    window.logger.log('Looking up defects for inspection:', inspectionNo);
    
    if (!window.defectEntries || !inspectionNo) {
        window.logger.log('No defect entries or inspection number provided');
        return '';
    }
    
    // 查找屬於該檢查號碼的缺陷記錄
    const defectsForInspection = window.defectEntries.filter(defect => 
        String(defect.locationId) === String(inspectionNo) ||
        String(defect.inspectionNo) === String(inspectionNo)
    );
    
    if (defectsForInspection.length === 0) {
        window.logger.log('No defects found for inspection:', inspectionNo);
        return '';
    }
    
    // 按缺陷編號排序
    const sortedDefects = defectsForInspection.sort((a, b) => {
        const defectNoA = parseInt(a.defectNo) || 0;
        const defectNoB = parseInt(b.defectNo) || 0;
        return defectNoA - defectNoB;
    });
    
    // 格式化缺陷數據為字符串
    const defectsText = sortedDefects.map(defect => {
        const defectNo = defect.defectNo || '';
        const range = defect.range || '';
        const description = defect.description || defect.defectType || '';
        
        // 格式: "編號) 範圍_描述"
        return `${defectNo}) ${range}_${description}`;
    }).join('\n');
    
    window.logger.log(`Found ${defectsForInspection.length} defects for inspection ${inspectionNo}:`, defectsText);
    
    return defectsText;
}

// 驗證照片與標籤的分配關係是否正確
function validatePhotoLabelAssignment(filename, label) {
    // 檢查照片是否真的屬於這個標籤
    // 只檢查照片編號是否在標籤的任何分類欄位中，不檢查 photoFilenames
    // 因為 photoFilenames 可能包含合併的歷史照片
    const photoNumber = filename.match(/\d+/);
    if (!photoNumber) return false;
    
    const photoNum = photoNumber[0];
    
    // 檢查所有分類欄位
    for (const category of categories) {
        const categoryKey = category.id;
        if (label[categoryKey] && label[categoryKey] !== 'N/A') {
            const parts = label[categoryKey].split(/[,\-]/).map(num => num.trim()).filter(num => num);
            
            for (const part of parts) {
                if (part.includes('-')) {
                    // 範圍格式
                    const rangeParts = part.split('-');
                    if (rangeParts.length === 2) {
                        const start = parseInt(rangeParts[0].trim());
                        const end = parseInt(rangeParts[1].trim());
                        if (!isNaN(start) && !isNaN(end) && start <= end) {
                            const photoNumInt = parseInt(photoNum);
                            if (photoNumInt >= start && photoNumInt <= end) {
                                return true;
                            }
                        }
                    }
                } else {
                    // 單個編號
                    if (part === photoNum) {
                        return true;
                    }
                }
            }
        }
    }
    
    // 不再檢查 photoFilenames，因為它可能包含合併的歷史照片
    // 只基於分類欄位中的實際分配來驗證
    
    return false;
}

// 驗證照片與標籤分類的分配關係是否正確
function validatePhotoCategoryAssignment(filename, label, categoryKey) {
    // 檢查照片是否真的屬於這個標籤的這個分類
    const photoNumber = filename.match(/\d+/);
    if (!photoNumber) return false;
    
    const photoNum = photoNumber[0];
    
    if (label[categoryKey] && label[categoryKey] !== 'N/A') {
        const parts = label[categoryKey].split(/[,\-]/).map(num => num.trim()).filter(num => num);
        
        for (const part of parts) {
            if (part.includes('-')) {
                // 範圍格式
                const rangeParts = part.split('-');
                if (rangeParts.length === 2) {
                    const start = parseInt(rangeParts[0].trim());
                    const end = parseInt(rangeParts[1].trim());
                    if (!isNaN(start) && !isNaN(end) && start <= end) {
                        const photoNumInt = parseInt(photoNum);
                        if (photoNumInt >= start && photoNumInt <= end) {
                            return true;
                        }
                    }
                }
            } else {
                // 單個編號
                if (part === photoNum) {
                    return true;
                }
            }
        }
    }
    
    return false;
}

// 清理標籤刪除時的照片分配記錄
function cleanupPhotoAssignmentsOnLabelDelete(deletedLabel) {
    window.logger.log('Cleaning up photo assignments for deleted label:', deletedLabel.inspectionNo);
    
    // 清理 assignedPhotos 中與該標籤相關的照片
    categories.forEach(category => {
        if (assignedPhotos[category.id]) {
            const photosToRemove = [];
            assignedPhotos[category.id].forEach(filename => {
                // 檢查照片是否屬於被刪除的標籤
                if (validatePhotoLabelAssignment(filename, deletedLabel)) {
                    photosToRemove.push(filename);
                }
            });
            
            photosToRemove.forEach(filename => {
                assignedPhotos[category.id].delete(filename);
                window.logger.log(`Removed photo ${filename} from category ${category.id} assignments`);
            });
        }
    });
    
    // 清理 categoryNumbers 中與該標籤相關的編號
    categories.forEach(category => {
        const categoryKey = category.id;
        if (deletedLabel[categoryKey] && deletedLabel[categoryKey] !== 'N/A') {
            // 解析被刪除標籤中的照片編號
            const parts = deletedLabel[categoryKey].split(/[,\-]/).map(num => num.trim()).filter(num => num);
            const photoNumbersToRemove = [];
            
            parts.forEach(part => {
                if (part.includes('-')) {
                    const rangeParts = part.split('-');
                    if (rangeParts.length === 2) {
                        const start = parseInt(rangeParts[0].trim());
                        const end = parseInt(rangeParts[1].trim());
                        if (!isNaN(start) && !isNaN(end) && start <= end) {
                            for (let i = start; i <= end; i++) {
                                photoNumbersToRemove.push(i.toString());
                            }
                        }
                    }
                } else {
                    photoNumbersToRemove.push(part);
                }
            });
            
            // 從 categoryNumbers 中移除這些編號
            photoNumbersToRemove.forEach(photoNum => {
                const index = categoryNumbers[categoryKey].indexOf(photoNum);
                if (index > -1) {
                    categoryNumbers[categoryKey].splice(index, 1);
                    window.logger.log(`Removed photo number ${photoNum} from category ${categoryKey}`);
                }
            });
        }
    });
    
    // 更新分類顯示
    categories.forEach(category => {
        updateCategoryDisplay(category.id);
    });
    
    window.logger.log('Photo assignments cleanup completed for label:', deletedLabel.inspectionNo);
}

// 同步函數：從 defects detail-table 同步到 labels detail-table（處理更新情況）
function syncDefectsToLabelsDetailTable() {
    window.logger.log('Syncing defects to labels detail table (update case)');
    
    if (!window.defectEntries || !window.labels) {
        window.logger.log('No defects or labels data available');
        return;
    }
    
    // 更新每個標籤的缺陷列，從缺陷詳細表格中查找數據
    window.labels.forEach((label, labelIndex) => {
        const inspectionNo = label.inspectionNo;
        const defectsFromTable = getDefectsFromDefectsDetailTable(inspectionNo);
        
        // 更新標籤的缺陷列
        if (label.j !== defectsFromTable) {
            window.logger.log(`Updating label ${inspectionNo} defects column from defects table`);
            label.j = defectsFromTable;
        }
    });
    
    // 保存更新後的標籤數據
    if (typeof window.saveLabelsToStorage === 'function') {
        window.saveLabelsToStorage();
    }
}
