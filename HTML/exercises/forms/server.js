const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/users', (req, res) => {
    console.log(req.body)
    res.send("<h2>Hooray. New user is in!</h2>")

})

app.post('/users/:id', (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.send("<h2>Alterations successful</h2>")
})

app.listen(3003)