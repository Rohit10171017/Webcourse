let obj = {
    name : "BlackHole",
    age : "7 Billion",
    mass : "5 MILLION TIMES THE MASS OF SUN",
    property : "CRAZY gravitational pull",
    radius : 5000000000000000000,
};

console.log(obj);

//Updating

obj.name = "Black Hole The Goat"

//Adding new key-value pair
obj.Gender = "N/A"; 

obj.AURA = 100000000000000000000;

obj.adress = {location : "Center of the Milky Way Galaxy",distance : 4000000}; //nested object

console.log(obj);

//Delete 
delete obj.Gender;
console.log(obj);

//duplicate
let obj1 = {
    name : "Rohit",
    name : "Subhas",
    name : "Jadhav",  //final vale overrides all the values in the case of same key 
}

obj1["name"] = "rohitjadhav"; // this is the another way of accessing the object
console.log(obj1); //in output we get name : "Jadhav"

console.log("name" in obj1); //checks if the property exists in the object