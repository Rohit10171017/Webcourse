let arr = [1,2,3,4,5,6];

const newAray = [...arr,7,8,9,10];

console.log(arr,newAray);

console.log(...arr,...newAray,11,12,13,14,15); // all spreded out in the form of number 

const copy = [...arr];

console.log(copy === arr); // in output we get false 

let str = "hello";

const letter = [...str];

console.log(letter);

//PW project code 


// Base Configuration in some application
const baseConfig = {
  theme: "light",
  language: "English",
  notifications: true,
};

// User Preferences in some application
const userPreferences = {
  fontSize: 14,
  colorScheme: "blue",
};

// Default Hobbies for some user
const defaultHobbies = ["reading", "music"];
// Additional Hobbies for some user
const additionalHobbies = ["painting", "hiking"];

// Combine objects with spread operator to build final settings
const finalSettings = {...baseConfig,...userPreferences,lastUpdated:"2024-03-15",};
// Combine arrays with spread operator to build all hobbies
const allHobbies = [...defaultHobbies,...additionalHobbies];
// Add elements to array with spread operator
const fruits = ["apple", "banana"];
const allFruits = [...fruits,"orange"];
// Copy and modify an object with spread operator
const darkModeSettings = {...baseConfig,theme:"dark",}
try {
  console.log(`Settings and Preferences:
Base Configuration: ${JSON.stringify(baseConfig, null, 2)}
Final Settings: ${JSON.stringify(finalSettings, null, 2)}
All Hobbies: ${allHobbies.join(", ")}
Fruit Collection: ${allFruits.join(", ")}
Dark Mode Settings: ${JSON.stringify(darkModeSettings, null, 2)}
  `);
} catch (error) {
  console.error("Please read the instructions carefully and try again");
}
