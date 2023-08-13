const express = require('express')
const app = express()
const greet = require('./greetMiddleware')

app.use(greet("Edu"))

app.use('/hello', (req, res, next) => {
    console.log("On-call")
    next()
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