let arr = [1,5,6,7,3,8,9,12,34,56,5,67,89,100];

arr.sort();

console.log(arr);

console.log(typeof arr[0]);

let arr2 = [1,5,6,7,3,8,9,12,34,56,5,67,89];

arr2.sort((a,b) => a-b);

console.log(arr2);

arr2.sort((a,b) => b-a);

console.log(arr2);