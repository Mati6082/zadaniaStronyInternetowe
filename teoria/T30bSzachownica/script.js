const btn = document.querySelector("button")
const szachownica = document.querySelector("#szachownica")

szachownica.style.display = "flex"
szachownica.style.flexDirection = "column"

btn.addEventListener("click", () => {
    const board = document.querySelector("#board").value
    const dc = document.createDocumentFragment()

    szachownica.innerHTML = ''

    for (let i = 0; i < board; i++) {
        const row = document.createElement("div")
        row.style.display = "flex"
        row.style.flexDirection = "row"

        for (let j = 0; j < board; j++) {
            const div = document.createElement("div")
            div.style.width = "100%"
            div.style.aspectRatio = "1"
            if (i % 2 == 0) {
                if (j % 2 == 0) {
                    div.style.background = "#c5c5c5"
                } else {
                    div.style.background = "#111"
                }
            } else {
                if (j % 2 == 1) {
                    div.style.background = "#c5c5c5"
                } else {
                    div.style.background = "#111"
                }
            }

            row.append(div)
        }
        dc.append(row)
    }
    szachownica.append(dc)
})