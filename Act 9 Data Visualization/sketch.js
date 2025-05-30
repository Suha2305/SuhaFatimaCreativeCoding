
let colors = [
  { col: "#ff4757", name: "Red", value: 11, fact: "Red can increase heart rate and create a sense of urgency." },
  { col: "#ff8c00", name: "Orange", value: 1, fact: "The color orange was named after the fruit!" },
  { col: "#ffff00", name: "Yellow", value: 2, fact: "Yellow and red together can stimulate appetite!" },
  { col: "#32cd32", name: "Green", value: 14, fact: "Green is the easiest color for the human eye to process." },
  { col: "#1e90ff", name: "Blue", value: 42, fact: "Blue was once considered a low-class color in Ancient Rome." },
  { col: "#800080", name: "Purple", value: 14, fact: "Purple dye was made from sea snails and was very expensive." },
  { col: "#ff69b4", name: "Pink", value: 5, fact: "Pink was considered a masculine color in the 18th century." },
  { col: "#ffffff", name: "White", value: 2, fact: "White is the color of mourning in some Eastern cultures." },
  { col: "#000000", name: "Black", value: 9, fact: "Black is often associated with power and sophistication." }
];


let barWidth = 50;// Width of each bar

// This will store the fact to show when hovering
let hoveredFact = "";

function setup() {
  createCanvas(800, 450);        
  textFont(font);             
  textAlign(CENTER, CENTER);     
  rectMode(CORNER);              
}

function preload() {
  font = loadFont("ShadowsIntoLightTwo-Regular.ttf");
}

function draw() {
  background(244, 228, 246);  

  // Heading
  fill(0);
  textSize(20);
  text("🌈 Hover over the bars to see a cool fact!", width / 2, 30);

  // To display the hovered fact 
  textSize(14);
  fill(50);
  text(hoveredFact, width / 2, 60);

  // Loop through each color bar
  for (let i = 0; i < colors.length; i++) {
    // x-position of each bar
    let spacing = 10; // smaller gap between bars
    let x = i * (barWidth + spacing) + 50;

    // Height of the bar based on its value
    let barHeight = map(colors[i].value, 0, 57, 50, 300);

    let y = height - barHeight - 30; // y-position for bar top

    // ----- Draw shadow behind the bar -----
    noStroke();
    fill(0, 30); // semi-transparent black shadow
    rect(x + 4, y + 4, barWidth, barHeight, 10); // offset shadow

    // to draw the actual bar 
    fill(colors[i].col); // use the color from the object
    rect(x, y, barWidth, barHeight, 10); // rounded corners with radius 10

    // To draw color name below the bar 
    fill(0);
    textSize(13);
    text(colors[i].name, x + barWidth / 2, height - 10);
 
    let isHovering = mouseX > x && mouseX < x + barWidth &&
                     mouseY > y && mouseY < y + barHeight;

    if (isHovering) {
      hoveredFact = `${colors[i].name}: ${colors[i].value}% - ${colors[i].fact}`;
    }
  }
}
