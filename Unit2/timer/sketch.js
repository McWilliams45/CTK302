let timer=0;
let state=0;
let i1, i2, i3 ; 

function setup() {
  createCanvas(400,400); 
  imageMode(CENTER); 
  i1 = loadImage("assets/IMG_4511.jpg") ;
  i2 = loadImage("assets/IMG_5040.jpg") ;
  i3 = loadImage("assets/palmtrees.jpg") ;
} 

function draw() {

background(220);

switch(state) {

case 0 :
image(i1, width/ 2, height / 2 , 500, 500) ; 

for (var j=0; j < height ;j+=20) {
for (var i=0 ; i < width ;i+=20) {
  

}
} 
text("This is a picture i took outside my airbnb in Navarre, Flordia", 50, 50); 
break; 

case 1:
image(i2, width/ 2, height / 2 , 500, 500) ; 
for (var j=0 ;j < height ; j +=20) {
for (var i=0; i < width; i+=20) {

noStroke(); 
}
} 

text("This is a picture i of took of Watterson Towers.", 50, 50) ;
break; 

case 2:
image(i3, width/ 2, height / 2 , 500, 500) ; 
for (var j=0 ; j< height ; j +=20) {
for (var i=0; i < width ; i+=20) {

noStroke(); 
}
} 

text("Another pic i took in Navarre, Flordia.", 10, 10) ;
break;


} 

timer++; 
if (timer >= 2*60){
timer = 0;
state++;
if (state > 2) state= 0;;
}
 
function mouseReleased (){
state = state +1 ;
if (state > 3){
   state = 0;
 }
} 
}
