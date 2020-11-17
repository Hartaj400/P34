const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var box1, box2;
var ball;
var rope;

function setup(){
    var canvas = createCanvas(3000,700);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(1500,height,3000,20)

    ball = new Ball(200,200,50,50);

    box1 = new Box(800,320,70,70);
    box2 = new Box(800,320,70,70);
    
    box3 = new Box(800,340,70,70);
    box4 = new Box(800,360,70,70);
    box5 = new Box(800,380,70,70);
    
    box6 = new Box(900,320,70,70);
    box7 = new Box(900,320,70,70);
    
    box8 = new Box(900,340,70,70);
    box9 = new Box(900,360,70,70);
    box10 = new Box(900,380,70,70);
    box17 = new Box(900,400,70,70);
    box18 = new Box(900,420,70,70);

    box11 = new Box(1000,320,70,70);
    box12 = new Box(1000,320,70,70);
    
    box13 = new Box(1000,340,70,70);
    box14 = new Box(1000,360,70,70);
    box15 = new Box(1000,380,70,70);
    box16 = new Box(1000,400,70,70);
    
    rope = new Thread(ball.body,{x:500,y:50})
    
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    
    box4.display();
    box3.display();
    box5.display();

    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    ball.display();
    rope.display();
}