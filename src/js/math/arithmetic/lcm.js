// lcm.js

function lcm(a, b)
{
    a = Math.abs(a);

    b = Math.abs(b);

    let multiple = a;

    while (multiple % b !== 0)
    {
        multiple += a;
    }
    return multiple;
}

//----//

console.log(lcm(4, 8));

//----//

/*
8
*/

//----//

// computes the least common multiple of two numbers

//----//


// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

