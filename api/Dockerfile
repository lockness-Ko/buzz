FROM node:17-bullseye

WORKDIR /api

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]