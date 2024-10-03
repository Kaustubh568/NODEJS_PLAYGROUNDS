const express = require('express');

const app = express();

app.get('/',(req,res) =>{
   res.send("hey world");
});


app.get('/about',(req,res) =>{
  return res.send("this is about us");
});

app.listen(8000,() => console.log("listening on port 8000"));