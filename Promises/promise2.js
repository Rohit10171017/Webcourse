//handling promise
let flag = false;
console.log("Wait for 5 sec to get output");
function data() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (flag == true) resolve({ Name: "Rohit", age: 20 });
      else reject("Failed to print data");
    }, 5000);
  });
}

data()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
