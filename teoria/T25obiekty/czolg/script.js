class Czolg {
    name
    color
    ammunition = 30

    constructor(nazwa, kolor) {
        this.name = nazwa
        this.color = kolor
    }

    changeColor = function (kolor) {
        this.color = kolor
    }

    shoot = function () {
        if (this.ammunition !== 0) {
            console.log("Booom!")
            this.ammuniton -= 1
        }
        else {
            console.log("Brak amunicji! Przeładuj aby wystrzelić.")
        }
    }

    reload = function () {
        time = 5
        for (let i = 0; i < time; i++) {
            console.log("Przeładowywanie. Pozostało " + time + " sekund.")
        }
    }
}