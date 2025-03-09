const os = require("os");

console.log('CWD ',process.cwd());
console.log('Arch ',process.arch);
console.log('Platform ',process.platform);
console.log('Version ',process.version);    
console.log('Memory ',process.memoryUsage());
console.log('CPU ',process.cpuUsage());
console.log('Env ',process.env);

console.log('Home dir ',os.homedir());
console.log('core ',os.cpus());
console.log('tmp dir ',os.tmpdir());