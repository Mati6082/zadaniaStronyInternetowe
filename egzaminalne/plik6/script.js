const indigo = document.querySelector("button#indigo")
const steelBlue = document.querySelector("button#steel-blue")
const olive = document.querySelector("button#olive")
const prawy = document.querySelector("#prawy")
const rozmiar_czc = document.querySelector("input#rozmiar-czc")
const checkbox_ramka = document.querySelector("input#ramka")
const typ_listy = document.querySelector("form#typ-listy")
const typ_listy_dysk = typ_listy.querySelector("input#dysk")
const typ_listy_kwadrat = typ_listy.querySelector("input#kwadrat")
const typ_listy_okrag = typ_listy.querySelector("input#okrag")

indigo.addEventListener("click", () => {
    prawy.style.background = "indigo"
})

steelBlue.addEventListener("click", () => {
    prawy.style.background = "steelBlue"
})

olive.addEventListener("click", () => {
    prawy.style.background = "olive"
})

function kolor_czc() {
    prawy.style.color = document.querySelector("select#kolor-czc").value
}

rozmiar_czc.addEventListener("focusout", () => {
    prawy.style.fontSize = rozmiar_czc.value
})

let ramka_liczba = 0

function ramka() {
    if (ramka_liczba % 2 === 0)
        prawy.querySelector("img").style.border = "none"
    else
        prawy.querySelector("img").style.border = "solid 1px white"
    ramka_liczba += 1
}

typ_listy.addEventListener("change", () => {
    if (typ_listy_dysk.checked)
        prawy.querySelector("ul").style.listStyleType = "disc"
    if (typ_listy_kwadrat.checked)
        prawy.querySelector("ul").style.listStyleType = "square"
    if (typ_listy_okrag.checked)
        prawy.querySelector("ul").style.listStyleType = "circle"
})