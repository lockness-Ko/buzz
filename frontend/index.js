const express = require('express')
const app = express()
// var cors = require('cors')
const port = 8080

// app.use(cors())
app.use(express.static('static'))

app.get('/machines', (req, res) => {
	
})

app.get('/billing', (req, res) => {
	
})

app.listen(port, () => {
	console.log(`Frontend listening on ${port}`)
})