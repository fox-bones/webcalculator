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
const n7 = document.getElementsByClassName('number7');
const n8 = document.getElementsByClassName('number8');
const n9 = document.getElementsByClassName('number9');
const div = document.getElementsByClassName('operator-d');
const n4 = document.getElementsByClassName('number4');
const n5 = document.getElementsByClassName('number5');
const n6 = document.getElementsByClassName('number6');
const multi = document.getElementsByClassName('operator-m');
const n1 = document.getElementsByClassName('number1');
const n2 = document.getElementsByClassName('number2');
const n3 = document.getElementsByClassName('number3');
const sub = document.getElementsByClassName('operator-s');
const n0 = document.getElementsByClassName('number0');
const dec = document.getElementsByClassName('decimal');
const clear = document.getElementsByClassName('clear');
const addi = document.getElementsByClassName('operator-a');
const euqality = document.getElementsByClassName('equality');

