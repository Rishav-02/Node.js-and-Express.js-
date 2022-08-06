//Express server creation
const express = require("express");
const app = express();

//Working with Routes

//req(request),res(response) here this is callback function
app.get("/", (req, res) => {
  res.send("<h1>Namaste India!</h1>");
  //From this console when server.js file run in cmd then package-lock.json created
  // console.log(request);
});

//First run command "node server.js" then run localhost:3000/contact to see effect.
app.get("/contact", (req, res) => {
  res.send(`Contact me at:<h3>rishavsinha@gmail.com</h3>`);
});

//href create links for move to any pages
//req.query.name is use for taking input and show that input in input type box i.e get values and parameters also called queryParams from this way.
//http://localhost:3000/detail?name=RishavRaj run this to show effect
app.get("/detail", (req, res) => {
  res.send(`<input type="text" placeholder="User name" value="${req.query.name}"/> <br> <button>Click Me</button> <br> <a href="/about">Go to About section</a>`);
});

app.get("/about", (req, res) => {
  res.send("<h2>My name is Rishav Raj <br> I persue BCA from A.S College</h2>");
});


app.get("/hobbies", (req, res) => {
  res.send(
    `<ul><li>Playing Cricket</li><li>Explore New Technology</li><li>Playing Video Games</li></ul> <br> <a href="/contact">Go to Contact Page</a>`
  );
});

//Render or show json data
app.get("/help", (req,res)=>{
  res.send( [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    }
])
});

//This only run on localhost:3000 if I use it in other port i.e 800,200,etc It will respond with a 404 Not Found.
app.listen(3000, () => {
  console.log("Server has started on port 3000");
});
