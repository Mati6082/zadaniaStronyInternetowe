const btn = document.querySelector("button")
const wynik = document.querySelector("#wynik")

btn.addEventListener("click", () => {
    const imie = document.querySelector("#imie").value.toLowerCase()

    if (imie[imie.length - 1] === 'a' && imie !== "kuba" && imie !== "barnaba")
        wynik.innerHTML = "Jesteś kobietą."
    else wynik.innerHTML = "Jesteś mężczyzną."
})