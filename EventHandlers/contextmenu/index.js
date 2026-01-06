let mydiv = document.querySelector(".my_div");
let list = document.querySelector("#list_id")
mydiv.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
    console.log(e);
    list.style.top = `${e.pageY}px`;
    list.style.left = `${e.pageX}px`;
    list.style.opacity = 1;
})