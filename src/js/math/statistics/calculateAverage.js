// calculateAverage.js

function calculateAverage(numbers)
{
    // check if the input is missing or if the array is empty
    if (!numbers || numbers.length === 0)
    {
        // no average to calculate, return null
        return null;
    }

    // set up a variable to keep the total sum of all numbers
    let sum = 0;

    // loop through each number in the array
    for (let i = 0; i < numbers.length; i++)
    {
        // add the current number to the total sum
        sum = sum + numbers[i];
    }

    // calculate the average by dividing the total sum by the number of items
    let average = sum / numbers.length;

    // return the calculated average
    return average;
}

//----//

console.log(calculateAverage([10, 20, 30, 40]));

//----//

/*
25
*/

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

