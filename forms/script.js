const email=document.getElementById("email");
const password=document.getElementById("password");
const login=document.getElementById("login");
const output=document.getElementById("output");



const emailr=/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
const passwordr = /^(?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])\S{6,}$/;



login.addEventListener('click',()=>{
   if (email.value === "" || password.value === "") {
        output.textContent = "enter the both fields";
        output.className="text-danger";
   }
   else if(emailr.test(email.value) && passwordr.test(password.value))
   {
    output.textContent = "Email and Password are valid";
    output.className="text-success";



   }
   else if(!emailr.test(email.value) && !passwordr.test(password.value))
   {
    output.textContent = "Email and Password are invalid";
    output.className="text-danger";



   }
   else if(!emailr.test(email.value))
   {
    output.textContent = "Email is invalid";
    output.className="text-danger";


   }
    else if(!passwordr.test(password.value))
   {
    output.textContent = "password is invalid";
    output.className="text-danger";


   }
});
