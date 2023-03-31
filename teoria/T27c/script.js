const main = document.querySelector("#main")

const tablica = document.createElement("table")
const tablica90 = document.createElement("table")
tablica.style.aspectRatio = "1"
tablica90.style.aspectRatio = "1"


let tab = Array(4)
let tab90 = Array(4)

for (let i = 0; i < 4; i++) {
    tab[i] = Array(4)
    tab90[i] = Array(4)
}

for (let i = 0; i < 4; i++) {
    const tr = document.createElement("tr")
    for (let j = 0; j < 4; j++) {
        tab[i][j] = Math.floor(Math.random() * 2)
        const td = document.createElement("td")
        td.innerHTML = tab[i][j]
        tr.append(td)
    }
    tablica.append(tr)
}

main.append(tablica)

for (let i = 0; i < 4; i++) {
    const tr = document.createElement("tr")
    for (let j = 3; j >= 0; j++) {
        tab90[j][i] = tab[i][j]
        const td = document.createElement("td")
        td.innerHTML = tab[j][i]
        tr.append(td)
    }
    tablica90.append(tr)
}

main.append(tablica90)