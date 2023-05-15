const btn = document.querySelector("button")
const form = document.querySelector("form")
const wynik = document.querySelector("#wynik")

btn.addEventListener("click", () => {
    cena = form.dlugosc.value
    wynik.innerHTML = `Cena strzyżenia: ${cena}`

})