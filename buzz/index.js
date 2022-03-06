'use strict';

const express = require('express')
const {
    Docker
} = require('node-docker-api');
const app = express()
const port = 80

const docker = new Docker({
    socketPath: '/var/run/docker.sock'
});

app.post('/create', (req, res) => {
    docker.container.create({
        Image: 'ubuntu',
        Cmd: ['/bin/ash', '-c', 'echo hi'],
        name: 'test'
    }).then(container => container.start()).then(container => container.logs({
        follow: true,
        stdout: true,
        stderr: true
    })).then(stream => {
        stream.on('data', info => console.log(info))
        stream.on('error', err => console.log(err))
    })
})

app.listen(port, () => {
    console.log(`Frontend listening on ${port}`)
})