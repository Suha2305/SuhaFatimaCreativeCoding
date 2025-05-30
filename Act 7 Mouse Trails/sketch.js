let currentKey = 'r';
let glowColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20, 20, 40);
  glowColor = color(138, 139, 255);
}

function draw() {
  
  if (currentKey === 'e') { // if the user presses 'e', the background becomes dynamic
    
    background(255, mouseX, 255 - mouseY);// background color changes based on mouse position
  }

  
  drawInstructions();// instructions box 
}

// this function changes the current key when a user presses a key
function keyPressed() {
  currentKey = key.toLowerCase(); // make sure key is lowercase (e.g. 'R' becomes 'r')
}

// this function draws circles when the mouse is moved 
function mouseMoved() {
  // check which key is pressed and choose a color accordingly
  if (currentKey === 'r') fill(193, 14, 14, 30); // red
  else if (currentKey === 'o') fill(255, 100, 0, 30); // orange
  else if (currentKey === 'y') fill(255, 255, 0, 30); // yellow
  else if (currentKey === 'g') fill(0, 255, 0, 30); // green
  else if (currentKey === 'b') fill(0, 120, 255, 30); // blue
  else if (currentKey === 'p') fill(255, 105, 180, 30); // pink
  else if (currentKey === 'i') fill(75, 0, 130, 30); // indigo
  else if (currentKey === 'w') fill(255, 255, 255, 30); // white
  else return;

  noStroke(); 
  ellipse(mouseX, mouseY, 30, 30); // to draw a circle at the location of the mouse
}

 
function mouseDragged() {
  // right click: draw cool mirrored rectangles
  if (mouseButton === RIGHT) {
    let r = map(mouseX, 0, width, 100, 255);  // pink
    let g = map(mouseY, 0, height, 50, 100);  // purple
    let b = map(mouseY, 0, height, 150, 255); // blue

    fill(r, g, b, 60); // transparent fill
    stroke(255); // white border for box
    strokeWeight(1);

    let size = 30;

    // tp draw 4 mirrored rectangles around the canvas
    rect(mouseX, mouseY, size, size);
    rect(width - mouseX, mouseY, size, size);
    rect(mouseX, height - mouseY, size, size);
    rect(width - mouseX, height - mouseY, size, size);
  }

  // to draw colored rectangles based on key pressed
  if (mouseButton === LEFT) {
    if (currentKey === 'r') {
      fill(193, 14, 14, 30); stroke(167, 12, 12); // red
    } else if (currentKey === 'o') {
      fill(255, 100, 0, 30); stroke(200, 80, 0); // orange
    } else if (currentKey === 'y') {
      fill(255, 255, 0, 30); stroke(200, 200, 0); // yellow
    } else if (currentKey === 'g') {
      fill(0, 255, 0, 30); stroke(0, 200, 0); // green
    } else if (currentKey === 'b') {
      fill(0, 120, 255, 30); stroke(0, 80, 200); // blue
    } else if (currentKey === 'p') {
      fill(255, 105, 180, 30); stroke(200, 50, 150); // pink
    } else if (currentKey === 'i') {
      fill(75, 0, 130, 30); stroke(50, 0, 100); // indigo
    } else if (currentKey === 'w') {
      fill(255, 255, 255, 30); stroke(180); // white
    } else {
      return; // if no valid color, skip
    }

    // rectangle size based on mouse Y position
    let size = mouseY / 5;
    rect(mouseX, mouseY, size, size);
  }
}

// instruction box 
function drawInstructions() {
  fill(20, 20, 40, 200);
  stroke(glowColor);
  strokeWeight(1);
  rect(20, 20, 230, 255, 12); 

  // instruction text 
  noStroke();
  fill(255);
  textSize(13);
  textAlign(LEFT, TOP);
  text(
    "-> Press a key:\n" +
    "R - Red\nO - Orange\nY - Yellow\nG - Green\n" +
    "B - Blue\nP - Pink\nI - Indigo\nW - White\n\n" +
    "Left-Click + Drag: Paint\n" +
    "Right-Click + Drag: Mirror shapes\n" +
    "E - Dynamic Background\n\n" +
    "Starts with RED!", 
    30, 30
  );
}
