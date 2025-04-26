interface StringArray {
  [index: number]: string;
}
//['apple','orange'] 
const myArray: StringArray = ['apple','orange'] ;
const secondItem = myArray[1];
console.log('second item ',secondItem);