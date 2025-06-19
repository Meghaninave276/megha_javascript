//Create a Bird class with a method makeSound(). Then create Sparrow and Parrot classes that override the makeSound() method with their unique sounds.


class Bird
{
    name;
    sound;
    constructor(name,sound)
    {
        this.name=name;
        this.sound=sound;
    }
    makeSound()
    {
        document.writeln("the name is:"+this.name+"<br>");
        document.writeln("the sound is:"+this.sound+"<br>");
    }

   
}
class Sparrow extends Bird
{
    constructor(name,sound)
    {
        super(name,sound);
    }
   
}
class Parrot extends Bird
{
    constructor(name,sound)
    {
        super(name,sound);
    }
}
const p1=new Parrot("parrot","mithumithu");
p1.makeSound();
const p2=new Sparrow("sparrow","chichi");
p2.makeSound();


