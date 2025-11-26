// find() returns first matching element but findLast() returns last matching element
let arr = [8,10,4,2,3,20,5,7,12,69,45];

const lastMatch = arr.findLast( ele => ele % 2 === 0);

console.log(lastMatch);