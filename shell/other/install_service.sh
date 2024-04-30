#!/bin/sh

cp $1 /usr/lib/systemd/system/

systemctl enable $1 --now

systemctl status $1