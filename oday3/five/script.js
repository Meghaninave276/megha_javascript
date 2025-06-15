class laptop//created a class which name is laptop.
{
    #name;//craeted a private attribute which name is name.
    #price;//craeted a private attribute which name is price.
    #processor;//craeted a private attribute which name is processor.



    constructor(name,price,processor)//created a constructor with three parameter which are name,price,processor.
    {
        this.#name=name;//created a global variable with this keyword to assign a value.
        this.#price=price;//created a global variable with this keyword to assign a value.
        this.processor=processor;//created a global variable with this keyword to assign a value.
    }


    set(name,price,processor)//created a set method with three parameter which are name,price,processor.
    {
        this.#name=name;//created a global variable with this keyword to assign a value.
        this.#price=price;//created a global variable with this keyword to assign a value.
        this.#processor=processor;//created a global variable with this keyword to assign a value.

    }


    get()//created a get method.
    {
        document.writeln("the name is:",this.#name);//created a document.writeln function to show the name.
        document.writeln("<br>");//created a document.writeln function and in this function we create br tag to go to the next line.
         document.writeln("the price is:",this.#price);//created a document.writeln function to show the price.
        document.writeln("<br>");//created a document.writeln function and in this function we create br tag to go to the next line.
         document.writeln("the processor is:",this.#processor);//created a document.writeln function to show the processor.
        document.writeln("<br>");//created a document.writeln function and in this function we create br tag to go to the next line.
    }
}

const laptops=new laptop();//created a new instance laptop class and asssign it constant variable on the laptops.

laptops.set("asus",40000,"intel core");//call the set method to assign a value on the laptops object.
laptops.get();//call the get method to assign a value on the laptops object.