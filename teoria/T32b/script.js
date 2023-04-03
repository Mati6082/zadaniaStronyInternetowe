const wynik = document.querySelector("#wynik")
const btn = document.querySelector("button")
const form = document.querySelector("form")
let cena = 0

btn.addEventListener("click", () => {
    for (let i = 0; i < form.length; i++) {
        if (form[i].checked) {
            cena = form[i].value
            break
        }
    }
    wynik.innerHTML = `Cena za strzyżenie: ${cena}`
})