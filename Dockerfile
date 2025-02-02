# FROM node:alpine AS build

# WORKDIR /usr/local/app

# COPY ./ /usr/local/app

# RUN npm install

# RUN npm run build 

# FROM nginx:latest

# COPY --from=build /usr/local/app/dist/web-app-authentication /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]


# Use a lightweight web server
FROM nginx:alpine

# Copy the built Angular app to Nginx
COPY ./dist/angular-docker /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80
