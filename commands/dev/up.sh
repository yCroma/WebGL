#!/bin/bash
## rootへ移動し、環境変数を取得している
cd ../..
. ./.env
${DEV_MAKE} up -d
${DEV_MAKE} exec -d nuxt yarn dev