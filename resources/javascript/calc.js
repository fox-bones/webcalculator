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

//button clicks fill screen with respective numbers -line 58 to 152
const n7 = document.querySelector('#number7');
n7.addEventListener('click', function() {
    if (document.getElementById('equation').innerText.length < 27) {
        equation.textContent += '7';
    };
});
const n8 = document.querySelector('#number8');
n8.addEventListener('click', function() {
    if (document.getElementById('equation').innerText.length < 27) {
        equation.textContent += '8';
    };
});
const n9 = document.querySelector('#number9');
n9.addEventListener('click', function() {
    if (document.getElementById('equation').innerText.length < 27) {
        equation.textContent += '9';
    };
});
const div = document.querySelector('#operator-d');
div.addEventListener('click', function() {
    if (document.getElementById('equation').innerText.length < 27) {
        equation.textContent += ' / ';
    };
});
const n4 = document.querySelector('#number4');
n4.addEventListener('click', function() {
    if (document.getElementById('equation').innerText.length < 27) {
        equation.textContent += '4';
    };
});
const n5 = document.querySelector('#number5');
n5.addEventListener('click', function() {
    if (document.getElementById('equation').innerText.length < 27) {
        equation.textContent += '5';
    };
});
const n6 = document.querySelector('#number6');
n6.addEventListener('click', function() {
    if (document.getElementById('equation').innerText.length < 27) {
        equation.textContent += '6';
    };
});
const mult = document.querySelector('#operator-m');
mult.addEventListener('click', function() {
    if (document.getElementById('equation').innerText.length < 27) {
        equation.textContent += ' * ';
    };
});
const n1 = document.querySelector('#number1');
n1.addEventListener('click', function() {
    if (document.getElementById('equation').innerText.length < 27) {
        equation.textContent += '1';
    };
});
const n2 = document.querySelector('#number2');
n2.addEventListener('click', function() {
    if (document.getElementById('equation').innerText.length < 27) {
        equation.textContent += '2';
    };
});
const n3 = document.querySelector('#number3');
n3.addEventListener('click', function() {
    if (document.getElementById('equation').innerText.length < 27) {
        equation.textContent += '3';
    };
});
const sub = document.querySelector('#operator-s');
sub.addEventListener('click', function() {
    if (document.getElementById('equation').innerText.length < 27) {
        equation.textContent += ' - ';
    };
});
const n0 = document.querySelector('#number0');
n0.addEventListener('click', function() {
    if (document.getElementById('equation').innerText.length < 27) {
        equation.textContent += '0';
    };
});
const dec = document.querySelector('#decimal');
dec.addEventListener('click', function() {
    if (document.getElementById('equation').innerText.length < 27) {
        equation.textContent += '.';
    };
});
const clear = document.querySelector('#clear');
clear.addEventListener('click', function() {
    equation.textContent = '';
});
const addi = document.querySelector('#operator-a');
addi.addEventListener('click', function() {
    if (document.getElementById('equation').innerText.length < 27) {
        equation.textContent += ' + ';
    };
});

/* const button = document.querySelectorAll('.button');
button.forEach(but => {
    but.addEventListener('click', function(e) {
        console.log(e.target);
    });
});