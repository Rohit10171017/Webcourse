var what="Name";
var a = 3;
console.log(what);
console.log(a);
{
    var b = 7;
    var b = 90; //now value becomes 90
}
console.log(b); //var has a global scope so even though we declared b in {} we can acess is outside