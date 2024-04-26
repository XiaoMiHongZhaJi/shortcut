#!/bin/bash

mkdir -p /mnt/smb
chmod 777 /mnt
chmod 777 /mnt/smb
mount -t cifs //192.168.10.30/mnt /mnt/smb -o username=root,password=12345678,iocharset=utf8
