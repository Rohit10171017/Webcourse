let b = "Space"; // this is act like a global 
{
    let a = 78;
    // let a = 78; we can not redeclare like we did it in var 
    console.log(a);
}
console.log(a); // this gives error because let is a block variable

