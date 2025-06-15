class Rectangle// created a class which name is rectangle.
{//created a open curly braces to write rectangle class code.
    #length;//created a private atribute which is length.
    #width;//created a private atribute which is width.

    set(length,width)//created a set mathod with two paramater one is length and second is width.
    {
        //created a open curly braces to write set mathod code.
        this.#length=length;//created a global atribute which is private and its name is #length.
        this.#width=width;//created a global atribute which is private and its name is #width.


    }//created close curly braces because set method code is completed.
    get()//created get method.
    {
        //created a open curly braces to write a get method code.
        document.writeln("length is:",this.#length);//create a document.writeln function to show the length.
        document.writeln("<br>");//created a document.writeln function and in this function we created a br tage to go to the next line.
        document.writeln("width is:",this.#width);//create a document.writeln function to show the width.
        document.writeln("<br>");//created a document.writeln function and in this function we created a br tage to go to the next line.

    }//created close curly braces because get method code is completed.
    area_of_Rectangle()//created  area_of_Rectangle method.
    { //created a open curly braces to write a area_of_Rectangle method code.
        document.writeln("area of rectangle is:",this.#length*this.#width);//in this line we calculate area of rantagle and formula is this.#length*this.#width.
    }//created close curly braces because area_of_Rectangle method code is completed.
}//created a close curly braces because rectangle class code is completed.
const r1=new Rectangle();//created a new instance of the rectangle class and assigned it to constant variable which is r1.
r1.set(3,4);//call the set method on the r1 object to assign a value.
r1.get();//call the get method on the r1 object to assign a value.
r1.area_of_Rectangle();//call the area_of_Rectangle  method on the r1 object to assign a value.