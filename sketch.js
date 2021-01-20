const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var engine,world;
var backgroundImg, monster11, monster12, superhero11, superhero12;
var ground, hero, fly;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20;
var monster,monster2;
function preload() {

  backgroundImg = loadImage("GamingBackground.png")
  monster11 = loadImage("Monster-01.png")
  monster12 = loadImage("Monster-02.png")
  superhero11 = loadImage("Superhero-01.png")
  superhero12 = loadImage("Superhero-02.png")
}

function setup() {
  createCanvas(3000, 800);

 
  engine=Engine.create();
  world=engine.world;


  ground= new Ground(500, 600, 1300,30);
  hero = new Hero(-10,250,1)
  //hero = new Hero(1000,250,1)
  fly = new Fly(hero.body, {x:-10, y:250});

b1=new Blocks(400,190,40,40);
b2=new Blocks(400,590,40,40);
b3=new Blocks(500,590,40,40);
b4=new Blocks(500,590,40,40);
b5=new Blocks(500,590,40,40);
b6=new Blocks(600,590,40,40);
b7=new Blocks(600,590,40,40);
b8=new Blocks(600,590,40,40);
b9=new Blocks(600,590,40,40);
b10=new Blocks(700,590,40,40);
b11=new Blocks(800,590,40,40);
b12=new Blocks(300,590,40,40);
b13=new Blocks(300,590,40,40);
b14=new Blocks(300,590,40,40);
b15=new Blocks(300,590,40,40);
b16=new Blocks(300,590,40,40);
b17=new Blocks(300,590,40,40);
b18=new Blocks(300,590,40,40);
b19=new Blocks(300,590,40,40);
b20=new Blocks(300,590,40,40);

monster = new Monster(1000,250,1);
monster2 = new Monster2(1000,250000000000,1);
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);


  //console.log(hero.body.position.x)
if (hero.body.position.x>900){
 monster.body.position.x = 3000000000000000000;
 monster2.body.position.x = 1000;
 monster2.body.position.y = 600;
}

  ground.display();
  hero.display();
  fly.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
b13.display();
b14.display();
b15.display();
b16.display();
b17.display();
b18.display();
b19.display();
b20.display();

monster.display();
monster2.display();
}


function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}
