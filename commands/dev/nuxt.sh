#!/bin/bash
# rootへ移動し、環境変数を取得している
cd ../..
. ./.env
${DEV_MAKE} exec nuxt ash