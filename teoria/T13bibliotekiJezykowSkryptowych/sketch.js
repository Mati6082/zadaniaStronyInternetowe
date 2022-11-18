function setup() {
    createCanvas(500, 500);
}

let x = 150
let y = 500

function draw() {
    background(0, 204, 255);

    square(x, y-200, 200)
    square(x+20, y-170, 50)
    square(x+130, y-170, 50)
    rect(x+75, y-75, 50, 75)
    triangle(x-20, y, x+220, y, x+100, y-100)
}