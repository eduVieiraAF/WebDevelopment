const port = 3003
const express = require('express')
const app = express()

app.get('/products', (req, res, next) => {
    console.log("Middlware1...")
    next()
})


app.get('/products', (req, res, next) => {
    res.send({ name: "Laptop", price: 480.00 }) // converts into json
})

app.listen(port, () => {
    console.log(`Server running... || port → ${port}`)
})