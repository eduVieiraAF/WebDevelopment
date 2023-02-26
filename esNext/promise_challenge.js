const fs = require('fs')
const path = require('path')

function readFile(dir) {
    return new Promise(resolve => {
        fs.readFile(dir, function(_, content) {
            resolve(content.toString())
        })
    })
}

const dir = path.join(__dirname, 'info.txt')

readFile(dir)
    .then(lines => lines.split("\n"))
    .then(info => info.join(", "))
    .then(string => `All together → ${string}`)
    .then(console.log)
