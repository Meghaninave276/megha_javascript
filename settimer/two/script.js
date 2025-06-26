const box=$(".box");
const d=$("#d");
const t=$("#t");
let date=new Date();
const months=["jan","feb","march","april","may","june","july","august","september","october","november","december"];

setInterval(()=>{
    d.text(date.getDate()+"/"+months[date.getMonth()]+"/"+date.getFullYear());
    t.text(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
    date=new Date();

},1000);