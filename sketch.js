

/* Circle */

var angle1 = 0.0;
var angle2 = 0.0;
var scalar = 2;
var speed1 = 0.0073;
var speed2 = 0.187;
var radius1 = 200;
var radius2 = 60;
var gears1 = 129;
var gears2 = 40;
var offset = 15;
var t = 0;
var x_prev = null;
var y_prev = null;
var x_next = null;
var y_next = null;

function setup() {
  createCanvas(500, 500);
  fill(204);
  background(204);
  translate(width/2, height/2);

  ellipse(0, 0, 2*radius1, 2*radius1);
  fill(0);
}



function draw() {
  stroke('black');
  translate(width/2, height/2);
  //x = mouseX - width/2;
  //y = mouseY - height/2;
  //console.log(x, y);
  
  //angle = -HALF_PI + atan2(y, x);
  //rotate(angle1);

  outerx = radius1 * cos(angle1);
  outery = radius1 * sin(angle1);
  ellipse(outerx, outery, 2, 2);
  x = (radius1 - radius2)*cos(angle1);
  y = (radius1 - radius2)*sin(angle1);
  //translate(x,y);
  stroke('red');
  x_next = x + (radius2 - offset)*cos(angle2);
  y_next = y + (radius2 - offset)*sin(angle2);
  //ellipse(x_next, y_next, 1, 1);
  //console.log(drawx, drawy);
  //var x = cos(angle) * scalar;
  //var y = sin(angle) * scalar;
  angle1 += TWO_PI/gears1;
  angle2 += TWO_PI/gears2;
  //scalar += speed;
  if(x_prev != null && y_prev != null){
    line(x_prev, y_prev, x_next, y_next);
  }
  x_prev = x_next;
  y_prev = y_next;
}

function mousePressed(){
  noLoop();
}