#!/bin/sh

nohup yt-dlp https://www.twitch.tv/luoshushu0 --output /root/$(date "+%Y-%m-%d_%H-%M-%S")".%(ext)s" -f 720p60 &

sleep 1
tail -f nohup.log