
let newSpan = document.createElement("span");

newSpan.innerText = "Hello i am dynamically created span";

document.body.appendChild(newSpan);

let listid = document.getElementById("ul-list");
let newLi = document.createElement("li");

newLi.innerText = "V = root(2gh)";

listid.appendChild(newLi);

document.getElementById("ul-list").appendChild(newLi); // we can not add same child multiple times ,we dont get duplicate here
//to get duplicate use cloneNode(true);
document.getElementById("ul-list").appendChild(newLi.cloneNode(true));

let newinput = document.createElement("input");

document.body.appendChild(newinput);

let newP = document.createElement("p");

let nextline = document.createElement("br");

document.body.appendChild(nextline);
document.body.appendChild(document.createTextNode("Hello ,Ton-68"));
