let a=parseInt(prompt("enter a number"));
const p=$("#p");


let i=1;



setInterval(()=>{
    if(i<=a)
    {
        p.text(i);
        i++;

    }


},1000);