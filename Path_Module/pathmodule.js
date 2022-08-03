//Display file list from folder "files"

const fs = require('fs');
const path = require('path');//path is a inbuilt module to extract filename from a file path.

//The path.join() method joins the specified path segments into one path.
//The specified path segments must be strings, separated by comma.

const dirPath = path.join(__dirname,'files');
for(i=0;i<5;i++)
{
    //This function takes 2 arguments. Sync means Synchronous.
    //   All the parameters are the same as fs.writeFile. The only difference is that this function doesn’t take a callback function. Without the callback it blocks the main thread which causes no delays in the program execution.
    fs.writeFileSync(dirPath+"/hello"+i+".txt","A simple text file");

    //path with use of literals
    // fs.writeFileSync(`${dirPath}/hello${i}.txt`,"A simple text file");

}

fs.readdir(dirPath,(err,file) =>{
    file.forEach((item) => {
        console.log("file name is ",item)
    });
})