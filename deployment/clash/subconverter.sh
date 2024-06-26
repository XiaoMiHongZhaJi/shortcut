#!/bin/bash

# 处理订阅信息
# 定义变量
declare -a url_src

url_src[0]="https://www.chenyifaer.shop/mysub/xxx"
url_src[1]="https://export.xingct.com/ifafa-xxxxx"

#config="ACL4SSR_NoApple.ini"
config="xxx.ini"

url_prefix="https://www.chenyifaer.shop/sub?target=clash&url="
url_suffix="&config=config/${config}&udp=true"

#编码 echo '手机' | tr -d '\n' | xxd -plain | sed 's/\(..\)/%\1/g'
#解码 echo -n $url | sed 's/\\/\\\\/g;s/\(%\)\([0-9a-fA-F][0-9a-fA-F]\)/\\x\2/g'


for ele in ${url_src[*]}
do
  if [ "${ele}" ]; then
    echo "添加url：${ele}"
    if [ "${url}" ]; then
	  url=${url}"|"${ele}
	else
	  url=${ele}
    fi
  fi
done

if [ -z "${url}" ]; then
  echo "url_src[0]不能为空"
  exit
fi


cd /etc/clash/

# 下载
url=${url_prefix}${url}${url_suffix}
echo "开始下载url:
${url}"
wget ${url} -q -O dy.yaml
#curl -s ${url} | sed 's/skip-cert-verify: false/skip-cert-verify: true/g' > dy.yaml

calculate_time_difference() {
    # 获取当前时间的时间戳
    current=$(date +%s)

    # 获取修改时间的时间戳
    #modified=$1
	modified=$(</dev/stdin)
    modified=$(date -ud "$modified" +%s)

    # 计算时间差
    diff=$((current - modified))

    # 计算天数、小时数、分钟数和秒数
    days=$((diff / 86400))
    diff=$((diff % 86400))
    hours=$((diff / 3600))
    diff=$((diff % 3600))
    minutes=$((diff / 60))
    seconds=$((diff % 60))

    # 输出结果
    output=""

    if [ $days -gt 0 ]; then
        output="$days 天 "
    fi

    if [ $hours -gt 0 ]; then
        output="$output$hours 小时 "
    fi

    if [ $minutes -gt 0 ]; then
        output="$output$minutes 分钟 "
    fi

    if [ $seconds -gt 0 ]; then
        output="$output$seconds 秒 "
    fi

    output="$output前"

    echo "最后更新 $output"
}

if [ -f "dy.yaml" ]; then
  #echo "下载完成："
  #echo "$(head -n 5 dy.yaml)"
  if [ "$(head -n 1 dy.yaml | grep port)" ]; then
    echo "订阅下载成功"
    echo $(curl -I -s $url | grep "last-modified" | awk -F": " '{print $2}' | calculate_time_difference)
  else
    echo "订阅下载失败，文件为空或内容错误！"
    exit
  fi
else
  echo "订阅下载失败，文件不存在！"
  exit
fi

# 备份
if [ -f "config_bak.yaml" ]; then
  rm -r config_bak.yaml
fi

mv config.yaml config_bak.yaml
mv dy.yaml config.yaml

# dns
echo '
#ipv6: true
allow-lan: true
redir-port: 7892
tproxy-port: 7893
external-controller: :9090
log-level: warning
external-ui: "yacd-ui"
dns:
  enable: true
  listen: 0.0.0.0:53
  enhanced-mode: fake-ip
  nameserver:
    - 119.29.29.29
  fallback:
    - 8.8.8.8
  fallback-filter:
   geoip: true
   geoip-code: CN
   ipcidr:
     - 240.0.0.0/4
  fake-ip-filter:
    - "*.lan"
    - "*.localdomain"
    - "*.example"
    - "*.invalid"
    - "*.localhost"
    - "*.test"
    - "*.local"
    - "*.home.arpa"
    - "time.*.com"
    - "time.*.gov"
    - "time.*.edu.cn"
    - "time.*.apple.com"
    - "time-ios.apple.com"
    - "time1.*.com"
    - "time2.*.com"
    - "time3.*.com"
    - "time4.*.com"
    - "time5.*.com"
    - "time6.*.com"
    - "time7.*.com"
    - "ntp.*.com"
    - "ntp1.*.com"
    - "ntp2.*.com"
    - "ntp3.*.com"
    - "ntp4.*.com"
    - "ntp5.*.com"
    - "ntp6.*.com"
    - "ntp7.*.com"
    - "*.time.edu.cn"
    - "*.ntp.org.cn"
    - "+.pool.ntp.org"
    - "time1.cloud.tencent.com"
    - "music.163.com"
    - "*.music.163.com"
    - "*.126.net"
    - "musicapi.taihe.com"
    - "music.taihe.com"
    - "songsearch.kugou.com"
    - "trackercdn.kugou.com"
    - "*.kuwo.cn"
    - "api-jooxtt.sanook.com"
    - "api.joox.com"
    - "joox.com"
    - "y.qq.com"
    - "*.y.qq.com"
    - "streamoc.music.tc.qq.com"
    - "mobileoc.music.tc.qq.com"
    - "isure.stream.qqmusic.qq.com"
    - "dl.stream.qqmusic.qq.com"
    - "aqqmusic.tc.qq.com"
    - "amobile.music.tc.qq.com"
    - "*.xiami.com"
    - "*.music.migu.cn"
    - "music.migu.cn"
    - "+.msftconnecttest.com"
    - "+.msftncsi.com"
    - "localhost.ptlogin2.qq.com"
    - "localhost.sec.qq.com"
    - "+.qq.com"
    - "+.tencent.com"
    - "+.srv.nintendo.net"
    - "*.n.n.srv.nintendo.net"
    - "+.stun.playstation.net"
    - "xbox.*.*.microsoft.com"
    - "*.*.xboxlive.com"
    - "xbox.*.microsoft.com"
    - "xnotify.xboxlive.com"
    - "+.battlenet.com.cn"
    - "+.wotgame.cn"
    - "+.wggames.cn"
    - "+.wowsgame.cn"
    - "+.wargaming.net"
    - "proxy.golang.org"
    - "stun.*.*"
    - "stun.*.*.*"
    - "+.stun.*.*"
    - "+.stun.*.*.*"
    - "+.stun.*.*.*.*"
    - "+.stun.*.*.*.*.*"
    - "heartbeat.belkin.com"
    - "*.linksys.com"
    - "*.linksyssmartwifi.com"
    - "*.router.asus.com"
    - "mesu.apple.com"
    - "swscan.apple.com"
    - "swquery.apple.com"
    - "swdownload.apple.com"
    - "swcdn.apple.com"
    - "swdist.apple.com"
    - "lens.l.google.com"
    - "stun.l.google.com"
    - "na.b.g-tun.com"
    - "+.nflxvideo.net"
    - "*.square-enix.com"
    - "*.finalfantasyxiv.com"
    - "*.ffxiv.com"
    - "*.ff14.sdo.com"
    - "ff.dorado.sdo.com"
    - "*.mcdn.bilivideo.cn"
    - "+.media.dssott.com"
    - "shark007.net"
    - "Mijia Cloud"
    - "+.cmbchina.com"
    - "+.cmbimg.com"
    - "local.adguard.org"
    - "+.sandai.net"
    - "+.n0808.com"
' >> config.yaml

echo "订阅更新成功"

# 重载
result=$(curl -s -X PUT http://127.0.0.1:9090/configs?force=true --data '{"path": "", "payload": ""}')

if [ -z "${result}" ]; then

  echo "配置文件重载成功"
  
  # 验证
  curl_result=$(curl -s www.baidu.com --proxy http://127.0.0.1:7890)
  
  if [ "${curl_result}" ]; then
    echo "验证成功"

    # 成功，退出
    exit

  fi
  
  echo "验证失败"

fi

echo "${result}"
echo "配置文件有误，重载失败，尝试恢复原配置文件！"

# 恢复
if [ -f "config_bak.yaml" ]; then

  if [ -f "config_error.yaml" ]; then
    rm -r config_error.yaml
  fi

  mv config.yaml config_error.yaml
  mv config_bak.yaml config.yaml
  curl -s -X PUT http://127.0.0.1:9090/configs?force=true --data '{"path": "", "payload": ""}'

  echo "已恢复原配置文件"

fi


