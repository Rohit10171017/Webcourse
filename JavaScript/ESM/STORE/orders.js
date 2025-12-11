// Start by importing the functions from the inventory module.
import { getItemById, updateInventory } from "./inventory.js";

// Create a variable to store the cart named cart.
const cart = [];

// Write a function to add an order to the cart.
// The function should take an order object as an argument.
// The order object should have an itemId and a quantity.
// The function should add the order to the cart.
// The function should update the inventory.
// The function should return a message indicating the order has been added to the cart.
export function addOrder(order) {
  const item = getItemById(order.itemId);

  if (item.quantity < order.quantity) {
    return console.log("Not enough inventory");
  }

  cart.push({ id: cart.length + 1, ...order });
  updateInventory(order.itemId, {
    ...item,
    quantity: item.quantity - order.quantity,
  });

  return console.log(`${order.quantity} ${item.name} added to the order`);
}

// Write a function to get the cart.
// The function should return the cart.
export function getCart() {
  return cart;
}
