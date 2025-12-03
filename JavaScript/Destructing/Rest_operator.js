const add = (...num) =>
{
    let sum = 0;
    for(let ele of num)
    {
        sum += ele;
    }
    console.log(sum);
}
// This is the Magic of Rest operator
add(1,2,3,4)

add(5,6,7);

add(43,2,32,2312,32,32,32);

let arr = [1,2,3,4,5,6,7,8,9,10];

const [a,...b] = arr;

console.log(a,b);

// PW project code 

const userProfileData = {
  name: "Priya Sharma",
  email: "priya.sharma@email.com",
  role: "Software Engineer",
  location: "Bangalore",
  timezone: "GMT+5:30",
  skills: ["JavaScript", "React", "Node.js", "Java", "Spring Boot"],
  contacts: {
    phone: "+91-955-123-4567",
    slack: "@priyasharma",
    github: "priya-dev",
    linkedin: "priya-sharma-dev",
  },
};

// Use Object destructuring with rest operator to extract the name, email, and role
const {name:user_name,email,role,...otherUserInfo} = userProfileData;
// Use Array destructuring with rest operator to extract the primary skill, secondary skill, and remaining skills
const {skills:[primarySkill,secondarySkill,...remainingSkills]} = userProfileData;
// Use Contact information destructuring with rest operator to extract the phone and other contacts
const {contacts:{phone,...otherContacts}} = userProfileData;
try {
  console.log(`User Profile Details:
Name: ${user_name}
Email: ${email}
Role: ${role}
Other Info: ${JSON.stringify(otherUserInfo, null, 2)}

Skills Overview:
Primary Skill: ${primarySkill}
Secondary Skill: ${secondarySkill}
Additional Skills: ${remainingSkills.join(", ")}

Contact Information:
Phone: ${phone}
Other Contacts: ${JSON.stringify(otherContacts, null, 2)}
  `);
} catch (error) {
  console.error("Please read the instructions carefully and try again");
}
