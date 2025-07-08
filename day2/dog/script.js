const image=document.getElementById("image");
const btn=document.getElementById("btn");


function dogapi()
{
    fetch("https://dog.ceo/api/breeds/image/random").then((Response)=>Response.json()).then((data)=>{
        image.src=data.message;

    });
}

btn.addEventListener('click',()=>{
    dogapi();

})
dogapi();