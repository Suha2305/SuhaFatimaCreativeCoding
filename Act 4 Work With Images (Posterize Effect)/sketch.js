let img;

function preload() {
  img = loadImage("Act 4 Creative cODING.jpg");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(10, 10, 30);

  // Scale image to fit canvas
  image(img, 0, 0, width, height);

  // Apply posterization effect based on mouseX
  filter(POSTERIZE, map(mouseX, 0, width, 2, 40));
}
