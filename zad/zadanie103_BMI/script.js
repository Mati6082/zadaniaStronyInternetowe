const wynik = document.querySelector(`#wynik`)
const btn = document.querySelector(`button`)

function bmi(waga, wzrost) {
    return waga / Math.pow(wzrost/100,2)
}

function poziom(bmi) {
    switch (true) {
        case(bmi < 16): return `wygłodzenie`
        case(bmi >= 16 && bmi < 17): return `wychudzenie`
        case(bmi >= 17 && bmi < 18.5): return `niedowagę`
        case(bmi >= 18.5 && bmi < 25): return `optimum`
        case(bmi >= 25 && bmi < 30): return `nadwagę`
        case(bmi >= 30 && bmi < 35): return `otyłość I stopnia`
        case(bmi >= 35 && bmi < 40): return `otyłość II stopnia`
        case(bmi >= 40): return `otyłość III stopnia`
    }
}

btn.addEventListener(`click`, () => {
    let waga = parseFloat(document.querySelector(`#waga`).value)
    let wzrost = parseFloat(document.querySelector(`#wzrost`).value)
    wynik.innerHTML = `Twoje BMI wynosi ${Math.round(bmi(waga, wzrost) * 100) / 100}.<br>Oznacza to że masz ${poziom(bmi(waga, wzrost))}.`
})
