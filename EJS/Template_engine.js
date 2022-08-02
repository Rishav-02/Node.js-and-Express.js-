const express = require("express");
const app = express();

//The app.set() function is used to assigns the setting name to value. You may store any value that you want, but certain names can be used to configure the behavior of the server.
//Syntax:-   app.set(name, value)
app.set('view engine','ejs');//view engine setup

//Without middleware
////Rendering profile.ejs page and The res.render() function is used to render a view and sends the rendered HTML string to the client. 
app.get('/profile',(req,res)=>{
    const user={
        name:'Rishav Raj',
        email:'rishav45@gmail.com',
        city:'Deoghar',
        country:'India',
        skills:['Js','C++','SQL','Java']
    }
    res.render('profile',{user}); 
});

app.get('/login',(req,res)=>{
    res.render('login');
})

app.listen(4000,(err)=>{
    if(err) console.log(err);
    console.log("Server listening on PORT 4000");
});