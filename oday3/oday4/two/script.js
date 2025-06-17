class vehicle
{
    constructor(model,speed)
    {
        this.model=model;
        this.speed=speed;
    }


    get()
    {
        document.writeln("the model is:",this.model+"<br>");
    }
    calcspeed()
    {
        document.writeln("the speed is:",this.speed+"<br>");
    }
}
class car extends vehicle
{
    constructor(model,distance,time)    
    {
        super(model,distance/time);
    }

}
class bike extends vehicle
{
    constructor(model,distance,time)
    {
        super(model,distance/time)
    }

   
}
const v1=new car("kia seltos",1000,2);
const v2=new bike("kia sonet",500,2);


v1.calcspeed();
v1.get();
v2.calcspeed();
v2.get();
