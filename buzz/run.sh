#! /bin/ash

npm start &

cd /buzz/containers/fedora
    docker build --no-cache -t buzz/fedora .

cd /buzz/containers/ubuntu
    docker build --no-cache -t buzz/ubuntu .

/usr/local/bin/dockerd