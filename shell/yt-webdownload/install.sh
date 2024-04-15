#!/bin/sh

# 1，安装nginx
echo "\n注意：将在 $1 上安装yt-webdownload脚本"
echo "安装步骤如下："
echo "\n1 安装nginx"
echo "2 安装php"
echo "3 配置nginx"
echo "4 测试php环境"
echo "5 安装yt-dlp"
echo "6 安装ffmpeg"
echo "7 安装yt-webdownload脚本"
echo "\n10 秒钟后即将开始自动安装..."
echo "如有疑问，请立即按下 ctrl + c 终止"
sleep 10

echo "\n正在更新apt环境..."
apt update > /dev/null 2>&1

echo "\n1 正在安装nginx..."
apt install -y nginx > /dev/null 2>&1
echo "nginx安装完成"
sleep 2

echo "\n2 正在安装php..."
apt install -y php php-fpm php7.4-mysql php7.4-gd php7.4-curl php7.4-mbstring > /dev/null 2>&1
echo "php安装完成"
sleep 2

echo "\n3 正在配置nginx..."
echo > /etc/nginx/sites-enabled/yt-webdownload
echo 'server {' >> /etc/nginx/sites-enabled/yt-webdownload
echo '	listen 80;' >> /etc/nginx/sites-enabled/yt-webdownload
echo '	listen [::]:80;' >> /etc/nginx/sites-enabled/yt-webdownload
echo '    root /var/www/html;' >> /etc/nginx/sites-enabled/yt-webdownload
echo "	server_name $1;" >> /etc/nginx/sites-enabled/yt-webdownload
echo '	location ~ \.php$ {' >> /etc/nginx/sites-enabled/yt-webdownload
echo '		include snippets/fastcgi-php.conf;' >> /etc/nginx/sites-enabled/yt-webdownload
echo '        fastcgi_pass unix:/run/php/php7.4-fpm.sock;' >> /etc/nginx/sites-enabled/yt-webdownload
echo '	}' >> /etc/nginx/sites-enabled/yt-webdownload
echo '}' >> /etc/nginx/sites-enabled/yt-webdownload
systemctl reload nginx
echo "请查看是否有 failed 字样出现。如无任何内容，则说明无问题。"
echo "如有，请按 ctrl + c 停止并截图寻求帮助！"
sleep 5
echo "nginx配置完成"
sleep 2

echo "\n4 测试php环境..."
echo > /var/www/html/my_info.php
echo '<?php' >> /var/www/html/my_info.php
echo 'echo "hello php";' >> /var/www/html/my_info.php
sleep 2
echo "请在浏览器中打开 http://$1/my_info.php"
echo "查看是否出现【hello php】字样。如有，则说明无问题。此步骤将继续停留20秒..."
sleep 20
echo "php环境测试完成"
sleep 2

echo "\n5 安装yt-dlp..."
wget https://github.com/yt-dlp/yt-dlp/releases/download/2023.12.30/yt-dlp_linux -o /dev/null -O /usr/local/bin/yt-dlp
chmod +x /usr/local/bin/yt-dlp
sleep 2
echo "yt-dlp安装完成"

echo "\n6 安装ffmpeg..."
apt install -y ffmpeg > /dev/null 2>&1
sleep 2
echo "ffmpeg安装完成"

echo "\n7 安装yt-webdownload脚本..."
wget https://raw.githubusercontent.com/XiaoMiHongZhaJi/shortcut/main/php/yt-webdownload/yt-webdownload.php -o /dev/null -O /var/www/html/yt-webdownload.php
chmod 777 /var/www/html
sleep 2
echo "yt-webdownload脚本安装完成"

echo "\n全部步骤执行完成，请打开 http://$1/yt-webdownload.php 开始使用吧！"
