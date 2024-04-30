@echo off
:: 检查是否有输入参数
IF "%~1"=="" (
    echo 错误：请将一个视频文件拖动到这个脚本上。
    pause
    exit /b
)

:: 检查文件是否存在
IF NOT EXIST "%~1" (
    echo 错误：文件 "%~1" 不存在。
    pause
    exit /b
)

:: 获取文件的基本名称
SET base_filename=%~n1

:: 构建输出音频文件名
SET audio_filename=%base_filename%.aac

:: 检查目标音频文件是否已存在
IF EXIST "%audio_filename%" (
    echo 错误：音频文件 "%audio_filename%" 已存在。跳过提取操作。
    pause
    exit /b
)

:: 使用 FFmpeg 提取音频
ffmpeg -i "%~1" -c:a copy "%audio_filename%"

:: 检查 FFmpeg 是否成功
IF %ERRORLEVEL% NEQ 0 (
    echo 错误：音频提取失败。
) ELSE (
    echo 音频已成功提取到 "%audio_filename%"。
)

