class book//created class which name is book.
{//created a open curly braces to write book class code.
    constructor(title,author,publishedyear)//created a constructor method with three parameter which are title,author,publishedyear.
    {//created a open curly braces to write constructor method code.
        this.title=title;//created a global variable to assign value to local variable which is title.
        this.author=author;//created a global variable to assign value to local variable which is author.
        this.publishedyear=publishedyear;//created a global variable to assign value to local variable which is publishedyear.
    }//created a close curly braces because constructor method code is completed.

    access()//created a access method.
    {//created a open curly braces to write access method code.
        

        document.writeln("title is:",this.title);//created a document.writeln function to show the title.
        document.writeln("<br>");//created a document.writeln function and in this function we create br tag to go to the next line.
        document.writeln("title is:",this.author);//created a document.writeln function to show the author.
        document.writeln("<br>");//created a document.writeln function and in this function we create br tag to go to the next line.
        document.writeln("title is:",this.publishedyear);//created a document.writeln function to show the publishedyear.
        document.writeln("<br>");//created a document.writeln function and in this function we create br tag to go to the next line.

    }//created a close curly braces beacuse access method code is completed.



}//created a close curly braces because book class code is completed.
const books=[//created a constant array.
    new book("rich dad poor dad","Robert T. Kiyosaki",1997),//created a new instance to assign a value
    new book("Ek Samandar, Mere Andar",	"Sanjeev Joshi",2024),
    new book("The World: A Family History","British historian Simon Sebag Montefiore",2023),
    new book("The Little Book of Encouragement","Dalai Lama",2021),
    new book("Braille Edition of Exam Warriors","Prime Minister Narendra Modi",2019)
];

books.forEach((book)=>{//created a foreach loop
    document.writeln("<br>");//created a document.writeln function and in this function we create br tag to go to the next line.
     document.writeln("title is:",book.title);//created a document.writeln function to show the title.
        document.writeln("<br>");//created a document.writeln function and in this function we create br tag to go to the next line.
        document.writeln("title is:",book.author);//created a document.writeln function to show the author.
        document.writeln("<br>");//created a document.writeln function and in this function we create br tag to go to the next line.
        document.writeln("title is:",book.publishedyear);//created a document.writeln function to show the publishedyear.
        document.writeln("<br>");//created a document.writeln function and in this function we create br tag to go to the next line.


})