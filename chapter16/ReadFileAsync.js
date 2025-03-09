const fs = require('node:fs');

console.log('started ');
/*
fs.promises.readFile('./hello.txt', 'utf8')
    .then(data=>console.log('File read done ',data.toString()),err=>console.error('Error ',err));
    */ 
async function read(fileName)
{
    try 
    {
        let data = await fs.promises.readFile(fileName, 'utf8');
        console.log('File read done ',data.toString());
    }
    catch(err)
    {
        console.error('Error ',err);
    }
}
read('./hello.txt');
console.log('end');