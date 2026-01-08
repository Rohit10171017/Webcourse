let count = 1;

let id = setInterval(()=>{
    console.log("Warmhole");
    count++;
    if(count == 6) clearInterval(id);
},2000)