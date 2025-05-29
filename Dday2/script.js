//insert
//upper
//lower
//words


const Add=document.getElementById("Add");
const preview=document.getElementById("preview");
const input=document.getElementById("input");
const upper=document.getElementById("upper");
const lower=document.getElementById("lower");
const words=document.getElementById("words");
const char=document.getElementById("char");
const read=document.getElementById("read");



Add.addEventListener('click',()=>{
    const newtext=input.value;
    preview.innerText=newtext;

});
upper.addEventListener('click',()=>{
    const newtext=input.value;
     preview.innerText=newtext.toUpperCase();



});
lower.addEventListener('click',()=>{
    const newtext=input.value;
     preview.innerText=newtext.toLowerCase();



});
words.addEventListener('click',()=>{
    const newtext=input.value;
   const array = newtext.split(" ");
    preview.innerText=array.length;

});
char.addEventListener('click',()=>{
     const newtext=input.value;
     preview.innerText=newtext.length;

});
read.addEventListener('click',()=>{
    const newtext=input.value;
   const array = newtext.split(" ");
    preview.innerText=array.length*0.25+"minute";

});




