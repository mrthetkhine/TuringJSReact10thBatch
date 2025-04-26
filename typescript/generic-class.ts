class Box<T>
{
    data : T;
    constructor(data : T)
    {
        this.data = data;
    }

}
let box : Box<string> =new Box("Hello");
console.log('Box ',box.data);

