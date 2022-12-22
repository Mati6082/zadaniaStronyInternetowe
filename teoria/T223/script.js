const btn = document.querySelector(`button`)
const wynik = document.querySelector(`#wynik`)

btn.addEventListener(`click`, () => {
    let month = parseInt(document.querySelector(`#miesiac`).value)
    wynik.innerHTML = `${month} miesiac to `
    switch (month) {
        case 1: wynik.innerHTML += `styczeń.`
            break
        case 2: wynik.innerHTML += `luty.`
            break
        case 3: wynik.innerHTML += `marzec.`
            break
        case 4: wynik.innerHTML += `kwiecień.`
            break
        case 5: wynik.innerHTML += `maj.`
            break
        case 6: wynik.innerHTML += `czerwiec.`
            break
        case 7: wynik.innerHTML += `lipiec.`
            break
        case 8: wynik.innerHTML += `sierpień.`
            break
        case 9: wynik.innerHTML += `wrzesień.`
            break
        case 10: wynik.innerHTML += `październik.`
            break
        case 11: wynik.innerHTML += `listopad.`
            break
        case 12: wynik.innerHTML += `grudzień.`
            break
        default: wynik.innerHTML += `BŁĄD.`
    }
})