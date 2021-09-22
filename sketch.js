var bg,sleep,brush,gym,eat,drink,move,atronaut,bath;

function preload(){
  bg=loadImage("images/iss.png");
  brush=loadImage("images/brush.png");
  gym=loadImage("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
  drink=loadImage("images/drink1.png","images/drink2.png");
  bath=loadImage("images/bath1.png","images/bath2.png");
  move=loadImage("images/move1.png","images/move2.png");
  sleep=loadImage("images/sleep.png");
  eat=loadImage("images/eat1.png","images/eat2.png");

}

function setup() {
  createCanvas(600, 500);
  astronaut = createSprite(320,230);
  astronaut . addAnimation("sleeping",sleep);
  astronaut.scale=0.1;

  
  
  
}

function draw() {
 background(bg);

 textSize(20);
 fill("white");
 text("Intruction:",20,35);
 textSize(15);
 text("up arrow=brushing",20,55);
 text("down arrow=gymming",20,70);
 text("left arrow=eating",20,85);
 text("right arrow=bathing",20,100);
 text("m key = moving",20,115);

 edges=createEdgeSprites();
 astronaut.bounceOff(edges);

 if (keyDown("UP_ARROW")){
   astronaut.addAnimation("brushing",brush);
   astronaut.changeAnimation("brushing");
   astronaut.y=350;
   astronaut.velocityX=0;
   astronaut.velocityY=0;
 }

 if (keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming",gym);
  astronaut.changeAnimation("gymming");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}
if (keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}
if (keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}
if (keyDown("m")){
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("moving");
  astronaut.velocityX=1;
  astronaut.velocityY=1;
}



 drawSprites();  
}
