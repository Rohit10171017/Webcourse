let time = 0;

setTimeout(() => {
    console.log("Printed after some time ")
},5000);

let intervalId = setInterval(()=>{
   if(time == 20) clearInterval(intervalId);
   time += 2;
},2000);

console.log(time)

Promise.resolve().then(()=>{
    console.log("Promise is a microtask");
})