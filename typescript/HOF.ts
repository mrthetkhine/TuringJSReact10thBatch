function add(x:number)
{
    return function(y:number)
    {
        return x+ y;
    }
}

type CurriedFun = (x:number)=>(y:number)=>number;
let fun :CurriedFun = add;
console.log('Add ',add(2)(4));