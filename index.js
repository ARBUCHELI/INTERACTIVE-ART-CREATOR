let x, y;
let speedX, speedY;
let redVal, greenVal, blueVal;
let alphaVal = 70;
let angle = 0;

function setup() {
  // TODO: Create canvas and set initial background color
  createCanvas(windowWidth, windowHeight);
  background(50);
  // TODO: Randomize variables used to draw shapes
  x = random(0, width);
  y = random(0, height);
  speedX = random(-3, 3);
  speedY = random(-3, 3);
}

function draw() {
  // TODO: Map key inputs to various shape drawing functions
  if (keyIsPressed && key !== ' ') {
    if (keyCode % 5 === 0) {
      parametricLines();
    }
    if (keyCode % 5 === 1) {
      bouncingEllipse(random(-100, 50))
    }
    if (keyCode % 5 === 2) {
      flower();
    }
  }

}

// TODO: Add keyPressed() function to ensure that the drawing functions don't repeat on single key presses
// TODO: Reset canvas on spacebar press
// TODO: Save image on Return/Enter press
function keyPressed() {
  if (key !== ' ') {
    if (keyCode % 5 === 3) {
      roundedRect();
    }
    if (keyCode % 5 === 4) {
      star(random(30, 50), random(30, 50), random(4, 7));
    }
    if (keyCode === 13) {
      saveCanvas('canvas-' + frameCount, 'jpg');
    } else {
      clear();
      background(50);
    }
  }
}


// TODO: Add keyReleased() function to randomize values again on key release
function keyReleased() {
  x = random(0, width);
  y = random(0, height);
  speedX = random(-3, 3);
  speedY = random(-3, 3);
}