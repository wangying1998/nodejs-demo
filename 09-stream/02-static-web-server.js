#!/usr/bin/node

const http = require('http');
      fs = require('fs');
      path = require('path');

var file;
http.createServer((req,res)=>{
  //console.log(req.headers);
  console.log(req.url);
  file = path.join(__dirname,req.url);
  //try{
  //  res.end(fs.readFileSync(file).toString('utf8'));
  //}
  //catch(err){
  //  res.end(err.toString('utf8'));
  //}
  
  fs.createReadStream(file).pipe(res);

}).listen(8080);



