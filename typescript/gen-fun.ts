function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}
let arr = [10,20,30];
console.log('first element ',firstElement(arr));