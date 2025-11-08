//Uppercase and lowercase
// it does not modify original string 
let str = "rohit subhas jadhav 8136/8";
let strU = str.toUpperCase();
console.log(str);//original string
console.log(strU);// UPPERCASE string

const password1 = "thisisastrongpassword";
const password2 = "THisISastrongerPAsSwORd";
//small project
function validatePassword(password)
{
    const upperVersion = password.toUpperCase();
    const lowerVersion = password.toLowerCase();
    if(password === upperVersion || password === lowerVersion)
    {
        return "Password needs both uppercase and lowercase characters";
    }
    return "Password has mixed case (good!)";
}
try {
  console.log("Checking Password 1: ", validatePassword(password1));
  console.log("Checking Password 2: ", validatePassword(password2));
} catch {
  console.error("Please read the instructions carefully and try again");
}
