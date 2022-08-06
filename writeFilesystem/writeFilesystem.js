//writecalc.js is created after run this program
//If we replace writecalc.js with readcalc.js in the argument of function then whole program replace the content and print "console.log("done")".

let fs = require('fs');

//3 arguments passed are file name,data which is going to store in file,callback function that will be called when fs.writeFile is either done or failed.
fs.writeFile('writecalc.js','console.log("done")', function(err,data){
    console.log("Data Saved");
})
//fs.writeFile allows you to create a file and pass data at creation time.