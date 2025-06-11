// create class for ATM, with checkBalance, withdraw, deposit.


class ATM
{
    debit;
    pin;
    balance=1000;
    


    deposite(debit,pin,balance)
    {
        this.debit=debit;
        this.pin=pin;
        this.balance+=balance;

        document.writeln(this.balance,"<br>");

      
    
    }
    checkbalance(debit,pin)
    {
        this.debit=debit;
        this.pin=pin;
        document.writeln("your balance is ",this.balance,"<br>");

    }
   withdrow(debit,pin,balance){
    this.debit=debit;
        this.pin=pin;
        this.balance-=balance;

        document.writeln("your balance is now",this.balance,"<br>");




   }
        
    
}

const dindoli=new ATM();

dindoli.deposite("visa",5220,500);
dindoli.withdrow("visa",5220,500);
dindoli.checkbalance("visa",5220);


