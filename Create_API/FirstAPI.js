// const http = require('http');
import { createServer } from 'http';

createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify({name:'Rishav Raj',email:'rishavsinha0852@gmail.com',course:'BCA'}));
    res.end();
}).listen(5000);