const fs= require('node:fs');

console.log('started');
fs.readFile('./hello.txt', 'utf8', (err, data) => {
    if(!err)
    {
        console.log('File read done ',data.toString());
    }
    else
    {
        console.log('Error ',err);
    }
});
console.log('end');