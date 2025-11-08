//Concat method
let str = "Rohit";
let str1 = "Subhas";
let str2 = "jadhav";
//ways to concat two or more strings
let concat1 = str+" "+str1+" "+str2;
let concat2 = str.concat(" ",str1," ",str2); //str.concat(str1).concat.(str2).concat(str3)...... we can do many
let concat3 = `${str} ${str1} ${str2}`;

console.log(concat1);
console.log(concat2);
console.log(concat3);