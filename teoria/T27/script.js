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

document.querySelector("#suma_LG_PD").innerHTML = `Suma na przekątnej LG_PD: ${suma_LG_PD}`
document.querySelector("#suma_LD_PG").innerHTML = `Suma na przekątnej LD_PG: ${suma_LD_PG}`


if (suma_LG_PD > suma_LD_PG) {
    document.querySelector("#wynik").innerHTML = "Suma na przekątnej LG_PD jest większa."
} else if (suma_LD_PG > suma_LG_PD) {
    document.querySelector("#wynik").innerHTML = "Suma na przekątnej LD_PG jest większa."
} else {
    document.querySelector("#wynik").innerHTML = "Sumy na przekątnych są równe."
}