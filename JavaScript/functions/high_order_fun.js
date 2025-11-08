// this is also some what similar to the callback function
function greet(name,callback){
    console.log(name);
    callback();
}
// here greet() is a high order function and hello() is a callback function
function hello(){
    console.log("Hi"); 
}

greet("Rohit",hello);

setTimeout(function(){ console.log("Execute after 5 secs");},5000);
// here setTimeout() is a high order function and function() is a callback function