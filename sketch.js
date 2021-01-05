
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob (150,400,50);
	bob2 = new Bob (220,400,50);
	bob3 = new Bob (290,400,50);
	bob4 = new Bob (360,400,50);
	bob5 = new Bob (430,400,50);

log1 = new Log (290,200,400,20);

rope1 = new Rope (bob1.body,log.body,-50*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  drawSprites();
 

bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

log1.display();

rope1.display();




}



