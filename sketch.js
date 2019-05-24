

/* Circle */

var angle = 0.0;
var offset = 60;
var scalar = 2;
var speed = 0.05;
var radius = 100;

function setup() {
  createCanvas(500, 500);
  fill(0);
  background(204);
}

function draw() {
  translate(width/2, height/2);
  x = mouseX - width/2;
  y = mouseY - height/2;
  //console.log(x, y);
  
  //translate(mouseX, mouseY);
  angle = atan2(y, x);
  rotate(-HALF_PI + angle);

  //var x = cos(angle) * scalar;
  //var y = sin(angle) * scalar;
  ellipse(0, radius, 2, 2);
  //angle += speed;
  //scalar += speed;
}