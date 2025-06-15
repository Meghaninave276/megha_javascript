class person//created a class which name is person.
{//created a open curly braces to writw person class code.
    #name;//created a private attribute which is name;
    #age;//created a private attribute which is age;
    #address;//created a private attribute which is address;


    constructor(name,age,address)//created a constructor with three parameter which are name,age,addres.
    {//created a open curly braces to write constructor method code.
        this.#name=name;//created a global variable with this keyword to assign a value.
        this.#age=age;//created a global variable with this keyword to assign a value.
        this.#address=address;//created a global variable with this keyword to assign a value.

    }//created a close curly braces because constructor method code is completed.
   
    get()//created get methode.
    {
    
       return{//created retur keyword to return the value.
       
       name: this.#name,
       age:this.#age,
    address:this.#address,
       };
    }
     set(name,age,address)//created a set method with three parameter which are name,age,address.
    {//created a open curly braces to write set method code.
        this.#name=name;//created a global variable with this keyword to assign a value.
        this.#age=age;//created a global variable with this keyword to assign a value.
        this.#address=address;//created a global variable with this keyword to assign a value.

    }//created a close curly braces because set method code is completed.
    display()//created a display method.
    {//created a open curly braces to write display method code.
         document.writeln("the name is:"+this.#name);//created a document.writeln function to show the name
        document.writeln("<br>");//created a document.writeln function and in this function we create br tag to go to the next line.
        document.writeln("the name is:"+this.#age);//created a document.writeln function to show the age.
        document.writeln("<br>");//created a document.writeln function and in this function we create br tag to go to the next line.
        document.writeln("the name is:"+this.#address);//created a document.writeln function to show the address.
        document.writeln("<br>");//created a document.writeln function and in this function we create br tag to go to the next line.

    }//created a close curly braces because display method code is completed.
}

const people=[//created a constant array which name  is people.
    new person("megha",18,"surat"),//created a new instance to assign a value
    new person("riya",18,"surat"),
    new person("priya",18,"surat"),
    new person("dhruvika",18,"surat"),
    
];



for(let i=0; i<people.length; i++ )//created a for loop
{
    document.writeln("<br>");
    people[i].display();//show the array data.

}
