

/* Circle */

var angle1 = 0.0;
var angle2 = 0.2;
var offset = 60;
var scalar = 2;
var speed1 = 0.0073;
var speed2 = 0.187;
var radius1 = 100;
var radius2 = 30;
var t = 0;

function setup() {
  createCanvas(500, 500);
  fill(0);
  background(204);
}



function draw() {
  stroke('black');
  translate(width/2, height/2);
  //x = mouseX - width/2;
  //y = mouseY - height/2;
  //console.log(x, y);
  
  //angle = -HALF_PI + atan2(y, x);
  rotate(angle1);
  ellipse(0, radius1, 2, 2);

  x = (radius1+radius2)*cos(angle1);
  y = (radius1+radius2)*sin(angle1);
  translate(x,y);
  stroke('red');
  // t = top of circle
  drawx = (radius2 - 5)*cos(angle2);
  drawy = (radius2 - 5)*sin(angle2);
  ellipse(drawx, drawy, 1, 1);
  //console.log(drawx, drawy);
  //var x = cos(angle) * scalar;
  //var y = sin(angle) * scalar;
  angle1 += speed1;
  angle2 += speed2;
  //scalar += speed;
}