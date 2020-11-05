var car, wall;
var speed, weight;
var Deformation;
var wall2;

function setup() {
  createCanvas(600,700);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50, 200, 20, 20);
  wall = createSprite(400, 200, 30, 60);
  Deformation = 0.5 * weight * speed * speed / 22500;
  wall2 = createSprite(430, 200, 80, 400);
}

function draw() {
  background(255,255,255); 
  wall2.depth = car.depth-1; 
  wall.visible = false
  car.velocityX = speed;
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX = 0;
    if(Deformation > 180){
      car.shapeColor = color(255,0,0);
    }

    if(Deformation < 180 && Deformation > 100){
      car.shapeColor = color(230,230,0);
    }

    if(Deformation < 100){
      car.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}