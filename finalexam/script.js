const food = [
  {
    "title": "Spaghetti Carbonara",
    "cuisine": "Italian",
    "ingredients": [
      "200g spaghetti",
      "100g pancetta",
      "2 large eggs",
      "50g pecorino cheese",
      "50g parmesan cheese",
      "Black pepper",
      "Salt"
    ],
    "instructions": [
      "Cook spaghetti in boiling salted water until al dente.",
      "Fry pancetta until crispy.",
      "Beat eggs with pecorino and parmesan cheese, add black pepper.",
      "Drain spaghetti and mix quickly with pancetta and egg-cheese mixture off the heat.",
      "Serve immediately with extra cheese and pepper."
    ],
    "image": "https://i.pinimg.com/1200x/a2/26/07/a226076c1498919907ff9596acfb0874.jpg"
  },
  {
    "title": "Chicken Tikka Masala",
    "cuisine": "Indian",
    "ingredients": [
      "500g boneless chicken",
      "1 cup yogurt",
      "2 tbsp tikka masala paste",
      "1 onion",
      "2 tomatoes",
      "200ml cream",
      "Garlic",
      "Ginger",
      "Salt"
    ],
    "instructions": [
      "Marinate chicken in yogurt and tikka masala paste for at least 1 hour.",
      "Cook onions, garlic, and ginger until soft.",
      "Add tomatoes and simmer to make a sauce.",
      "Add chicken and cook until done.",
      "Stir in cream and heat through before serving."
    ],
    "image": "https://i.pinimg.com/1200x/c6/65/c7/c665c758a0b5d5a6a93db951d11124d1.jpg"
  },
  {
    "title": "Vegetable Stir Fry",
    "cuisine": "Asian",
    "ingredients": [
      "1 bell pepper",
      "1 carrot",
      "1 cup broccoli florets",
      "1 onion",
      "2 tbsp soy sauce",
      "1 tbsp sesame oil",
      "1 tsp garlic",
      "Salt"
    ],
    "instructions": [
      "Heat sesame oil in a pan.",
      "Add garlic and onion, sauté until fragrant.",
      "Add vegetables and stir fry on high heat.",
      "Add soy sauce and salt to taste.",
      "Cook until vegetables are tender but crisp."
    ],
    "image": "https://i.pinimg.com/1200x/a4/e6/bd/a4e6bd1bb8b2b8a8864d46cc2ce4e44b.jpg"
  },
  {
    "title": "Beef Tacos",
    "cuisine": "Mexican",
    "ingredients": [
      "500g ground beef",
      "1 onion",
      "1 packet taco seasoning",
      "8 taco shells",
      "Lettuce",
      "Cheddar cheese",
      "Tomato",
      "Sour cream"
    ],
    "instructions": [
      "Cook ground beef and chopped onion until beef is browned.",
      "Add taco seasoning and a bit of water, simmer until thickened.",
      "Warm taco shells.",
      "Fill shells with beef mixture, lettuce, cheese, tomato, and sour cream.",
      "Serve immediately."
    ],
    "image": "https://i.pinimg.com/736x/c0/72/28/c07228e668e84a21aa403c18e0dd4844.jpg"
  },
  {
    "title": "Classic Pancakes",
    "cuisine": "American",
    "ingredients": [
      "1 cup all-purpose flour",
      "2 tbsp sugar",
      "2 tsp baking powder",
      "1 cup milk",
      "1 egg",
      "2 tbsp melted butter",
      "Salt"
    ],
    "instructions": [
      "Mix flour, sugar, baking powder, and salt.",
      "In another bowl, whisk milk, egg, and melted butter.",
      "Combine wet and dry ingredients until smooth.",
      "Pour batter onto hot griddle or pan.",
      "Cook until bubbles form, flip, and cook until golden."
    ],
    "image": "https://i.pinimg.com/1200x/c5/2c/80/c52c80ec2d856e8313a89e141e36b20a.jpg"
  },
  {
    "title": "Margherita Pizza",
    "cuisine": "Italian",
    "ingredients": [
      "Pizza dough",
      "100g mozzarella cheese",
      "100ml tomato sauce",
      "Fresh basil leaves",
      "Olive oil",
      "Salt"
    ],
    "instructions": [
      "Roll out pizza dough.",
      "Spread tomato sauce evenly.",
      "Add mozzarella cheese and basil leaves.",
      "Drizzle olive oil and sprinkle salt.",
      "Bake in preheated oven at 220°C for 10-15 minutes."
    ],
    "image": "https://i.pinimg.com/736x/77/02/05/770205cde5298a6d5637b5e1d0d25447.jpg"
  },
  {
    "title": "Caesar Salad",
    "cuisine": "American",
    "ingredients": [
      "1 head romaine lettuce",
      "50g parmesan cheese",
      "Croutons",
      "Caesar dressing",
      "1 garlic clove",
      "Salt",
      "Black pepper"
    ],
    "instructions": [
      "Wash and chop romaine lettuce.",
      "Mix lettuce with Caesar dressing.",
      "Add croutons and grated parmesan cheese.",
      "Season with salt, pepper, and minced garlic if desired.",
      "Toss gently and serve."
    ],
    "image": "https://i.pinimg.com/736x/ec/29/77/ec29778102e2ace073e9d4db9d359f0d.jpg"
  },
  {
    "title": "Butter Chicken",
    "cuisine": "Indian",
    "ingredients": [
      "500g chicken",
      "3 tbsp butter",
      "1 onion",
      "1 cup tomato puree",
      "1/2 cup cream",
      "Spices (cumin, coriander, garam masala)",
      "Salt"
    ],
    "instructions": [
      "Cook onions in butter until soft.",
      "Add spices and tomato puree, simmer.",
      "Add chicken pieces and cook thoroughly.",
      "Stir in cream and cook for a few more minutes.",
      "Serve hot with rice or naan."
    ],
    "image": "https://i.pinimg.com/1200x/ca/f9/aa/caf9aae7199cd49d7bf0cc5275566900.jpg"
  },
  {
    "title": "Guacamole",
    "cuisine": "Mexican",
    "ingredients": [
      "2 ripe avocados",
      "1 tomato",
      "1/2 onion",
      "1 lime",
      "Salt",
      "Cilantro"
    ],
    "instructions": [
      "Mash avocados in a bowl.",
      "Chop tomato, onion, and cilantro finely.",
      "Mix into mashed avocados.",
      "Squeeze lime juice and add salt to taste.",
      "Serve fresh with chips or as a side."
    ],
    "image": "https://i.pinimg.com/1200x/6d/bf/d5/6dbfd5c501d29eabff2c7ab6523d34f6.jpg"
  },
  {
    "title": "Chocolate Chip Cookies",
    "cuisine": "American",
    "ingredients": [
      "1 cup butter",
      "1 cup sugar",
      "2 cups all-purpose flour",
      "2 eggs",
      "1 tsp vanilla extract",
      "1 tsp baking soda",
      "1 cup chocolate chips",
      "Salt"
    ],
    "instructions": [
      "Preheat oven to 175°C (350°F).",
      "Cream together butter and sugar.",
      "Beat in eggs and vanilla extract.",
      "Combine flour, baking soda, and salt; add to wet mixture.",
      "Stir in chocolate chips.",
      "Drop spoonfuls on baking sheet and bake for 8-10 minutes."
    ],
    "image": "https://i.pinimg.com/736x/e6/2c/c8/e62cc82ff64a5daadbfdcd9550b2f156.jpg"
  }
];





const input=document.getElementById("input");
const add=document.getElementById("add");


const main=document.getElementById("main");
let index=0;



function addRecipe(title)
{
     const f = food.find(f => f.title.toLowerCase()===title.toLowerCase());

    if(title)

      {
        const box=document.createElement("div");
      box.className="box";
      const images=document.createElement("img");
        images.src=f.image;
        box.appendChild(images);

         const h1=document.createElement("h1");
        h1.textContent="title:"+f.title;

        box.appendChild(h1);

        const p=document.createElement("p");
        p.textContent="ingredients:"+f.ingredients;
        p.className="fw-bold"

        box.appendChild(p);
           const ins=document.createElement("p");
        ins.textContent=+"instructions:"+f.instructions;
        ins.className="fw-bold"

        box.appendChild(ins);

          const cu=document.createElement("p");
        cu.textContent="cuisine:"+f.cuisine;
        cu.className="fw-bold"

        box.appendChild(cu);


        

        const buttons=document.createElement("div");
        buttons.className="btn d-flex gap-3";

        const delbtn=document.createElement("button");
        delbtn.className="btn btn-danger";
        delbtn.textContent="delete";
        delbtn.addEventListener('click',()=>{
       deleter(box);

        })
        const editbtn=document.createElement("button");
        editbtn.className="btn btn-warning";
        editbtn.textContent="editbtn";
        editbtn.addEventListener('click',()=>{
         const $box = $(editbtn).closest(".box");
        editRecipe($box);
        })

        buttons.appendChild(delbtn);
        buttons.appendChild(editbtn);

        box.appendChild(buttons);
        

        

        main.appendChild(box);



      }
    }
   
      

   


       

        




    



add.addEventListener('click',(e)=>{
  const newtext=input.value;
  addRecipe(newtext);

})
function deleter(e)
{
  e.remove();

}



















  
 
   
   
    

