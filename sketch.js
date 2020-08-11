var fixedRect, movingRect,ob1,ob2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;

  ob1 = createSprite(100,100,20,20);
ob1.velocityX = +5;
ob1.shapeColor = "red"
  ob2 = createSprite(600,100,20,20);
  ob2.velocityX = -5;
  ob2.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  
//bounceOff(movingRect,fixedRect);
if (isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "blue";
}
else{
  movingRect.shapeColor = "green";
}
bounceOff(ob1,ob2);
  drawSprites();
}
function bounceOff (object1,object2){
if(object1.x - object2.x< object1.width/2 + object2.width/2 &&
  object2.x - object1.x< object2.width/2 + object1.width/2){
    object1.velocityX = object1.velocityX*-1;
    object2.velocityX = object2.velocityX*-1;
  }
  if (object1.y - object2.y< object1.height/2 +object2.height/2 &&
    object2.y - object1.y< object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY*-1;
    object2.velocityY = object2.velocityY*-1;
}
}
function isTouching (ob1,ob2){
  if(ob1.x - ob2.x < ob1.width/2 + ob2.width/2 &&
    ob2.x - obj1.x< obt2.width/2 + ob1.width/2 &&
      ob1.y - ob2.y< ob1.height/2 +ob2.height/2 &&
        ob2.y - ob1.y< ob2.height/2 + ob1.height/2){
          return true
    }
  else
  return false  
}
