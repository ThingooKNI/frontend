FROM nginx:1.19-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/thingoo-frontend /usr/share/nginx/html
