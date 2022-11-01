let cars = [] ;
let i1;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  i1 = loadImage("assets/ST.jpeg") ;

   
}

function draw() {
  background(i1);
  fill ('black');
  text(cars.length, 40,40);
  
  cars.push(new Car()); 
  
  for (let i = 0; i < cars.length ; i++){
  cars[i].display();
  cars[i].move();
    if (cars[i].opacity < 0){
      cars.splice(i,1); 
    }
  
  } 
}
class Car{
  // constructor and attributes
  constructor() {
    this.pos = createVector(mouseX, mouseY);
    this.vel = createVector(random(-.2,.2), random (-10,-10)) ;
    this.r = random(100,255);
    this.g = random (10);
    this.b = random (10);
    this.opacity = random (255); 
  } 
  
  display(){
    fill (this.r, this.g, this.b, this.opacity); 
    ellipse(this.pos.x, this.pos.y, 20,20);
  
  }
  move(){
    this.pos.add(this.vel); 
    this.opacity = this.opacity - 5;
    
  }
  
}
