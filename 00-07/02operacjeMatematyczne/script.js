let a = parseInt(prompt("Podaj liczbę a: "))
let b = parseInt(prompt("Podaj liczbę b: "))
let suma = a + b
let roznica = a - b
let iloczyn = a * b
let iloraz = a / b
/*document.write("Suma liczb " + liczba1 + " i " + liczba2 + " wynosi " + suma + ", róznica tych liczb wynosi " + roznica + " ,iloczyn wynosi " + iloczyn + ", a iloraz " + iloraz + ".")*/

document.write("a = " + a + "<br>")
document.write("b = " + b + "<br>")
document.write("a + b = " + suma + "<br>")
document.write("a - b = " + roznica + "<br>")
document.write("a * b = " + iloczyn + "<br>")
if(b==0) {
    document.write("Nie da się dzielić liczby przez 0.")
}
else {
    document.write("a / b = " + iloraz + "<br>")
}