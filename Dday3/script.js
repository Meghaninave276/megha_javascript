const mcqlist = [
  {
    "question": "Which planet is known as the Red Planet?",
    "options": {
      "a": "Earth",
      "b": "Mars",
      "c": "Jupiter",
      "d": "Venus"
    },
    "answer": "Mars"
  },
  {
    "question": "What is the currency of the United Kingdom?",
    "options": {
      "a": "Euro",
      "b": "Dollar",
      "c": "Pound Sterling",
      "d": "Franc"
    },
    "answer": "Pound Sterling"
  },
  {
    "question": "Who wrote the play 'Hamlet'?",
    "options": {
      "a": "Leo Tolstoy",
      "b": "William Shakespeare",
      "c": "Jane Austen",
      "d": "Mark Twain"
    },
    "answer": "William Shakespeare"
  },
  {
    "question": "Which gas do humans need to breathe to survive?",
    "options": {
      "a": "Oxygen",
      "b": "Carbon Dioxide",
      "c": "Nitrogen",
      "d": "Hydrogen"
    },
    "answer": "Oxygen"
  },
  {
    "question": "What is the capital city of Canada?",
    "options": {
      "a": "Toronto",
      "b": "Vancouver",
      "c": "Ottawa",
      "d": "Montreal"
    },
    "answer": "Ottawa"
  },
  {
    "question": "Which element has the chemical symbol 'Fe'?",
    "options": {
      "a": "Iron",
      "b": "Fluorine",
      "c": "Lead",
      "d": "Zinc"
    },
    "answer": "Iron"
  },
  {
    "question": "What is the largest ocean on Earth?",
    "options": {
      "a": "Indian Ocean",
      "b": "Atlantic Ocean",
      "c": "Arctic Ocean",
      "d": "Pacific Ocean"
    },
    "answer": "Pacific Ocean"
  },
  {
    "question": "Who was the first President of the United States?",
    "options": {
      "a": "Abraham Lincoln",
      "b": "Thomas Jefferson",
      "c": "George Washington",
      "d": "John Adams"
    },
    "answer": "George Washington"
  },
  {
    "question": "Which language is the most widely spoken in the world?",
    "options": {
      "a": "English",
      "b": "Mandarin Chinese",
      "c": "Spanish",
      "d": "Hindi"
    },
    "answer": "Mandarin Chinese"
  },
  {
    "question": "How many sides does a hexagon have?",
    "options": {
      "a": "Five",
      "b": "Six",
      "c": "Seven",
      "d": "Eight"
    },
    "answer": "Six"
  }
];
const answer=[
    "Mars",
    "Pound Sterling",
    "William Shakespeare",
    "Oxygen",
    "Ottawa",
    "Iron",
    "Pacific Ocean",
    "George Washington",
    "Mandarin Chinese",
    "Six"


];
const input=document.querySelectorAll(".form-check-input");
const options=document.querySelectorAll(".option");
const question=document.querySelector("#Question");
const btn=document.querySelector("#btn");
let cindex=0;
let show;
function quizquestions(index)


{
    question.textContent="Q"+(index+1)+" "+mcqlist[index].question
   options.forEach((option,i)=>{
    option.textContent=mcqlist[index].options[Object.keys(mcqlist[index].options)[i]];

   });


}
btn.addEventListener('click',()=>{
    cindex++;
    if(cindex<=10)
    {
        quizquestions(cindex);
    }
    else
    {
        cindex=0 ;
        quizquestions(cindex);   
    }


});
quizquestions(cindex);

