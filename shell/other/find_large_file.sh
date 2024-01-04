#!/bin/sh

find / -type f -size +100M  -print0 | xargs -0 ls -l
