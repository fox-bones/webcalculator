let add = function(array) {
    let solution = array[0];
    for (let i = 1; i < array.length; i++) {
        solution += array[i];
    };
    return solution;
};

let subtract = function(array) {
    let solution = array[0];
    for (let i = 1; i < array.length; i++) {
        solution -= array[i];
    };
    return solution;
};

let multiply = function(array) {
    let solution = array[0];
    for (let i = 1; i < array.length; i++) {
        solution *= array[i];
    };
    return solution;
};

let divide = function(array) {
    let solution = array[0];
    for (let i = 1; i < array.length; i++) {
        if ( array[i] === 0 ) {
            solution = 0;
        } else {
            solution /= array[i];
        };
    };
    return solution;
};

let operate = function(num1, operator, num2) {
    switch(operator) {
        case '-':
            return subtract([num1, num2]);
        case '+':
            return add([num1, num2]);
        case '*':
            return multiply([num1, num2]);
        case '/':
            return divide([num1, num2]);
    };
};

// assigning html elements
const screen = document.querySelector('#screen');
const equation = document.createElement('h3');
equation.setAttribute('id', 'equation');
equation.textContent = '';
screen.appendChild(equation);
let displayValue = '';

//button clicks fill screen with respective numbers
const button = document.querySelectorAll('.button');
button.forEach(but => {
    but.addEventListener('click', function(e) {
        const numerals = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
        const operators = ['+', '-', '/', '*'];
        if (equation.textContent.length < 11 && numerals.includes(e.target.textContent.trim())) {
            equation.textContent += e.target.textContent.trim();
        } else if (e.target.textContent.trim() === 'C') {
            equation.textContent = '';
            displayValue = 0;
        } else if (operators.includes(e.target.textContent.trim())) {
            displayValue += equation.textContent + e.target.textContent.trim();
            equation.textContent = '';
            console.log(displayValue);
        }
    });
});