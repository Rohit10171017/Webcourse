let num = 9.5;
console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));
console.log(0.1+0.2 === 0.3);
console.log(parseInt("42px"));
let maxSafe = Number.MAX_SAFE_INTEGER;
console.log(maxSafe+1 === maxSafe+2); //it ignores +1 and +2 not precise
let bigNum = 9007199254740991n;
console.log(bigNum + 2n === bigNum + 3n); //this is precise
let n = 9;
console.log(bigNum / BigInt(n)); //converting normal number to BigInt using BigInt()