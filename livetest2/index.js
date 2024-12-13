// 1)  Write a for loop using javascript and it will show only even numbers between 1 - 20. Ex: 2, 4, 6, 8, 10 ,12, 14, 16, 18, 20

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 2)  Write a function reverseString(str) that takes a string and returns it reversed. Ex: reverseString("hello"); // Output: "olleh"

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

// 3) Write a function removeDuplicates(arr) that takes an array and returns a new array with only unique values (duplicates removed). Ex: removeDuplicates([5, 5, 5, 6, 7]); // Output: [5, 6, 7]

function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates([5, 5, 5, 6, 7]));

// 4) Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string. Ex: countVowels(“Your Name”) // Output: 4

function countVowels(str) {
    return str.match(/[aeiou]/gi).length;
}

console.log(countVowels("Your Name"));