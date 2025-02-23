const fs = require('node:fs');
console.log('start');
fs.promises.readFile('hello.txt')
            .then(data=>console.log('hello.txt data '+data.toString().substring(1,50)))
            .then(data=>fs.promises.readFile('hello2.txt'))
            .then(data=>console.log('hello2.txt data '+data.toString().substring(1,50)));
console.log('end');