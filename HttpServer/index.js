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

/*       now try =>  setHeader() and statusCode  [information =>  https://www.google.com/]  */

// try 200 statusCode =>
const newPort = 1919;
const newServer = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("node is working!");
});
// newServer.listen(newPort, () => {
//   console.log(`Server is running at ${HOSTNAME}: ${newPort} `);
// });

// try 500 statusCode =>
const changePort = 2020;
const changeServer = http.createServer((req, res) => {
  res.statusCode = 500;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ error: "server-error" }));
});
changeServer.listen(changePort, () => {
  console.log(`Server is running at ${HOSTNAME}: ${changePort} `);
});
