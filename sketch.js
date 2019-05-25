

/* Circle */

var angle1 = 0.0;
var angle2 = 0.0;
var radius1 = 400;
var radius2 = 60;
var gears1 = 145;
var gears2 = 50;
var offset = 20;
var x_prev = null;
var y_prev = null;
var x_next = null;
var y_next = null;
var stroke_col = 0;
var red = 255;
var green = 0;
var blue = 0;

function setup() {
  createCanvas(800, 800);
  fill(255);
  background(255);
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

  //red   = (stroke_col >> 16) & 0xFF
  //green = (stroke_col >> 8) & 0xFF;
  //blue  = (stroke_col) & 0xFF;
  //console.log(red, green, blue);
  //stroke(red, green, blue);
  stroke(red, green, blue);
  x_next = x + (radius2 - offset)*cos(angle2);
  y_next = y + (radius2 - offset)*sin(angle2);

  angle1 += TWO_PI/gears1;
  angle2 += TWO_PI/gears2;

  if(x_prev != null && y_prev != null){
    line(x_prev, y_prev, x_next, y_next);
  }
  x_prev = x_next;
  y_prev = y_next;
  //stroke_col += 50;
}

function rand(n){
  return Math.floor(Math.random() * n);
}

function mousePressed(){
  clear();
  //noLoop();
  //radius1 = rand(400);
  radius2 = rand(400);
  console.log(radius1, radius2);
  gears1 = rand(200);
  gears2 = rand(200);
  offset = rand(radius2-1);
  x_prev = null;
  y_prev = null;
  x_next = null;
  y_next = null;
  red = rand(255);
  green = rand(255);
  blue = rand(255);
  //console.log(red, green, blue);
  stroke(red, green, blue);

}
