class car//created a class which name is car.
{
    #model;//craeted a private attribute which name is model.
    #year;//craeted a private attribute which name is year.
    #speed;//craeted a private attribute which name is speed.




    set(model,year,speed)//created a set method with three parameter which are model,year,speed.
    {
        this.#model=model;//created a global variable with this keyword to assign local variable.
        this.#year=year;//created a global variable with this keyword to assign local variable.
        this.#speed=speed;//created a global variable with this keyword to assign local variable.

    }
    get()//created a get method.
    {
        document.writeln("the model is:",this.#model);//created a document.writeln function to show the model.
        document.writeln("<br>");//created a document.writeln function and in this function we create br tag to go to the next line.
         document.writeln("the model is:",this.#year);//created a document.writeln function to show the year.
        document.writeln("<br>");//created a document.writeln function and in this function we create br tag to go to the next line.
         document.writeln("the model is:",this.#speed);//created a document.writeln function to show the speed.
        document.writeln("<br>");//created a document.writeln function and in this function we create br tag to go to the next line.
    }

}



const cars=new car();//created a new instance car class and asssign it constant variable on the car.

cars.set("kia sonet",2025,"195kmph");//call the set method to assign a value on the cars object.
cars.get();//call the get method to assign a value on the cars object.
