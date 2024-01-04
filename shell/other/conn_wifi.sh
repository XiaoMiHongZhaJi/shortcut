#!/bin/sh

# 查看设备状态
nmcli device status

# 检查 radio
nmcli radio

# 查看附近无线网络信号：

nmcli dev wifi list

# 加密的 AP, 使用以下命令：
nmcli device wifi connect MYWIFI password 12345678

# 查看状态
ifconfig