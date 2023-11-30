// equations!!
const addition = function(num1, num2) {
    return +num1 + +num2;
};
const subtraction = function(num1, num2) {
    return +num1 - +num2;
};
const multiplication = function(num1, num2) {
    return +num1 * +num2;
};
const division = function(num1, num2) {
    return +num1 / +num2;
};

// assigning html elements
const screen = document.querySelector('#screen');
const equation = document.createElement('h3');
equation.setAttribute('id', 'equation');
equation.textContent = '';
screen.appendChild(equation);
let displayValue = '';
let activeOperator = '';

//button clicks fill screen with respective numbers then store them to displyValue
const button = document.querySelectorAll('.button');
button.forEach(but => {
    but.addEventListener('click', function(e) {
        const numerals = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
        const operators = ['+', '-', '/', '*'];
        if (equation.textContent.length < 11 && numerals.includes(e.target.textContent.trim())) {
            equation.textContent += e.target.textContent.trim();
        } 
        if (e.target.textContent.trim() === 'C') {
            equation.textContent = '';
            displayValue = '';
        } 
        if (operators.includes(e.target.textContent.trim())) {
            displayValue += equation.textContent;
            activeOperator = e.target.textContent.trim();
            equation.textContent = '';
        } 
        if (e.target.textContent.trim() === '=') {
            if (activeOperator === '+') {
                equation.textContent = addition(displayValue, equation.textContent);
                displayValue = '';
            } else if (activeOperator === '-') {
                equation.textContent = subtraction(displayValue, equation.textContent);
                displayValue= '';
            } else if (activeOperator === '*') {
                equation.textContent = multiplication(displayValue, equation.textContent);
                displayValue = '';
            } else if (activeOperator === '/') {
                equation.textContent = division(displayValue, equation.textContent);
                displayValue = '';
            };
        };
    });
});