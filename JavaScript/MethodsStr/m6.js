//Sub String 

let str = "HelloBlackHole!";
let str1 = str.substring(0,5); 
console.log(str1);
console.log(str.substr(0,5)); //it's showing strikethrough because,ECMAScript standards no longer recommends it 
console.log(str.slice(0,5));  //substr() can be removed in the future so VS code is giving warning 
console.log(str.substring(20));// instead its better to use slice() or substring()