let themeSlider = document.querySelector(".slider-container input")

themeSlider.addEventListener("input", function(e) {
    updateThemeAllElements(this.value)
})

function updateThemeAllElements(themeNumber){
    let elementsToUpdate = [
        document.querySelector(".main"),
        document.querySelector(".keypad"),
        document.querySelector(".screen"),
        document.querySelector(".top")
    ]
    
    elementsToUpdate.forEach(element => {
        updateElementTheme(element, themeNumber)
    });
}

function updateElementTheme(element, themeNumber) {
    element.classList.add("theme" + themeNumber)

    for (let step = 1; step <= 3; step++) {
        if(step == themeNumber) {
            continue
        }

        element.classList.remove("theme" + step)
    }
}