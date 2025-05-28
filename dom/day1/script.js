
let btn=document.getElementById("btn");
btn.addEventListener('click',()=>{
    let randomnum=Math.random()*16777216;
    let random=Math.floor(randomnum);
    let color=random.toString(16);
    btn.innerText =color;
    document.body.style.backgroundColor="#"+color;
    
   });