//Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. These functions are used to modify req and res objects for tasks like parsing request bodies, adding response headers, etc.

/* Advantages of using middleware:

1.Middleware can process request objects multiple times before the server works for that request.
2.Middleware can be used to add logging and authentication functionality.
3.Middleware improves client-side rendering performance.
4.Middleware is used for setting some specific HTTP headers.
5.Middleware helps for Optimization and better performance. */

const express=require('express');
const app = express();

//Apply Application level Middleware(apply on all by default,globally) with Routes
const reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send("<h1>Please provide age</h1>")
    }
    else if(req.query.age<18){
        res.send(`<h1>You can not access this page</h1>`);
    }
    else{
         next();//function call
    }
};
//use app.use() to specify the middleware function as the callback.
app.use(reqFilter);//The app.use() function is used to mount the specified middleware function(s) at the path which is being specified. It is mostly used to set up middleware for your application.
//Syntax:-  app.use(path, callback)
/* path: It is the path for which the middleware function is being called. It can be a string representing a path or path pattern or regular expression pattern to match the paths.  

callback: It is a middleware function or a series/array of middleware functions. */


//Routes are created
//run this    http://localhost:4500/?age=18
app.get('/',(req,res)=>{
    res.send("<h2>Welcome to Home Page</h2>");
})

//run this    http://localhost:4500/user?age=18
app.get('/user',(req,res)=>{
    res.send("<h2>Welcome to User Page</h2>");
})

app.listen(4500,()=>{
    console.log("Server listening on port 4500");
})