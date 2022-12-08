let a = document.querySelector(`#a`)
let b = document.querySelector(`#b`)
let btn = document.querySelector(`button`)
let wynik = document.querySelector(`#wynik`)

btn.addEventListener(`click`, function () {
    wynik.innerHTML = ``
    for(let i = 0; i < b.value; i++) {
        for(let j = 0; j < a.value; j++) {
            wynik.innerHTML += `#`
        }
        wynik.innerHTML += `<br>`
    }
})