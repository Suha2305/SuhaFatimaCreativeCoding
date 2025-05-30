function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(135, 206, 250); // Sky blue

  noStroke(); // No outline for soft shapes
  
  // Sun
  fill(255, 196, 0);
  ellipse(0, 0, 100);

  // Clouds
  fill(255);
  ellipse(70, 50, 60, 40);
  ellipse(110, 50, 50, 30);
  ellipse(95, 65, 55, 35);

  ellipse(270, 70, 60, 40);
  ellipse(310, 70, 50, 30);
  ellipse(295, 85, 55, 35);

  // Road
  fill(50);
  rect(0, 220, width, 80);

  stroke(255);
  strokeWeight(4);
  for (let i = 20; i < width; i += 40) {
    line(i, 260, i + 20, 260); // Dashed lane markings
  }

  noStroke();

  // Roof
  fill(98, 38, 124);
  rect(120, 130, 140, 50, 100, 100, 0, 0);
  

  // Car body
  fill(120, 46, 169);
  rect(100, 170, 180, 60, 15); // Car body
  
  
  // Car body down
  fill(169);
  rect(100, 215, 180, 20, 10); // Car body

  
  // Windows
  fill(209, 242, 255,);
  rect(135, 140, 50, 25, 5); // Front window
  rect(195, 140, 50, 25, 3, 10, 3, 3); // Back window
  

  // Door
  fill(98, 38, 124);
  rect(140, 170, 100, 60, );

  // Door handle
  fill(100);
  rect(210, 185, 15, 5, 3);

  // Headlights
  fill(255, 207, 46);
  ellipse(280, 190, 15, 15); 
  ellipse(280, 190, 15, 15); 

  // Wheels
  fill(0);
  ellipse(130, 230, 40);
  ellipse(250, 230, 40);


// small Wheels
  fill(100);
  ellipse(130, 230, 20);
  ellipse(250, 230, 20);
}

