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
    
    info = function () {
        console.log(`Imie: ${this.nazwa}\nPunkty doświadczenia: ${this.punkty_doswiadczenia}\nZdrowie: ${this.punkty_zycia}\nUzbrojenie: ${this.uzbrojenie}`)
    }
    w_html = function () {
        document.write(`Imie: ${this.nazwa}<br>Punkty doświadczenia: ${this.punkty_doswiadczenia}<br>Zdrowie: ${this.punkty_zycia}<br>Uzbrojenie: ${this.uzbrojenie}`)
    }
}

let mieszko = new Wojownik("Mieszko", 5, 0.6)

mieszko.info()

mieszko.w_html()