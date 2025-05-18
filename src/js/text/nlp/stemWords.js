// stemWords.js

function stemWords(text)
{
    if (!text || typeof text !== 'string')
    {
        return '';
    }

    let suffixes = ['ing', 'ed', 'es', 's'];

    let words = text.split(/\W+/);
    let stemmedWords = [];

    for (let i = 0; i < words.length; i++)
    {
        let word = words[i];

        if (word.length === 0)
        {
            continue;
        }

        let lowerWord = word.toLowerCase();

        for (let j = 0; j < suffixes.length; j++)
        {
            let suffix = suffixes[j];

            if (lowerWord.length > suffix.length + 1 && lowerWord.endsWith(suffix))
            {
                lowerWord = lowerWord.slice(0, lowerWord.length - suffix.length);
                break;
            }
        }

        let len = lowerWord.length;
        let lastChar = lowerWord.charAt(len - 1);
        let secondLastChar = lowerWord.charAt(len - 2);

        // only remove the double letter if it's not ss, ll, or tt
        let preserveDoubles = ['ss', 'll', 'tt'];
        let lastTwo = secondLastChar + lastChar;

        if (len > 2 && lastChar === secondLastChar && preserveDoubles.indexOf(lastTwo) === -1)
        {
            lowerWord = lowerWord.slice(0, len - 1);
        }

        stemmedWords.push(lowerWord);
    }

    return stemmedWords.join(' ');
}

//----//

console.log(stemWords("running jumped cats jumping misses stopping filler butter"));

//----//

/*
run jump cat jump miss stop filler butter
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

