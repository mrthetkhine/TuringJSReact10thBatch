function factorial(n)
{
    console.log('N ',n);
    let result = 1;
    for(let i=1;i<=n;i++)
    {
        result *= i;
    }
    return result;
}
/*
for(let i=0;i< 40000;i++)
{
    console.log('Something');
}*/
function delay(miliseconds)
{
    let start = new Date();
    while( (end=new Date())-start <miliseconds );
}
onmessage = (event)=>{
    console.log('onMessage Event in worker ',event.data);
    delay(5000);
    let result = factorial(event.data.data);
    console.log('Result ',result);
    postMessage({
        data : result
    });
};
console.log('Worker.js loaded...');