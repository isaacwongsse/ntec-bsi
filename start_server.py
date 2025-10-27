#!/usr/bin/env python3
"""
啟動本地開發服務器，允許同一網絡上的移動設備訪問
"""
import http.server
import socketserver
import socket
import sys

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        """覆蓋日誌輸出，不顯示請求日誌"""
        return

def get_local_ip():
    """獲取本機在局域網中的IP地址"""
    try:
        # 創建一個UDP套接字
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        # 連接到一個遠程地址（不需要實際連接）
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except:
        return "localhost"

def start_server():
    # 創建服務器
    try:
        with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
            local_ip = get_local_ip()
            
            print("\n" + "="*60)
            print("🚀 本地開發服務器已啟動！")
            print("="*60)
            print(f"\n📱 在電腦上訪問：")
            print(f"   http://localhost:{PORT}")
            print(f"   http://127.0.0.1:{PORT}")
            print(f"\n📲 在移動設備上訪問：")
            print(f"   http://{local_ip}:{PORT}")
            print(f"\n💡 確保您的移動設備連接到與電腦相同的 Wi-Fi 網絡")
            print("\n按 Ctrl+C 停止服務器")
            print("="*60 + "\n")
            
            # 啟動服務器
            httpd.serve_forever()
    except OSError:
        print(f"\n❌ 錯誤：端口 {PORT} 已被佔用")
        print(f"請關閉其他使用該端口的程序，或修改 PORT 變量使用其他端口")
        sys.exit(1)

if __name__ == "__main__":
    start_server()

