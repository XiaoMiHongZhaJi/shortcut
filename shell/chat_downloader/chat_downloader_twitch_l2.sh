#!/bin/sh
#启动 chat_downloader_twitch_l

# kill chat_downloader luoshushu67373
ps -ef | grep chat_downloader | grep luoshushu67373 | grep -v grep | awk '{print $2}' | xargs kill -12

if [ ! -d "/root/json" ];then
  mkdir /root/json
fi

/usr/local/bin/chat_downloader https://www.twitch.tv/luoshushu67373 --live_date $(date +%Y-%m-%d_l) --output /root/json/$(date +%Y-%m-%d_%H_%M_%S_l2).json 2>&1 | tee -a /root/json/json.log
