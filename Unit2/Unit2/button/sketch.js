let state = 0;


function setup() {
  createCanvas(500, 500);
  textAlign(500,500); 
}

function draw() {

  switch(state){
    case 0:
      background("grey"); 
      text("what did the fish say when he ran into the wall?", width /2 , height/ 2, 400, 400); 
    break ;

    case 1: 
    background("blue"); 
      text("dam", width/2, height/ 2); 
    break ; 
  }

  rect (100,100,100,100); 
}

function mouseReleased(){
  if (mouseX > 100 && mouseX <200 && mouseY > 100 && mouseY < 200) { 

state++ ;
if (state > 1) state = 0; 
  } 
}  