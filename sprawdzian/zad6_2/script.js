const btn = document.querySelector("button")
const wynik = document.querySelector("#wynik")

btn.addEventListener("click", () => {
    const a = document.querySelector("#a").value
    const x = document.querySelector("#x").value

    if (a === x) {
        wynik.innerHTML = `Nie można dzielić przez zero.`
    } else {
        wynik.innerHTML = `Wynik wyrażenia y = a + x / a - x, dla a = ${a} oraz x = ${x} wynosi ${a+x/a-x}`
    }
})