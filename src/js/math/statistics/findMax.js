// findMax.js

function findMax(numbers)
{
    if (!numbers || numbers.length === 0)
    {
        // nothing to return; list is empty or missing
        return null;
    }

    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++)
    {
        if (numbers[i] > max)
        {
            max = numbers[i];
        }
    }

    return max;
}

//----//

console.log(findMax([40, 30, 23, 45]));

//----//

/*
45
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

