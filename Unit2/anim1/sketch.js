let x = 0;
let f1= ("assets/happy.otf"); 
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background (100); 
  
  textSize(128);
text("BOOOO!", x, 100); 
x+= 5;  
if (x > width){
  x = -500; 
}

}
