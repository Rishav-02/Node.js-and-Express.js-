//Return Value: "process.argv" This property returns an array containing the arguments passed to the process when run it in the command line. The first element is the process execution path and the second element is the path for the js file.

//"process" is a npm or module and "argv" stands for argument vector.

const process=require("process");

console.log(process.argv);//[0],[1] arguments position are always occupied by system path and program file path respectively.

const fs = require('fs');
const input = process.argv;

//If we write "add" in cmd then data.txt file is created
//node inputfromcmd.js add rishav raj
//Argument: add is at 2nd,rishav is at 3rd,raj is at 4th.
if(input[2]=='add')
{
    fs.writeFileSync(input[3],input[4]);
}
//If we write "remove" in place of "add" in command line then data.txt is deleted
else if(input[2]=='remove')
{
    fs.unlinkSync(input[3]);
}
else
{
    console.log("invalid input");
}