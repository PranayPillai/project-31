const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinko = [];
var division = [];

var division1,division2,division3,division4,division5,division6,division7,division8;
var ground;

var divisionHeight = 300;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ground = new Ground(0,390,900,10);

  division1 = new Division(5,250,10,400);
  division2 = new Division(85,250,10,400);
  division3 = new Division(165,250,10,400);
  division4 = new Division(245,250,10,400);
  division5 = new Division(325,250,10,400);
  division6 = new Division(407,250,10,400);
  division7 = new Division(485,250,10,400);
  division8 = new Division(565,250,10,400);

  for(var j = 40; j <= width; j = j + 50){
    plinko.push(new Plinko(j,75));
  }

  for(var j = 15; j <= width - 10; j = j + 50){
    plinko.push(new Plinko(j,175));
  }

  for(var j = 15; j <= width - 20; j = j + 50){
    plinko.push(new Plinko(j,175));
  }

  for(var j = 15; j <= width - 20; j = j + 50){
    plinko.push(new Plinko(j,175));
  }

}

function draw() {
  background(255,255,255);  
  drawSprites();
}

for (var k = 0; k <= this.width; k = k + 80){
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
}
  
