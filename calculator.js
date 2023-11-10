let screenElement = document.querySelector(".screen")

let allDigitButtons = document.querySelectorAll(".digit")

allDigitButtons.forEach(element => {
    element.addEventListener("click", function(e) {
        appendDigit(this.innerHTML)
    })
});

let resetButton = document.querySelector(".reset")

resetButton.addEventListener("click", function(e) {
    screenElement.innerHTML = "0"
})

function appendDigit(digit) {
    let display = screenElement.innerHTML

    if (digit == "." && display.includes(".")) {
        return
    }

    if (display == "0") {
        if (digit == "0") {
            return
        }
        if (digit != ".") {
            screenElement.innerHTML = digit
        }
        if (digit == ".") {
            screenElement.innerHTML = "0."
        }
    } else {
        screenElement.innerHTML = display + digit
    }
}

let deleteButton = document.querySelector(".delete")

deleteButton.addEventListener("click", function(e) {
    let display = screenElement.innerHTML

    if(display.length == 1) {
        screenElement.innerHTML = 0
    } else {
        screenElement.innerHTML = display.substring(0, display.length - 1)
    }
})

let storedNumberString
let storedOperatorString

let additionButton = document.querySelector(".addition")

additionButton.addEventListener("click", function(e) {
    storedNumberString = screenElement.innerHTML
    storedOperatorString = "+"
    screenElement.innerHTML = 0;
})

let equalsButton = document.querySelector(".equals")

equalsButton.addEventListener("click", function(e) {
    console.log(Number(storedNumberString) + Number(screenElement.innerHTML) + storedOperatorString)
    let answer = calculate(Number(storedNumberString), Number(screenElement.innerHTML), storedOperatorString)
    
    storedOperatorString = ""
    storedNumberString = answer
    screenElement.innerHTML = answer
})

function calculate(number1, number2, operationString) {
    if (operationString == "+") {
        return number1 + number2
    } else if (operationString == "-") {
        return number1 - number2
    } else if (operationString == "/") {
        return number1 / number2
    } else if (operationString == "&times;") {
        return number1 * number2
    }
}