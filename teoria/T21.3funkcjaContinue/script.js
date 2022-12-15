const btn = document.querySelector(`button`)
const wynik = document.querySelector(`#wynik`)

btn.addEventListener(`click`, function () {
    const a = parseInt(document.querySelector(`#a`).value)
    wynik.innerHTML = ``
    for (let i = 1; i <= 15; i++) {
        if (i === a) {
            wynik.innerHTML += `<span id="minus">{-}<span> `
            continue
        }
        wynik.innerHTML += `${i} `
    }
})