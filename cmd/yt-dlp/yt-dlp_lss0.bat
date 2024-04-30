@echo off
setlocal enabledelayedexpansion

rem 设置要执行的次数
set repeat=10
set timeout_duration=2

rem 执行命令
for /l %%i in (1,1,%repeat%) do (
    cd C:\Users\Administrator\Downloads\twitch
    yt-dlp https://www.twitch.tv/luoshushu0 --output "!DATE:~0,4!-!DATE:~5,2!-!DATE:~8,2!_!TIME:~0,2!-!TIME:~3,2!-!TIME:~6,2!"_lss0".%%(ext)s" -f 720p60
    timeout !timeout_duration!
    set /a timeout_duration+=2
)

endlocal

pause