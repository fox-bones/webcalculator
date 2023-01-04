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

console.log(operate(5, '/', 7));