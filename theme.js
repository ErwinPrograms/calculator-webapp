let themeSlider = document.querySelector(".slider-container input")

themeSlider.addEventListener("input", function(e) {
    updateThemeAllElements(this.value)
})

function updateThemeAllElements(themeNumber){
    let mainElement = document.querySelector(".main")
    let keypadElement = document.querySelector(".keypad")
    let screenElement = document.querySelector(".screen")
    let topDivElement = document.querySelector(".top")
    
    updateElementTheme(mainElement, themeNumber)
    updateElementTheme(keypadElement, themeNumber)
    updateElementTheme(screenElement, themeNumber)
    updateElementTheme(topDivElement, themeNumber)
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