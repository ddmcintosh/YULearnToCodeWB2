"use strict";

//inputs
var payRate = 17.30;
var hours = 45;

//get the extra inputs for overtime
var gross = 1;
var extraHours = 0;
var incrRate = 1;

if (hours > 40){
    gross = payRate * 40;               //getting the  <= 40 hours done already 
    extraHours =  hours - 40;     //finding the extra hours
    incrRate = payRate * 1.5;           //finding the incresd rate 
    gross += (extraHours * incrRate);     //adding the increased pay into gross
    console.log("You worked " + hours + " hours and get payed $" +  payRate + " per hour. This is your gross pay: $" + gross);
}
else if (hours == 40) {
    gross += (hours * payRate);
    console.log("You worked exactly 40and get payed $" +  payRate + " per hour. This is your gross pay: $" + gross);
}
else {
    gross += (hours * payRate);
    console.log("You worked " + hours + " hours and get payed $" +  payRate + " per hour. This is your gross pay: $" + gross);
}

//currently, gross pay has been calculated WEEKLY

//inputs
var annual = (gross * 4) * 12; //ANNUAL
var filer = "single";
var taxRate = 1;

//file for single; finding the taxRate
if (filer == "single") {
    console.log("Your filing status is: Single");

    //testing the lower # first before going higher
    if(annual <= 12000){
        taxRate = 0.05;
    }
    else if(annual < 25000){
        taxRate = 0.1;
    }
    else if(annual < 75000){
        taxRate = 0.15;
    }
    else{
        taxRate = 0.2;
    }
}

//file for joint
else if (filer == "joint") {
    console.log("Your filing status is: Joint");
    
    //testing the lower # first before going higher
    if(annual <= 12000){
        taxRate = 0.0;
    }
    else if(annual < 25000){
        taxRate = 0.06;
    }
    else if(annual < 75000){
        taxRate = 0.11;
    }
    else{
        taxRate = 0.2;
    }
}
else {
    console.log("Is either single or joint.");
}
//finding the tax withheld weekly
var withheld = taxRate * gross;
var net = gross - withheld;
console.log("Your tax rate is " + taxRate*100 + 
"% and your tax withholdings for this week are: $" + 
withheld.toFixed(2) + ". Your net pay: $" + net.toFixed(2)); 