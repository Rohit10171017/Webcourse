let image = document.querySelector("#img");

const showimg =() =>{
image.src = "/images/space1.png";
image.style.cssText = "width : 100px; height : 100px;";
}

const hideimg = () =>{
    image.style.display = "none";
}