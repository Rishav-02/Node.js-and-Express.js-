const express=require('express');
const EventEmitter=require("events");

const app=express();
const event=new EventEmitter();

let count=0;

//count how many times API is called in this we press send button in postman then API called.     press send button == API called
event.on("countAPI",()=>{
    count++;
    console.log("event called",count);
})

//Route for all generate same.i.e "/","/search","/update" show "event called count".
app.get("/",(req,res)=>{
    res.send("API called");
    event.emit("countAPI");//event generate and call
});

app.get("/search",(req,res)=>{
    res.send("API called");
    event.emit("countAPI");
});

// localhost:4000/update
app.get("/update",(req,res)=>{
    res.send("API called");
    event.emit("countAPI");
});


app.listen(4000);
