const obj = {
    name : "i dont know",
    age : 0,
    occupation : "unemployed",
}

console.log(Object.keys(obj)); // it prints only keys in the form of an array 

console.log(Reflect.ownKeys(obj)); // it also prints keys in the form of an array 

console.log(Object.keys(obj).length); // prints no of keys in the object

let obj1 = Object.create({a:1,}); 
console.log(Object.keys(obj1));
obj1.b = 2;
console.log(Object.keys(obj1));