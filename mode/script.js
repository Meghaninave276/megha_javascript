const add=document.getElementById("add");
let mode=localStorage.getItem("theme");
let color;

add.addEventListener('click',()=>{
    if(mode)
    {
        document.body.style.backgroundColor="#EBD6FB";
        color="#687FE5";
        localStorage.setItem("theme","#687FE5");
    }
    else{
        
        document.body.style.backgroundColor="#687FE5";
        color="#EBD6FB";
         localStorage.setItem("theme","#EBD6FB");


    }
    mode=!mode;

    
})
