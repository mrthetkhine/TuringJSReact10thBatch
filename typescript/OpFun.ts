function add(a:number, b: number):number
{
    return a + b;
}
function subtract(a:number, b: number):number
{
    return a - b;
}
function mult(a:number, b: number):number
{
    return a * b;
}
function div(a:number, b: number):number
{
    return a / b;
}
type Fun = (a:number,b:number)=>number;
let fn : Fun = add;

function hello()
{
    console.log('Hello');
}
//fn = hello;