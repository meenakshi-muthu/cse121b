
// Function declaration for addition
function add(number1, number2) {
    return number1 + number2;
}

// Function declaration for subtraction
var subtract = function (number1, number2) {
    return number1 - number2;
};

// Arrow function for multiplication
const multiply = (number1, number2) => number1 * number2;

// Function declaration for division
function divide(number1, number2) {
    return number1 / number2;
}

// Function declaration for addNumbers
function addNumbers() {
    var num1 = parseFloat(document.getElementById('add1').value);
    var num2 = parseFloat(document.getElementById('add2').value);
    document.getElementById('sum').value = add(num1, num2);
}

// Function declaration for subtractNumbers
var subtractNumbers = function () {
    var num1 = parseFloat(document.getElementById('subtract1').value);
    var num2 = parseFloat(document.getElementById('subtract2').value);
    document.getElementById('difference').value = subtract(num1, num2);
};

// Arrow function for multiplyNumbers
const multiplyNumbers = () => {
    var num1 = parseFloat(document.getElementById('factor1').value);
    var num2 = parseFloat(document.getElementById('factor2').value);
    document.getElementById('product').value = multiply(num1, num2);
};

// Function declaration for divideNumbers
function divideNumbers() {
    var num1 = parseFloat(document.getElementById('dividend').value);
    var num2 = parseFloat(document.getElementById('divisor').value);
    document.getElementById('quotient').value = divide(num1, num2);
}

// Event listeners for button clicks
document.getElementById('addNumbers').addEventListener('click', addNumbers);
document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);
document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);
document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

// Selection Structures
document.getElementById('getTotal').addEventListener('click', function () {
    var subtotal = parseFloat(document.getElementById('subtotal').value);
    var isMember = document.getElementById('member').checked;
    var total = isMember ? subtotal * 0.9 : subtotal;
    document.getElementById('total').textContent = '$ ' + total.toFixed(2);
});

// Array Methods
var numbersArray = Array.from({ length: 13 }, (_, i) => i + 1);

document.getElementById('array').textContent = numbersArray;

// Assign the value of the array variable to the HTML element with an ID of array
document.getElementById('array').textContent = numbersArray;

// Use the filter() array method to find all odd numbers of the array variable
// and assign the result to the HTML element with an ID of odds
var oddNumbers = numbersArray.filter(number => number % 2 !== 0);
document.getElementById('odds').textContent = oddNumbers;

// Use the filter() array method to find all even numbers of the array variable
// and assign the result to the HTML element with an ID of evens
var evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.getElementById('evens').textContent = evenNumbers;

// Use the reduce() array method to sum the array variable elements
// and assign the result to the HTML element with an ID of sumOfArray
var sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.getElementById('sumOfArray').textContent = sumOfArray;

// Use the map() array method to multiply each element in the array variable by 2
// and assign the result to the HTML element with an ID of multiplied
var multipliedArray = numbersArray.map(number => number * 2);
document.getElementById('multiplied').textContent = multipliedArray;

// Use the map() and reduce() array methods to sum the array elements
// after multiplying each element by two. Assign the result to the HTML element with an ID of sumOfMultiplied
var sumOfMultiplied = multipliedArray.reduce((sum, number) => sum + number, 0);
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;

// Declare and instantiate a variable to store the current date
var currentDate = new Date();

// Declare a variable to hold the current year
var currentYear;

// Using the variable declared in number 1, call the built-in getFullYear() method/function
// and assign it to the variable declared in 2.
currentYear = currentDate.getFullYear();

// Assign the current year variable to an HTML form element with an ID of year.
document.getElementById('year').textContent = currentYear;
