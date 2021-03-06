
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1 , bob2 , bob3 , bob4 , bob5 
var roof
var rope1 , rope2, rope3, rope4, rope5
var world , engine
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new Roof(width/2 , height/4 , width/7 , 20)
bobDiametere = 40
bobx= width/2
boby = height/4 + 500
bob1 = new Bob(bobx - bobDiametere*2 , boby, bobDiametere)
bob2 = new Bob(bobx - bobDiametere , boby, bobDiametere)
bob3 = new Bob(bobx , boby, bobDiametere)
bob4 = new Bob(bobx + bobDiametere , boby, bobDiametere)
bob5 = new Bob(bobx + bobDiametere*2 , boby, bobDiametere)

rope1 = new Rope(bob1.body,roof.body , -bobDiametere * 2 , 0)
rope2 = new Rope(bob2.body,roof.body , -bobDiametere * 1 , 0)
rope3 = new Rope(bob3.body,roof.body , 0, 0)
rope4 = new Rope(bob4.body,roof.body , bobDiametere *1 , 0)
rope5 = new Rope(bob5.body,roof.body , bobDiametere * 2 , 0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
 roof.display()
 rope1.display()
 rope2.display()
 rope3.display()
 rope4.display()
 rope5.display()

 bob1.display()
 bob2.display()
 bob3.display()
 bob4.display()
 bob5.display()

}
function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(bob1.body , bob1.body.position , {x:-50, y:-45})
}
}



