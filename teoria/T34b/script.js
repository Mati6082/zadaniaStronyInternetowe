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

podatek(399.99,"d")