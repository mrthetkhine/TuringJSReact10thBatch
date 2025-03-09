const fs = require("node:fs");
let stats = fs.statSync("hello.txt");
console.log('isFile ',stats.isFile());
console.log('isDirec ',stats.isDirectory());
console.log('size ',stats.size);
console.log('mode ',stats.mode.toString(8));
console.log('birthTime ',stats.birthtime);
console.log('birthTimeMs ',stats.birthtimeMs);

fs.mkdirSync("demo/hello", { recursive: true });