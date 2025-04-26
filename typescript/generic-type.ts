interface Box<T>{
    data : T
}

let numBox : Box<number> = {
    data : 100
};
console.log('NumBox ',numBox.data.toFixed(2));
let strBox : Box<string> = {
    data:"Hello"    
}
console.log('StrBox ',strBox.data.toUpperCase());