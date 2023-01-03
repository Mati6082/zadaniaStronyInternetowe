const btn = document.querySelector(`#pokaz`)
const wynik = document.querySelector(`#wynik`)

function odwrocStr(str) {
    let string = ""
    for (let i = str.length; i >= 0; i++) {
        string += str[i]
    }
    return string
}

btn.addEventListener(`click`, () => {
    let data = document.querySelector(`#data`).value
    
    //wynik.innerHTML = `Tak, jak ty, czyli ${data[8]}${data[9]}${data[7]}${data[5]}${data[6]} urodził/a się `
})