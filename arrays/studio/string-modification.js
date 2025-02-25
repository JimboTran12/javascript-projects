const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.slice(3, str.length) + str.slice(0, 3);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Original string: ${str}`);
console.log(`New string: ${newStr}`);


//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let num = input.question("Enter number of characters to be replaced: ");

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if(num < 1 || num > str.length) {
    newStr = str.slice(3, str.length) + str.slice(0, 3);
    console.log(`Outside of range, default to 3 characters. New string: ${newStr}`)
} else {
    newStr = str.slice(num, str.length) + str.slice(0, num);
    console.log(`New string: ${newStr}`);

}