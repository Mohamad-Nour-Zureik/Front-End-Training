//! Task 0 : (Example) write a function that takes 2 numbers and return the Sum of them
console.log("================================================== Task 0 ================================================== ")

function add(num1, num2) {
  return num1 + num2;
}

// ! OR

// const add = (num1, num2) => {
//   return num1 + num2;
// };

console.log(add(5, 10));

/* =============================================================== */

//! Task1: Create a function that takes the age in years and returns the age in seconds. ex: age = 25 years , Notes: 1 year = 365 days
console.log("================================================== Task 1 ================================================== ")
function ageInSeconds(ageInYears) {
  return ageInYears * 365 * 24 * 60 * 60;
}

console.log("Age In Seconds :", ageInSeconds(25));

/* =============================================================== */

//! Task2: Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number. ex: halfQuarterEighth(6) ➞ [3, 1.5, 0.75]
console.log("================================================== Task 2 ================================================== ")

function halfQuarterEighth(number) {
  return [number / 2, number / 4, number / 8];
}

console.log("division by powers of two (2 , 4 , 8) : ", halfQuarterEighth(10));

/* =============================================================== */

//! Task3: Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.
console.log("================================================== Task 3 ================================================== ")

function isEvenOrOdd(number) {
  if (number % 2 == 0) {
    return `number ${number} is even`;
  } else return `number ${number} is odd`;
}

console.log("Test Number 10 : ", isEvenOrOdd(10));
console.log("Test Number 13 : ", isEvenOrOdd(7));

/* =============================================================== */

//! Task 4 : Create a function which takes two strings (p1 and p2 ⁠— which represent player 1 and 2) as arguments and returns a string stating the winner in a game of Rock, Paper, Scissors.

//! Each argument will contain a single string: "Rock", "Paper", or "Scissors". Return the winner according to the following rules:

//! Rock beats Scissors
//! Scissors beats Paper
//! Paper beats Rock

//! If p1 wins, return the string "The winner is p1". If p2 wins, return the string "The winner is p2" and if p1 and p2 are the same, return "It's a draw"
//! Notes: All inputs will be strings ex: rps("Scissors", "Paper") ➞ "The winner is p1"
console.log("================================================== Task 4 ================================================== ")

function toLower(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let code = text.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      code += 32;
    }

    result += String.fromCharCode(code);
  }
  return result;
}

function isInputCorrect(p){
  const arr = ["rock", "paper", "scissors"];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == p) return true;
  }
  return false;
}

function rockPaperScissors(player1, player2) {
  let p1 = toLower(player1);
  let p2 = toLower(player2);

  if (
    p1 == p2 &&
    isInputCorrect(p1) && 
    isInputCorrect(p2)
  ) {
    return "It's a draw";
  }

  if (p1 == "rock" && p2 == "scissors") {
    return "The winner is player 1";
  } else if (p1 == "rock" && p2 == "paper") {
    return "The winner is player 2";
  } else if (p2 == "rock" && p1 == "scissors") {
    return "The winner is player 2";
  } else if (p2 == "rock" && p1 == "paper") {
    return "The winner is player 1";
  } else if (p1 == "scissors" && p2 == "paper") {
    return "The winner is player 1";
  } else if (p1 == "paper" && p2 == "scissors") {
    return "The winner is player 2";
  } else {
    return "Invalid Input";
  }
}

// Test draws
console.log(rockPaperScissors("rock", "rock"));

// Test player 1 wins
console.log(rockPaperScissors("rock", "scissors"));
console.log(rockPaperScissors("scissors", "paper"));
console.log(rockPaperScissors("paper", "rock"));

// Test player 2 wins
console.log(rockPaperScissors("scissors", "rock"));
console.log(rockPaperScissors("paper", "scissors"));
console.log(rockPaperScissors("rock", "paper"));

// Test case insensitivity
console.log(rockPaperScissors("ROCK", "Scissors"));
console.log(rockPaperScissors("PaPeR", "ROCK"));

console.log(rockPaperScissors("hello", "hello"));

/* =============================================================== */

//! Task 5 : Create a function that takes two numbers and a mathematical operator and returns the result. ex: calculate(4, 9, "+") ➞ 13
console.log("================================================== Task 5 ================================================== ")

function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
    case "%":
      return num2 !== 0 ? num1 % num2 : "Error: Division by zero";
    default:
      return "Error: Invalid operator";
  }
}

// Examples
console.log("add operator :", calculate(4, 9, "+"));
console.log("minus operator :", calculate(10, 5, "-"));
console.log("mult operator :" , calculate(3, 7, "*"));
console.log("divide operator :" , calculate(20, 4, "/"));
console.log("mod operator :" , calculate(10, 3, "%"));
console.log("undefined operator: " , calculate(4, 9, "^"));


/* =============================================================== */

//! Task 6 : Return the number (count) of vowels in the given string., We will consider a, e, i, o, u as vowels for this Kata (but not y), The input string will only consist of lower case letters and/or spaces.
//ex :  console.log(getCount("vica")) =>  2

console.log("================================================== Task 6 ================================================== ")

function getCount(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (
      ch === "a" ||
      ch === "e" ||
      ch === "i" ||
      ch === "o" ||
      ch === "u"
    ) {
      count++;
    }
  }

  return count;
}

console.log("vowels in vica :" , getCount("vica"));
console.log("vowels in hello world :" , getCount("hello world"));
console.log("vowels in aaa eee :" , getCount("aaa eee"));

/* =============================================================== */

//! Task 7 :Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"
console.log("================================================== Task 7 ================================================== ")

function bmi(weight, height) {
  const value = weight / (height * height);

  if (value <= 18.5) {
    return "Underweight";
  } else if (value <= 25.0) {
    return "Normal";
  } else if (value <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

// Examples
console.log(bmi(50, 1.7));
console.log(bmi(65, 1.7));
console.log(bmi(85, 1.7));
console.log(bmi(110, 1.7));


/* =============================================================== */

//! Task 8: Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
//! wins get 3 points
//! draws get 1 point
//! losses get 0 points
//! footballPoints(3, 4, 2) ➞ 13
//! Only one line should be written inside the function

console.log("================================================== Task 8 ================================================== ")

function footballPoints(wins, draws, losses) {
  return wins * 3 + draws * 1 + losses * 0;
}

console.log("points for football with : 3 wins ,4 draws and 1 losses :" ,footballPoints(3, 4, 2));


/* =============================================================== */

//! Task 9: Create a function that takes in an array of numbers and returns the sum of its cubes.
//! sumOfCubes([1, 5, 9]) ➞ 855
//! Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
//! If given an empty array, return 0.
console.log("================================================== Task 9 ================================================== ")

function sumOfCubes(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * arr[i] * arr[i];
  }

  return sum;
}

// Examples
console.log("Sum Of Cubes for 1 , 5 , 9 : " , sumOfCubes([1, 5, 9]));
console.log("Sum Of Cubes [] : " , sumOfCubes([]));
console.log("Sum Of Cubes 2 , 3 : " , sumOfCubes([2, 3]));

/* =============================================================== */

//! Task 10 : Given an array of ones and zeroes, convert the equivalent binary value to an integer.
//! Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
console.log("================================================== Task 10 ==================================================  ")

function binaryArrayToNumber(arr) {
  let value = 0;

  for (let i = 0; i < arr.length; i++) {
    value = value * 2 + arr[i];  
  }

  return value;
}

// Examples
console.log("decimal for 0001 : " , binaryArrayToNumber([0, 0, 0, 1]));
console.log("decimal for 1111 : " , binaryArrayToNumber([1, 1, 1, 1]));
console.log("decimal for 0100 : " , binaryArrayToNumber([0, 1, 0, 0]));
console.log("decimal for 1011 : " , binaryArrayToNumber([1, 0, 1, 1]));


/* =============================================================== */

//! Task 11 : Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
console.log("================================================== Task 11 ==================================================  ")

function removeFirstLast(str) {
  let result = "";

  for (let i = 1; i < str.length - 1; i++) {
    result += str[i];
  }

  return result;
}

// Examples
console.log("delete first and last for Hello :" , removeFirstLast("Hello"));
console.log("delete first and last for JavaScript :" , removeFirstLast("JavaScript"));
console.log("delete first and last for ab :" , removeFirstLast("ab"));


/* =============================================================== */

//! Task 12 : Given an array of integers. Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
//! If the input is an empty array or is null, return an empty array.

//! Example: For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

console.log("================================================== Task 12 ==================================================  ")

function countPositivesSumNegatives(arr) {
  if (!arr || arr.length === 0) return [];

  let countPos = 0;
  let sumNeg = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      countPos++;
    } else if (arr[i] < 0) {
      sumNeg += arr[i];
    }
  }

  return [countPos, sumNeg];
}

// Examples
console.log("count of positive numbers and sum of negative ones [1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15] :" , countPositivesSumNegatives([1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15]));
console.log("count of positive numbers and sum of negative ones [] :" , countPositivesSumNegatives([]));
console.log("count of positive numbers and sum of negative ones null :" , countPositivesSumNegatives(null));
console.log("count of positive numbers and sum of negative ones for [-1,-2,-3,0] :" , countPositivesSumNegatives([-1,-2,-3,0]));

/* =============================================================== */

//! Task 13: Given an array of integers your solution should find the smallest integer.
// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

console.log("================================================== Task 13 ==================================================  ")

function findSmallestInt(arr) {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

// Examples
console.log(findSmallestInt([34, 15, 88, 2]));
console.log(findSmallestInt([34, -345, -1, 100]));
console.log(findSmallestInt([10, 5, 0, 20]));

/* =============================================================== */
// !Task 14 : Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.
// ("Hello", 'o')  =>  1
// ("Hello", 'l')  =>  2
// ("", 'z')       =>  0
console.log("================================================== Task 14 ==================================================  ")


function countChar(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }

  return count;
}

// Examples
console.log("number of 'o' in 'Hello' :" , countChar("Hello", "o"));
console.log("number of 'l' in 'Hello' :" , countChar("Hello", "l"));
console.log("number of 'z' in '' :" , countChar("", "z"));
console.log("number of 'a' in 'aaaaa' :" , countChar("aaaaa", "a")); 

/* =============================================================== */

//! Task 15: Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:
// a = 1
// b = 4
// --> [1, 2, 3, 4]
console.log("================================================== Task 15 ==================================================  ")

function between(a, b) {
  if (a > b) {
    a = a + b;
    b = a - b
    a = a - b
  }
  let result = [];
  let index = 0;

  for (let i = a; i <= b; i++) {
    result[index] = i;
    index++;
  }

  return result;
}

// Examples
console.log("Number Between 1 and 4 : " , between(1, 4));
console.log("Number Between 5 and 10 : " , between(5, 10));
console.log("Number Between -2 and 2 : " , between(2, -2));
