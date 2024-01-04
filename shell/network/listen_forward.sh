#!/bin/sh

socat TCP-LISTEN:$1,fork,reuseaddr TCP:$2