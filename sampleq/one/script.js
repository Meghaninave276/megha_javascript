//Create a Car class that has brand and model properties. Use a constructor to initialize them. Create a method getDetails() that returns the full name of the car.

class Car
{
    constructor(brand,model)
    {
        this.brand=brand;
        this.model=model;
    }
    getDetails()
    {
        document.writeln("the brand is:"+this.brand+"<br>");
         document.writeln("the model is:"+this.model+"<br>");
         document.writeln("the fullname is:"+this.brand+this.model+"<br>")

    }

}
const cars=new Car("kia","sonet");
cars.getDetails();