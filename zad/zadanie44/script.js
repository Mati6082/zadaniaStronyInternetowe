let rok = document.querySelector(`#rok`)
let btn = document.querySelector(`button`)
let wynik = document.querySelector(`#wynik`)
let data =  new Date().getFullYear();

btn.addEventListener(`click`, function () {
    if (rok.value % 4 === 0 && rok.value % 100 !== 0 || rok.value % 400 === 0) {
        wynik.innerHTML = `Rok ${rok.value} `
        if(rok.value > data) {
            wynik.innerHTML += `będzie `
        }
        else wynik.innerHTML +=`jest `
        wynik.innerHTML += `rokiem przestępnym.`
    }
    else {
        wynik.innerHTML = `Rok ${rok.value} `
        if(rok.value > data) {
            wynik.innerHTML += `nie będzie `
        }
        else wynik.innerHTML +=`nie jest `
        wynik.innerHTML += `rokiem przestępnym.`
    }
})