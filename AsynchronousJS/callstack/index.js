function a()
{
    b();
    console.log("A");
}
function b(){
    c();
    console.log("B");
}
function c()
{
    console.log("C");
}
a();