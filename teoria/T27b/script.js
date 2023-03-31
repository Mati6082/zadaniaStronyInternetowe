const wynik = document.querySelector("#wynik")

let tab = Array(7)

for (let i = 0; i < tab.length; i++) {
    tab[i] = Array(7)
}

for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
        const data = Math.floor(Math.random() * 5)
        tab[i][j] = String.fromCharCode(101 - data)
        document.getElementById(i.toString() + j.toString()).innerHTML = tab[i][j]
    }
}

let ileRazyA = 0

for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
        if (tab[i][j] === "a") {
            ileRazyA += 1
        }
    }
}

wynik.innerHTML = `
W tablicy "a" występuje ${ileRazyA} razy.<br>`
const tabela = document.querySelector("table").children

let ileRazyB = Array(7).fill(0)

for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
        if (tab[i][j] === 'b') {
            ileRazyB[i] += 1
        }
    }
}

let max = ileRazyB[0]
let maxRow = 0
for (let i = 0; i < 7; i++) {
    if (ileRazyB[i] > max) {
        max = ileRazyB[i]
        maxRow = i
    }
}

wynik.innerHTML += `
"b"wystąpiło najwięcej razy w rzędzie ${maxRow + 1}`

for (let i = 0; i < 7; i++) {
        if (i !== maxRow && ileRazyB[i] === max) {
            wynik.innerHTML += `, ${i + 1}`
        }
}

wynik.innerHTML += "."