const btn = document.querySelector("#button")
const wynik = document.querySelector("#wynik")


btn.addEventListener("click", () => {
    let radian = document.querySelector("#radiant").value
    
    wynik.innerHTML = `${radian} radian to około ${Math.floor(radian*180/Math.PI)}°`
})