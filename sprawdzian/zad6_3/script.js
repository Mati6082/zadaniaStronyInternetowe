const btn = document.querySelector("button")
const wynik = document.querySelector("#wynik")

btn.addEventListener("click", () => {
    const n = document.querySelector("#n").value
    let sum = 0
    let arr = new Array(n)

    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 100) + 1)
    }
    for (let i = 0; i < n; i++) {
        sum += arr[i+1];
    }
    wynik.innerHTML = `Średnia ${n} losowych liczb całkowitych wynosi ${sum/n}`
})