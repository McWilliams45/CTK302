var myState=0;
let timer=0;
let i1, i2, i3, i4, i5, i6, i7, i8, i9 ; 
let downtown;

 function preload() {
  downtown = loadSound("yay.mp3");  
}




function setup() {
  createCanvas(900,900); 
  imageMode(CENTER); 
  i1 = loadImage("assets/STONEY.jpg") ;
  i2 = loadImage("assets/BB.jpg") ;
  i3 = loadImage("assets/HB.jpg") ;
  i4 = loadImage("assets/TCT.jpg") ;
  i5 = loadImage("assets/dc.png") ;
  downtown.play() ; 

} 


function draw() {

background(250);


switch(myState) {

case 0:
image(i1, width/ 2, height / 2 , 300, 500) ; 

for (var j=0; j < height ;j+=20) {
for (var i=0 ; i < width ;i+=20) {
  
  
}
} 
textSize(29);
text("This is a Post Malone albulm print collection i have.", 50, 50); 




break; 

case 1:
image(i2, width/ 2, height / 2 , 300, 500) ; 
for (var j=0 ;j < height ; j +=20) {
for (var i=0; i < width; i+=20) {

noStroke(); 
}
} 

text("This is a Post Malone albulm print collection i have.", 50, 50) ;

break; 

case 2:
image(i3, width/ 2, height / 2 , 300, 500) ; 
for (var j=0 ; j< height ; j +=20) {
for (var i=0; i < width ; i+=20) {

noStroke(); 
}
} 

text("This is a Post Malone albulm print collection i have.", 50, 50) ;
break;




case 3:
image(i4, width/ 2, height / 2 , 300, 500) ; 
for (var j=0 ; j< height ; j +=20) {
for (var i=0; i < width ; i+=20) {

noStroke(); 
}
} 

text("This is a Post Malone albulm print collection i have.", 50, 50) ;
break;



case 4:
  image(i5, width/ 2, height / 2 , 300, 500) ; 
for (var j=0 ; j< height ; j +=20) {
for (var i=0; i < width ; i+=20) {

noStroke(); 
}
} 

text("That is all i wanted to show you guys. hehe okay bye now!",50, 50) ;
break;
}

timer++; 
if (timer >= 2*100){
timer = 0;
myState++;
if (myState > 4) myState= 0;
}
 
function mouseReleased (){
myState = myState +1 ;

if (myState > 4){
   myState = 0;
 }

 
} 
}

function mouseReleased() {
  if (downtown.isPlaying()) {
    downtown.pause() ; 
  } else {
    downtown.play() ; 
  }
}

function touchStarted() {
  getAudioContext().resume();
} 


