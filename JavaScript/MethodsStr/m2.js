function checkPassword(password){
    const lengthOfPassword = password.length;
    if(lengthOfPassword < 8)
    {
        return "Password must be at least 8 characters long";
    }
    if(lengthOfPassword > 12)
    {
        return "Password must be less than 12 characters long";
    }
    return "Password is valid";
}
try {
  console.log(checkPassword("123")); // Too short
  console.log(checkPassword("Ab3x9Kp2Yz4QAA")); // Too long
  console.log(checkPassword("Pass1234")); // Valid password
  console.log(checkPassword("SecureAbc9")); // Valid password
} catch {
  console.error("Please read the instructions carefully and try again");
}

