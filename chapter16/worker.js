const {parentPort, workerData} = require('worker_threads');
console.log('worker thread loaded');
parentPort.postMessage(workerData.num * workerData.num)