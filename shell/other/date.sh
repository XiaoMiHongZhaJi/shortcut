#!/bin/sh

## 时区
# 启用 NTP 服务
timedatectl set-ntp true

# 将硬件时钟调整到与当前系统时间一致
hwclock --systohc

# 将时区设为“亚洲/上海” CST
ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

# 查看时间和时区
timedatectl
date -R

# 修改时区
tzselect
4 #Asia
9 #China
2 #Beijing Time
1 #Yes

# 当前时间
date "+%Y-%m-%d_%H_%M_%S"

# 设置时间
date -s '2024-03-04 09:00:00'