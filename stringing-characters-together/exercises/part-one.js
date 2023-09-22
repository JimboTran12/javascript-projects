let num = 120.01;

//Returns 'undefined'.
console.log(num.length);
console.log(typeof num);
//Use type conversion to print the length (number of digits) of an integer.
num = String(num);
//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
console.log(`Number : ${num}\nLength: ${num.length - 1}`)
//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if (num.indexOf('.') !== -1 ) { //Deximals
    console.log(`Number : ${num}\nLength: ${num.length - 1}`);
} else { // interger
    console.log(`Number : ${num}\nLength: ${num.length}`);
}

