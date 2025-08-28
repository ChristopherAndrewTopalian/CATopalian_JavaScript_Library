// isPrime.js

function isPrime(n)
{
    if (n < 2)
    {
        return false;
    }
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++)
    {
        if (n % i === 0)
        {
            return false;
        }
    }
    return true;
}

//----//

console.log(isPrime(5));

//----//

/*
true
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

