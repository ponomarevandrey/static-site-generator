#!/bin/bash

rsync \
  --verbose \
  --rsh=ssh \
  --progress \
  --archive \
  --recursive \
  ./build/ "$VPS_USER_SIMPLECLOUD@$VPS_IP_SIMPLECLOUD:/var/www/andreyponomarev.ru/html/"
