// Importing the utility functions from the utilities.js file
const {
    printWelcomeMessage,
    celsiusToFahrenheit,
    fahrenheitToCelsius,
    minutesToHours,
    calculateFactorial,
    fibonacci
} = require('./utilities');

// Call/invoke the functions from the utilities file
printWelcomeMessage("John", "Doe");

console.log("35 Celsius in Fahrenheit:", celsiusToFahrenheit(35));
console.log("70 Fahrenheit in Celsius:", fahrenheitToCelsius(70));

console.log("120 minutes in hours:", minutesToHours(120));

console.log("Factorial of 5:", calculateFactorial(5));

console.log("10th Fibonacci number:", fibonacci(10));
