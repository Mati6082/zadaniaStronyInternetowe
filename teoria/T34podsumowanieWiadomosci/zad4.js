class Rycerz {
    nazwa = ""
    nazwisko = ""
    doswiadczenie
    punkty_zycia = 1.0
    uzbrojenie = []

    constructor(nazwa, nazwisko, doswiadczenie) {
        this.nazwa = nazwa
        this.nazwisko = nazwisko
        this.doswiadczenie = doswiadczenie
        this.dodaj_uzbrojenie()
        this.info()
    }

    info = function () {
        console.log(`Imie: ${this.nazwa}\nNazwisko: ${this.nazwisko}\nDoswiadczenie: ${this.doswiadczenie}\nUzbrojenie: ${this.uzbrojenie}`)
    }

    dodaj_uzbrojenie = function () {
        let uzbrojenie_rycerza = prompt(`Dodaj uzbrojenie rycerza ${this.nazwa + " " + this.nazwisko}`)
        this.uzbrojenie.push(uzbrojenie_rycerza)
    }
}

let rycerz1 = new Rycerz("Zawisza", "Czarny", 9)
let rycerz2 = new Rycerz("Mietek", "Kostka", 4)