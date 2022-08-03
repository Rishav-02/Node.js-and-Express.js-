const fs = require("fs");
const http = require("http");

http.createServer((req, res) => {
    if (req.url == "/") {
      fs.readFile("Fake.json", "utf-8", (err, data) => {
        // console.log(data);
        res.end(data);
        const obj = JSON.parse(data);
        res.end(obj[0].name); // Print "Cake" fetch data from json data
      });
    }
  }).listen(5050, () => {
    console.log("Listening to the port number 5050");
  });
