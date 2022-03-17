'use strict';

const express = require('express')
const { exec } = require('child_process');
const bodyParser = require('body-parser')
const app = express()
const port = 80

app.use(bodyParser.json())

let rand = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min + 1;
}

app.post('/create', (req, res) => {
    if (req.body.type != "ubuntu" || req.body.type != "fedora") {
        res.send("Stop hacking!");
        return;
    }

    let tcpExposed = rand(30000, 60000);
    let httpExposed = rand(30000, 60000);
    
    let type = "";

    switch (req.body.type) {
        case "ubuntu":
            type = "ubuntu"
            break;
        case "fedora":
            type = "fedora"
            break;
    }

    exec(`docker run --rm -d -p ${httpExposed}:80 -p ${tcpExposed}:8055 buzz/${type}:latest`)
    res.send(`Created instance at ${tcpExposed}/tcp ${httpExposed}/http`);
})

app.listen(port, () => {
    console.log(`Frontend listening on ${port}`)
})