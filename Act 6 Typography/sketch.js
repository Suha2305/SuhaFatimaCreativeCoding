let font;
let points = []; 
let msg = "   Opportunities don't happen, you create them"; 
let size = 80; 
let r = 5; // Radius for rotational movement
let angle = 0; // Angle for movement calculations
let t = 0; // Time variable for smooth animation

function preload() {
  font = loadFont("Tangerine-Bold.ttf"); 
}

function setup() {
  createCanvas(1000, 1000); 
  points = font.textToPoints(msg, 0, 0, size, { 
    sampleFactor: 0.5, // To determines how many points are generated from the text
    simplifyThreshold: 0.0 // Keeps all points without simplification
  });
  angleMode(DEGREES); // Set angle mode to degrees 
}

function draw() {
  background(24, 23, 58); 
  stroke(204, 255, 153); 

  let x = r * cos(angle); // X-shift based on rotation
  let y = r * sin(angle); // Y-shift based on rotation

  translate(20, 500); // Adjust position to center the message

  // Draw connecting lines from text points to their animated positions
  for (let i = 0; i < points.length; i++) {
    line(points[i].x, points[i].y, points[i].x + x, points[i].y + y);
  }

  // Background ellipses
  noStroke();
  fill(204, 255, 153, 20); 
  ellipse(480, -30, 300);
  ellipse(480, -30, 400);
  ellipse(480, -30, 500);
  ellipse(480, -30, 600);
  ellipse(480, -30, 700);
  ellipse(480, -30, 800);
  ellipse(480, -30, 900);
  ellipse(480, -30, 1000);

  fill(204, 255, 153); 
  textSize(size); 
  textFont(font); 
  text(msg, x, y); 


  let increment = 5 * sin(t); 
  t++; // Increment time variable
  angle += increment; // Update angle for continuous movement
}
