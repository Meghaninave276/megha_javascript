//reate a BankAccount class where balance is private. Add deposit(amount), withdraw(amount), and getBalance() methods. Try to access balance directly (it should not work).

class BankAccount
{
    #balance;
    constructor(balance)
    {
        this.#balance=balance;
    }

    deposit(amount)
    {
       
        this.#balance=this.#balance+amount;
          document.writeln("the amount  is:"+amount+"<br>");
        document.writeln("the current balance is:"+this.#balance+"<br>");
    }
     withdraw(amount)
    {
       
        this.#balance=this.#balance-amount;
          document.writeln("the amount  is:"+amount+"<br>");
        document.writeln("the current balance is:"+this.#balance+"<br>");
    }
    getgetBalance()
    {
         document.writeln("the current balance is:"+this.#balance+"<br>");

    }
}
const b1=new BankAccount(1500);
b1.deposit(1000);
b1.withdraw(500);
b1.getgetBalance();