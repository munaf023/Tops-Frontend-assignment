// Q.30 What are the looping structures in JavaScript? Any one Example?
// Ans 30:
// Loops are used in JavaScript to repeatedly execute a block of code as long as a specified condition is true. There are several types of loops in JavaScript:
// 1.	For loop: The For loop is used when you know in advance how many times you want to execute a statement or a block of statements.
// 2.	While loop: The while loop executes its statements as long as a specified condition evaluates to true. The condition is evaluated before executing the statements.
// 3.	Do...while loop: The do...while loop is similar to the while loop, but it evaluates its condition at the end of the loop. This guarantees that the loop's body is executed at least once.
// 4.	For...in loop: The for...in loop iterates over the enumerable properties of an object.
// 5.	For...of loop: The for...of loop iterates over the values of an iterable object (like an array)
// example:
     // 1. For loop
    //  for (let i = 0; i < 5; i++) {
    //     console.log(i);  //0, 1, 2, 3, 4
    // }

// ##########################################################################


// question31
// Write a print 972 to 897 using for loop in JS?

// let m;

// for(m = 972; m>=897; m--)
//     {
//         console.log(m);
//     }


// ##########################################################################

// question 32
// Write to print factorial of given number?
// let j;
// let fact = 1;
// let num = parseInt(prompt("enter number: "));

// for(j=1; j<=num; j++)
//     {
//         fact = fact * j;
//         //fact *= j
//     }
//     console.log(fact);

// ##########################################################################


// question 33

// Write to print Fibonacci series up to given numbers?

// let n1 = 0;
// let n2 = 1;
// let n3 = n1 + n2;

// console.log(n1,n2,n3);

// for(i = 0; i<=10; i++)
//     {
//         n1 = n2;
//         n2 = n3;
//         n3 = n1+n2;
//         console.log(n3);
//     }


// ##########################################################################

// Question 34

// Write to print number in reverse order e.g.: number = 64728 ---> reverse =82746 in JS?
// code:
// function reverseNumber(number) {
//     return parseInt(number.toString().split('').reverse().join(''), 10);
// }

// const givenNumber = 64728;
// const result = reverseNumber(givenNumber);

// console.log(`The reverse of ${givenNumber} is: ${result}`); 
//  // Output: The reverse of 64728 is: 82746


// ##########################################################################

// Question 35 Write a program make a summation of given number (E.g., 1523 Ans: - 11) in JS? 
// code

// function sumOfDigits(number) {
//     const numberString = number.toString();
    
//     let sum = 0;

//     for (let char of numberString) {

//         sum += parseInt(char, 10);
//     }

//     return sum;
// }

// // Example usage:
// const givenNumber = 1523;
// const result = sumOfDigits(givenNumber);

// console.log(`The summation of the digits of ${givenNumber} is: ${result}`); 
//  // Output: The summation of the digits of 1523 is: 11

// ##########################################################################

// Q.36 Write a program you have to make a summation of first and last Digit. (E.g., 1234 Ans: -
//     5) in JS? 

// function sumFirstAndLastDigit(number) {
//     const numberString = number.toString();
//     const firstDigit = parseInt(numberString[0], 10);
//     const lastDigit = parseInt(numberString[numberString.length - 1], 10);
//     const sum = firstDigit + lastDigit;
//     return sum;
// }

// const givenNumber = 1234;
// const result = sumFirstAndLastDigit(givenNumber);

// console.log(`The summation of the first and last digits of ${givenNumber} is: ${result}`);  // Output: The summation of the first and last digits of 1234 is: 5


// ##########################################################################

// Q.37 Use console.log() and escape characters to print the following pattern in JS?
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

// code
// console.log("1 1 1 1 1");
// console.log("2 1 2 4 8");
// console.log("3 1 3 9 27");
// console.log("4 1 4 16 64");
// console.log("5 1 5 25 125");

// 38). Use pattern in console.log in JS?
//1) 1
//   1 0
//   1 0 1
//   1 0 1 0
//   1 0 1 0 1 

// code 
// for (let i = 1; i <= 5; i++) {
//     let pattern = '';
//     for (let j = 1; j <= i; j++) {
//         pattern += (j % 2) + ' ';
//     }
//     console.log(pattern.trim());
// }

// 2) A
//    B C
//    D E F 
//    G H I J
//    K L M N O 

// CODE


// let n = 5; // you can take input using prompt or change the value
// let string = "";
// let count = 0;
// // External loop
// for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < i; j++) {
//         string += String.fromCharCode(count + 65);
//         count++; // increment cause next alphabet
//     }
//     string += '<br>';
// }
// document.write(string);


// 3) 1
//    2 3
//    4 5 6
//    7 8 9 10
//    11 12 13 14 15


// let num = 1;
// for(i=1;i<=5;i++)
// {
//     for(j=1;j<=i;j++)
//     {
//         document.write(num);
//         num++;
//     }
//     document.write('<br>')
// }    


// 4)    *
    //   * *
    //   * * *
    //   * * * *
    //   * * * * *

   // for(let i=1;i<=5;i++) 
        // {
        //     for(let j=1;j<=i;j++)
        //     {
        //         document.write("*");
        //     }
        //     document.write('<br>')
        // }

//######################################################################

// Q.39 Accept 3 numbers from user using while loop and check each numbers palindrome?

// function isPalindrome(number) {
//     const str = number.toString();
//     const reversedStr = str.split('').reverse().join('');
//     return str === reversedStr;
// }

// const numbers = [];
// let count = 0;

// while (count < 3) {
//     const userInput = prompt(`Enter number ${count + 1}:`);
//     const num = parseInt(userInput, 10);
//     if (!isNaN(num)) {
//         numbers.push(num);
//         count++;
//     }
// }

// numbers.forEach(number => {
//     const result = isPalindrome(number) ? "is a palindrome" : "is not a palindrome";
//     console.log(`${number} ${result}.`);
// });

