const card=document.getElementsByClassName("card");
const img=document.getElementById("img");
const next=document.getElementById("next");
const previous=document.getElementById("previous");
const auto=document.getElementById("auto");
const stop=document.getElementById("stop");


const images=[
    "https://www.pixelstalk.net/wp-content/uploads/2016/06/Nature-Wallpaper.jpg",
    "https://wallpapercave.com/wp/uUqxVHp.jpg",
    "http://eskipaper.com/images/nature-27.jpg",
    "https://static.vecteezy.com/system/resources/previews/032/242/170/large_2x/beautiful-waterfall-flowers-water-nature-waterfall-hd-wallpaper-ai-generated-free-photo.jpg",
    "https://as2.ftcdn.net/v2/jpg/05/47/97/81/1000_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg",
    "http://wallpapercave.com/wp/dvbKFz3.jpg",
    "http://thewowstyle.com/wp-content/uploads/2015/01/nature-wallpaper-latest-190.jpg",
    "http://wallpup.com/wp-content/uploads/2013/02/Awesome-Nature-Wallpaper.jpg",
    "http://www.pixelstalk.net/wp-content/uploads/2016/07/3D-HD-Nature-Images-Free-Download-1.jpg",
    "http://4.bp.blogspot.com/-s7KrC4Vio_s/UAkCZ4KDUII/AAAAAAAACtw/bXYxmLo3jq8/s1600/mountan-reflection-on-lake-nature-background.jpg",


];

let index=0;
let id;

function showimage()
{
    img.src=images[index];
}
showimage(index);


function Nextimage()
{
    if(index<images.length-1)
    {
        index++;
    }
    else
    {
        index=0;
    }
    showimage(index);


}

function previousimage()
{
    if(index>0)
    {
        index--;

    }
     showimage(index);

}

function autoplayimage()
{
    id= setInterval(()=>{
        Nextimage();

    },2000)
}

function stopimage()
{

    clearInterval(id);

}

next.addEventListener('click',()=>
{
    Nextimage();
});
previous.addEventListener('click',()=>
{
    previousimage();
});
auto.addEventListener('click',()=>
{
    autoplayimage();
});
stop.addEventListener('click',()=>
{
    stopimage();
});
