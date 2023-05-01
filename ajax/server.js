const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const multer = require('multer')

//* Middlewares
app.use(express.static('.')) // provides static content (files, etc)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const storage = multer.diskStorage({
    destination: function(req, file, callback) { 
        callback(null, './upload') 
    }, 
    filename: function (req, file, callback) {
        callback(null, `${ Date.now() }_${ file.originalname }`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) return res.end("Something went wrong  =[")

        res.end('Upload successful  =]')
    })
})
app.get('/test', (req, res) => res.send(`all good here → ${ new Date }`))
app.post('/formulario', (req, res) => {
    res.send({
        ...req.body, 
        id: 15
    })
})
app.listen(8080, () => console.log('Server running...'))
