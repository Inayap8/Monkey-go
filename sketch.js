
var monkey ,monkey1, monkey_running
var ground,ground1;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivaltime=0
var gs=0
function preload(){
  
  
  monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  monkey1=loadImage("sprite_0.png");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 FoodGroup= new Group()
  obstacleGroup=new Group()
}



function setup() {
  monkey=createSprite(50,335,20,20)
monkey.addAnimation("monkey escape",monkey_running)
  monkey.scale=0.15
  ground=createSprite(200,390,1000,20)
 ground.velocityX=-7
  ground.x=ground.width/2
  console.log(ground.x)
  
}


function draw() {
background("lightgreen")
  
  if (gs==0){
  if (keyDown("space")){
    monkey.velocityY=-10
  }
  monkey.velocityY=monkey.velocityY+0.5 
      monkey.collide(ground)
monkey.collide(obstacleGroup)
 if (monkey.isTouching(FoodGroup)){
   FoodGroup.destroyEach()
 }
if (monkey.x<0){
  gs=1}
    if(ground.x<0){
    ground.x=ground.width /2
  }
    fill("black")
  textSize(20)
  survivaltime=Math.ceil(frameCount/frameRate())
text("survival time-"+ survivaltime,180,30)

    Obstacle();
    Banana();
  }
  
  
  
  if (gs==1){
  
obstacleGroup.setLifetimeEach(-1)
    FoodGroup.setLifetimeEach(-1)
    text ("GAME OVER",200,200)
      FoodGroup.destroyEach();
    obstacleGroup.destroyEach();
    survivaltime=0
    ground.setVelocity(0,0)
    
}
  
  
  drawSprites();
}
  
function Banana(){
  if (frameCount%80==0){
  banana=createSprite(400,Math.round(random(120,200)),20,20)
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX=-8
    banana.lifetime=400/8
   FoodGroup.add(banana)
  }
}
  function Obstacle(){
    if (frameCount%300==0){
      obstacle=createSprite(400,350,20,20)
      obstacle.addImage(obstacleImage)
      obstacle.scale=0.15
      obstacle.velocityX=-6
      obstacle.lifetime=400/6
      obstacleGroup.add(obstacle)
    }
  }




