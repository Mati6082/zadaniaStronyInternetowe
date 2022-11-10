let liczba = document.querySelector(`#liczba`)
let procent = document.querySelector(`#procent`)
let btn = document.querySelector(`button`)
let wynik = document.querySelector(`#wynik`)

btn.addEventListener(`click`, function () {
    wynik.innerHTML = `${procent.value} procent z liczby ${liczba.value} wynosu ${liczba.value*procent.value/100}`
})