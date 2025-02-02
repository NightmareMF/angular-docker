FROM node:alpine AS build

WORKDIR /usr/local/app

COPY ./ /usr/local/app

RUN npm install

RUN npm run build 

FROM nginx:latest

COPY --from=build /usr/local/app/dist/web-app-authentication /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]