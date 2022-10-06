var background;
var backgroundImg;
var player,playerAnimation,playerStart;
var ground
function preload(){
  backgroundImg=loadImage("assets/backgroundimage.png");
  playerStart=loadImage("assets/boy-1.png");
playerAnimation=loadAnimation("assets/boy-1.png","assets/boy-2.png","assets/boy-3.png","assets/boy-4.png")

}

function setup() {
createCanvas(1500,800);
player=createSprite(200,100,550,500);
player.scale=1.6
player.addImage(playerStart);
player.addAnimation("running",playerAnimation);
player.velocityY=player.velocityY+20

ground=createSprite(100,400,500,50);

}

function draw() {

  background(backgroundImg);
  player.collide(ground)
  player.velocityY=player.velocityY+5
if(keyDown("right")){
player.changeAnimation("running",playerAnimation);
player.x=player.x+10
}
if(keyWentUp("right")){
player.addImage(playerStart);
}
if(keyWentDown("space")){
  player.velocityY=player.velocityY-30
}


drawSprites();
}

