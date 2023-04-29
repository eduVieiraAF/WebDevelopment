const bodyParser = require('body-parser')
const express = require('express')
const app = express()

//* Middlewares
app.use(express.static('.')) // provides static content (files, etc)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/test', (req, res) => res.send(`all good here → ${ new Date }`))
app.listen(8080, () => console.log('Server running...'))