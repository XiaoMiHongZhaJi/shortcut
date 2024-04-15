#!/bin/sh

# 签到
echo "准备签到 $(date +'%Y-%m-%d %H:%M:%S')"
# 生成一个 0 到 300 之间的随机整数
random_sleep=$(( $RANDOM % 301 ))
# 休眠随机生成的秒数
sleep $random_sleep

echo "已休眠了 $random_sleep 秒"

curl -X POST https://www.nodeseek.com/api/attendance?random=false \
-H "Content-Type: application/json" \
-H "Origin: https://www.nodeseek.com" \
-H "Referer: https://www.nodeseek.com/board" \
-H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0" \
-H "Cookie: colorscheme=light; _ga=GA1.1.61968520.1703218551; Hm_lvt_0592129dcac523140d74eadc808af859=1706765633; _ga_W8C0VXL822=GS1.1.1706765633.2.0.1706765636.0.0.0; session=ee7cd21ef5e5f21140e7ebb5ccccd3c6; cf_clearance=1sRK8NVr.EKbhQUfBFx765EI9.SGP52pls2nBs4VO7E-1710314154-1.0.1.1-s2nKKPEwCKjDxcADuxGA5W1NjJDflkrKLj6ZDvTgIR1rKJmnqYrssP3T8sU5w5.sUOt85O_yRZffx4.VmZxrKQ"

echo "签到完成 $(date +'%Y-%m-%d %H:%M:%S')\n\n"
