FROM docker:dind

RUN apk add --update nodejs npm

WORKDIR /buzz

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]