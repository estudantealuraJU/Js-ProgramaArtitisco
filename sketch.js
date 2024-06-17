function setup() {
  createCanvas(600, 600);
  background("white");
}

function draw() {
  stroke("red");
  fill("black");

  // console.log(mouseIsPressed)

  if (mouseIsPressed) {
    circle (mouseX, mouseY, 40, 35);
  }
}
