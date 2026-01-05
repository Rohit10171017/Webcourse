let inp = document.querySelector("#keyinp");
let keydisp = document.querySelector("#key-entered");
let keycode = document.querySelector("#key-code");

inp.addEventListener("keyup",(e)=>{
    keydisp.innerText = `Key-Entered : ${e.key}`
    keycode.innerText = `Key-Code : ${e.code}`;
})