let cale = document.querySelector(`#cale`)
let btn = document.querySelector(`button`)
let wynik = document.querySelector(`#wynik`)

btn.addEventListener(`click`, function () {
    wynik.innerHTML = `${cale.value} cali to ${Number(cale.value) * 25.3995} milimetrów.`
})