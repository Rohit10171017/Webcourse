console.log('Start'); //callstack

setTimeout(()=>{
    console.log("Setting TimeOut!"); //macro task
},0);

Promise.resolve().then(()=>{
    console.log("Promise Resolved"); //microtask
});

console.log("End"); //callstack


//priority -> callstack > microtask > macrotask