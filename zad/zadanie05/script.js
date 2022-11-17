let l1 = document.querySelector(`#l1`)
let l2 = document.querySelector(`#l2`)
let btn = document.querySelector(`button`)
let wynik = document.querySelector(`#wynik`)

btn.addEventListener(`click`, function() {
    wynik.innerHTML = `    suma wynosi ${Number(l1.value) + Number(l2.value)},<br>
                           różnica ${Number(l1.value) - Number(l2.value)},<br>
                           iloczyn ${Number(l1.value) * Number(l2.value)},<br>
                           a iloraz `
    if(Number(l2.value)===0) {
        wynik.innerHTML += `\"nie dziel przez 0!\"`
    }
    else {
        wynik.innerHTML += `${Number(l1.value) / Number(l2.value)}`
    }
})