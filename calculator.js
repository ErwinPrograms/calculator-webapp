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