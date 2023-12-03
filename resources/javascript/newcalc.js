const button = document.querySelectorAll('.button')
const screen = document.querySelector('#screen')
const display = document.createElement('h3')
display.style.fontFamily = "Orbitron,sans-serif"
display.setAttribute('id', 'display')
display.textContent = ''
screen.appendChild(display)
let storedNumbers = []
let operatorPresence = false
let activeOperator = ''

// basic equations used on operators below
let addition = function(array) {
    let solution = array[0]
    for (let i = 1; i < array.length; i++) {
        solution += array[i]
    }
    return +solution.toFixed(3)
}
let subtraction = function(array) {
    let solution = array[0]
    for (let i = 1; i < array.length; i++) {
        solution -= array[i]
    }
    return +solution.toFixed(3)
}
let division = function(array) {
    let solution = array[0]
    for (let i = 1; i < array.length; i++) {
        solution /= array[i]
    }
    return +solution.toFixed(3)
}
let multiplication = function(array) {
    let solution = array[0]
    for (let i = 1; i < array.length; i++) {
        solution *= array[i]
    }
    return +solution.toFixed(3)
}

button.forEach(but => {
    but.addEventListener('click', function(e) {
        const numerals = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.']
        const operators = ['+', '-', '/', '*', '=']
        //fills screen when a numeral is selected if the number of characters aren't stretching the screen
        if (display.textContent.length < 8 && numerals.includes(e.target.textContent.trim())) {
            display.textContent += e.target.textContent.trim()
        }
        if (display.textContent.length < 8 && numerals.includes(e.target.textContent.trim()) && operatorPresence === true) {
            display.textContent = ''
            display.textContent += e.target.textContent.trim()
            operatorPresence = false
        }
        if (e.target.textContent.trim() === 'C') {
            display.textContent = ''
            storedNumbers = []
            operatorPresence = false
            activeOperator = ''
        }
        //storing numbers to the storedNumbers array when an operator is chosen
        if (operators.includes(e.target.textContent.trim()) && display.textContent != false && activeOperator != '=') {
            storedNumbers.push(Number(display.textContent))
            console.log(storedNumbers)
            console.log(activeOperator)
            operatorPresence = true
        }
        //handling complex equations with more than one operator - ex. 9 * 7 + 2 or 326 - 45 / 7 * 42 etc.
        // addition rules on complex equations -----------------------------------------
        if (e.target.textContent.trim() === "+" && display.textContent != false) {
            if (activeOperator === '-') {
                display.textContent = subtraction(storedNumbers)
                storedNumbers = [subtraction(storedNumbers)]
            } else if (activeOperator === '/') {
                display.textContent = division(storedNumbers)
                storedNumbers = [division(storedNumbers)]
            } else if (activeOperator === '*') {
                display.textContent = multiplication(storedNumbers)
                storedNumbers = [multiplication(storedNumbers)]
            } else {
                display.textContent = addition(storedNumbers)
                storedNumbers = [addition(storedNumbers)]
            }
            activeOperator = '+'
        }
        //subtraction rules on complex equations -----------------------------------------
        if (e.target.textContent.trim() === "-" && display.textContent != false) {
            if (activeOperator === '+') {
                display.textContent = addition(storedNumbers)
                storedNumbers = [addition(storedNumbers)]
            } else if (activeOperator === '/') {
                display.textContent = division(storedNumbers)
                storedNumbers = [division(storedNumbers)]
            } else if (activeOperator === '*') {
                display.textContent = multiplication(storedNumbers)
                storedNumbers = [multiplication(storedNumbers)]
            } else {
                display.textContent = subtraction(storedNumbers)
                storedNumbers = [subtraction(storedNumbers)]
            }
            activeOperator = '-'
        }
        //division rules on complex equations -------------------------------------------
        if (e.target.textContent.trim() === "/" && display.textContent != false) {
            if (activeOperator === '+') {
                display.textContent = addition(storedNumbers)
                storedNumbers = [addition(storedNumbers)]
            } else if (activeOperator === '-') {
                display.textContent = subtraction(storedNumbers)
                storedNumbers = [subtraction(storedNumbers)]
            } else if (activeOperator === '*') {
                display.textContent = multiplication(storedNumbers)
                storedNumbers = [multiplication(storedNumbers)]
            } else {
                display.textContent = division(storedNumbers)
                storedNumbers = [division(storedNumbers)]
            }
            activeOperator = '/'
        }
        //multiplication rules on complex equations ------------------------------------
        if (e.target.textContent.trim() === "*" && display.textContent != false) {
            if (activeOperator === '+') {
                display.textContent = addition(storedNumbers)
                storedNumbers = [addition(storedNumbers)]
            } else if (activeOperator === '-') {
                display.textContent = subtraction(storedNumbers)
                storedNumbers = [subtraction(storedNumbers)]
            } else if (activeOperator === '/') {
                display.textContent = division(storedNumbers)
                storedNumbers = [division(storedNumbers)]
            } else {
                display.textContent = multiplication(storedNumbers)
                storedNumbers = [multiplication(storedNumbers)]
            }
            activeOperator = '*'
        }
        //when pressing equal sign at the end of an equation 
        if (e.target.textContent.trim() === '=' && display.textContent != false) {
            if (activeOperator === '+') {
                display.textContent = addition(storedNumbers)
                storedNumbers = [Number(display.textContent)]
            } else if (activeOperator === '-') {
                display.textContent = subtraction(storedNumbers)
                storedNumbers = [subtraction(storedNumbers)]
            } else if (activeOperator === '/') {
                display.textContent = division(storedNumbers)
                storedNumbers = [division(storedNumbers)]
            } else if (activeOperator === '*') {
                display.textContent = multiplication(storedNumbers)
                storedNumbers = [multiplication(storedNumbers)]
            }
            activeOperator = '='
        }
    })
})