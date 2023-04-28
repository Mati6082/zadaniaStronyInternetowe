const main = document.querySelector("#main")

let tablicaWylosowanych = []

const tablica = document.createElement("table")

function losuj() {
    let liczba = Math.floor(Math.random() * 89 + 10)
    for (let i = 0; i < tablicaWylosowanych.length; i++) {
        if (tablicaWylosowanych[i] === liczba) {
            liczba = losuj()
            break
        }
    }
    tablicaWylosowanych.push(liczba)
    return liczba
}

for (let i = 0; i < 7; i++) {
    const tr = document.createElement("tr")
    for (let j = 0; j < 7; j++) {
        const td = document.createElement("td")

        td.innerHTML = losuj().toString()
        tr.append(td)
    }
    tablica.append(tr)
}

main.append(tablica)