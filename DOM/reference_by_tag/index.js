

let header3 = Array.from(document.getElementsByTagName("h3"));
// let header3 = document.getElementsByTagName("h3");

let span = document.getElementsByTagName("span");

console.log(header3)

for(let ele of header3)
{
    console.log(ele.innerText);
}

console.log(span);

for(let ele of span)
{
    console.log(ele);
}