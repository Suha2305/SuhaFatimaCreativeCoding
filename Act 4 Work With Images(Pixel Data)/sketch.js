let img;

function preload() {
  img = loadImage("Act 4 Creative cODING.jpg");
}

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(0);

  image(img, 0, 0, width, height);

  // Get colour From mouse position
  let c = get(mouseX, mouseY);

  // Colour from image and Alpha
  fill(c[0], c[1], c[2], 220);

  // Rectangle pointer
  rect(mouseX - 50, mouseY - 50, 100, 100);
}
