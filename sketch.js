const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rightSide;
var world;
var radius=40
var leftSideObj;
var ball;
var groundObj;
function preload()
{
	}

function setup() {
	createCanvas(1600, 700);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

    var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
	}

	ball = Bodies.circle(260,100,radius/2,ball_options);
    World.add(world,ball)

   groundObj=new Ground(width/2,670,width,20)
   leftSideObj=new Ground(1100,600,20,120)
   rightSide = new Ground(1350,600,20,120);
 Engine.run(engine)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,radius)
  leftSideObj.display()
  groundObj.display()
  rightSide.display()
//drawSprites(); 
}
function keypressed(){
if (keyCode === UP_ARROW) {

 Matter.Body.applyForce(ball,ball.position,{x:50,y:-50});
		   
		  }
			
}


