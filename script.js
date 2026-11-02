// Date requirement
const today = new Date();

// Getting each part of the date
const month = today.getMonth() + 1;
const day = today.getDate();
const year = today.getFullYear();

// Convert to string
const monthText = String(month).padStart(2, "0");
const dayText = String(day).padStart(2, "0");

const dateText = "Today is " + monthText + "/" + dayText + "/" + year;
document.getElementById("dateOutput").textContent = dateMessage;

// Number conversion

const valueOne = "42";
const valueTwo = "67.420";
const valueThree = "string";
const valueFour = "100";

// Display original values
console.log(valueOne);
console.log(valueTwo);
console.log(valueThree);
console.log(valueFour);

// Convert each one with Number()
const convertOne = Number(valueOne);
const convertTwo = Number(valueTwo);
const convertThree = Number(valueThree);
const convertFour = Number(valueFour);

// Check each converted result with Number.isNaN()
const isNaNOne = Number.isNaN(convertOne);
const isNaNTwo = Number.isNaN(convertTwo);
const isNaNThree = Number.isNaN(convertThree);
const isNaNFour = Number.isNaN(convertFour);

// Check each converted result with Number.isInteger()
const isIntegerOne = Number.isInteger(convertOne);
const isIntegerTwo = Number.isInteger(convertTwo);
const isIntegerThree = Number.isInteger(convertThree);
const isIntegerFour = Number.isInteger(convertFour);

// Build one sentence per value
const resultOne = "Original: '" + valueOne + "' -> Converted: " + convertOne +
    " -> isNaN: " + isNaNOne + " -> isInteger: " + isIntegerOne;
const resultTwo = "Original: '" + valueTwo + "' -> Converted: " + convertTwo +
    " -> isNaN: " + isNaNTwo + " -> isInteger: " + isIntegerTwo;
const resultThree = "Original: '" + valueThree + "' -> Converted: " + convertThree +
    " -> isNaN: " + isNaNThree + " -> isInteger: " + isIntegerThree;
const resultFour = "Original: '" + valueFour + "' -> Converted: " + convertFour +
    " -> isNaN: " + isNaNFour + " -> isInteger: " + isIntegerFour;

    // Print
const conversionOutput = resultOne + "<br>" + resultTwo + "<br>" +
    resultThree + "<br>" + resultFour;

document.getElementById("numberConversionOutput").innerHTML = conversionOutput;

// Part 3: Math & Formatting

const itemPrice = 24.99;
const taxRate = 0.0975;
const shippingCost = 5;

// Calculations
const taxAmount = itemPrice * taxRate;
const totalCost = itemPrice + taxAmount + shippingCost;
const annualSalary = 100000;

const mathResults = "Item price: $" + itemPrice.toFixed(2) + "<br>" +
    "Tax amount: $" + taxAmount.toFixed(2) + "<br>" +
    "Shipping: $" + shippingCost.toFixed(2) + "<br>" +
    "Total cost: $" + totalCost.toFixed(2) + "<br>" +
    "Example salary: $" + annualSalary.toLocaleString();

document.getElementById("mathOutput").innerHTML = mathResults;

let nanMessage = "";
if (isNaNThree) {
    nanMessage = "'" + valueThree + "' is not a valid number.";
} else {
    nanMessage = "'" + valueThree + "' is a valid number.";
}

let orderMessage = "";
if (totalCost >= 30) {
    orderMessage = "Large order: total is $30 or more.";
} else {
    orderMessage = "Small order: total is under $30.";
}

// Append each message to the section it relates to
document.getElementById("numberConversionOutput").innerHTML +=
    "<br><strong>" + nanMessage + "</strong>";
document.getElementById("mathOutput").innerHTML +=
    "<br><strong>" + orderMessage + "</strong>";