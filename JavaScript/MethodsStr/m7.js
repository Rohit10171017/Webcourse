let str = "AI is Dangerous";
let str1 = str.replace("Dangerous","Very Useful");
console.log(str); // Here in the output we can see original string remains same
console.log(str1); // modified string
console.log(str.replace("Dangerous","Very Useful"));

let str2 = "apple,apple,apple";
console.log(str2.replace("apple","pinapple")); // only first apple gets replaced 

//to replace all the apples 

console.log(str2.replace(/apple/g,"pinapple")); // here we used global flag
console.log(str2.replaceAll("apple","pinapple")); // we can do this also to replace all

const paragraph =
  "Hello, my name is John Doe. I am 25 years old and I live in New York City. My phone number is 9175551234.";

//small project
function maskPhoneNumber(paragraph,phone_number)
{
    return paragraph.replace(phone_number,"XXXXXXXXXX");
}

try {
  console.log(maskPhoneNumber(paragraph, "9175551234"));
} catch {
  console.error("Please read the instructions carefully and try again.");
}
