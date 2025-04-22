function hello():void
{
    console.log('Hello');
}
hello();
function add(a:number,b:number):number
{
    return a + b;
}
console.log('Add(2,3) ',add(2,3));

const names = ["Alice", "Bob", "Eve"];
names.forEach(name=>console.log('Name ',name));