const btn = document.querySelector("button")
const wynik = document.querySelector("#wynik")

btn.addEventListener("click", () => {
    const znaki = document.querySelector("#znaki")
    const dlugosc = document.querySelector("#dlugosc")
    const ilosc = document.querySelector("#ilosc")
    
    const znakiTab = znaki.value.split(" ")

    wynik.innerHTML = `Tablica wzorcowa: ${znakiTab}`


})