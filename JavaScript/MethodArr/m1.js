let arr = [1,3,4,"rohit",true];
console.log(arr.length);
let arr1 = [1,23,7,3];

arr[100] = 5;

console.log(arr.length); // o/p will be 101
let output = "";
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]); // inbetween 'true' and 5 all will be undefined
}

