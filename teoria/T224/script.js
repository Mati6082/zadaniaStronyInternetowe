const btn = document.querySelector(`button`)
let wynik = document.querySelector(`#wynik`)

btn.addEventListener(`click`, function () {
    let a = parseInt(document.querySelector(`#a`).value)
    let b = parseInt(document.querySelector(`#b`).value)

    if (a < b) {
        wynik.innerHTML = `<span id="lower">${a}</span>, <span id="higher">${b}</span>`
    }
    else if (a > b) {
        wynik.innerHTML = `<span id="higher">${a}</span>, <span id="lower">${b}</span>`
    }
    else {
        wynik.innerHTML = `<span id="same">${a}</span>, <span id="same">${b}</span>`
    }
    // W PLIKU style.html ZMIENIA KOLOR ID lower, higher i same NA ODPOWIEDNIE
})