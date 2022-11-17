let liczba_a = document.querySelector(`#a`)
let liczba_b = document.querySelector(`#b`)
let btn = document.querySelector(`button`)
let wynik = document.querySelector(`#wynik`)

btn.addEventListener(`click`, function () {
    let a = parseInt(liczba_a.value)
    let b = parseInt(liczba_b.value)

    if(a===b) {
        wynik.innerHTML = `Liczby są równe.`
    }
    else {
        if(a>b) {
            wynik.innerHTML = `Liczba a jest większa od liczby b.`
        }
        else {
            wynik.innerHTML = `Liczba b jest większa od liczby a.`
        }
    }
})