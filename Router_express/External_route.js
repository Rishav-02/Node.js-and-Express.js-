 module.exports=reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send("<h1>Please provide age</h1>")
    }
    else if(req.query.age<18){
        res.send(`<h1>You are under age so you can not access this page</h1>`);
    }
    else{
         next(); //The next() is used to pass the control to the next callback.
    }
}; 
