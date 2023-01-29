class Punkt {
    nazwa
    x
    y

    constructor(nazwa, wspolrzedna_x, wspolrzedna_y) {
        this.nazwa = nazwa
        this.x = wspolrzedna_x
        this.y = wspolrzedna_y
    }

    info = function () {
        document.write(`Punkt ${this.nazwa} ma współrzędne (${this.x};${this.y})`)
    }
}

class Odcinek {
    nazwa
    punkt1
    punkt2
    
    constructor(nazwa, punkt_1, punkt_2) {
        this.nazwa = nazwa
        this.punkt1 = punkt_1
        this.punkt2 = punkt_2
    }

    info = function () {
        document.write(`Odcinek o punktach ${this.punkt1.nazwa} i ${this.punkt2.nazwa} ma długość `)
        this.dlugosc()
    }

    dlugosc = function () {
        let X = Math.abs(this.punkt1.x - this.punkt2.x)
        let Y = Math.abs(this.punkt1.y - this.punkt2.y)
        document.write(`${Math.sqrt(X*X + Y*Y)}`)
    }
}

let A = new Punkt("A", 1, 1)
let B = new Punkt("B", 4, 5)

A.info()
document.write(`<br>`)
B.info()
document.write(`<br>`)

let AB = new Odcinek("AB", A, B)

AB.info()