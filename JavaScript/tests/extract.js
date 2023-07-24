const fs = require('fs')
const papaParse = require("papaparse")

const deptArrays = {}

fs.readFile('./ccontabil.csv', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }

    const parseData = papaParse.parse(data, {
        header: true,
        skipEmptyLines: true
    })

    parseData.data.forEach((row) => {
        Object.keys(row).forEach((key) => {
            if (key != '') {
                if (!deptArrays[key]) {
                    deptArrays[key] = []
                }

                deptArrays[key].push(row[key].toString())
            }
        })
    })

    saveToJSON(deptArrays)
   
})

function saveToJSON(data) {
    //console.log(data)

    const jsonData = JSON.stringify(data)
    fs.writeFile('data.json', jsonData, { encoding: 'utf8' }, (err) => {
        if (err) console.log(err)
        else console.log("Done")
    })
}

