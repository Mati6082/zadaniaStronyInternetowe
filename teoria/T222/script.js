const btn = document.querySelector(`button`)
const wynik = document.querySelector(`#wynik`)

function potega(x, y) {
    let potega = 1
    for (let i = 0; i < y; i++) {
        potega *= x
    }
    return potega;
}

btn.addEventListener(`click`, () => {
    let x = parseInt(document.querySelector(`#x`).value)
    let y = parseInt(document.querySelector(`#y`).value)
    wynik.innerHTML = `x = ${x}<br>
                       y = ${y}<br>
                       x<sup>y</sup> = ${x}<sup>${y}</sup> = ${potega(x, y)}`
})