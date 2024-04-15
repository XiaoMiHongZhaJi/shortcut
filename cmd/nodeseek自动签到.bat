
setlocal enabledelayedexpansion

chcp 65001 > nul

REM 定义两个 URL
set "notice_url=https://message.chenyifaer.shop/xmhzj/nodeseek/"

REM 调用第一个 URL，并将返回内容保存到变量
curl -X POST https://www.nodeseek.com/api/attendance?random=false -H "Cookie: xxx" -H "Content-Type: application/json" -H "Origin: https://www.nodeseek.com" -H "Referer: https://www.nodeseek.com/board" -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0" > %temp%\nodeseek_return.txt

set /p nodeseek_return=<%temp%\nodeseek_return.txt

set full_url=%notice_url%%nodeseek_return%

set "full_url=!full_url:{=\{!"

set "full_url=!full_url:}=\}!"

set "full_url=!full_url: =_!"

set "full_url=!full_url:"=\"!"

echo %full_url%

curl %full_url%
