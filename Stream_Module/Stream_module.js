const fs = require("fs");
const http = require("http");

const server = http.createServer();

//Using the Node.js fs module, you can read a file, and serve it over HTTP when a new connection is established to your HTTP server.
// server.on("request",(req,res)=>{
//     fs.readFile("stream.txt",(err,data)=>{
//         if(err) return console.error(err);
//         res.end(data.toString());
//     })
// });

// server.listen(6008,"127.0.0.1",()=>{
//     console.log("Server starts at port 6008");
// });


//using stream module,If the file is big, the operation will take quite a bit of time.Instead of waiting until the file is fully read, we start streaming it to the HTTP client as soon as we have a chunk of data ready to be sent.
server.on("request",(req,res)=>{
const rstream=fs.createReadStream("stream.txt");

rstream.on("data",(chunkdata)=>{
    res.write(chunkdata);
})
rstream.on("end",()=>{
    res.end();
})
rstream.on("error",(err)=>{
   console.log(err);
   res.end("file not found");
})
});

server.listen(5900,"127.0.0.1",()=>{
 console.log("Server starts at port 5900");
});