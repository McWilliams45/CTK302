let f1, f2 ;



function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/happy.otf") ;
  f2 = loadFont("assets/rift.otf") ;
  textAlign(CENTER); 
}

function draw() {
 background("black");
 fill("white");
textFont(f1,48);
text("hello there!",width/ 2, 100);
textFont(f2,48);
text("I am Obi Wan!",width/ 2, 100);
}
