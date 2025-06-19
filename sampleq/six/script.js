//Create a Vehicle class with a method move(). Then create a Bike class that extends Vehicle. Create an object of Bike and call the move() method.

class Vehicle
{
    move()
    {
        document.writeln("the move is");
    }
}
class Bike extends Vehicle
{

}
const b1=new Bike()
b1.move();