class movie//created a clsass which name is movie
{
    constructor(title,genre,realsedyear)//created a constructor with three parameter which are title,genre,realsedyear.
    {//created a open curly braces to write constructor code.
         this.title=title;//created a global variable with this keyword which is title.
        this.genre=genre;//created a global variable with this keyword which is genre.
        this.realsedyear=realsedyear;//created a global variable with this keyword which is realsedyear.


    }//created a close curly braces because constructor code is completed.


    access()//created a access method.
    {//created a open curly braces to write access method code.
       

        document.writeln("title is:"+this.title);//created a  document.writeln to show the title.
        document.writeln("<br>");//created a document.writeln function in this function we created a br tage to go to the next line.
        document.writeln("title is:"+this.genre);//created a  document.writeln to show the genre.
        document.writeln("<br>");//created a document.writeln function in this function we created a br tage to go to the next line.
        document.writeln("title is:"+this.realsedyear);//created a  document.writeln to show the realsedyear.
        document.writeln("<br>");//created a document.writeln function in this function we created a br tage to go to the next line.



    }//created a close curly braces because access method code is completed.
}

const movies=[//created a constant array which is movies.
    new movie("k3g","family",2000),//created a new instance movie to assign a value.
    new movie("animal","action",2023)
];

movies.forEach((movie)=>{//created a forach loop with anonymos function.
      document.writeln("<br>");//created a document.writeln function in this function we created a br tage to go to the next line.
    document.writeln("title is:"+movie.title);//created a  document.writeln to show the movie  title.
     document.writeln("<br>");//created a document.writeln function in this function we created a br tage to go to the next line.
     document.writeln("genre is:"+movie.genre);//created a  document.writeln to show the movie genre.
      document.writeln("<br>");//created a document.writeln function in this function we created a br tage to go to the next line.
      document.writeln("realsedyear is:"+movie.realsedyear);//created a  document.writeln to show the movies realsedyear.
       document.writeln("<br>");//created a document.writeln function in this function we created a br tage to go to the next line.
})