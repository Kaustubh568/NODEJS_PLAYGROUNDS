const http = require('http');
const fs = require('fs');

const server = http.createServer((req , res ) =>{
  
   const log = `${Date.now()}: ${req.url} New request recieved \n`; 
   fs.appendFile('./log.txt',log, (err,data) =>{
    switch(req.url){
       case '/':
          res.end("This is Kings landing");
          break;
       case '/about':   
          res.end("this is about for the kings landing");
          break;
       case '/contact':
          res.end("this is contact for the kings landing");
          break;
        }
    res.end("Hello world");
   })
   console.log("new request recieved");
});

server.listen(8000 , () => console.log("Server started"));