const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

var moneyImg;
var poorman, poormanImg;
var moneyGroup;

function preload() {
  poormanImg=loadImage("poor.png");
  moneyImg=loadImage("rupee.png");
}

function setup() {
  createCanvas(400,400);
  poorman=createSprite(200, 370, 20, 10);
  poorman.addImage(poormanImg);
  poorman.scale=0.1;
  moneyGroup=new Group();
}

function draw() {
  background("black");
  //poorman.x=mouseX;
  if(keyDown(UP_ARROW)) {
    poorman.y=poorman.y-2;
  }
  if(keyDown(LEFT_ARROW)) {
    poorman.x=poorman.x-5;
  }
  if(keyDown(RIGHT_ARROW)) {
    poorman.x=poorman.x+5;
  }
  for(var i=0; i< moneyGroup.length; i++) {
    if(poorman.isTouching(moneyGroup.get(i)) && moneyGroup.get(i)!=undefined) {
      moneyGroup.get(i).destroy();
    }
  }
 spawnMoney();
  drawSprites();
}
function spawnMoney() {
  if(frameCount%30===0) {
    var money = createSprite(50, 50, 20, 20);
    money.x = Math.round(random(50, 350));
    money.velocityY=5;
    money.addImage(moneyImg);
    money.scale=0.05;
    moneyGroup.add(money);
  }
 }