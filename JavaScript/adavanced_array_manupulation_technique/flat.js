let arr = [1,3,[2,5],6,7,[1,2,[2,3,[5,6]]]];

let flatarray = arr.flat();  

console.log(flatarray);

console.log(1/0);

/* 
default value of flat is 1 => its removes one level of nesting
we can give depth value manually depending upon depth of the nested array's 
like in the above example depth is 3 
*/