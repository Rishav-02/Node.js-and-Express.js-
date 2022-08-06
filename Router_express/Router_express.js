const express=require('express');//Requiring module
const reqFilter = require('./External_route');//Importing the routes
const app=express();//Creating express server
const router=express.Router();//The express.Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests. 

router.use(reqFilter);

//app.get() middleware not applied
app.get('/',(req,res)=>{
    res.send("<h2>Welcome to Home Page</h2>");
});

app.get("/contact", (req, res) => {
    res.send("<h2>Contact Us</h2>");
});

app.get("/help", (req, res) => {
    res.send("<h2>Help Us</h2>");
});

//use route.get() to applied a middleware
router.get('/user',(req,res)=>{
    res.send("<h2>Welcome to User Page</h2>");
});

//about section ask for age
router.get("/about", (req, res) => {
    res.send("<h2>Hello,How are You,I am Fine</h2>");
});

app.use('/',router);// Handling routes request

app.listen(3400,()=>{
    console.log("Server listening on port 3400");
});