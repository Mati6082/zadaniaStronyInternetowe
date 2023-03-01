const btn = document.querySelector("button")
const img = document.querySelector("#main img")

btn.addEventListener("click", () => {
    const color = document.querySelector("#color")
    const width = document.querySelector("#width")
    
    img.style.border = "solid"
    img.style.borderColor = color.value
    img.style.borderWidth = width.value*2 + "px"
})