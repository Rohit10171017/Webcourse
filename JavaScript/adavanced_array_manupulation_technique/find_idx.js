let arr = [ 2,4,5,2,3,8,6,4,9];

let idx = arr.findIndex(ele => ele === 90);
console.log(idx);

let arr2 = [
    {
        name : "Rohit",
        age : 20,
    },
    {
        name : "fjlerifje",
        age : 848,
    },
    {
        name : "ufhhfh",
        age : 567,
    },
    {
        name : "fjfjj",
        age : 778,
    }
]

const idx2 = arr2.findIndex((ele,i,arr2) => ele.age > 800);

console.log(idx2);
console.log(Object.keys(arr2[idx2]));