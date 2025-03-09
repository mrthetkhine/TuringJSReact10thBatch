const path = require('node:path');

console.log('filename ',__filename);
console.log('dirname ',path.dirname(__filename));
console.log('basename ',path.basename(__filename));
console.log('extname ',path.extname(__filename));
console.log('normalize ',path.normalize("a/b/c/../d/"));
console.log('Resolve ',path.resolve('./ProcessDemo.js'));