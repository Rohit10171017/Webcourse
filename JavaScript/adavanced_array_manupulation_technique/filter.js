let arr = ["apple","papaya","watermelon","cherry","pinapple"];

let filteredarray = arr.filter((fruit) => fruit.length > 7);

console.log(filteredarray);

let obj = [

    {
        name: "Mars" , 
        color: "red" ,
    },
    {
        name : "Pluto",
        color: "Brown",
    },
    {
        name : "Jupiter",
        color: "Unknown",
    }
]

let filterobj = obj.filter((planet,idx) => planet.name.length > 4);

console.log(filterobj);

for(let i=0;i<filterobj.length;i++)
{
    console.log(filterobj[i].name);
}
