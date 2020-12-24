const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject,groundObject,dustbinObj;
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paperObject=new Paper(200,450,70);
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1200,650);

	Engine.run(engine);
 }
 function draw() {
	 rectMode(CENTER);
	 background(230);

	 paperObject.display();
	 groundObject.display();
	 dustbinObj.display();

	 Engine.update(engine);

		drawSprites();
	}
	function keyPressed() {
		if (keyCode === UP_ARROW) {
			Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
		}
	}