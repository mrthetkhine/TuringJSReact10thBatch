class Base {
  private x = 10;
}
const b = new Base();
// Can't access from outside the class
let data :any = b;
console.log(data.x);