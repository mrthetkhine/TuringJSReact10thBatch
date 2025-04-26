class Human {
  //name : string;
  //age : number;

  constructor(private name : string, private age : number) {
    console.log('Human constructor name ',name, ' age' ,age);
    //this.name = name;
    //this.age = age;
  } 
  display() {
    console.log('Name ',this.name, ' age ',this.age);
  }

}
let h = new Human("TK",40);
h.display();