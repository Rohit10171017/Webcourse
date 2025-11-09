// arr.shift() and arr.unshift()

let arr = [1,2,3,4,4,5,32,32,"End"];

let bye = arr.shift(); // it removes first element of an array and returns the removed element

console.log(arr); // here we can see first element of an array removed(it modifies the original array)

console.log("Removed element is : ",bye);

//unshift
arr.unshift("Start","Second",true); //we can add one more more elements to an array using .unshift()

console.log(arr);

const printQueue = [];

//small project using .shift() and .unshift()
console.log("\nProject Output :");
function addUrgentPrint(document)
{
    printQueue.unshift(document);
    console.log(`URGENT-Added to front of queue: ${document}`);
}
function addPrint(document) {
  printQueue.push(document);
  console.log(`Added to queue: ${document}`);
}


function processPrint()
{
    const printed = printQueue.shift();
    if(printed)
    {
        console.log(`Printing: ${printed}`);
    }
    else{
        console.log("No documents in queue");
    }
}
try {
  addPrint("Monthly Report");
  addPrint("Team Schedule");
  addUrgentPrint("CEO Presentation");

  console.log("\nCurrent Queue:");
  console.table(printQueue);

  console.log("\nProcessing prints:");
  processPrint();
  processPrint();
  processPrint();
  processPrint();
} catch {
  console.error("Please read the instructions carefully and try again.");
}
