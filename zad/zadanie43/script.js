let liczba = document.querySelector(`#liczba`)
let btn = document.querySelector(`button`)
let wynik = document.querySelector(`#wynik`)

btn.addEventListener(`click`, function () {
    if(liczba.value>9 && liczba.value<100) {
        wynik.innerHTML = `Liczba ${liczba.value} jest dwucyfrową liczbą `
        if(liczba.value%2===0) {
            wynik.innerHTML += `parzystą.`
        }
        else
            wynik.innerHTML += `nieparzystą.`
    }
    else
        wynik.innerHTML = ``
})