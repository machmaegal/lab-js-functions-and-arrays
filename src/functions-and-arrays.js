// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(arg1, arg2) {
        switch (true) {
            case arg1 === arg2:
                return arg1;            
            case arg1 > arg2:
                return arg1               
            default:
                return arg2; 
        }
    
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayOfStrings) {
    let longestWord = '';

    if (arrayOfStrings.length === 0) {
        return null;

    } else if(arrayOfStrings.length === 1) {
        return arrayOfStrings[0];

    } else if (arrayOfStrings.length > 1) {
        longestWord = arrayOfStrings.at(0);

        arrayOfStrings.forEach((word) => {
            if (word.length > longestWord.length) {
                longestWord = word;
            }
        })
        return longestWord;
    }

}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {   
    let sumOfArray = 0;

    arrayOfNumbers.forEach((number) => {
        sumOfArray += number;
    }) 
    return sumOfArray;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfNumbers) {
    let theSum = sumNumbers(arrayOfNumbers);

    if(arrayOfNumbers.length === 0) {
        return 0;
        }

    return theSum / arrayOfNumbers.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, word) {
    if (arrayOfWords.length === 0) {
        return null;
    }
    
    return arrayOfWords.includes(word);
}
