const btn = document.querySelector("button")
const wynik = document.querySelector("#wynik")
const im_i_naz = document.querySelector("#imie-i-nazwisko")

btn.addEventListener("click", () => {
    let im_i_naz_tab = im_i_naz.value.toLowerCase().split(" ")

    let imie = im_i_naz_tab[0]
    let nazwisko = im_i_naz_tab[1]

    imie = imie[0].toUpperCase() + imie.slice(1)
    nazwisko = nazwisko[0].toUpperCase() + nazwisko.slice(1)
    
    wynik.innerHTML = (`Twoje imię to: ${imie}, a nazwisko: ${nazwisko}.`)
})