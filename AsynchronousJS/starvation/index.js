

// recursion with no base case
// this is never ending recursion , so starvation happens this means macrotasks dont get resources(macro tasks starve)
function promise()
{
    Promise.resolve().then(promise); //microtask queue
}

promise();

setTimeout(()=>{ //macrotask queue
    console.log("Print after 0.001 sec"); 
},1);

console.log("You will never see setTimeout exexute because of starvation caused by Promise");