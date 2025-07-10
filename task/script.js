const input=document.getElementById("input");
const btn=document.getElementById("btn");
const boxone=document.getElementById("boxone");
const title=document.getElementById("title");

const country=document.getElementById("country");
const time=document.getElementById("time");
const cel=document.getElementById("cel");
const temp=document.getElementById("temp");
const feels=document.getElementById("feels");
const min=document.getElementById("min");
const boxtwo=document.getElementById("boxtwo");
const timezone=document.getElementById("timezone");
const huma=document.getElementById("huma");
const speed=document.getElementById("speed");
const desc=document.getElementById("desc");




function callweather(city)
{
    input.innerHTML="";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=846cbd2beb767612dcbea299b2057c19&units=metric`).then((Response)=>Response.json()).then((value)=>{
       country.textContent=value.name;
        time.textContent=new Date(value.dt*1000).toLocaleTimeString();
        temp.textContent="temp:"+value.main.temp+"°C";
        feels.textContent="feels like:"+value.main.feels_like;
       
        min.textContent="temp min:"+value.main.temp_min;
        timezone.textContent="Timezone:"+value.timezone;
        huma.textContent="humadity:"+value.main.humidity;
        speed.textContent="speed:"+value.wind.speed;
    });
}

btn.addEventListener('click',()=>{
    const city=input.value;
    callweather(city);
})