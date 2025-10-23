// 移動端檢測和重定向邏輯
// mobile-redirect.js

(function() {
    'use strict';
    
    // 移動端檢測函數
    function isMobileDevice() {
        // 檢查用戶代理字符串
        const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
        const isMobileUA = mobileRegex.test(navigator.userAgent);
        
        // 檢查屏幕尺寸
        const isMobileScreen = window.innerWidth <= 768;
        
        // 檢查觸控支持
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        
        // 檢查設備像素比（移動設備通常有較高的DPR）
        const isHighDPR = window.devicePixelRatio > 1;
        
        // 綜合判斷
        return isMobileUA || (isMobileScreen && isTouchDevice) || (isMobileScreen && isHighDPR);
    }
    
    // 檢查是否已經在移動端頁面
    function isAlreadyOnMobilePage() {
        return window.location.pathname.includes('mobile.html') || 
               document.body.classList.contains('mobile-body');
    }
    
    // 重定向到移動端頁面
    function redirectToMobile() {
        const currentPath = window.location.pathname;
        const basePath = currentPath.replace('/index.html', '').replace('/mobile.html', '');
        const mobileUrl = basePath + '/mobile.html';
        
        // 保留查詢參數和錨點
        const search = window.location.search;
        const hash = window.location.hash;
        
        window.location.href = mobileUrl + search + hash;
    }
    
    // 重定向到桌面端頁面
    function redirectToDesktop() {
        const currentPath = window.location.pathname;
        const basePath = currentPath.replace('/mobile.html', '');
        const desktopUrl = basePath + '/index.html';
        
        // 保留查詢參數和錨點
        const search = window.location.search;
        const hash = window.location.hash;
        
        window.location.href = desktopUrl + search + hash;
    }
    
    // 初始化移動端檢測
    function initMobileDetection() {
        const isMobile = isMobileDevice();
        const isOnMobilePage = isAlreadyOnMobilePage();
        
        console.log('移動端檢測結果:', {
            isMobile: isMobile,
            isOnMobilePage: isOnMobilePage,
            userAgent: navigator.userAgent,
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
            devicePixelRatio: window.devicePixelRatio,
            touchSupport: 'ontouchstart' in window
        });
        
        // 如果是移動設備但不在移動端頁面，則重定向
        if (isMobile && !isOnMobilePage) {
            console.log('檢測到移動設備，重定向到移動端頁面');
            redirectToMobile();
            return;
        }
        
        // 如果不是移動設備但在移動端頁面，則重定向到桌面端
        if (!isMobile && isOnMobilePage) {
            console.log('檢測到桌面設備，重定向到桌面端頁面');
            redirectToDesktop();
            return;
        }
        
        // 添加設備類型標識到body
        document.body.classList.add(isMobile ? 'mobile-device' : 'desktop-device');
        
        // 添加觸控設備標識
        if ('ontouchstart' in window) {
            document.body.classList.add('touch-device');
        }
        
        // 添加屏幕尺寸標識
        if (window.innerWidth <= 480) {
            document.body.classList.add('small-screen');
        } else if (window.innerWidth <= 768) {
            document.body.classList.add('medium-screen');
        } else {
            document.body.classList.add('large-screen');
        }
        
        // 監聽屏幕尺寸變化
        let resizeTimeout;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function() {
                const newIsMobile = isMobileDevice();
                const currentIsMobile = document.body.classList.contains('mobile-device');
                
                // 如果設備類型發生變化，重新檢測
                if (newIsMobile !== currentIsMobile) {
                    console.log('設備類型發生變化，重新檢測');
                    initMobileDetection();
                }
            }, 300);
        });
    }
    
    // 添加手動切換功能
    function addManualToggle() {
        // 創建切換按鈕（僅在開發模式下顯示）
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            const toggleBtn = document.createElement('button');
            toggleBtn.innerHTML = '🔄';
            toggleBtn.style.cssText = `
                position: fixed;
                top: 10px;
                right: 10px;
                z-index: 10000;
                width: 40px;
                height: 40px;
                border: none;
                border-radius: 50%;
                background: rgba(0,0,0,0.7);
                color: white;
                font-size: 16px;
                cursor: pointer;
                box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            `;
            toggleBtn.title = '切換桌面/移動端視圖';
            
            toggleBtn.addEventListener('click', function() {
                const isOnMobilePage = isAlreadyOnMobilePage();
                if (isOnMobilePage) {
                    redirectToDesktop();
                } else {
                    redirectToMobile();
                }
            });
            
            document.body.appendChild(toggleBtn);
        }
    }
    
    // 導出函數供其他模塊使用
    window.MobileDetection = {
        isMobileDevice: isMobileDevice,
        redirectToMobile: redirectToMobile,
        redirectToDesktop: redirectToDesktop,
        init: initMobileDetection
    };
    
    // 頁面載入完成後初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initMobileDetection();
            addManualToggle();
        });
    } else {
        initMobileDetection();
        addManualToggle();
    }
    
})();
