let time = document.querySelector(`#time`)
let btn = document.querySelector(`button`)
let wynik = document.querySelector(`#wynik`)
let godz
let min
let sek
btn.addEventListener(`click`, function () {
    let liczba = parseInt(time.value)
    let g = Math.floor(liczba/3600)
    let sekundy_cale = liczba%3600
    let n = Math.floor(sekundy_cale/60)
    let s = sekundy_cale&60
    wynik.innerHTML = `Godziny ${g}, minuty ${n}, sekundy ${s}`
})