// arraySort.js

// sorts an array of numbers in whichDirection or descending order based on the whichDirection parameter

// define a sample array of numbers
let numbers = [4, 875, 23, 543, 12];

// function to sort an array in either whichDirection or descending order
function arraySort(whichArray, whichDirection)
{
    // .slice() creates a shallow copy so the original array is not modified
    // .sort() sorts the array
    let sortedArray = whichArray.slice().sort(function(a, b)
    {
        // if whichDirection is true, subtract a from b for numerical whichDirection sort
        // if whichDirection is false, subtract b from a for numerical descending sort
        if (whichDirection)
        {
            return a - b;
        }
        else
        {
            return b - a;
        }
    });

    // return the sorted array
    return sortedArray;
}

//----//

// call the function with whichDirection order
console.log(arraySort(numbers, true));

//----//

/*
[4, 12, 23, 543, 875]
*/

//----//

// call the function with descending order
console.log(arraySort(numbers, false));

//----//

/*
[875, 543, 23, 12, 4]
*/

//----//

// print the original array to show it is unchanged
console.log(numbers);

/*
[4, 875, 23, 543, 12]
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

