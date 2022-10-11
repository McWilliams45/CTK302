let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(500,500); 
}

function draw() {

  switch(state){
    case 0:
      background("grey"); 
      text("what do you call a fake noodle?", width /2 , height/ 2, 400, 400); 
    break ;

    case 1: 
    background("blue"); 
      text("a impasta", width/2, height/ 2); 
    break ; 
  }



timer++ ; 
if (timer > 4 * 60) {
timer = 0;
state ++ ; 
if (state> 1){
  state = 0; 
}

} 

} 