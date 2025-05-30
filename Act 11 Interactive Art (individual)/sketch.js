let letters = [];
let totalLetters = 175; // No. of letters that will be loaded on the screen 

function setup() {
  createCanvas(800, 600); 
  textSize(28);           
  textFont('Courier New'); 
  // Create a bunch of FallingLetter objects and add them to the letters array
  for (let i = 0; i < totalLetters; i++) {
    letters.push(new FallingLetter());
  }
}

function draw() {
  background(10, 10, 30); 
  
  for (let letter of letters) { // Using For loop to go through each letter and update its position and display it
    letter.update();
    letter.display();
  }
}


class FallingLetter {
  constructor() {  // set up properties like position, speed, color, etc.
    this.reset(); // Set initial values
  }

  // To reset the letter to a new random position and character
  reset() { // "this" means the current object — like saying "my" position or "my" speed
    this.char = randomChar();          // Choose a random printable character
    this.x = random(width);            // Random horizontal position
    this.y = random(-height, 0);       // Letters start falling randomly somewhere above the screen
    this.speed = random(1, 4);         // Random falling speed
    this.color = color(random(100, 255), random(100, 255), random(255)); 
    this.paused = false;              
  }

  
  update() { // To update the position of the letter
    // To Calculate the distance from the mouse to the letter
    let d = dist(this.x, this.y, mouseX, mouseY);

    // If the mouse is close to the letter pause it (make it stop falling)
    if (d < 40) { // radius of the distance on letters being paused
      this.paused = true;
    } else {
      this.paused = false;
    }

    // If the letter is not paused, make it fall
    if (!this.paused) {
      this.y += this.speed;
    }

    if (this.y > height) { // If the letter goes off the bottom of the screen this resets it to the top
      this.reset();
      this.y = random(-200, 0); // Letters start generating a bit above the canvas
    }
  }

  // Display the letter on the canvas
  display() {
    fill(this.color);     // text colour
    text(this.char, this.x, this.y); // Draw the character at its position
  }
}

function randomChar() {
  // A string of all printable characters we want to include
  const printable = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=_+[]{};:',.<>/?";

  // Choose one character randomly from the string
  return printable.charAt(int(random(printable.length)));
}
