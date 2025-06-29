const add=document.getElementById("add");
let mode;
let color;

add.addEventListener('click',()=>{
    if(mode)
    {
        document.body.style.backgroundColor="#EBD6FB";
        color="#687FE5";
    }
    else{
        
        document.body.style.backgroundColor="#687FE5";
        color="#EBD6FB";

    }
    mode=!mode;

    
})
