
var Bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(30,52);
  thickness=random(223,321);

  Bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1000,200,thickness, height/2);
  

  Bullet.velocityX = speed;

  Bullet.shapeColor=color(255,255,255)
  wall.shapeColor=color(80,80,80)
}

function draw() {
  background(0,0,0);  

  if(wall.x-Bullet.x < (Bullet.width+wall.width)/2){
    Bullet.velocityX=0
    
    var deformation=0.5 * weight * speed * speed/thickness * thickness * thickness;
    
    if(deformation>10){
      wall.shapeColor=color("red");
    }
    if(deformation<10){
      wall.shapeColor=color("green");
    }
  }
  drawSprites();
}
