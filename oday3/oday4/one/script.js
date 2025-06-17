class Shpe
{
    constructor(color,area)
    {
        this.color=color;
        this.area=area;
    }


    get()
    {
        document.writeln("the color is:",this.color+"<br>");

    }
    calcarea()
    {
        document.writeln("the area is:",this.area+"<br>");
    }
}
class Circle extends Shpe
{
    constructor(color,radius)
    {
        super(color,3.14*radius*radius);
    }
}
class Rect extends Shpe
{
    constructor(color,length,width)
    {
        super(color,length*width);
    }
}
const e1=new Circle("yellow",2);
const e2=new Rect("blue",2,4);
e1.calcarea();
e1.get();
e2.calcarea();
e2.get();