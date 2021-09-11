const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground
var rightground,rope,jointPoint,jointLink,bridge


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  ground= new Base(70,430,200,100)
  rightground= new Base(670,430,200,100)
 // rope = new YellowRope(7,{x:600,y:600})
 bridge= new Bridge(7,{x:windowWidth/2-400,y:height/2})
 jointPoint=new Base(width-250,height/2-100,40,20)
  Matter.Composite.add(bridge.body,jointPoint);
  jointLink= new Link(bridge,jointPoint);


}

function draw() {
  background(51);
  Engine.update(engine);
  ground.show();
  rightground.show();
  //rope.show();
  bridge.show();
  jointPoint.show();

}
