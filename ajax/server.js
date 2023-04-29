const bodyParser = require('body-parser')
const express = require('express')
const app = express()

//* Middlewares
app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/test', (req, res) => res.send("all good here"))
app.listen(8080, () => console.log('Server running...'))