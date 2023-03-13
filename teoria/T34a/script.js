const a = 234
const b = 315

const nwd = (a, b) => {
    while (a !== b) {
        if (a > b) a = a - b
        else b = b - a
    }
    console.log(a)
}

nwd(a, b)