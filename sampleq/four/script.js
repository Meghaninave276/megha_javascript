//Create a Calculator class that hides the internal result property (e.g., using #result). Add methods to add(num), subtract(num), and getResult().


class Calculator
{
  #result;
    constructor(result)
    {
        this.#result=result;
        
    }
    add(sub1,sub2)
    {
        this.sub1=sub1;
        this.sub2=sub2;
        this.#result=sub1+sub2;




        document.writeln("the sub1 marks is",this.sub1+"<br>");
        
        document.writeln("the sub2 marks is",this.sub2+"<br>");
        






    }
   sub(sub3,sub4)
    {
        this.sub3=sub3;
        this.sub4=sub4;
        this.#result=sub4-sub3;




        
        
        document.writeln("the sub3 marks is",this.sub4+"<br>");
        document.writeln("the sub4 marks is",this.sub3+"<br>");
        






    }
    getResult()
    {
        document.writeln("the result is:",this.#result);
    }


}
const a1=new Calculator();


a1.add(90,80);
a1.sub(40,60);
a1.getResult();