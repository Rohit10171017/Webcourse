let btn = document.querySelector(".btn_click");

btn.addEventListener('mousedown',()=>{
    btn.style.backgroundColor = "red";
})

btn.addEventListener("mouseup",()=>{
    btn.style.backgroundColor = "green";
})