#!/bin/sh

#sleep 20

# 列表
#iptables -nL --line-number -t nat

#tcp
#完整版
iptables -t nat -N clash
iptables -t nat -A clash -d 0.0.0.0/8 -j RETURN
iptables -t nat -A clash -d 10.0.0.0/8 -j RETURN
iptables -t nat -A clash -d 127.0.0.0/8 -j RETURN
iptables -t nat -A clash -d 169.254.0.0/16 -j RETURN
iptables -t nat -A clash -d 172.16.0.0/12 -j RETURN
iptables -t nat -A clash -d 192.168.0.0/16 -j RETURN
iptables -t nat -A clash -d 224.0.0.0/4 -j RETURN
iptables -t nat -A clash -d 240.0.0.0/4 -j RETURN
iptables -t nat -A clash -p tcp -j REDIRECT --to-port 7892
iptables -t nat -A PREROUTING -p tcp -j clash

#udp
ip rule add fwmark 666 table 666
ip route add local default dev lo table 666

iptables -t mangle -N clash
iptables -t mangle -A clash -d 0.0.0.0/8 -j RETURN
iptables -t mangle -A clash -d 10.0.0.0/8 -j RETURN
iptables -t mangle -A clash -d 127.0.0.0/8 -j RETURN
iptables -t mangle -A clash -d 169.254.0.0/16 -j RETURN
iptables -t mangle -A clash -d 172.16.0.0/12 -j RETURN
iptables -t mangle -A clash -d 192.168.0.0/16 -j RETURN
iptables -t mangle -A clash -d 224.0.0.0/4 -j RETURN
iptables -t mangle -A clash -d 240.0.0.0/4 -j RETURN
iptables -t mangle -A clash -p udp -j TPROXY --on-port 7892 --tproxy-mark 666
iptables -t mangle -A PREROUTING -p udp -j clash

echo "iptables 添加成功"

# 如需端口映射 需要在此处添加端口号 方式1
#iptables -t nat -I PREROUTING -p tcp -m multiport --sports 3389,6900,8800,8888,25500,60010 -j RETURN

# 方式2 端口转发 60010 -> 192.168.100.10:60010
#iptables -t nat -I PREROUTING -p tcp --dport 60010 -j DNAT --to-destination 192.168.100.10:60010
#iptables -t nat -I POSTROUTING -p tcp -d 192.168.100.10 --dport 60010 -j SNAT --to 192.168.100.30



