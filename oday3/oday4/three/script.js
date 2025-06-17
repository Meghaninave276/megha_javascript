class Animal
{
    constructor(name,sound)
    {
        this.name=name;
        this.sound=sound;
    }

    get()
    {
        document.writeln("the name is:"+this.name+"<br>");

    }
    make()
    {
        document.writeln("the sound is:",this.sound+"<br>");
    }
}
class dog extends Animal
{
    constructor(name,sound)
    {
        super(name,sound);

    }
}
class cat extends Animal
{
    constructor(name,sound)
    {
        super(name,sound);
    }
}
const d1=new dog("dog","bhobho");
const c1=new cat("cat","meow");

d1.get();
d1.make();
c1.get();
c1.make();

