let btn=document.getElementById("btn");
btn.addEventListener('click',()=>{
    let rnum=Math.random()*16777216;
    let r=Math.floor(rnum);
    let color=r.toString(16);
    console.log(color);
    btn.textContent=color;
    document.body.style.backgroundColor="#"+color;

});
let copy=document.getElementById("copy");
copy.addEventListener('click',()=>{
    let colorcode=btn.textContent;
    navigator.clipboard.writeText(colorcode)
    .then(()=>{
        alert("colorcode copy"+colorcode);
    })
    .catch(err=>
    {
        console.error("failed to copy",err);
    }
    );


});
//2a3d50
//5a5799


