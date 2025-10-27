#!/usr/bin/env python3
"""
啟動 PWA 開發服務器，支持添加到主屏幕
"""
import http.server
import socketserver
import socket
import os

PORT = 8080

class PWAHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # 添加 PWA 必需的 headers
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        
        # 為 HTML 文件添加正確的 Content-Type
        if self.path.endswith('.html'):
            self.send_header('Content-Type', 'text/html; charset=utf-8')
        elif self.path.endswith('.js'):
            self.send_header('Content-Type', 'application/javascript')
        elif self.path.endswith('.json'):
            self.send_header('Content-Type', 'application/json')
        
        super().end_headers()
    
    def log_message(self, format, *args):
        """覆蓋日誌輸出，不顯示請求日誌"""
        return

def get_local_ip():
    """獲取本機在局域網中的IP地址"""
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except:
        return "localhost"

def start_server():
    try:
        with socketserver.TCPServer(("", PORT), PWAHTTPRequestHandler) as httpd:
            local_ip = get_local_ip()
            
            print("\n" + "="*60)
            print("🚀 PWA 服務器已啟動！")
            print("="*60)
            print(f"\n📱 在手機上訪問：")
            print(f"   http://{local_ip}:{PORT}")
            print(f"   http://{local_ip}:{PORT}/mobile.html")
            print(f"\n💡 添加到主屏幕步驟：")
            print(f"   iOS: Safari → 分享 → 加入主畫面")
            print(f"   Android: Chrome → 選單 → 安裝應用程式")
            print(f"\n🌐 確保手機和電腦在同一 Wi-Fi 網絡")
            print("="*60 + "\n")
            
            httpd.serve_forever()
    except OSError:
        print(f"\n❌ 錯誤：端口 {PORT} 已被佔用")
        print(f"請關閉其他使用該端口的程序")
    except Exception as e:
        print(f"\n❌ 錯誤：{e}")

if __name__ == "__main__":
    start_server()

