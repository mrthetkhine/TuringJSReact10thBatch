class Human
{
    String name;
    int age;
}
class Another
{
    String name;
    int age;
}
public class NonimalType
{
    public static void main(String[]args)
    {
        Human h=new Human();
        Another a=new Another();
        h.name="John";
        h.age=20;

        a.name="Another";
        a.age=30;
        
        h = a;
        System.out.println(h);
        System.out.println(a);
    }
}