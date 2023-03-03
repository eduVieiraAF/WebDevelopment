const http = require('http')

http.createServer(function(req, res) {
    res.writeHead(200, { "Content-type" : "text/plain" })
    res.end('Practicing more thing along side')
}).listen(8080)