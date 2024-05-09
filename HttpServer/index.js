const http = require('http'); // first method of import 

// import http from 'http'    // second method of import 

const PORT = 1819;
const HOSTNAME = 'localhost';

const server = http.createServer((req, res) => {
    res.end('Node is working!');
});
server.listen(PORT, () => {
    console.log(`Server is running at ${HOSTNAME}: ${PORT} `);
})