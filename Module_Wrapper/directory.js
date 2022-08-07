//Core Modules is By default features of any programming language.These are of two types:
// 1.Global Module - We can not import these modules from anywhere.i.e console.log
// 2.Non-Global Module - We have to import these modules from anywhere.i.e Buffer,Filesystem,Http,etc.

console.log("Hii",__dirname);//directory name
console.log("Hello World",__filename);

const gs = require('fs').writeFileSync;
gs("abc.txt","This writeFileSync() is a synchronous function of Filesystem Module.")//Here abc.txt is created after run this program