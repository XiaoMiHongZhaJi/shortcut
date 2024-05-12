#
#镜像文件名，大小，SHA-1 和 MD5 信息如下
 #1. cn_windows10_20h2.gz, 5.82GB, b1ef80182ab288b1f429e3ec059f99f9e636f613, 28e1ebe1c3cb8f8232619c0e2ada016a
 #2. en_windows10_20h2.gz, 5.61GB, 64bc0cf9c6d9637af1a3eca2bfb01cfa6dc61018, fa450fa22ff421ac6055ea175193e850
 #3. ja_windows10_20h2.gz, 5.71GB, 127a151cc9f981033defcb574aa1caf9ec2496f5, 367dc03fdc8fa1a25317424db02ce612
#下载链接(DD download URL)
 #链接地址1：
 #https://fr1.teddyvps.com/iso/cn_windows10_20h2.gz
 #https://fr1.teddyvps.com/iso/en_windows10_20h2.gz
 #https://fr1.teddyvps.com/iso/ja_windows10_20h2.gz
 #
 #链接地址2（感谢云图小镇的分流下载）：
 #https://mirrors.yuntu.ca/teddysun/cn_windows10_20h2.gz
 #https://mirrors.yuntu.ca/teddysun/en_windows10_20h2.gz
 #https://mirrors.yuntu.ca/teddysun/ja_windows10_20h2.gz
 #
#远程桌面的默认用户名和密码
 #用户名: administrator
 #密码: Teddysun.com

#注：DebianNET.sh 脚本由 Vicer 开发，参考网址：https://moeclub.org
#wget -qO DebianNET.sh qiu.sh/dd && bash DebianNET.sh -dd https://fr1.teddyvps.com/iso/cn_windows10_20h2.gz

# Win10
wget -qO- inst.sh | bash -s - -t https://fr1.teddyvps.com/iso/cn_windows10_20h2.gz

#1、teddysun
 #
 #https://fr1.teddyvps.com/iso/cn_windows2019_v2.gz
 #https://fr1.teddyvps.com/iso/en_windows2019_v2.gz
 #https://fr1.teddyvps.com/iso/ja_windows2019_v2.gz
 #https://fr1.teddyvps.com/iso/cn_windows2019.gz
 #https://fr1.teddyvps.com/iso/en_windows2019.gz
 #https://fr1.teddyvps.com/iso/ja_windows2019.gz
 #https://fr1.teddyvps.com/iso/cn_windows2016.gz
 #https://fr1.teddyvps.com/iso/en_windows2016.gz
 #https://fr1.teddyvps.com/iso/ja_windows2016.gz
 #https://fr1.teddyvps.com/iso/cn_windows2012r2.gz
 #https://fr1.teddyvps.com/iso/en_windows2012r2.gz
 #https://fr1.teddyvps.com/iso/ja_windows2012r2.gz
 #2、云图小镇
 #
 #https://mirrors.yuntu.ca/teddysun/cn_windows2019_v2.gz
 #https://mirrors.yuntu.ca/teddysun/en_windows2019_v2.gz
 #https://mirrors.yuntu.ca/teddysun/ja_windows2019_v2.gz
 #https://mirrors.yuntu.ca/teddysun/cn_windows2019.gz
 #https://mirrors.yuntu.ca/teddysun/en_windows2019.gz
 #https://mirrors.yuntu.ca/teddysun/ja_windows2019.gz
 #https://mirrors.yuntu.ca/teddysun/cn_windows2016.gz
 #https://mirrors.yuntu.ca/teddysun/en_windows2016.gz
 #https://mirrors.yuntu.ca/teddysun/ja_windows2016.gz
 #https://mirrors.yuntu.ca/teddysun/cn_windows2012r2.gz
 #https://mirrors.yuntu.ca/teddysun/en_windows2012r2.gz
 #https://mirrors.yuntu.ca/teddysun/ja_windows2012r2.gz
 #3、cheshirex
 #
 #https://down.cheshirex.com/%E7%8E%A9%E6%9C%BA/DD/KVMXENIntel/cn_windows2019_v2.gz
 #https://down.cheshirex.com/%E7%8E%A9%E6%9C%BA/DD/KVMXENIntel/cn_windows10_20h2.gz
 #https://down.cheshirex.com/%E7%8E%A9%E6%9C%BA/DD/KVMXENIntel/cn_windows2019.gz
 #https://down.cheshirex.com/%E7%8E%A9%E6%9C%BA/DD/KVMXENIntel/cn_windows2016.gz
 #https://down.cheshirex.com/%E7%8E%A9%E6%9C%BA/DD/KVMXENIntel/cn_windows2012r2.gz

#1、脚本之一
 #wget --no-check-certificate -qO DebianNET.sh 'https://moeclub.org/attachment/LinuxShell/DebianNET.sh' && bash DebianNET.sh -dd 'DD镜像包'
 #2、脚本之二
 #wget -qO DebianNET.sh qiu.sh/dd && bash DebianNET.sh -dd "DD download URL"
 #3、脚本之三（本地备份）
 #wget --no-check-certificate -qO DebianNET.sh 'http://tools.laobuluo.com/tools/DebianNET.sh' && bash DebianNET.sh -dd 'DD镜像包'


#命令: （非vhd）（显示进度）
 #wget -qO- inst.sh | bash -s - -t https://file.1323123.xyz/dd/windows/1keydd/win10ltsc_password_1keydd.gz
 #仓库:
 #https://github.com/minlearn/1keydd



# old
# bash <(wget --no-check-certificate -qO- 'https://moeclub.org/attachment/LinuxShell/InstallNET.sh') -dd "系统镜像地址"
# 用户名：administrator 密码：Vicer
# Windows 7 32位中文（Windows Thin PC）:
# https://image.moeclub.org/GoogleDrive/1srhylymTjYS-Ky8uLw4R6LCWfAo1F3s7
# https://moeclub.org/onedrive/IMAGE/Windows/win7emb_x86.tar.gz

# Windows 8.1 SP1 64位中文（Embedded）:
# https://image.moeclub.org/GoogleDrive/1cqVl2wSGx92UTdhOxU9pW3wJgmvZMT_J
# https://moeclub.org/onedrive/IMAGE/Windows/win8.1emb_x64.tar.gz

# Windows 10 ltsc 64位中文:
# https://image.moeclub.org/GoogleDrive/1OVA3t-ZI2arkM4E4gKvofcBN9aoVdneh
# https://moeclub.org/onedrive/IM