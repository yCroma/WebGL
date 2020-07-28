FROM node:12.14.0-alpine

ARG APP_NAME
ARG APP_PORT
ARG HOST

COPY ./$APP_NAME /var/www/app/$APP_NAME
WORKDIR /var/www/app/$APP_NAME

ENV HOST=$HOST
RUN yarn && yarn build

EXPOSE ${APP_PORT}

ENTRYPOINT ["yarn", "start"]