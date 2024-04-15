#!/bin/bash

# 下载最新版本
download_url=$(curl -s https://api.github.com/repos/MetaCubeX/mihomo/releases/latest | grep "browser_download_url" | grep "linux-arm64" | grep "gz")

# 使用awk提取链接地址
download_url=$(echo $download_url | awk -F'"' '{print $4}')

# 使用cut提取链接地址
# download_url=$(echo $a | grep -o '"browser_download_url": "[^"]*' | cut -d '"' -f 4)

# 设置代理
export https_proxy=http://localhost:7890

# 使用wget下载文件
wget $download_url

# 解压
file_name=$(basename $download_url)
gzip -d $file_name

# 解压后的文件名
extracted_name=$(basename "$file_name" .gz)

# 重命名
mv $extracted_name /etc/clash/clash-linux_armv8

useradd -M -s /usr/sbin/nologin clash && echo "创建用户 clash"

chown -R clash:clash /etc/clash/
ln -s /etc/clash/clash-linux_armv8 /etc/clash/clash-linux && echo "使用 clash-linux_armv8"
chmod +x /etc/clash/clash-linux_armv8
chmod +x /etc/clash/*.sh

