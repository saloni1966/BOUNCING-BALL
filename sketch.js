const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;


var myEngine,myWorld;
var object;

function setup() {
  createCanvas(800,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  var options = {
    restitution : 0.8
  }

  object = Bodies.rectangle(500,50,50,50,options);
  World.add(myWorld,object);

  
}

function draw() {
  background(0);  
  rect(object.position.x,object.position.y,50,50);
}