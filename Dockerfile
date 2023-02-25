FROM nginx:1.17.10-alpine

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY ./build /var/www

EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
