const btn = document.querySelector(`#pokaz`)
let wynik = document.querySelector(`#wynik`)

const urodziny = {
    "01.01" : "Zygmunt I Stary, król Polski",
    "02.01" : "Daniel Obajtek, prezes PKN Orlen",
    "03.01" : "J. R. R. Tolkien, angielski pisarz",
    "04.01" : "Maciej Jankowski, piłkarz",
    "05.01" : "Andrzej Gołota, polski bokser",
    "06.01" : "Rowan Atkinson, aktor grający postać Jasia Fasoli",
    "07.01" : "Lewis Hamilton, brytyjski kierowca wyścigowy",
    "08.01" : "Elwis Presley, Kornel Makuszyński, Maksymilian Kolbe, Stephen Hawking, Kim Dzong Un czy Małgorzata Foremniak",
    "09.01" : "Księżna Kate, żona brytyjskiego księcia Wilhelma",
    "10.01" : "Jan Wróblewski, uczestnik powstania Warszawskiego",
    "11.01" : "Roksana Węgiel, polska piosenkarka popowa",
    "12.01" : "Jeff Bezos, amerykański przedsiębiorca, prezes Amazon",
    "13.01" : "Tomasz Mackiewicz, polski himalaista",
    "14.01" : "Arkadiusz Jakubik, znany aktor",
    "15.01" : "Stanisław Wyspiański, polski poeta",
    "16.01" : "Piotr żyła, reprezentant Polski w skokach narciarskich",
    "17.01" : "Rafał Trzaskowski, polski polityk, prezydent Warszawy",
    "18.01" : "Alan Alexander Milne, twórca Kubusia Puchatka",
    "19.01" : "Justyna Kowalczyk, polska biegaczka narciarska",
    "20.01" : "Dawid Lynch, amerykański reżyser i scenarzysta",
    "21.01" : "Rasputin, ", //TODO dokonczyc liste moze kiedys...
    "22.01" : "",
    "23.01" : "",
    "24.01" : "",
    "25.01" : "",
    "26.01" : "",
    "27.01" : "",
    "28.01" : "",
    "29.01" : "",
    "30.01" : "",
    "31.01" : "",
}

function odwrocStr(str) {
    let text = str.split("")
    text.reverse()
    return text.join("")
}

btn.addEventListener(`click`, () => {
    let data = document.querySelector(`#data`).value
    data = `${odwrocStr(data)[1]}${odwrocStr(data)[0]}.${odwrocStr(data)[4]}${odwrocStr(data)[3]}`
    wynik.innerHTML = `W ten sam dzień, czyli ${data} urodziny ma też ${urodziny[data]}.`
    
})