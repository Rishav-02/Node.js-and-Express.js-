const os = require('os');

// console.log(os.cpus());
// console.log(os.constants);
console.log(os.EOL);
console.log(os.homedir());
console.log(os.hostname());
console.log(os.totalmem()/(1024*1024*1024));//in GB
console.log(os.freemem()/(1024*1024*1024));//in GB
console.log(os.arch());
console.log(os.platform());

console.log(os.userInfo());