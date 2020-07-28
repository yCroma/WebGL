#!/bin/bash
## rootへ移動し、環境変数を取得している
cd ../..
. ./.env
${PROD_MAKE} ps