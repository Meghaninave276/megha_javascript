//insert
//upper
//lower
//words
//character
//read time
const add=document.getElementById("Add");
const input=document.getElementById("input");
const preview=document.getElementById("preview");
const upper=document.getElementById("upper");
const lower=document.getElementById("lower");
const words=document.getElementById("words");
const char=document.getElementById("char");
const read = document.getElementById("read");
const clear = document.getElementById("clear");


add.addEventListener('click',()=>{
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
char.addEventListener('click',()=>{
     const newtext=input.value;
     preview.innerText="total char:"+newtext.length;

});
words.addEventListener('click',()=>{
    const newtext=input.value;
   const array= newtext.split(" ");
     preview.innerText="total words:"+array.length;

});
read.addEventListener('click',()=>{
 const newtext=input.value;
   const array= newtext.split(" ");
     preview.innerText="read time:"+array.length*0.25+"minute";
});
clear.addEventListener('click',()=>{
    input.value=" ";
    preview.innerText="";

});


