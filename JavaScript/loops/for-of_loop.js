const arr=[32,32,45,43,434,344,26];
for(const value of arr)
{
    console.log(value);
}

// Note : we cannot use for of loop to access values of objects , it gives error
// Solution : We can convert obj into 2D array using Object.entries(objectname) in which is array contains key and value at index 0,1 respectively .

const obj={
    name : "rohit",
    middlename : "subhas",
    lastname : "jadhav",
    age : 20,
    occupation :"student",
}

let array = Object.entries(obj); // makes 2D array 
console.log(array);

for(const value of Object.entries(obj)) // value is an array 
{
    console.log(value[1]);
}
