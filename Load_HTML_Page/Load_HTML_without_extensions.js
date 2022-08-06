const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "HTML_Access"); //All 4 html file exist in "HTML_Access" Folder.

//here in get method  '/' or "" are same
app.get("", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);//index.html is default page run same in both
});

//To Remove extension at run time and to load file from get method then use sendFile().
app.get("/abt", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

//To run-  http://localhost:3000/det
app.get("/det", (req, res) => {
  res.sendFile(`${publicPath}/detail.html`);
});

//If user loads other pages except above 3 pages then this page executes
app.get("*", (req, res) => {
  res.sendFile(`${publicPath}/Nofound.html`);
});

app.listen(3000, () => {
  console.log("Port run at 3000");
});
