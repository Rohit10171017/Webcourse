let p1 = Promise.resolve("P1: Resolved");

let p2 = new Promise((resovle)=>{
    resovle("P2: Resolved");
})

let p3 = Promise.resolve("P3: Resovled");

let p4 = Promise.reject("P4: Rejected");

Promise.all([p1,p2,p3,p4]).then((results)=>(console.log(results))).catch(console.log);