// arr.delete()

let arr = [1,2,3,"rohit",73,5,false];
console.log(arr.length);
delete arr[2]; // it deletes element present at index 2 and leave the empty spot without changing size of an arrary
console.log(arr);
console.log(arr.length);

console.log(arr[2]); // o/p = undifined

console.log(arr.indexOf(3)); // deleted 3 from array so in output we get -1 othewise we would have got 2 which was index of 3