// Declaring global variables for sound and FFT analysis
let song, fft;

function preload() {
  song = loadSound('Aylex - Life is Beautiful (freetouse.com).mp3'); 
}

function setup() {
  createCanvas(800, 600); 
  song.loop(); 

  // Initializing FFT (Fast Fourier Transform) to analyze sound frequencies
  fft = new p5.FFT();
  fft.setInput(song); // Connecting FFT to the song
}

function draw() {
  background(10, 10, 50); 

  let spectrum = fft.analyze(); // Get an array of frequency values from the sound

  // Usinf For Loop through the frequency spectrum and create visual bars
  for (let i = 0; i < spectrum.length; i += 10) {
    let x = map(i, 0, spectrum.length, 0, width); // To position Bars accros the canvas equally
    let h = map(spectrum[i], 0, 255, 0, height);

    fill(
      map(i, 0, spectrum.length, 0, 255), //Lower frequencies have a higher red value
      255 - map(i, 0, spectrum.length, 0, 255), //higher frequencies have a higher green value
      255
    );

    rect(x, height - h, 10, h); // To create bars according to the frequency 
  }
}
