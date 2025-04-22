function hello()
{
    console.log('Hello');
}
hello.description = "Hello Func";

type FunWithDescription = {
    description: string;
    ():void;
}
let fun: FunWithDescription = hello;
fun();