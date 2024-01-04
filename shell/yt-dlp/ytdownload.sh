#!/bin/sh

nohup yt-dlp --playlist-items 1 https://www.youtube.com/playlist?list=PLi3zrmUZHiY-eH8eNJiwj-viwP3ngIkcd --output /jellyfin/video/"%(upload_date>%Y-%m-%d)s.%(ext)s" $* &

sleep 1
tail -f nohup.log