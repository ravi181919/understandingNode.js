const http = require('http');

const server =  http.createServer((req, res) => {
    if(req.url == '/'){
        res.write('<h1>Hello Ravi how are you today? </h1>')
    }
    res.end();
})

server.listen(4000)