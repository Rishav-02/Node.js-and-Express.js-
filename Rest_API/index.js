const express = require('express');
const fs = require('fs');
const users = require("./MOCK_DATA.json");
 
const app = express();
const PORT = 8000;

//Middleware
app.use(express.urlencoded({extended: false}));

//Server side render page
app.get('/users',(req,res) =>{
    const html = `
    <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul> `;
    res.send(html);
});


//REST API
app.get('/api/users', (req,res) =>{
    return res.json(users);
});

//Dynamic Routes (get,post,put,delete,patch)
app.get('/api/users/:id',(req,res) =>{ //http://localhost:8000/api/users/1001
   const id = Number(req.params.id);
   const user = users.find((data) => data.id === id);
   return res.json(user);
});

//"post" is used to add the record in the file
app.post('/api/users', (req,res) =>{
    const body = req.body;
    users.push({id: users.length + 1, ...body});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users),(err) =>{
      if (err) {
                return res.status(500).json({ status: "error", message: "Failed to update data" });
            }
     return res.json({status: "Data added", id:users.length});
    })
})

//"patch" is used to update the record partially i.e only email or gender so on
app.patch('/api/users/:id', (req, res) => {
    const body = req.body;
    const id = Number(req.params.id);
    const user = users.find((data) => data.id === id);

    if (user) {
        // Update user fields only if provided in the request body  
        user.first_name = body.first_name;
        user.last_name = body.last_name;
        user.email = body.email;
        user.gender = body.gender || user.gender;//keep the old value if not provided in request body
        user.job_title = body.job_title;

        // Write updated data to MOCK_DATA.json
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
            if (err) {
                return res.status(500).json({ status: "error", message: "Failed to update data" });
            }
            return res.json({ status: "Data Updated", id: user.id });
        });
    } else {
        // User not found
        return res.status(404).json({ status: "error", message: "User not found" });
    }
});


//Delete is used to delete the record from the file
 app.delete('/api/users/:id', (req,res) =>{
 const id = Number(req.params.id);
 const userIndex = users.findIndex((data) => data.id === id);

  if(userIndex != -1){
    users.splice(userIndex,1);//remove the user from the array

    // Write updated data to MOCK_DATA.json
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
      if(err){
        return req.status(500).json({status:"error",message:"Failed to delete data"});
      }
      return res.json({status: "Data deleted", id: id});
    });
  }
  else{
    // User not found
    return res.status(404).json({status:"error",message:"User not found"});
  }
});


//"put" is used to update the record completely i.e all the fields
app.put('/api/users/:id', (req,res) =>{
    const body = req.body;
    const id = Number(req.params.id);
    const userIndex = users.findIndex((data) => data.id === id);

    // Check if user exists
    if(userIndex != -1){
        users[userIndex] = {id: id, ...body};
        // Write updated data to MOCK_DATA.json
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
            if(err){
                return res.status(500).json({status:"error",message:"Failed to update data"});
            }
            return res.json({status: "success", id: id});
        });
    }
    else{
        // User not found
        return res.status(404).json({status:"error",message:"User not found"});
    }
});

app.listen(PORT,()=>{
  console.log(`Server Started at PORT:${PORT}`); 
});