const fs = require('node:fs');
console.log('start');
fs.readFile('hello.txt','utf-8',(err,data)=>{
    if(!err)
    {
        fs.readFile('hello2.txt','utf-8',(err2,data2)=>{
            if(!err2)
            {
                console.log('Data ',data.toString().substring(1,50));
                console.log('Data 2',data2.toString().substring(1,50));
            }
        })
        
    }
});
console.log('end');