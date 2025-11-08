//Callback function is a function that is passed as an argument to antoher function

function greet(name ,callback){ 
    console.log("Hello," + name);
    callback(); //call the function back
}

function farewell(){
    console.log("Goodbye!");
}

greet("Rohit",farewell);

// Build a calculator function that uses a callback to perform operations
function calculate(num1,num2,operation)
{
    return operation(num1,num2);
}
try {
  const sum = calculate(5, 3, (a, b) => a + b);
  const multiply = calculate(5, 3, (a, b) => a * b);
  const subtract = calculate(5, 3, (a, b) => a - b);
  console.log("Sum:", sum);
  console.log("Product:", multiply);
  console.log("Difference:", subtract);
} catch {
  console.error("Please read the instructions carefully and try again");
}
// here we passing fun named farewell as an argument

//Note: In above code greet() and calculate() are high order function
//      and operation() and farewell() are callback functions