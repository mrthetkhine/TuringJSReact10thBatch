const fs = require('node:fs');

console.log('started ');

async function write(fileName)
{
    try 
    {
        await fs.promises.writeFile(fileName, 'Hello World');
        console.log('File write done ');
    }
    catch(err)
    {
        console.error('Error ',err);
    }
}
write('./data.txt');
console.log('end');