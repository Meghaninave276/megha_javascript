const inputbox=document.getElementById("input-box");
const btn=document.getElementById("add");
const input=document.getElementById("input");


const outputbox=document.getElementById("output-box");

let todos=["wake up 5am","reading book","breakfast"];

function displaytodos()
{
    outputbox.innerHTML=" ";
    todos.forEach((todo,index)=> {
        const div=document.createElement("div");
          const p=document.createElement("p");
            
          const deletebutton=document.createElement("button");
           
          div.className="d-flex justify-content-between my-3";
            
          deletebutton.className="btn btn-danger";
             
          p.textContent=todo;
             
          deletebutton.textContent="delete";
            
         
             
          div.appendChild(p);
             
           div.appendChild(deletebutton);
             
           outputbox.appendChild(div);

        
    
          
          })
}

btn.addEventListener('click',()=>{
   const newtext =  input.value;
   todos.push(newtext);
   displaytodos();


});
displaytodos();
