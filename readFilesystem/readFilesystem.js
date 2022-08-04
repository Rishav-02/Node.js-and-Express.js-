//read the entire content of the file

let fs = require('fs');

fs.readFile('readcalc.js','utf-8', function(err,data){
    console.log(data);
})