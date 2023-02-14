const fs = require('fs')

const product = {
    nome: "Black Shark",
    price: 990.00,
    discount: 0.15
}

fs.writeFile(__dirname + '/fileNew.json', JSON.stringify(product), err => {
    console.log(err || "File saved") 
})