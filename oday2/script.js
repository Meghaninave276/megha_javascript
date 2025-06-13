class ATM{ //created class which name is Atm.
    constructor(debit,pin,balance)//created a constructor with three parameter which are debit,pin,balance.
    {
        this.debit=debit; //created a global variable with this keyword which name is debit.

        this.pin=pin;//created a global variable with this keyword which name is pin.
        this.balance=balance;//created a global variable with this keyword which name is balance.
    }
 setpin(pin)//crerated a setpin  method with a parameter which name is pin
 {//created a open curly braces to write a code in setpin method
    this.pin=pin;//created a global variable with this keyword which name is pin.
    if(this.pin=pin)//created a if condition which is this.pin == pin.

    { // created a open curly braces.

        alert("your pin is created successfully");//created a alert function to show the message.

    } // created a close curly braces.
    else // created a else condition.
    {
        alert("your pin is not created successfully");//created a alert function to show the message.
    }

 }//created a close curly braces because setpin method code is completed.

 deposite(debit,pin,balance)//created a deposite method with three parameter which names are debit,pin,balance
 {
    //created a open curly braces to write a code in deposite method
    // this.debit=debit;
    
  
    if(this.pin==pin)//created a if condition which is this.pin==pin.
    {
        //created a open curly brace to write a code.
        this.balance=this.balance+balance;//created a global variable with this keyword and in this add a balance .
        document.writeln("your balance is",this.balance);//created a document writelen function to show the balance.
        document.writeln("<br>");//created a document writelen function and in this we created a br tage to go to the next line.
    } //created a close curly brace because code is completed.
      else if(this.pin==undefined)//created a else if condition and condition is this.pin==undefined.
    {
         //created a open curly brace to write a code.
        alert("please enter a correct pin");//created a alert function to show the message.

    } //created a close curly brace because code is completed.

    else// created a else condition.
    {
        alert("wrong pin");
    }

 }//created a close curly braces because deposite method code is completed.
 checkbalance(debit,pin)//created a checkbalance method with two parameter which are debit and pin.
 { //created a open curly braces to write a code in checkbalance method.

      if(this.pin==pin)//created a if condition which is this.pin==pin.
    {//created a open curly brace to write a code.
        document.writeln("your balance is",this.balance);//created a document writelen function to show the balance.
        document.writeln("<br>");//created a document writelen function and in this we created a br tage to go to the next line.


    }//created a close curly brace because code is completed.
    else if(this.pin==undefined)//created a else if condition and condition is this.pin==undefined.
    
         
    {//created a open curly brace to write a code.
        alert("please enter a correct pin");//created a alert function to show the message.

    }//created a close curly brace because code is completed.
  
    
    else// created a else condition.
    {
        alert("wrong pin");
    }

 }//created a close curly braces because checkbalance method code is completed.
 withdrow(debit,pin,amount)//created a withdrow method with three parameter which are debit,pin,balance.
 {//created a open curly braces to write a code in checkbalance method.
    if(amount<this.balance)//created a if condition and condition is amount is less than to be this.balance.
    {//created a open curly brace to write a code.
        this.balance=this.balance-amount;//created a global variable with this keyword and in this minus a balance .
        document.writeln("your current balance is",this.balance);//created a document writelen function to show the balance.

    }//created a close curly brace because code is completed.
    else if(this.pin==undefined)//created a else if condition and condition is this.pin==undefined.
    {//created a open curly brace to write a code.

        alert("please enter a correct pin");//created a alert function to show the message.
    }//created a close curly brace because code is completed.
    else// created a else condition.
    {
           alert("wrong pin");
    }

 }//created a close curly braces because withdrow method code is completed.
 
}//created a close curly braces because ATM class code is completed.

const atm=new ATM("debit",4566,1000);//created a object with new keyword and add the debit, oin and balance value.
atm.setpin(4566);//created a atm object to add a pin in setpin method.
atm.deposite("debit",4566,100);//created a atm object to add a debit, pin, balance in deposite method.
atm.checkbalance("debit",4566);//created a atm object to add a debit, pin in checkbalance  method.
atm.withdrow("debit",4566,100);//created a atm object to add a debit, pin, balance in withdrow  method.
