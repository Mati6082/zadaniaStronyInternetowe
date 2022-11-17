let liczba_a1 = document.querySelector(`#a1`)
let liczba_b1 = document.querySelector(`#b1`)
let liczba_a2 = document.querySelector(`#a2`)
let liczba_b2 = document.querySelector(`#b2`)
let btn = document.querySelector(`button`)
let wynik = document.querySelector(`#wynik`)

btn.addEventListener(`click`, function () {
    let a1 = parseInt(liczba_a1.value)
    let b1 = parseInt(liczba_b1.value)
    let a2 = parseInt(liczba_a2.value)
    let b2 = parseInt(liczba_b2.value)

    if(a1 * a2 === -1) {
        wynik.innerHTML = `Proste są prostopadłe.`
    }
    else {
        wynik.innerHTML = `Proste nie są prostopadłe.`
    }
})