//about,detail,index(.html) are static pages

const express = require('express');
const path = require('path');//path module help to access any project folder

const app = express();
const publicPath = path.join(__dirname,'HTML_Access');

//To run    http://localhost:3000/about.html and http://localhost:3000/detail.html   etc.
app.use(express.static(publicPath));//static() is used to load static HTML contents

//The app.use() function is used to mount the specified middleware function(s) at the path which is being specified. It is mostly used to set up middleware for your application.
app.listen(3000);