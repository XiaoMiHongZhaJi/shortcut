#!/bin/sh

# 发行版名称 版本号 代码名称
lsb_release -a

# Debian / Ubuntu 版本号
cat /etc/debian_version

# 内核版本
uname -a