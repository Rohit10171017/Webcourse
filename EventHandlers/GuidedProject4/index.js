let pass = document.getElementById("pass");
let toggle = document.getElementById("check");

toggle.addEventListener('change',()=>{
    if(toggle.checked == true)
        pass.type = "text";
    else
        pass.type = "password";
})