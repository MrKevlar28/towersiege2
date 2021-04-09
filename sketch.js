const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;

  //  polygon = Bodies.circle(50,200,20)
  //  World.add(world,polygon);
  polygon = new Polygon(50,200,20);
  slingshot = new Slingshot(polygon.body,{x : 100, y : 200});
  

  //blocks

  block8 = new Block(330,235,13,20);
  block9 = new Block(360,235,13,20);
  block10 = new Block(390,235,13,20);
  block11 = new Block(420,235,13,20);
  block12 = new Block(450,235,13,20);
  block13 = new Block(360,185,13,20);
  block14 = new Block(390,185,13,20);
  block15 = new Block(420,185,13,20);
  block16 = new Block(390,135,13,20);
  ground = new Ground(390,280,185,10);
  



  Engine.run(engine);
}

function draw() {
  background(0);  
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  slingshot.display();
  ground.display();
  polygon.display();


  drawSprites();
}

function mouseDragged(){
  // if (gameState!=="launched"){
       Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
   //}
 }
 
 
 function mouseReleased(){
   slingshot.fly();
   //gameState = "launched";
 }
 function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(polygon.body);
  }
}

 