FROM node:latest as build

WORKDIR /app

COPY packages/web .

RUN yarn

RUN yarn build

FROM nginx:latest as prod

COPY --from=build app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY ../minecraft-web/nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]