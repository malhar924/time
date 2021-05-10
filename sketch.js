function setup() {
  createCanvas(800,800);
 A= createSprite(400, 200, 50, 50);
 A.shapeColor="blue"
 B=createSprite(400, 400, 50, 50);
 B.shapeColor="blue"
 C= createSprite(400,600,50,50);
 C.shapeColor="blue"
 D= createSprite(400,800,500,50);
 D.shapeColor="blue"
}

function draw() {
  background(255,255,255);
  B.x=mouseX
  B.y=mouseY
if(isTouching(A,B)){
  A.shapeColor="red"
  B.shapeColor="red"
}
else{A.shapeColor="blue"
B.shapeColor="blue"}
if(isTouching(D,B)){
  B.shapeColor="red"
  D.shapeColor="red"
}
else{D.shapeColor="blue"
B.shapeColor="blue"}
if(isTouching(C,B)){
  C.shapeColor="red"
  B.shapeColor="red"
}
else{C.shapeColor="blue"
B.shapeColor="blue"}
  drawSprites();
}
function isTouching(object1,object2){
if(object2.x-object1.x<=object2.width/2+object2.width/2 &&
  object2.x-object1.x<=object1.width/2+object2.width/2 &&
  object1.y-object2.y<=object1.height/2+object2.height/2 &&
  object2.y-object1.y<=object2.height/2+object1.height/2)
  return true
  else{
  return false}
  }