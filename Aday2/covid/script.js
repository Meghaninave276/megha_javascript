const tBody = document.getElementById("tBody");


function covid19(covid)
{

    covid.data.regional.forEach((covids,index)=>{
        
        
        const tr=document.createElement("tr");
        
    const td1=document.createElement("td");
    const td2=document.createElement("td");
    const td3=document.createElement("td");
    const td4=document.createElement("td");
    const td5=document.createElement("td");
    const td6=document.createElement("td");
    const td7=document.createElement("td");
    const td8=document.createElement("td");

    td1.textContent=index+1;
    tr.appendChild(td1);
     td2.textContent=covids.loc;
    tr.appendChild(td2);
     td3.textContent=covids.confirmedCasesIndian;
    tr.appendChild(td3);
     td4.textContent=covids.confirmedCasesForeign;
    tr.appendChild(td4);
     td5.textContent=covids.discharged;
    tr.appendChild(td5);
     td6.textContent=covids.deaths;
    tr.appendChild(td6);
     td7.textContent=covids.totalConfirmed;
    tr.appendChild(td7);

    

  
    tBody.appendChild(tr);
    
   
        

    })
    
}
function callcovid()
{
    fetch("https://api.rootnet.in/covid19-in/stats/latest").then((Response)=>Response.json()).then((value)=>{
        covid19(value);
    });
}
callcovid();