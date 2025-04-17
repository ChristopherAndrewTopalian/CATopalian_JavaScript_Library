// getDateLongArray.js

function getDateLongArray()
{
    let currentDateTime = new Date();

    let year = currentDateTime.getFullYear();
    let monthIndex = currentDateTime.getMonth();
    let dayOfMonth = currentDateTime.getDate();
    let dayOfWeekIndex = currentDateTime.getDay(); // 0 = Sunday

    //-//

    let monthNames =
    [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let dayOfWeekNames =
    [
        "Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
    ];

    let monthName = monthNames[monthIndex];
    let dayOfWeekName = dayOfWeekNames[dayOfWeekIndex];

    //-//

    let formattedDate = monthName + " " + dayOfMonth + ", " + year + ", " + dayOfWeekName;

    return formattedDate;
}

//----//

console.log(getDateLongArray());

//----//

/*
April 17, 2025, Thursday
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

