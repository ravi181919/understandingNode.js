const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("<h1>Hello Ravi how are you today? </h1>");
  } else if (req.url == "/About") {
    res.write("<h1>Ravi! now you are on About page. </h1>");
  } else if (req.url == "/Skill") {
    res.write("<h1>Ravi! now you are on Skill page. </h1>");
  } else if (req.url == "/Contact") {
    res.write("<h1>Ravi! now you are on Contact page. </h1>");
  }
  res.end();
});

server.listen(4003);
