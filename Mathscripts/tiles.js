var a = 3.2808;
//Actual dimensions of the room, using meters multiplied by foot
var length = 12 * a; // length = 39
var width = 6 * a;   // width = 19
var lengthFeet = Math.trunc(length);
var widthFeet = Math.trunc(width);

//calculations
var roomDimension = Math.trunc(length * width)
var boxes = Math.trunc(length * width);

//output
console.log(lengthFeet);
console.log(widthFeet);
console.log("The room dimensions " + room)
console.log("The boxes needed to tile the room " + boxes);