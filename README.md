# Монорепозиротий

Состоит из двух частей:

#### Web

Фронтовая часть сайта

### Mock-server

Стабы с подключенной mongodb

## Команды

Перед запуском проекта прописать `yarn`

`yarn start` - запуск webpack-dev-server

`yarn build` - сборка react приложения

`yarn server` - запуск мок сервера

## Docker

`sudo docker build .` - сборка image

`docker image ls` - ищем последний созданный image

`docker run -p 80:80 "ID"` - запускаем image

## Добавление новых alias

в tsconfig.json

` "paths": { "@components": [ "components/index.ts" ], }`

в webpack.config.js

` alias: { '@components': path.resolve(__dirname, 'src/components/')}`
