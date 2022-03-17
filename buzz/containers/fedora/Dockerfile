FROM fedora:latest

RUN dnf -y update && dnf -y install git python3 curl make automake gcc gcc-c++ kernel-devel libc-dev nodejs

ADD ../webterm /opt/webterm

WORKDIR /opt/webterm

RUN npm install

CMD ["npm", "start"]