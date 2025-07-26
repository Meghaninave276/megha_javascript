const input=document.getElementById("input");
const add=document.getElementById("add");
// const box1=document.getElementById("box1");
const box=document.getElementById("box");
const box2=document.getElementById("box2");
let addcountry=[];
let allCountries = [];

function fetchapi()
{
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,flags,currencies").then((Response)=>Response.json()).then((value)=>{
    allCountries = value;
    
      const stored = JSON.parse(localStorage.getItem("favorites")) || [];
     
      addcountry = allCountries.filter((country) =>
        stored.includes(country.name.common)
      );
      addc(); // render favs

      displayapi(allCountries);


    });
}


//    <img src="https://flagcdn.com/w320/km.png" alt="">
//             <h1>country</h1>
//             <h2>capital</h2>


function displayapi(countries)
{
    countries.forEach((f)=>{

        const box3=document.createElement("div");
        box3.className="box3";

        const image=document.createElement("img");
        image.src=f.flags.png;
        box3.appendChild(image);

        const h1=document.createElement("h1");
        h1.textContent=f.name.common;
        box3.appendChild(h1);

        const h2=document.createElement("h2");
       h2.textContent = f.capital?.[0] || "N/A";
        box3.appendChild(h2);

        const button=document.createElement("button");
        button.textContent="Favourite";
       
      
        button.className="w-100 btn btn-primary";
        button.addEventListener("click", () => {
            fa(f);
            displayapi(f);
        });
        box3.appendChild(button);

        box.appendChild(box3);
       
        // box1.appendChild(box3);





    })
     
        


}
function fa(f) {
   addcountry.push(f);
   updateLocalStorage();
   addc();
}

function da(index)
{
    addcountry.splice(index,1);
    updateLocalStorage();
    addc();
}

 function addc() {
      box2.innerHTML = "<h2>Favourites</h2>";
      addcountry.forEach((e,index) => {
        const box5 = document.createElement("div");
        box5.className = "box3";

        const image = document.createElement("img");
        image.src = e.flags.png;
        box5.appendChild(image);

        const h1 = document.createElement("h1");
        h1.textContent = e.name.common;
        box5.appendChild(h1);

        const h2 = document.createElement("h2");
        h2.textContent = e.capital?.[0] || "N/A";
        box5.appendChild(h2);

        const button=document.createElement("button");
        button.textContent="Remove";
        button.className="w-100 btn btn-danger";
        button.addEventListener('click',()=>{
            da(index);
        })
        box5.appendChild(button);

        box2.appendChild(box5);
      });
    }
add.addEventListener('click', () => {
  const searchValue = input.value.toLowerCase();

  const cards = box.querySelectorAll(".box3");
  cards.forEach((card) => {
    const countryName = card.querySelector("h1").textContent.toLowerCase();
    if (countryName.includes(searchValue)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});


function updateLocalStorage() {
  const names = addcountry.map((c) => c.name.common);
  localStorage.setItem("favorites", JSON.stringify(names));
}


add.addEventListener("click", () => {
  const searchValue = input.value.toLowerCase();
  const filtered = allCountries.filter((country) =>
    country.name.common.toLowerCase().includes(searchValue)
  );
  displayapi(filtered);
});


fetchapi();









