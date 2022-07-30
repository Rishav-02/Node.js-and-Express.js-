//unlink() is a function use for deleting any file.
//First I create "deletethis.html" file.we use any type of file to check unlink() function.

let fs = require('fs');

fs.unlink('deletethis.html', function(err){
    console.log("Deleted");
})