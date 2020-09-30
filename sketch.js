
 var movingbox;
 var fixedbox;

function setup() {
  createCanvas(800,400);
 movingbox =  createSprite(400, 200, 50, 50);
 movingbox.shapeColor="green";
 fixedbox = createSprite(200,200,70,70);
 fixedbox.shapeColor="green";
}


function draw() {
  background("black");  

movingbox.x = World.mouseX;
movingbox.y = World.mouseY;
if (isTouching()) {
  movingbox.shapeColor="red";
  fixedbox.shapeColor="red";
} else {
  movingbox.shapeColor="green";
  fixedbox.shapeColor="green";
}   



  drawSprites();

}
function isTouching(){
  if(movingbox.x-fixedbox.x < movingbox.width/2 + fixedbox.width/2
    && fixedbox.x - movingbox.x  < movingbox.width/2 + fixedbox.width/2
    && movingbox.y-fixedbox.y < movingbox.height/2 + fixedbox.height/2
    && fixedbox.y- movingbox.y < movingbox.height/2 + fixedbox.height/2){
   return true;
   }else {
  return false;
   }




}