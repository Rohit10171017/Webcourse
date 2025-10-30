let a = 90;
let b = 45;
let c = 1;
let d = "1";
console.log(c == d); //even though c is int and d is string it gives o/p as true 
console.log(c === d); //strictly equal -> its gives false 
console.log(a >= b);
console.log(a <= b);
console.log(c != d); ;// this doesn't care about datatype so it gives o/p as false
console.log(c !== d);// this care about datatype so it gives o/p as true