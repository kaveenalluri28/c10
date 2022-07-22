var trex;
var trex_running;
var edges;

var ground, groundImage, groundImage2;

function preload(){
  
  trex_running =loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
  groundImage2 = loadImage("ground1.png");

}

function setup(){

  createCanvas(600,200)
  
  //creating a trex sprite
  trex = createSprite(50,100,20,20);
  trex.addAnimation("running",trex_running);
  trex.scale  = 0.5;
 
  edges = createEdgeSprites();


    //creating a ground sprite
    ground = createSprite(300,170,600,10);
    ground.addImage("ground",groundImage);
    ground.velocityX = -4;
   
}

function draw(){

  background(220);

  //trex jumping when space is pressed
  if(keyDown("space")){

    trex.velocityY = -10;

  }

  // making the ground go continous.
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  //gravity for trex jump
  trex.velocityY = trex.velocityY + 0.5;

  
  trex.collide(ground)

  drawSprites();

}
