const liczba1 = document.querySelector('#liczba1');
const liczba2 = document.querySelector('#liczba2');

const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let iloraz;
    let wynik_tekst="";
    if(Number(liczba2.value)===0) {
        wynik_tekst = "Nie można dzielić przez zero!";
        wynik.innerHTML = wynik_tekst;
    }
    else {
        iloraz = (Number(liczba1.value) / Number(liczba2.value));
        let wynik_tekst = `
        dzielna = ${liczba1.value} <br>
        dzielnik = ${liczba2.value} <br>
        iloraz tych liczb to ${iloraz} <br>
        iloraz zaokrąglony do dwóch liczb po przecinku to ${iloraz.toFixed(2)}`;
        wynik.innerHTML = wynik_tekst;
    }
}
);