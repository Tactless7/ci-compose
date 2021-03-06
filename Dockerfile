FROM node:10.0

WORKDIR /var/www

ADD package.json /var/www/
ADD index.js /var/www
RUN npm install

EXPOSE  80

CMD ["node","index.js"]
