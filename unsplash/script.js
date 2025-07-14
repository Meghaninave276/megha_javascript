
    const input = document.getElementById("input");
    const add = document.getElementById("add");
    const card=document.getElementById("card");
    const box=document.getElementById("box")
    const image = document.getElementById("image");
    





    function callnature(searchengine) {
      fetch(`https://api.unsplash.com/search/photos?query=${searchengine}&per_page=10&client_id=X0l3qWkHa68qWIFgDnUL1rL0XJW8LLN4f4KknMP1bzM`)

        .then((response) => response.json())
        .then((value) => {
          
          
          value.results.map((value)=>{
            input.innerHTML="";

            const image=document.createElement("img");
           

            image.src=value.urls.small;

            box.appendChild(image);
            card.appendChild(box);

          })
         
        });
    }

    add.addEventListener("click", () => {
      const searchengine = input.value;
      callnature(searchengine);
    });



   

