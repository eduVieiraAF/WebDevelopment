const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(req.url) //Return the url part of the request object
    res.end()
}).listen(3030)