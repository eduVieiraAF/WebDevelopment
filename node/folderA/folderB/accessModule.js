const moduleA = require('../../moduleA')
const greetings = require('greetings')
const http = require('http')
// const c = require('./folderC/index') no need to import index - it goes to it by default
const c = require('./folderC/')

console.log(moduleA.hello)
console.log(greetings.hello)

http.createServer((req, res) => {
    res.write(c.hello2)
    res.end()
}).listen(8080)