#!/bin/bash
## rootへ移動し、環境変数を取得している
cd ../..
. ./.env
${DEV_MAKE} up -d
${DEV_MAKE} exec -w /usr/src/app/ nuxt yarn create nuxt-app ${APP_NAME}
${DEV_MAKE} exec nuxt yarn dev