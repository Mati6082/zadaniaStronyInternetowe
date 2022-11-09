let a = document.querySelector(`#a`);
let b = document.querySelector(`#b`);
let btn = document.querySelector(`button`);
let wynik = document.querySelector(`#wynik`);
btn.addEventListener(`click`, function () {
    let wynik_tekst = `
    Liczba 1 = ${a.value} <br>
    Liczba 2 = ${b.value} <br>
    Suma wynosi ${Number(a.value)+Number(b.value)} <br>
    Różnica wynosi ${Number(a.value)-Number(b.value)} <br>
    Iloczyn wynosi ${Number(a.value)*Number(b.value)} <br>`;
    if(Number(b.value) === 0) {
        wynik_tekst = wynik_tekst + `
            Dzielenie przez 0 jest niemożliwe. <br>`;
    }
    else {
        wynik_tekst = wynik_tekst + `
        Iloraz wynosi ${Number(a.value)/Number(b.value)} <br>
        Iloraz zaokrąglony do dwóch miejsc po przecinku wynosi ${(Number(a.value)/Number(b.value)).toFixed(2)} <br>`;
    }
    wynik.innerHTML = wynik_tekst;
});