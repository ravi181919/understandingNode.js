const http = require("http"); // first method of import

// import http from 'http'    // second method of import

const PORT = 1819;
const HOSTNAME = "localhost";

const server = http.createServer((req, res) => {
  res.end("Node is working!");
});
// server.listen(PORT, () => {
//   console.log(`Server is running at ${HOSTNAME}: ${PORT} `);
// });

// now try =>  setHeader() and statusCode

const newPort = 1919;
const newServer = http.createServer((req, res) => {
  res.statusCode = 200; //  information =>  https://www.google.com/
  res.setHeader("Content-Type", "text/plain"); // information =>  https://www.google.com/
  res.end("node is working!");
});
newServer.listen(newPort, () => {
    console.log(`Server is running at ${HOSTNAME}: ${newPort} `);
  });
