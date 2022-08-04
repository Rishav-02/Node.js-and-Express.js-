/* close()-	Closes the server connection.
listen()-	Makes the server listen to ports on the computer.
setTimeout()-	Sets the server's timeout value. Default is 2 minutes.

listening--	Returns true if the server is listening for connection, otherwise false.
maxHeadersCount	--Limits the number of incoming headers.
timeout--	Sets, or gets, the server's timeout value */



//The requestListener function is passed as a parameter to the http.createServer() method.
//(req,res) =>{ } - Syntax of parameter
//The requestListener function handles requests from the user, and also the response back to the user


//The http.createServer() method turns your computer into an HTTP server.
//The http.createServer() method creates an HTTP Server object.
//The HTTP Server object can listen to ports on your computer and execute a function, a requestListener, each time a request is made.
//request - The first parameter, the Request object, represents an IncomingMessage object.
//response - The second parameter represents a ServerResponse object, which has methods for handling the response stream back to the user

// import { createServer } from "http";
const http = require('http');

http.createServer((req, res) => {
    res.write("<h1>Hi, Hello</h1>");
    res.end();
  }).listen(9000, () => {
    console.log("Server runs at port 9000");
  });