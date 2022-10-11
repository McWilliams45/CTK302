let x = 0;
function setup() {
  createCanvas(500, 500);
}


function draw (){
 
  background(100); 

  push ();
  translate (x,0); 
   avatar (); 
   x += 5; 
   if (x > width) {
   x = -300; 
   } 
   pop ();

}
function avatar() {
 ellipse(200, 250, 50, 50) ;
  line(200, 275, 200, 350);
  line(200, 350, 180, 400) ;
  line(200, 350, 220, 400) ;
   line(150, 250, 200, 300) ;
   line(250, 250, 200, 300) ;
  
}
