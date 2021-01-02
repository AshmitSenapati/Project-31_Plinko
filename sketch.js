const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,700);
  engine = Engine.create();
  world = engine.world

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(divi = new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
  
  ground = new Ground(240,690,480,20)
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);
  Engine.update(engine);
  

  ground.display();
  divi.display();
  
  
  
  //drawSprites();
}