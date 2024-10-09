const express = require('express');
const users = require('./MOCK_DATA.json'); 
const mongoose = require('mongoose');
const fs = require('fs');

const app = express();

app.use(express.urlencoded({extended: false}));

app.use((req , res , next) => {
  console.log("Hello from the learning middleware");
  next();
})

app.use((req , res , next) => {
  fs.appendFile('logs.txt',`\n ${Date.now()}: ${req.ip} ${req.method}: ${req.path}` , (error , data)=>{
    next();
  })
})

app.get('/api/users',(req , res) =>{
  return res.json(users);
});

// app.get('/users',(req , res) =>{
//    const html = `<ul>${users.map(user => `<li>${user.first_name}</li>`).join("")}</ul>`;
//    res.send(html);
// });

app.route("/api/users/:id") 
  .get( (req , res ) =>{
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
  })
  .patch ((req , res) => {
    return res.json({ status: "pending"});
  })
  .delete((req , res) => {
    return res.json({ status: "pending"});
  })


app.post('/api/users',(req ,res) =>{
  //TODO: create a new user
  const body = req.body;
  users.push({...body , id: users.length + 1});
  console.log("user added ----->");
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users) , (error , data ) =>{
    return res.status(201).json({status : "success" ,  id: users.length});
  })
})




const PORT=8000;

app.listen(PORT , ()=> console.log (`listening on port ${PORT}`));