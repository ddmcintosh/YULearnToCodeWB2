// Description: This script tsts various numeric conversion techniques
//
// Author: Jordan Q. Newprogrammer 

var a = "101.1 ";
var b = "55";
var c = "402 Stevens ";
var d = "Number 5 ";

a1 = parseInt(a);
b1 = parseInt(b);
c1 = parseInt(c);
d1 = parseInt(d);

a2 = parseFloat(a);
b2 = parseFloat(b);
c2 = parseFloat(c);
d2 = parseFloat(d);

a3 = Number(a);
b3 = Number(b);
c3 = Number(c);
d3 = Number(d);

a4 = +a;
b4 = +b;
c4 = +c;
d4 = +d;

console.log(a1); console.log(a2); console.log(a3); console.log(a4);
console.log(b1); console.log(b2); console.log(b3); console.log(b4);
console.log(c1); console.log(c2); console.log(c3); console.log(c4);
console.log(d1); console.log(d2); console.log(d3); console.log(d4);