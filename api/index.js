const express = require('express')
const app = express()
var os = require('os');
// var cors = require('cors')
const port = 80

// app.use(cors())

app.get('/stats/cpu', (req, res) => {
    os.cpuUsage(v => {
        res.send(`CPU Usage (%): ${v}`);
    });
})

app.listen(port, () => {
	console.log(`Frontend listening on ${port}`)
})