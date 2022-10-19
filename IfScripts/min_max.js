" use strict";

//testing range
var a = 27;
var b = 47;
var c = 87;

//find the max
if (a > b && a > c){
    console.log(a + " is the biggest ");
}
else if (b > a && b > c){
    console.log(b + " is the biggest");
}
else if (c > b && c > a){
    console.log(c + " is the biggest");
}

// find the min 
if (a < b && a < c ) {
    console.log(a + " is the smallest");
}
else if (b < a && b < c ) {
    console.log( b + " is the smallest ");
}
else if (c < a && c < b ) {
    console.log( c + " is the smallest ")
}