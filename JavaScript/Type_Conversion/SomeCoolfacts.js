// 1. How JavaScript Converts Types When Using Numbers
console.log("--- Converting Strings and Numbers ---");
console.log(1 + "2"); // Outputs: '12' - When adding a number to a string, JavaScript turns the number into a string
console.log(1 - "2"); // Outputs: -1 - With minus sign, JavaScript turns the string into a number
console.log("3" * "2"); // Outputs: 6 - With multiplication, JavaScript turns both strings into numbers
console.log(1 + +"2"); // Outputs: 3 - The plus sign before '2' turns it into a number first, then adds

// 2. How JavaScript Handles True/False Conversion
console.log("\n--- Understanding True/False Values ---");
console.log(Boolean("")); // Outputs: false - Empty string is considered false
console.log(Boolean("0")); // Outputs: true - Any non-empty string is considered true
console.log(Boolean(0)); // Outputs: false - Zero is considered false
console.log(Boolean([])); // Outputs: true - Empty array is considered true (surprising!)
console.log(Boolean({})); // Outputs: true - Empty object is considered true (surprising!)

// 3. Comparing Values: Regular (==) vs Strict (===)
console.log("\n--- Different Ways of Comparing Values ---");
console.log(0 == "0"); // Outputs: true - Regular equality converts types before comparing
console.log(0 === "0"); // Outputs: false - Strict equality checks both value and type
console.log([] == false); // Outputs: true - JavaScript converts both sides in unusual ways
console.log([] == false); // Outputs: false - Arrays and booleans are different types its actually ===

// 4. How Objects Convert to Simple Values
console.log("\n--- Converting Objects to Simple Values ---");
const obj = { valueOf: () => 42 };
console.log(obj + 1); // Outputs: 43 - JavaScript asks object for its number value using valueOf
console.log([1, 2] + [3, 4]); // Outputs: '1,23,4' - Arrays are turned into strings and joined

// 5. Understanding null and undefined
console.log("\n--- Working with null and undefined ---");
console.log(null == undefined); // Outputs: true - JavaScript considers these similar in regular comparison
console.log(null === undefined); // Outputs: false - But they're actually different types
console.log(typeof null); // Outputs: 'object' - A famous JavaScript bug that never got fixed
console.log(typeof undefined); // Outputs: 'undefined' - This one makes more sense

// 6. Special Number: NaN (Not a Number)
console.log("\n--- Understanding NaN (Not a Number) ---");
console.log(NaN === NaN); // Outputs: false - NaN is never equal to itself (weird!)
console.log(Number.isNaN(NaN)); // Outputs: true - This is the proper way to check for NaN
console.log(0 / 0); // Outputs: NaN - Dividing zero by zero isn't allowed
console.log(Infinity / Infinity); // Outputs: NaN - Infinity divided by infinity isn't allowed

// 7. Tricky Number Cases
console.log("\n--- Confusing Number Behaviors ---");
console.log(1 < 2 < 3); // Outputs: true - This works as expected
console.log(3 > 2 > 1); // Outputs: false - This is tricky! It checks (true > 1) which is false
console.log(999999999999999); // Outputs: 999999999999999 - This number works fine
console.log(9999999999999999); // Outputs: 10000000000000000 - This number is too big and gets rounded

// 8. How Objects Convert in Different Situations
console.log("\n--- How Objects Convert Differently ---");
const obj2 = {
  toString: () => "Hello",
  valueOf: () => 42,
};
console.log(`${obj2}`); // Outputs: 'Hello' - In strings, toString is used
console.log(obj2 + 0); // Outputs: 42 - In math operations, valueOf is used

// 9. How Arrays Convert in Different Situations
console.log("\n--- How Arrays Convert ---");
console.log([] + {}); // Outputs: '[object Object]' - Both convert to strings in a weird way
console.log({} + []); // Outputs: '[object Object]' - Same result from the other direction
console.log([] + []); // Outputs: '' - Two empty arrays become an empty string

// 10. Values that are Always False
console.log("\n--- Values JavaScript Considers False ---");
console.log(Boolean(false)); // Outputs: false - Obviously false
console.log(Boolean(0)); // Outputs: false - Zero is considered false
console.log(Boolean("")); // Outputs: false - Empty string is considered false
console.log(Boolean(null)); // Outputs: false - null is considered false
console.log(Boolean(undefined)); // Outputs: false - undefined is considered false
console.log(Boolean(NaN)); // Outputs: false - Not a Number is considered false
