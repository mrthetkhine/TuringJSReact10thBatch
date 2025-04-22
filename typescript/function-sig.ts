function doLater(callback:()=>void)
{
    setTimeout( callback,1000);
}

function hello()
{
    console.log('Hello');
}
function add(a:number, b: number):number
{
    return a + b;
}
doLater(hello);
//doLater(122);