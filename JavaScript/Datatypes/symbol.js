let sym1 = Symbol();
let sym2 = Symbol('test');
let sym3 = Symbol('test');
console.log(sym2 == sym3); // this tells us symbols are unique and immutable identifiers in js