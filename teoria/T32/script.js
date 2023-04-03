const wynik = document.querySelector("#wynik")
const btn = document.querySelector("button")

btn.addEventListener("click", () => {
    const zadowolenie = document.querySelector("#zadowolenie")
    const data = document.querySelector("#data")
    const kolor = document.querySelector("#kolor")

    document.querySelector("#main h1").style.color = kolor.value

    wynik.innerHTML = `
    Usługę wykonano: ${data.value}<br>
Ocena klienta: ${zadowolenie.value}<br>
Ocena kolorem: <span id="ocena-kolorem">ocena kolorem</span>`
    document.querySelector("#main #ocena-kolorem").style.color = kolor.value
})