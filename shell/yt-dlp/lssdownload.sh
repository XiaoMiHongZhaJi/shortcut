#!/bin/sh

nohup yt-dlp https://www.twitch.tv/luoshushu0 --output /root/$(date "+%Y-%m-%d_%H-%M-%S")"_lss0.%(ext)s" -f 720p60 &

sleep 2
tail -f nohup.log