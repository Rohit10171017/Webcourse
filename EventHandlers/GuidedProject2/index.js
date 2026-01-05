let inp = document.getElementById("keyboard");
let ans = document.getElementById('ans');
let keypressed = document.getElementById("key-text");

inp.addEventListener('keyup',(e)=>{
    console.log("Key has beed pressend",e);
    ans.innerText = e.keyCode;
    keypressed.innerText = e.key;
})