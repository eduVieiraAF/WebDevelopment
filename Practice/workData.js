const products = require('./SRAgricula.json')
const fs = require('fs')

const prodSortedDescription = []
const rejects = []
const jsonKeys = Object.keys(products)

for (let key of jsonKeys) {
    for (let i = 0; i < products[key].length; i++) {
       if (!products[key][i].CORREIAS || !products[key][i].__EMPTY_2) rejects.push(products[key][i])
       else prodSortedDescription.push(products[key][i].CORREIAS.toString().trim().concat('-', products[key][i].__EMPTY_2))
    }
}

const prodObject = []
let NCM = 0

prodSortedDescription.forEach((description, index) => {
    prodObject[index] = {
        ncm: NCM.toString().padStart(6, '0'),
        description,
        un: "UN"
    }

    NCM++
})

const csvForm = prodObject.map(row => Object.values(row).join(',')).join('\n')
fs.writeFileSync("D:/WebDevelopment/Practice/SRAgricula.csv", csvForm)

