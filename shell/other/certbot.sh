#!/bin/sh

certbot certonly -d "chenyifaer.shop" -d "*.chenyifaer.shop" --manual --preferred-challenges dns

#renew
#certbot renew