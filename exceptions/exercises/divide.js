// Write a function called 'divide' that takes two parameters: a numerator and a denominator.
// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:
function divide(num,de) {
    if (de === 0) {
        throw Error("Can't divide by 0");
    }

        return num / de;
    
}

