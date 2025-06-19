//Create a Person class with a method greet(). Create a Student class that extends Person and adds a method study(). Use both methods on a Student object.


class Person
{
    greet()
    {
        document.writeln("welcome the school."+"<br>");
    }
}

 
class Student extends Person
{
    study(name,standard)
    {
        super.greet();
        this.name=name;
        this.standard=standard;


        document.writeln("the name is"+this.name+"<br>");
           document.writeln("the standard is"+this.standard+"<br>");


    }
}
const p1=new Student();
p1.study("Isha","A");