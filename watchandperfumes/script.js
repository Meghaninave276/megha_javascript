const productlist = [
    {
      "title": "Rolex Submariner",
      "image": "https://i.pinimg.com/736x/bf/fb/6e/bffb6e02c41ec1948e2cdeb1699cb41e.jpg",
      "description": "Luxury diving watch with iconic black bezel and automatic movement.",
      "price": 9500
    },
    {
      "title": "Omega Seamaster",
      "image": "https://i.pinimg.com/736x/a0/0d/d7/a00dd7242886ccd068abc9ccf213a561.jpg",
      "description": "Swiss-made diving watch with chronometer certification.",
      "price": 4800
    },
    {
      "title": "Casio G-Shock GA-2100",
      "image": "https://i.pinimg.com/736x/31/44/e2/3144e2c152953306c2e8703669462da7.jpg",
      "description": "Rugged digital-analog watch with carbon core guard.",
      "price": 120
    },
    {
      "title": "Fossil Grant ",
      "image": "https://i.pinimg.com/736x/d4/9b/60/d49b601eeec2734bc2a58309c8be6e8b.jpg",
      "description": "Leather strap watch with Roman numeral dial and subdials.",
      "price": 135
    },
    {
      "title": "Apple Watch Series 9",
      "image": "https://i.pinimg.com/736x/64/f6/d7/64f6d73f4630a4aa5df64bcd48001379.jpg",
      "description": "Smartwatch with GPS, fitness tracking, and Retina display.",
      "price": 399
    },
    {
      "title": "Tag Heuer Carrera",
      "image": "https://i.pinimg.com/736x/19/a4/78/19a47849338cb53c618d84d7db096ef0.jpg",
      "description": "Elegant sports chronograph for racing enthusiasts.",
      "price": 3200
    },
    {
      "title": "Seiko 5 Sports",
      "image": "https://i.pinimg.com/736x/a3/26/b7/a326b77bb819a331dbe8fe7c2fc9ae54.jpg",
      "description": "Automatic mechanical watch with classic stainless steel design.",
      "price": 220
    },
    {
      "title": "Tissot Gentleman",
      "image": "https://i.pinimg.com/736x/03/82/31/038231633c6e5126622513fbdd749f92.jpg",
      "description": "Swiss elegance with Powermatic 80 movement.",
      "price": 700
    },
    {
      "title": "Garmin Forerunner 255",
      "image": "https://i.pinimg.com/736x/f3/3a/26/f33a2691d8627e7f67a44793fb93b738.jpg",
      "description": "GPS running smartwatch with heart-rate tracking.",
      "price": 350
    },
    {
      "title": "Daniel Wellington ",
      "image": "https://i.pinimg.com/736x/37/0d/ea/370dea1058ddc654c491425f3bf898a6.jpg",
      "description": "Minimalist design with a thin case and black dial.",
      "price": 179
    },
     {
    "title": "Citizen Eco-Drive",
    "image": "https://i.pinimg.com/736x/0d/d8/bf/0dd8bfa2f991f8a498103c37c037c6f8.jpg",
    "description": "Solar-powered watch with perpetual calendar.",
    "price": 275
  },
    {
      "title": "Chanel No. 5",
      "image": "https://i.pinimg.com/736x/99/fb/f8/99fbf8f68992143b1dad28f92c3d7cad.jpg",
      "description": "Timeless floral fragrance for women with a powdery finish.",
      "price": 120
    },
    {
      "title": "Dior Sauvage",
      "image": "https://i.pinimg.com/736x/92/df/c2/92dfc2d97e3533295cd516fc2fdd6aaa.jpg",
      "description": "Fresh and bold masculine scent with bergamot and amberwood.",
      "price": 99
    },
    {
      "title": "Versace Eros",
      "image": "https://i.pinimg.com/736x/5a/2c/ea/5a2cea57e213280d06d56c8dc854b647.jpg",
      "description": "Seductive perfume with mint, lemon zest, and tonka bean.",
      "price": 85
    },
    {
      "title": "Gucci Bloom",
      "image": "https://i.pinimg.com/736x/00/49/f5/0049f51d5eef61581e7f7de2a423e6b1.jpg",
      "description": "Floral fragrance with jasmine and tuberose notes.",
      "price": 110
    },
    {
      "title": "Tom Ford Black Orchid",
      "image": "https://i.pinimg.com/736x/0e/bd/af/0ebdafd3fc336526643a831816008322.jpg",
      "description": "Luxury fragrance with rich dark accords and spices.",
      "price": 135
    },
    {
      "title": "Armani Acqua di Gio",
      "image": "https://i.pinimg.com/736x/10/67/23/106723081234ca659f49bee1dd24d5c5.jpg",
      "description": "Fresh aquatic scent for men with citrus and rosemary.",
      "price": 95
    },
    {
      "title": "Calvin Klein Euphoria",
      "image": "https://i.pinimg.com/736x/2b/67/ff/2b67ffce2dc94c72549b00191244f4f1.jpg",
      "description": "Exotic fruity floral fragrance for women.",
      "price": 89
    },
    {
      "title": "Burberry Her",
      "image": "https://i.pinimg.com/736x/9e/55/f2/9e55f2a0f6d16c440b925387d25cbbc0.jpg",
      "description": "Sweet and fruity scent with red berries and jasmine.",
      "price": 105
    },
    {
      "title": "Carolina Herrera 212",
      "image": "https://i.pinimg.com/736x/ab/43/95/ab4395e9f22e1cb32c3f3661c0112b51.jpg",
      "description": "Fresh woody fragrance with citrus and musk.",
      "price": 79
    },
    {
      "title": "Mont Blanc Legend",
      "image": "https://i.pinimg.com/736x/64/87/95/64879588951eb0a3daac89a8f76aa4c2.jpg",
      "description": "Aromatic scent with pineapple, bergamot, and sandalwood.",
      "price": 88
    }
  
  ];
  






  const productbox=document.querySelector(".product-box");
  let cartlist=[];

function productdisplay()
{

  productlist.forEach((product)=>{
      
const productive=document.createElement("div");
productive.className="productive ";

const image=document.createElement("img");
image.src=product.image;
const text=document.createElement("div");
const h4=document.createElement("h4");
h4.className="text-center mt-3"
h4.textContent=product.title;
const p=document.createElement("p");
p.textContent=product.description;
p.className="text-center"
const h3=document.createElement("h3");
h3.textContent="$"+product.price;

h3.className="text-center "
const btn=document.createElement("div");
btn.className="btn ms-5";
const cart=document.createElement("button");
cart.textContent="Add to cart";
cart.className="bg-primary d-grid gap-2 border-0 px-5 py-2 rounded-pill"
cart.addEventListener('click',()=>{
  
  addtocart(product);
  cartdisplay();
})


productive.appendChild(image);

text.appendChild(h4);

text.appendChild(p);
text.appendChild(h3);
productive.appendChild(text);
btn.appendChild(cart);
productive.appendChild(btn);
productbox.appendChild(productive);


})
}



  const cartbox=document.querySelector(".cartbox");

 
 

  // <div class="totals d-flex justify-content-between ms-3 me-3 " >
  //       <h4></h4>
  //       <h4></h4>

  //     </div>
  //     <div class="shipping  d-flex justify-content-between ms-3 me-3 mt-2">
  //       <h4>Shipping</h4>
  //       <h4>52</h4>
  //     </div>
  //     <div class="tax d-flex justify-content-between ms-3 me-3 mt-2 ">
  //       <h4>tax</h4>
  //       <h4>52</h4>
  //     </div>
    
  //      <div class="total d-flex justify-content-between ms-3 me-3 mt-2">
  //       <h4>total</h4>
  //       <h4>52</h4>
  //     </div>
  //     <div class="buy d-grid gap-2 ms-3 me-3 mt-2 mb-">
  //       <button class="btn btn-success "> Buy now</button>
  //     </div>

  const bill=document.querySelector(".bill");
  const subtotal=document.querySelector(".subtotal");
  const shipping=document.querySelector(".shipping");
  const tax=document.querySelector(".tax");
  const Atotal=document.querySelector(".Atotal")


  function cartdisplay()
  {
    cartbox.innerHTML="";
   let total=0;
    cartlist.forEach((carts,index)=>{
     const cartdetail=document.createElement("div");
  cartdetail.className="cartdetail  shadow-lg p-3 mt-3 mb-3"


  const image=document.createElement("img");
  image.src=carts.image;
  cartdetail.appendChild(image);

  const text=document.createElement("div");
  text.className="text";
  const h4=document.createElement("h4");
  h4.textContent=carts.title;
  h4.className="mt-3"
  const p=document.createElement("p");
  p.textContent=carts.description;
  p.className="mt-3"
const h5=document.createElement("h5");
h5.textContent="$"+carts.price;
  text.appendChild(h4);
  text.appendChild(p);
  text.appendChild(h5);
  cartdetail.appendChild(text);

  const button=document.createElement("div");
  button.className="button";
  const deletebtn=document.createElement("button");
  deletebtn.textContent="Delete";
  deletebtn.className="btn bg-danger px-3 mt-2 rounded-pill";
  deletebtn.addEventListener('click',()=>{
    deletecart(index);
    cartdisplay();
  })

  button.appendChild(deletebtn);
  cartdetail.appendChild(button);
  cartbox.appendChild(cartdetail);
    total=total+carts.price;

    
   


  
  })
  subtotal.textContent="$"+total.toFixed(2);
  taxvalue=total*(5/100);
  shippingvalue=2;
  shipping.textContent="$"+shippingvalue.toFixed(2);

  tax.textContent="$"+taxvalue.toFixed(2);
  Atotal.textContent="$"+(total+shippingvalue+taxvalue).toFixed(2);

   
 




 
  
  }



  function addtocart(product)
  {
    cartlist.push(product);
    // localStorage.setItem("cart",JSON.stringify(cartlist));
    cartdisplay();
    
 
    
    
 

  }

  function deletecart(index)
  {
    cartlist.splice(index,1);
    //  localStorage.setItem("cart",JSON.stringify(cartlist));
    cartdisplay();
  }
  productdisplay();
  cartdisplay();



 









