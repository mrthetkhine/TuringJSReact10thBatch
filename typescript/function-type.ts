let fun:Function = (a:number,b:number)=>a+b;

console.log('Add ',fun(1,2));

fun = (message:string)=>console.log('Message ',message  );
console.log('Fun ',fun());