

let name = document.getElementsByName("gender");

let usser_name = document.getElementsByName("user_name");

let user_email = document.getElementsByName("user_email");

console.log(name);

console.log(usser_name[0].value);

console.log(user_email.values);

name.forEach(element => {
    console.log(element.value);
});