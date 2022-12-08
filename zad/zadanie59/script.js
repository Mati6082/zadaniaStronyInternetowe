let procent = document.querySelector(`#procent`)
let btn = document.querySelector(`button`)
let ocena = document.querySelector(`#ocena`)

btn.addEventListener(`click`, function () {
    let prcnt = parseInt(procent.value)
    ocena.innerHTML = `Wychodzi ci ocena `
    switch (true) {
        case (prcnt < 50): {
            ocena.innerHTML += `2`
            break
        }
        case (prcnt >= 50 && prcnt < 60): {
            ocena.innerHTML += `3`
            break
        }
        case (prcnt >= 60 && prcnt < 70): {
            ocena.innerHTML += `3,5`
            break
        }
        case (prcnt >= 70 && prcnt < 80): {
            ocena.innerHTML += `4`
            break
        }
        case (prcnt >= 80 && prcnt < 90): {
            ocena.innerHTML += `4,5`
            break
        }
        case (prcnt >= 90 && prcnt <= 100): {
            ocena.innerHTML += `5`
            break
        }
        default: {
            ocena.innerHTML = `Podano nieprawidłowy wynik procentowy. Wybierz wynik z zakresu 1 - 100.`
        }
    }
})