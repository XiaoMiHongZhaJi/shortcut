#!/bin/sh

yt-dlp --external-downloader aria2c --downloader-args aria2c:"-x 8 -k 1M" --playlist-items 1 https://www.youtube.com/playlist?list=PLi3zrmUZHiY-eH8eNJiwj-viwP3ngIkcd --output "%(upload_date>%Y-%m-%d)s_%(title)s.%(ext)s" $*