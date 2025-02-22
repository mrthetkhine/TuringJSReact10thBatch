const fs = require('node:fs');
//console.log(fs);
console.log('Read start');
fs.readFile('./helloworld.txt','utf-8',(err,data)=>{
    if(!err)
    {
        console.log('Data ',data);
    }
   
});
console.log('End');