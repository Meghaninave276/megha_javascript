// create a class for Student with minimum 5 attributes, create 3
// defferent objects with meaning ful name, and set and get all
// information.
class student{
    name;
    age;
    grade;
    standard;
    school;
    students(name,age,grade,standard,school)
{

    this.name=name;
    this.age=age;
    this.grade=grade;
    this.standard=standard;
    this.school=school;


    document.writeln(this.name+"<br>");
    document.writeln(this.age+"<br>");
    document.writeln(this.grade+"<br>");
    document.writeln(this.standard+"<br>");
    document.writeln(this.school+"<br>");



}

}


const dhruvika=new student();
dhruvika.students("dhruvika",17,"A+","12th","vedant international school,","surat");
document.writeln("<br>");
const priya=new student();
priya.students("priya",18,"A","11th","sunrise vidhyalaya","surat");
document.writeln("<br>");
const anjali=new student();
anjali.students("anjali",18,"A","11th","sunrise vidhyalaya","surat");


