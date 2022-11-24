function setup() {
    createCanvas(500, 500);
}

let x = 150
let y = 450

function draw() {
    background(0, 204, 255);
    fill(255,255,0)
    square(x, y-200, 200)
    quad(x+200,y,x+200,y-200,x+300,y-150,x+300,y)
    circle(-150,-150,650)
    fill(77,166,255)
    square(x+20, y-170, 50)
    square(x+130, y-170, 50)
    quad(x+220,y-170,)
    fill(78,45,19)
    rect(x+75, y-75, 50, 75)
    fill(165,42,42)
    triangle(x-20, y-200, x+220, y-200, x+100, y-300)
    quad(x+200,y-200,x+220,y-200,x+320,y-150,x+300,y-150)
    quad(x+100,y-300,x+220,y-200,x+320,y-150,x+220,y-250)
    circle(x+85,y-40,7)
    fill(0,255,0)
    rect(0,y,500,50)
    line(x+45,y-170,x+45,y-120)
    line(x+20,y-145,x+70,y-145)
    line(x+155,y-170,x+155,y-120)
    line(x+130,y-145,x+180,y-145)
}