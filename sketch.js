var ball = {
x:20,
y:30,
r:25,
colour:["blue", "red", "green"]
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(random(ball.colour));
  circle(ball.x,ball.y,ball.r);
  ball.x = ball.x+2;
  ball.y = ball.y+4;
}