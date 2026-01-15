const p1 = Promise.resolve("p1: Resolution");

const p2 = Promise.reject("p2:Rejection")

const p3 = new Promise((resovle) => {
    setTimeout(()=>{
        resovle("p3:Resolution");
    },5000);
});

//consuming a promise
Promise.allSettled([p1,p2,p3]).then((results) => {
    console.log(results);
})

Promise.allSettled([]).then(console.log); //passing empty array to promise