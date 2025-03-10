const {Worker} = require('worker_threads');
const worker = new Worker('./worker.js', {workerData: {num: 5}});
worker.on('message', (result) => {
    console.log('square of 5 is :', result);
})
worker.on("error", (msg) => {
    console.log(msg);
});
console.log('hurreyy')