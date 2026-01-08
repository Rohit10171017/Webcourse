console.log("Hey!");

setTimeout(()=>{
    console.log("Executed after 5 seconds");
},5000);

setTimeout(()=>{
    console.log("This executed after 2 seconds");
},2000);

console.log("Yoo");

for(let i = 0 ; i < 3 ; i++) // check once uing var instead of let (this will tell why let was introduced in JS )
{
    setTimeout(function(){
        console.log(i);
    },1000);
}