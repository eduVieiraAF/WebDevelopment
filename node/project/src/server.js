const port = 3003
const express = require('express')
const app = express()
const db = require('./database')

// middlewarea that parses urlenconded info and processes info sent and required as an objext
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

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

app.delete('/products/:id', (req, res, next) => {
    const item = db.deleteProduct( req.params.id)

    res.send(item)
})

app.put('/products/:id', (req, res, next) => {
    const item = db.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price,
    })

    res.send(item)
})

app.listen(port, () => {
    console.log(`Server running... || port → ${port}`)
})