const fs = require("fs");
const http = require("http");

const server = http.createServer();

// Using the Node.js fs module, you can read a file, and serve it over HTTP when a new connection is established to your HTTP server.
server.on("request",(req,res)=>{
    fs.readFile("http.txt",(err,data)=>{
        if(err) return console.error(err);
        res.end(data.toString());
    })
});

server.listen(6008,"127.0.0.1",()=>{
    console.log("Server starts at port 6008");
});

