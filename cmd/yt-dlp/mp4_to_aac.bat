@echo off
:: ����Ƿ����������
IF "%~1"=="" (
    echo �����뽫һ����Ƶ�ļ��϶�������ű��ϡ�
    pause
    exit /b
)

:: ����ļ��Ƿ����
IF NOT EXIST "%~1" (
    echo �����ļ� "%~1" �����ڡ�
    pause
    exit /b
)

:: ��ȡ�ļ��Ļ�������
SET base_filename=%~n1

:: ���������Ƶ�ļ���
SET audio_filename=%base_filename%.aac

:: ���Ŀ����Ƶ�ļ��Ƿ��Ѵ���
IF EXIST "%audio_filename%" (
    echo ������Ƶ�ļ� "%audio_filename%" �Ѵ��ڡ�������ȡ������
    pause
    exit /b
)

:: ʹ�� FFmpeg ��ȡ��Ƶ
ffmpeg -i "%~1" -c:a copy "%audio_filename%"

:: ��� FFmpeg �Ƿ�ɹ�
IF %ERRORLEVEL% NEQ 0 (
    echo ������Ƶ��ȡʧ�ܡ�
) ELSE (
    echo ��Ƶ�ѳɹ���ȡ�� "%audio_filename%"��
)

