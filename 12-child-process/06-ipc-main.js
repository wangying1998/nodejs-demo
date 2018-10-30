#!/usr/bin/node

const cp = require('child_process');

console.log('I am parent process. PID:',process.pid);
var cmd = cp.fork('./06-ipc-child.js');

global.setTimeout(()=>{
  cmd.send('I am parent process. PID:'+process.pid);
},3000);

cmd.on('message',(msg)=>{
  console.log('CHILD MESSAGE:',msg);
});

