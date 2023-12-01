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
const display = document.createElement('h3');
display.setAttribute('id', 'display');
display.textContent = '';
screen.appendChild(display);
let equation;
let activeOperator = '';

//button clicks fill screen with respective numbers then store them to displyValue
const button = document.querySelectorAll('.button');
button.forEach(but => {
    but.addEventListener('click', function(e) {
        const numerals = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
        const operators = ['+', '-', '/', '*'];
        if (display.textContent.length < 11 && numerals.includes(e.target.textContent.trim())) {
            display.textContent += e.target.textContent.trim();
        } 
        if (e.target.textContent.trim() === 'C') {
            display.textContent = '';
            equation = 0;
        } 
        if (operators.includes(e.target.textContent.trim())) {
            equation = +display.textContent;
            activeOperator = e.target.textContent.trim();
            display.textContent = '';
        }
        if (operators.includes(e.target.textContent.trim()) && equation === true) {
            equation = +display.textContent;
            activeOperator = e.target.textContent.trim();
            display.textContent = '';
            if (activeOperator === '+') {
                display.textContent = addition(equation, display.textContent);
                equation = 0;
            } else if (activeOperator === '-') {
                display.textContent = subtraction(equation, display.textContent);
                equation = 0;
            } else if (activeOperator === '*') {
                display.textContent = multiplication(equation, display.textContent);
                equation = 0;
            } else if (activeOperator === '/') {
                display.textContent = division(equation, display.textContent);
                equation = 0;
            };
        }
        if (e.target.textContent.trim() === '=') {
            if (activeOperator === '+') {
                display.textContent = addition(equation, display.textContent);
                equation = 0;
            } else if (activeOperator === '-') {
                display.textContent = subtraction(equation, display.textContent);
                equation = 0;
            } else if (activeOperator === '*') {
                display.textContent = multiplication(equation, display.textContent);
                equation = 0;
            } else if (activeOperator === '/') {
                display.textContent = division(equation, display.textContent);
                equation = 0;
            };
        };
    });
});