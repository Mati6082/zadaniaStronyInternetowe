const btn = document.querySelector(`button`)
let wynik = document.querySelector(`#wynik`)

btn.addEventListener(`click`, () => {
    
    let imie1 = document.querySelector(`#imie1`).value
    let urodziny1 = new Date(document.querySelector(`#urodziny1`).value)
    
    let imie2 = document.querySelector(`#imie2`).value
    let urodziny2 = new Date(document.querySelector(`#urodziny2`).value)
    
    if (urodziny1.getTime() < urodziny2.getTime()) {
        wynik.innerHTML = `${imie1} urodził/a się wcześniej niż ${imie2}`
    }
    else if (urodziny1.getTime() > urodziny2.getTime()) {
        wynik.innerHTML = `${imie2} urodził/a się wcześniej niż ${imie1}`
    }
    else {
        wynik.innerHTML = `${imie1} urodził/a się w ten sam dzień co ${imie2}`
    }
})