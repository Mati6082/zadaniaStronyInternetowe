let liczba_a = document.querySelector(`#a`)
let btn = document.querySelector(`button`)
let wynik = document.querySelector(`#wynik`)

btn.addEventListener(`click`, function () {
    let a = parseInt(liczba_a.value)

    wynik.innerHTML = `Wartość bezwzględna liczby a wyniosi ${Math.abs(a)}`
})