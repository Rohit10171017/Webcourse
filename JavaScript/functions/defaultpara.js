function letsgo(Default = "YOOO"){
    console.log(`${Default} lets go`);
}

letsgo("Bro"); // if we dont pass any value then default value "Yoo" will be used 

function multiply(a,b=2)
{
    return a*b;
}

console.log(multiply(3)); //output will be 3*2
console.log(multiply(90,6)) //output will be 90*6