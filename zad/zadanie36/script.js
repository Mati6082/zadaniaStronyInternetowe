let liczba_a = document.querySelector(`#a`)
let liczba_b = document.querySelector(`#b`)
let btn = document.querySelector(`button`)
let wynik = document.querySelector(`#wynik`)

btn.addEventListener(`click`, function () {
    let a = parseInt(liczba_a.value)
    let b = parseInt(liczba_b.value)

    if(b===0) {
        wynik.innerHTML = `Nie da się wykonać operacji dzielenia, ponieważ b jest równe 0 /:`
    }
    else {
        if(a%b === 0) {
            wynik.innerHTML = `Liczba a jest podzielna bez reszty przez liczbę b`
        }
        else {
            wynik.innerHTML = `Liczba a nie jest podzielna bez reszty przez liczbę b`
        }
    }

})