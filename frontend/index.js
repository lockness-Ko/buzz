const express = require('express')
const app = express()
var cors = require('cors')
const port = 8080

app.use(cors())

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Frontend listening on ${port}`)
})