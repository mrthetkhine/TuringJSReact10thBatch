interface Flyable
{
    fly: () => void
}
class Bird implements Flyable
{
    fly()
    {
        console.log('Bird Flying');
    }
}
class Aeroplane implements Flyable
{
    fly()
    {
        console.log('Aeroplane Flying');
    }
}
let f : Flyable = new Bird();
f.fly();
f = new Aeroplane();
f.fly();