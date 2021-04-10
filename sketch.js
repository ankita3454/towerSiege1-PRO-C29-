const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var polygon;
var slingShot;
var stand1,ground;

function preload() 
{
polygon_img=loadImage("polygon.png");
}

function setup() 
{
createCanvas(1600,800);
engine = Engine.create();
world = engine.world;

ground = new Ground(740,410,1600,20);
stand1 = new Ground(525,300,320,10);

polygon= Bodies.circle(100,200,30)
World.add(world,polygon)

b1 = new Block(410,275,40,40);
b2 = new Block(450,275,40,40);
b3 = new Block(490,275,40,40);
b4 = new Block(530,275,40,40);
b5 = new Block(570,275,40,40);
b6 = new Block(610,275,40,40);
b7 = new Block(650,275,40,40);

b8 = new Block(450,235,40,40);
b9 = new Block(490,235,40,40);
b10 = new Block(530,235,40,40);
b11= new Block(570,235,40,40);
b12= new Block(610,235,40,40);

b13= new Block(490,195,40,40);
b14= new Block(530,195,40,40);
b15= new Block(570,195,40,40);

b16= new Block(530,155,40,40);

stand2 = new Ground(1100,200,320,10)

b17= new Block(975,175,40,40);
b18= new Block(1015,175,40,40);
b19= new Block(1055,175,40,40);
b20= new Block(1095,175,40,40);
b21= new Block(1135,175,40,40);
b22= new Block(1175,175,40,40);
b23= new Block(1215,175,40,40);
b24= new Block(1215,175,40,40);

b25 = new Block(1015,135,40,40);
b26= new Block(1055,135,40,40);
b27 = new Block(1095,135,40,40);
b28= new Block(1135,135,40,40);
b29= new Block(1175,135,40,40);

b30= new Block(1055,95,40,40);
b31= new Block(1095,95,40,40);
b32= new Block(1135,95,40,40);

b33= new Block(1095,55,40,40);


slingShot= new Slingshot(this.polygon,{x:100,y:200});

}

function draw()
{

ground.display();
stand1.display();
fill("purple")
b1.display();
fill("purple")
b2.display();
fill("purple")
b3.display();
fill("purple")
b4.display();
fill("purple")
b5.display();
fill("purple")
b6.display();
fill("purple")
b7.display();

fill("pink")
b8.display();
fill("pink")
b9.display();
fill("pink")
b10.display();
fill("pink")
b11.display();
fill("pink")
b12.display();

fill("grey")
b13.display();
b14.display();
b15.display();

fill("black")
b16.display();

stand2.display();

fill("purple")
b17.display();
b18.display();
b19.display();
b20.display();
b21.display();
b22.display();
b24.display();

fill("pink")
b25.display();
fill("pink")
b26.display();
fill("pink")
b27.display();
fill("pink")
b28.display();
fill("pink")
b29.display();

fill("grey")
b30.display();
b31.display();
b32.display();

fill("black")
b33.display();

slingShot.display();

imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);


}

function mouseDragged()
{
    Matter.Body.setPosition(this.polygon,{x: mouseX, y: mouseY})
}

function mouseReleased()
{
  slingShot.fly();
}
