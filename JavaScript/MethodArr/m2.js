let arr = [2,4,3,6,"true",false,"the goat messi"];

console.log(arr.join()); // default separator is a comma -> (,)
console.log(arr.join('-'));
console.log(arr.join('_'));
console.log(arr.join('🐐'));

console.log([1,,3].join('-'));