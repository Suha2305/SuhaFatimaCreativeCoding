let stars = [];

function setup() {
  createCanvas(400, 400); 

  // Create 100 stars with randomized positions and sizes
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: random(width),
      y: random(height - 50),
      size: random(2, 4)
    });
  }
}

function draw() {
  background(10, 0, 30); 

// background
  fill(255);      
  noStroke();
  for (let i = 0; i < stars.length; i++) {
    ellipse(stars[i].x, stars[i].y, stars[i].size); // To Draw the star
    stars[i].y += 0.2; // To make the stars slowly move  downward 

    // If star moves off screen, send it back to top
    if (stars[i].y > height) {
      stars[i].y = 0;
    }
  }

  // AURA
  fill(255, 255, 0, 30); 
  ellipse(200, 200, 200); 
  ellipse(200, 200, 300); 
  fill(244, 255, 0, 30);
  ellipse(200, 200, 400); 

  // MARS
  fill(200, 100, 50); 
  ellipse(width / 2, height + 50, 500, 200); 

  // holes
  fill(180, 80, 40);
  ellipse(120, 370, 50, 25);
  ellipse(250, 380, 40, 20);

  // ALIEN
  push(); 
  translate(width / 2, height / 2); // To move the origin to center for alien

  //Alien Ears 
  stroke(100, 200, 250);
  strokeWeight(6);
  line(-30, -40, -30, -80); // Left antenna
  line(30, -40, 30, -80);   // Right antenna

  // Circles on top of antennae
  noStroke();
  fill(100, 200, 250);
  ellipse(-30, -85, 10, 10);
  ellipse(30, -85, 10, 10);

  // Alien Head 
  fill(100, 200, 250); 
  beginShape();
  vertex(-50, -40);
  bezierVertex(-70, -80, 70, -80, 50, -40); // Top curve of head
  bezierVertex(50, 20, -50, 20, -50, -40);  // Bottom curve of head
  endShape(CLOSE);

  // Eyes 
  fill(255); 
  ellipse(-25, -30, 20, 35); 
  ellipse(25, -30, 20, 35);  

  // Pupils 
  fill(0); 
  ellipse(-30, -35, 10, 15); 
  ellipse(20, -35, 10, 15);  
  
  // Body
  fill(50, 150, 200); 
  rect(-30, 10, 60, 100, 20); 

  // Arms
  stroke(50, 150, 200);
  strokeWeight(8);
  line(-30, 50, -80, 90); 
  line(30, 50, 80, 90);   

  // Legs 
  line(-20, 90, -30, 160);
  line(20, 90, 30, 160);   

  pop(); 
}
