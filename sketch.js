var issimg,spacebg,spacecraft1,spacecraft2,spacecraft3,spacecraft4
var iss,spacecraft,hasDocked=false


function preload(){
  issimg=loadImage("./iss.png")
  spacebg=loadImage("./spacebg.jpg")
  spacecraft1=loadImage("./spacecraft1.png")
  spacecraft2=loadImage("./spacecraft2.png")
  spacecraft3=loadImage("./spacecraft3.png")
  spacecraft4=loadImage("./spacecraft4.png")
}

function setup() {
  createCanvas(600,350);
  createSprite(400, 200, 50, 50);
  iss=createSprite(330,130)
  iss.addImage(issimg)
  spacecraft=createSprite(285,240);
  spacecraft.addImage(spacecraft1)
  spacecraft.scale=0.2
}

function draw() {
  background(spacebg);
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1)
  }
  if(keyDown(LEFT_ARROW)){
    spacecraft.addImage(spacecraft3);
    spacecraft.x=spacecraft.x-1
  }
  if(keyDown(RIGHT_ARROW)){
    spacecraft.addImage(spacecraft4);
    spacecraft.x=spacecraft.x+1
  }
  if(keyDown(DOWN_ARROW)){
    spacecraft.addImage(spacecraft2);
  }
  if(keyDown(UP_ARROW)){
    spacecraft.y=spacecraft.y-1
  }
 if(spacecraft.y<=(iss.y+50)&spacecraft.x<=(iss.x-10)){
   hasDocked=true;
   textSize(25)
   fill("white")
   text("Docking succesful!",200,300)
 }

  drawSprites();
}