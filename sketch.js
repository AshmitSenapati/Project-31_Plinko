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
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
  for(var j = 0; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j,65,10));
  }
  for(var j = 25; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j,145,10))
  }
  for(var j = 0 ; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j,225,10))
  }
  for(var j = 25; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j,305,10))
  }

  


  ground = new Ground(240,690,480,20)
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);
  Engine.update(engine);
  

  ground.display();
  for(var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  for(var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }
  for(var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }
  for(var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }
  for(var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }
  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2 - 10, width/2 + 10),10,10));
  }
  for(var j = 0; j<particles.length; j++){
    particles[j].display();
  }
  
  
  
  
  //drawSprites();
}