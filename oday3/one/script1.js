class Employee//created a class which is employee.
{//created a open curly braces to write a employee class code.
    #name;//created a private attribute which is name.
   #salary;//created a private attribute which is salary.
    #designation;//created a private attribute which is designation.


    set(name,salary,designation)//created a method which is set and in this method i created a three parameter which are name,salary,designation.
    {//created a open curly braces to write a set method code.
        this.#name=name;//created a global attribute with this keyword and which is name.
        this.#salary=salary;//created a global attribute with this keyword and which is salary.
        this.#designation=designation;//created a global attribute with this keyword and which is desugnation.

    }//created  close curly braces because set method code is completed.
    get()//created a method which name is get.
    {//created a open curly braces to write a get method code.
        document.writeln("name is:",this.#name);//created a document.writeln function to show the name.
        document.writeln("<br>"); //created a document.writeln function in this function we created a br tage to go to the next line.
        document.writeln("salary is:",this.#salary);//created a document.writeln function to show the salary.
        document.writeln("<br>"); //created a document.writeln function in this function we created a br tage to go to the next line.
          document.writeln("designation is:",this.#designation);//created a document.writeln function to show the designation.
        document.writeln("<br>"); //created a document.writeln function in this function we created a br tage to go to the next line.



    }//created a close curly braces because get method code is completed.
}
const e1=new Employee();//created a new instance of  the employee class and assign it to constant variable which is e1.
e1.set("megha",200000,"full stack developer");//call the set method on the e1 object to assign avalue.
e1.get();//call the set method on the e1 object to assign avalue.