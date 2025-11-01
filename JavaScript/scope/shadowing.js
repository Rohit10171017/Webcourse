var a = 40;
{
    var a = 50;
    console.log(a); //shadowing (because value is changed)
}
console.log(a);