let i1, i2, i3, i4;
let numberOfTouches ;

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);
  
  switch(numberOfTouches) {
    case 0: 
      image("assets/PM.jpeg", width/2, height/2) ; 
      text("This is Post Malone.", 5, 22) ;  
      break ;
      
      case 1: 
       text("His first albulm- Stoney", 5, 22) ; 
       i2 = loadImage("Stoney.jpeg") ;
      break ;
      
      case 2:
      text("tHis third albulm- Hollywood's Bleeding", 5, 22) ; 
      i3 = loadImage("HBSmall.jpeg") ;
      break ;
      
      case 3:
     text("His fourth albulm- Twelve Carat Toothache", 5, 22) ; 
     i4 = loadImage("tct.jpeg") ;
      break ;
    
      
  }
  
}
