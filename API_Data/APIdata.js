// import { createServer } from 'http';
const http = require('http');
const data = require('./data');//(./data.js also valid)

http.createServer((req,res) =>{
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify(data));//convert javascript object to JSON string
    res.end();
}).listen(8180);