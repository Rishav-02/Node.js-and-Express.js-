const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.url);
  if (req.url == "/") {
    res.end("Hello from the home side");
  } 
  else if (req.url == "/about") {
    res.end("Hello from the About Us side");
  }
  else if (req.url == "/contact") {
    res.end("Hello from the Contact Us side");
  }
  else{
    res.writeHead(404,{"Content-type":"text/html"});
    res.end("<h1>404 page not found</h1>");
  }
  
});

server.listen(8001, "127.0.0.1",() => {
  console.log("Listening to the port number 8001");
});
