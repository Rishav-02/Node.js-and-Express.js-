const path = require('path');

console.log(path.dirname("Rishav Raj@LAPTOP-6B4Q5MQ8 MINGW64 /d/Node.js"));
console.log(path.parse("D:/Node.js/path_module.js"));//return object
const myPath = path.parse("D:/Node.js/path_module.js");
console.log(myPath.name);

console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));