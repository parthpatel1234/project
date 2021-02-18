var canvas;
var music;
var board1,board2,board3,board4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);
board1= createSprite(527,590,140,20);
board2= createSprite(527-150,590,140,20);
  board3= createSprite(527-300,590,140,20);
  board4= createSprite(525-450,590,140,20);
  board1.shapeColor="green"
  board2.shapeColor="purple"
  board3.shapeColor="yellow";
  board4.shapeColor="blue";
  music.loop();
    box= createSprite(300,100,20,20)
   box.shapeColor="grey";
 box.velocityX=5;
  box.velocityY=4;
}

function draw() {
    background(0);
   
    edges= createEdgeSprites();
if(box.isTouching(board2)){
  box.shapeColor="purple";
}else if(box.isTouching(board1)){
  box.shapeColor="green"
}else if(box.isTouching(board3)){
  box.shapeColor="yellow"
}else if(box.isTouching(board4)){
  box.shapeColor="blue"
}
box.bounceOff(edges)
  box.bounceOff(board1)
  box.bounceOff(board2)
  box.bounceOff(board3)
  box.bounceOff(board4)
drawSprites();
    
}
