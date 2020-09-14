const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon,polygonImg;
var score = 0;

function preload(){
  polygonImg = loadImage("hexagon.png");
}

function setup() {
  createCanvas(1200,600);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,585,1200,30);  
  platform1 = new Ground(540,500,250,10);

  //first pyramid
  //first row
  box1 = new Box(455,480,30,40);
  box2 = new Box(485,480,30,40);
  box3 = new Box(515,480,30,40);
  box4 = new Box(545,480,30,40);
  box5 = new Box(575,480,30,40);
  box6 = new Box(605,480,30,40);
  box7 = new Box(635,480,30,40);

  //second row
  box8  = new Box(470,440,30,40);
  box9  = new Box(500,440,30,40);
  box10 = new Box(530,440,30,40);
  box11 = new Box(560,440,30,40);
  box12 = new Box(590,440,30,40);
  box13 = new Box(620,440,30,40);

  //3rd Row
  box14 = new Box(485,400,30,40);
  box15 = new Box(515,400,30,40);
  box16 = new Box(545,400,30,40);
  box17 = new Box(575,400,30,40);
  box18 = new Box(600,400,30,40);

  //4th Row
  box19 = new Box(545,360,30,40);

  var polygon_options ={
    'restitution':0.02,
     'friction':0.5, 
     'density':1.2
    }
  polygon = Bodies.circle(200,200,40,polygon_options);
  World.add(world,polygon);
  
  slingshot = new Slingshot(this.polygon,{x:100,y:200});
  
}

function draw() {
  background(0,0,0);

  Engine.update(engine);

  ground.display();
  platform1.display();

  fill("lavender");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();

  fill("pink");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();

  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();

  fill("yellow");
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();

  fill("blue");
  box19.display();
  box19.score();


  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y, 50, 40);

  slingshot.display();

  fill("pink");
  textSize(20);
  text("Drag The Hexagonal Stone And Release It, To Launch It Towards The Blocks",300,50);
  
  fill("white");
  textSize(20);
  text("s*c*o*r*e:"+score,100,100);
  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingshot.attach(this.polygon);
  }
}