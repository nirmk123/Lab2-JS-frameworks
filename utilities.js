// Function to print a welcome message
function printWelcomeMessage(firstName, lastName) {
  console.log(`Welcome ${firstName} ${lastName} to G@I College`);
}

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

// Function to convert minutes to hours
function minutesToHours(minutes) {
  return minutes / 60;
}

// Function to calculate factorial
function calculateFactorial(n) {
  if (n === 0 || n === 1) {
      return 1;
  } else {
      return n * calculateFactorial(n - 1);
  }
}

// Advanced function - Example: finding the nth Fibonacci number
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Exporting functions for use in other files
module.exports = {
  printWelcomeMessage,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  minutesToHours,
  calculateFactorial,
  fibonacci
};

