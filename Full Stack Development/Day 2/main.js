// Importing the 'add' function from math.js module
import { add } from './math.js';

// Adding an event listener to the button with ID 'calculate'
// When the button is clicked, the calculation happens
document.getElementById('calculate').addEventListener('click', () => {
    // Retrieving values from the input fields by their ID
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Check if the values are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers!');
        return;
    }

    // Calling the 'add' function to add the two numbers
    const result = add(num1, num2);

    // Displaying the result in an alert box
    alert(`The result is ${result}`);
});
