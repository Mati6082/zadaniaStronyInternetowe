function main() {
    const skladowa_H = document.querySelector("#skladowa-H").value
    let skladowa_S = 100
    const table = document.querySelector("table")
    const td1 = table.querySelector("tr td")
    td1.style.background = `hsl(${skladowa_H}, ${skladowa_S}%, 50%`
    
    const tr2 = table.children[0].children[1].children
    
    for (let i = 0; i < tr2.length; i++) {
        skladowa_S -= 20
        tr2[i].style.background = `hsl(${skladowa_H}, ${skladowa_S}%, 50%`
    }
}