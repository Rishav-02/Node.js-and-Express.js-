//Routing defines the way in which the client requests are handled by the application endpoints.
// OR in other word -  Routing refers to how an application’s endpoints (URIs) respond to client requests.

//There is a special routing method, app.all(), used to load middleware functions at a path for all HTTP request methods. For example,using GET, POST, PUT, DELETE.

const express = require("express");
const app = express(); //app is object

/*
res.download()	 Prompt a file to be downloaded.
res.end()	 End the response process.
res.json()	 Send a JSON response.
res.jsonp()	 Send a JSON response with JSONP support.
res.redirect()	 Redirect a request.
res.render()	 Render a view template.
res.send()	     Send a response of various types.
res.sendFile()	 Send a file as an octet stream.
res.sendStatus()	Set the response status code  and send its string representation as the response body. */

//Apply Router level Middleware(apply on globally and also apply on a single and a group) with Routes.
//Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router().

const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    //Response methods send a response to the client, and terminate the request-response cycle. If none of these methods are called from a route handler, the client request will be left hanging.
    res.send("<h1>Please provide age</h1>");
  } else if (req.query.age < 18) {
    res.send(`<h1>You are under aged so You can not access this page</h1>`);
  } else {
    next(); //The next() is used to pass the control to the next callback.
  }
};

//To run    http://localhost:1200/?age=19 and   http://localhost:1200/
app.get("/", (req, res) => {
  res.send("Hello,How are You,I am Fine");
});

//Apply Middleware on Single Route for restrict these pages
app.get("/contact", reqFilter, (req, res) => {
  res.send("Contact Us");
});

//To run   http://localhost:1200/help?age=19
//http://localhost:1200/help   this gives 'Please provide age'
app.get("/help", reqFilter, (req, res) => {
  res.send("Help Us");
});

app.listen(1200, () => {
  console.log("Server listening on port 1200");
});
