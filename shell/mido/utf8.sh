#!/bin/bash

mv nls_utf8.ko /lib/modules/6.7.5-hol-msm8953+/kernel/fs/nls/
echo nls_utf8 >> /etc/modules
depmod
update-locale LANG=en_US.UTF-8
reboot