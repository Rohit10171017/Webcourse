alert("Yoo Boy")

const item = document.getElementsByClassName("smain");

console.log(item);
for(let i = 0 ; i < item.length ; i++)
{
    console.log(item[i].innerText);
}

// const items = document.getElementsByClassName("li-item"); This is not recommended because its not an array 

//converting it into array is best practice for looping 

const items = Array.from(document.getElementsByClassName("li-item"));

console.log(items);

items.forEach((ele) => console.log(ele.innerText));