class Device
{
    constructor(brand,powerconsumption)
    {
        this.brand=brand;
        this.powerconsumption=powerconsumption;
    }
    get()
    {
        document.writeln("the brand is:",this.brand+"<br>");
    }
    p()
    {
        document.writeln("the powerconsumption is:"+this.powerconsumption+"<br>");
    }
}
class Laptop extends Device
{
    constructor(brand,powerconsumption)
    {
       super(brand,powerconsumption);



    }
    display()
    
    {
        super.get();
        super.p();
        document.writeln("the brand is:",this.brand+"<br>");
        document.writeln("the powerconsumption is:"+this.powerconsumption+"<br>");

    }
}

class Smartphone extends Device
{
    constructor(brand,powerconsumption)
    {
       super(brand,powerconsumption);


    }
    display()
    
    {
        super.get();
        super.p();
        document.writeln("the brand is:",this.brand+"<br>");
        document.writeln("the powerconsumption is:"+this.powerconsumption+"<br>");

    }
}

const l1=new Laptop("asus vivobook","200w for 8 hours");

const s1=new Smartphone("redmi","7.3 kWh per year")

l1.get();
l1.p();
s1.get();
s1.p();