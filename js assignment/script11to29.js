//11. Find circumference of Rectangle formula : C = 4 * a ?

// let c;

// let a = parseInt(prompt("Enter a number:"));

// console.log(c = 4 * a);

// question 12:
//WAP to convert years into days and days into years?

// let day = parseInt(prompt("enter number of days"));
// let month;
// let y = day/365;
// day = day%365;
// month = day/30;
// day = day%30;
// console.log(`${y}Year ${month}month ${day}day`);

// let year = parseInt(prompt("enter number of year"))
// let day;
// day = 365 * year;

// console.log(day);

// example 13
// Convert temperature Fahrenheit to Celsius? (Conditional logic Question)

// let f = parseInt(prompt("enter Fahrenheit:"));

// let c;

// console.log(c = (f-32)*5/9);

// example 15
//What is the result of the expression (5 > 3 && 2 < 4)?
// console.log((5 > 3 && 2 < 4)); //true

// example 16
// What is the result of the expression (true && 1 && "hello")?
// console.log((true && 1 && "hello")); //hello

// example 17
// What is the result of the expression true && false || false && true?
// console.log( (true && false || false && true)); //false

// example 22
// Check Number Is Positive or Negative in JavaScript?
// let num = parseInt(prompt("Enter number to check:"));

// if(num>0)
//     {
//         console.log("Postive");
//     }
// else{
//     console.log("Negative");
// }

// example 23

// Find the Character Is Vowel or Not ?

// let ch = prompt("Enter character: ");

// if(ch == 'a'|| ch=='e' || ch =='i' || ch=='o'|| ch=='u')
// {
//     console.log(`${ch} is vowel`);
// }
// else if(ch == 'A'|| ch=='E' || ch =='I' || ch=='O'|| ch=='U')
//     {
//         console.log(`${ch} is vowel`);
//     }
// else{
//     console.log(`${ch} is consonant`);
// }

// example 24
// Write to check whether a number is negative, positive or zero?

// let num = parseInt(prompt("Enter number to check:"));

// if (num > 0) {
//   console.log("Positive   ");
// } else if (num < 0) {
//   console.log("Negative");
// } else {
//   console.log("zero");
// }


// example 25
// Write to find number is even or odd using ternary operator in JS?

// let num = parseInt(prompt("Enter a number:"));

// (num%2==0)?(console.log("even")):(console.log("odd"));

// example 26 

// Write find maximum number among 3 numbers using ternary operator in JS?

// let n1 = parseInt(prompt("Enter a number: "));
// let n2 = parseInt(prompt("Enter a number: "));
// let n3 = parseInt(prompt("Enter a number: "));

// (n1 > n2 && n1 > n3) ? console.log(`${n1} is the maximum`) :
// (n2 > n1 && n2 > n3) ? console.log(`${n2} is the maximum`) :
// console.log(`${n3} is the maximum`);


// example 27 

// Write to find minimum number among 3 numbers using ternary operator in JS? 

// let n1 = parseInt(prompt("Enter a number: "));
// let n2 = parseInt(prompt("Enter a number: "));
// let n3 = parseInt(prompt("Enter a number: "));

// (n1 < n2 && n1 < n3) ? console.log(`${n1} is the minimum`) :
// (n2 < n1 && n2 < n3) ? console.log(`${n2} is the minimum`) :
// console.log(`${n3} is the minimum`);

// example 28 

// Write to find the largest of three numbers in JS?

// let n1 = parseInt(prompt("Enter a number: "));
// let n2 = parseInt(prompt("Enter a number: "));
// let n3 = parseInt(prompt("Enter a number: "));

// if(n1>n2 && n1>n3)
//     {
//         console.log(`${n1} is largest`);
//     }
// else if(n2 > n1 && n2 > n3)
//     {
//         console.log(`${n2} is largest`);
//     }
// else {
//     console.log(`${n3} is largest`);
// }    


// Q.29 Write to show
// i. Monday to Sunday using switch case in JS?
// ii. Vowel or Consonant using switch case in JS?

// solution i 

// let week =parseInt(prompt("enter number of week: "));

// switch (week) {
//     case 1:
//             console.log("monday");        
//         break;
//     case 2:
//             console.log("Tuseday");        
//         break;
//     case 3:
//             console.log("Wednesday");        
//         break;
//     case 4:
//             console.log("Thursday");        
//         break;
//     case 5:
//             console.log("Friday");        
//         break;
//     case 6:
//             console.log("Saturday");        
//         break;
//     case 7:
//             console.log("Sunday");        
//         break;
//     default:
//         console.log("Invalid");
//         break;
// }

// ii solution

// let ch = prompt("enter alphabet to check vowels or consonant: ");

// switch (ch) {
//     case 'a':
//             console.log(`${ch} is vowel`);
//         break;
//     case 'e':
//             console.log(`${ch} is vowel`);
//         break;
//     case 'i':
//             console.log(`${ch} is vowel`);
//         break;
//     case 'o':
//             console.log(`${ch} is vowel`);
//         break;
//     case 'u':
//             console.log(`${ch} is vowel`);
//         break;
//     case 'A':
//             console.log(`${ch} is vowel`);
//         break;
//     case 'E':
//             console.log(`${ch} is vowel`);
//         break;
//     case 'I':
//             console.log(`${ch} is vowel`);
//         break;
//     case 'O':
//             console.log(`${ch} is vowel`);
//         break;
//     case 'U':
//             console.log(`${ch} is vowel`);
//         break;

//     default:
//         console.log(`${ch} is consonant`);
//         break;
// }
