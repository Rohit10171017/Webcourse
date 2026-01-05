let Epass = document.querySelector("#Epass");
let Cpass = document.querySelector("#Cpass");
let form = document.querySelector("#formId");
let msg = document.querySelector(".msg");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(Epass.value !== Cpass.value)
    {
        msg.innerText = "Password Missmatch ❌"
        msg.style.color = "red";
    }
    else
    {
        msg.innerText = "Password Match ✅"
        msg.style.color = "green";
    }
})

