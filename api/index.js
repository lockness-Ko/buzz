const express = require('express')
const app = express()
var os = require('os-utils');
// var cors = require('cors')
const port = 80

// app.use(cors())

app.get('/stats/cpu', (req, res) => {
    os.cpuUsage(v => {
        res.send(v.toString());
    });
})

app.get('/stats/mem', (req, res) => {
    res.send(`${Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100} MB`);
})

app.get('/stats/uptime', (req, res) => {
    res.send(`${Math.round(process.uptime(),2)}s`);
})

app.listen(port, () => {
	console.log(`Frontend listening on ${port}`)
})