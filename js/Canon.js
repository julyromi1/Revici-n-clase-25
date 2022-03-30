class Canon {
  constructor (x,y,width,height,angle){
  this.x=x;
  this.y=y;
  this.width=width;
  this.height=height;
  this.angle=angle; //angle sirve para darle un ángulo.
  this.canon=loadImage("assets/canon.png");
  this.canonbase=loadImage("assets/cannonBase.png");
  }
  display (){  //Es una función que destinas para que lo que contenga lo muestre (no importa el nombre).
  if (keyIsDown (RIGHT_ARROW) && this.angle<70){
  this.angle+=1;
  }
  if (keyIsDown (LEFT_ARROW) && this.angle>-30){
  this.angle-=1;  
  }
  push ();
  translate(this.x,this.y);    //translada.
  rotate (this.angle);         //rota.
  image (this.canon,0,0,this.width,this.height);
  pop ();
  image (this.canonbase,70,20,200,200);
  }
  
  
  }