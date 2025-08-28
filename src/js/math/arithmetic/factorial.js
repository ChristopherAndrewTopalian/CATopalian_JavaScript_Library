// factorial.js

function factorial(n)
{
    if (n < 0)
    {
        // factorial not defined for negatives
        return undefined;
    }

    let result = 1;

    for (let i = 2; i <= n; i++)
    {
        result *= i;
    }
    return result;
}

//----//

console.log(factorial(8));

//----//

/*
40320
*/

//----//

// computes the factorial of a number

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

