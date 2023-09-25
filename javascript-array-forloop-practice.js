// In order to figure out if a number is actually an odd number, we will have to use the modulo function in order to solve these arrays!! We will have to use for loops
// for loops seem scary so hopefully I dont crash my computer LOL 
// before we make a loop we need to assign the array variable and an  empty array where the odd numbers will go into
const array1 = [2, 4, 6, 8, 11, 20, 15, 22];
const oddarray1 = [];

for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 !== 0) {
        oddarray1.push(array1[i]);
    } 
}
console.log(oddarray1)
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddarray2 = [];

for (let i = 0; i < array2.length; i++) {
    if (array2[i] % 2 !== 0) {
        oddarray2.push(array2[i]);
    } 
}
console.log(oddarray2);
const array3 = [70, 42, 55, 81, 21, 91, 34];
const oddarray3 = [];
for (let i = 0; i < array3.length; i++) {
    if (array3[i] % 2 !== 0) {
        oddarray3.push(array3[i]);
    } 
}

const array4 = [2, 4, 6, 8, 10, 11, 12];
const oddarray4 = []
for (let i = 0; i < array4.length; i++) {
    if (array4[i] % 2 !== 0) {
        oddarray4.push(array4[i]);
    } 
}
console.log(oddarray4);

// in order to check for vowels and consonants in a word, we are lucky that a normal string basically is an array, as such we can itterate through that pretty easily
// now when we itterate we want an if then statement that will check for the vowels, if its not a vowel then assume it is a consonant
const word1 = "hello";
let vowelcount1 = 0;
let consonantcount1 = 0;

for (let i = 0; i < word1.length; i++) {
    if (word1[i] === 'a' || word1[i] === 'e' || word1[i] === 'i' || word1[i] === 'o' || word1[i] === 'u') {
        vowelcount1 += 1;
    } else {
        consonantcount1 += 1;
    }
}
console.log(word1, "has", vowelcount1, "vowels and has", consonantcount1, "consonants");

const word2 = "ukelele";
let vowelcount2 = 0;
let consonantcount2 = 0;

for (let i = 0; i < word2.length; i++) {
    if (word2[i] === 'a' || word2[i] === 'e' || word2[i] === 'i' || word2[i] === 'o' || word2[i] === 'u') {
        vowelcount2 += 1;
    } else {
        consonantcount2 += 1;
    }
}
console.log(word2, "has", vowelcount2, "vowels and has", consonantcount2, "consonants");

const word3 = "awesome";
let vowelcount3 = 0;
let consonantcount3 = 0;

for (let i = 0; i < word3.length; i++) {
    if (word3[i] === 'a' || word3[i] === 'e' || word3[i] === 'i' || word3[i] === 'o' || word3[i] === 'u') {
        vowelcount3 += 1;
    } else {
        consonantcount3 += 1;
    }
}
console.log(word3, "has", vowelcount3, "vowels and has", consonantcount3, "consonants");

const word4 = "onomonopia";
let vowelcount4 = 0;
let consonantcount4 = 0;

for (let i = 0; i < word4.length; i++) {
    if (word4[i] === 'a' || word4[i] === 'e' || word4[i] === 'i' || word4[i] === 'o' || word4[i] === 'u') {
        vowelcount4 += 1;
    } else {
        consonantcount4 += 1;
    }
}
console.log(word4, "has", vowelcount4, "vowels and has", consonantcount4, "consonants");

const word5 = "textbook";
let vowelcount5 = 0;
let consonantcount5 = 0;

for (let i = 0; i < word5.length; i++) {
    if (word5[i] === 'a' || word5[i] === 'e' || word5[i] === 'i' || word5[i] === 'o' || word5[i] === 'u') {
        vowelcount5 += 1;
    } else {
        consonantcount5 += 1;
    }
}
console.log(word5, "has", vowelcount5, "vowels and has", consonantcount5, "consonants");


// we will be itterating through the inputed array in reversed then pushing into a new array that will be the reversed output

const inputarray1 = [1, 2, 3];
const reversed1 = [];

for (let i = inputarray1.length -1; i >= 0; i--) {
    reversed1.push(inputarray1[i]);
}
console.log(reversed1);

const inputarray2 = [1, 3, 5, 7, 9, 11];
const reversed2 = [];

for (let i = inputarray2.length -1; i >= 0; i--) {
    reversed2.push(inputarray2[i]);
}
console.log(reversed2);

const inputarray3 = [20, 50, 30, 60, 200];
const reversed3 = [];

for (let i = inputarray3.length -1; i >= 0; i--) {
    reversed3.push(inputarray3[i]);
}
console.log(reversed3);

const inputarray4 = [1, -1, 2, -3, 5, -8, 13];
const reversed4 = [];

for (let i = inputarray4.length -1; i >= 0; i--) {
    reversed4.push(inputarray4[i]);
}
console.log(reversed4);

// now we will be checking if numbers are mulitples of 3 or 5, this should be easy enough as modulous can help us out greatly, essentially if it is a multiple we should get 0
// if it is not a multiple then we will have a remainder, we wil check for 0's and if it is a 0 then we print "Fizz" or "Buzz"

for (let i = 0; i < 101; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i)
    }
}