// !!! INSTRUCTIONS !!!
// To test the functions, run the following command in the terminal:
// node assignment2/index.js OR cd assignment2 && node index.js

function calculateDifference(a, b) {
    return a - b;
}
console.log("calculateDifference:", calculateDifference(755, 55)); 


function isOdd(number) {
    return number % 2 !== 0;
}
console.log("isOdd:", isOdd(27));


function findMin(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}
console.log("findMin:", findMin([50, 21, 99, 11, 61]));


function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
console.log("filterEvenNumbers:", filterEvenNumbers([1, 2, 3, 4, 5, 6]));


function sortArrayDescending(numbers) {
    numbers.sort(function (a, b) {
        return b - a;
    });
    return numbers;
}
console.log("sortArrayDescending:", sortArrayDescending([3, 1, 4, 2, 5]));


function lowercaseFirstLetter(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log("lowercaseFirstLetter:", lowercaseFirstLetter("Goodbye"));


function findAverage(numbers) {
    if (numbers.length === 0) return 0;
    
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    
    return sum / numbers.length;
}
console.log("findAverage:", findAverage([10, 20, 30, 40]));


function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    }
    if (year % 100 === 0) {
        return false;
    }
    if (year % 4 === 0) {
        return true;
    }
    return false;
}
console.log("isLeapYear:", isLeapYear(2024));

