#!/bin/sh

# 永久
echo 'Acquire::http::Proxy "http://127.0.0.1:7890";' >> /etc/apt/apt.conf.d/proxy.conf
echo 'Acquire::https::Proxy "http://127.0.0.1:7890";' >> /etc/apt/apt.conf.d/proxy.conf