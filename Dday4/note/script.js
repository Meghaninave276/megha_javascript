const input=document.querySelector("#input");
const btn=document.querySelector("#btn");
const output=document.querySelector("#output");


btn.addEventListener('click',()=>{
    const newtext = input.value;
    const span=document.createElement("span");
    span.textContent=newtext;
    output.appendChild(span);
    input.value=" ";


});


