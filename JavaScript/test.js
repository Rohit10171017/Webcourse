function square(n)
{
    return n * n;
}

console.log(square(10));

let squa = (n) => n*n;

console.log(squa(4));

let greet = (name) =>"Hi " + name;


console.log(greet("Rohit"));

(function(){
    console.log("JS ROCKS!");
})();

console.log(typeof(function(){}))

let sum = 0 ;
let sumarr = (...n) =>{
    for(let i = 0 ; i < n.length;i++)
    {
        sum += n[i];
    }
    return sum;
}

console.log(sumarr(1,2,3,4,5,6))

let arr = ["Mars","Jupiter","Earth"]

let [,b,] = arr;

console.log(b);

const obj = {
    name : "Rohit",
    age : 20,
}

const {age} = obj;

console.log(age)

let a = [1,2];
let c = [3,4];

let d = a.concat(c);
console.log(d);

console.log(typeof NaN);

console.log("5"-2,"5"+2);

let x = [1,2,3,4,5]

x[10] = 10;

console.log(x.length);

console.log(x);