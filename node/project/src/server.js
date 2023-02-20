const port = 3003
const express = require('express')
const app = express()
const db = require('./database')

app.get('/products', (req, res, next) => {
    console.log("Middlware1...")
    next()
})


app.get('/products', (req, res, next) => {
    res.send(db.getProducts())
})

app.get('/products/:id', (req, res, next) => {
    res.send(db.getProduct(req.params.id))
})

app.post('/products', (req, res, next) => {
    const item = db.saveProduct({
        name: req.body.name,
        price: req.body.price,
    })

    res.send(item)
})

app.listen(port, () => {
    console.log(`Server running... || port → ${port}`)
})