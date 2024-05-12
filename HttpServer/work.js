/**
 *  In this project => client call the [ data ] - [ server ] to  another [ server ]
*/
const requireHttp = require("http");
const workPORT = 5001;
const workHOSTNAME = "localhost";

const createWorkServer = requireHttp.createServer((req, res) => {
  if (req.url == "/") {
    // for show => home page
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello! we are on the home page.");

  } else if (req.url == "/about") {
    // for show => about page
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello! we are on the about page.");

  } else if (req.url == "/product") {
    // for show => product page
    const option = {  // anothe server called 
      hostname: "fakestoreapi.com",
      path: "/products/1",
      method: "GET",
    };

    const apiReq = requireHttp.request(option, (apiReq) => {
      apiReq.on("data", (data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(data.toString());
      });
    });

    apiReq.on("error", (error) => {
      console.log(error);
    });


    apiReq.end();

  } else if (req.url == "/project") {
    // for show => project page
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello! we are on the project page.");

  } else {
    // for show server error or not available this page
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ Error: "server-error" }));
  }
});

createWorkServer.listen(workPORT, () => {
  console.log(`This server is running at ${workHOSTNAME}: ${workPORT}`);
});
