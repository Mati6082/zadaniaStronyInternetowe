const btn = document.querySelector(`button`)
const wynik = document.querySelector(`#wynik`)

btn.addEventListener(`click`, function () {
    let n =parseInt(document.querySelector(`#n`).value)
    let min =parseInt(document.querySelector(`#min`).value)
    let max =parseInt(document.querySelector(`#max`).value)
    
    wynik.innerHTML = ``
    
    for (let i = 0; i < n; i++) {
        let x = Math.floor(Math.random() * (max-min+1)+min)
        wynik.innerHTML += `${x}<br>`
    }
})