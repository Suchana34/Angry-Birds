let ground;
const boxes = [];
let bird;
let world,engine;
let mConstraint;
let slingshot;

function setup(){
  createCanvas(600, 400);
  engine= Matter.Engine.create();
  world = engine.world;
  ground = new Ground(width/2, height-10, width,20); //it is an infinite mass that never moves
  for(var i=0; i<3; i++){
    boxes[i] = new Box(450,300-i*75,50,75);
  }
  
  bird = new Bird(50,300,15);
  slingshot = new Slingshot(200,200, bird.body);

  const mouse = Matter.Mouse.create(document.body);
  var options = {
    mouse: mouse
  }
  mConstraint = Matter.MouseConstraint.create(engine, options);
  Matter.World.add(world, mConstraint);
  
}

function mouseReleased(){
  setTimeout(() => {
    slingshot.fly();
  }, 100);
}


function draw(){

  background(51);
  Matter.Engine.update(engine);
  ground.show();
  slingshot.show();
  for (let box of boxes){
    box.show();
  }
  bird.show();
  
}