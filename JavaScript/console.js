// Write console.log statements to log the following messages:
console.log("This is a simple message using console.log()");
console.log("You can log multiple values:", 42, true, "text");

// Write console.warn statements to log the following messages:
console.warn("This is a warning message using console.warn()");

// Write console.error statements to log the following messages:
console.error("This is an error message using console.error()");

// Write console.table statements to log the following data in a table format:
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
console.table(people);

// Write console.count statements to count how many times it's called:
console.count("My Counter");
console.count("My Counter");
console.count("My Counter");

// Reset the counter
console.countReset("My Counter");
console.count("My Counter"); 
