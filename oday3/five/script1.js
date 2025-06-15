class bankaccount//created a class which name  is bankaccount
{//created a open curly braces to write a bankaccount class code.
    #accountnumber;//created a private attribute which name is accountnumber.

    #balance=10000;//created a private attribute which name is balance.
    #ownername;//created a private attribute which name is ownername.
    credit(accountnumber,balance,ownername)//created a credit method with three parameter and which are accountnumber,balance,ownername.
    {//created a open curly braces to write credit method code.
          this.#accountnumber=accountnumber;//created a global variable with this keyword  to assign local variable which is accountnumber.
        this.#balance=this.#balance+balance;//created a global variable with this keyword  to assign local variable which is balance.
        this.#ownername=ownername;//created a global variable with this keyword  to assign local variable which is owner.

        document.writeln("your balance is ",this.#balance+"<br>");//created a document.writeln to show the how many balance in bankaccount class.

       

    }//created a close curly braces because credit method code is completed.
    debit(accountnumber,balance,ownername)//created a debit method with three parameter which are accountnumber,balance,ownername.
    {//created a open curly braces to write debit method code.
        
          this.#accountnumber=accountnumber;//created a global variable with this keyword  to assign local variable which is accountnumber.
        this.#balance=this.#balance-balance;//created a global variable with this keyword  to assign local variable which is balance.
        this.#ownername=ownername;//created a global variable with this keyword  to assign local variable which is owner.

        document.writeln("your balance is now",this.#balance+"<br>");//created a document.writeln to show the how many balance in bankaccount class.


    }//created a close curly braces because debit method code is completed.


    display(accountnumber,ownername)//created a display method with three parameter which are accountnumber,ownername.
    {//created a open curly braces to write display method code.
          this.#accountnumber=accountnumber;//created a global variable with this keyword  to assign local variable which is accountnumber.
        
        this.#ownername=ownername;//created a global variable with this keyword  to assign local variable which is ownername.

        document.writeln("your balance is now",this.#balance+"<br>");//created a document.writeln to show the how many balance in bankaccount class.

    }

}
const bank=new bankaccount();//created a new instance bankaccount class and assign it to constant variable which is bank.
bank.credit(45612378912301,1000,"ambani");//call the credit method on the bank object to assign value.
bank.debit(45612378912301,1000,"ambani");//call the debit method on the bank object to assign value.
bank.display(45612378912301,"ambani")//call the display method on the bank object to assign value.
