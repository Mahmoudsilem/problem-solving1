// A. Part 1: Coding Questions (7.5 Grade):
// 1. Convert the string "123" to a number and add 7.
// const str = "123";
// let output = +str + 7;
// console.log(output);
//----------------------------------------
// Check if the given variable is falsy and return "Invalid" if it is
// let input = 0;
// if (!input) {
//     console.log("Invalid");
// }else{
//     console.log("valid number✅");
// }
//-----------------------
// Use for loop to print all numbers between 1 and 10, skipping even numbers using continue 
// for (let i = 0; i < 10; i++) {
//     if (i%2 ==1) {
//         console.log(i);
//     }else{
//         continue;
//     }
// }
//---------------------------
// 4. Create an array of numbers and return only the even numbers using filter method.
// const arr = [1,2,3,4,5,6,7,8,8,9,10,13];
// console.log(arr.filter((num)=>num % 2 == 0));
//-------------------------------------
// 5. Use the spread operator to merge two arrays, then return the merged array.
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// let output = [...arr1,...arr2];
// console.log(output);
//------------------------
// 6. Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday)
// let day = 8;
// switch (day) {
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         beak;
//     case 7:
//         console.log("Saturday");
//         beak;
//     default:
//         console.log("Invalid value.");
//         break;
// }
//------------------------------------------------------
//7. Create an array of strings and return their lengths using map method
// const arr = ["a","ab","abc"];
// console.log(arr.map((str)=>str.length));
//----------------------------------------------------------------------
// 8. Write a function that checks if a number is divisible by 3 and 5.
// function checkNum(num1){
//     if(num1 % 3 === 0 && num1 % 5 === 0  ){
//         console.log("Divisible by both");
//     }else{
//         console.log("Not divisible by both");
//     }
// }
// checkNum(15);
//--------------------------------------------------
//9. Write a function using arrow syntax to return the square of a number
// let num = 5;
// const square = num => console.log(num * num);
// square(num);
//-------------------------------------------------------------------
//10.Write a function that destructures an object to extract values and returns a formatted string.
// const person = {name: 'John', age: 25};
// const {name,age} = person;
// console.log(`${name} is ${age} years old`);
//11.Write a function that accepts multiple parameters (two or more) and returns their sum.
// function sum(...nums){
//     let sum = 0;
//     for (const num of nums) {
//         sum += num
//     }
//     console.log(sum); 
// }
// function sum(...nums){
//     let sum = 0;
//     nums.map(num=>sum += num)
//     console.log(sum); 
// }
// sum(1,5,3);
//------------------------------------------------
//12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message.
// async function success() {
//     setTimeout(()=>{console.log("Success✅")},"3000")
// }
// success();
//---------------------------------------
// 13. Write a function to find the largest number in an array
// const arr = [1,-3,8,0,6];
// function findLargestNum(arr){
//     let largestNum = -999999;
//     arr.map((num)=>num > largestNum?largestNum = num:undefined);
//     console.log(largestNum);
// }
// findLargestNum(arr);
//--------------------------------------------------------
//14. Write a function that takes an object and returns an array containing only its keys.
// const obj = {name: "Ali", age: 30};
// console.log(Object.keys(obj));
//-----------------------------------------------
//15. Write a function that splits a string into an array of words based on spaces.
// const str = "The quick brown fox";
// const arr = str.split(" ");
// console.log(arr);
//---------------------------------------------------------
/*
1.	What is the difference between forEach and for...of? When would you use each?
Both loop on the array.
- forEach uses arow function that always return undefined.
- With forEech we can’t use return or continue or break.
- ForEach can only be used with array like objects.
- for of use cases: Use for of in you iterating over some thing that is not an array or whin you need to use brake.
- forEach use cases: looping on an array and you do not need to use brake

------------------------------------------------------------------------
   
3-What are the main differences between == and ===?
== Operator that compare value only Ex:1==”1” =>true.
=== Compare value and data type Ex 1 ===”1” =>false.

*/

