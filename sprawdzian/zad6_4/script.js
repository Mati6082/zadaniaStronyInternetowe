const btn = document.querySelector("button")
const wynik = document.querySelector("#wynik")

btn.addEventListener("click", () => {
    const a = document.querySelector("#a").value

    wynik.innerHTML = ""

    for (let i = 0; i < a; i++) {
        for (let j = 0; j < a; j++) {
            if (i === j) {
                wynik.innerHTML += "1"
            } else {
                wynik.innerHTML += "0"
            }
        }
        wynik.innerHTML += "<br>"
    }
})