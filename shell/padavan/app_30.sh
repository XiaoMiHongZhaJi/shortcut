#!/bin/bash
# 此脚本路径：/etc/storage/app_30.sh
# 自定义设置 - 脚本 - 自定义 Crontab 定时任务配置，可自定义启动时间
source /etc/storage/script/init.sh
export PATH='/etc/storage/bin:/tmp/script:/etc/storage/script:/opt/usr/sbin:/opt/usr/bin:/opt/sbin:/opt/bin:/usr/local/sbin:/usr/sbin:/usr/bin:/sbin:/bin'
export LD_LIBRARY_PATH=/lib:/opt/lib
wxsend_enable=`nvram get app_123`
wxsend_enable=${wxsend_enable:-"0"}
wxsend_notify_1=`nvram get app_49`
wxsend_notify_2=`nvram get app_50`
wxsend_notify_3=`nvram get app_51`
wxsend_notify_4=`nvram get app_52`
mkdir -p /tmp/var
resub=1
# 获得外网地址
    arIpAddress() {
    curltest=`which curl`
    if [ -z "$curltest" ] || [ ! -s "`which curl`" ] ; then
        #wget -T 5 -t 3 --user-agent "$user_agent" --quiet --output-document=- "http://myip.ipip.net" | grep "当前 IP" | grep -E -o '([0-9]+\.){3}[0-9]+' | head -n1 | cut -d' ' -f1
        #wget -T 5 -t 3 --user-agent "$user_agent" --quiet --output-document=- "http://members.3322.org/dyndns/getip" | grep -E -o '([0-9]+\.){3}[0-9]+' | head -n1 | cut -d' ' -f1
        #wget -T 5 -t 3 --user-agent "$user_agent" --quiet --output-document=- "ip.3322.net" | grep -E -o '([0-9]+\.){3}[0-9]+' | head -n1 | cut -d' ' -f1
        #wget -T 5 -t 3 --user-agent "$user_agent" --quiet --output-document=- "http://ddns.oray.com/checkip" | grep -E -o '([0-9]+\.){3}[0-9]+' | head -n1 | cut -d' ' -f1
        wget -T 5 -t 3 --user-agent "$user_agent" --quiet --output-document=- "http://checkipv6.dyndns.com" | grep Address | head -n1 | cut -d':' -f2- | cut -d' ' -f2 | cut -d'<' -f1
    else
        #curl -L --user-agent "$user_agent" -s "http://myip.ipip.net" | grep "当前 IP" | grep -E -o '([0-9]+\.){3}[0-9]+' | head -n1 | cut -d' ' -f1
        #curl -L --user-agent "$user_agent" -s "http://members.3322.org/dyndns/getip" | grep -E -o '([0-9]+\.){3}[0-9]+' | head -n1 | cut -d' ' -f1
        #curl -L --user-agent "$user_agent" -s ip.3322.net | grep -E -o '([0-9]+\.){3}[0-9]+' | head -n1 | cut -d' ' -f1
        #curl -L --user-agent "$user_agent" -s http://ddns.oray.com/checkip | grep -E -o '([0-9]+\.){3}[0-9]+' | head -n1 | cut -d' ' -f1
        curl -L --user-agent "$user_agent" -s http://checkipv6.dyndns.com | grep Address | head -n1 | cut -d':' -f2- | cut -d' ' -f2 | cut -d'<' -f1
    fi
    }
# 读取最近外网地址
    lastIPAddress() {
        inter="/etc/storage/wxsend_lastIPAddress"
        cat $inter
    }

while [ "$wxsend_enable" = "1" ];
do
wxsend_enable=`nvram get app_123`
wxsend_enable=${wxsend_enable:-"0"}
wxsend_notify_1=`nvram get app_49`
wxsend_notify_2=`nvram get app_50`
wxsend_notify_3=`nvram get app_51`
wxsend_notify_4=`nvram get app_52`
curltest=`which curl`
ping_text=`ping -4 223.5.5.5 -c 1 -w 2 -q`
ping_time=`echo $ping_text | awk -F '/' '{print $4}'| awk -F '.' '{print $1}'`
ping_loss=`echo $ping_text | awk -F ', ' '{print $3}' | awk '{print $1}'`
if [ ! -z "$ping_time" ] ; then
    echo "ping：$ping_time ms 丢包率：$ping_loss"
 else
    echo "ping：失效"
fi
if [ ! -z "$ping_time" ] ; then
echo "online"
if [ "$wxsend_notify_1" = "1" ] ; then
    hostIP=$(arIpAddress)
    hostIP=`echo $hostIP | head -n1 | cut -d' ' -f1`
    if [ "$hostIP"x = "x"  ] ; then
        curltest=`which curl`
        if [ -z "$curltest" ] || [ ! -s "`which curl`" ] ; then
            [ "$hostIP"x = "x"  ] && hostIP=`wget -T 5 -t 3 --user-agent "$user_agent" --quiet --output-document=- "http://members.3322.org/dyndns/getip" | grep -E -o '([0-9]+\.){3}[0-9]+' | head -n1 | cut -d' ' -f1`
            [ "$hostIP"x = "x"  ] && hostIP=`wget -T 5 -t 3 --user-agent "$user_agent" --quiet --output-document=- "ip.3322.net" | grep -E -o '([0-9]+\.){3}[0-9]+' | head -n1 | cut -d' ' -f1`
            [ "$hostIP"x = "x"  ] && hostIP=`wget -T 5 -t 3 --user-agent "$user_agent" --quiet --output-document=- "http://myip.ipip.net" | grep "当前 IP" | grep -E -o '([0-9]+\.){3}[0-9]+' | head -n1 | cut -d' ' -f1`
            [ "$hostIP"x = "x"  ] && hostIP=`wget -T 5 -t 3 --user-agent "$user_agent" --quiet --output-document=- "http://ddns.oray.com/checkip" | grep -E -o '([0-9]+\.){3}[0-9]+' | head -n1 | cut -d' ' -f1`
        else
            [ "$hostIP"x = "x"  ] && hostIP=`curl -L --user-agent "$user_agent" -s "http://members.3322.org/dyndns/getip" | grep -E -o '([0-9]+\.){3}[0-9]+' | head -n1 | cut -d' ' -f1`
            [ "$hostIP"x = "x"  ] && hostIP=`curl -L --user-agent "$user_agent" -s ip.3322.net | grep -E -o '([0-9]+\.){3}[0-9]+' | head -n1 | cut -d' ' -f1`
            [ "$hostIP"x = "x"  ] && hostIP=`curl -L --user-agent "$user_agent" -s "http://myip.ipip.net" | grep "当前 IP" | grep -E -o '([0-9]+\.){3}[0-9]+' | head -n1 | cut -d' ' -f1`
            [ "$hostIP"x = "x"  ] && hostIP=`curl -L --user-agent "$user_agent" -s http://ddns.oray.com/checkip | grep -E -o '([0-9]+\.){3}[0-9]+' | head -n1 | cut -d' ' -f1`
        fi
    fi
    lastIP=$(lastIPAddress)
    if [ "$lastIP" != "$hostIP" ] && [ ! -z "$hostIP" ] ; then
    sleep 60
        hostIP=$(arIpAddress)
        hostIP=`echo $hostIP | head -n1 | cut -d' ' -f1`
        lastIP=$(lastIPAddress)
    fi
    if [ "$lastIP" != "$hostIP" ] && [ ! -z "$hostIP" ] ; then
        logger -t "【互联网 IP 变动】" "目前 IP: ${hostIP}"
        logger -t "【互联网 IP 变动】" "上次 IP: ${lastIP}"
#        Sh45_wx_send.sh send_message "【PDCN_`nvram get computer_name`】互联网IP变动" "${hostIP}" &
        url2="https://message.chenyifaer.shop/xmhzj/【PDCN_"`nvram get computer_name`"】互联网IP变动/${hostIP}"
        curl -L -s ${url2} &
        logger -t "【wxsend推送】" "互联网IP变动:${hostIP}"
        echo -n $hostIP > /etc/storage/wxsend_lastIPAddress
    fi
fi
if [ "$wxsend_notify_2" = "1" ] ; then
    # 获取接入设备名称
    touch /tmp/var/wxsend_newhostname.txt
    echo "接入设备名称" > /tmp/var/wxsend_newhostname.txt
    #cat /tmp/syslog.log | grep 'Found new hostname' | awk '{print $7" "$8}' >> /tmp/var/wxsend_newhostname.txt
    cat /tmp/static_ip.inf | grep -v "^$" | awk -F "," '{ if ( $6 == 0 ) print "【内网IP："$1"，ＭＡＣ："$2"，名称："$3"】  "}' >> /tmp/var/wxsend_newhostname.txt
    # 读取以往接入设备名称
    touch /etc/storage/wxsend_hostname.txt
    [ ! -s /etc/storage/wxsend_hostname.txt ] && echo "接入设备名称" > /etc/storage/wxsend_hostname.txt
    # 获取新接入设备名称
    awk 'NR==FNR{a[$0]++} NR>FNR&&a[$0]' /etc/storage/wxsend_hostname.txt /tmp/var/wxsend_newhostname.txt > /tmp/var/wxsend_newhostname相同行.txt
    awk 'NR==FNR{a[$0]++} NR>FNR&&!a[$0]' /tmp/var/wxsend_newhostname相同行.txt /tmp/var/wxsend_newhostname.txt > /tmp/var/wxsend_newhostname不重复.txt
    if [ -s "/tmp/var/wxsend_newhostname不重复.txt" ] ; then
        content=`cat /tmp/var/wxsend_newhostname不重复.txt | grep -v "^$"`
#        Sh45_wx_send.sh send_message "【PDCN_`nvram get computer_name`】新设备加入" "${content}" &
        url2="https://message.chenyifaer.shop/xmhzj/【PDCN_"`nvram get computer_name`"】新设备加入/${content}?group=router"
        curl -L -s ${url2} &
        logger -t "【wxsend推送】" "PDCN新设备加入:${content}"
        cat /tmp/var/wxsend_newhostname不重复.txt | grep -v "^$" >> /etc/storage/wxsend_hostname.txt
    fi
fi
if [ "$wxsend_notify_4" = "1" ] ; then
    # 设备上、下线提醒
    # 获取接入设备名称
    touch /tmp/var/wxsend_newhostname.txt
    echo "接入设备名称" > /tmp/var/wxsend_newhostname.txt
    #cat /tmp/syslog.log | grep 'Found new hostname' | awk '{print $7" "$8}' >> /tmp/var/wxsend_newhostname.txt
    cat /tmp/static_ip.inf | grep -v "^$" | awk -F "," '{ if ( $6 == 0 ) print "【内网IP："$1"，ＭＡＣ："$2"，名称："$3"】  "}' >> /tmp/var/wxsend_newhostname.txt
    # 读取以往上线设备名称
    touch /etc/storage/wxsend_hostname_上线.txt
    [ ! -s /etc/storage/wxsend_hostname_上线.txt ] && echo "接入设备名称" > /etc/storage/wxsend_hostname_上线.txt
    # 上线
    awk 'NR==FNR{a[$0]++} NR>FNR&&a[$0]' /etc/storage/wxsend_hostname_上线.txt /tmp/var/wxsend_newhostname.txt > /tmp/var/wxsend_newhostname相同行_上线.txt
    awk 'NR==FNR{a[$0]++} NR>FNR&&!a[$0]' /tmp/var/wxsend_newhostname相同行_上线.txt /tmp/var/wxsend_newhostname.txt > /tmp/var/wxsend_newhostname不重复_上线.txt
    if [ -s "/tmp/var/wxsend_newhostname不重复_上线.txt" ] ; then
        content=`cat /tmp/var/wxsend_newhostname不重复_上线.txt | grep -v "^$"`
#        Sh45_wx_send.sh send_message "【PDCN_`nvram get computer_name`】设备【上线】Online" "${content}" &
        url2="https://message.chenyifaer.shop/xmhzj/【PDCN_"`nvram get computer_name`"】设备【上线】Online/${content}?group=router"
        curl -L -s ${url2} &
        logger -t "【wxsend推送】" "PDCN设备【上线】:${content}"
        cat /tmp/var/wxsend_newhostname不重复_上线.txt | grep -v "^$" >> /etc/storage/wxsend_hostname_上线.txt
    fi
    # 下线
    awk 'NR==FNR{a[$0]++} NR>FNR&&!a[$0]' /tmp/var/wxsend_newhostname.txt /etc/storage/wxsend_hostname_上线.txt > /tmp/var/wxsend_newhostname不重复_下线.txt
    if [ -s "/tmp/var/wxsend_newhostname不重复_下线.txt" ] ; then
        content=`cat /tmp/var/wxsend_newhostname不重复_下线.txt | grep -v "^$"`
#        Sh45_wx_send.sh send_message "【PDCN_`nvram get computer_name`】设备【下线】offline" "${content}" &
        url2="https://message.chenyifaer.shop/xmhzj/【PDCN_"`nvram get computer_name`"】设备【下线】offline/${content}?group=router"
        curl -L -s ${url2} &
        logger -t "【wxsend推送】" "PDCN设备【下线】:${content}"
        cat /tmp/var/wxsend_newhostname.txt | grep -v "^$" > /etc/storage/wxsend_hostname_上线.txt
    fi
fi
if [ "$wxsend_notify_3" = "1" ] && [ "$resub" = "1" ] ; then
    # 固件更新提醒
    [ ! -f /tmp/var/wxsend_osub ] && echo -n `nvram get firmver_sub` > /tmp/var/wxsend_osub
    rm -f /tmp/var/wxsend_nsub
    wgetcurl.sh "/tmp/var/wxsend_nsub" "$hiboyfile/osub" "$hiboyfile2/osub"
    [[ "$(cat /tmp/var/wxsend_nsub | wc -c)" -ge 20 ]] && echo "" /tmp/var/wxsend_nsub
    [ ! -z "$(cat /tmp/var/wxsend_nsub | grep '<' | grep '>')" ] && echo "" > /tmp/var/wxsend_nsub
    if [ "$(cat /tmp/var/wxsend_osub |head -n1)"x != "$(cat /tmp/var/wxsend_nsub |head -n1)"x ] && [ -f /tmp/var/wxsend_nsub ] ; then
        echo -n `nvram get firmver_sub` > /tmp/var/wxsend_osub
        content="新的固件： `cat /tmp/var/wxsend_nsub | grep -v "^$"` ，目前旧固件： `cat /tmp/var/wxsend_osub | grep -v "^$"` "
        logger -t "【wxsend推送】" "固件 新的更新：${content}"
#        Sh45_wx_send.sh send_message "【PDCN_`nvram get computer_name`】固件更新提醒" "${content}" &
        url2="https://message.chenyifaer.shop/xmhzj/【PDCN_"`nvram get computer_name`"】固件更新提醒/${content}?group=router"
        curl -L -s ${url2} &
        echo -n `cat /tmp/var/wxsend_nsub | grep -v "^$"` > /tmp/var/wxsend_osub
    fi
fi
    resub=`expr $resub + 1`
    [ "$resub" -gt 360 ] && resub=1
else
echo "Internet down 互联网断线"
resub=1
fi
sleep 60
continue
done
