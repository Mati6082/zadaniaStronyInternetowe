class Wojownik {
    nazwa = ""
    punkty_doswiadczenia
    punkty_zycia
    uzbrojenie = ["miecz", "tarcza"]

    constructor(nazwa, punkty_doswiadczenia, punkty_zycia) {
        this.nazwa = nazwa
        this.punkty_doswiadczenia = punkty_doswiadczenia
        this.punkty_zycia = punkty_zycia
    }
}

let mieszko = new Wojownik("Mieszko", 5, 0.6)

mieszko.uzbrojenie.push("szyszak")