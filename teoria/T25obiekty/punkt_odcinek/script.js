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
        this.punkt1 = new Punkt(punkt_1)
        this.punkt2 = new Punkt(punkt_2)
    }
    
    info = function () {
        document.write(`Odcinek o punktach ${this.punkt1.nazwa} i ${this.punkt2.nazwa} ma długość `)
    }
    
    dlugosc = function () {
        
    }
}

let A = new Punkt("A", 6, 4)
let B = new Punkt("B", 3, 6)

A.info()
document.write(`<br>`)
B.info()
document.write(`<br>`)

let AB = new Odcinek("AB", A, B)

AB.info()