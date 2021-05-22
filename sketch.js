const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone;
var box1,box2;
var stone,rubber;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);



stone = new Stone(700,320,70);
rubber = new Rubber(900,450,70);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

//box1.display();
//box2.display();
    plane.display();
    hammer.display();
    stone.display();

    
 
}