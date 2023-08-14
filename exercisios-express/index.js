const express = require('express')
const app = express()
const greet = require('./greetMiddleware')
const bodyParser = require('body-parser')

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(greet("Edu"))

app.use('/hello', (req, res, next) => {
    console.log("On-call")
    next()
})

app.get('/client/report', (req, res) => {
    res.send(`Report: Full ${req.query.full} year ${req.query.year}`)
    // http://localhost:3000/client/report?full=true&year=2021
})

app.get('/clients/:id', (req, res) => {
    res.send(`client ${req.params.id} selected`)
})

app.post('/body', (req, res) => {
    // let body = ""
    // req.on('data', function(part) {
    //     body += part
    // })

    // req.on('end', function() {
    //     res.send(body)
    //     res.json(JSON.parse(body))
    // })

    //* as I'm using body-parser
    res.send(req.body)
    // res.send(JSON.stringify(req.body))
})

app.get('/hello', (req, res) => {
    // res.send("<h1>Up and running</h1>")
    // res.json({
    //     name: 'Ford Explorer',
    //     price: 69000,
    //     discount: 0.12
    // })

    res.json({
        data: [
            { id: 1, name: "Keith", position: 2 },
            { id: 21, name: "Laura", position: 6 },
        ],
        count: 2,
        skip: 0,
        status: 200
    })
})

app.listen(3000, () => console.log("Listening → PORT: 3000"))