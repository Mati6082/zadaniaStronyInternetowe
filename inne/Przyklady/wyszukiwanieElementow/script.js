const form = document.querySelector("#myForm");

const div = document.createElement("div")
div.className = "field"

const div_in = document.createElement("div")
div.className = "control"

const input = document.createElement("input")
input.className = "input"
input.type = "text"
input.name = "pesel"
input.placeholder = "Pesel"

//form.insertBefore(form.lastElementChild, div)
div.append(div_in)
div_in.append(input)