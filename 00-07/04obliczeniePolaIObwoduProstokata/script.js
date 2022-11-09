const btn1 = document.querySelector('#button1');
const btn2 = document.querySelector('#button2');
const wynik = document.querySelector('#wynik');

btn1.addEventListener('click', function() {
    let a = Number(document.querySelector('#liczba_a').value);
    let b = Number(document.querySelector('#liczba_b').value);
    let pole = a*b;
    let obwod = 2*a + 2*b;
    wynik.innerHTML = ` Długość boku a wynosi ${a}.<br>
                        Długość boku b wynosi ${b}.<br>
                        Pole prostokąta wynosi ${pole}.<br>
                        Obwód prostokąta wynosi ${obwod}.`;
                })