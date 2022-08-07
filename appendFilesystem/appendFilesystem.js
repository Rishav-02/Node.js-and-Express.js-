//If we do not want to replace the entire content on use writeFile() with readcalc.js as an argument then use function appendFile().In this if we pass any file as an argument this will update the content by just only add console.log("done") at the end.

let fs = require('fs');

fs.appendFile('readcalc1.js','console.log("done")', function(err,data){
    console.log("Data Saved");
})
//function(err,data){ } is a callback function.
//callback function can also be written in form of arrow function (err,data)=>{ }