#!/bin/sh
#启动 chat_downloader_twitch_l

#/usr/local/bin/kill9 chat_downloader luoshushu0
ps -ef | grep chat_downloader | grep luoshushu0 | grep -v grep | awk '{print $2}' | xargs kill -12

if [ ! -d "/root/jar/json" ];then
  mkdir /root/jar/json
fi

/usr/local/bin/chat_downloader https://www.twitch.tv/luoshushu0 --live_date $(date +%Y-%m-%d_l) --output /root/jar/json/$(date +%Y-%m-%d_%H_%M_%S_l).json 2>&1 | tee -a /root/jar/json/json.log
