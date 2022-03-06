const express = require('express')
const app = express()
// var cors = require('cors')
const { readFileSync } = require('fs')
const port = 80

// app.use(cors())
app.use(express.static('static'))

app.get('/machines', (req, res) => {
	res.send(readFileSync('static/machines.html'))
})

app.get('/billing', (req, res) => {
	res.send(readFileSync('static/billing.html'))
	
})

app.listen(port, () => {
	console.log(`Frontend listening on ${port}`)
})