@echo off
setlocal

rem 设置要执行的次数
set "repeat=10"

rem 执行命令
for /l %%i in (1,1,%repeat%) do (
    yt-dlp https://www.twitch.tv/luoshushu0 --proxy 127.0.0.1:10808 --output  %DATE:~0,4%-%DATE:~5,2%-%DATE:~8,2%_%TIME:~0,2%-%TIME:~3,2%-%TIME:~6,2%".%%(ext)s" -f 720p60
    timeout 10
)

endlocal

pause