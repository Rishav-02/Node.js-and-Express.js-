const url = require("url");
//object is created{'new' is used that means object is created}
const myURL = new URL('https://hostinger.org:9000/foo#bro');
console.log(myURL.port);//// (HTTPS protocol's default port is 443)
console.log(myURL.hash);
console.log(myURL.host);
console.log(myURL.href);

const u = new URL('https://google.com');
//However, changing from https to a hypothetical 'cow' protocol does not because the new protocol is not special and vice-versa is also true.
// u.protocol = 'cow';  
u.protocol = 'http';
console.log(u.href);