const btn = document.querySelector("button")
const wynik = document.querySelector("#wynik")

btn.addEventListener("click", () => {
    const znaki = document.querySelector("#znaki")
    const dlugosc = document.querySelector("#dlugosc").value
    const ilosc = document.querySelector("#ilosc").value

    const znakiTab = znaki.value.split(" ")

    wynik.innerHTML = `Tablica wzorcowa: ${znakiTab}<br>`

    for (let i = 0; i < ilosc; i++) {
        wynik.innerHTML += `${i+1}. `
        for (let j = 0; j < dlugosc; j++) {
            wynik.innerHTML += `${znakiTab[Math.floor(Math.random() * 10)]}`
        }
        wynik.innerHTML += `<br>`
    }

})