var currentHour = 17 ;

if (currentHour < 10 ) 
{
    Greeting = "Good morning!";
}
else if (currentHour >= 10 && currentHour <= 17) 
{
    Greeting = "Good day!";
}
else (currentHour > 17) 
{
    Greeting = "Good evening!";
}

// displaying output 
console.log(" It is " + currentHour + " hour " + Greeting);