#!/bin/sh
#启动 chat_downloader_twitch_t

# kill chat_downloader thebs_chen
ps -ef | grep chat_downloader | grep thebs_chen | grep -v grep | awk '{print $2}' | xargs kill -12

if [ ! -d "/root/json" ];then
  mkdir /root/json
fi

/usr/local/bin/chat_downloader https://www.twitch.tv/thebs_chen --live_date $(date +%Y-%m-%d_t) --output /root/json/$(date +%Y-%m-%d_%H_%M_%S_t).json 2>&1 | tee /root/json/json.log
