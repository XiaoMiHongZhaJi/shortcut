
# 黑名单
#iptables -A INPUT -s 2.2.2.2 -j DROP
# 允许ping
#iptables -A INPUT -p icmp -j ACCEPT
# 允许ssh端口
#iptables -A INPUT -p tcp --dport 22 -j ACCEPT
# 允许ttl大于80
iptables -A INPUT -m ttl --ttl-gt 80 -j ACCEPT
# 允许ESTABLISHED
iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT
# 允许lo网卡
iptables -A INPUT -i lo -j ACCEPT
# 允许上海联通
iptables -A INPUT -s 223.167.220.120 -j ACCEPT
# 默认
iptables -P INPUT DROP
# 恢复
#iptables -P INPUT ACCEPT