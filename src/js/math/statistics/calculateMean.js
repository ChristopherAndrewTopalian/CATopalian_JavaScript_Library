// calculateMean.js

function calculateMean(numbers)
{
    // check if the input is missing or if the array is empty
    if (!numbers || numbers.length === 0)
    {
        // no mean to calculate, return null
        return null;
    }

    // initialize a variable to hold the sum of the numbers
    let total = 0;

    // loop through each number in the array
    for (let i = 0; i < numbers.length; i++)
    {
        // add the current number to the total sum
        total = total + numbers[i];
    }

    // divide the total by the number of elements to get the mean
    let mean = total / numbers.length;

    // return the calculated mean
    return mean;
}

//----//

console.log(calculateMean([10, 20, 30, 40, 50]));

//----//

/*
30
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

