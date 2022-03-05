FROM nginx:latest

ADD nginx.conf /etc/nginx/nginx.conf
ADD default /etc/nginx/sites-enabled/default

# RUN ln -sf /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]