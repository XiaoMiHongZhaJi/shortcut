#!/usr/bin/env bash

ip rule del fwmark 666 table 666 && echo "已清除 ip rule fwmark 规则"
ip route del local default dev lo table 666 && echo "已清除 ip route local 规则"

iptables -t nat -F && echo "已清除 nat 表"
iptables -t nat -X && echo "已清除 nat 链"
iptables -t mangle -F && echo "已清除 mangle 表"
iptables -t mangle -X && echo "已清除 mangle 链"