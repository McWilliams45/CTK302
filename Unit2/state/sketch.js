let state = 0 
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  switch (state) {
      
    case 0:
     background ('red') ;
     
     for (let j = 0 ; j < height ; j +=25) {
    for (let i = 0 ; i < width ; i+=25) {
     rect(i,j,20,20); 
    } 
  } 
    break ;
    
    
    case 1:
       background ('#03A9F4') ;
     
       for (let j = 0 ; j < height ; j +=23) {
    for (let i = 0 ; i < width ; i+=23) {
     ellipse(i,j,20,20); 
    } 
  } 
    break;
      
    case 2:
       background ('#FF5722') ;
      
       for (let j = 0 ; j < height ; j +=11) {
    for (let i = 0 ; i < width ; i+=11) {
     rect(i,j,20,20); 
    } 
  } 
    break;
    
    case 3:
       background ('#CEFF22') ;
      
       for (let j = 0 ; j < height ; j +=10) {
    for (let i = 0 ; i < width ; i+=10) {
     ellipse(i,j,20,20); 
    } 
  } 
    break;

    case 4:
       background ('#CEFF22') ;
      
       for (let j = 0 ; j < height ; j +=45) {
    for (let i = 0 ; i < width ; i+=45) {
     rect(i,j,20,20); 
    } 
  } 
    break;
      
  }
}

function mouseReleased(){
  state++;
  if (state > 4){
    state = 0;
  }

} 
