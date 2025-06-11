const inputtitle=document.getElementById("inputtitle");
const notes=document.getElementById("notes");
const btn=document.getElementById("btn");
// const h3=document.getElementById("h3");
// const preview=document.getElementById("preview");

const outputbox=document.getElementById("output-box");
// const card=document.getElementsByClassName("card");
// const cardbody=document.getElementsByClassName("card-body");

let note=[];
let titles=[];




function displaynotes()
{
   outputbox.innerHTML="";

   note.forEach((e,index)=>{

    // const div=document.createElement("div");
    // div.className="div bg-primary";
    const titleelement=document.createElement("h5");
    const p=document.createElement("p");
    const btndiv=document.createElement("div");
    
    const deletebutton=document.createElement("button");
    const editbutton=document.createElement("button");
   
    btndiv.className="d-flex gap-2"
     deletebutton.className="btn btn-danger";
     editbutton.className="btn btn-warning";

    const card=document.createElement("div");
    

    card.className="card shadow-lg mb-3 w-25 border border-secondary border-5 rounded-3 ";

    const cardbody=document.createElement("div");
    cardbody.className="card-body";


    titleelement.textContent=titles[index];
    p.textContent=e;
    deletebutton.textContent="delete"
    deletebutton.addEventListener('click',()=>{
      deletenote(index);
    });

    editbutton.textContent="edit";
    editbutton.addEventListener('click',()=>{
      editnote(index);
    });



    cardbody.appendChild(titleelement);
    card.appendChild(cardbody);
    outputbox.appendChild(card);

    cardbody.appendChild(p);
    card.appendChild(cardbody);
    outputbox.appendChild(card);
    

    btndiv.appendChild(deletebutton);
    cardbody.appendChild(btndiv);
    card.appendChild(cardbody);
    outputbox.appendChild(card);

    btndiv.appendChild(editbutton);
    cardbody.appendChild(btndiv);
    card.appendChild(cardbody);
    outputbox.appendChild(card);





     

   });
}


function deletenote(index)
{
  note.splice(index,1);
  titles.splice(index,1);
  displaynotes();
}
function editnote(index)
{
  inputtitle.value=note[index];
  notes.value=note[index];
  note.splice(index,1);
  titles.splice(index,1);
  displaynotes();
  
}




btn.addEventListener('click',()=>{
  titles.push(inputtitle.value);
  note.push(notes.value);
  inputtitle.value="";
  notes.value="";

  displaynotes();
});
