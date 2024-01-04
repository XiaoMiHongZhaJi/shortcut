#!/bin/sh

cp $1 /usr/lib/systemd/system/

systemctl enable $1

systemctl start $1

systemctl status $1