let iminaz = "roMAN kOstka"
iminaz = iminaz.toLowerCase()
imie = iminaz.split(" ")[0]
nazwisko = iminaz.split(" ")[1]
imie1 = imie[0].toUpperCase()
nazwisko1 = nazwisko[0].toUpperCase()
imie = utnij1(imie)
imie = imie1 + imie.join("")
nazwisko = utnij1(nazwisko)
nazwisko = nazwisko1 + nazwisko.join("")
console.log(`Twoje imię to ${imie}, a nazwisko to ${nazwisko}`)

function utnij1(tekst) {
    let tekst2 = Array(tekst.length-1)
    for (let i = 0; i < tekst.length-1; i++) {
            tekst2[i] = tekst[i + 1]
    }
    return tekst2
}