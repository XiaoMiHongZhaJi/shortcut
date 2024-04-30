#!/bin/sh

#查询当前使用的 TCP 拥塞控制算法
sysctl net.ipv4.tcp_congestion_control

#启用BBR TCP拥塞控制算法
echo "net.core.default_qdisc=fq" >> /etc/sysctl.conf
echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf
sysctl -p