const counter=document.getElementById("counter");
const btn=document.getElementById("btn");
let count=0;
btn.addEventListener('click',()=>{
    count++;
    const span=document.createElement("span");
    span.textContent=count;
    counter.appendChild(span);


});