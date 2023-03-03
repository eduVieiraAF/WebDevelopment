const http = require('http')

http.createServer((req, res) => {
    res.write("What's up, server?")
    res.end()
}).listen(5500)