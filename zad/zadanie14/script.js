let input = document.querySelector(`#input`)
let btn = document.querySelector(`button`)
let wynik = document.querySelector(`#wynik`)

btn.addEventListener(`click`, function () {
    let podana = Math.floor(input.value)
    wynik.innerHTML = `x = ${podana}<br>`
    for (let i = 0; i <= 10; i++) {
        wynik.innerHTML += `${i} * ${podana} = ${podana*i}<br>`
    }
})