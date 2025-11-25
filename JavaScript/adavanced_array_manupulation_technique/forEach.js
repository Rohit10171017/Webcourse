let arr = ["4","6","7"];

arr.forEach((str,idx)=>{
    console.log(`String : ${str} Index : ${idx}`);
})

let arr2 = ["Messi","Neymar","Ronaldo","Pele","De Bruyne"];

arr2.forEach(function(ele,idx){
    console.log(`${ele} GOAT ${idx+1}`);
})

// cart contains arrays of items with [item, price, quantity]
const cart = [
  ["iPhone 15 Pro Max", 125000, 2],
  ["MacBook Pro", 250000, 1],
  ["Apple Watch Series 9", 50000, 3],
  ["AirPods Pro", 20000, 4],
  ["iPad Pro", 65000, 1],
];

let totalPayable = 0;
// Use forEach to iterate over the cart and calculate the total payable amount
cart.forEach((item,idx)=>{
    const totalPrice = item[1] * item[2];
    totalPayable += totalPrice;
    console.log(`${idx+1}. ${item[0]} - INR: ${totalPrice}`);
});
// Use console.log to print the item number, item name and total price based on the quantity in the cart
console.log("--------------------------------");
console.log(`Total Payable: INR ${totalPayable}`);

