const wynik = document.querySelector("#wynik")

let tab =
    [
        [],
        [],
        []
    ]

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        tab[i][j] = Math.floor(Math.random() * 10)
        document.getElementById(i.toString() + j.toString()).innerHTML = tab[i][j]
    }
}

const sum_LG_PD = tab[0][0] + tab[1][1] + tab[2][2]
const sum_LD_PG = tab[2][0] + tab[1][1] + tab[0][2]

wynik.innerHTML = `
Suma przekątnej LG_PD: ${sum_LG_PD},<br>
Suma przekątnej LD_PG: ${sum_LD_PG},<br>
`


if (sum_LG_PD > sum_LD_PG) {
    wynik.innerHTML += "Suma przekątnej LG_PD jest większa."
} else if (sum_LD_PG > sum_LG_PD) {
    wynik.innerHTML += "Suma przekątnej LD_PG jest większa."
} else {
    wynik.innerHTML += "Sumy przekątnych są równe."
}