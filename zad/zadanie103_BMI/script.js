const wynik = document.querySelector(`#wynik`)
const btn = document.querySelector(`button`)

function bmi(waga, wzrost) {
    return waga / Math.pow(wzrost/100,2)
}

function poziom(bmi) {
    switch (true) {
        case(bmi < 16):
    }
}

btn.addEventListener(`click`, () => {
    let waga = parseFloat(document.querySelector(`#waga`).value)
    let wzrost = parseFloat(document.querySelector(`#wzrost`).value)
    wynik.innerHTML = `${bmi(waga, wzrost)}`
})
