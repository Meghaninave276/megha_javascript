//create a Person class that stores name and age. Make age private (use closure or #age) and provide methods to getAge() and setAge() safely.
class  Person
{
    #name;
    #age;
    constructor(name,age)
    {
       
    }
    setAge(name,age)

    {
        this.#name=name;
        this.#age=age;

    }
    getAge()
    {
          document.writeln("the name is:",this.#name+"<br>");

        document.writeln("the age is:",this.#age);

    }
}
const p1=new Person();
p1.setAge("megha",18);
p1.getAge();