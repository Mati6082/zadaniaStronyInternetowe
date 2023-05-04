const myForm = document.querySelector("#my-form")
const btn = document.querySelector("#submit")
const main = document.querySelector("main")
const emailRegExp = new RegExp("[a-z][a-z0-9]@[a-z0-9]+\\.[a-z]{2,3}$")
const telRegExp = new RegExp("^[0-9]{9}$")
btn.addEventListener("click", () => {
    let valid = true

    // sprawdzanie, czy podane jest imię i nazwisko
    const imie_naz = myForm.imie_naz.value
    if (imie_naz.split(" ").length !== 2) {
        alert("Błędne imię lub nazwisko")
        valid = false
    }

    // sprawdzanie, czy podane email jest poprawny
    const email = myForm.email.value
    if (!emailRegExp.test(email)) {
        if (!(new RegExp("^[a-z][a-z0-9]").test(email))) {
            alert("W e-mailu podano błędną nazwę maila na początku.")
        }
        if (!(new RegExp("@").test(email))) {
            alert("W e-mailu brakuje małpy \"@\".")
        }
        if (!(new RegExp("@[a-z0-9]").test(email))) {
            alert("W e-mailu brakuje lub podany jest błędna nazwa używanej poczty (np. \"gmail\")")
        }
        if (!(new RegExp("\\.[a-z]{2,3}$").test(email))) {
            alert("W e-mailu brakuje lub podana jest błędna domena (np. \".com\")")
        }
        valid = false
    }

    // sprawdzanie, czy podany nr telefonu jest poprawny
    const tel = myForm.tel.value
    if (!telRegExp.test(tel)) {
        alert("Nie podano, bądź podano błędny nr telefonu.")
        valid = false
    }

    const opis = myForm.opis.value
    if (!opis) {
        alert("Brak opisu obecnie posiadanych butów.")
        valid = false
    }

    const kolor = myForm.kolor.value
    if (!kolor) {
        alert("Nie podano koloru nowych butów.")
        valid = false
    }

    const sznurowki = myForm.sznurowki
    const logo = myForm.logo
    const podeszwy = myForm.podeszwy
    const mp3 = myForm.mp3

    const rozmiar = myForm.rozmiar.value
    if (!(2.5 < rozmiar < 50)) {
        const rozmiar_p = confirm("Czy aby napewno podałeś odpowiedni rozmiar buta?")
        valid = valid && rozmiar_p
    }
    
    if (valid) {
        const dc = document.createDocumentFragment()
        const p_user = document.createElement("p")
        p_user.innerHTML = `
Imię i nazwisko: ${imie_naz}<br>
E-mail: ${email}<br>
Nr telefonu: ${tel}<br>
Opis: ${opis}`
        const p_buty = document.createElement("p")
        p_buty.innerHTML = `Kolor: ${kolor}<br><br><span id="pogrubione">Opcje:</span><br><br>`
        if (sznurowki.checked) {
            p_buty.innerHTML += "Błyszczące sznurówki<br>"
        }
        if (logo.checked) {
            p_buty.innerHTML += "Metalowe logo<br>"
        }
        if (podeszwy.checked) {
            p_buty.innerHTML += "Świecące podeszwy<br>"
        }
        if (mp3.checked) {
            p_buty.innerHTML += "Odtwarzanie MP3<br>"
        }
        p_buty.innerHTML += `<br>Rozmiar butów: ${rozmiar}<br>`
        const h2_1 = document.createElement("h2")
        const h2_2 = document.createElement("h2")
        h2_1.innerHTML = "Podane dane użytkownika:"
        h2_2.innerHTML = "Zaprojektowane buty:"
        dc.append(h2_1)
        dc.append(p_user)
        dc.append(h2_2)
        dc.append(p_buty)
        const wynik = document.createElement("div")
        wynik.id = "wynik"
        
        wynik.append(dc)
        main.append(wynik)
        btn.disabled = true
    }
})