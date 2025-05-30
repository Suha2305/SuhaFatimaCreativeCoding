let img;

function preload() {
  img = loadImage("Act 4 Creative cODING.jpg");
}

function setup() {
  createCanvas(400, 400);
  noStroke();
  background(0);
}

function draw() {
  let x = random(width);
  let y = random(height);

  
  let c = img.get(x, y);

  
  fill(c[0], c[1], c[2], 80);

  // Draw a rectangle at the random position with random size from 10-30
  let size = random(10, 40);
  rect(x, y, size, size);
}
