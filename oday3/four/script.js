class student//created a class which name is student.
{
    #name;//craeted a private attribute which name is name.
    #rollno;//craeted a private attribute which name is rollno.
   constructor(name,rollno)//created a constructor method with two parameter which are name and rollno.
   {
    this.#name=name;//created a global variable with this keyword to assign local variable.
    this.#rollno=rollno;//created a global variable with this keyword to assign local variable.


   }


   set(name,rollno)//created a sey method with two parameter which are name and rollno.
   {
     this.#name=name;//created a global variable with this keyword to assign local variable.
    this.#rollno=rollno;//created a global variable with this keyword to assign local variable.
   


   }
   get()//created a get method.
    {
          
    document.writeln("the name is:",this.#name);//created a document.writeln function to show the name.
    document.writeln("<br>");//created a document.writeln function and in this function we create br tag to go to the next line.
      document.writeln("the name is:",this.#rollno);//created a document.writeln function to show the rollno.
    document.writeln("<br>");//created a document.writeln function and in this function we create br tag to go to the next line.

    }
}


const students=[//created a constant array which is students.
    new student("megha",47),//created a new instance to assign a value.
     new student("riya",74),
      new student("dhruvika",12),
     new student("priya",89)

];


for(let i=0; i<students.length; i++)//created a for loop .
{
    students[i].get();//show the students data which are in the array and get from the get method.

}