var player , player_img; 
var bg , bg_img ;
var stone , stone_img ;
var injection , injection_img ;

function preload(){
  player_img = loadImage("images/player.png");
  bg_img = loadImage("images/bg.png");
  stone_img = loadImage("images/stone.png");
  injection_img = loadImage("images/injection .png");
  }

function setup() {
  createCanvas(1000,600);
  player =  createSprite(850, 450, 50, 50);
  player.addImage(player_img);
  player.scale=0.2;   
}

function draw() {
  background(bg_img); 

  if(keyDown("RIGHT_ARROW")){
  player.velocityX=5; 
  }
  if(keyDown("LEFT_ARROW")){
    player.velocityX=-5; 
    }
  if(keyDown("DOWN_ARROW")){
      player.velocityY=5;
      }
  if(keyDown("UP_ARROW")){
        player.velocityY=-5; 
        } 

  text("Score: ",100,90);    

  if (World.frameCount % 150 === 0){
    stone = createSprite(200,200,10,10);
    stone.addImage(stone_img);
    stone.velocityX=15;
    stone.scale=0.2;
  }

  if(World.frameCount% 200 === 0){
    injection = createSprite(200,400,20,20);
    injection.addImage(injection_img);
    injection.velocityX=20;
    injection.scale=0.3;
  }

  if (World.frameCount % 250 === 0){
    stone = createSprite(700,200,10,10);
    stone.addImage(stone_img);
    stone.velocityY=15;
    stone.scale=0.2;
  }

  if(World.frameCount% 300 === 0){
    injection = createSprite(500,300,20,20);
    injection.addImage(injection_img);
    injection.velocityY=20;
    injection.scale=0.3;
  }   
  drawSprites();

      }