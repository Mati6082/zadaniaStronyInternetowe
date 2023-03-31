const main = document.querySelector("#main")

const tablica = document.createElement("table")
const tablica90 = document.createElement("table")
tablica.style.aspectRatio = "1"
tablica90.style.aspectRatio = "1"


const tab = Array(4)

for (let i = 0; i < 4; i++) {
    tab[i] = Array(4)
}


for (let i = 0; i < 4; i++) {
    const tr = document.createElement("tr")
    tr.id = i.toString()
    for (let j = 0; j < 4; j++) {
        tab[i][j] = Math.floor(Math.random() * 2)
        const td = document.createElement("td")
        td.innerHTML = tab[i][j]
        tr.append(td)
    }
    tablica.append(tr)
}

main.append(tablica)
const p1 = document.createElement("p")
p1.innerHTML = `Wiersze tablicy, w których suma liczb jest największa:`
main.append(p1)

let suma = Array(4).fill(0)

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        if (tab[i][j] === 1) {
            suma[i] += 1
        }
    }
}

let sumaMax = suma[0]
let sumaMaxRow = 0

for (let i = 0; i < 4; i++) {
    if (suma[i] > sumaMax) {
        sumaMax = suma[i]
        sumaMaxRow = i
    }
}

const tablicaMaxSuma = document.createElement("table")

for (let i = 0; i < 4; i++) {
    if (suma[i] === sumaMax) {
        const tr = tablica.children[i]
        const tr2 = tr.cloneNode(true)
        tablicaMaxSuma.append(tr2)
    }
}

main.append(tablicaMaxSuma)
const p2 = document.createElement("p")
p2.innerHTML = "Tablica odwrócona o 90°:"
main.append(p2)

for (let i = 0; i < 4; i++) {
    const tr90 = document.createElement("tr")
    for (let j = 3; j >= 0; j--) {
        const td90 = document.createElement("td")
        td90.innerHTML = tab[j][i]
        tr90.append(td90)
    }
    tablica90.append(tr90)
}

main.append(tablica90)