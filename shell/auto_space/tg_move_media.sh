#!/bin/sh

src=/root/telegram_media_downloader
dir=/mnt/sda1/Telegram/$(date +%Y-%m-%d)


if [ ! -d "${src}/photo" ];then
  echo "程序出错，${src}源文件夹不存在！"
  exit 1
fi

if [ -d "${dir}" ];then
  echo "程序出错，${dir}目标文件夹已存在！"
  exit 2
fi

echo "停止tg服务"
systemctl stop tg

echo "创建目标文件夹${dir}"
mkdir $dir

# photo
count_photo=$(ls -l "${src}/photo" | wc -l)
count_size=$(ls -l "${src}/photo" | awk '{sum += $5}; END {print sum}')
count_all=$(( ${count_size} >> 20 ))

echo "开始转移源文件夹：photo，文件数量：${count_photo}，总大小：${count_all} MB"
start_s=$(date +%s)

mv "${src}/photo" "${dir}"

end_s=$(date +%s)
sum_time=$(( ${end_s} - ${start_s} ))

echo "转移源文件夹photo完成，用时：${sum_time}秒"

# audio
if [ -d "${src}/audio" ];then

  count_audio=$(ls -l "${src}/audio" | wc -l)
  count_size=$(ls -l "${src}/audio" | awk '{sum += $5}; END {print sum}')
  count_all=$(( ${count_size} >> 20 ))
  
  echo "开始转移源文件夹：audio，文件数量：${count_audio}，总大小：${count_all} MB"
  start_s=$(date +%s)
  
  mv "${src}/audio" "${dir}"
  
  end_s=$(date +%s)
  sum_time=$(( ${end_s} - ${start_s} ))
  
  echo "转移源文件夹audio完成，用时：${sum_time}秒"

fi

# video_note
if [ -d "${src}/video_note" ];then

  count_video_note=$(ls -l "${src}/video_note" | wc -l)
  count_size=$(ls -l "${src}/video_note" | awk '{sum += $5}; END {print sum}')
  count_all=$(( ${count_size} >> 20 ))
  
  echo "开始转移源文件夹：video_note，文件数量：${count_video_note}，总大小：${count_all} MB"
  start_s=$(date +%s)
  
  mv "${src}/video_note" "${dir}"
  
  end_s=$(date +%s)
  sum_time=$(( ${end_s} - ${start_s} ))
  
  echo "转移源文件夹video_note完成，用时：${sum_time}秒"

fi

# voice
if [ -d "${src}/voice" ];then

  count_voice=$(ls -l "${src}/voice" | wc -l)
  count_size=$(ls -l "${src}/voice" | awk '{sum += $5}; END {print sum}')
  count_all=$(( ${count_size} >> 20 ))
  
  echo "开始转移源文件夹：voice，文件数量：${count_voice}，总大小：${count_all} MB"
  start_s=$(date +%s)
  
  mv "${src}/voice" "${dir}"
  
  end_s=$(date +%s)
  sum_time=$(( ${end_s} - ${start_s} ))
  
  echo "转移源文件夹voice完成，用时：${sum_time}秒"

fi

# video
if [ -d "${src}/video" ];then

  count_video=$(ls -l "${src}/video" | wc -l)
  count_size=$(ls -l "${src}/video" | awk '{sum += $5}; END {print sum}')
  count_all=$(( ${count_size} >> 20 ))
  
  echo "开始转移源文件夹：video，文件数量：${count_video}，总大小：${count_all} MB"
  start_s=$(date +%s)
  
  mv "${src}/video" "${dir}"
  
  end_s=$(date +%s)
  sum_time=$(( ${end_s} - ${start_s} ))
  
  echo "转移源文件夹video完成，用时：${sum_time}秒"

fi

# animation
if [ -d "${src}/animation" ];then

  count_animation=$(ls -l "${src}/animation" | wc -l)
  count_size=$(ls -l "${src}/animation" | awk '{sum += $5}; END {print sum}')
  count_all=$(( ${count_size} >> 20 ))
  
  echo "开始转移源文件夹：animation，文件数量：${count_voice}，总大小：${count_all} MB"
  start_s=$(date +%s)
  
  mv ${src}/animation/* "${dir}/../animation"
  
  end_s=$(date +%s)
  sum_time=$(( ${end_s} - ${start_s} ))
  
  echo "转移源文件夹animation完成，用时：${sum_time}秒"

fi

systemctl start tg
echo "启动tg服务成功"


