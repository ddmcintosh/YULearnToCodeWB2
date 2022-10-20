let studentName = "Dede";
let studentMajor = "Hist";
let departmentOffice;
// Switch example 
switch (studentMajor) {
    case "CISC":
        console.log(" Major " + studentMajor + " the advising location is Sheppard Hall, Room 314 ");
        break;
    case "BIOL":
        console.log(" Major " + studentMajor + " the advising location is Science Building, Room 310 ");
        break;
    case "ENG": 
    console.log(" Major " + studentMajor + " the advising location is Kerr Hall, Room 201 ");
    break; 
    case "HIST":
        console.log(" Major " + studentMajor + " the advising location is Kerr Hall, Room 114 ");
        break;
    case "MKT": 
         console.log( " Major " + studentMajor + " the advising location is Westly Hall, Room 310 ");
         break;
         default: 
         console.log(" Unknown ");        
     
}