const prompt = require("prompt-sync")();
let value1 = prompt("Enter the value: ");
let value2 = prompt("Enter the value: ");

try {
  // Convert the input values to numbers
  value1 = parseFloat(value1);
  value2 = parseFloat(value2);
  
//isNaN anything not related to numbers
  if (isNaN(value1) || isNaN(value2)) {
    throw new Error("Invalid input. Please enter numeric values.");
  }

  if (value2 === 0) {
    throw new Error("Division by zero is not allowed.");
  }

  const answer = value1 / value2;
  console.log(answer);
} catch (err) {
  console.log(err);
}
