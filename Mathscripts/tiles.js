var a = 3.2808;
//Actual dimensions of the room, using meters multiplied by foot
var length = 12 * a;
var width = 6 * a;
var lengthFeet = Math.trunc(length);
var widthFeet = Math.trunc(width);
//calculations

var boxes = Math.trunc(length * width);

//output
console.log(lengthFeet);
console.log(widthFeet);
console.log("The boxes needed to tile the room " + boxes);