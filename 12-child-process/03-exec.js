#!/usr/bin/node

const cp = require('child_process');

cp.exec('cat a.txt|sort|uniq',(err,out,error)=>{
  if(err){
    console.error(error);
    process.exit(100);
  }
  console.log(out);
});

