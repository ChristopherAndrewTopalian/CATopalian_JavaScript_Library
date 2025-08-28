// gcd.js

function gcd(a, b)
{
    while (b !== 0)
    {
        let temp = b;

        b = a % b;

        a = temp;
    }
    return a;
}

//----//

console.log(gcd(5, 10));

//----//

/*
5
*/

//----//

// computes the greatest common divisor of two numbers

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

