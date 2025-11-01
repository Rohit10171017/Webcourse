//Approach 1
let obj1 = {
    name : "mARS",
    "AGE " : 50000000000000, // this comma is optional (last key-pair value comma)
}
console.log(obj1);
// if key stored in a variable
const keyname = "username";
let obj2 = {
    [keyname]:"Rohit", // square bracket to access the keyname stored inside variable 
    "age" : 20,
}
console.log(obj2);
//APPROACH 2
const obj = new Object();
obj.name = 'Universe';
obj.age = '13.8 Billion';
console.log(obj);

//approach 3

const obj3 = Object.create({name:"Rohit",age:20,})

console.log(obj3);

let obj4 = {
    "NAME":"Roman",
}
console.log(obj4.constructor === Object);

