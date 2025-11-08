// trim method only removes whitespaces from starting and ending of the string
// it does not modify original string , original string str remains same
let str = " Boomerang Nebula The coldest place in the universe   ";
let trimstr = str.trim();
console.log(str); //original
console.log(trimstr); //trimstring
console.log(str.length); //original string length
console.log(trimstr.length); //trim string length
console.log(str.trim().length);//cool way
