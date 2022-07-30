const express = require("express");
const app = express();

//get method API is use to load pages
app.get("/",(req,res) => {
    res.send("Hello World!");
});

app.listen(4040, () => {
    console.log("Server runs at port 4040");
})