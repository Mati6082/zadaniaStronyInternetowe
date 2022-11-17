let liczba_a = document.querySelector(`#a`)
let liczba_b = document.querySelector(`#b`)
let btn = document.querySelector(`button`)
let wynik = document.querySelector(`#wynik`)

btn.addEventListener(`click`, function() {
    let a = parseInt(liczba_a.value)
    let b = parseInt(liczba_b.value)

    if(b !== 0) {
        wynik.innerHTML = `${a} / ${b} = ${a/b}`
    }
    else {
        wynik.innerHTML = `Nie można podzielić przez zero /:`
    }
})