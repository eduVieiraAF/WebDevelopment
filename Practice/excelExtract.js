const XLSX = require("xlsx")
const fs = require("fs")

const file = XLSX.readFile('C:/Users/edu_v/OneDrive/Downloads/sragricola_produtos.xlsx')
const jsonFile = {}

file.SheetNames.forEach(sheetName => {
    const sheetData = XLSX.utils.sheet_to_json(file.Sheets[sheetName])

    console.log(`Sheet "${sheetName}" data:`, sheetData)
    jsonFile[sheetName] = sheetData
})

const jsonData = JSON.stringify(jsonFile, null, 4)
fs.writeFileSync('SRAgricula.json', jsonData)