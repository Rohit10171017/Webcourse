function fetchdata(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve("Step 1 : Fetched Data");
        },1000);
    });
}

function transferData(data)
{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(`Step 2 : Transfered ${data}`);
        },1000);
    })
}

function finalData(data)
{
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(`Step 3 : Final ${data}`);
        },1000);
    })
}

// fetchdata().then((data)=>{
//     console.log(data);
//     return transferData(data);
// }).then((data)=>{
//     console.log(data);
//     return finalData(data);
// }).then((data)=>{
//     console.log(data);
// }).catch(console.error);

fetchdata().then(transferData).then(finalData).then(console.log).catch(console.error).then(console.log); 

// Last then gets undefined because there is no return value from previous then