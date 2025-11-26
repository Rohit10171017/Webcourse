let arr = [23,56,7,34,25,24];

let flag = arr.some(age=>age<18);

console.log(flag);

let arr2 = ["rohit","ehehh","fhhd","hifef"];

let flag2 = arr2.some(len => len.length > 5);

console.log(flag2);

let arr3 = [45,67,89, 43,80]

let flag3 = arr3.some(function(ele,idx,arr3){
    if(ele > 100) return true;
    else return false;
})

console.log(flag3);