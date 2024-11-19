//let
//const
//var
let i = 0;
for (; i < 5; i++) {
    console.log(i);
}
console.log(i, 'in global value');


var x = 20;
if (true)   {
    var x = 10;
    console.log(x);
}