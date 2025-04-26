interface Person {
  name: string;
  age: number;
}
type CreateReadOnly<Type> = {
  readonly [Property in keyof Type]: Type[Property];
};
 
type ReadOnlyPerson = CreateReadOnly<Person>;
let r:ReadOnlyPerson = {
    name : "TK",
    age : 40
}
r.age  ++;
 
