let inpname = document.getElementById("name");
let gen = document.querySelectorAll(".gen");
inpname.addEventListener('change' ,()=>{
   alert(inpname.value);
})

gen.forEach((ele) =>{
    ele.addEventListener('change',()=>{
        console.log(ele.value);
    })
})