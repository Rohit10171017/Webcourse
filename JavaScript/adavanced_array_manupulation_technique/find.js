//it is similar to the filer but only returns first matching element

let arr = [
    {
        name : "Rohit", age:20 
    }
    ,
    {
        name : "LOLLSL",age:50
    }
    ,
    {
        name : "Sun" ,age:445000000
    },
]

const f = arr.find((y) => y.age > 100000);

console.log(f);

console.log(f.age);

let arr2 = [3,5,6,7,9,10];

const firsteven = arr2.find( ele => ele % 2 === 0);

console.log(firsteven);