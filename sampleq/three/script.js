//Create a User class where the password should be private. Add methods to changePassword() and checkPassword().
class User{
    #password;
    constructor(password)
    {
        this.#password=password;
    }
  
    changePassword()
    {

      
        document.writeln("the changePassword is:",this.#password+"<br>");
    }
    checkPassword()
    {
        document.writeln("checkpassword is"+this.#password+"<br>");
    }

}
const u1=new User(123456);
u1.changePassword()
u1.checkPassword();
