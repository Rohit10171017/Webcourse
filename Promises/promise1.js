let success = false; //consuming promise
let promise = new Promise((resolve ,reject) =>{
    if(success) resolve("Done");
    else reject("Error");
})


promise.then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log(err);
})

