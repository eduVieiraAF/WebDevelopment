const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/users', (req, res) => {
    console.log(req.body)
    res.send("<h2>Hooray</h2>")
})

app.listen(3003)