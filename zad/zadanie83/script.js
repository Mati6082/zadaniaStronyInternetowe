let a = document.querySelector(`#a`)
let btn = document.querySelector(`button`)
let wynik = document.querySelector(`#wynik`)

btn.addEventListener(`click`, function () {
    wynik.innerHTML = ``
    let x = 0;
    for(let i = 0; i < a.value; i++) {
        for(let j = 0; j < a.value; j++) {
            if(j === x) wynik.innerHTML += `1`
            else wynik.innerHTML += `0`
        }
        wynik.innerHTML += `<br>`
        x++
    }
})