const blok = document.querySelector("#blok-lewy")
const wynik = document.createElement("p")
blok.append(wynik)

function btn() {
    const rodzaj = Number(document.querySelector("#rodzaj").value)
    const ile = Number(document.querySelector("#ile").value)
    let koszt

    if (rodzaj === 1)
            koszt = ile * 4
    else if (rodzaj === 2)
            koszt = ile * 3.5
    else koszt = 0
    wynik.innerHTML = `Koszt paliwa: ${koszt}zł`
}