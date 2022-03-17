FROM ubuntu:latest

RUN apt update && DEBIAN_FRONTEND=noninteractive apt install -y git python3 curl build-essential make nodejs npm

ADD ../webterm /opt/webterm

WORKDIR /opt/webterm

RUN npm install

CMD ["npm", "start"]