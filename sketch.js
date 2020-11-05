const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var pig1;
var log1;

function setup(){
    var canvas = createCanvas(1400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,height,width*2,20);
    box1 = new Box(700,300,70,70);
    box2 = new Box(1000,100,70,70);
    pig1 = new Pig(850,350,70,70);
    log1 = new Log(800,300,20,380,PI/2);

}


function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    console.log(pig1);
    ground.display();
    box1.display();
    box2.display();
    log1.display();
    pig1.display();
    
    
}