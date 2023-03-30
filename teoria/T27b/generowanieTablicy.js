const main = document.querySelector("#main")

const table = document.createElement("table")

for (let i = 0; i < 7; i++) {
    const tr = document.createElement("tr")
    tr.id = i.toString()
    for (let j = 0; j < 7; j++) {
        const td = document.createElement("td")
        td.id = i.toString() + j.toString()
        tr.append(td)
    }
    table.append(tr)
}

main.append(table)

const p = document.createElement("p")
p.id = "wynik"

main.append(p)