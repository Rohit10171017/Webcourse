// .slice() , this method extracts portion of an array keeping original array unchanged

//arr.slice(staring_index,ending_index) in the o/p portion ending index will be excluded

let arr = [1,2,3,5,2,90,56];

let portion = arr.slice(2,5);

console.log(portion); // we can see here that element at ending_index 5 which is 90 will be excluded in the o/p
                      
console.log(arr); // original array remains unchanged

let p2 = arr.slice(-4,-1);

console.log(p2);