let arr = [13,4,5,5,3,2];
const user = {
    name : "Rohit", //JS converts name into string automatically -> "name"
    "age" : 20,
    isheHuman : true,
    age : 67, // duplicate key , so in output we get age : 67 , Because JS updates it 
    "array" : arr, 
}
console.log(user);
let obj={};
console.log(typeof obj);
let obj2 = {
    name : "Jupiter",
}
console.log(obj2 instanceof Object);
console.table(user) // it tells if an obj2 is an object. (Note : arrays and functions are also objects)
