let min = document.querySelector(`#min`)
let max = document.querySelector(`#max`)
let btn = document.querySelector(`button`)
let wynik = document.querySelector(`#wylosowane`)
let p1, p2, p3, p4, p5

btn.addEventListener(`click`, function() {
    p1 = Math.floor(Math.random() * (max.value-min.value+1)+min.value)
    p2 = Math.floor(Math.random() * (max.value-min.value+1)+min.value)
    p3 = Math.floor(Math.random() * (max.value-min.value+1)+min.value)
    p4 = Math.floor(Math.random() * (max.value-min.value+1)+min.value)
    p5 = Math.floor(Math.random() * (max.value-min.value+1)+min.value)

    wynik.innerHTML = `Wylosowane liczby to:<br>
    ${p1}<br>
    ${p2}<br>
    ${p3}<br>
    ${p4}<br>
    ${p5}<br>`
})