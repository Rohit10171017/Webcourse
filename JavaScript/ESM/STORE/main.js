// Start by importing the functions from the inventory, orders, and billing modules.
import { addItem, getInventory } from "./inventory.js";

import { addOrder, getCart } from "./orders.js";

import { getTotalPrice } from "./billing.js";
try {
  // Here we are adding items to the inventory using the addItem function from the inventory module.
  addItem({ name: "Pencils", price: 20.5, quantity: 100 });
  addItem({ name: "Pens", price: 10.5, quantity: 100 });
  addItem({ name: "Notebooks", price: 15.5, quantity: 100 });

  // Here we are getting the inventory before the orders are added to the cart.
  console.log("Inventory before orders:", getInventory());

  // Here we are adding orders to the cart using the addOrder function from the orders module.
  addOrder({ itemId: 1, quantity: 2 });
  addOrder({ itemId: 2, quantity: 30 });
  addOrder({ itemId: 3, quantity: 1 });

  // Here we are getting the cart and the inventory after the orders are added to the cart.
  console.log("Cart:", getCart());
  console.log("Inventory after orders:", getInventory());
  console.log("Total price for the orders: INR", getTotalPrice());
} catch {
  console.error("Please read the instructions carefully and try again.");
}
