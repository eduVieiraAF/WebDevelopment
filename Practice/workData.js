const products = require('./SRAgricula.json')
const fs = require('fs')
const XLSX = require('xlsx')

const prodSortedDescription = []
const rejects = []
const jsonKeys = Object.keys(products)

for (let key of jsonKeys) {
    for (let i = 0; i < products[key].length; i++) {
       if (!products[key][i].CORREIAS || !products[key][i].__EMPTY_2) rejects.push(products[key][i])
       else prodSortedDescription.push(products[key][i].CORREIAS.toString().trim().concat('-', products[key][i].__EMPTY_2))
    }

    console.log(rejects, rejects.length)
}

const prodObject = []
let NCM = 0

prodSortedDescription.forEach((description, index) => {
    prodObject[index] = {
        un: "UN",
        description,
        ncm: NCM.toString().padStart(6, '0'),
    }

    NCM++
})

const csvForm = prodObject.map(row => Object.values(row).join(',')).join('\n')
fs.writeFileSync("D:/WebDevelopment/Practice/SRAgricula.csv", csvForm)

const workSheetFormat = prodObject.map(obj => [obj.ncm, obj.description, obj.un])
const workSheetColumns = [
    { header: '**Unidade de Medida', key: 'un', width: 5 },
    { header: '**Descricao', key: 'description', width: 10 },
    { header: '**NCM', key: 'ncm', width: 10 },
]

const workbook = XLSX.utils.book_new()
const workSheet = XLSX.utils.aoa_to_sheet([workSheetColumns.map(
    col => col.header), ...workSheetFormat]
    )

XLSX.utils.book_append_sheet(workbook, workSheet, "products")
XLSX.writeFile(workbook, "D:/WebDevelopment/Practice/SRAgricula.xlsx")

