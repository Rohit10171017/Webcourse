let bodtag = document.querySelector("#pagebody");
let btn = document.querySelector("#toggleId");
let currentMode = "light";

function toggle()
{
    if(currentMode === "light")
    {
    bodtag.style.backgroundColor = "black";
    btn.textContent = "light Mode";
    btn.classList.remove("light");
    btn.classList.add("dark");
    currentMode = "black";
    }
    else{
        btn.textContent = "Dark Mode"
        btn.classList.remove("dark");
        btn.classList.add("light");
        bodtag.style.backgroundColor = "white";
        currentMode = "light";
    }
}