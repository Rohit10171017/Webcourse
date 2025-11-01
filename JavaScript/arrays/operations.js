let arr = [1,2,3,4,4,5,6,7,8];
arr.pop();
console.log(arr);
arr.push(8);
arr[4] = 30;
console.log(arr);
let removed = arr.pop();
console.log(removed);
let s = arr.shift(); // removes first element of an array 
console.log(s); 
let cut = arr.splice(2,4); // it removes total 4 array elemenst starting from index 2 
console.log(cut);
let part = arr.slice(1,3); // stores part of an array staring from index 1 to index 2 , we need to write +1 so its 3 in this scenario
console.log(part);
