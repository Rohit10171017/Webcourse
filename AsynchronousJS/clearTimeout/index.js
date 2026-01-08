console.log("start");
const id = setTimeout(()=>{
    console.log("This will be exected after 4 second");
},4000);

clearTimeout(id);