#!/bin/sh

certbot certonly -d "chenyifaer.online" -d "*.chenyifaer.online" --manual --preferred-challenges dns

#renew
#certbot renew