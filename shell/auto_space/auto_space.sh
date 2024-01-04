#!/bin/sh

percent=90
notice=https://bark.chenyifaer.online/xxxx/
shell=/root/auto_space/tg_move_media.sh
used=$(df | grep mmcblk0p2 | awk '{print $5}' | awk -F % '{print $1}')

echo "\n当前时间：$(date +'%Y-%m-%d %H:%M:%S')"

# 网络验证
curl_result=$(curl -s https://www.google.com --proxy http://127.0.0.1:7890)

if [ -z "${curl_result}" ]; then

	echo "网络验证失败，退出\n"
	curl -s "${notice}任务提示/网络连接失败！?sound=silence"
	exit

fi

echo "网络验证成功"

if [ ${used} -gt 0 ] && [ ${used} -lt ${percent} ];then

	msg="当前已使用空间：${used}%，小于${percent}%，无需转移数据"
	echo "${msg}"
	
	msg=$(echo ${msg} | xxd -plain | sed 's/\(..\)/%\1/g' | tr -d '\n')
	curl -s "${notice}任务提示/${msg}?sound=silence"
	
	echo "\n重启tg服务\n"
	systemctl restart tg

	exit 0

fi

msg="当前已使用空间：${used}%，已达到${percent}%，开始转移数据"
echo "${msg}"

msg=$(echo ${msg} | xxd -plain | sed 's/\(..\)/%\1/g' | tr -d '\n')
curl -s "${notice}任务提示/${msg}?sound=silence"

echo "\n${shell} 开始执行"

${shell}

if [ $? -eq 0 ];then

	msg="当前时间：$(date +'%Y-%m-%d %H:%M:%S')\n${shell} 执行完成\n"
	echo "${msg}"

	msg=$(echo ${msg} | xxd -plain | sed 's/\(..\)/%\1/g' | tr -d '\n')
	curl -s "${notice}任务提示/${msg}?sound=silence"

	exit 0

fi

msg="当前时间：$(date +'%Y-%m-%d %H:%M:%S')\n${shell} 执行出错！\n"
echo "${msg}"

msg=$(echo ${msg} | xxd -plain | sed 's/\(..\)/%\1/g' | tr -d '\n')
curl -s "${notice}任务提示/${msg}?sound=silence"

exit 1

