FROM node:17-bullseye

WORKDIR /frontend

COPY package*.json ./

RUN npm install

COPY . .

# EXPOSE 8080

CMD [ "npm", "start" ]