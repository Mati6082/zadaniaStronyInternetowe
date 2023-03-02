const btn = document.querySelector("button")
const form = document.querySelector("#formularz")
const wynik = document.querySelector("#dane")

btn.addEventListener("click", () => {
    const username = form.username.value
    const email = form.email.value
    const password1 = form.password_1.value
    const password2 = form.password_2.value

    const regula_maila = new RegExp("[a-z]@zszglogow.pl$")
    const regula_a_z = new RegExp("[a-z]")
    const regula_A_Z = new RegExp("[A-Z]")
    const regula_0_9 = new RegExp("[0-9]")
    const regula_inne = new RegExp("[!@#$%^&*()<>?=+]")

    if (!username)
        alert("nie podano nazwy użytkownika")
    else if (!regula_maila.test(email))
        alert("niepoprawny adres e-mail") 
    else if (!regula_a_z.test(password1) || !regula_A_Z.test(password1) || !regula_0_9.test(password1) || !regula_inne.test(password1) || password1.length<8)
        alert("hasło nie spełnia wymagań serwera")
    else if (password2 !== password1)
        alert("źle wprowadzone hasło powtwierdzające")
    else {
        wynik.innerHTML = ` Nazwa użytkownika: ${username}<br>
                            Adres e-mail: ${email}<br>
                            Hasło: ${password1}`
    }


})