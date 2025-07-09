const tBody=document.getElementById("tBody");



function displaytodo(todos)
{
    tBody.innerHTML="";

  todos.forEach((todo)=>{
      const tr=document.createElement("tr");
    const td1=document.createElement("td");
    const td2=document.createElement("td");
    const td3=document.createElement("td");
    const td4=document.createElement("td");


    td1.textContent=todo.userId;
    tr.appendChild(td1);
      td2.textContent=todo.id;
    tr.appendChild(td2);
    td3.className="text-center"
      td3.textContent=todo.title;
    tr.appendChild(td3);
      td4.textContent=todo.completed;
    tr.appendChild(td4);

    tBody.appendChild(tr);

  })
}


function calltodo()
{
    fetch("https://jsonplaceholder.typicode.com/todos").then((Response)=>Response.json()).then(value=>{
        displaytodo(value);
    });
}
calltodo();
