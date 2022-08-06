//pipe() method in a Readable Stream is used to attach a Writable stream to the readable stream so that it consequently switches into flowing mode and then pushes all the data that it has to the attached Writable.

//Syntax:  readable.pipe( destination, options )
//readable is a variable for my case variable is rstream
//destination: This parameter holds the      destination of writing data.
//options: This parameter holds the pipe options.

//pipe() method is called on the file stream.You call it on the source stream, so in this case, the file stream is piped to the HTTP response.The return value of the pipe() method is the destination stream, which is a very convenient thing that lets us chain multiple pipe() calls, like this:  src.pipe(dest1).pipe(dest2);


//Due to their advantages, many Node.js core modules provide native stream handling capabilities, most notably:
/* process.stdin returns a stream connected to stdin
process.stdout returns a stream connected to stdout
process.stderr returns a stream connected to stderr
fs.createReadStream() creates a readable stream to a file
fs.createWriteStream() creates a writable stream to a file
net.connect() initiates a stream-based connection
http.request() returns an instance of the http.ClientRequest class, which is a writable stream
zlib.createGzip() compress data using gzip (a compression algorithm) into a stream
zlib.createGunzip() decompress a gzip stream.
zlib.createDeflate() compress data using deflate (a compression algorithm) into a stream
zlib.createInflate() decompress a deflate stream
 */

const fs = require("fs");
const http = require("http");

const server = http.createServer();
server.on("request", (req, res) => {
  const rstream = fs.createReadStream("stream.txt");
  rstream.pipe(res);
});

server.listen(7000, () => {
  console.log("port runs");
});
