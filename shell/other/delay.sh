
echo $(date +%Y-%m-%d_%H:%M:%S)
echo '启动完成，延迟20秒后执行：'

sleep 20
/etc/clash/iptables.sh
/etc/clash/mount.sh

echo $(date +%Y-%m-%d_%H:%M:%S)
echo '执行完成\n'


