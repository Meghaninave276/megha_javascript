class ATM {
  constructor(debit, pin, balance) {
    this.debit = debit;
    this.pin = pin;
    this.balance = balance;
  }

  setpin(pin) {
    this.pin = pin;
    if (this.pin == pin) {
      alert("your pin is created successfully");
    } else {
      alert("your pin is not created successfully");
    }
  }

  deposite(debit, pin, balance) {
    if (this.pin == pin) {
      this.balance = this.balance + balance;

      document.writeln("your balance is ", this.balance);
      document.writeln("<br>");
    } else if (this.pin == undefined) {
      alert("enter your correct pin");
    } else {
      alert("wrong pin");
    }
  }
  checkbalance(debit, pin) {
    if (this.pin == pin) {
      document.writeln("your balance is  ", this.balance);
      document.writeln("<br>");
    } else if (this.pin == undefined) {
      alert("enter your correct pin");
    } else {
      alert("your pin is wrong");
    }
  }
  withdrow(debit, pin, balance, amount) {
    if (balance < this.balance) {
      this.balance = this.balance - balance;
      document.writeln("your current balance is", this.balance);
    } else if (this.pin == undefined) {
      alert("enter your correct pin");
    } else {
      alert("insufficient balance");
    }
  }
}

const atm = new ATM("visa", 4656, 1000);
atm.setpin(4656);

atm.checkbalance("debit", 4656);
atm.deposite("debit", 4656, 450);
atm.withdrow("debit", 4656, 500);
