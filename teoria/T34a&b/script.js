const a = 212324
const b = 213769479

const nwd = (a, b) => {
    while (a !== b) {
        if (a > b) a = a - b
        else b = b - a
    }
    console.log(a)
}

const podatek = (cena, typ) => {
    if (cena < 200) {
        console.log(0)
    } else if (cena <= 1000) {
        if (typ === "d") {
            console.log(cena * (0.15 - 0.05))
        } else {
            console.log(cena * 0.15)
        }
    } else {
        if (typ === "d") {
            console.log(cena * (0.22 - 0.05))
        } else {
            console.log(cena * 0.22)
        }
    }
}


nwd(a, b)

podatek(399.99,"d")