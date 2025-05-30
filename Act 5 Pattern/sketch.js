let minHeartSize = 5;  // Min heart size
let maxHeartSize = 30; // Max heart size

function setup() {
  createCanvas(400, 400); 
  noLoop(); 
}

function draw() {
  background(255); 
  let gridSize = 50; // Size of each checker 

  // To loop through the canvas using a grid pattern
  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {

      if (random(1) > 0.5) {
        fill(random(80, 180), random(140, 220), random(80, 180)); 
      } else {
        fill(random(170, 255), random(90, 170), random(120, 180)); 
      }

      // To draw the background square
      rect(x, y, gridSize, gridSize);

      // To randomly choose colour
      let heartColor = random(1) > 0.5
        ? color(random(160, 255), random(200, 255), random(160, 255)) 
        : color(random(220, 255), random(170, 220), random(170, 220)); 

      fill(heartColor); 

      // Pick a random size for the heart
      let heartSize = random(minHeartSize, maxHeartSize);

      
      // To center the heart in the middle of each square
      drawHeart(x + gridSize / 2, y + gridSize / 2, heartSize);
    }
  }
}



function drawHeart(x, y, size) {
  push();              
  translate(x, y);     // To Move the origin to heart's center
  beginShape();        

  // Bottom point of the heart
  vertex(0, size / 2);

  // Left half of heart using a bezier curve
  bezierVertex(-size, -size / 2, -size, -size, 0, -size / 2);

  // Right half of heart using another bezier curve
  bezierVertex(size, -size, size, -size / 2, 0, size / 2);

  endShape(CLOSE);    
  pop();               
}
