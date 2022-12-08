let dzien = document.querySelector(`#dzien`)
let btn = document.querySelector(`button`)
let wynik = document.querySelector(`#wynik`)

btn.addEventListener(`click`, function () {
    let day = parseInt(dzien.value)

    switch(day) {
        case 1: {
            wynik.innerHTML = `Dzisiaj jest poniedziałek.`
            break
        }
        case 2: {
            wynik.innerHTML = `Dzisiaj jest wtorek.`
            break
        }
        case 3: {
            wynik.innerHTML = `Dzisiaj jest środa.`
            break
        }
        case 4: {
            wynik.innerHTML = `Dzisiaj jest czwartek.`
            break
        }
        case 5: {
            wynik.innerHTML = `Dzisiaj jest piątek.`
            break
        }
        case 6: {
            wynik.innerHTML = `Dzisiaj jest sobota.`
            break
        }
        case 7: {
            wynik.innerHTML = `Dzisiaj jest niedziela.`
            break
        }
        default: {
            wynik.innerHTML = `!!! BŁĄD !!!`
        }
    }
})