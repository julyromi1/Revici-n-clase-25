const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,ground;
var fondo;
var canonbase;
var canonpistolita;
var torre;
var piso;
var canon;
var ball1;
var balls=[];

function preload() {
fondo=loadImage("assets/background.gif");
tower=loadImage("assets/tower.png");

 
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode (DEGREES);
  angle=15;
  var options={
    isStatic:true
  }
  piso=Bodies.rectangle(0,height-1,width*2,1,options);
  World.add(world,piso);
  torre=Bodies.rectangle(160,350,160,310,options);
  World.add(world,torre);
 
  canon=new Canon (180,110,130,100,30);
}

function draw() {
  image(fondo,0,0,width,height);
 
  Engine.update(engine);
  rect(piso.position.x,piso.position.y, 1200, 1);
  push (); //Mete una imagén (apartir de aqui va a ver un cambio pero lo anterior a esto no cambia, cuando haya un pop "cierras el ciclo").
  imageMode (CENTER);
  image(tower,torre.position.x,torre.position.y,160,310); //Para que haya una imagen/figura en la pantalla.
  pop ();
  canon.display();
  //ball1.display(); //porque se muestra el nuevo objeto con las caracteristicas que yo definí en la clase de canonBall en la parte de display.
}
function keyPressed() { 
  if (keyDown (DOWN_ARROW)) {
   var canonBall = new canonBall(canon.x, canon.y);
   canonBall.trajectory = []; 
   Matter.Body.setAngle(canonBall.body, canon.angle);
   balls.push(canonBall); 
  } 
  }

//OTRA MANERA DE PONER LA INSTRCCIÓN DE LAS FLECHAS.

//function keyReleased (){
  //if (keyDown (DOWN_ARROW )){ //O PUEDE SER "down"
    //canonBall.shoot ();
  //}
//}
/* */ //Para comentar algun código.


function keyReleased (){
  if (keyDown (DOWN_ARROW )){ //O PUEDE SER "down"
    balls[balls.length-=1].shoot ();
  }
}