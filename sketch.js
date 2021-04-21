
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground;
var dustbin,dustbin1,dustbin2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  paper = new Paper(100,100,20);
 ground = new Ground(width/2,650,width,20);


 dustbin = Bodies.rectangle(width/2,630,200,20,{isStatic : true});
	World.add(world,dustbin);

	dustbin1 = Bodies.rectangle(width/2-100,612.5,20,100,{isStatic : true});
	World.add(world,dustbin1);

	dustbin2 = Bodies.rectangle(width/2+100,612.5,20,100,{isStatic : true});
	World.add(world,dustbin2);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(keyDown("RIGHT_ARROW")){
  velocityX = 5;
  }


  rect(dustbin.position.x,dustbin.position.y,200,20);

  rect(dustbin1.position.x,dustbin1.position.y,20,100);

  rect(dustbin2.position.x,dustbin2.position.y,20,100);
  
  
  paper.display();
  ground.display();
  
 
}


function keyPressed() { 
  if (keyCode === UP_ARROW) { 
    Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-40});

  }
}