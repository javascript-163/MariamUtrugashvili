//Task1

// let number = prompt("Enter a number:");
if (isNaN(number)) {
    alert("Please enter a valid numeric value.");
} else {
    let pow = number * number;
    alert(`The square of the entered number ${number} is ${pow}.`);
}

//Task2
let celsiusTemperature = prompt("Enter the temperature in Celsius:");

if (isNaN(celsiusTemperature)) {
    alert("Please enter a valid numeric value for the Celsius temperature.");
} else {
    let fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;
    alert(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F`);
}

//Task3
let numberInput = prompt("Enter a number:");
let startRangeInput = prompt("Enter the start of the range:");
let endRangeInput = prompt("Enter the end of the range:");

// სტრინგები გადამყავს ფლოატში, რადგან მინუსიანი რიცხვების შედარებისას არასწორად ადარებს 
// მაგალითად: -1 რომ ჩავწეროთ numberInput-ში და სტრინგით შევადაროთ არასწორ შედეგს მივიღებთ 
//პროგრამა გვეტყვის, რომ -1 არ არის -2 ის და 5 ის რეინჯში. 
numberInput = parseFloat(numberInput);
startRangeInput = parseFloat(startRangeInput);
endRangeInput = parseFloat(endRangeInput);


if (isNaN(numberInput) || isNaN(startRangeInput) || isNaN(endRangeInput)) {
    alert("Please enter valid numeric values.");
} else {
    if (numberInput >= startRangeInput && numberInput <= endRangeInput) {
        alert(`The number ${numberInput} is in the range [${startRangeInput}, ${endRangeInput}]`);
    } else {
        alert(`The number ${numberInput} is not in the range [${startRangeInput}, ${endRangeInput}]`);
    }
}

//Task 4
let yearInput = prompt("Enter a year:");
let year = parseInt(yearInput);

if (isNaN(year)) {
    alert("Please enter a valid numeric value for the year.");
} else {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        alert(`${year} is a leap year.`);
    } else {
        alert(`${year} is not a leap year.`);
    }
}

//Task5
let firstNumber = prompt("Enter the first number:");
let secondNumber = prompt("Enter the second number:");
let operator = prompt("Enter the operator (+, -, *, /):");

firstNumber = parseFloat(firstNumber);
secondNumber = parseFloat(secondNumber);

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert("Please enter valid numeric values.");
} else {
    let result;
    switch (operator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            result = secondNumber !== 0 ? firstNumber / secondNumber :  alert('Cannot divide by zero');
            break;
        default:
            alert("Invalid operator. Please enter +, -, *, or /.");
            break;
    }

    alert(`Result: ${result}`);
}
