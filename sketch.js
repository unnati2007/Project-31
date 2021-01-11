const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world; 
var particles = [];
var plinkos = [];
var divisions = [];
var ground;

var divisionsHeight = 150;

function setup() {
  createCanvas(800,480);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,600,1700,10);

 for(var j = 40; j<= width; j = j+50){
   plinkos.push(new Plinko(j , 75))
 }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,125))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,175))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,225))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,275))
  }
  for(var k = 0; k <=width; k = k+80){
    divisions.push(new Division(k, height-divisionsHeight/2, 10, divisionsHeight));
  }
}
function draw() {
  background("black");
  Engine.update(engine, 25);

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }
  for(var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }
  for(var k = 0; k<divisions.length;k++){
    divisions[k].display();
 }
  for(var j = 0; j<particles.length;j++){
    particles[j].display();
 }

ground.display();

  drawSprites();
}



