
const btn = document.querySelector(`button`)
const wynik = document.querySelector(`#wynik`)

btn.addEventListener(`click`, function () {
    let a = parseInt(document.querySelector(`#a`).value)
    wynik.innerHTML =  ``
    for (let i = 0; i < 30; i++) {
        if (i === a) break
        wynik.innerHTML += `${i+1}<br>`
    }
})