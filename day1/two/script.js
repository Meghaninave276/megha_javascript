// create a class for Car with minimum 5 attributes, create 3
// defferent objects with meaning ful name, and set and get all
// information.
class car{
    name;
    owner;
    company;
    color;
    year;

    cars(name,owner,company,color,year)
    {
        this.name=name;
        this.owner=owner;
        this.company=company;
        this.color=color;
        this.year=year;



        document.writeln(this.name+"<br>");
        document.writeln(this.owner+"<br>");
        document.writeln(this.company+"<br>");
        document.writeln(this.color+"<br>");
        document.writeln(this.year+"<br>");

    }
}


const kia= new car();
const creta=new car();
const seltos=new car();


kia.cars("kia seltos","Hyundai Motor Company","kia","black","2019");
document.writeln("<br>");
creta.cars("Hyundai Creta","Hyundai","creta","white","2022");
document.writeln("<br>");
seltos.cars("seltos","Hyundai Motor Company","kia","black",2023);




