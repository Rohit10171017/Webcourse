// difference between arr.join() and arr.toString() is arr.toString does not take any parameter
// here separator is always comma(,) we cannot change  it like we did in .join()
let arr = [1,2,3,"Hello!,Broski",true,'R'];

console.log(arr.toString());

let array = [1,2,3,[56,78],5];
 // here nested array also converted into string like "56,78" then it will be concated with other elements
let curious = array.toString();
console.log(curious);
console.log(array.toString());

console.log(arr);

for(let i=0;i<curious.length;i++)
{
    console.log(curious[i]);
}