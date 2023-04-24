const btn = document.querySelector("#submit")
const form = document.querySelector("#myForm")
const div = document.querySelector("#middle")

btn.addEventListener("click", () => {
    const imie = form.imie.value
    const nazwisko = form.nazwisko.value
    let email = form.email.value
    const usluga = form.usluga.value
    const kopia = form.kopia_zapasowa.checked

    email = email.toLowerCase()

    const p = document.createElement("p")
    p.innerHTML = `${imie} ${nazwisko}<br>${email}<br>Usługa: ${usluga}`

    div.append(p)
})