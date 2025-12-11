// Start by importing the functions from the orders and inventory modules.
import {getCart} from './orders.js';
import {getItemById} from './inventory.js'
// Write a function to get the total price of the orders in the cart.
export function getTotalPrice(){
    const orders = getCart();
    return orders.reduce((total,order) => {
        const item = getItemById(order.itemId);
        return total + item.price * order.quantity;
    },0);
}