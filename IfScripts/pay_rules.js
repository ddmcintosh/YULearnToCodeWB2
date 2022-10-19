var payRate = 17.30;
var hoursWorked = 45;
var overTime = hoursWorked - 40;

if(hoursWorked <=40 ) {
    grossPay = payRate * hoursWorked;
}
else if (hoursWorked > 40) {
    grossPay = payRate * 40 + (payRate * 1.5 * overTime)
}
console.log(grossPay)