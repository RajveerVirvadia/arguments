var mBox,fBox,box1,box2,box3,box4;

function setup() {
  createCanvas(800,400);

  mBox = createSprite(100,200,50,50);
  mBox.shapeColor="green";
  fBox = createSprite(400,200,50,50);
  fBox.shapeColor="green";
  box1 = createSprite(100,300,50,50);
  box1.shapeColor="blue";
  box2 = createSprite(300,300,50,50);
  box1.velocityX=2;
  box2.velocityX=-2;
  box3 = createSprite(100,100,50,50);
  box3.shapeColor="orange";
  box4 = createSprite(100,200,50,50);
  box4.shapeColor="black";
  box3.velocityY=2;
  box4.velocityY=-2;
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("yellow");
  mBox.x=mouseX;
  mBox.y=mouseY;
  if(isTouching(mBox,box1)){
    mBox.shapeColor="red";
    box1.shapeColor="red";
  }  
  else{
    mBox.shapeColor="green";
    box1.shapeColor="blue";
  }
  bounceOff(box1,box2);
  bounceOff(box3,box4);
  bounceOff(box4,box1);

  drawSprites();
}

