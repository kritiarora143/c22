const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground,ball;

var box1,ground,pig1,log1,box2,box3,box4,pig3,log3;
var box5,log4,log5;
var bird;
function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;

  box1=new Box(700,320,70,70);
  box2=new Box(920,320,70,70)
  ground=new Ground(600,height,1200,10)
  pig1=new Pig(810,350)
  log1=new Log(810,260,300,20,PI)

  box3=new Box(700,240,70,70);
  box4=new Box(920,240,70,70);
  pig3=new Pig(810,220);
  log3=new Log(810,180,300,20,PI);

  box5=new Box(810,160,70,70);
  log4=new Log(760,120,160,20,PI/7)
  log5=new Log(870,120,160,20,PI/7);

  bird=new Bird(100,100);
  /*var ground_options ={
    isStatic:true
  }

  ground=Bodies.rectangle(200,390,200,20,ground_options)
  World.add(world,ground);

//  console.log(object);
  //console.log(object.type)

  var ball_options={
    restitution:0.5
  }

  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball)*/
}

function draw() {
  background("black"); 
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig3.display();
  log3.display();
  box5.display();
  log4.display();
  log5.display();

  bird.display();
  /*
 rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 200, 50);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();*/
}