const fs = require("fs")

const path = __dirname + '/file.json'

//! non-async
const content = fs.readFileSync(path, "utf-8")
console.log(content)

//* async
fs.readFile(path, "utf-8", (err, content) => {
    const config = JSON.parse(content)

    console.log(`${config.db.host}: ${config.db.port}`)
})

// another way to read the file
const config = require('./file.json')
console.log(config)
console.log(config.db)

// reading a folder
fs.readdir(__dirname, (err, files) => {
    console.log("Inside this folder")
    console.log(files)
})