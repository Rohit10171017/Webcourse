console.log("Prints after every certain time interval");
let count = 0;

const id = setInterval(()=>{
    console.log("Hello BlackHole");
    count++;
    if(count == 6 ) clearInterval(id);
},2000);

