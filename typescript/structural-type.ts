type Human = {
    name : string;
    age : number;
}
type Another ={
    name : string;
    age : number;
    description:string;
}
let h: Human = {
    name : "TK",
    age : 40
}
let a :Another = {
    name : "Another",
    age :30,
    description: 'Hello'
}
//a = h;
h = a;
console.log('A ',a);