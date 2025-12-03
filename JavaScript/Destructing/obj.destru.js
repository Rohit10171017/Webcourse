let obj = {
    name : "Rohit",
    age : 20,
    city : "Harrapan"
}

const {name,age,city:location} = obj; // here we changed property name from city to location

console.log(name,age,location);

const nested = {
    Energy : "Potential",
    Formula : {
        top : "mgh",
        low : "0",
    }
}

const {Energy,Formula:{top,low}} = nested;

console.log(Energy,top,low);