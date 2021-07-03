var sea, ground,seaImage,shipImage
function preload(){
seaImage=loadImage("sea.png");
shipImage1=loadAnimation("ship-1.png,ship-2.png,ship-3.png,ship-4.png");
}

function setup(){
  createCanvas(400,400);
 sea=createSprite(200,180,400,20)
 sea.addImage("sea",seaImage);
 sea.velocityX=-2
 ship=createSprite(200,200,150,50);
 ship.addAnimation("ship",shipImage1) ;

}

function draw() {
  background("blue");
 if (sea.x<0){
sea.x=sea.width/2;
 }
drawSprites();
}