function pipe(...fns)
{
    return function(str)
    {
        return fns.reduce((input,fn)=> fn(input) ,str);
    }
}
function tap(fun)
{
    return function(str)
    {
        fun(str);
        return str;
    }
}
function compose(...fns)
{
    return function(str)
    {
        return fns.reduceRight((input,fn)=> fn(input) ,str);
    }
}
function curry(fn)
{
    //console.log('Length ',fn.length);
    return fn.length==0?fn:(x)=>fn.bind(null,x);
    /*
    if(fn.length==0)
    {
        return fn();
    }
    return function(x)
    {
        return fn.bind(null,x);
    }*/
}