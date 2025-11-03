const obj={
    name : "rohit",
    middlename : "subhas",
    lastname : "jadhav",
    age : 20,
    occupation :"student",
}
for(let key in obj)
{
    // console.log(key) prints only key or property
    console.log(obj[key]); //ptints only value corresponding to the key
}

let arr=[1,2,3,4,5,6,3,4,9];
for(let key in arr)
{
    // console.log(key); prints indices
    console.log(arr[key]); // prints value stored at that index
}