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
    if (screenElement.innerHTML == "0") {
        if (digit == "0") {
            return
        } else {
            screenElement.innerHTML = digit
        }
    } else {
        screenElement.innerHTML = screenElement.innerHTML + digit
    }
}