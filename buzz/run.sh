#! /bin/ash

npm start &

/usr/local/bin/dockerd &

sleep 30

cd /buzz/containers/fedora
    docker build --no-cache -t buzz/fedora .

cd /buzz/containers/ubuntu
    docker build --no-cache -t buzz/ubuntu .

tail -f /dev/null