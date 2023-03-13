const text = document.querySelector("p")
const div = document.querySelector("div")

const date = new Date()

div.addEventListener("mouseenter", data)


div.addEventListener("mouseleave", dataByla)

function data() {
    text.innerHTML = date
}

function dataByla() {
    text.innerHTML = ""
    div.removeEventListener("mouseenter", data)
    div.addEventListener("mouseenter", () => {
        text.innerHTML = "Data już była ;)"
    })
}