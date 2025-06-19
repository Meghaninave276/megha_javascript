//Create a Shape class with a method area(). Then create Circle and  classes that extend Shape and implement their own area() logic.

class Shape
{
    constructor(area,name)
    {
        this.name=name;
        this.area=area;

    }
    areaDisplay()
    {
          document.writeln("the shape name is"+this.name+"<br>");
        document.writeln("the area is"+this.area+"<br>");
    }
}
class Circle extends Shape
{
    constructor(radius)
    {
        super(3.14*radius*radius,"circle");
    }
}
class Square extends Shape
{
    constructor(s)
    {
        super(s*s,"Square");
    }
}
const c1=new Circle(2);
const c2=new Square(2)
c1.areaDisplay();
c2.areaDisplay();
