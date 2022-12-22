const btn = document.querySelector(`button`)
const wynik = document.querySelector(`#wynik`)

function wartosc_bezwzgledna_1(x) {
    if (x > 0) return x
    return -x
}

function wartosc_bezwzgledna_2(x) {
    let wynik = (x > 0) ? x : -x
    return wynik
}
btn.addEventListener(`click`, function() {
    let a = parseInt(document.querySelector(`#liczba`).value)
    wynik.innerHTML = `Wartość bezwzględna liczby ${a} wynosi ${wartosc_bezwzgledna_2(a)}`
})