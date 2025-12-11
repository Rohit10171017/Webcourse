// Create a variable to store the inventory named inventory.
const inventory = [];
// Write a function to add an item to the inventory.
// The function should take an item object as an argument.
// The item object should have a name, price, and quantity.
// The function should add the item to the inventory.
export function addItem(item){
    inventory.push({id:inventory.length+1,...item});
}
// Write a function to get the inventory.
// The function should return the inventory.
export function getInventory(){
    return inventory;
}
// Write a function to get an item by its id.
// The function should take an id as an argument.
// The function should return the item with the given id.
export function getItemById(id){
    return inventory.find((item)=>item.id === id);
}
// Write a function to update an item in the inventory.
// The function should take an id and an item object as arguments.
// The function should update the item with the given id.
export function updateInventory(id,item){
    const index = inventory.findIndex((item) => item.id === id);
    if(index !== -1){
        inventory[index] = item;
    }
}
