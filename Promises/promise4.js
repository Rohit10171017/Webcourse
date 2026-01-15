const p1 = Promise.resolve("P1:Resolution");

const p2 = new Promise((resolve) => {
    setTimeout(()=>{
        resolve("P2:Resolution");
    },4000);
})

const p3 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        reject("P4:Reject");
    },2000)
})

Promise.race([p1,p2,p3]).then(console.log).catch(console.log);

Promise.race([]).then(console.log).catch(console.error);