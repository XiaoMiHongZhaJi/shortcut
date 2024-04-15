#!/bin/bash

# 定义报警阈值
cpu_threshold=30
memory_threshold=80
disk_threshold=80
name=wky
disk=/mnt/sda1

# ps -ef | grep monitor.sh | grep -v grep | awk '{print $2}' | xargs kill -12
curl -s -X GET "https://message.chenyifaer.shop/xmhzj/开始监测${name}"
while true; do
    # 获取当前CPU使用率
    cpu_usage=$(top -bn1 | grep "Cpu(s)" | sed "s/.*, *\([0-9.]*\)%* id.*/\1/" | awk '{print 100 - $1}')

    # 获取当前内存使用率
    memory_usage=$(free | awk '/Mem/{printf "%.2f", $3/$2*100}')

    # 获取当前磁盘使用率
    disk_usage=$(df -h ${disk} | awk 'NR==2 {print $5}' | sed 's/%//')

    # 检查是否超过阈值，如果超过则发送curl请求报警
    echo ""
    echo "当前时间：$(date -R)"
    echo "CPU 使用率: $cpu_usage%"
    if [ $(echo "$cpu_usage >= $cpu_threshold" | bc) -eq 1 ]; then
        curl -s -X GET "https://message.chenyifaer.shop/xmhzj/${name}报警/CPU使用率: ${cpu_usage}%25"
        echo ""
        sleep 1
    fi

    echo "内存 使用率: $memory_usage%"
    if [ $(echo "$memory_usage >= $memory_threshold" | bc) -eq 1 ]; then
        curl -s -X GET "https://message.chenyifaer.shop/xmhzj/${name}报警/内存使用率: ${memory_usage}%25"
        echo ""
        sleep 1
    fi

    echo "磁盘 占用率: $disk_usage%"
    if [ $(echo "$disk_usage >= $disk_threshold" | bc) -eq 1 ]; then
        curl -s -X GET "https://message.chenyifaer.shop/xmhzj/${name}报警/磁盘占用: ${disk_usage}%25"
        echo ""
        sleep 1
    fi

    # 休眠30分钟
    sleep 1800
done
