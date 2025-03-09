const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();
function task()
{
    setTimeout(() => {
        console.log('Task completed ');
        //return 100;
        eventEmitter.emit('taskDone',{
            data : 100
        });
    }, 2000);
}
eventEmitter.on('taskDone',event=>{
    console.log('Task Done' ,event);
});
task();
console.log('Done');
eventEmitter.on('taskDone',event=>{
    console.log('Task Done handler 2 ' ,event);
});