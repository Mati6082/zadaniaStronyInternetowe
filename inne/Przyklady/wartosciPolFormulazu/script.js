const form = document.querySelector("#myForm");
const btn = document.querySelector("#button")
const dc = document.createDocumentFragment()
const wynik = document.querySelector("#wynik")

btn.addEventListener("click", () => {
    const imie = form.firstName.value
    const nazwisko = form.lastName.value
    const przedmiot = form.subject.value
    const message = form.message.value
    const checkbox = form.remember.checked

    const paragraph = document.createElement("p")

    paragraph.append(document.createTextNode(imie))
    paragraph.append(document.createTextNode(nazwisko))
    paragraph.append(document.createTextNode(przedmiot))
    paragraph.append(document.createTextNode(message))
    paragraph.append(document.createTextNode(checkbox))
    dc.append(paragraph)
    wynik.append(dc)
})
