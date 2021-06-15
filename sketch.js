const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg;
var thor;
score = 0;
function preload() {
bag = loadImage("Bg.jpg");
bg = loadImage("Avengers.jpg");
song = loadSound("Avengers Theme Song.mp3");

}

function setup() {  

engine = Engine.create();
world = engine.world;
var canvas = createCanvas(1360,620);
Ground = new ground(10,620,10000,10);
Ground1 = new ground(100,-400,10000,10);
Ground2 = new ground(-700,10,10,1000000);
Ground3 = new ground(1000,300,300,10);
Ground4 = new ground(1360,10,10,100000);
Ground5 = new ground(1260,10,10,100);
hammer = new Hammer(250,540,165,165);
thanos = new Enemy1(1000,90);
thanos2 = new Enemy1(1000,600);
ultron = new Enemy2(1000,480);
ultron2 = new Enemy2(10,600);
slingShot = new SlingShot(hammer.body,{x:220,y:50});
}


function draw() {
    background(bag);
    Engine.update(engine);
    
    text("Score: "+score, 500,20);
    textSize(20)
    text("Press The SPACEBAR to Call The Hammer Back", 500,50);
    thanos.display();
    thanos2.display();
    ultron.display();
    ultron2.display();
    slingShot.display();
    hammer.display();
    Ground.display();
    Ground1.display();
    Ground2.display();
    Ground3.display();
    Ground4.display();
    Ground5.display();
    
    Endgame();
}

function mouseDragged(){
      Matter.Body.setPosition(hammer.body, {x: mouseX , y: mouseY});
    
}

function mouseReleased(){
    slingShot.fly();
   
}
function keyPressed(){
    if(keyCode === 32) {
      Matter.Body.setPosition(hammer.body , {x: 250 , y: 540})
      slingShot.attach(hammer.body);
    }
  } 

function Endgame() {
  if(score == 200) {
    background(bg);
    textSize(35);
    text("YOU WON", 500,400);
    song.play();
  }
}

