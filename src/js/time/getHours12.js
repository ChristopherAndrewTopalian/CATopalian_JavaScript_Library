// getHours12.js

function getHours12()
{
    let dateTime = new Date();
    let hours = dateTime.getHours();

    // convert from military time
    if (hours > 12)
    {
        hours -= 12;
    }
    else if (hours === 0)
    {
       hours = 12;
    }

    // add a zero
    if (hours < 10)
    {
        hours = "0" + hours;
    }

    return hours
}

//----//

console.log(getHours12());

//----//

/*
02
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

