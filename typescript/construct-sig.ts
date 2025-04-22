class Human
{
    name: string;
    constructor(name:string)
    {
        console.log('Human Constructor');
        this.name = name;
    }
}
class Teacher extends Human
{
    constructor(name:string)
    {
        super(name);
        console.log('Teacher Constructor');
    }
}
class Doctor extends Human
{
    constructor(name:string)
    {
        super(name);
        console.log('Doctor Constructor');
    }
}
type SomeConstructor = {
  new (s: string): Human;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}
fn(Human);
fn(Teacher);
fn(Doctor);