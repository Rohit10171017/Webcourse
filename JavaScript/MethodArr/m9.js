// splice() method
//Note : The splice() method allows us to modify an original array by removing or adding elements

let arr = [1,2,6,2,3,90,45,34];
//removing
arr.splice(3,4); // it also returns removed elements in the form of array 

console.log(arr); // we can see here the original array is changed

let array = ["apple","banana","cherry"];
// adding
array.splice(2,0,"pinapple","papaya"); // here 2 indicates starting index and 0 indicates no of elements to delete
//and "pinapple" ,"papaya" are new elements which I want to add to an array 

console.log(array);

//replacing
let removed = array.splice(2,2,"WaterMelon","Pomogranade"); // it also returns removed elements in form og array

console.log(array); // we can see the replacement in o/p

console.log(removed);